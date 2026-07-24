"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { User, Phone, Mail, MapPin, Home, Building2, Calendar, Clock, Lock, Loader2, Check, Sun } from "lucide-react";
function sanitizeDigits(e: React.FormEvent<HTMLInputElement>, maxLen: number) {
  const target = e.target as HTMLInputElement;
  target.value = target.value.replace(/\D/g, "").slice(0, maxLen);
}

function sanitizeState(e: React.FormEvent<HTMLInputElement>) {
  const target = e.target as HTMLInputElement;
  target.value = target.value.replace(/[^a-zA-Z]/g, "").toUpperCase().slice(0, 2);
}

function captureTrackingTokens(): boolean {
  const leadidToken = document.querySelector<HTMLInputElement>(
    "#leadid_token, input[name='universal_leadid']"
  );
  const hidLeadid = document.getElementById("Hidleadid") as HTMLInputElement | null;
  const hidTrusted = document.getElementById("hidTrusted") as HTMLInputElement | null;
  const trustedToken = document.querySelector<HTMLInputElement>(
    "input[name^='xxTrustedFormCertUrl'], input[id^='xxTrustedFormCertUrl']"
  );

  let jornayaReady = false;

  if (leadidToken && hidLeadid && leadidToken.value) {
    hidLeadid.value = leadidToken.value;
    jornayaReady = true;
  }
  if (trustedToken && hidTrusted && trustedToken.value) {
    hidTrusted.value = trustedToken.value;
  }

  return jornayaReady;
}

function InputField({
  icon,
  name,
  placeholder,
  type = "text",
  required = false,
  maxLength,
  inputMode,
  onInput,
}: {
  icon: React.ReactNode;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="relative">
      <span className="text-slate-400 absolute left-3 top-1/2 -translate-y-1/2">{icon}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={maxLength}
        inputMode={inputMode}
        onInput={onInput}
        className="w-full pl-9 pr-3 h-10 rounded-lg border border-slate-300 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan focus:border-cyan"
      />
    </div>
  );
}

export default function ScheduleCallPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jornayaReady, setJornayaReady] = useState(false);
  const [formError, setFormError] = useState("");
  const [ownsSolar, setOwnsSolar] = useState<"yes" | "no" | null>(null);
  const [ownsSolarError, setOwnsSolarError] = useState(false);

  useEffect(() => {
    const poll = () => {
      const ready = captureTrackingTokens();
      if (ready) setJornayaReady(true);
    };

    poll();
    const polling = window.setInterval(poll, 500);

    if (!document.querySelector('script[src*="trustedform.js"]')) {
      const trustedFormField = "xxTrustedFormCertUrl";
      const provideReferrer = false;
      const trustedScript = document.createElement("script");
      trustedScript.type = "text/javascript";
      trustedScript.async = true;
      trustedScript.src =
        "http" +
        (document.location.protocol === "https:" ? "s" : "") +
        "://api.trustedform.com/trustedform.js?provide_referrer=" +
        encodeURIComponent(String(provideReferrer)) +
        "&field=" +
        encodeURIComponent(trustedFormField) +
        "&l=" +
        new Date().getTime() +
        Math.random();
      document.head.appendChild(trustedScript);
    }

    if (!document.getElementById("LeadiDscript_campaign")) {
      const leadidScript = document.createElement("script");
      leadidScript.id = "LeadiDscript_campaign";
      leadidScript.type = "text/javascript";
      leadidScript.async = true;
      leadidScript.src =
        "//create.lidstatic.com/campaign/372b9fce-b1fd-68e6-0d81-5286de90f4f0.js?snippet_version=2";

      const placeholder = document.getElementById("LeadiDscript");
      if (placeholder?.parentNode) {
        placeholder.parentNode.insertBefore(leadidScript, placeholder);
      } else {
        document.body.appendChild(leadidScript);
      }
    }

    return () => {
      window.clearInterval(polling);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    const readyNow = captureTrackingTokens();
    if (!jornayaReady && !readyNow) {
      setFormError("Still verifying your session — please wait a moment.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!ownsSolar) {
      setOwnsSolarError(true);
      return;
    }
    setOwnsSolarError(false);

    if (!agreed) {
      setFormError("Please agree to the privacy policy to continue.");
      return;
    }

    const phone = String(formData.get("phone") ?? "");
    const zip = String(formData.get("zip") ?? "");
    const state = String(formData.get("state") ?? "");

    if (!/^\d{10}$/.test(phone)) {
      setFormError("Phone number must be exactly 10 digits.");
      return;
    }
    if (!/^\d{5}$/.test(zip)) {
      setFormError("ZIP code must be exactly 5 digits.");
      return;
    }
    if (!/^[A-Z]{2}$/.test(state)) {
      setFormError("State must be a 2-letter abbreviation (e.g. NY, CA).");
      return;
    }
    setFormError("");
    setIsSubmitting(true);

    const hidLeadid = form.querySelector<HTMLInputElement>("#Hidleadid");
    const hidTrusted = form.querySelector<HTMLInputElement>("#hidTrusted");

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone,
      email: formData.get("email"),
      address: formData.get("address"),
      city: formData.get("city"),
      state,
      zip,
      dob: formData.get("dob"),
      hasInsurance: ownsSolar, // reused sheet column — represents "owns Solar" for solar
      preferredTime: formData.get("preferredTime"),
      jornayaId: hidLeadid?.value ?? "",
      trustedFormUrl: hidTrusted?.value ?? "",
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        console.error("Submit failed:", result.error);
        setFormError("Something went wrong. Please try again or call us directly.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setFormError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-navy px-4 py-16">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/office.jpg')" }} />
      <div className="absolute inset-0 bg-navy/70" />

      <div className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={() => router.back()}
          className="mb-4 flex items-center gap-1 text-xs font-medium text-slate-400 transition hover:text-slate-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>

        <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-5">
          <div className="flex -space-x-3">
            <span className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-slate-200">
              <Image src="/man.png" alt="" fill sizes="36px" className="object-cover" />
            </span>
            <span className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-slate-300">
              <Image src="/girl.png" alt="" fill sizes="36px" className="object-cover" />
            </span>
            <span className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-cyan">
              <Image src="/baby.png" alt="" fill sizes="36px" className="object-cover" />
            </span>
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-ink">Schedule a Call</h1>
            <p className="text-sm font-semibold text-cyan-dark">with the Solar Leads Team.</p>
          </div>
        </div>

        {submitted ? (
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-6 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan/10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-cyan-dark">
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-base font-bold text-ink">Thanks — you&apos;re all set!</p>
            <p className="mt-1.5 text-sm text-slate-600">
              We&apos;ve received your details and will get back to you shortly to confirm a time.
            </p>
            <button type="button" onClick={() => router.back()} className="btn-primary mt-5 text-sm">
              Back to site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
            <input id="leadid_token" name="universal_leadid" type="hidden" defaultValue="" />
            <input id="Hidleadid" name="Hidleadid" type="hidden" defaultValue="" />
            <input id="hidTrusted" name="hidTrusted" type="hidden" defaultValue="" />

            <div className="grid grid-cols-2 gap-3">
              <InputField icon={<User className="w-4 h-4" />} name="firstName" placeholder="First Name*" required />
              <InputField icon={<User className="w-4 h-4" />} name="lastName" placeholder="Last Name*" required />
            </div>

            <InputField
              icon={<Phone className="w-4 h-4" />}
              name="phone"
              placeholder="Phone Number* (10 digits)"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              onInput={(e) => sanitizeDigits(e, 10)}
              required
            />

            <InputField icon={<Mail className="w-4 h-4" />} name="email" placeholder="Email Address*" type="email" required />

            <InputField icon={<Sun className="w-4 h-4" />} name="address" placeholder="Street Address*" required />

            <div className="grid grid-cols-2 gap-3">
              <InputField icon={<Building2 className="w-4 h-4" />} name="city" placeholder="City*" required />
              <InputField
                icon={<MapPin className="w-4 h-4" />}
                name="state"
                placeholder="State* (e.g. NY)"
                maxLength={2}
                onInput={sanitizeState}
                required
              />
            </div>

            <InputField
              icon={<MapPin className="w-4 h-4" />}
              name="zip"
              placeholder="ZIP Code* (5 digits)"
              inputMode="numeric"
              maxLength={5}
              onInput={(e) => sanitizeDigits(e, 5)}
              required
            />

            <InputField icon={<Calendar className="w-4 h-4" />} name="dob" placeholder="Date of Birth*" type="date" required />

            <div>
              <p className="text-sm text-ink font-medium mb-2">Do you own your Solar?*</p>
              <div className="flex gap-3">
                {(["yes", "no"] as const).map((val) => (
                  <button
                    type="button"
                    key={val}
                    onClick={() => {
                      setOwnsSolar(val);
                      setOwnsSolarError(false);
                    }}
                    className={`flex-1 flex items-center justify-between px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                      ownsSolar === val ? "border-cyan bg-cyan/5 text-ink" : "border-slate-300 text-slate-600"
                    }`}
                  >
                    {val === "yes" ? "Yes" : "No"}
                    <span
                      className={`w-3.5 h-3.5 rounded-full border ${
                        ownsSolar === val ? "border-cyan bg-cyan" : "border-slate-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
              {ownsSolarError && (
                <p className="text-red-600 text-xs mt-1.5">Please let us know if you own your Solar.</p>
              )}
            </div>

            <div className="relative">
              <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <select
                name="preferredTime"
                required
                defaultValue=""
                className="w-full pl-9 pr-3 h-10 rounded-lg border border-slate-300 text-sm text-slate-600 appearance-none focus:outline-none focus:ring-1 focus:ring-cyan focus:border-cyan"
              >
                <option value="" disabled>Preferred Time to Receive a Call*</option>
                <option value="Morning (8am - 12pm)">Morning (8am - 12pm)</option>
                <option value="Afternoon (12pm - 4pm)">Afternoon (12pm - 4pm)</option>
                <option value="Evening (4pm - 8pm)">Evening (4pm - 8pm)</option>
              </select>
            </div>

            <label className="flex items-start gap-2 text-xs text-slate-500 pt-1">
              <input
                type="checkbox"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-3.5 w-3.5 rounded border-slate-300 text-cyan focus:ring-cyan"
              />
              <span>
                By submitting the form I agree with the{" "}
                <a href="/privacy-policy" className="underline text-cyan-dark">Privacy policy</a>
              </span>
            </label>

            {formError && <p className="text-red-600 text-xs -mt-1">{formError}</p>}

            <button
              type="submit"
              disabled={isSubmitting || !jornayaReady}
              className="btn-primary w-full text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : !jornayaReady ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Preparing form...
                </>
              ) : (
                <>Submit</>
              )}
            </button>

            {!jornayaReady && !isSubmitting && (
              <p className="text-center text-xs text-slate-400">
                Verifying your session — this usually only takes a second or two.
              </p>
            )}

            <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-1">
              <Lock className="w-3.5 h-3.5" /> Your information is safe and secure.
            </p>
          </form>
        )}
      </div>
      <div id="LeadiDscript" />
    </section>
  );
}
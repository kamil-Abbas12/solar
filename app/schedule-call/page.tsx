"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
        {required && <span className="text-cyan-dark"> *</span>}
      </span>
      {children}
    </label>
  );
}

export default function ScheduleCallPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed) return;
    // TODO: wire this up to your CRM / email provider / API route
    setSubmitted(true);
  }

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-navy px-4 py-16">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/office.jpg')" }}
      />
      <div className="absolute inset-0 bg-navy/70" />

      <div className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={() => router.back()}
          className="mb-4 flex items-center gap-1 text-xs font-medium text-slate-400 transition hover:text-slate-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-3.5 w-3.5"
          >
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-cyan-dark"
              >
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
            <button
              type="button"
              onClick={() => router.back()}
              className="btn-primary mt-5 text-sm"
            >
              Back to site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First name" required>
                <input
                  required
                  type="text"
                  name="firstName"
                  placeholder="John"
                  className="field-input h-10 text-sm"
                />
              </Field>
              <Field label="Last name" required>
                <input
                  required
                  type="text"
                  name="lastName"
                  placeholder="Smith"
                  className="field-input h-10 text-sm"
                />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Business Email" required>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  className="field-input h-10 text-sm"
                />
              </Field>
              <Field label="Phone Number">
                <div className="flex h-10 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 transition focus-within:border-cyan focus-within:ring-1 focus-within:ring-cyan">
                  <span className="text-xs text-slate-500">🇺🇸 ▾</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(555) 000-0000"
                    className="w-full border-0 p-0 text-sm focus:outline-none focus:ring-0"
                  />
                </div>
              </Field>
            </div>

            <Field label="Company Name" required>
              <input
                required
                type="text"
                name="companyName"
                placeholder="Acme Inc."
                className="field-input h-10 text-sm"
              />
            </Field>

            <Field label="What regions are you looking for services in?" required>
              <select required name="regions" className="field-input h-10 text-sm">
                <option value="">Select...</option>
                <option value="north-america">North America</option>
                <option value="europe">Europe</option>
                <option value="asia-pacific">Asia Pacific</option>
                <option value="global">Global</option>
              </select>
            </Field>

            <Field label="Additional Notes">
              <textarea
                name="notes"
                rows={2}
                placeholder="Tell us a bit about what you're looking for..."
                className="field-input resize-none text-sm"
              />
            </Field>

            <div className="flex flex-col items-start gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <label className="flex items-start gap-2 text-xs text-slate-500">
                <input
                  type="checkbox"
                  required
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-3.5 w-3.5 rounded border-slate-300 text-cyan focus:ring-cyan"
                />
                <span>
                  By submitting the form I agree with the{" "}
                  <a href="/privacy-policy" className="underline text-cyan-dark">
                    Privacy policy
                  </a>
                </span>
              </label>

              <button type="submit" className="btn-primary w-full text-sm sm:w-auto">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
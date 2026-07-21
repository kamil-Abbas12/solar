"use client";

import { useState } from "react";
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
    <label className="flex flex-col gap-2">
      <span className="text-sm text-slate-500">
        {label}
        {required && "*"}
      </span>
      {children}
    </label>
  );
}

export default function ScheduleCallPage() {
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

      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl sm:p-12">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex -space-x-3">
            <span className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-slate-200">
              <Image src="/man.png" alt="" fill sizes="40px" className="object-cover" />
            </span>
            <span className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-slate-300">
              <Image src="/girl.png" alt="" fill sizes="40px" className="object-cover" />
            </span>
            <span className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-cyan">
              <Image src="/baby.png" alt="" fill sizes="40px" className="object-cover" />
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-ink">Schedule a Call</h1>
            <p className="font-semibold text-cyan-dark">with the Solar Leads Team.</p>
          </div>
        </div>

        {submitted ? (
          <div className="rounded-xl bg-surface p-6 text-center">
            <p className="text-lg font-bold text-ink">Thanks — you&apos;re all set!</p>
            <p className="mt-2 text-slate-600">
              Someone from our team will reach out shortly to confirm a time.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="First name" required>
                <input
                  required
                  type="text"
                  name="firstName"
                  className="field-input"
                />
              </Field>
              <Field label="Last name" required>
                <input
                  required
                  type="text"
                  name="lastName"
                  className="field-input"
                />
              </Field>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Business Email" required>
                <input
                  required
                  type="email"
                  name="email"
                  className="field-input"
                />
              </Field>
              <Field label="Phone Number">
                <div className="flex items-center gap-2 border-b border-slate-300 pb-2">
                  <span className="text-sm text-slate-500">🇺🇸 ▾</span>
                  <input type="tel" name="phone" className="w-full border-0 p-0 text-sm focus:outline-none" />
                </div>
              </Field>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Company Name" required>
                <input
                  required
                  type="text"
                  name="companyName"
                  className="field-input"
                />
              </Field>
              <Field label="Employee size" required>
                <select required name="employeeSize" className="field-input">
                  <option value="">Select...</option>
                  <option value="1-10">1–10</option>
                  <option value="11-50">11–50</option>
                  <option value="51-200">51–200</option>
                  <option value="201-500">201–500</option>
                  <option value="500+">500+</option>
                </select>
              </Field>
            </div>

            <Field label="What regions are you looking for services in?" required>
              <select required name="regions" className="field-input">
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
                rows={3}
                className="field-input resize-none"
              />
            </Field>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <label className="flex items-start gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  required
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-cyan text-cyan focus:ring-cyan"
                />
                <span>
                  By submitting the form I agree with the{" "}
                  <a href="/privacy-policy" className="underline text-cyan-dark">
                    Privacy policy
                  </a>
                </span>
              </label>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
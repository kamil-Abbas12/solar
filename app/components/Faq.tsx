"use client";

import Link from "next/link";
import { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "How is Top Dog Leads different from buying shared or off-the-shelf lead lists?",
    answer:
      "Shared lists dilute your brand and pit you against competitors in a race to the bottom. We build 100% exclusive, custom campaigns dedicated solely to your enterprise. Every lead generated belongs exclusively to you, built through authentic engagement that positions your brand as the premier authority in your territory.",
  },
  {
    question: "How do you handle long sales cycles typical of commercial solar contracts?",
    answer:
      "Commercial energy decisions take time, which is why our approach extends beyond the initial connection. We design multi-touch nurture sequences that keep your brand top-of-mind with key stakeholders throughout their evaluation period. We don't just deliver a single touchpoint; we nurture high-value accounts until they are ready to sign.",
  },
  {
    question: "What kind of ROI or conversion rates can we expect from these campaigns?",
    answer:
      "Because we target commercial decision-makers with personalized, high-value messaging, our clients see significantly higher engagement rates than standard outbound marketing. While exact ROI depends on your average deal size and regional energy rates, commercial solar projects yield massive lifetime contract values-meaning closing just one or two extra deals per month typically delivers an exponential return on your campaign investment.",
  },
  {
    question: "What happens if we need to scale our lead volume up or down based on team capacity?",
    answer:
      "Flexibility is built into our framework. Whether you are expanding into new territories and need to aggressively ramp up volume, or your engineering team needs a brief pause to absorb incoming project loads, we can easily dial campaign volume up or down to align with your operational capacity.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              <span className="text-cyan-dark">FAQs:</span> Everything You Need to Know About Scaling Your Pipeline
            </h2>
            <div className="mt-8">
              <Link href="/industries" className="btn-outline-dark">
                Discover How We Help Companies Across Industries
              </Link>
            </div>
          </div>

          <div className="flex flex-col divide-y divide-slate-200">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="py-5">
                  <button
                    className="flex w-full items-start gap-4 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white shadow-sm">
                      <Plus className="h-4 w-4 text-cyan" />
                    </span>
                    <span className="flex-1 text-lg font-bold text-ink">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`mt-1 h-5 w-5 shrink-0 text-ink transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 pl-12 text-slate-600 md:pl-14">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
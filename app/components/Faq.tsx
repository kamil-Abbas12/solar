"use client";

import Link from "next/link";
import { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "How can energy and solar companies generate high-quality leads?",
    answer:
      "By combining targeted outreach, industry-specific messaging, and a multi-channel strategy that reaches decision makers where they already spend their time, from cold calling to email to LinkedIn.",
  },
  {
    question: "What types of leads can you help us generate in the energy industry?",
    answer:
      "We help generate leads across commercial solar, renewable energy, EPCs, and clean-tech providers, focused on companies that are ready to invest in energy solutions.",
  },
  {
    question: "What are the best digital marketing channels for solar leads?",
    answer:
      "Cold email, cold calling, LinkedIn outreach, and targeted list building tend to perform best when paired with messaging tailored to the solar buyer's journey.",
  },
  {
    question: "Do you offer lead generation services for other industries besides energy & solar?",
    answer:
      "Yes, we work across SaaS, manufacturing, healthcare, and more. Our process adapts to the specific challenges and buyers of each industry.",
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
              <span className="text-cyan-dark">FAQs:</span> Lead Generation for
              Solar Companies
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
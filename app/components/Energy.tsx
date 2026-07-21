import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const CHALLENGES = [
  "Standing out in an increasingly competitive market",
  "Making an impact with key decision makers in the energy sector",
  "Tapping into a highly regulated market and technical industry",
  "Creating standout messaging that highlights your competitive energy solutions",
];

export default function Energy() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              Turning Energy  <span className="text-cyan-dark">Industry Obstacles into Strategic </span>{" "}
              Advantages
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
             Navigating commercial solar acquisition requires precision, depth, and proven frameworks. Top Dog Leads combines deep sector expertise with targeted outreach strategy to dismantle common industry challenges. We elevate your brand above the noise, empowering your sales team with a steady pipeline of decision-maker meetings built to scale your business predictably.
            </p>
            <div className="mt-8">
              <Link href="/schedule-call" className="btn-outline-dark">
Supercharge Your Deal Flow with Targeted Outreach
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-surface p-6 sm:p-8">
            <p className="mb-5 text-base font-medium text-ink">
Are These Sales Friction Points Bottlenecking Your Pipeline?
            </p>
            <ul className="flex flex-col gap-4">
              {CHALLENGES.map((challenge) => (
                <li
                  key={challenge}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                  <span className="font-semibold text-ink">{challenge}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-bold text-cyan-dark">
              You&apos;re not alone, and we can help!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
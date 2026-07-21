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
              We Tackle <span className="text-cyan-dark">Energy Industry Challenges</span>{" "}
              Head-On
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              As an experienced, award-winning solar lead generation company,
              we don&apos;t shy away from energy sector sales challenges. When
              you work with SunForge Leads, we help you overcome the hurdles
              of energy marketing and pull ahead with more growth
              opportunities for your solar energy business.
            </p>
            <div className="mt-8">
              <Link href="/schedule-call" className="btn-outline-dark">
                Contact Our Award-Winning Solar Lead Generation Company
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-surface p-6 sm:p-8">
            <p className="mb-5 text-base font-medium text-ink">
              Does your energy company struggle with:
            </p>
            <ul className="flex flex-col gap-4">
              {CHALLENGES.map((challenge) => (
                <li
                  key={challenge}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan" />
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

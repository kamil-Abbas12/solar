import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Lead() {
  return (
    <section id="benefits" className="bg-surface scroll-mt-24">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-20 md:grid-cols-2 md:items-start md:py-28">
        <div>
          <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft">
            <Sparkles className="h-5 w-5 text-brand" />
          </div>

          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
            Sustainable Power. Effortless Savings.
          </h2>

          <div className="mt-8">
            <Link href="/schedule-call" className="btn-outline-dark">
              Book A Call Today
            </Link>
          </div>
        </div>

        <p className="text-xl leading-relaxed text-muted">
          Modern energy must be clean, resilient, and highly profitable. By upgrading to custom, high-efficiency solar, you instantly lock in predictable energy rates and slash carbon emissions with zero disruption to your daily routine. Gain total energy independence, eliminate utility volatility, and secure compounding monthly savings, driven by an intelligent system engineered for flawless, hands-off performance.
        </p>
      </div>
    </section>
  );
}

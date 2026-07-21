import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Lead() {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-20 md:grid-cols-2 md:items-start md:py-28">
        <div>
          <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-cyan">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
            What is Solar Lead Generation?
          </h2>
          <div className="mt-8">
            <Link href="/schedule-call" className="btn-outline-dark">
              Book A Call Today
            </Link>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-slate-600">
          Like any lead generation service, the goal of solar lead generation
          is to identify and attract potential customers interested in solar
          energy services. It&apos;s a multi-step process that involves
          identifying potential solar power customers, nurturing them through
          the conversion funnel, and ultimately turning them into paying
          clients. Lead generation for solar companies requires a targeted
          approach and industry-specific expertise. At SunForge Leads, our
          team of{" "}
          <Link href="/services/appointment-setting" className="text-cyan-dark underline">
            highly trained SDRs
          </Link>{" "}
          can help your sales team{" "}
          <Link href="/schedule-call" className="text-cyan-dark underline">
            book more appointments
          </Link>{" "}
          with qualified energy industry leads.
        </p>
      </div>
    </section>
  );
}

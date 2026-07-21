import Link from "next/link";
import Image from "next/image";
import { Filter } from "lucide-react";

export default function Funnel() {
  return (
    <section className="bg-white px-6 py-16 md:py-20">
      <div className="relative mx-auto max-w-content overflow-hidden rounded-3xl bg-surface">
        <div className="grid md:grid-cols-2">
          {/* Left: copy */}
          <div className="flex flex-col justify-center px-8 py-14 sm:px-12">
            <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              Ready to <span className="underline decoration-cyan decoration-4">improve</span>{" "}
              your sales funnel?
            </h2>
            <p className="mt-5 max-w-md text-lg text-slate-600">
              Trust our top-rated SDR agency to help you find and close
              qualified leads—quickly and cost-effectively.
            </p>
            <div className="mt-8">
              <Link
                href="/schedule-call"
                className="inline-flex items-center justify-center rounded-full bg-navy px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-light"
              >
                Schedule a Call
              </Link>
            </div>
          </div>

          {/* Right: image + decorative panels */}
          <div className="relative min-h-105 overflow-hidden bg-navy-dark md:min-h-120">
            {/* Diagonal cyan block, bottom-right */}
            <div
              className="absolute inset-0 bg-cyan"
              style={{
                clipPath: "polygon(100% 45%, 100% 100%, 0 100%, 0 65%)",
              }}
            />

            {/* Dot grid decoration */}
            <div className="absolute right-6 top-8 grid grid-cols-5 gap-2 opacity-60">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-cyan" />
              ))}
            </div>

            {/* Icon badge */}
            <div className="absolute left-8 top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
              <Filter className="h-6 w-6 text-cyan" />
            </div>

            {/* Full-body photo, anchored to bottom so head/feet aren't cropped */}
            <div className="absolute inset-x-0 bottom-0 mx-auto h-full w-full max-w-95">
              <Image
                src="/schedule-call.webp"
                alt="SDR team member"
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
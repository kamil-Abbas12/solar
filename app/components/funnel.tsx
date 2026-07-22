import Link from "next/link";
import Image from "next/image";
import { Filter } from "lucide-react";

export default function Funnel() {
  return (
    <section id="cta" className="bg-background px-6 py-16 md:py-20 scroll-mt-24">
      <div className="relative mx-auto max-w-content overflow-hidden rounded-[2rem] border border-line bg-surface">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-14 sm:px-12">
            <h2 className="text-center text-3xl font-extrabold leading-tight text-ink sm:text-4xl xl:text-4xl">
              The most profitable energy strategy isn&apos;t finding cheaper power; it&apos;s generating your own.
            </h2>

            <div className="mt-8 flex justify-center">
              <Link
                href="/schedule-call"
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-brand px-7 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-brand-dark"
              >
                Schedule a Call
              </Link>
            </div>
          </div>

          <div className="relative min-h-[26rem] overflow-hidden bg-brand-dark md:min-h-[30rem]">
            <div
              className="absolute inset-0 bg-accent"
              style={{
                clipPath: "polygon(100% 45%, 100% 100%, 0 100%, 0 65%)",
              }}
            />

            <div className="absolute right-6 top-8 grid grid-cols-5 gap-2 opacity-60">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/60" />
              ))}
            </div>

            <div className="absolute left-8 top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
              <Filter className="h-6 w-6 text-accent" />
            </div>

            <div className="absolute inset-x-0 bottom-0 mx-auto h-full w-full max-w-[380px]">
              <Image
                src="/solar-call.png"
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

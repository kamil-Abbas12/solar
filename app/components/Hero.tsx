import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="relative mx-auto grid max-w-content items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-8 md:py-24 lg:py-28">
        {/* Left: copy */}
        <div className="relative z-10">
          <p className="mb-6 text-sm font-semibold text-cyan">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/industries" className="hover:underline">
              Industries Served
            </Link>{" "}
            / Energy &amp; Solar
          </p>

          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Fuel Your Growth With Expert{" "}
            <span className="text-cyan">Solar Lead Generation Solutions</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">
            Standing out in the solar and renewable energy industry is tough. At
            SunForge Leads, we help commercial energy companies gain a
            competitive edge by tailoring engaging outreach messaging that
            resonates with key decision makers. Power up your solar lead
            generation strategy by partnering with our #1 solar marketing
            agency.
          </p>

          <div className="mt-8 md:mt-10">
            <Link href="/schedule-call" className="btn-outline">
              Get More Sales-Ready Solar Leads
            </Link>
          </div>
        </div>

        {/* Right: solar farm photo */}
        <div className="relative order-first h-64 w-full overflow-hidden rounded-2xl sm:h-80 md:order-last md:h-96 lg:h-[440px]">
          <Image
            src="/solar.png"
            alt="Engineers inspecting a commercial solar panel installation"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent md:bg-gradient-to-r md:from-navy/30 md:via-transparent md:to-transparent" />
        </div>
      </div>
    </section>
  );
}
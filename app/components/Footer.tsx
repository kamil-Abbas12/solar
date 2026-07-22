import Link from "next/link";
import Image from "next/image";

const MENU = [
  { label: "Home", href: "#hero" },
  { label: "Benefits", href: "#benefits" },
  { label: "Challenges", href: "#challenges" },
  { label: "FAQs", href: "#faqs" },
  { label: "Strategy", href: "#cta" },
  { label: "Book a Call", href: "/schedule-call" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];




function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8.25h4.5V23H.24Zm7.5 0h4.31v2.02h.06c.6-1.13 2.06-2.33 4.25-2.33 4.55 0 5.39 3 5.39 6.9V23h-4.5v-6.28c0-1.5-.03-3.42-2.08-3.42-2.09 0-2.41 1.63-2.41 3.31V23h-4.5Z" />
    </svg>
  );
}
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-content px-6 pb-14 pt-12">
        <div className="flex flex-col gap-10 border-t border-white/10 pt-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/logo.png"
              alt="Solar Lead Generation Agency"
              width={150}
              height={48}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-5 text-sm leading-6 text-white/70">
Powering your pipeline with pre-qualified commercial solar leads.            </p>

            <ul className="mt-6 flex flex-col gap-3 text-sm text-white/70">
              {LEGAL.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-80">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-bold">Landing Page</h3>
              <Link
                href="/schedule-call"
                className="rounded-full border-2 border-accent px-4 py-1.5 text-xs font-bold text-white transition hover:bg-accent hover:text-ink"
              >
                Let&apos;s Talk
              </Link>
            </div>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-white/70">
              {MENU.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-4 text-accent">
                 <Link
              href="https://www.facebook.com/TopDogLeadsLLC"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Top Dog Leads on Facebook"
              className="text-blue-500/80 hover:text-white transition"
            >
              <FacebookIcon className="h-5 w-5" aria-hidden="true" />
            </Link>

            <Link
              href="https://www.instagram.com/top.dogleadsllc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Top Dog Leads on Instagram"
              className="text-pink-500/80 hover:text-white transition"
            >
              <InstagramIcon className="h-5 w-5" aria-hidden="true" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/top-dog-leads-llc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Top Dog Leads on LinkedIn"
              className="text-blue-500/80 hover:text-white transition"
            >
              <LinkedinIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-brand-dark">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-5 text-sm text-white/70 md:flex-row">
          <p>© {new Date().getFullYear()} Solar. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition hover:text-accent">
              Privacy Policy
            </Link>

            <span className="text-white/30">|</span>

            <Link href="/terms-of-use" className="transition hover:text-accent">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

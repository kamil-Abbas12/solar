import Link from "next/link";
import Image from "next/image";

const MENU = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Packages", href: "/packages" },
  { label: "About Us", href: "/about" },
  { label: "Industries Served", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQs", href: "/faqs" },
];

const LEGAL = [
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];

// lucide-react removed all brand/logo icons in 1.0 (Twitter, Youtube, Linkedin, etc.
// are no longer exported), so these are simple inline SVG replacements.
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.5v-7l6.2 3.5Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8.25h4.5V23H.24Zm7.5 0h4.31v2.02h.06c.6-1.13 2.06-2.33 4.25-2.33 4.55 0 5.39 3 5.39 6.9V23h-4.5v-6.28c0-1.5-.03-3.42-2.08-3.42-2.09 0-2.41 1.63-2.41 3.31V23h-4.5Z" />
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
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-content px-6 pb-14 pt-12">
        <div className="flex flex-col gap-10 border-t border-white/10 pt-10 md:flex-row md:items-start md:justify-between">
          {/* Logo + legal links */}
          <div>
            <Image
              src="/logo.png"
              alt="Solar Lead Generation Agency"
              width={150}
              height={48}
              className="h-10 w-auto object-contain"
            />
            <ul className="mt-6 flex flex-col gap-3 text-sm text-white/70">
              {LEGAL.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-cyan">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu + CTA + social */}
          <div className="md:w-72">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-bold">Menu</h3>
              <Link
                href="/schedule-call"
                className="rounded-full border-2 border-cyan px-4 py-1.5 text-xs font-bold text-white hover:bg-cyan"
              >
                Let&apos;s Talk!
              </Link>
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-white/70">
              {MENU.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-cyan">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-4 text-cyan">
              <Link href="https://x.com" aria-label="X">
                <XIcon className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube">
                <YoutubeIcon className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-navy py-5 text-center text-sm text-white/70">
        ©{new Date().getFullYear()} Solar
      </div>
    </footer>
  );
}
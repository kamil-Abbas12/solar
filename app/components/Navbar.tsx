"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Benefits", href: "#benefits" },
  { label: "Challenges", href: "#challenges" },
  { label: "FAQs", href: "#faqs" },
  { label: "Strategy", href: "#cta" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="SunForge Leads"
            width={220}
            height={80}
            className="h-16 w-auto object-contain lg:h-20"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted transition hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/schedule-call" className="btn-primary">
            Schedule Call
          </Link>
        </div>

        <button
          className="text-ink lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-line bg-background px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted transition hover:text-brand"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2">
              <Link
                href="/schedule-call"
                className="btn-primary w-full text-center"
                onClick={() => setMobileOpen(false)}
              >
                Schedule Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

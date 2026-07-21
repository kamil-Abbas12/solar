"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};



export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-navy-dark via-navy-light to-navy-dark">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="SunForge Leads"
            width={220}
            height={80}
            className="h-16 w-auto object-contain lg:h-20"
            priority
          />
        </Link>

        {/* Desktop nav */}
       

        {/* CTA */}
        <div className="hidden lg:block">
          <Link href="/schedule-call" className="btn-primary">
            Schedule Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy-dark px-6 py-4 lg:hidden">
       \
        </div>
      )}
    </header>
  );
}
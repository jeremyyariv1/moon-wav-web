"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/90 backdrop-blur-md border-b border-brand-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/creator" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center shadow-lg shadow-brand-primary/30">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="6" width="2" height="6" rx="1" fill="white" opacity="0.7" />
              <rect x="4" y="3" width="2" height="9" rx="1" fill="white" />
              <rect x="7" y="1" width="2" height="12" rx="1" fill="white" />
              <rect x="10" y="4" width="2" height="7" rx="1" fill="white" />
              <rect x="13" y="6" width="1" height="5" rx="0.5" fill="white" opacity="0.7" />
            </svg>
          </div>
          <span
            className="text-white font-semibold italic text-[15px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            moonwav
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "How it works", href: "#how-it-works" },
            { label: "Features", href: "#features" },
            { label: "For Creators", href: "#creators" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-brand-subtle hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#creators"
          className="text-sm font-medium px-4 py-2 rounded-full bg-brand-primary hover:bg-brand-light transition-colors text-white shadow-lg shadow-brand-primary/25"
        >
          Apply for access
        </a>
      </nav>
    </header>
  );
}

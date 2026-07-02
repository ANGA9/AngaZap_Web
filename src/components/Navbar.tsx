"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Ride", href: "/ride" },
  { label: "City to City", href: "/city-to-city" },
  { label: "Fleet & Delivery", href: "/fleet-business" },
  { label: "Safety", href: "/safety" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Wordmark */}
          <Link href="/" className="flex-shrink-0">
            <span
              className="text-2xl lg:text-3xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--indigo)" }}
            >
              AngaZip
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-[var(--indigo)]"
                style={{ color: "var(--near-black)", fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="#download"
              className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: "var(--indigo)", fontFamily: "var(--font-body)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--indigo-deep)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--indigo)")}
            >
              Get the App
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-[var(--near-black)] transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[3px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[var(--near-black)] mt-1 transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[var(--near-black)] mt-1 transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-80 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 bg-white space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 px-4 text-sm font-medium rounded-lg hover:bg-[var(--indigo-tint)] transition-colors"
              style={{ color: "var(--near-black)", fontFamily: "var(--font-body)" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#download"
            className="block mt-3 text-center px-6 py-3 rounded-full text-sm font-semibold text-white sm:hidden"
            style={{ backgroundColor: "var(--indigo)" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Get the App
          </Link>
        </div>
      </div>
    </nav>
  );
}

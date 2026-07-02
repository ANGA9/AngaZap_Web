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
    <nav className="navbar">
      <div className="container">
        {/* Wordmark */}
        <Link href="/" className="navbar-brand">
          AngaZip
        </Link>

        {/* Desktop Nav Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="navbar-actions">
          <Link href="#download" className="btn-primary" style={{ display: "none" }} id="desktop-cta">
            Get the App
          </Link>
          <style>{`
            @media (min-width: 640px) { #desktop-cta { display: inline-flex !important; } }
          `}</style>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#download"
          className="btn-primary"
          style={{ width: "100%", marginTop: "12px", display: "inline-flex" }}
          id="mobile-cta"
          onClick={() => setMobileMenuOpen(false)}
        >
          Get the App
        </Link>
        <style>{`
          @media (min-width: 640px) { #mobile-cta { display: none !important; } }
        `}</style>
      </div>
    </nav>
  );
}

import Link from "next/link";

const footerColumns = [
  {
    title: "Why AngaZip",
    links: [
      { label: "Fair Pricing", href: "#" },
      { label: "Safety", href: "/safety" },
      { label: "Live Tracking", href: "#" },
      { label: "Cities", href: "#" },
    ],
  },
  {
    title: "Earn with AngaZip",
    links: [
      { label: "Drive a Cab", href: "/ride" },
      { label: "Ride a Bike Taxi", href: "/ride" },
      { label: "Deliver as Courier", href: "/fleet-business" },
      { label: "Join a Fleet", href: "/fleet-business" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "Newsroom", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/support" },
      { label: "Report an Issue", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--indigo-tint)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Top — Wordmark + Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Wordmark Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
            <Link href="/">
              <span
                className="text-2xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-heading)", color: "var(--indigo)" }}
              >
                AngaZip
              </span>
            </Link>
            <p
              className="mt-4 text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--muted-grey)", fontFamily: "var(--font-body)" }}
            >
              One app for rides, deliveries, and business fleets. Fair fares, verified partners, live tracking.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {/* Twitter/X */}
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:shadow-md transition-shadow" aria-label="Twitter">
                <svg className="w-4 h-4" style={{ color: "var(--indigo)" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:shadow-md transition-shadow" aria-label="Instagram">
                <svg className="w-4 h-4" style={{ color: "var(--indigo)" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:shadow-md transition-shadow" aria-label="LinkedIn">
                <svg className="w-4 h-4" style={{ color: "var(--indigo)" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4
                className="text-sm font-bold mb-4"
                style={{ fontFamily: "var(--font-heading)", color: "var(--near-black)" }}
              >
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-[var(--indigo)]"
                      style={{ color: "var(--muted-grey)", fontFamily: "var(--font-body)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-14 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p
              className="text-xs"
              style={{ color: "var(--muted-grey)", fontFamily: "var(--font-body)" }}
            >
              © {new Date().getFullYear()} AngaZip Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-xs hover:text-[var(--indigo)] transition-colors" style={{ color: "var(--muted-grey)", fontFamily: "var(--font-body)" }}>
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs hover:text-[var(--indigo)] transition-colors" style={{ color: "var(--muted-grey)", fontFamily: "var(--font-body)" }}>
                Terms of Service
              </Link>
              <Link href="#" className="text-xs hover:text-[var(--indigo)] transition-colors" style={{ color: "var(--muted-grey)", fontFamily: "var(--font-body)" }}>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

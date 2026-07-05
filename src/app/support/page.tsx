import { Package, Car, User, Smartphone } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import AppDownloadCTA from "@/components/AppDownloadCTA";

export default function SupportHubPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Full-bleed Photo Hero */}
        <section className="hero-section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <Image 
              src="/images/photo_city_rides.png"
              alt="Riksho Help Center"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.4))" }} />
          </div>
          
          <div className="container relative z-10" style={{ color: "white", textAlign: "center" }}>
            <h1 className="font-display animate-fade-in-up" style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: "16px", color: "white" }}>
              How can we help?
            </h1>
            <p className="animate-fade-in-up" style={{ fontSize: "1.125rem", maxWidth: "600px", opacity: 0.9, animationDelay: "0.1s", margin: "0 auto" }}>
              Find answers, troubleshoot issues, or get in touch with our team.
            </p>
          </div>
        </section>

        {/* Support Categories Grid */}
        <section className="section bg-light">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Knowledge Base</span>
              <h2 className="font-display" style={{ fontSize: "36px" }}>Browse by Topic</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "60px" }}>
              
              {/* Passengers */}
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "20px", marginBottom: "20px" }}><User size={24} strokeWidth={2} /></div>
                <h4 className="font-display" style={{ fontSize: "24px", marginBottom: "8px" }}>Passengers</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6", marginBottom: "24px", flexGrow: 1 }}>Get help with rides, payment methods, receipts, and account settings.</p>
                <Link href="#" style={{ color: "var(--color-indigo)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "8px" }}>View Articles →</Link>
              </div>

              {/* Drivers */}
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "20px", marginBottom: "20px" }}><Car size={24} strokeWidth={2} /></div>
                <h4 className="font-display" style={{ fontSize: "24px", marginBottom: "8px" }}>Drivers</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6", marginBottom: "24px", flexGrow: 1 }}>Resources for payouts, vehicle requirements, ratings, and driver safety.</p>
                <Link href="#" style={{ color: "var(--color-indigo)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "8px" }}>View Articles →</Link>
              </div>

              {/* Couriers */}
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "20px", marginBottom: "20px" }}><Package size={24} strokeWidth={2} /></div>
                <h4 className="font-display" style={{ fontSize: "24px", marginBottom: "8px" }}>Couriers & Fleets</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6", marginBottom: "24px", flexGrow: 1 }}>Assistance with package delivery, fleet management, and logistics.</p>
                <Link href="#" style={{ color: "var(--color-indigo)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "8px" }}>View Articles →</Link>
              </div>

              {/* App Issues */}
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "20px", marginBottom: "20px" }}><Smartphone size={24} strokeWidth={2} /></div>
                <h4 className="font-display" style={{ fontSize: "24px", marginBottom: "8px" }}>App Troubleshooting</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6", marginBottom: "24px", flexGrow: 1 }}>Fix GPS issues, login problems, crashes, and other technical glitches.</p>
                <Link href="#" style={{ color: "var(--color-indigo)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "8px" }}>View Articles →</Link>
              </div>

            </div>
          </div>
        </section>

        {/* Global FAQ Section */}
        <FAQSection />

        {/* Contact Section */}
        <section className="section">
          <div className="container">
            <div style={{ background: "white", border: "2px solid var(--color-indigo)", borderRadius: "var(--radius-lg)", padding: "48px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "32px", boxShadow: "var(--shadow-card)" }}>
              <div style={{ flex: "1 1 400px" }}>
                <h3 className="font-display" style={{ fontSize: "32px", marginBottom: "16px", color: "var(--color-indigo)" }}>Still need help?</h3>
                <p className="text-muted" style={{ fontSize: "18px", marginBottom: 0 }}>
                  Our support team is available 24/7. Reach out via live chat or submit a detailed ticket.
                </p>
              </div>
              <div>
                <Link href="/contact" className="btn-primary" style={{ backgroundColor: "var(--color-indigo)", color: "white", padding: "16px 32px", fontSize: "16px", fontWeight: 600, border: "none" }}>
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </section>

        <AppDownloadCTA />
      </main>
      <Footer />
    </>
  );
}

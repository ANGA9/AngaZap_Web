import { Handshake, Target, TrendingUp, File, Star } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import AppDownloadCTA from "@/components/AppDownloadCTA";

export default function AboutHubPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Full-bleed Photo Hero */}
        <section className="hero-section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <Image 
              src="/images/photo_freight.png"
              alt="About Riksho"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.4))" }} />
          </div>
          
          <div className="container relative z-10" style={{ color: "white", textAlign: "center" }}>
            <h1 className="font-display animate-fade-in-up" style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: "16px", color: "white" }}>
              Reimagining mobility
            </h1>
            <p className="animate-fade-in-up" style={{ fontSize: "1.125rem", maxWidth: "600px", opacity: 0.9, animationDelay: "0.1s", margin: "0 auto" }}>
              We are a technology company connecting people, businesses, and cities.
            </p>
          </div>
        </section>

        {/* Core Mission */}
        <section className="section bg-light" id="mission">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Our Mission</span>
              <h2 className="font-display" style={{ fontSize: "36px" }}>Moving the world forward</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "60px" }}>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>1</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Empower Partners</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>We build technology that enables micro-entrepreneurs to thrive with fair earnings and flexibility.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>2</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Reliable Access</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>We provide safe, affordable, and accessible transportation to everyone, everywhere.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>3</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Sustainable Future</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>We are committed to reducing our carbon footprint by accelerating the transition to electric vehicles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investors Section */}
        <section className="section" id="investors">
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px" }}>
              <div style={{ flex: "1 1 400px" }}>
                <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>For Investors</span>
                <h2 className="font-display" style={{ fontSize: "36px", marginBottom: "24px" }}>Fueling sustainable growth</h2>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "24px" }}>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}><TrendingUp size={20} strokeWidth={2} style={{ color: "var(--color-indigo)", marginRight: "8px" }} /> Financial Highlights</h4>
                    <p className="text-muted">Consistent quarter-over-quarter growth in GMV and gross margins across all operational territories.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}><File size={20} strokeWidth={2} style={{ color: "var(--color-indigo)", marginRight: "8px" }} /> Quarterly Reports</h4>
                    <p className="text-muted">Access our latest earnings releases, SEC filings, and shareholder letters directly from our investor portal.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}><Target size={20} strokeWidth={2} style={{ color: "var(--color-indigo)", marginRight: "8px" }} /> Strategic Vision</h4>
                    <p className="text-muted">Learn about our upcoming expansions into tier 2 cities and our aggressive push into the logistics and freight market.</p>
                  </li>
                </ul>
              </div>
              <div style={{ flex: "1 1 400px", position: "relative", height: "400px", backgroundColor: "#f9fafb", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)" }}>
                <Image src="/images/ill_business.png" alt="Investors Info" fill style={{ objectFit: "contain", padding: "40px" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Driver Stories */}
        <section className="section bg-light" id="driver-stories">
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px", flexDirection: "row-reverse" }}>
              <div style={{ flex: "1 1 400px" }}>
                <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Our People</span>
                <h2 className="font-display" style={{ fontSize: "36px", marginBottom: "24px" }}>Driver Stories</h2>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "24px" }}>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}><MessageSquare size={20} strokeWidth={2} style={{ color: "var(--color-indigo)", marginRight: "8px" }} /> Voices from the road</h4>
                    <p className="text-muted">Read inspiring stories from the partners who keep our cities moving every single day.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}><Star size={20} strokeWidth={2} style={{ color: "var(--color-indigo)", marginRight: "8px" }} /> Partner Spotlights</h4>
                    <p className="text-muted">Every month we highlight top-rated drivers who have gone above and beyond for their passengers.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}><Handshake size={20} strokeWidth={2} style={{ color: "var(--color-indigo)", marginRight: "8px" }} /> Community Building</h4>
                    <p className="text-muted">Discover how driving with Riksho has helped partners fund education, buy homes, and build businesses.</p>
                  </li>
                </ul>
              </div>
              <div style={{ flex: "1 1 400px", position: "relative", height: "400px", backgroundColor: "white", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)" }}>
                <Image src="/images/photo_drive_cab.png" alt="Driver Stories" fill style={{ objectFit: "cover", borderRadius: "var(--radius-lg)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* App Download CTA */}
        <AppDownloadCTA />
      </main>
      <Footer />
    </>
  );
}

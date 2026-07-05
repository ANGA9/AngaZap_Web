import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import AppDownloadCTA from "@/components/AppDownloadCTA";

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Full-bleed Photo Hero */}
        <section className="hero-section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <Image 
              src="/images/photo_freight.png"
              alt="Sustainability at Riksho"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.4))" }} />
          </div>
          
          <div className="container relative z-10" style={{ color: "white" }}>
            <h1 className="font-display animate-fade-in-up" style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: "16px", color: "white" }}>
              Our Green Commitment
            </h1>
            <p className="animate-fade-in-up" style={{ fontSize: "1.125rem", maxWidth: "600px", opacity: 0.9, animationDelay: "0.1s" }}>
              Driving the transition to zero-emission mobility for a cleaner, healthier planet.
            </p>
          </div>
        </section>

        {/* Features in Boxes & Illustration */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Sustainability</span>
              <h2 className="font-display" style={{ fontSize: "36px" }}>Greener cities for everyone</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "60px" }}>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>⚡</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>The EV Transition</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>We are aggressively subsidizing electric vehicles for our partners to phase out combustion engines.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>🌲</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Carbon Offsetting</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>For rides not yet on EVs, we invest in verified carbon offset programs like reforestation and renewable energy.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>♻️</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Shared Rides</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Promoting carpooling and shared auto routes to reduce traffic congestion and per-passenger emissions.</p>
              </div>
            </div>
            
            {/* Illustration Graphic */}
            <div style={{ position: "relative", width: "100%", height: "400px", margin: "0 auto", backgroundColor: "#f9fafb", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--admin-border)" }}>
              <Image 
                src="/images/ill_business.png"
                alt="Sustainability illustration"
                fill
                style={{ objectFit: "contain", padding: "40px" }}
              />
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

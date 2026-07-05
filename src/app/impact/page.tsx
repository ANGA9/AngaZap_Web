import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";
import AppDownloadCTA from "@/components/AppDownloadCTA";

export default function ImpactHubPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Full-bleed Photo Hero */}
        <section className="hero-section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <Image 
              src="/images/photo_freight.png"
              alt="Community impact"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.4))" }} />
          </div>
          
          <div className="container relative z-10" style={{ color: "white", textAlign: "center" }}>
            <h1 className="font-display animate-fade-in-up" style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: "16px", color: "white" }}>
              Driving economic empowerment
            </h1>
            <p className="animate-fade-in-up" style={{ fontSize: "1.125rem", maxWidth: "600px", opacity: 0.9, animationDelay: "0.1s", margin: "0 auto" }}>
              How Riksho is transforming livelihoods and communities for thousands of partners.
            </p>
          </div>
        </section>

        {/* Core Impact */}
        <section className="section bg-light" id="core-impact">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Our Mission</span>
              <h2 className="font-display" style={{ fontSize: "36px" }}>Beyond transportation</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "60px" }}>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>1</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Fair Earnings</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>We enforce zero-commission policies on key routes and ensure maximum take-home pay for partners.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>2</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Financial Inclusion</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Through our platform, thousands of previously unbanked individuals gain access to digital finance.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>3</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Sustainable Cities</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>We are aggressively transitioning our fleet to EVs to reduce emissions and urban congestion.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Initiatives */}
        <section className="section" id="initiatives">
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px" }}>
              <div style={{ flex: "1 1 400px" }}>
                <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Social Good</span>
                <h2 className="font-display" style={{ fontSize: "36px", marginBottom: "24px" }}>Investing in people</h2>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "24px" }}>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>🎓 Education Grants</h4>
                    <p className="text-muted">Providing scholarships and educational support for the children of our top-performing driver partners.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>🏥 Health Camps</h4>
                    <p className="text-muted">Free annual medical checkups, eye exams, and subsidized healthcare plans for active drivers.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>👩🏽 Women Behind the Wheel</h4>
                    <p className="text-muted">A dedicated onboarding program to empower more female entrepreneurs in the gig economy.</p>
                  </li>
                </ul>
              </div>
              <div style={{ flex: "1 1 400px", position: "relative", height: "400px", backgroundColor: "#f9fafb", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)" }}>
                <Image src="/images/ill_business.png" alt="Initiatives" fill style={{ objectFit: "contain", padding: "40px" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="section bg-light" id="sustainability">
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px", flexDirection: "row-reverse" }}>
              <div style={{ flex: "1 1 400px" }}>
                <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Sustainability</span>
                <h2 className="font-display" style={{ fontSize: "36px", marginBottom: "24px" }}>Greener cities for everyone</h2>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "24px" }}>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>⚡ The EV Transition</h4>
                    <p className="text-muted">We are aggressively subsidizing electric vehicles for our partners to phase out combustion engines.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>🌲 Carbon Offsetting</h4>
                    <p className="text-muted">For rides not yet on EVs, we invest in verified carbon offset programs like reforestation.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>♻️ Shared Rides</h4>
                    <p className="text-muted">Promoting carpooling and shared auto routes to reduce traffic congestion and per-passenger emissions.</p>
                  </li>
                </ul>
              </div>
              <div style={{ flex: "1 1 400px", position: "relative", height: "400px", backgroundColor: "white", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)" }}>
                <Image src="/images/ill_safety.png" alt="Sustainability" fill style={{ objectFit: "contain", padding: "40px" }} />
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

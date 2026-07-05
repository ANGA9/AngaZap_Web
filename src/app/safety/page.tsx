import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import AppDownloadCTA from "@/components/AppDownloadCTA";

export default function SafetyHubPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Full-bleed Photo Hero */}
        <section className="hero-section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <Image 
              src="/images/photo_city_rides.png"
              alt="Safety at Riksho"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.4))" }} />
          </div>
          
          <div className="container relative z-10" style={{ color: "white", textAlign: "center" }}>
            <h1 className="font-display animate-fade-in-up" style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: "16px", color: "white" }}>
              Safety isn't an option. It's the foundation.
            </h1>
            <p className="animate-fade-in-up" style={{ fontSize: "1.125rem", maxWidth: "600px", opacity: 0.9, animationDelay: "0.1s", margin: "0 auto" }}>
              Our commitment to protecting both passengers and partners on every journey.
            </p>
          </div>
        </section>

        {/* The Safety Pact Section */}
        <section className="section bg-light" id="safety-pact">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Our Promise</span>
              <h2 className="font-display" style={{ fontSize: "36px" }}>The Riksho Safety Pact</h2>
              <p style={{ maxWidth: "600px", margin: "16px auto 0", color: "var(--text-muted)" }}>A mutual agreement of respect, care, and security between all users of our platform.</p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "60px" }}>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>1</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Mutual Respect</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Treating every driver, courier, and rider with the dignity and respect they deserve.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>2</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Zero Tolerance</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Strict policies against discrimination, harassment, and dangerous driving behaviors.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>3</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Constant Innovation</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>We promise to continuously invest in new technologies that predict and prevent incidents.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Passenger Safety */}
        <section className="section" id="passenger-safety">
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px" }}>
              <div style={{ flex: "1 1 400px" }}>
                <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>For Riders</span>
                <h2 className="font-display" style={{ fontSize: "36px", marginBottom: "24px" }}>Passenger Safety Features</h2>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "24px" }}>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--color-indigo)" }}>✓</span> Background Checks</h4>
                    <p className="text-muted">Every driver undergoes a rigorous verification process before they ever hit the road.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--color-indigo)" }}>✓</span> In-App SOS Button</h4>
                    <p className="text-muted">Instantly share your live location with emergency services and our 24/7 incident team.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--color-indigo)" }}>✓</span> Share My Ride</h4>
                    <p className="text-muted">Send your live tracking link to friends and family so they know exactly when you'll arrive.</p>
                  </li>
                </ul>
              </div>
              <div style={{ flex: "1 1 400px", position: "relative", height: "400px", backgroundColor: "#f9fafb", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)" }}>
                <Image src="/images/ill_safety.png" alt="Passenger Safety" fill style={{ objectFit: "contain", padding: "40px" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Driver Safety */}
        <section className="section bg-light" id="driver-safety">
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px", flexDirection: "row-reverse" }}>
              <div style={{ flex: "1 1 400px" }}>
                <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>For Partners</span>
                <h2 className="font-display" style={{ fontSize: "36px", marginBottom: "24px" }}>Driver Safety Features</h2>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "24px" }}>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--color-indigo)" }}>✓</span> Passenger Verification</h4>
                    <p className="text-muted">We verify rider identities to ensure you know exactly who is entering your vehicle.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--color-indigo)" }}>✓</span> 24/7 Incident Support</h4>
                    <p className="text-muted">Dedicated agents available around the clock to support you during disputes or emergencies.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--color-indigo)" }}>✓</span> Anonymous Feedback</h4>
                    <p className="text-muted">Two-way ratings ensure you can report problematic passengers without fear of retaliation.</p>
                  </li>
                </ul>
              </div>
              <div style={{ flex: "1 1 400px", position: "relative", height: "400px", backgroundColor: "white", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)" }}>
                <Image src="/images/ill_business.png" alt="Driver Safety" fill style={{ objectFit: "contain", padding: "40px" }} />
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

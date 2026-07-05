import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import AppDownloadCTA from "@/components/AppDownloadCTA";

export default function CitiesHubPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Full-bleed Photo Hero */}
        <section className="hero-section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <Image 
              src="/images/photo_city_rides.png"
              alt="Cities we serve"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.4))" }} />
          </div>
          
          <div className="container relative z-10" style={{ color: "white", textAlign: "center" }}>
            <h1 className="font-display animate-fade-in-up" style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: "16px", color: "white" }}>
              Cities & Airports we serve
            </h1>
            <p className="animate-fade-in-up" style={{ fontSize: "1.125rem", maxWidth: "600px", opacity: 0.9, animationDelay: "0.1s", margin: "0 auto" }}>
              Find out if Riksho is available in your neighborhood or at your local airport.
            </p>
          </div>
        </section>

        {/* Cities Coverage */}
        <section className="section bg-light" id="cities">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Locations</span>
              <h2 className="font-display" style={{ fontSize: "36px" }}>Moving the nation</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "60px" }}>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>📍</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Metro Coverage</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Available across all major tier 1 metropolitan cities with rapid ETA response times.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>🚀</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Expanding Quickly</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>We are launching in new tier 2 and tier 3 cities every month to connect the entire country.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>🌐</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Regional Support</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Our app and customer support operates in multiple local languages for regional accessibility.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Airport Coverage */}
        <section className="section" id="airports">
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px" }}>
              <div style={{ flex: "1 1 400px" }}>
                <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Travel</span>
                <h2 className="font-display" style={{ fontSize: "36px", marginBottom: "24px" }}>Seamless Airport Transfers</h2>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "24px" }}>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>✈️ Dedicated Pickup Zones</h4>
                    <p className="text-muted">Skip the chaotic taxi lines. We have partnered with major airports to provide exclusive Riksho pickup points right outside arrivals.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>🕒 Flight Tracking</h4>
                    <p className="text-muted">Enter your flight number when booking ahead. We monitor delays and adjust your driver's arrival time automatically.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>🧳 Extra Luggage Space</h4>
                    <p className="text-muted">Choose our SUV or Premium tiers to ensure you have plenty of trunk space for all your travel bags.</p>
                  </li>
                </ul>
              </div>
              <div style={{ flex: "1 1 400px", position: "relative", height: "400px", backgroundColor: "#f9fafb", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)" }}>
                <Image src="/images/ill_city_to_city.png" alt="Airports Coverage" fill style={{ objectFit: "contain", padding: "40px" }} />
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

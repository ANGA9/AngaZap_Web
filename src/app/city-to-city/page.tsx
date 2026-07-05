import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function CityToCityPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        {/* Hero Illustration Section */}
        <section className="section animate-fade-in-up">
          <div className="container text-center">
            <h1 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 56px)", marginBottom: "16px" }}>
              Go the distance, comfortably
            </h1>
            <p className="text-muted" style={{ fontSize: "1.125rem", maxWidth: "600px", margin: "0 auto 48px auto" }}>
              Outstation and intercity trips, door to door, at a fair price.
            </p>
            
            <div style={{ position: "relative", width: "100%", maxWidth: "800px", height: "400px", margin: "0 auto", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
              <Image 
                src="/images/ill_city_to_city.png"
                alt="City to city illustration"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </section>

        {/* How it Works / Trust Strip */}
        <section className="section" style={{ backgroundColor: "var(--color-indigo-tint)" }}>
          <div className="container">
            <div className="split-section" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
                <Image 
                  src="/images/photo_city_to_city.png"
                  alt="Family loading luggage"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="split-content">
                <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>How it works</span>
                <h2 className="font-display" style={{ fontSize: "32px", marginBottom: "24px" }}>Seamless outstation travel</h2>
                <ul className="feature-list" style={{ display: "flex", flexDirection: "column", gap: "24px", listStyle: "none", padding: 0 }}>
                  <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--color-indigo)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 700, fontSize: "14px" }}>1</div>
                    <div>
                      <h4 style={{ fontSize: "18px", marginBottom: "4px" }}>Schedule your trip</h4>
                      <p className="text-muted" style={{ fontSize: "15px" }}>Book in advance or get a ride instantly. We cover routes across major cities.</p>
                    </div>
                  </li>
                  <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--color-indigo)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 700, fontSize: "14px" }}>2</div>
                    <div>
                      <h4 style={{ fontSize: "18px", marginBottom: "4px" }}>Door-to-door pickup</h4>
                      <p className="text-muted" style={{ fontSize: "15px" }}>No need to drag luggage to a bus stand. We pick you up right from your home.</p>
                    </div>
                  </li>
                  <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--color-indigo)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 700, fontSize: "14px" }}>3</div>
                    <div>
                      <h4 style={{ fontSize: "18px", marginBottom: "4px" }}>Travel in comfort</h4>
                      <p className="text-muted" style={{ fontSize: "15px" }}>Well-maintained cars and highly rated drivers for those long-distance journeys.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="section text-center" style={{ backgroundColor: "var(--color-indigo)", color: "white" }}>
          <div className="container">
            <h2 className="font-display" style={{ fontSize: "36px", marginBottom: "24px", color: "white" }}>Ready to move?</h2>
            <Link href="/#download" className="btn-white" style={{ fontSize: "16px", padding: "14px 32px" }}>
              Get the App
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

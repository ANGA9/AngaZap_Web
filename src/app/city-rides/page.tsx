import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function CityRidesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        {/* Hero Illustration Section */}
        <section className="section animate-fade-in-up">
          <div className="container text-center">
            <h1 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 56px)", marginBottom: "16px" }}>
              Comfortable rides, fair fares
            </h1>
            <p className="text-muted" style={{ fontSize: "1.125rem", maxWidth: "600px", margin: "0 auto 48px auto" }}>
              Book a cab in seconds. Know your fare before you ride.
            </p>
            
            <div style={{ position: "relative", width: "100%", maxWidth: "800px", height: "400px", margin: "0 auto", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
              <Image 
                src="/images/ill_city_rides.png"
                alt="City rides illustration"
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
                  src="/images/photo_city_rides.png"
                  alt="Passenger in cab"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="split-content">
                <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>How it works</span>
                <h2 className="font-display" style={{ fontSize: "32px", marginBottom: "24px" }}>Ready when you are</h2>
                <ul className="feature-list" style={{ display: "flex", flexDirection: "column", gap: "24px", listStyle: "none", padding: 0 }}>
                  <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--color-indigo)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 700, fontSize: "14px" }}>1</div>
                    <div>
                      <h4 style={{ fontSize: "18px", marginBottom: "4px" }}>Request a ride</h4>
                      <p className="text-muted" style={{ fontSize: "15px" }}>Open the Riksho app, enter your destination, and see your upfront fare immediately.</p>
                    </div>
                  </li>
                  <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--color-indigo)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 700, fontSize: "14px" }}>2</div>
                    <div>
                      <h4 style={{ fontSize: "18px", marginBottom: "4px" }}>Meet your driver</h4>
                      <p className="text-muted" style={{ fontSize: "15px" }}>Track your verified driver on the map. We will let you know when they arrive.</p>
                    </div>
                  </li>
                  <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--color-indigo)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 700, fontSize: "14px" }}>3</div>
                    <div>
                      <h4 style={{ fontSize: "18px", marginBottom: "4px" }}>Enjoy the journey</h4>
                      <p className="text-muted" style={{ fontSize: "15px" }}>Sit back and relax. Pay seamlessly in cash or UPI at the end of the trip.</p>
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

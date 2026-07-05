import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function DeliveryPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        {/* Hero Illustration Section */}
        <section className="section animate-fade-in-up">
          <div className="container text-center">
            <h1 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 56px)", marginBottom: "16px" }}>
              Send it. Track it. Done.
            </h1>
            <p className="text-muted" style={{ fontSize: "1.125rem", maxWidth: "600px", margin: "0 auto 48px auto" }}>
              Fast parcel delivery for individuals and small businesses.
            </p>
            
            <div style={{ position: "relative", width: "100%", maxWidth: "800px", height: "400px", margin: "0 auto", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
              <Image 
                src="/images/ill_delivery.png"
                alt="Delivery illustration"
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
                  src="/images/photo_delivery.png"
                  alt="Courier handing parcel"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="split-content">
                <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>How it works</span>
                <h2 className="font-display" style={{ fontSize: "32px", marginBottom: "24px" }}>Fast and secure delivery</h2>
                <ul className="feature-list" style={{ display: "flex", flexDirection: "column", gap: "24px", listStyle: "none", padding: 0 }}>
                  <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--color-indigo)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 700, fontSize: "14px" }}>1</div>
                    <div>
                      <h4 style={{ fontSize: "18px", marginBottom: "4px" }}>Request a pickup</h4>
                      <p className="text-muted" style={{ fontSize: "15px" }}>Tell us what you are sending and where it needs to go. We'll assign a nearby courier.</p>
                    </div>
                  </li>
                  <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--color-indigo)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 700, fontSize: "14px" }}>2</div>
                    <div>
                      <h4 style={{ fontSize: "18px", marginBottom: "4px" }}>Hand over the parcel</h4>
                      <p className="text-muted" style={{ fontSize: "15px" }}>The courier arrives at your door. Fast, secure, and hassle-free pickup.</p>
                    </div>
                  </li>
                  <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--color-indigo)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 700, fontSize: "14px" }}>3</div>
                    <div>
                      <h4 style={{ fontSize: "18px", marginBottom: "4px" }}>Live tracking</h4>
                      <p className="text-muted" style={{ fontSize: "15px" }}>Track your package live on the map until it reaches the recipient safely.</p>
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
            <h2 className="font-display" style={{ fontSize: "36px", marginBottom: "24px", color: "white" }}>Ready to deliver?</h2>
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

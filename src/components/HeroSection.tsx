import Image from "next/image";

export default function HeroSection() {
  const serviceTabs = ["Ride", "City to City", "Bike Taxi", "Fleet & Delivery"];

  return (
    <section className="hero-section">
      {/* Background image */}
      <div className="hero-bg">
        <Image
          src="/images/hero.png"
          alt="AngaZip Hero"
          fill
          priority
          sizes="100vw"
        />
        {/* Gradient overlay for text legibility */}
        <div className="hero-gradient" />
      </div>

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
        <div className="hero-content">
          {/* Eyebrow pill */}
          <div className="animate-fade-in-up">
            <span className="hero-eyebrow">
              Fair fares. Fast fleets.
            </span>
          </div>

          {/* H1 */}
          <h1 className="hero-title animate-fade-in-up stagger-1">
            One ride away.
            <br />
            <span>One delivery ahead.</span>
          </h1>

          {/* Subtext */}
          <p className="hero-subtitle animate-fade-in-up stagger-2">
            Cabs, bike taxis, intercity rides, and business fleets — one app for
            everything that needs to move.
          </p>

          {/* CTA */}
          <div className="hero-actions animate-fade-in-up stagger-3">
            <a href="#download" className="btn-primary" style={{ padding: "16px 32px", fontSize: "1rem" }}>
              Get the App
              <svg style={{ marginLeft: "8px", width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#services" className="btn-outline-white" style={{ padding: "16px 32px", fontSize: "1rem", borderRadius: "999px" }}>
              Explore Services
            </a>
          </div>

          {/* Service Tab Row */}
          <div className="animate-fade-in-up stagger-4" style={{ marginTop: "40px" }}>
            <div className="hero-tabs">
              {serviceTabs.map((tab, i) => (
                <a
                  key={tab}
                  href="#services"
                  style={{
                    padding: "10px 20px",
                    borderRadius: "999px",
                    backgroundColor: i === 0 ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.06)",
                    color: i === 0 ? "white" : "rgba(255,255,255,0.6)",
                    border: i === 0 ? "1px solid rgba(255,255,255,0.25)" : "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {tab}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade for section transition */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "96px", background: "linear-gradient(to top, white, transparent)" }} />
    </section>
  );
}

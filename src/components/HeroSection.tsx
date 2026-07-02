import Image from "next/image";

export default function HeroSection() {
  const serviceTabs = ["Ride", "City to City", "Bike Taxi", "Fleet & Delivery"];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[#1a1040]">
        <Image
          src="/images/hero.png"
          alt="AngaZip Hero"
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111117] via-[#111117]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
        {/* Eyebrow pill */}
        <div className="animate-fade-in-up">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.12)",
              color: "var(--accent-cyan)",
              fontFamily: "var(--font-body)",
              border: "1px solid rgba(0, 194, 255, 0.25)",
            }}
          >
            Fair fares. Fast fleets.
          </span>
        </div>

        {/* H1 */}
        <h1
          className="animate-fade-in-up stagger-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight max-w-3xl"
          style={{ fontFamily: "var(--font-heading)", color: "white" }}
        >
          One ride away.
          <br />
          <span style={{ color: "var(--accent-cyan)" }}>One delivery ahead.</span>
        </h1>

        {/* Subtext */}
        <p
          className="animate-fade-in-up stagger-2 mt-6 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed"
          style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)" }}
        >
          Cabs, bike taxis, intercity rides, and business fleets — one app for
          everything that needs to move.
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up stagger-3 mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#download"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-indigo-500/30"
            style={{ backgroundColor: "var(--indigo)", fontFamily: "var(--font-body)" }}
          >
            Get the App
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 hover:bg-white/15"
            style={{
              color: "white",
              fontFamily: "var(--font-body)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            Explore Services
          </a>
        </div>

        {/* Service Tab Row */}
        <div className="animate-fade-in-up stagger-4 mt-16 lg:mt-20">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {serviceTabs.map((tab, i) => (
              <a
                key={tab}
                href="#services"
                className="flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/20"
                style={{
                  backgroundColor: i === 0 ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.06)",
                  color: i === 0 ? "white" : "rgba(255,255,255,0.6)",
                  fontFamily: "var(--font-body)",
                  border: i === 0 ? "1px solid rgba(255,255,255,0.25)" : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {tab}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade for section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

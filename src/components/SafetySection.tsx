import Image from "next/image";

export default function SafetySection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "var(--indigo)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Image + Shield Shape */}
          <div className="relative flex items-center justify-center">
            {/* Abstract shield shape in lighter indigo */}
            <div
              className="absolute w-80 h-96 rounded-[3rem] rotate-6 opacity-20"
              style={{ backgroundColor: "var(--indigo-light)" }}
            />
            {/* Photo */}
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/safety.png"
                alt="Safety first with AngaZip"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right — Content */}
          <div>
            {/* Eyebrow */}
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--accent-cyan)", fontFamily: "var(--font-body)" }}
            >
              Safety
            </span>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Your safety is non&#8209;negotiable
            </h2>

            <p
              className="text-base lg:text-lg leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)" }}
            >
              Every ride, every delivery, every fleet dispatch — backed by verified
              partners, live tracking, and 24/7 support.
            </p>

            {/* Trust Points */}
            <div className="space-y-4 mb-10">
              {["Real-time ride & delivery tracking", "Background-verified drivers", "24/7 emergency support", "In-app SOS button"].map(
                (point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-white/80" style={{ fontFamily: "var(--font-body)" }}>
                      {point}
                    </span>
                  </div>
                )
              )}
            </div>

            <a
              href="/safety"
              className="inline-flex items-center px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                backgroundColor: "white",
                color: "var(--indigo)",
                fontFamily: "var(--font-body)",
              }}
            >
              Learn more
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

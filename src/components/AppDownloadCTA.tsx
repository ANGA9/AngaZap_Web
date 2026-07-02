import Image from "next/image";

export default function AppDownloadCTA() {
  return (
    <section id="download" className="relative overflow-hidden" style={{ backgroundColor: "var(--indigo)" }}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 translate-x-1/3 -translate-y-1/3" style={{ backgroundColor: "var(--accent-cyan)" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 -translate-x-1/3 translate-y-1/3" style={{ backgroundColor: "var(--indigo-light)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get the AngaZip app
            </h2>

            <p
              className="text-base lg:text-lg leading-relaxed mb-10 max-w-md mx-auto lg:mx-0"
              style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)" }}
            >
              Book rides, send parcels, or manage your fleet — all from one app.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Google Play */}
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-[1.02]"
              >
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.395 13l2.303-3.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-white/60 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Get it on</div>
                  <div className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>Google Play</div>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-[1.02]"
              >
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-white/60 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Download on the</div>
                  <div className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-[500px]">
              <Image
                src="/images/app_mockup.png"
                alt="AngaZip App Mockup"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 300px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const features = [
  "Same-day city delivery",
  "Scheduled fleet access",
  "Bulk cargo & truckload",
  "API integration for sellers",
];

export default function FleetSpotlight() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--indigo-tint)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Content */}
          <div>
            {/* Eyebrow */}
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--indigo)", fontFamily: "var(--font-body)" }}
            >
              For Business
            </span>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)", color: "var(--near-black)" }}
            >
              Your delivery fleet, without owning a fleet
            </h2>

            <p
              className="text-base lg:text-lg leading-relaxed mb-8"
              style={{ color: "var(--muted-grey)", fontFamily: "var(--font-body)" }}
            >
              From single parcels to full truckloads — AngaZip gives e-commerce
              sellers, SMEs, and enterprises on-demand access to verified vehicles
              and drivers, with live tracking on every dispatch.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200"
                  style={{ color: "var(--near-black)", fontFamily: "var(--font-body)" }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--indigo)" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {feature}
                </span>
              ))}
            </div>

            <a
              href="/fleet-business"
              className="inline-flex items-center px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md shadow-indigo-500/20"
              style={{ backgroundColor: "var(--indigo)", fontFamily: "var(--font-body)" }}
            >
              Talk to our business team
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right — Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-xl">
              <Image
                src="/images/fleet_spotlight.png"
                alt="AngaZip Business Fleet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative blob */}
            <div
              className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full opacity-10 -z-10"
              style={{ backgroundColor: "var(--indigo)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

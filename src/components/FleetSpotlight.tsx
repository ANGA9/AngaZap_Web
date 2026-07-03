import Image from "next/image";

const features = [
  "Same-day city delivery",
  "Scheduled fleet access",
  "Bulk cargo & truckload",
  "API integration for sellers",
];

export default function FleetSpotlight() {
  return (
    <section className="section">
      <div className="container">
        <div className="split-section split-bg-tint reverse">
          
          {/* Image */}
          <div className="split-image split-image-right">
            <Image
              src="/images/fleet_spotlight_v2.png"
              alt="AngaZap Business Fleet"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="split-content">
            {/* Eyebrow */}
            <span className="split-eyebrow">
              For Business
            </span>

            <h2>
              Your delivery fleet, without owning a fleet
            </h2>

            <p>
              From single parcels to full truckloads — AngaZap gives e-commerce
              sellers, SMEs, and enterprises on-demand access to verified vehicles
              and drivers, with live tracking on every dispatch.
            </p>

            {/* Feature Pills */}
            <ul className="feature-list feature-list-indigo">
              {features.map((feature, idx) => (
                <li key={idx} className="feature-pill">
                  <svg style={{ width: "20px", height: "20px", flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "16px" }}>
              <a href="/fleet-business" className="btn-primary" style={{ display: "inline-flex" }}>
                Talk to our business team
                <svg style={{ marginLeft: "8px", width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const services = [
  {
    headline: "Cab Rides",
    description: "Comfortable, fairly-priced rides across the city, anytime.",
    links: [
      { label: "For Riders", href: "/ride" },
      { label: "For Drivers", href: "/ride" },
    ],
    blobColor: "#4338CA",
    imageSrc: "/images/cab.png",
  },
  {
    headline: "Bike Taxi",
    description: "Quick point-to-point hops through traffic, at a fraction of the cost.",
    links: [
      { label: "For Riders", href: "/ride" },
      { label: "For Drivers", href: "/ride" },
    ],
    blobColor: "#00C2FF",
    imageSrc: "/images/bike.png",
  },
  {
    headline: "City to City",
    description: "Comfortable outstation and intercity travel, door to door.",
    links: [
      { label: "For Riders", href: "/city-to-city" },
      { label: "For Drivers", href: "/city-to-city" },
    ],
    blobColor: "#4338CA",
    imageSrc: "/images/city.png",
  },
  {
    headline: "Fleet & Delivery",
    description: "On-demand vehicles and cargo capacity for businesses of any size.",
    links: [
      { label: "For Business", href: "/fleet-business" },
      { label: "For Partners", href: "/fleet-business" },
    ],
    blobColor: "#00C2FF",
    imageSrc: "/images/fleet_card.png",
  },
];

export default function ServiceGrid() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)", color: "var(--near-black)" }}
          >
            One app, every way to move
          </h2>
          <p
            className="mt-5 text-base lg:text-lg leading-relaxed"
            style={{ color: "var(--muted-grey)", fontFamily: "var(--font-body)" }}
          >
            Whether it&apos;s you, your parcel, or your entire delivery fleet —
            AngaZip gets it there.
          </p>
        </div>

        {/* 2x2 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.headline}
              className="group relative bg-white rounded-2xl border border-gray-100 p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Blob Background */}
              <div
                className="absolute top-0 left-0 w-40 h-40 rounded-full opacity-10 -translate-x-10 -translate-y-10 group-hover:scale-125 transition-transform duration-500"
                style={{ backgroundColor: service.blobColor }}
              />

              {/* Illustration Image */}
              <div className="relative w-full h-48 lg:h-56 mb-6 flex items-center justify-center">
                <Image
                  src={service.imageSrc}
                  alt={service.headline}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text Content */}
              <h3
                className="text-xl lg:text-2xl font-bold mb-2"
                style={{ fontFamily: "var(--font-heading)", color: "var(--near-black)" }}
              >
                {service.headline}
              </h3>
              <p
                className="text-sm lg:text-base mb-5 leading-relaxed"
                style={{ color: "var(--muted-grey)", fontFamily: "var(--font-body)" }}
              >
                {service.description}
              </p>

              {/* Links */}
              <div className="flex gap-6">
                {service.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-semibold transition-colors duration-200 hover:underline underline-offset-4"
                    style={{ color: "var(--indigo)", fontFamily: "var(--font-body)" }}
                  >
                    {link.label} ›
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

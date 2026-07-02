const cities = [
  "Delhi NCR",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Indore",
  "Bhopal",
  "Nagpur",
  "Patna",
  "Kochi",
  "Coimbatore",
  "Vizag",
  "Surat",
  "Vadodara",
];

export default function AvailableCities() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)", color: "var(--near-black)" }}
          >
            Available across India
          </h2>
          <p
            className="mt-4 text-base lg:text-lg"
            style={{ color: "var(--muted-grey)", fontFamily: "var(--font-body)" }}
          >
            And expanding every month. See if AngaZip is in your city.
          </p>
        </div>

        {/* City Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-[var(--indigo-tint)] border border-[#E0E7FF] transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-default"
              style={{ color: "var(--indigo)", fontFamily: "var(--font-body)" }}
            >
              {/* Location Pin */}
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

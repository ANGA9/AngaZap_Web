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

const citiesRow1 = cities.slice(0, 10);
const citiesRow2 = cities.slice(10);

export default function AvailableCities() {
  return (
    <section className="section cities-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Available across India
          </h2>
          <p className="section-subtitle">
            And expanding every month. See if Riksho is in your city.
          </p>
        </div>
      </div>

      {/* Infinite Marquees */}
      <div className="marquee-container">
        {/* Row 1 - Left to Right */}
        <div className="marquee-row marquee-left">
          <div className="marquee-content">
            {/* Original */}
            {citiesRow1.map((city) => (
              <CityPill key={city} city={city} />
            ))}
            {/* Duplicated for infinite loop */}
            {citiesRow1.map((city) => (
              <CityPill key={`${city}-dup`} city={city} />
            ))}
            {/* Duplicated twice for ultra-wide screens */}
            {citiesRow1.map((city) => (
              <CityPill key={`${city}-dup2`} city={city} />
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="marquee-row marquee-right">
          <div className="marquee-content">
            {citiesRow2.map((city) => (
              <CityPill key={city} city={city} />
            ))}
            {citiesRow2.map((city) => (
              <CityPill key={`${city}-dup`} city={city} />
            ))}
            {citiesRow2.map((city) => (
              <CityPill key={`${city}-dup2`} city={city} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CityPill({ city }: { city: string }) {
  return (
    <span className="city-pill">
      {/* Location Pin */}
      <svg className="w-4 h-4 flex-shrink-0" style={{ width: "16px", height: "16px", opacity: 0.6 }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
      {city}
    </span>
  );
}

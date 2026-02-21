export default function Home() {
  const countriesData = [
    {
      name: "Germany",
      flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
      value: "4",
      unit: "Strategic Projects",
      description:
        "Number of Strategic Projects (Critical Raw Mineral Act) located in Germany",
      category: "CRM Projects",
      highlight: false,
      mapAnnotation: "Germany",
    },
    {
      name: "Bulgaria",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
      value: "305.3",
      unit: "Million Pounds",
      description:
        "Contained at the Chelopech reserve is reported as 138,482 tonnes of contained copper",
      detail: "Contained copper",
      category: "Copper Reserves",
      highlight: false,
      mapAnnotation: "Bulgaria",
    },
    {
      name: "Poland",
      flag: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
      value: "150.5",
      unit: "Million Euros",
      description:
        "Grant received by Elemental's Polvolt from the European Commission for a strategic project in the Zawiercie facility",
      category: "EC Funding",
      highlight: false,
      mapAnnotation: "Poland",
    },
    {
      name: "France",
      flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
      value: "15",
      unit: "GWh/year",
      description:
        "Capacity of Automotive Cell Company's first production block at the Billy-Berclau (France) gigafactory",
      category: "Battery Production",
      highlight: false,
      mapAnnotation: "France",
    },
    {
      name: "Norway",
      flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
      value: "8.8",
      unit: "Million Tonnes TREO",
      description:
        "JORC Norway reportedly implied 559 million tonnes of Rare Earths @ 1.57% Total Rare Earth Oxides (TREO)",
      detail: "Total Rare Earth Oxides",
      category: "Rare Earths",
      highlight: true,
      mapAnnotation: "Norway",
    },
    {
      name: "United Kingdom",
      flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
      value: "50,000",
      unit: "Tonnes Target",
      description:
        "Target of 50,000 tonnes of domestic lithium under UK Vision 2035. Target focused on at least 10% of UK annual industrial CRM demand be met domestically",
      detail: "Domestic lithium",
      category: "Lithium Strategy",
      highlight: false,
      mapAnnotation: "United Kingdom",
    },
    {
      name: "Sweden",
      flag: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
      value: "248",
      unit: "t/yr Dysprosium",
      description:
        "Reports from the Norra Kärr region for Heavy Rare Earth elements",
      detail: "+36 t/yr Terbium",
      category: "Heavy Rare Earths",
      highlight: false,
      mapAnnotation: "Sweden",
    },
    {
      name: "Spain",
      flag: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
      value: "7",
      unit: "Strategic Projects",
      description:
        "Hosts 7 Strategic Projects under the European Commission's first tranche. Includes companies: Aguablanca, CircularLas Navas, Mina Doade, El Moto and P6 Metals",
      category: "EC Projects",
      highlight: false,
      mapAnnotation: "Spain",
    },
    {
      name: "Finland",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
      value: "4",
      unit: "Major Projects",
      description:
        "4 major CRM processing tech projects: Hycamite Hydrogen demonstration plant, Keliber LiOH refinery output, Jervois Cobalt refinery expansion, Terrafame nickel/battery chemicals processing plant",
      category: "Processing Tech",
      highlight: false,
      mapAnnotation: "Finland",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#0a1a3d",
        borderRadius: "10px",
        minHeight: "530px",
        padding: "12px 15px",
        color: "#fff",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        background: "linear-gradient(135deg, #0a1a3d 0%, #163f8c 100%)",
        height: "530px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header - More Compact */}
      <div className="text-center mb-1" style={{ flexShrink: 0 }}>
        <h4
          style={{
            letterSpacing: "3px",
            fontWeight: "700",
            fontSize: "16px",
            margin: "6px 0 2px",
            color: "#fff",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          EUROPE AND CRITICAL MINERALS
        </h4>
        <p
          style={{
            fontSize: "13px",
            color: "#a0c8ff",
            fontWeight: "500",
            marginBottom: "2px",
          }}
        >
          Snapshot
        </p>
      </div>

      {/* Main Content Grid - Optimized for 530px height */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          gap: "10px",
          overflow: "hidden",
          height: "calc(530px - 70px)", // Subtract header height
        }}
      >
        {countriesData.map((country) => (
          <CountryCard
            key={country.name}
            name={country.name}
            flag={country.flag}
            value={country.value}
            unit={country.unit}
            description={country.description}
            detail={country.detail}
            category={country.category}
            highlighted={country.highlight}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------- COUNTRY CARD COMPONENT ---------------- */
function CountryCard({
  name,
  flag,
  value,
  unit,
  description,
  detail,
  category,
  highlighted,
}) {
  return (
    <div
      style={{
        backgroundColor: false
          ? "rgba(30, 15, 70, 0.9)"
          : "rgba(16, 42, 94, 0.7)",
        borderRadius: "10px",
        padding: "10px",
        borderLeft: `4px solid ${highlighted ? "#7c3aed" : getCountryColor(name)}`,
        boxShadow: highlighted
          ? "0 4px 12px rgba(124, 58, 237, 0.25)"
          : "0 2px 8px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        backdropFilter: "blur(5px)",
        height: "100%",
      }}
    >
      {/* Header with Flag and Country - More Compact */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "6px",
          flexShrink: 0,
        }}
      >
        <img
          src={flag}
          alt={`${name} flag`}
          style={{
            width: "28px",
            height: "21px",
            objectFit: "cover",
            borderRadius: "3px",
            marginRight: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        />
        <div style={{ flex: 1 }}>
          <h6
            style={{
              margin: 0,
              fontWeight: "700",
              fontSize: "13px",
              color: "#fff",
              lineHeight: "1.2",
            }}
          >
            {name}
          </h6>
          <div
            style={{
              fontSize: "9px",
              color: highlighted ? "#a855f7" : "#a0c8ff",
              fontWeight: "600",
              marginTop: "1px",
            }}
          >
            {category}
          </div>
        </div>
      </div>

      {/* Main Value Display */}
      <div
        style={{
          fontSize: "18px", // 🔼 thoda bada
          fontWeight: "800",
          color: "#ffffff", // 🤍 white
          marginBottom: "3px",
          lineHeight: "1.1",
          flexShrink: 0,
        }}
      >
        {value}
        <span
          style={{
            fontSize: "11px",
            fontWeight: "600",
            color: highlighted ? "#c4b5fd" : "#a0c8ff",
            marginLeft: "3px",
          }}
        >
          {unit}
        </span>
      </div>

      {/* Detail if exists */}
      {detail && (
        <div
          style={{
            fontSize: "10px",
            fontWeight: "600",
            color: "#fff",
            marginBottom: "4px",
            flexShrink: 0,
          }}
        >
          {detail}
        </div>
      )}

      {/* Description - Optimized for text display */}
      <div
        style={{
          fontSize: "9.5px",
          color: "#a0c8ff",
          lineHeight: "1.3",
          flex: 1,
          overflow: "hidden",
          marginTop: "auto",
          paddingTop: "3px",
          display: "-webkit-box",
          WebkitLineClamp: "4",
          WebkitBoxOrient: "vertical",
          textOverflow: "ellipsis",
          wordBreak: "break-word",
        }}
      >
        {description}
      </div>
    </div>
  );
}

/* ---------------- HELPER FUNCTION ---------------- */
function getCountryColor(countryName) {
  const colorMap = {
    Germany: "#000000",
    Bulgaria: "#00966E",
    Poland: "#DC143C",
    France: "#002395",
    Norway: "#EF2B2D",
    "United Kingdom": "#012169",
    Sweden: "#006AA7",
    Spain: "#AA151B",
    Finland: "#002F6C",
  };
  return colorMap[countryName] || "#7c3aed";
}

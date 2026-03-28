import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {

  const countriesData = [
    {
      name: "Lithium Reserves",
      flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
      value: "9.3",
      unit: "Million Tonnes",
      description:
        "Estimated lithium reserves held in Chile. Approximately 31% of the world’s lithium reserves.",
      category: "Lithium",
      highlight: true,
    },
    {
      name: "Copper Reserves",
      flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
      value: "190",
      unit: "Million Tonnes",
      description:
        "Estimated copper reserves in Chile. Roughly 19% of global copper reserves.",
      category: "Copper",
    },
    {
      name: "Mining Projects",
      flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
      value: "51",
      unit: "Projects",
      description:
        "The number of mining projects making up Chile’s mining pathway for investments",
      category: "Projects",
    },
    {
      name: "Global Lithium Production",
      flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
      value: "20%",
      unit: "Share",
      description:
        "Chile’s share of Global Lithium Production. Majority of the world’s brine lithium comes from Chilean salt flats",
      category: "Production",
    },
    {
      name: "Export Share",
      flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
      value: "56%",
      unit: "Exports",
      description:
        "Share of Chile’s merchandise exports that came from ores & metals in 2024.",
      category: "Exports",
    },
    {
      name: "India Investment",
      flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
      value: "INR 6,300",
      unit: "Crore",
      description:
        "Recent India-linked investment/approvals tied to Chile. Coal India board cleared Chile and related investments as part of India’s push into Chilean lithium/copper.1",
      category: "Investment",
      highlight: true,
    },
    {
      name: "Copper Production 2024",
      flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
      value: "5.5",
      unit: "Million Tonnes",
      description:
        "Copper produced in Chile in 2024. Chile possesses a quarter of the global mine output",
      category: "Production",
    },
    {
      name: "Mining Investment Pipeline",
      flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
      value: "USD 83.18",
      unit: "Billion",
      description:
        "Planned investment in Chile’s mining sector through 2033 via pipeline of announced projects",
      category: "Investment",
    },
    {
      name: "Codelco-Adani Projects",
      flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
      value: "3",
      unit: "Projects",
      description:
        "Number of Chilean copper projects covered under the Codelco-Adani memorandum.",
      category: "Partnership",
    },
  ];

  return (
    <div
      className={montserrat.className}
      style={{
        /* ✅ ROYAL SLATE BACKGROUND */
        background:
          "linear-gradient(135deg,#1e293b 0%,#312e81 50%,#4c1d95 100%)",
        borderRadius: "12px",
        padding: "14px 16px",
        color: "#fff",
        minHeight: "530px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <h4
          style={{
            letterSpacing: "3px",
            fontWeight: "700",
            fontSize: "16px",
          }}
        >
          CHILE AND CRITICAL MINERALS
        </h4>

        <p
          style={{
            fontSize: "13px",
            color: "#c7d2fe",
            fontWeight: "500",
          }}
        >
          Snapshot
        </p>
      </div>

      <div className="country-grid">
        {countriesData.map((item, index) => (
          <CountryCard key={index} {...item} />
        ))}
      </div>

      <style jsx>{`
        .country-grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        @media (max-width: 992px) {
          .country-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .country-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

/* CARD */

function CountryCard({
  name,
  flag,
  value,
  unit,
  description,
  category,
  highlight,
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.12)",
        borderRadius: "12px",
        padding: "12px",
        borderLeft: `4px solid ${
          highlight ? "#facc15" : "#ffffff55"
        }`,
        backdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={flag}
          alt="flag"
          style={{
            width: "28px",
            height: "20px",
            marginRight: "8px",
            borderRadius: "3px",
          }}
        />

        <div>
          <h6 style={{ margin: 0, fontSize: "13px", fontWeight: 700 }}>
            {name}
          </h6>

          <div
            style={{
              fontSize: "9px",
              color: "#c7d2fe",
              fontWeight: 600,
            }}
          >
            {category}
          </div>
        </div>
      </div>

      <div style={{ fontSize: "20px", fontWeight: 800, marginTop: 6 }}>
        {value}
        <span style={{ fontSize: 11, marginLeft: 4, color: "#c7d2fe" }}>
          {unit}
        </span>
      </div>

      <div
        style={{
          fontSize: "11px",
          color: "#e0e7ff",
          marginTop: "auto",
          lineHeight: 1.4,
        }}
      >
        {description}
      </div>
    </div>
  );
}
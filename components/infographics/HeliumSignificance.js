import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function HeliumMarket() {
  const heliumData = [
    {
      name: "USA",
      icon: "🇺🇸",
      value: "40",
      unit: "%",
      description:
        "Hosts the Federal Helium Reserve and major refining capacity, anchoring supply for semiconductors, MRI systems, and advanced manufacturing industries.",
      category: "Global Helium Supply",
      highlight: true,
    },
    {
      name: "Qatar",
      icon: "🇶🇦",
      value: "25",
      unit: "%",
      description:
        "Exports helium via Ras Laffan facilities, supplying high-purity helium critical for semiconductor fabrication and industrial applications.",
      category: "Global Helium Supply",
      highlight: true,
    },
    {
      name: "Semiconductors",
      icon: "💻",
      value: "~20",
      unit: "%",
      description:
        "Of global helium demand is used in semiconductor manufacturing, enabling plasma etching, cooling, and ultra-clean fabrication environments for advanced chips.",
      category: "Helium Demand",
      highlight: true,
    },
    {
      name: "Boiling Point",
      icon: "❄️",
      value: "-269",
      unit: "°C",
      description:
        "Helium's inertness and thermal properties make it essential for cryogenic cooling in chip fabrication, quantum computing, and superconducting technologies, where no substitutes exist.",
      category: "Critical Properties",
      highlight: true,
    },
    {
      name: "Market Value",
      icon: "📈",
      value: "64.7",
      unit: "%",
      description:
        "Samsung Electronics and SK Hynix use Helium for Wafer cooling during etching and deposition, Carrier gas in plasma processes, etc. South Korea imports 64.7% of its helium from Qatar—directly exposing global AI hardware supply chains to a single geographic chokepoint.",
      category: "Market Outlook",
      highlight: true,
    },
    {
      name: "Byproduct",
      icon: "⛽",
      value: ">90",
      unit: "%",
      description:
        "Of helium is extracted as a byproduct of natural gas processing, making supply dependent on energy markets rather than direct helium demand.",
      category: "Supply Chain",
      highlight: true,
    },
    {
      name: "Recycling Rate",
      icon: "♻️",
      value: "70–90",
      unit: "%",
      description:
        "Advanced semiconductor fabs recycle helium using closed-loop systems, reducing costs and ensuring supply stability in critical chip manufacturing processes.",
      category: "Efficiency",
      highlight: true,
    },
    {
      name: "MRI Scanners",
      icon: "🏥",
      value: "~30",
      unit: "%",
      description:
        "Of global helium demand is used to cool superconducting magnets in MRI scanners at -269°C, enabling stable imaging systems essential for modern healthcare diagnostics.",
      category: "Medical Use",
      highlight: true,
    },
    {
      name: "NASA",
      icon: "🚀",
      value: "5–10",
      unit: "%",
      description:
        "NASA alone accounts for ~5–10% of global helium demand; used for rocket pressurization, purging, and leak detection in extreme environments.",
      category: "Space Industry",
      highlight: true,
    },
  ];

  return (
    <div
      className={montserrat.className}
      style={{
        backgroundColor: "#0F172A", // Dark navy background
        borderRadius: "12px",
        padding: "5px 16px",
        color: "#F1F5F9", // Light text
        minHeight: "530px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "8px" }}>
        <h4
          style={{
            letterSpacing: "3px",
            fontWeight: "700",
            fontSize: "16px",
            margin: 0,
            color: "#60A5FA", // Blue accent
          }}
        >
          HELIUM AND ITS SIGNIFICANCE
        </h4>
      </div>

      {/* Grid of cards */}
      <div className="country-grid">
        {heliumData.map((item, index) => (
          <HeliumCard key={index} {...item} />
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

/* Card Component – Dark theme with emoji icons */
function HeliumCard({
  name,
  icon,
  value,
  unit,
  description,
  category,
  highlight,
}) {
  return (
    <div
      style={{
        background: "#1E293B", // Dark card background
        borderRadius: "12px",
        padding: "10px",
        borderLeft: `4px solid ${
          highlight ? "#3B82F6" : "#475569" // Bright blue for highlight, gray for regular
        }`,
        display: "flex",
        flexDirection: "column",
        color: "#F1F5F9",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "32px",
            height: "31px",
            marginRight: "10px",
            fontSize: "23px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(59,130,246,0.1)",
            borderRadius: "8px",
          }}
        >
          {icon}
        </div>
        <div>
          <h6 style={{ margin: 0, fontSize: "13px", fontWeight: 700, color: "#F1F5F9" }}>
            {name}
          </h6>
          <div
            style={{
              fontSize: "9px",
              color: "#94A3B8", // Muted gray-blue
              fontWeight: 600,
            }}
          >
            {category}
          </div>
        </div>
      </div>

      <div style={{ fontSize: "20px", fontWeight: 800, marginTop: 3, color: "#60A5FA" }}>
        {value}
        <span style={{ fontSize: 11, marginLeft: 4, color: "#94A3B8" }}>
          {unit}
        </span>
      </div>

      <div
        style={{
          fontSize: "11px",
          color: "#CBD5E1",
          marginTop: "auto",
          lineHeight: 1.2,
        }}
      >
        {description}
      </div>
    </div>
  );
}
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function BariteSnapshot() {
  const bariteData = [
    {
      title: "108.2 million tonnes",
      subtitle: "The world's barite mine production in 2024.",
      description:
        "It displays that barite remains a very large industrial mineral market.",
      category: "🌍 GLOBAL PRODUCTION",
    },
    {
      title: "85 million tonnes",
      subtitle: "Kazakhstan's barite reserves in the USGS 2025 estimate.",
      description:
        "This gives Central Asia an important reserve base for future supply.",
      category: "🇰🇿 KAZAKHSTAN",
    },
    {
      title: "51 million tonnes",
      subtitle: "India's barite reserves in the USGS 2025 estimate. ",
      description:
        "That gives India one of the stronger reserve positions in the world.",
      category: "🇮🇳 INDIA · RESERVES",
    },
    {
      title: "2.6 million tonnes",
      subtitle: "India's barite production in 2024.",
      description:
        "India was the largest producer in the USGS table for that year.",
      category: "🇮🇳 INDIA · PRODUCTION",
    },
    {
      title: ">90%",
      subtitle:
        "That share of U.S. barite sales goes into oil and natural-gas well drilling fluids.",
      description: "Barite's biggest end use is therefore energy-related.",
      category: "🇺🇸 OIL & GAS DRILLING",
    },
    {
      title: "100 million tonnes",
      subtitle: "Iran's barite reserves in the USGS 2025 estimate. ",
      description:
        "Iran is another major reserve-holder in the global barite map.",
      category: "🇮🇷 IRAN",
    },
    {
      title: "2.1 million tonnes",
      subtitle: "China production 2024",
      description:
        "China's barite production in 2024. China remained one of the two dominant producers globally.",
      category: "🇨🇳 CHINA",
    },
    {
      title: "740 million tonnes",
      subtitle: "The USGS estimate for identified global barite resources. ",
      description:
        "The broader world resource base is about 2 billion tonnes, so the identified portion is only part of the total.",
      category: "📊 GLOBAL RESOURCES",
    },
    {
      title: ">75%",
      subtitle: "The U.S. net import reliance for barite is above this level.",
      description:
        "That makes barite a structurally important-dependent mineral for the U.S. market.",
      category: "🇺🇸 IMPORT DEPENDENCY",
    },
  ];

  return (
    <div
      className={montserrat.className}
      style={{
        background:
          "linear-gradient(135deg, #150F0B 0%, #2A1D15 50%, #4D3222 100%)",
        borderRadius: "20px",
        padding: "12px 16px",
        color: "#FFFFFF",
        height: "530px",
        display: "flex",
        flexDirection: "column",
        boxShadow:
          "0 12px 28px rgba(0,0,0,0.4), 0 0 0 1px rgba(217, 139, 67, 0.3)",
        overflow: "hidden",
        border: "1px solid rgba(217, 139, 67, 0.4)",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "10px", flexShrink: 0 }}>
        <h4
          style={{
            letterSpacing: "2px",
            fontWeight: "800",
            fontSize: "14px",
            margin: 0,
            color: "#F5EBE6",
            textTransform: "uppercase",
          }}
        >
          BARITE SNAPSHOT
        </h4>
      </div>

      {/* Scrollable grid */}
      <div
        className="barite-grid"
        style={{ flex: 1, overflowY: "auto", paddingRight: "4px" }}
      >
        {bariteData.map((item, idx) => (
          <StatCard key={idx} {...item} />
        ))}
      </div>

      <style jsx>{`
        .barite-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .barite-grid::-webkit-scrollbar {
          width: 4px;
        }
        .barite-grid::-webkit-scrollbar-track {
          background: #2a1d15;
          border-radius: 4px;
        }
        .barite-grid::-webkit-scrollbar-thumb {
          background: #d97706;
          border-radius: 4px;
        }
        .barite-grid::-webkit-scrollbar-thumb:hover {
          background: #f3bc7a;
        }

        @media (max-width: 900px) {
          .barite-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .barite-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

function StatCard({ title, subtitle, description, category }) {
  return (
    <div
      style={{
        background: "#FAF5F0",
        borderRadius: "14px",
        padding: "12px 12px",
        borderLeft: "4px solid #D97706",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
      }}
    >
      {/* Main value / title */}
      <div
        style={{
          fontSize: "18px",
          fontWeight: "700",
          color: "#451A03",
          lineHeight: 1.2,
          marginBottom: "2px",
          letterSpacing: "-0.3px",
        }}
      >
        {title}
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: "13px",
          fontWeight: "600",
          color: "#78350F",
          marginBottom: "8px",
        }}
      >
        {subtitle}
      </div>

      {/* Description - no horizontal line above */}
      <div
        style={{
          fontSize: "13px",
          fontWeight: "500",
          color: "#4A3727",
          lineHeight: 1.4,
          marginTop: "2px",
        }}
      >
        {description}
      </div>
    </div>
  );
}

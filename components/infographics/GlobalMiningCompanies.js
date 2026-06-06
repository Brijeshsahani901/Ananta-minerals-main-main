import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function GlobalMiningCompanies() {
  const miningData = [
    {
      company: "BHP",
      description:
        "It produced 1.5 million tonnes of copper in 2024 across Chile, Peru, and Australia. Its Escondida stake contributes to the world's largest copper mine.",
      category: "BHP · MELBOURNE, AUSTRALIA",
      highlight: true,
    },
    {
      company: "Vale",
      description:
        "Its 2025 output reached 177,200 tonnes of nickel and 382,400 tonnes of copper. Vale Base Metals operates across 18 countries.",
      category: "VALE · RIO DE JANEIRO, BRAZIL",
      highlight: true,
    },
    {
      company: "SQM",
      description:
        "It is expanding lithium hydroxide capacity from 40,000 tonnes/year toward 100,000 tonnes/year. SQM is also part of the Nova Andino Litio partnership with Codelco.",
      category: "SQM · SANTIAGO, CHILE",
      highlight: true,
    },
    {
      company: "Rio Tinto",
      description:
        "India is nearly 100% import-dependent on potash. Essential for water regulation and yield in crops like sugarcane, potato, and cotton across Maharashtra, Gujarat, and UP.",
      category: "RIO TINTO · LONDON & MELBOURNE",
      highlight: true,
    },
    {
      company: "Freeport-McMoRan",
      description:
        "It produced about 1.9 million tonnes of copper in 2024. Its Grasberg complex in Indonesia is one of the world's largest copper-and-gold operations.",
      category: "FREEPORT-MCMORAN · PHOENIX, ARIZONA",
      highlight: true,
    },
    {
      company: "Lynas Rare Earths",
      description:
        "It operates one of the largest rare-earth processing plants outside China in Malaysia. Lynas supplies roughly one-third of the world's separated rare earths outside China.",
      category: "LYNAS RARE EARTHS · PERTH, AUSTRALIA",
      highlight: true,
    },
    {
      company: "Glencore",
      description:
        "It produced 199,600 tonnes of copper in Q1 2026 alone. It also produces around 26,800 tonnes of cobalt annually, accounting for close to 20% of the global supply.",
      category: "GLENCORE · BAAR, SWITZERLAND",
      highlight: true,
    },
    {
      company: "Albemarle",
      description:
        "It is among the world's largest lithium producers. The company is expanding direct lithium extraction projects in Chile's Salar de Atacama.",
      category: "ALBEMARLE · NORTH CAROLINA, US",
      highlight: true,
    },
    {
      company: "MP Materials",
      description:
        "It runs the Mountain Pass mine, America's only integrated rare-earth operation. The company produced about 45,500 metric tonnes of rare-earth concentrate in 2024.",
      category: "MP MATERIALS · LAS VEGAS, NEVADA",
      highlight: true,
    },
  ];

  return (
    <div
      className={montserrat.className}
      style={{
        background:
          "linear-gradient(135deg, #150F0B 0%, #2A1D15 50%, #4D3222 100%)",
        borderRadius: "14px",
        padding: "8px 12px",
        color: "#FFFFFF",
        height: "530px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        overflow: "hidden",
        border: "1px solid rgba(217, 139, 67, 0.3)",
      }}
    >
      {/* Compact Header */}
      <div style={{ textAlign: "center", marginBottom: "6px", flexShrink: 0 }}>
        <h4
          style={{
            letterSpacing: "1.5px",
            fontWeight: "800",
            fontSize: "13px",
            margin: 0,
            color: "#F5EBE6",
            textTransform: "uppercase",
          }}
        >
          Major Mining Companies Globally
        </h4>
        <div
          style={{
            width: "30px",
            height: "2px",
            backgroundColor: "#D97706",
            margin: "4px auto 0",
          }}
        />
      </div>

      {/* Scrollable grid */}
      <div
        className="mining-grid"
        style={{ flex: 1, overflowY: "auto", paddingRight: "4px" }}
      >
        {miningData.map((item, idx) => (
          <StatCard key={idx} {...item} />
        ))}
      </div>

      <style jsx>{`
        .mining-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
        }

        /* Custom scrollbar */
        .mining-grid::-webkit-scrollbar {
          width: 3px;
        }
        .mining-grid::-webkit-scrollbar-track {
          background: #2a1d15;
          border-radius: 3px;
        }
        .mining-grid::-webkit-scrollbar-thumb {
          background: #d97706;
          border-radius: 3px;
        }

        @media (max-width: 900px) {
          .mining-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .mining-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

function StatCard({ company, description, category, highlight }) {
  const borderColor = highlight ? "#D97706" : "#78350F";
  const bgAccent = highlight ? "#FFFBEB" : "#FAF5F0";

  return (
    <div
      style={{
        background: bgAccent,
        borderRadius: "10px",
        padding: "6px 8px",
        borderLeft: `3px solid ${borderColor}`,
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.08)";
      }}
    >
      {/* Category tag */}
      <div
        style={{
          fontSize: "13px",
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: "0.3px",
          color: "#B45309",
          marginBottom: "4px",
          display: "flex",
          alignItems: "center",
          gap: "3px",
        }}
      >
        {category}
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: "13px",
          fontWeight: "500",
          color: "#451a03",
          lineHeight: 1.3,
          marginTop: "2px",
        }}
      >
        {description}
      </div>
    </div>
  );
}

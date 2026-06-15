import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function QuantumCriticalMinerals() {
  const mineralsData = [
    {
      mineral: "Silicon",
      description:
        "Silicon forms the foundation of quantum chips, control electronics, and semiconductor fabrication. With India targeting $500 billion in electronics manufacturing by 2030, secure access to high-purity silicon is critical for future quantum hardware development.",
      category: "SILICON · SEMICONDUCTOR BASE",
      highlight: true,
    },
    {
      mineral: "Niobium",
      description:
        "Niobium is the preferred material for superconducting quantum circuits used by IBM and Google. India's near-total import dependence makes supply security a strategic concern. ~90% of global niobium supply comes from Brazil.",
      category: "NIOBIUM · SUPERCONDUCTING",
      highlight: true,
    },
    {
      mineral: "Tantalum",
      description:
        "Tantalum is emerging as a key material for next-generation quantum processors. Access to reliable supplies can support India's ambitions to develop indigenous quantum hardware. 3× longer qubit coherence demonstrated in tantalum-based devices.",
      category: "TANTALUM · NEXT-GEN PROCESSORS",
      highlight: true,
    },
    {
      mineral: "Helium",
      description:
        "Quantum computers operate at ~0.01 Kelvin (~273°C). Helium-3 and helium-4 are indispensable for cooling superconducting quantum computers. India currently depends entirely on imports for helium supply.",
      category: "HELIUM · CRYOGENICS",
      highlight: true,
    },
    {
      mineral: "Rare Earth Elements",
      description:
        "China controls >85% of global rare earth processing. Rare earths enable quantum lasers, magnets, and sensing technologies. Neodymium, Dysprosium, Yttrium are the major REE used in Quantum Computers.",
      category: "RARE EARTHS · LASERS & MAGNETS",
      highlight: true,
    },
    {
      mineral: "Ytterbium",
      description:
        "Ytterbium-based trapped-ion quantum computers are among the most accurate quantum platforms. Securing access supports advanced research under the National Quantum Mission. 99.99% qubit fidelity achieved in leading trapped-ion systems.",
      category: "YTTERBIUM · TRAPPED ION",
      highlight: true,
    },
    {
      mineral: "Indium",
      description:
        "Indium is essential for photonic quantum chips and quantum communication networks. Limited global production makes supply chains particularly sensitive. Global indium production is only ~1,000 tonnes per year.",
      category: "INDIUM · PHOTONICS",
      highlight: true,
    },
    {
      mineral: "Gallium",
      description:
        "China accounts for >90% of global gallium processing. Gallium is critical for quantum photonics and advanced semiconductors. Export restrictions have highlighted the importance of diversified sourcing strategies.",
      category: "GALLIUM · QUANTUM PHOTONICS",
      highlight: true,
    },
    {
      mineral: "Gold",
      description:
        "Gold provides ultra-reliable cryogenic interconnects and chip packaging. While not a qubit material, it remains indispensable across quantum hardware systems.",
      category: "GOLD · CRYOGENIC INTERCONNECTS",
      highlight: true,
    },
  ];

  return (
    <div
      className={montserrat.className}
      style={{
        background:
          "linear-gradient(135deg, #0B132B 0%, #1C2541 50%, #3A506B 100%)",
        borderRadius: "14px",
        padding: "8px 12px",
        color: "#FFFFFF",
        height: "530px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        overflow: "hidden",
        border: "1px solid rgba(91, 192, 235, 0.3)",
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
            color: "#E0F7FA",
            textTransform: "uppercase",
          }}
        >
          Quantum Computing Runs on Critical Minerals
        </h4>
        <div
          style={{
            width: "30px",
            height: "2px",
            backgroundColor: "#5BC0EB",
            margin: "4px auto 0",
          }}
        />
      </div>

      {/* Scrollable grid */}
      <div
        className="minerals-grid"
        style={{ flex: 1, overflowY: "auto", paddingRight: "4px" }}
      >
        {mineralsData.map((item, idx) => (
          <MineralCard key={idx} {...item} />
        ))}
      </div>

      <style jsx>{`
        .minerals-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
        }

        /* Custom scrollbar */
        .minerals-grid::-webkit-scrollbar {
          width: 3px;
        }
        .minerals-grid::-webkit-scrollbar-track {
          background: #1c2541;
          border-radius: 3px;
        }
        .minerals-grid::-webkit-scrollbar-thumb {
          background: #5bc0eb;
          border-radius: 3px;
        }

        @media (max-width: 900px) {
          .minerals-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .minerals-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

function MineralCard({ mineral, description, category, highlight }) {
  const borderColor = highlight ? "#5BC0EB" : "#3A506B";
  const bgAccent = highlight ? "#EBF5FF" : "#F0F4F8";

  return (
    <div
      style={{
        background: bgAccent,
        borderRadius: "10px",
        padding: "6px 8px",
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
      {/* Category tag with mineral name */}
      <div
        style={{
          fontSize: "13px",
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: "0.3px",
          color: "#1C5D99",
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
          color: "#1B2B42",
          lineHeight: 1.3,
          marginTop: "2px",
        }}
      >
        {description}
      </div>
    </div>
  );
}

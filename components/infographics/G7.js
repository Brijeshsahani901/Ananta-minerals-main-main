import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function G7CriticalMinerals() {
  const mineralsData = [
    {
      category: "The 70% Chokepoint",
      description:
        "A secure G7+ mineral strategy starts by attacking the processing bottleneck, not just finding new mines. China is still the lead refiner for 19 of 20 strategic minerals, with an average market share around 70%, while rare earth separation and magnet production remain especially concentrated.",
      highlight: true,
    },
    {
      category: "Brazil-USA Rare Earth Bridge",
      description:
        "USA Rare Earth announced a roughly US$2.8 billion acquisition of Brazil's Serra Verde Group, who is the only producer outside Asia able to supply all four key magnetic rare earths — Nd, Pr, Dy and Tb — at scale. By 2027, Serra Verde is expected to produce more than half of non-China heavy rare earth output.",
      highlight: true,
    },
    {
      category: "Australia as the G7's Launchpad",
      description:
        "The 2025 US-Australia critical minerals framework committed each country to at least US$1 billion toward a pipeline of projects worth about US$8.5 billion, including Australian gallium and rare earth oxide projects aimed at US and Australian commercial and defence buyers rather than China-dependent routes.",
      highlight: true,
    },
    {
      category: "USA × UK",
      description:
        "USA Rare Earth has acquired Less Common Metals, a rare earth metals and alloys manufacturer, for a reported US$100 million cash plus shares. This is important because magnet supply chains do not stop at separated oxides; they need metal-making and alloying capability before NdFeB magnets can be produced.",
      highlight: true,
    },
    {
      category: "Australia × Japan",
      description:
        "Lynas Rare Earths in Australia has long been backed by Japanese partners seeking non-China supply, and its latest supply arrangement with Japan Australia Rare Earths, or JARE, reportedly extends the partnership through 2038. The deal includes a price floor around US$110/kg for NdPr, at least 5,000 tonnes of NdPr annually, and access to half of Lynas' heavy rare earth output.",
      highlight: true,
    },
    {
      category: "South Korea × USA × Canada",
      description:
        "The value chain logic is clear: Canadian location and policy support, Korean cathode chemistry, US automaker demand, and North American battery qualification under friend-shored rules.",
      highlight: true,
    },
    {
      category: "Japan × South Korea × Canada",
      description:
        "Honda plans EV and battery capacity in Ontario, while also exploring joint ventures with POSCO Future M of South Korea and Asahi Kasei of Japan for battery materials.",
      highlight: true,
    },
    {
      category: "Australia × Germany",
      description:
        "Vulcan Energy secured roughly US$3.9 billion for its German lithium and renewable energy project. Phase one targets 24,000 tonnes of lithium hydroxide monohydrate per year, described as enough for about 500,000 EV batteries annually.",
      highlight: true,
    },
    {
      category: "Brazil × Canada × USA",
      description:
        "Brazil's Vale is not just a Brazilian miner; through Vale Canada / Vale Base Metals, it is deeply embedded in Canada's nickel, copper, cobalt and PGM ecosystem.",
      highlight: true,
    },
  ];

  return (
    <div
      className={montserrat.className}
      style={{
        background: "#2A3A5A",
        borderRadius: "14px",
        padding: "8px 12px",
        color: "#FFFFFF",
        height: "530px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        overflow: "hidden",
        border: "none",
      }}
    >
      {/* Compact Header */}
      <div style={{ textAlign: "center", marginBottom: "6px", flexShrink: 0 }}>
        <h4
          style={{
            letterSpacing: "1.5px",
            fontWeight: "800",
            fontSize: "12px",
            margin: 0,
            color: "#FFFFFF",
            textTransform: "uppercase",
            lineHeight: "1.4",
          }}
        >
          G7+ CRM CORRIDOR : REDUCING DEPENDENCY THROUGH TRUSTED PARTNERSHIPS
        </h4>
        <div
          style={{
            width: "30px",
            height: "2px",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
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
          background: rgba(0, 0, 0, 0.2);
          border-radius: 3px;
        }
        .minerals-grid::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
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

function MineralCard({ description, category, highlight }) {
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
      {/* Category tag */}
      <div
        style={{
          fontSize: "12px",
          fontWeight: "700",
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
          fontSize: "12px",
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

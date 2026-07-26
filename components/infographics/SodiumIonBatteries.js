import { Montserrat } from "next/font/google";
import { useEffect, useRef } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function SodiumIonBatteries() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const wheelFn = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const atTop = scrollTop <= 1;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      // Agar container ke beech mein ho toh scroll prevent karein
      if (!atTop && !atBottom) {
        e.preventDefault();
        el.scrollTop += e.deltaY;
        return false;
      }

      // Agar top/bottom par ho toh parent ko scroll karne dein
      return true;
    };

    el.addEventListener("wheel", wheelFn, { passive: false });
    return () => el.removeEventListener("wheel", wheelFn);
  }, []);

  const data = [
    {
      category: "62 Mt",
      description:
        "Indonesia holds 62 million tonnes of nickel reserves, supporting long-term supply for stainless steel, batteries and growing domestic processing industries across Sulawesi and Maluku.",
      highlight: true,
    },
    {
      category: "2.6 Mt",
      description:
        "Indonesia mined 2.6 million tonnes of nickel in 2025, roughly two-thirds of global production, making it the decisive swing supplier shaping prices, investment decisions and international battery supply chains.",
      highlight: true,
    },
    {
      category: "60+ Smelters",
      description:
        "More than 60 operating nickel smelters were recorded by 2024, compared with only two before 2014, showing how export restrictions transformed Indonesia from ore exporter into a processing powerhouse.",
      highlight: true,
    },
    {
      category: "355,000 t/year",
      description:
        "Indonesia's HPAL facilities provide about 355,000 tonnes of annual mixed hydroxide precipitate capacity, converting low-grade laterite into nickel-cobalt electric-vehicle battery production.",
      highlight: true,
    },
    {
      category: "44,000 t",
      description:
        "Indonesia produced 44,000 tonnes of cobalt in 2025, representing 14 percent of global mine output, behind only the Democratic Republic of Congo.",
      highlight: true,
    },
    {
      category: "61,000 t",
      description:
        "Indonesia produced 61,000 tonnes of tin in 2025 and held 1.4 million tonnes of reserves, sustaining its importance to global electronics, solder, chemicals, packaging and industrial alloy markets.",
      highlight: true,
    },
    {
      category: "2.9 Bt",
      description:
        "Indonesia holds 2.9 billion tonnes of bauxite reserves and mined 10 million tonnes in 2025, providing substantial domestic feedstock for expanding alumina refining and broader aluminium value-chain development.",
      highlight: true,
    },
    {
      category: "1.5 Mt",
      description:
        "Indonesia refined approximately 1.5 million tonnes of alumina in 2025, up from 1.2 million tonnes in 2024, reflecting new capacity and stronger domestic processing following restrictions on raw bauxite exports.",
      highlight: true,
    },
    {
      category: "US$38-40 Bn",
      description:
        "Nickel-derivative exports reached an estimated US$38–40 billion in 2024, rising from US$11.9 billion in 2020 and illustrating the trade impact of Indonesia’s mandatory domestic processing and ore-export restriction strategy.",
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
            fontSize: "15px",
            margin: 0,
            color: "#E0F7FA",
            textTransform: "uppercase",
          }}
        >
          SODIUM ION BATTERIES
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
        ref={scrollRef}
        className="minerals-grid"
        style={{
          flex: 1,
          overflowY: "auto",
          paddingRight: "4px",
          overscrollBehavior: "auto",
        }}
      >
        {data.map((item, idx) => (
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

function MineralCard({ description, category, highlight }) {
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
      {/* Category tag */}
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

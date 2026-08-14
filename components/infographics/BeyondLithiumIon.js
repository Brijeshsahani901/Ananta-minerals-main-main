import { Montserrat } from "next/font/google";
import { useEffect, useRef } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function BeyondLithiumIon() {
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
      category: "Sodium Ion Battery",
      description:
        "CATL's Naxtra sodium-ion battery has reached a mass-production energy density of 175 Wh/kg and can support electric-car ranges above 400 km. Sodium is abundant and reduces dependence on lithium, nickel and cobalt.",
      bestSuitedFor: "Affordable EVs, two-wheelers and stationary storage",
      devStage: "Entering mass production",
      highlight: true,
    },
    {
      category: "Solid-State Batteries",
      description:
        "Factorial and Stellantis have demonstrated automotive-scale solid-state cells with 375 Wh/kg, charging from 15% to 90% in 18 minutes. In June 2026, the technology entered road testing in a Stellantis development vehicle.",
      bestSuitedFor: "Premium EVs and electric aviation",
      devStage: "Vehicle testing and pilot production",
      highlight: true,
    },
    {
      category: "Silicon-Anode Lithium-Ion",
      description:
        "Amprius has launched commercially available silicon-anode cells delivering up to 450 Wh/kg—around 73–80% more energy than conventional graphite-anode lithium-ion cells. Some versions can charge from 0% to 80% in approximately six minutes.",
      bestSuitedFor: "Drones, satellites, aviation and high-performance vehicles",
      devStage: "Early commercial deployment",
      highlight: true,
    },
    {
      category: "Lithium-Sulfur Batteries",
      description:
        "Lithium-sulfur batteries replace nickel- and cobalt-heavy cathodes with abundant sulfur. Lyten reports cells that can be up to 50% lighter than NMC batteries and contain no nickel, manganese, cobalt or graphite. Li-S batteries are already being supplied for UAV applications.",
      bestSuitedFor: "Aviation, drones, defence and satellites",
      devStage: "Early commercial and demonstration projects",
      highlight: true,
    },
    {
      category: "Iron-Air Batteries",
      description:
        "Form Energy's rechargeable iron-air battery is designed to store electricity for up to 100 hours, using abundant materials including iron, water and air. It targets multi-day renewable-energy gaps rather than electric vehicles.",
      bestSuitedFor: "National grids and renewable-energy storage",
      devStage: "Commercial manufacturing and deployment",
      highlight: true,
    },
    {
      category: "Vanadium Flow Batteries",
      description:
        "Vanadium flow batteries store energy in liquid electrolytes held in external tanks. Invinity's systems provide 4–18 hours of storage, unlimited cycling and an operating life exceeding 30 years. A proposed Swiss project could reach 1.5 GWh, with later expansion to 2.1 GWh.",
      bestSuitedFor: "Solar and wind integration, industrial sites and microgrids",
      devStage: "Commercial deployment",
      highlight: true,
    },
  ];

  return (
    <div
      className={montserrat.className}
      style={{
        background: "linear-gradient(135deg, #4e342e 0%, #3e2723 50%, #2d2119 100%)",
        borderRadius: "14px",
        padding: "8px 12px",
        color: "#f5ebe0",
        height: "530px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
        overflow: "hidden",
        border: "1px solid rgba(212, 163, 115, 0.4)",
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
            color: "#d4a373", // Tan/Bronze
            textTransform: "uppercase",
          }}
        >
          Beyond Lithium-Ion: The New Age of Batteries
        </h4>
        <div
          style={{
            width: "30px",
            height: "2px",
            backgroundColor: "#d4a373",
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
          background: #3e2723;
          border-radius: 3px;
        }
        .minerals-grid::-webkit-scrollbar-thumb {
          background: #d4a373;
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

function MineralCard({ description, category, bestSuitedFor, devStage, highlight }) {
  const borderColor = highlight ? "#d4a373" : "#4e342e";
  const bgAccent = highlight ? "#f5ebe0" : "#e3d5ca";

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
        height: "100%",
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
          color: "#9c6644",
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
          color: "#4e342e",
          lineHeight: 1.3,
          marginTop: "2px",
          flexGrow: 1,
        }}
      >
        {description}
      </div>
      
      {/* Additional details */}
      <div
        style={{
          fontSize: "11px",
          color: "#5d4037",
          borderTop: "1px solid #d4a373",
          paddingTop: "4px",
          marginTop: "6px"
        }}
      >
        <div style={{ marginBottom: "2px" }}>
          <strong style={{ color: "#3e2723" }}>Best suited for:</strong> {bestSuitedFor}
        </div>
        <div>
          <strong style={{ color: "#3e2723" }}>Development stage:</strong> {devStage}
        </div>
      </div>
    </div>
  );
}

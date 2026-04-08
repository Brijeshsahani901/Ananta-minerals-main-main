import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function MiningBottleneck() {
  const miningData = [
    {
      stat: "1,643",
      label: "applications",
      description:
        "Karnataka recorded the highest number of environmental clearance applications, but most approvals took over 24 months, indicating significant procedural inefficiencies and administrative bottlenecks.",
      category: "Karnataka · Env. Clearance",
      highlight: false,
      bgAccent: "#FEF3C7",
    },
    {
      stat: "69.7%",
      label: "take >2 years",
      description:
        "Nearly 70% of environmental clearances for minor minerals in Karnataka took more than two years, highlighting severe delays compared to prescribed timelines of six months.",
      category: "Karnataka · Minor Minerals",
      highlight: false,
      bgAccent: "#FFE4B5",
    },
    {
      stat: "82.5%",
      label: "cleared within 6 months",
      description:
        "Odisha processed over 80% of its minor mineral environmental clearances within six months, demonstrating comparatively efficient administrative systems and faster decision-making mechanisms.",
      category: "Odisha · Minor Minerals",
      highlight: false,
      bgAccent: "#E6F7E6",
    },
    {
      stat: "87%",
      label: "completed within 6 months",
      description:
        "Jharkhand achieved one of the fastest clearance rates, with approximately 87% of environmental approvals completed within six months, indicating relatively streamlined regulatory processing.",
      category: "Jharkhand · Env. Approvals",
      highlight: false,
      bgAccent: "#E0F2FE",
    },
    {
      stat: "192",
      label: "forest clearance apps",
      description:
        "Only 192 forest clearance applications were recorded across three major mining states, yet this stage remains the most time-consuming and critical bottleneck in the mining lifecycle.",
      category: "Forest Clearance · 3 States",
      highlight: false,
      bgAccent: "#D1FAE5",
    },
    {
      stat: "0%",
      label: "Stage-II forest clearances",
      description:
        "Jharkhand recorded zero Stage-II forest clearances despite multiple applications, indicating a complete breakdown or extreme delay in final approval processes.",
      category: "Jharkhand · Stage-II",
      highlight: false,
      bgAccent: "#FEE2E2",
    },
    {
      stat: "31",
      label: "wildlife clearance apps",
      description:
        "A total of just 31 wildlife clearance applications were filed, but approvals remain limited due to absence of fixed timelines and dependence on periodic committee meetings.",
      category: "Wildlife Clearance",
      highlight: false,
      bgAccent: "#FEF9C3",
    },
    {
      stat: "14%",
      label: "reached Stage-II approval",
      description:
        "In Odisha, only 14% of forest clearance applications progressed to final Stage-II approval, showing how most projects remain stuck in intermediate regulatory stages.",
      category: "Odisha · Forest Clearance",
      highlight: false,
      bgAccent: "#FFEDD5",
    },
    {
      stat: "80%",
      label: "Consent to Operate in <4 months",
      description:
        "Approximately 80% of Consent to Operate approvals in Odisha were granted within four months, making it the most efficient stage compared to environmental and forest clearances.",
      category: "Odisha · Consent to Operate",
      highlight: false,
      bgAccent: "#D9F99D",
    },
  ];

  return (
  <div
  className={montserrat.className}
  style={{
    background: "linear-gradient(90deg, #B71C1C 0%, #A94442 35%, #7B6D6D 70%, #5F5F5F 100%)",
    borderRadius: "16px",
    padding: "12px 16px",
    color: "#FFFFFF",
    minHeight: "530px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    overflow: "hidden",
  }}
>
      {/* Compact Header */}
      <div style={{ textAlign: "center", marginBottom: "10px", flexShrink: 0 }}>
        <h4
          style={{
            letterSpacing: "2px",
            fontWeight: "800",
            fontSize: "14px",
            margin: 0,
         color: "#FFFFFF",
            textTransform: "uppercase",
          }}
        >
          INDIA'S MINING BOTTLENECK
        </h4>
        <div
          style={{
            width: "40px",
            height: "2px",
            backgroundColor: "#C9A03D",
            margin: "5px auto 0",
          }}
        />
      </div>

      {/* Scrollable grid if needed, but fits 530px */}
      <div className="bottleneck-grid" style={{ flex: 1, overflowY: "auto", paddingRight: "4px" }}>
        {miningData.map((item, idx) => (
          <StatCard key={idx} {...item} />
        ))}
      </div>

      <style jsx>{`
        .bottleneck-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        /* Custom scrollbar for subtlety */
        .bottleneck-grid::-webkit-scrollbar {
          width: 4px;
        }
        .bottleneck-grid::-webkit-scrollbar-track {
          background: #E8DCC8;
          border-radius: 4px;
        }
        .bottleneck-grid::-webkit-scrollbar-thumb {
          background: #C9A03D;
          border-radius: 4px;
        }

        @media (max-width: 900px) {
          .bottleneck-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .bottleneck-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

/* Compact Card Component */
function StatCard({ stat, label, description, category, highlight }) {
  const borderColor = highlight ? "#B45309" : "#C9A03D";
  const bgAccent = highlight ? "#FFEDD5" : "#FFFFFF";

  return (
    <div
      style={{
        background: bgAccent,
        borderRadius: "12px",
        padding: "8px 10px",
        borderLeft: `3px solid ${borderColor}`,
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Category tag */}
      <div
        style={{
          fontSize: "10px",
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: "0.4px",
          color: "#9B6A2C",
          marginBottom: "6px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            backgroundColor: borderColor,
          }}
        />
        {category}
      </div>

      {/* Stat + label */}
      <div style={{ marginBottom: "4px", display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "4px" }}>
        <span
          style={{
            fontSize: "22px",
            fontWeight: "800",
            color: "#3A2A18",
            lineHeight: 1.2,
            letterSpacing: "-0.3px",
          }}
        >
          {stat}
        </span>
        {label && (
          <span
            style={{
              fontSize: "10px",
              fontWeight: "600",
              color: "#7A5A2E",
              textTransform: "lowercase",
            }}
          >
            {label}
          </span>
        )}
      </div>

      {/* Short description */}
      <div
        style={{
          fontSize: "12px",
          fontWeight: "500",
          color: "#4A3A28",
          lineHeight: 1.35,
          marginTop: "2px",
        }}
      >
        {description}
      </div>

      {/* Critical badge if highlight */}
      {highlight && (
        <div
          style={{
            marginTop: "6px",
            fontSize: "8px",
            fontWeight: "700",
            color: "#B45309",
            backgroundColor: "rgba(180,83,9,0.12)",
            display: "inline-block",
            padding: "2px 6px",
            borderRadius: "12px",
            alignSelf: "flex-start",
            letterSpacing: "0.3px",
          }}
        >
          ⚠️ CRITICAL
        </div>
      )}
    </div>
  );
}
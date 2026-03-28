import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RareEarthStory() {
  const rareEarthData = [
    {
      title: "13.15 M Tonnes REE Reserves",
      description:
        "The major source of REE in India is Monazite reserves in beach sand across 4 states - Andhra Pradesh, Odisha, Tamil Nadu and Kerala, containing 7.25 M Tonnes REO.",
      category: "Reserves",
    },
    {
      title: "$250 – 450 M",
      description:
        "Estimated cost to set up a 5000 - 10000 tonnes/year REO separation facility from Monazite sand.",
      category: "Investment",
    },
    {
      title: "4000 Tonnes REE Production ?",
      description:
        "IREL (India) Ltd is the primary producer that sends the raw concentrate to China for refining to produce REE.",
      category: "Production",
    },
    {
      title: "$1.25B",
      description:
        "The Australian government provided a loan to Iluka, a rare-earth processing hub designed to produce separated oxides.",
      category: "Government Support",
    },
    {
      title: "100–1000+ stages",
      description:
        "Typical number of solvent extraction stages required to separate individual rare earths. This is the real bottleneck in processing, as it determines the purity of REE and the plant's scaling capacity.",
      category: "Processing",
    },
    {
      title: "1 Chemical Extraction Circuits = ~$15 M",
      description:
        "A typical REE separation facility uses 70+ interconnected extraction circuits to isolate individual rare earth elements.",
      category: "Infrastructure",
    },
    {
      title: "1st EU magnet hub",
      description:
        "Neo Performance Materials operates Europe's major rare-earth magnet facility in Estonia supporting wind turbine and EV industries.",
      category: "Manufacturing",
    },
    {
      title: "6,000 tonnes/year",
      description:
        "Targeted annual manufacturing capability of rare earth magnets by the Government of India to support electric vehicles, renewable energy systems, electronics, and defence technologies.",
      category: "Target",
    },
  ];

  // Graph data for Monazite composition
  const graphData = [
    { name: "Cerium", value: 45 },
    { name: "Lanthanum", value: 20 },
    { name: "Neodymium", value: 15 },
    { name: "Other LREE", value: 20 },
  ];

  return (
    <div
      className={montserrat.className}
      style={{
        backgroundColor: "#A84300",
        borderRadius: "12px",
        padding: "14px 16px",
        color: "#FFFFFF",
        minHeight: "530px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <h4
          style={{
            letterSpacing: "3px",
            fontWeight: "700",
            fontSize: "16px",
            margin: 0,
            color: "#FFFFFF",
          }}
        >
          THE RARE EARTH STORY IN NUMBERS
        </h4>
      </div>

      {/* Grid */}
      <div className="rare-earth-grid">
        {/* First row - 3 cards */}
        {rareEarthData.slice(0, 3).map((item, index) => (
          <RareEarthCard key={index} {...item} />
        ))}

        {/* Second row - Card + Graph + Card */}
        <RareEarthCard {...rareEarthData[3]} />
        
        <div className="graph-container">
          <div style={{ fontSize: "11px", fontWeight: 600, marginBottom: "8px", textAlign: "center", color: "#FFE8D8" }}>
            Light REE in Monazite (%)
          </div>
          {graphData.map((item, index) => (
            <GraphBar key={index} name={item.name} value={item.value} />
          ))}
        </div>
        
        <RareEarthCard {...rareEarthData[4]} />

        {/* Third row - remaining cards */}
        {rareEarthData.slice(5).map((item, index) => (
          <RareEarthCard key={index + 5} {...item} />
        ))}
      </div>

      <style jsx>{`
        .rare-earth-grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        @media (max-width: 992px) {
          .rare-earth-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .rare-earth-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
        
        .graph-container {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          padding: 12px;
          border-left: 4px solid #D7261B;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}

function RareEarthCard({ title, description, category }) {
  return (
    <div
      style={{
        background: "rgba(0, 0, 0, 0.2)",
        borderRadius: "12px",
        padding: "12px",
        borderLeft: "4px solid #D7261B",
        display: "flex",
        flexDirection: "column",
        backdropFilter: "blur(2px)",
      }}
    >
      <div style={{ marginBottom: "6px" }}>
        <h6 style={{ margin: 0, fontSize: "13px", fontWeight: 700, color: "#FFFFFF" }}>
          {category}
        </h6>
        <div style={{ fontSize: "16px", fontWeight: 800, marginTop: 4, color: "#FFFFFF", lineHeight: "1.3" }}>
          {title}
        </div>
      </div>

      <div style={{ fontSize: "11px", marginTop: "auto", color: "#FFE8D8", lineHeight: "1.4" }}>
        {description}
      </div>
    </div>
  );
}

function GraphBar({ name, value }) {
  return (
    <div style={{ marginBottom: "8px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "10px",
          marginBottom: "2px",
          color: "#FFE8D8"
        }}
      >
        <span>{name}</span>
        <span>{value}%</span>
      </div>

      <div
        style={{
          height: "6px",
          background: "rgba(0, 0, 0, 0.3)",
          borderRadius: "4px",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            background: "#D7261B"
          }}
        />
      </div>
    </div>
  );
}
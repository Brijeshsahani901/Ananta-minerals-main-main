import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function GCCConflict() {
  const gccData = [
    {
      name: "Iran",
      flag: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg",
      value: "20",
      unit: "billion tonnes",
      description:
        "Holds ~20 billion tonnes of copper ore reserves and produced ~279,700 tonnes of copper, making it a major Middle-East copper resource hub.",
      category: "Copper",
      highlight: false,
    },
    {
      name: "Israel",
      flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg",
      value: "2",
      unit: "billion tonnes",
      description:
        "The Dead Sea basin contains ~2 billion tonnes of potash resources, supporting ~3.8 million tonnes of annual potash production for global fertilisers.",
      category: "Potash",
      highlight: false,
    },
    {
      name: "United States",
      flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
      value: "45,000",
      unit: "tonnes",
      description:
        "Produced ~45,000 tonnes of rare earth oxides (REO) annually, anchored by the Mountain Pass mine, a key Western rare-earth supply source.",
      category: "Rare Earth",
      highlight: false,
    },
    {
      name: "Lebanon",
      flag: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg",
      value: "19",
      unit: "% decline",
      description:
        "Limited domestic minerals but part of the Eastern Mediterranean fertilizer and industrial-minerals supply chain, with ~19% decline in phosphate-related production in recent years.",
      category: "Phosphates",
      highlight: true,
    },
    {
      name: "Iraq",
      flag: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg",
      value: "9–10",
      unit: "billion tonnes",
      description:
        "Possesses ~9–10 billion tonnes of phosphate resources, among the largest undeveloped phosphate reserves in the world.",
      category: "Phosphate",
      highlight: false,
    },
    {
      name: "United Arab Emirates",
      flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
      value: "2.7–2.8",
      unit: "million tonnes",
      description:
        "Produces ~2.7–2.8 million tonnes of aluminium annually through Emirates Global Aluminium, making it a major global aluminium exporter.",
      category: "Aluminium",
      highlight: false,
    },
    {
      name: "Saudi Arabia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",
      value: "3",
      unit: "million tonnes",
      description:
        "Expanding its mineral sector with ~3 million tonnes new phosphate capacity and ~$2.5 trillion estimated mineral resources including copper and rare earths.",
      category: "Phosphate",
      highlight: false,
    },
    {
      name: "Qatar",
      flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg",
      value: "35",
      unit: "%",
      description:
        "Supplies ~35% of the world’s helium and operates ~77 million tonnes per year LNG capacity, both critical for semiconductor and energy industries.",
      category: "Helium",
      highlight: false,
    },
    {
      name: "Yemen",
      flag: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg",
      value: "1.53",
      unit: "million tonnes",
      description:
        "Holds significant untapped gold, copper and zinc potential, though current mineral output remains modest at ~1.53 million tonnes annually.",
      category: "Minerals",
      highlight: false,
    },
  ];

  return (
    <div
      className={montserrat.className}
      style={{
        backgroundColor: "#B78A00", // original mustard background
        borderRadius: "12px",
        padding: "14px 16px",
        color: "black",
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
          }}
        >
          GCC IN CONFLICT: WHERE IT STANDS
        </h4>
      </div>

      {/* Grid of cards */}
      <div className="country-grid">
        {gccData.map((item, index) => (
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

/* Card Component – adapted to mustard theme */
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
        background: "rgba(255, 255, 200, 0.25)", // light, warm overlay
        borderRadius: "12px",
        padding: "12px",
        borderLeft: `4px solid ${
          highlight ? "#000000" : "#8B6B00" // black for highlight, darker mustard otherwise
        }`,
        backdropFilter: "blur(4px)",
        display: "flex",
        flexDirection: "column",
        color: "black",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={flag}
          alt={`${name} flag`}
          style={{
            width: "28px",
            height: "20px",
            marginRight: "8px",
            borderRadius: "3px",
            objectFit: "cover",
          }}
        />
        <div>
          <h6 style={{ margin: 0, fontSize: "13px", fontWeight: 700 }}>
            {name}
          </h6>
          <div
            style={{
              fontSize: "9px",
              color: "#2a2a2a", // dark gray for category
              fontWeight: 600,
            }}
          >
            {category}
          </div>
        </div>
      </div>

      <div style={{ fontSize: "20px", fontWeight: 800, marginTop: 6 }}>
        {value}
        <span style={{ fontSize: 11, marginLeft: 4, color: "#2a2a2a" }}>
          {unit}
        </span>
      </div>

      <div
        style={{
          fontSize: "11px",
          color: "#1e1e1e",
          marginTop: "auto",
          lineHeight: 1.4,
        }}
      >
        {description}
      </div>
    </div>
  );
}
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function SemiconductorSupplyChain() {
  const semiconductorData = [
    {
      name: "USA & CANADA",
      flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
      value: "",
      unit: "",
      description:
        "Leads in chip architecture, limited domestic fabrication but expanding rapidly via CHIPS Act; combine ~50% global chip design leadership with vast nickel, cobalt, and rare earth reserves.",
      category: "Design & Resources",
    },
    {
      name: "TAIWAN",
      flag: "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg",
      value: "~60%",
      unit: "global foundry",
      description:
        "Transforms imported ultra-pure materials into the world's most advanced semiconductors — greater than 90% advanced chips (<7nm).",
      category: "Semiconductor Fab",
    },
    {
      name: "SOUTH KOREA",
      flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
      value: "70%",
      unit: "DRAM",
      description:
        "Memory semiconductor powerhouse (70% global DRAM, ~50% NAND Flash) with growing investments in logic chips and foundry services.",
      category: "Memory",
    },
    {
      name: "JAPAN",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
      value: "~50%",
      unit: "materials",
      description:
        "Supplies ~50% semiconductor materials and ~90% EUV photoresists; leads in wafers, chemicals, and rare earth processing and recycling.",
      category: "Materials",
    },
    {
      name: "NETHERLANDS",
      flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
      value: "100%",
      unit: "EUV systems",
      description:
        "ASML provides 100% EUV lithography systems — a critical chokepoint enabling production of chips below 7nm globally.",
      category: "Equipment",
    },
    {
      name: "SINGAPORE",
      flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
      value: "~5%",
      unit: "global semiconductors",
      description:
        "Critical hub for fabrication, equipment servicing, and advanced packaging within global semiconductor supply chains.",
      category: "Fab & Packaging",
    },
    {
      name: "EU",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
      value: "20%",
      unit: "target by 2030",
      description:
        "Targets 20% global semiconductor production by 2030; strong in materials, equipment, and power semiconductors while expanding refining and supply chain resilience.",
      category: "Strategic Expansion",
    },
    {
      name: "AUSTRALIA",
      flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
      value: "~10%",
      unit: "rare earths",
      description:
        "Supplies critical semiconductor inputs including rare earths (~10% global via Lynas) and high-purity alumina.",
      category: "Raw Materials",
    },
    {
      name: "INDIA",
      flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
      value: "$10B",
      unit: "incentives",
      description:
        "Offers $10B semiconductor incentives and ~6% rare earth reserves; scaling fabs, packaging, and refining to become an alternative supply chain hub.",
      category: "Emerging Hub",
    },
  ];

  return (
    <div
      className={montserrat.className}
      style={{
        backgroundColor: "#2C2C2C",
        borderRadius: "12px",
        padding: "14px 16px",
        color: "#E0E0E0",
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
          PAX SILICA
        </h4>
      </div>

      {/* Grid */}
      <div className="country-grid">
        {semiconductorData.map((item, index) => (
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

function CountryCard({ name, flag, value, unit, description, category }) {
  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.08)",
        borderRadius: "12px",
        padding: "12px",
        borderLeft: "4px solid #6B6B6B",
        display: "flex",
        flexDirection: "column",
        backdropFilter: "blur(2px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={flag}
          alt=""
          style={{
            width: "28px",
            height: "20px",
            marginRight: "8px",
            borderRadius: "3px",
            objectFit: "cover",
          }}
        />
        <div>
          <h6 style={{ margin: 0, fontSize: "13px", fontWeight: 700, color: "#FFFFFF" }}>
            {name}
          </h6>
          <div style={{ fontSize: "9px", fontWeight: 600, color: "#B0B0B0" }}>
            {category}
          </div>
        </div>
      </div>

      {value && (
        <div style={{ fontSize: "18px", fontWeight: 800, marginTop: 6, color: "#FFFFFF" }}>
          {value} <span style={{ fontSize: 10, color: "#B0B0B0" }}>{unit}</span>
        </div>
      )}

      <div style={{ fontSize: "11px", marginTop: "auto", color: "#D0D0D0", lineHeight: "1.4" }}>
        {description}
      </div>
    </div>
  );
}
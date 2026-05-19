import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export default function MiningBottleneck() {
  const miningData = [
    {
        stat: "500,000+",
        label: "tonnes",
        description: "Chinese-owned mining operations dumped more than 500,000 tonnes of toxic tailings into unauthorized sites, contaminating groundwater and surrounding soil with dangerous concentrations of lead and heavy metals that continue to threaten public health.",
        category: "Kabwe, Zambia · Lead & Zinc Mine",
        highlight: true,
    },
    {
        stat: "1.2M",
        label: "tonnes",
        description: "China Nonferrous Metal Mining Group extracts copper used in power grids, EVs, and electronics, while around 1.2 million tonnes of acidic waste polluted rivers, farmland, and local water supplies.",
        category: "D.R. Congo · Copper Mine",
        highlight: true,
    },
    {
        stat: "890,000",
        label: "tonnes",
        description: "Improper disposal of nearly 890,000 tonnes of nickel-processing waste contaminated rivers and coastal ecosystems with heavy metals, damaging fisheries and marine biodiversity.",
        category: "Sulawesi, Indonesia · Nickel Mine",
        highlight: true,
    },
    {
        stat: "350,000",
        label: "tonnes",
        description: "Around 350,000 tonnes of cyanide-bearing waste leaked into nearby waterways after poor containment practices, creating long-term risks for aquatic ecosystems and human health.",
        category: "Mongu, Zambia · Gold Mine",
        highlight: true,
    },
    {
        stat: "2.6M+",
        label: "tonnes",
        description: "The Bayan Obo mine extracts rare earths such as neodymium and terbium used in EVs, wind turbines, and electronics, while more than 2.6 million tonnes of toxic tailings polluted surrounding land and water systems.",
        category: "Bayan Obo, Inner Mongolia · Rare Earth Mine",
        highlight: true,
    },
    {
        stat: "1.5M",
        label: "tonnes",
        description: "Huayou Cobalt sourced cobalt for EV batteries and electronics while generating an estimated 1.5 million tonnes of hazardous mining waste and toxic runoff that contaminated water sources and exposed nearby communities to heavy-metal pollution.",
        category: "D.R. Congo · Cobalt Mine",
        highlight: true,
    },
    {
        stat: "800,000+",
        label: "tonnes",
        description: "Sinomine Resource Group's Bikita Minerals extracted lithium for EV batteries and energy storage systems while discharging more than 800,000 tonnes of toxic mining waste into local dams and waterways, polluting farmland and disrupting access to clean drinking water.",
        category: "Zimbabwe · Lithium Mine",
        highlight: true,
    },
    {
        stat: "1.8M",
        label: "tonnes",
        description: "Nearly 1.8 million tonnes of tailings and waste rock polluted streams and farmland with heavy metals, impacting biodiversity and nearby rural communities.",
        category: "Sepon, Laos · Copper Gold Mine",
        highlight: true,
    },
    {
        stat: "1.1M",
        label: "tonnes",
        description: "Approximately 1.1 million tonnes of caustic red mud and mining waste were discharged into nearby waterways, polluting ecosystems and increasing water alkalinity levels.",
        category: "Weipa, Guyana · Bauxite Mine",
        highlight: true,
    },
];

    return (
        <div
            className={montserrat.className}
            style={{
                background: "linear-gradient(135deg, #1a2332 0%, #2d3748 50%, #1a202c 100%)",
                borderRadius: "14px",
                padding: "8px 12px",
                color: "#FFFFFF",
                height: "530px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                overflow: "hidden",
                border: "1px solid rgba(198, 40, 40, 0.3)",
            }}
        >
            {/* Compact Header - reduced padding and font */}
            <div style={{ textAlign: "center", marginBottom: "6px", flexShrink: 0 }}>
                <h4
                    style={{
                        letterSpacing: "1.5px",
                        fontWeight: "800",
                        fontSize: "13px",
                        margin: 0,
                        color: "#E2E8F0",
                        textTransform: "uppercase",
                    }}
                >
                   Dark side of China’s Control over Critical Minerals
                </h4>
                <div
                    style={{
                        width: "30px",
                        height: "2px",
                        backgroundColor: "#C62828",
                        margin: "4px auto 0",
                    }}
                />
            </div>

            {/* Scrollable grid - tighter gap */}
            <div className="bottleneck-grid" style={{ flex: 1, overflowY: "auto", paddingRight: "4px" }}>
                {miningData.map((item, idx) => (
                    <StatCard key={idx} {...item} />
                ))}
            </div>

            <style jsx>{`
        .bottleneck-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
        }

        /* Custom scrollbar for subtlety */
        .bottleneck-grid::-webkit-scrollbar {
          width: 3px;
        }
        .bottleneck-grid::-webkit-scrollbar-track {
          background: #2d3748;
          border-radius: 3px;
        }
        .bottleneck-grid::-webkit-scrollbar-thumb {
          background: #C62828;
          border-radius: 3px;
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

/* Compact Card Component - reduced padding and font sizes */
function StatCard({ stat, label, description, category, highlight }) {
    const borderColor = highlight ? "#C62828" : "#4A5568";
    const bgAccent = highlight ? "#FFF5F5" : "#F7FAFC";

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
            {/* Category tag - smaller font */}
            <div
                style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.3px",
                    color: "#C62828",
                    marginBottom: "4px",
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                }}
            >
                {category}
            </div>

            {/* Short description - tighter line height */}
            <div
                style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    color: "#2d3748",
                    lineHeight: 1.25,
                    marginTop: "2px",
                }}
            >
                {description}
            </div>
        </div>
    );
}
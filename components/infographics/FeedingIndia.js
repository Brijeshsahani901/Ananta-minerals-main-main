import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export default function FeedingIndia() {
    const fertilizerData = [
        {
            stat: "18–22",
            label: "Million Tonnes",
            description:
                "India continues to import over 18 million tonnes of fertiliser minerals annually, reflecting dependence on global supply chains for agricultural productivity.",
            category: "🇮🇳 Total Mineral Imports",
            highlight: false,
        },
        {
            stat: "~100%",
            label: "import dependent",
            description:
                "India is nearly 100% import-dependent on potash. Essential for water regulation and yield in crops like sugarcane, potato, and cotton across Maharashtra, Gujarat, and UP.",
            category: "Potash · Critical Mineral",
            highlight: false,
        },
        {
            stat: "4–6",
            label: "Million Tonnes",
            description:
                "India imports ~4–6 million tonnes of sulphur annually. Critical for oilseeds, pulses, and onions, widely used in Maharashtra, Rajasthan, and Madhya Pradesh.",
            category: "Sulphur · Annually",
            highlight: false,
        },
        {
            stat: "₹1.7–2.2",
            label: "Lakh Crore",
            description:
                "Fertiliser subsidy remains in the ₹1.7–2.2 lakh crore range, driven by global mineral prices. Supports urea and DAP use in rice-wheat systems across northern and eastern India.",
            category: "Fertilizer Subsidy",
            highlight: false,
        },
        {
            stat: "~500",
            label: "Tonnes",
            description:
                "India imports ~500 tonnes of selenium annually. Used in biofortification of crops like wheat and lentils, with pilot adoption in Punjab and Madhya Pradesh.",
            category: "Selenium · Biofortification",
            highlight: false,
        },
        {
            stat: "~80%",
            label: "imports | 19% deficiency",
            description:
                "India imports ~80% of boron, with ~19% soils deficient. Essential for fruit, vegetable, and sugarcane quality in states like Maharashtra, Karnataka, and Tamil Nadu.",
            category: "Boron · Soil Deficiency",
            highlight: false,
        },
        {
            stat: "60–70%",
            label: "import dependent",
            description:
                "India imports ~60–70% of phosphate needs. Used in DAP fertilizers for root development in crops like wheat, rice, and pulses, especially in Rajasthan, MP, and UP.",
            category: "Phosphate · DAP Fertilizer",
            highlight: false,
        },
        {
            stat: "40–50%",
            label: "import dependent",
            description:
                "Around 40–50% of zinc fertilizer demand is import-dependent. Zinc improves grain quality in rice and maize, especially in zinc-deficient soils of Bihar, UP, and Karnataka.",
            category: "Zinc · Grain Quality",
            highlight: false,
        },
        {
            stat: "~40–50%",
            label: "from Gulf countries",
            description:
                "Nearly half of India's urea imports originate from Gulf countries, making fertilizer supply highly exposed to disruptions in the Strait of Hormuz shipping route.",
            category: "Urea · Supply Risk",
            highlight: false,
        },
    ];

    return (
        <div
            className={montserrat.className}
            style={{
                background: "linear-gradient(135deg, #1a3c2c 0%, #2d5a3b 50%, #1e4a2f 100%)",
                borderRadius: "16px",
                padding: "12px 16px",
                color: "#FFFFFF",
                minHeight: "530px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                overflow: "hidden",
                border: "1px solid rgba(245, 176, 66, 0.4)",
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
                        color: "#F5E6B2",
                        textTransform: "uppercase",
                    }}
                >
                   FEEDING INDIA, IMPORTING RISK
                </h4>
                <div
                    style={{
                        width: "40px",
                        height: "2px",
                        backgroundColor: "#F5B042",
                        margin: "5px auto 0",
                    }}
                />
            </div>

            {/* Scrollable grid */}
            <div className="fertilizer-grid" style={{ flex: 1, overflowY: "auto", paddingRight: "4px" }}>
                {fertilizerData.map((item, idx) => (
                    <StatCard key={idx} {...item} />
                ))}
            </div>

            <style jsx>{`
        .fertilizer-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        /* Custom scrollbar */
        .fertilizer-grid::-webkit-scrollbar {
          width: 4px;
        }
        .fertilizer-grid::-webkit-scrollbar-track {
          background: #2d5a3b;
          border-radius: 4px;
        }
        .fertilizer-grid::-webkit-scrollbar-thumb {
          background: #F5B042;
          border-radius: 4px;
        }

        @media (max-width: 900px) {
          .fertilizer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .fertilizer-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
        </div>
    );
}

/* Compact Card Component - Agriculture/Earthy Theme */
function StatCard({ stat, label, description, category, highlight }) {
    const borderColor = highlight ? "#F5B042" : "#7CB342";
    const bgAccent = highlight ? "#FFF8E7" : "#F5F9F0";

    return (
        <div
            style={{
                background: bgAccent,
                borderRadius: "12px",
                padding: "8px 10px",
                borderLeft: `3px solid ${borderColor}`,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
            }}
        >
            {/* Category tag */}
            <div
                style={{
                    fontSize: "10px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.4px",
                    color: highlight ? "#C96A0F" : "#4A7C2E",
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
                        color: "#1a3c2c",
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
                            color: "#5A6B4A",
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
                    fontSize: "11px",
                    fontWeight: "500",
                    color: "#2d3748",
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
                        color: "#C96A0F",
                        backgroundColor: "rgba(245, 176, 66, 0.15)",
                        display: "inline-block",
                        padding: "2px 6px",
                        borderRadius: "12px",
                        alignSelf: "flex-start",
                        letterSpacing: "0.3px",
                    }}
                >
                    ⚠️ HIGH DEPENDENCY
                </div>
            )}
        </div>
    );
}
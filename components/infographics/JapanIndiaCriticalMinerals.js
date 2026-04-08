import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export default function MiningBottleneck() {
    const miningData = [
        {
            stat: "100%",
            label: "import dependent",
            description:
                "Japan is 100% import-dependent on 3 battery-relevant minerals: lithium, cobalt, and nickel.",
            category: "Japan · Critical Minerals",
            highlight: false,
        },
        {
            stat: "44.4B",
            label: "USD investment",
            description:
                "Cumulative Japanese FDI into India since 2000 stood at USD 44.4 billion.",
            category: "Japan → India Investment",
            highlight: false,
        },
        {
            stat: "3",
            label: "cooperation tracks",
            description:
                "The 2025 India-Japan Mineral Resources MoC sets out 3 cooperation tracks: information exchange, joint investment, and other mutually agreed cooperation",
            category: "India–Japan Agreement",
            highlight: false,
        },
        {
            stat: "6th",
            label: "largest jurisdiction",
            description:
                "Japan's maritime jurisdiction is the 6th largest in the world, important for offshore mineral resources.",
            category: "Japan · Maritime Resources",
            highlight: false,
        },
        {
            stat: "2",
            label: "agreements",
            description:
                "India and Japan signed a Memorandum of Cooperation in the Field of Mineral Resources in August 2025 and a 2012 Memorandum of Understanding on Rare Earths. ",
            category: "Bilateral Agreements",
            highlight: false,
        },
        {
            stat: "8%",
            label: "global reserves",
            description:
                "India's rare-earth reserves account for about 8% of the world total.",
            category: "India · Rare Earths",
            highlight: false,
        },
        {
            stat: "JPY 10T",
            label: "investment target",
            description:
                "Japan and India set a private investment target of JPY 10 trillion.",
            category: "Investment Target",
            highlight: false,
        },
        {
            stat: "34",
            label: "tracked minerals",
            description:
                "Japan's official resource strategy tracks 34 critical minerals.",
            category: "Japan · Strategy",
            highlight: false,
        },
        {
            stat: "60%",
            label: "imports from China",
            description:
                "60% of Japan's rare earth imports come from China, with 16% from Vietnam.",
            category: "Japan · Supply Chain",
            highlight: false,
        },
    ];

    return (
        <div
            className={montserrat.className}
            style={{
                background: "linear-gradient(135deg, #1a2332 0%, #2d3748 50%, #1a202c 100%)",
                borderRadius: "16px",
                padding: "12px 16px",
                color: "#FFFFFF",
                minHeight: "530px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                overflow: "hidden",
                border: "1px solid rgba(198, 40, 40, 0.3)",
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
                        color: "#E2E8F0",
                        textTransform: "uppercase",
                    }}
                >
                   JAPAN - INDIA CRITICAL MINERALS SNAPSHOT
                </h4>
                <div
                    style={{
                        width: "40px",
                        height: "2px",
                        backgroundColor: "#C62828",
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
          background: #2d3748;
          border-radius: 4px;
        }
        .bottleneck-grid::-webkit-scrollbar-thumb {
          background: #C62828;
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
    const borderColor = highlight ? "#C62828" : "#4A5568";
    const bgAccent = highlight ? "#FFF5F5" : "#F7FAFC";

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
                    color: "#C62828",
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
                        color: "#1a202c",
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
                            color: "#4A5568",
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
                        color: "#C62828",
                        backgroundColor: "rgba(198, 40, 40, 0.12)",
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
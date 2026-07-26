import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function QuadCriticalMineralPartnership() {
  return (
    <div
      className={montserrat.className}
      style={{
        background:
          "linear-gradient(160deg, #080c18 0%, #111a33 30%, #0a1228 65%, #040812 100%)",
        borderRadius: "24px",
        padding: "28px 30px 30px 30px",
        color: "#FFFFFF",
        height: "530px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow:
          "0 24px 48px -12px rgba(0,0,0,0.95), 0 0 120px rgba(255, 180, 0, 0.04), inset 0 1px 0 rgba(255,255,255,0.04)",
        overflow: "hidden",
        border: "1px solid rgba(255, 180, 0, 0.06)",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Ambient glow effects with gold/amber theme */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-100px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(255, 180, 0, 0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(255, 100, 0, 0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(255, 200, 100, 0.015) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "blur(50px)",
        }}
      />

      {/* Title Section */}
      <div
        style={{
          textAlign: "left",
          marginBottom: "20px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "36px",
              background: "linear-gradient(180deg, #fbbf24, #f59e0b)",
              borderRadius: "2px",
              flexShrink: 0,
              boxShadow: "0 0 30px rgba(251, 191, 36, 0.2)",
            }}
          />
          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "800",
                letterSpacing: "-0.3px",
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.2,
                background: "linear-gradient(#fbbf24 80%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              QUAD Critical Mineral Partnership
            </h3>
            <p
              style={{
                fontSize: "10px",
                color: "#8a8a9a",
                margin: "2px 0 0 0",
                fontWeight: "500",
                letterSpacing: "0.3px",
              }}
            >
              USA · Japan · Australia · India — Securing resilient critical
              mineral supply chains
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        className="quad-scroll"
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          paddingRight: "4px",
          marginRight: "-4px",
        }}
      >
        {/* Country Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
            flexShrink: 0,
          }}
        >
          {/* USA - Blue Theme */}
          <div
            style={{
              background:
                "linear-gradient(160deg, rgba(0, 35, 65, 0.8), rgba(0, 15, 35, 0.6))",
              borderRadius: "14px",
              padding: "14px 16px 16px 16px",
              border: "1px solid rgba(59, 130, 246, 0.08)",
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(59, 130, 246, 0.04)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background:
                  "linear-gradient(90deg, transparent, #3b82f6, transparent)",
              }}
            />
            <div
              style={{
                fontSize: "9px",
                fontWeight: "800",
                color: "#60a5fa",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                marginBottom: "6px",
              }}
            >
              USA
            </div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: "900",
                color: "#3b82f6",
                margin: "0 0 8px 0",
                textShadow: "0 0 30px rgba(59, 130, 246, 0.15)",
              }}
            >
              $270M
            </div>
            <p
              style={{
                fontSize: "11px",
                lineHeight: "1.6",
                color: "#b0cce8",
                margin: 0,
                fontWeight: "400",
              }}
            >
              US Department of Commerce Federal Incentives to USA Rare Earth +
              $1.3B loan agreement under Chips Act to produce 10,000 TPA of
              NdFeB permanent magnets.
            </p>
          </div>

          {/* Japan - Red Theme */}
          <div
            style={{
              background:
                "linear-gradient(160deg, rgba(65, 0, 20, 0.8), rgba(35, 0, 10, 0.6))",
              borderRadius: "14px",
              padding: "14px 16px 16px 16px",
              border: "1px solid rgba(239, 68, 68, 0.08)",
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(239, 68, 68, 0.04)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background:
                  "linear-gradient(90deg, transparent, #ef4444, transparent)",
              }}
            />
            <div
              style={{
                fontSize: "9px",
                fontWeight: "800",
                color: "#f87171",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                marginBottom: "6px",
              }}
            >
              Japan
            </div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: "900",
                color: "#ef4444",
                margin: "0 0 8px 0",
                textShadow: "0 0 30px rgba(239, 68, 68, 0.15)",
              }}
            >
              100+
            </div>
            <p
              style={{
                fontSize: "11px",
                lineHeight: "1.6",
                color: "#e8b0b0",
                margin: 0,
                fontWeight: "400",
              }}
            >
              JOGMEC Invested in Lynas to secure 75% of Terbium and Dysprosium
              to Japan for processing and refining.
            </p>
          </div>

          {/* Australia - Gold/Amber Theme */}
          <div
            style={{
              background:
                "linear-gradient(160deg, rgba(45, 30, 0, 0.8), rgba(25, 15, 0, 0.6))",
              borderRadius: "14px",
              padding: "14px 16px 16px 16px",
              border: "1px solid rgba(245, 158, 11, 0.08)",
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(245, 158, 11, 0.04)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background:
                  "linear-gradient(90deg, transparent, #f59e0b, transparent)",
              }}
            />
            <div
              style={{
                fontSize: "9px",
                fontWeight: "800",
                color: "#fbbf24",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                marginBottom: "6px",
              }}
            >
              Australia
            </div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: "900",
                color: "#f59e0b",
                margin: "0 0 8px 0",
                textShadow: "0 0 30px rgba(245, 158, 11, 0.15)",
              }}
            >
              A$1.65B
            </div>
            <p
              style={{
                fontSize: "11px",
                lineHeight: "1.6",
                color: "#e8d4b0",
                margin: 0,
                fontWeight: "400",
              }}
            >
              ILUKA's Eneabba Refinery is backed by Australian Government to
              produce 23,000 TPA of Rare Earth Oxides.
            </p>
          </div>

          {/* India - Green Theme */}
          <div
            style={{
              background:
                "linear-gradient(160deg, rgba(0, 45, 30, 0.8), rgba(0, 25, 15, 0.6))",
              borderRadius: "14px",
              padding: "14px 16px 16px 16px",
              border: "1px solid rgba(16, 185, 129, 0.08)",
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(16, 185, 129, 0.04)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background:
                  "linear-gradient(90deg, transparent, #10b981, transparent)",
              }}
            />
            <div
              style={{
                fontSize: "9px",
                fontWeight: "800",
                color: "#34d399",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                marginBottom: "6px",
              }}
            >
              India
            </div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: "900",
                color: "#10b981",
                margin: "0 0 8px 0",
                textShadow: "0 0 30px rgba(16, 185, 129, 0.15)",
              }}
            >
              $750M
            </div>
            <p
              style={{
                fontSize: "11px",
                lineHeight: "1.6",
                color: "#b0e8d0",
                margin: 0,
                fontWeight: "400",
              }}
            >
              India's National Critical Mineral Mission scheme is supporting PSU
              and private companies to produce 6,000 MTPA integrated sintered
              permanent magnet manufacturing.
            </p>
          </div>
        </div>

        {/* Recommendations Section */}
        <div
          style={{
            background:
              "linear-gradient(160deg, rgba(30, 25, 10, 0.8), rgba(15, 12, 5, 0.6))",
            borderRadius: "14px",
            padding: "18px 20px 20px 20px",
            border: "1px solid rgba(251, 191, 36, 0.06)",
            boxShadow:
              "0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(251, 191, 36, 0.03)",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "14px",
            }}
          >
            <div
              style={{
                width: "3px",
                height: "24px",
                background: "linear-gradient(180deg, #fbbf24, #f59e0b)",
                borderRadius: "2px",
                flexShrink: 0,
              }}
            />
            <div
              style={{
                fontSize: "12px",
                fontWeight: "800",
                color: "#fbbf24",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              QUAD Framework Recommendation
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            {/* Card 1 - Graphite Demand */}
            <div
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                borderRadius: "10px",
                padding: "12px 14px",
                border: "1px solid rgba(255, 255, 255, 0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "6px",
                }}
              >
                <span
                  style={{
                    fontSize: "9px",
                    fontWeight: "700",
                    color: "#60a5fa",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Graphite Demand
                </span>
              </div>
              <p
                style={{
                  fontSize: "11px",
                  lineHeight: "1.6",
                  color: "#b0cce8",
                  margin: 0,
                  fontWeight: "400",
                }}
              >
                Clean-energy graphite demand rises from 1.29M tonnes (2023) to
                6.01M tonnes (2030). Top 3 refining countries to hold ~97% of
                refining capacity in 2030.
              </p>
            </div>

            {/* Card 2 - Graphite Choke Point */}
            <div
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                borderRadius: "10px",
                padding: "12px 14px",
                border: "1px solid rgba(255, 255, 255, 0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "6px",
                }}
              >
                <span
                  style={{
                    fontSize: "9px",
                    fontWeight: "700",
                    color: "#fbbf24",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Choke Point
                </span>
              </div>
              <p
                style={{
                  fontSize: "11px",
                  lineHeight: "1.6",
                  color: "#e8d4b0",
                  margin: 0,
                  fontWeight: "400",
                }}
              >
                Lithium gets headlines, but anode-grade graphite may be the
                quieter choke point. Quad battery strategy needs purified
                graphite, coating, anode qualification &amp; cell validation.
              </p>
            </div>

            {/* Card 3 - PCAM Concentration */}
            <div
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                borderRadius: "10px",
                padding: "12px 14px",
                border: "1px solid rgba(255, 255, 255, 0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "6px",
                }}
              >
                <span
                  style={{
                    fontSize: "9px",
                    fontWeight: "700",
                    color: "#60a5fa",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  PCAM Concentration
                </span>
              </div>
              <p
                style={{
                  fontSize: "11px",
                  lineHeight: "1.6",
                  color: "#b0cce8",
                  margin: 0,
                  fontWeight: "400",
                }}
              >
                By 2030, nearly 90% of Precursor Cathode Active Material
                capacity expected to remain concentrated in China, limiting
                security benefit of battery recycling elsewhere.
              </p>
            </div>

            {/* Card 4 - Battery Independence */}
            <div
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                borderRadius: "10px",
                padding: "12px 14px",
                border: "1px solid rgba(255, 255, 255, 0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "6px",
                }}
              >
                <span
                  style={{
                    fontSize: "9px",
                    fontWeight: "700",
                    color: "#fbbf24",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Recycling Reality
                </span>
              </div>
              <p
                style={{
                  fontSize: "11px",
                  lineHeight: "1.6",
                  color: "#e8d4b0",
                  margin: 0,
                  fontWeight: "400",
                }}
              >
                If QUAD countries recycle batteries but still export black mass
                into China-centered cathode ecosystem, they've created a
                waste-management industry — not mineral independence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .quad-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .quad-scroll::-webkit-scrollbar-track {
          background: rgba(251, 191, 36, 0.03);
          border-radius: 10px;
        }
        .quad-scroll::-webkit-scrollbar-thumb {
          background: rgba(251, 191, 36, 0.2);
          border-radius: 10px;
        }
        .quad-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(251, 191, 36, 0.35);
        }
        .quad-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(251, 191, 36, 0.2) transparent;
        }
      `}</style>
    </div>
  );
}

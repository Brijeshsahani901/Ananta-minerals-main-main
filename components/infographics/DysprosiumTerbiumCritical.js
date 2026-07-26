import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function DysprosiumTerbiumCritical() {
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
          "0 24px 48px -12px rgba(0,0,0,0.95), 0 0 120px rgba(0, 180, 255, 0.04), inset 0 1px 0 rgba(255,255,255,0.04)",
        overflow: "hidden",
        border: "1px solid rgba(0, 180, 255, 0.06)",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Ambient glow effects */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-100px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(0, 180, 255, 0.06) 0%, transparent 70%)",
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
            "radial-gradient(circle, rgba(0, 255, 200, 0.04) 0%, transparent 70%)",
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
            "radial-gradient(circle, rgba(100, 200, 255, 0.015) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "blur(50px)",
        }}
      />

      {/* Title with clean design */}
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
              background: "linear-gradient(180deg, #4ac0e0, #0088aa)",
              borderRadius: "2px",
              flexShrink: 0,
              boxShadow: "0 0 30px rgba(0, 180, 255, 0.2)",
            }}
          />
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "800",
              letterSpacing: "-0.3px",
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.3,
              background: "linear-gradient(135deg, #ffffff 0%, #80d4ff 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why Dysprosium &amp; Terbium Are Critical—and Hard to Replace
          </h3>
        </div>
      </div>

      {/* Scrollable content */}
      <div
        className="dy-tb-scroll"
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          paddingRight: "4px",
          marginRight: "-4px",
        }}
      >
        {/* Top card — 98% stat */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(0, 40, 60, 0.85), rgba(0, 20, 40, 0.7))",
            borderRadius: "14px",
            padding: "18px 22px",
            border: "1px solid rgba(0, 180, 255, 0.08)",
            boxShadow:
              "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(0, 180, 255, 0.05)",
            flexShrink: 0,
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
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #4ac0e0, #0088aa, #4ac0e0, transparent)",
              backgroundSize: "300% 100%",
              animation: "shimmer 3s ease-in-out infinite",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "14px",
              }}
            >
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "900",
                  color: "#4ac0e0",
                  letterSpacing: "-0.5px",
                  textShadow: "0 0 40px rgba(74, 192, 224, 0.15)",
                }}
              >
                98%
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#b0dce8",
                  letterSpacing: "0.2px",
                }}
              >
                China Controls Dy–Tb Refining
              </span>
            </div>
            <div
              style={{
                fontSize: "8px",
                fontWeight: "700",
                color: "#4a9aba",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                background: "rgba(0, 180, 255, 0.06)",
                padding: "4px 14px",
                borderRadius: "20px",
                border: "1px solid rgba(0, 180, 255, 0.06)",
              }}
            >
              Processing
            </div>
          </div>
          <p
            style={{
              fontSize: "11.5px",
              lineHeight: "1.8",
              color: "#b0d4e8",
              margin: 0,
              fontWeight: "400",
            }}
          >
            China is estimated to control approximately 98% of global dysprosium
            and terbium refining. The principal state-owned corporate group is
            China Rare Earth Group, particularly its southern heavy-rare-earth
            operations. One confirmed processor is Chinalco Guangxi Nonferrous
            Rare Earth, a China Rare Earth Group subsidiary that receives
            heavy-rare-earth feed from Malaysia.
          </p>
        </div>

        {/* Middle row — 2 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(145deg, rgba(0, 30, 50, 0.6), rgba(0, 15, 30, 0.4))",
              borderRadius: "14px",
              padding: "16px 20px",
              border: "1px solid rgba(0, 180, 255, 0.04)",
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(0, 180, 255, 0.02)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                fontWeight: "700",
                color: "#4ac0e0",
                margin: "0 0 10px 0",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
              }}
            >
              Separation Challenge
            </div>
            <p
              style={{
                fontSize: "11px",
                lineHeight: "1.8",
                color: "#b0d4e8",
                margin: 0,
                fontWeight: "400",
              }}
            >
              Dy and Tb occur mixed with numerous chemically similar rare
              earths. Their ionic properties are so alike that separation
              commonly requires hundreds of solvent-extraction mixer-settler
              stages.
            </p>
          </div>

          <div
            style={{
              background:
                "linear-gradient(145deg, rgba(0, 30, 50, 0.6), rgba(0, 15, 30, 0.4))",
              borderRadius: "14px",
              padding: "16px 20px",
              border: "1px solid rgba(0, 200, 180, 0.04)",
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(0, 200, 180, 0.02)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                fontWeight: "700",
                color: "#40d4b0",
                margin: "0 0 10px 0",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
              }}
            >
              Supply Chain
            </div>
            <p
              style={{
                fontSize: "11px",
                lineHeight: "1.8",
                color: "#b0d4e8",
                margin: 0,
                fontWeight: "400",
              }}
            >
              Lynas Rare Earths operates the first commercial-scale
              heavy-rare-earth separation facility outside China at Kuantan,
              Malaysia. Dysprosium is commonly supplied as ferrodysprosium (~80%
              Dy, 20% Fe). Terbium as metal or grain-boundary diffusion
              material.
            </p>
          </div>
        </div>

        {/* Bottom row — 2 detailed cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px",
            flexShrink: 0,
          }}
        >
          {/* Dy card */}
          <div
            style={{
              background:
                "linear-gradient(160deg, rgba(0, 35, 65, 0.8), rgba(0, 15, 35, 0.6))",
              borderRadius: "14px",
              padding: "18px 20px 20px 20px",
              border: "1px solid rgba(0, 150, 255, 0.06)",
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(0, 150, 255, 0.03)",
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
                  height: "28px",
                  background: "linear-gradient(180deg, #4a9eff, #0066cc)",
                  borderRadius: "2px",
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#7abfff",
                    letterSpacing: "-0.2px",
                  }}
                >
                  Dysprosium
                </div>
                <div
                  style={{
                    fontSize: "9px",
                    fontWeight: "500",
                    color: "#4a8aaa",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Coercivity &gt; 120°C
                </div>
              </div>
            </div>

            <div
              style={{
                fontSize: "10.5px",
                lineHeight: "1.6",
                color: "#7abfff",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Dy raises coercivity—the magnet&apos;s resistance to permanent
              demagnetisation—particularly above 120°C:
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginBottom: "12px",
                paddingLeft: "4px",
              }}
            >
              {[
                "Around 4.2 wt% Dy for magnets rated to 150°C",
                "Around 6.5 wt% Dy at 180°C",
                "Around 8.5–11 wt% Dy for 200–220°C grades",
              ].map((text, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    gap: "6px",
                    alignItems: "flex-start",
                    fontSize: "10.5px",
                    color: "#b0d4ec",
                    lineHeight: "1.5",
                    fontWeight: "500",
                  }}
                >
                  <span
                    style={{
                      color: "#4a9eff",
                      fontWeight: "700",
                    }}
                  >
                    •
                  </span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: "10.5px",
                lineHeight: "1.8",
                color: "#b0d4ec",
                margin: 0,
                fontWeight: "400",
              }}
            >
              These grades are used in EV traction motors, industrial motors,
              high-temperature generators and some wind-power systems.
              Alternative motor designs exist, but no other commercial magnet
              currently provides NdFeB's combination of magnetic strength,
              compactness and weight efficiency.
              <br />
              Dy is also used as dysprosium titanate ceramic in
              neutron-absorbing nuclear-reactor control rods.
            </p>
          </div>

          {/* Tb card */}
          <div
            style={{
              background:
                "linear-gradient(160deg, rgba(0, 45, 45, 0.8), rgba(0, 25, 25, 0.6))",
              borderRadius: "14px",
              padding: "18px 20px 20px 20px",
              border: "1px solid rgba(0, 255, 200, 0.06)",
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(0, 255, 200, 0.03)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  width: "3px",
                  height: "28px",
                  background: "linear-gradient(180deg, #40d4b0, #008080)",
                  borderRadius: "2px",
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#5ce0c0",
                    letterSpacing: "-0.2px",
                  }}
                >
                  Terbium
                </div>
                <div
                  style={{
                    fontSize: "9px",
                    fontWeight: "500",
                    color: "#3a8a7a",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Precision Motion
                </div>
              </div>
            </div>

            <div
              style={{
                background: "rgba(0, 255, 200, 0.03)",
                borderRadius: "10px",
                padding: "10px 14px",
                marginBottom: "12px",
                border: "1px solid rgba(0, 255, 200, 0.04)",
              }}
            >
              <p
                style={{
                  fontSize: "10.5px",
                  lineHeight: "1.7",
                  color: "#b0e8d8",
                  margin: 0,
                  fontWeight: "500",
                }}
              >
                <span style={{ color: "#40d4b0", fontWeight: "700" }}>
                  Terfenol-D
                </span>{" "}
                — Terfenol D is a rare-earth alloy renowned for its giant
                magnetostrictive properties. It expands and contracts
                significantly when exposed to a magnetic field.
              </p>
            </div>

            <div
              style={{
                fontSize: "9px",
                fontWeight: "700",
                color: "#5ce0c0",
                margin: "0 0 8px 0",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              Terfenol-D is heavily utilized in:
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              {[
                {
                  label: "Sonar & Acoustic Transducers",
                  desc: "Converting electrical signals into high-powered acoustic waves for naval systems",
                },
                {
                  label: "Precision Actuators",
                  desc: "High-performance fuel injectors, hydraulic valves, and micro-positioning",
                },
                {
                  label: "Sensors",
                  desc: "Monitoring torque, vibration, pressure, and magnetic fields",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "flex-start",
                    fontSize: "10.5px",
                    color: "#b0e8d8",
                    lineHeight: "1.6",
                  }}
                >
                  <span
                    style={{
                      color: "#40d4b0",
                      fontWeight: "700",
                      marginTop: "1px",
                    }}
                  >
                    —
                  </span>
                  <div>
                    <span style={{ color: "#5ce0c0", fontWeight: "600" }}>
                      {item.label}
                    </span>
                    <span style={{ color: "#90c8b8" }}>: {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dy-tb-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .dy-tb-scroll::-webkit-scrollbar-track {
          background: rgba(0, 180, 255, 0.03);
          border-radius: 10px;
        }
        .dy-tb-scroll::-webkit-scrollbar-thumb {
          background: rgba(0, 180, 255, 0.2);
          border-radius: 10px;
        }
        .dy-tb-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 180, 255, 0.35);
        }
        .dy-tb-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 180, 255, 0.2) transparent;
        }
        @keyframes shimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
}

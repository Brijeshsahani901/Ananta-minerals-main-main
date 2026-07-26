import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function JapanIndiaValueChain() {
  return (
    <div
      className={montserrat.className}
      style={{
        background: "linear-gradient(180deg, #091220 0%, #030710 100%)",
        borderRadius: "16px",
        padding: "16px 20px",
        color: "#FFFFFF",
        height: "530px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        position: "relative",
      }}
    >
      {/* Decors like screenshot */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          position: "absolute",
          top: "16px",
          left: "20px",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "3px",
            borderRadius: "2px",
            backgroundColor: "#3b82f6",
          }}
        />
        <span
          style={{
            width: "8px",
            height: "3px",
            borderRadius: "2px",
            backgroundColor: "#10b981",
          }}
        />
        <span
          style={{
            width: "8px",
            height: "3px",
            borderRadius: "2px",
            backgroundColor: "#f59e0b",
          }}
        />
      </div>

      {/* Header Section (Fixed at Top) */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "12px",
          marginTop: "4px",
          flexShrink: 0,
        }}
      >
        <h3
          style={{
            fontSize: "13px",
            fontWeight: "800",
            letterSpacing: "1.5px",
            color: "#FFFFFF",
            display: "inline-block",
            borderRadius: "4px",
            boxShadow: "0 0 10px rgba(162, 28, 175, 0.15)",
            textTransform: "uppercase",
          }}
        >
          JAPAN'S ROLE ACROSS INDIA'S CRITICAL MINERALS VALUE CHAIN
        </h3>
        <p
          style={{
            fontSize: "11px",
            color: "#94a3b8",
            margin: 0,
            fontWeight: "500",
          }}
        >
          Strategic partnership leveraging Japanese technology, financing &
          India's processing capacity
        </p>
      </div>

      {/* Scrollable Container for Cards */}
      <div
        className="infographic-scroll-container"
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          paddingRight: "4px",
        }}
      >
        {/* Value Chain Stages Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
          }}
        >
          {/* UPSTREAM */}
          <div
            style={{
              background: "#0c1524",
              borderRadius: "12px",
              padding: "10px 12px",
              borderTop: "3px solid #3b82f6",
              borderLeft: "1px solid rgba(255, 255, 255, 0.05)",
              borderRight: "1px solid rgba(255, 255, 255, 0.05)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  color: "#3b82f6",
                  fontSize: "12px",
                  fontWeight: "800",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "2px",
                }}
              >
                UPSTREAM
              </div>
              <div
                style={{
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: "600",
                  marginBottom: "6px",
                }}
              >
                Mining & Exploration
              </div>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "12px",
                  lineHeight: "1.35",
                  margin: "0 0 8px 0",
                }}
              >
                JOGMEC finances 100+ metal projects globally with equity stakes
                and loan guarantees. Co-developing mines in Africa & Australia
                with Indian geological surveys.
              </p>
            </div>
            <div style={{ textAlign: "center", marginTop: "auto" }}>
              <div
                style={{
                  color: "#3b82f6",
                  fontSize: "13px",
                  fontWeight: "800",
                }}
              >
                US$ 3.2 B
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "10px",
                  fontWeight: "600",
                }}
              >
                JOGMEC Investment Portfolio
              </div>
            </div>
          </div>

          {/* MIDSTREAM */}
          <div
            style={{
              background: "#0c1524",
              borderRadius: "12px",
              padding: "10px 12px",
              borderTop: "3px solid #10b981",
              borderLeft: "1px solid rgba(255, 255, 255, 0.05)",
              borderRight: "1px solid rgba(255, 255, 255, 0.05)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  color: "#10b981",
                  fontSize: "12px",
                  fontWeight: "800",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "2px",
                }}
              >
                MIDSTREAM
              </div>
              <div
                style={{
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: "600",
                  marginBottom: "6px",
                }}
              >
                Refining & Processing
              </div>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "12px",
                  lineHeight: "1.35",
                  margin: "0 0 8px 0",
                }}
              >
                Toyotsu Rare Earths India (Toyota Tsusho + IREL), Andhra Pradesh
                <br />
                India's only Japanese-backed commercial rare earth separation
                plant, refining La, Ce, Pr & Nd oxides for high-value
                applications. It remains the flagship India-Japan REE project.
              </p>
            </div>
            <div style={{ textAlign: "center", marginTop: "auto" }}>
              <div
                style={{
                  color: "#10b981",
                  fontSize: "13px",
                  fontWeight: "800",
                }}
              >
                US$ 42 B
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "10px",
                  fontWeight: "600",
                }}
              >
                India-Japan Tech Transfer Value
              </div>
            </div>
          </div>

          {/* DOWNSTREAM */}
          <div
            style={{
              background: "#0c1524",
              borderRadius: "12px",
              padding: "10px 12px",
              borderTop: "3px solid #f59e0b",
              borderLeft: "1px solid rgba(255, 255, 255, 0.05)",
              borderRight: "1px solid rgba(255, 255, 255, 0.05)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  color: "#f59e0b",
                  fontSize: "12px",
                  fontWeight: "800",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "2px",
                }}
              >
                DOWNSTREAM
              </div>
              <div
                style={{
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: "600",
                  marginBottom: "6px",
                }}
              >
                Manufacturing & Products
              </div>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "12px",
                  lineHeight: "1.35",
                  margin: "0 0 8px 0",
                }}
              >
                • IREL–Japanese Magnet Manufacturing Initiative
                <br />
                Japan is being invited to establish NdFeB permanent magnet
                manufacturing in India through technology transfer and
                investment, enabling India's first domestic "mine-to-magnet"
                ecosystem.
              </p>
            </div>
            <div style={{ textAlign: "center", marginTop: "auto" }}>
              <div
                style={{
                  color: "#f59e0b",
                  fontSize: "13px",
                  fontWeight: "800",
                }}
              >
                10,000-15,000 T/yr
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "10px",
                  fontWeight: "600",
                }}
              >
                Japan's Magnet Output (2nd Global)
              </div>
            </div>
          </div>
        </div>

        {/* Middle Divider Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.3) 50%, transparent)",
              marginBottom: "8px",
            }}
          />
          <h4
            style={{
              fontSize: "12.5px",
              fontWeight: "700",
              color: "#FFFFFF",
              margin: 0,
              textTransform: "none",
              letterSpacing: "0.3px",
            }}
          >
            Top 3 Japanese Players in Processing and Refining
          </h4>
        </div>

        {/* Japanese Players Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
          }}
        >
          {/* Shin-Etsu Chemical */}
          <div
            style={{
              background: "#0c1524",
              borderRadius: "12px",
              padding: "10px 12px",
              borderLeft: "3px solid #3b82f6",
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              borderRight: "1px solid rgba(255, 255, 255, 0.05)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  color: "#3b82f6",
                  fontSize: "12px",
                  fontWeight: "800",
                }}
              >
                Shin-Etsu Chemical
              </div>
              <div
                style={{
                  color: "#94a3b8",
                  fontSize: "11px",
                  fontWeight: "600",
                  marginBottom: "4px",
                }}
              >
                Nd, Pr, Dy, Tb, Y.
              </div>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "12px",
                  lineHeight: "1.35",
                  margin: "0 0 8px 0",
                }}
              >
                Shin-Etsu has rare-earth magnet production/sales bases in 9
                countries and magnet production across 6 locations. Shin Etsu
                Specializes in Rare-earth separation & purification using
                solvent extraction; rare-earth oxides/compounds
              </p>
            </div>
            <div style={{ textAlign: "center", marginTop: "auto" }}>
              <div
                style={{
                  color: "#3b82f6",
                  fontSize: "12px",
                  fontWeight: "800",
                }}
              >
                US$ 108 M
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "9.5px",
                  fontWeight: "600",
                }}
              >
                Government Subsidy
              </div>
            </div>
          </div>

          {/* Sumitomo Metal Mining */}
          <div
            style={{
              background: "#0c1524",
              borderRadius: "12px",
              padding: "10px 12px",
              borderLeft: "3px solid #10b981",
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              borderRight: "1px solid rgba(255, 255, 255, 0.05)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  color: "#10b981",
                  fontSize: "12px",
                  fontWeight: "800",
                }}
              >
                Sumitomo Metal Mining
              </div>
              <div
                style={{
                  color: "#94a3b8",
                  fontSize: "11px",
                  fontWeight: "600",
                  marginBottom: "4px",
                }}
              >
                Ni, Co, Li, Cu
              </div>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "12px",
                  lineHeight: "1.35",
                  margin: "0 0 8px 0",
                }}
              >
                Nickel/cobalt smelting & refining; Japan’s only electrolytic
                nickel and cobalt plant at Niihama. HPAL technology; nickel
                sulfate and cathode-material integration;
              </p>
            </div>
            <div style={{ textAlign: "center", marginTop: "auto" }}>
              <div
                style={{
                  color: "#10b981",
                  fontSize: "12px",
                  fontWeight: "800",
                }}
              >
                10,000 T/Yr
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "9.5px",
                  fontWeight: "600",
                }}
              >
                Battery-Recycling Capacity
              </div>
            </div>
          </div>

          {/* JX Advanced Metals */}
          <div
            style={{
              background: "#0c1524",
              borderRadius: "12px",
              padding: "10px 12px",
              borderLeft: "3px solid #f59e0b",
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              borderRight: "1px solid rgba(255, 255, 255, 0.05)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  color: "#f59e0b",
                  fontSize: "12px",
                  fontWeight: "800",
                }}
              >
                JX Advanced Metals
              </div>
              <div
                style={{
                  color: "#94a3b8",
                  fontSize: "11px",
                  fontWeight: "600",
                  marginBottom: "4px",
                }}
              >
                Cu
              </div>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "12px",
                  lineHeight: "1.35",
                  margin: "0 0 8px 0",
                }}
              >
                Copper smelting and recycling; produces 99.99%+ refined copper
                and recovers precious/minor metals; established JX Metals
                Circular Solutions with Mitsubishi Corp for recycling e-waste
                and automotive LIBs.
              </p>
            </div>
            <div style={{ textAlign: "center", marginTop: "auto" }}>
              <div
                style={{
                  color: "#f59e0b",
                  fontSize: "12px",
                  fontWeight: "800",
                }}
              >
                450,000 metric T/yr
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "9.5px",
                  fontWeight: "600",
                }}
              >
                Cu Smelters
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Custom scrollbar for small screens / container height limits */
        .infographic-scroll-container::-webkit-scrollbar {
          width: 3px;
        }
        .infographic-scroll-container::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 3px;
        }
        .infographic-scroll-container::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}

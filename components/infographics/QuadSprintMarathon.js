import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function QuadSprintMarathon() {
  return (
    <div
      className={montserrat.className}
      style={{
        background: "#FFFFFF",
        borderRadius: "14px",
        padding: "12px 18px",
        color: "#000000",
        height: "530px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        overflowY: "auto",
        boxSizing: "border-box",
        border: "1px solid #E0E0E0",
        fontWeight: "500",
      }}
    >
      {/* Top Header */}
      <div style={{ textAlign: "center", flexShrink: 0 }}>
        <h2
          style={{
            fontWeight: "500",
            fontSize: "18px",
            margin: "0 0 6px 0",
            color: "#000000",
            letterSpacing: "-0.5px",
          }}
        >
          QUAD Should Sprint in Marathon
        </h2>

        {/* Teal Pill Banner */}
        <div
          style={{
            background: "#23A891",
            borderRadius: "24px",
            padding: "6px 20px",
            color: "#FFFFFF",
            fontSize: "13.5px",
            fontWeight: "500",
            lineHeight: "1.4",
            maxWidth: "920px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          On 27 May 2026, Quad partners intend to mobilise up to $20 billion in
          government and private sector support through new and existing efforts
          to strengthen critical minerals supply chains
        </div>
      </div>

      {/* Middle Grid (STAT vs QUAD Recommendations) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "18px",
          margin: "8px 0",
          flex: 1,
        }}
      >
        {/* STAT Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <h3
            style={{
              fontSize: "13px",
              fontWeight: "500",
              textTransform: "uppercase",
              letterSpacing: "1px",
              margin: "0 0 2px 0",
              textAlign: "center",
              color: "#000000",
            }}
          >
            STAT
          </h3>

          <p
            style={{
              fontSize: "13px",
              lineHeight: "1.4",
              margin: 0,
              color: "#111",
              fontWeight: "500",
            }}
          >
            Clean-energy graphite demand rises from about 1.29 million tonnes in
            2023 to 6.01 million tonnes in 2030, while the{" "}
            <span style={{ textDecoration: "underline", fontWeight: "500" }}>
              top three refining countries are still expected to hold around 97%
              of refining capacity in 2030.
            </span>
          </p>

          <p
            style={{
              fontSize: "13px",
              lineHeight: "1.4",
              margin: 0,
              color: "#111",
              fontWeight: "500",
            }}
          >
            U.S. defense platforms contain startling quantities of rare earths:
            an{" "}
            <span style={{ textDecoration: "underline", fontWeight: "500" }}>
              F-35 uses more than 900 pounds, an Arleigh Burke-class destroyer
              about 5,200 pounds, and a Virginia-class submarine about 9,200
              pounds.
            </span>
          </p>

          <p
            style={{
              fontSize: "13px",
              lineHeight: "1.4",
              margin: 0,
              color: "#111",
              fontWeight: "500",
            }}
          >
            By 2030,{" "}
            <span style={{ textDecoration: "underline", fontWeight: "500" }}>
              nearly 90% of Precursor Cathode Active Material capacity is
              expected to remain concentrated in China,
            </span>{" "}
            limiting the security benefit of battery recycling elsewhere.
          </p>
        </div>

        {/* QUAD Framework Recommendation Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <h3
            style={{
              fontSize: "13px",
              fontWeight: "500",
              textTransform: "uppercase",
              letterSpacing: "1px",
              margin: "0 0 2px 0",
              textAlign: "center",
              color: "#000000",
            }}
          >
            QUAD Framework Recommendation
          </h3>

          <p
            style={{
              fontSize: "13px",
              lineHeight: "1.4",
              margin: 0,
              color: "#111",
              fontWeight: "500",
            }}
          >
            Lithium gets the headlines, but anode-grade graphite may be the
            quieter choke point. The Quad battery strategy is incomplete without
            purified spherical graphite, synthetic graphite, coating, anode
            qualification, and cell-level validation.
          </p>

          <p
            style={{
              fontSize: "13px",
              lineHeight: "1.4",
              margin: 0,
              color: "#111",
              fontWeight: "500",
            }}
          >
            Rare earths are not just an EV or wind-turbine story. They are a
            fleet-readiness metric. For Quad security, magnet supply is not an
            industrial-policy luxury; it is a defense logistics requirement.
          </p>

          <p
            style={{
              fontSize: "13px",
              lineHeight: "1.4",
              margin: 0,
              color: "#111",
              fontWeight: "500",
            }}
          >
            If QUAD countries recycle batteries but still export black mass or
            intermediates into a China-centered cathode ecosystem, they have
            created a waste-management industry—not mineral independence.
          </p>
        </div>
      </div>

      {/* Bottom Bordered Box */}
      <div
        className="bottom-bordered-box"
        style={{
          border: "1px solid #000000",
          padding: "8px 10px",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.9fr 1.1fr 1fr",
          gap: "10px",
          position: "relative",
          background: "#FFFFFF",
          flexShrink: 0,
        }}
      >
        {/* Column 1 */}
        <div
          style={{
            fontSize: "11.5px",
            lineHeight: "1.3",
            color: "#000",
            fontWeight: "500",
          }}
        >
          <span style={{ textDecoration: "underline", fontWeight: "500" }}>
            Permanent magnets account for about 95% of total rare-earth
            consumption by value. Demand for magnet rare earths—mainly Nd, Pr,
            Dy, and Tb—has doubled since 2015 and is expected to rise by another
            one-third by 2030
          </span>{" "}
          under current policy settings.
        </div>

        {/* Column 2 */}
        <div
          style={{
            fontSize: "11.5px",
            lineHeight: "1.3",
            color: "#000",
            fontWeight: "500",
          }}
        >
          Sojitz/JOGMEC backed Lynas for years; Japan secured dysprosium and
          terbium supply and has now arranged for 75% of Lynas medium and heavy
          rare-earth production to go to Japan.
        </div>

        {/* Column 3 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div
            style={{
              fontSize: "11.5px",
              lineHeight: "1.3",
              color: "#000",
              fontWeight: "500",
            }}
          >
            The U.S. Commerce Department finalized support for USA Rare Earth of
            up to $277 million in federal incentives plus a $1.3 billion loan
            agreement under the CHIPS and Science Act to produce 10,000
          </div>
          <div
            style={{
              fontSize: "11.5px",
              lineHeight: "1.3",
              color: "#000",
              fontWeight: "500",
            }}
          >
            India approved a ₹7,280 crore scheme for 6,000 MTPA integrated
            sintered rare-earth permanent magnet manufacturing, covering
            oxide-to-magnet production.
          </div>
        </div>

        {/* Column 4 */}
        <div
          style={{
            fontSize: "11.5px",
            lineHeight: "1.3",
            color: "#000",
            fontWeight: "500",
          }}
        >
          Iluka's Eneabba refinery is backed by a A$1.65 billion Australian
          Government loan to produce 23,000 tpa rare-earth oxides, including
          5,500 tpa NdPr oxide and 725 tpa Dy/Tb oxide; it is
        </div>

        {/* Faint Watermark (optional, implemented cleanly) */}
        <div
          style={{
            position: "absolute",
            left: "8px",
            bottom: "4px",
            width: "30px",
            height: "30px",
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .bottom-bordered-box {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .bottom-bordered-box {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBatteryFull, FaGlobeAsia, FaBolt } from "react-icons/fa";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function IndiaAfghanistanCollab() {
  return (
    <div
      className="w-100 d-flex flex-column justify-content-between"
      style={{
        minHeight: "530px",
        background: "linear-gradient(135deg, #0c2461 0%, #1e3799 50%, #4a69bd 100%)",
        borderRadius: "10px",
        padding: "28px",
        color: "#ffffff",
        boxShadow:
          "0 12px 35px rgba(0, 0, 0, 0.4), inset 0 0 25px rgba(255,255,255,0.05)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Gradient Glow Background */}
      <div

        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(72,219,251,0.35), transparent 70%)",
          filter: "blur(80px)",
          animation: "floatGlow 6s ease-in-out infinite alternate",
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-120px",
          width: "280px",
          height: "280px",
          background:
            "radial-gradient(circle, rgba(255,159,243,0.35), transparent 70%)",
          filter: "blur(80px)",
          animation: "floatGlow2 7s ease-in-out infinite alternate",
          zIndex: 0,
        }}
      ></div>

      {/* HEADER */}
      <div   className={montserrat.className} style={{ position: "relative", zIndex: 2 }}>
        <h3
         className={montserrat.className}
          style={{
            textAlign: "center",
            fontWeight: "700",
            marginBottom: "22px",
            fontSize: "1.6rem",
            textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            letterSpacing: "0.7px",
            background: "linear-gradient(90deg, #ffffff, #dcdde1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          India - Afghanistan Potential Collaboration
        </h3>
      </div>

      {/* Top Card - Afghanistan */}
      <div
        className="d-flex align-items-center justify-content-between flex-wrap mb=2"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.10))",
          backdropFilter: "blur(10px)",
          borderRadius: "14px",
          padding: "18px",
          border: "1px solid rgba(255,255,255,0.25)",
          boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
          position: "relative",
          zIndex: 2,
          transition: "all 0.3s ease",
        }}
      >
        <div
         className={montserrat.className}
          style={{
            flex: 1,
            paddingRight: "18px",
            fontSize: "15px",
            lineHeight: "1.7",
          }}
        >
          <div
           className={montserrat.className}
            style={{
              fontSize: "13px",
              color: "#48dbfb",
              fontWeight: "700",
              marginBottom: "6px",
              letterSpacing: "0.8px",
              textTransform: "uppercase",
            }}
          >
            <FaGlobeAsia style={{ marginRight: "5px" }} /> Afghanistan Lithium
            Reserves
          </div>
          Afghanistan may hold approximately
          <b style={{ color: "#48dbfb", fontSize: "15px" }}> 350,000 tonnes</b>{" "}
          tonnes of Lithium within its salt lake and Helmand Basin. The research was carried out by Dibrugarh University mapped on GSI platform.
          <br />
         The country also has major copper, iron-ore, rare earth elements, and other critical minerals - making it a potentially very important resource base for global supply chains.
        </div>

        {/* Circle Indicator */}
        <div
         className={montserrat.className}
          style={{
            background:
              "linear-gradient(135deg, #48dbfb, #0abde3 80%, #1dd1a1)",
            color: "#0c2461",
            borderRadius: "50%",
            width: "105px",
            height: "105px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "15px",
            boxShadow:
              "0 8px 25px rgba(72,219,251,0.5), inset 0 -3px 8px rgba(0,0,0,0.3)",
            border: "2px solid rgba(255,255,255,0.4)",
            animation: "pulse 3s infinite ease-in-out",
          }}
        >
          <div style={{ fontSize: "18px", fontWeight: "800" }}>350K</div>
          <div style={{ fontSize: "12px" }}>TONNES</div>
        </div>
      </div>

      {/* Bottom Card - India */}
      <div

        className="d-flex align-items-center justify-content-between flex-wrap"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.10))",
          backdropFilter: "blur(10px)",
          borderRadius: "14px",
          padding: "18px",
          border: "1px solid rgba(255,255,255,0.25)",
          boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
          position: "relative",
          zIndex: 2,
          transition: "all 0.3s ease",
        }}
      >
        {/* Circle Indicator */}
        <div
         className={montserrat.className}
          style={{
            background:
              "linear-gradient(135deg, #ff9ff3, #f368e0 80%, #e84393)",
            color: "#0c2461",
            borderRadius: "50%",
            width: "105px",
            height: "105px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "15px",
            boxShadow:
              "0 8px 25px rgba(243,104,224,0.5), inset 0 -3px 8px rgba(0,0,0,0.3)",
            border: "2px solid rgba(255,255,255,0.4)",
            animation: "pulsePink 3s infinite ease-in-out",
          }}
        >
          <div style={{ fontSize: "18px", fontWeight: "800" }}>56K</div>
          <div style={{ fontSize: "12px" }}>TONNES</div>
        </div>

        <div
         className={montserrat.className}
          style={{
            flex: 1,
            paddingLeft: "18px",
            fontSize: "15px",
            lineHeight: "1.7",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#ff9ff3",
              fontWeight: "700",
              marginBottom: "6px",
              letterSpacing: "0.8px",
              textTransform: "uppercase",
            }}
          >
            <FaBatteryFull style={{ marginRight: "7px" }} /> India's Annual
            Lithium Need
          </div>
          NITI Aayog estimates suggest India will require
          <b style={{ color: "#ff9ff3", fontSize: "16px" }}>~56,000 metric tons </b>
            of lithium carbonate equivalent (LCE) annually by 2030 to feed its EV & battery goals.
          <br />
         India and Afghanistan can forge a strategic partnership focused on critical minerals, especially lithium, enabling India to diversify its supply chains away from China and strengthen regional resource security.
        </div>
      </div>

      {/* FOOTER */}
      <div
       className={montserrat.className}
        style={{
          textAlign: "center",
          marginTop: "8px",
          fontSize: "13px",
          color: "rgba(255,255,255,0.75)",
          letterSpacing: "0.5px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <FaBolt style={{ color: "#feca57", marginRight: "5px" }} />
        Strategic Partnership for Critical Minerals & Energy Security
      </div>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes floatGlow {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(20px) rotate(5deg); }
        }
        @keyframes floatGlow2 {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 8px 25px rgba(72,219,251,0.4); }
          50% { transform: scale(1.1); box-shadow: 0 8px 25px rgba(72,219,251,0.7); }
        }
        @keyframes pulsePink {
          0%, 100% { transform: scale(1); box-shadow: 0 8px 25px rgba(243,104,224,0.4); }
          50% { transform: scale(1.1); box-shadow: 0 8px 25px rgba(243,104,224,0.7); }
        }
      `}</style>
    </div>
  );
}

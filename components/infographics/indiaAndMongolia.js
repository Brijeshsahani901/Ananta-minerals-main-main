import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function IndiaMongoliaMoUInfographic() {
  return (
    <div
      style={{
        fontFamily: "'Inter', 'Poppins', sans-serif",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        minHeight: "530px",
        padding: "25px 20px",
        borderRadius: "10px", 
        position: "relative",
        boxShadow: "0 10px 25px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08)",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "-50px",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
        }}
      ></div>

      {/* HEADER */}
      <div className="text-center mb-4">
        <h2
          style={{
            fontWeight: "700",
            fontSize: "1.4rem",
            marginBottom: "8px",
            color: "#f8fafc",
            textShadow: "0 1px 2px rgba(0,0,0,0.2)",
            lineHeight: "1.3",
          }}
        >
          India and Mongolia sign MoU on Cooperation
        </h2>
        <div
          style={{
            fontWeight: "600",
            fontSize: "1.1rem",
            color: "#cbd5e1",
            marginBottom: "5px",
          }}
        >
          in the Field of Geology and Mineral Resources
        </div>
        <div
          style={{
            height: "3px",
            width: "80px",
            background: "linear-gradient(90deg, #60a5fa 0%, #34d399 100%)",
            margin: "0 auto",
            borderRadius: "2px",
          }}
        ></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="row align-items-start g-4" style={{ position: "relative", marginBottom: "25px" }}>
        
        {/* LEFT CONTENT - Joint Surveys */}
        <div className="col-md-4 text-center">
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              background: "linear-gradient(145deg, #6366f1, #3b82f6)",
              margin: "0 auto 15px",
              boxShadow: "0 6px 15px rgba(59, 130, 246, 0.4), inset 0 1px 4px rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/854/854929.png"
              alt="Map Icon"
              style={{
                width: "40px",
                height: "40px",
                filter: "invert(1) brightness(2)",
                opacity: 0.9,
              }}
            />
          </div>

          <div
            style={{
              background: "rgba(30, 41, 59, 0.8)",
              borderRadius: "10px",
              padding: "15px",
              color: "#e2e8f0",
              fontSize: "0.85rem",
              lineHeight: "1.5",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
              minHeight: "140px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontWeight: "700", color: "#60a5fa", marginBottom: "8px", fontSize: "0.9rem" }}>
              Joint Geological Surveys
            </div>
            India’s GSI can partner with Mongolia’s National Geological Survey to run joint hyperspectral, aero-geophysics, and ground geochem surveys, build 3D deposit models, and advance top targets into JORC/NI 43-101–ready drill programs.
          </div>
        </div>

        {/* CENTER CONTENT - G2G Partnership */}
        <div className="col-md-4 text-center position-relative">
          {/* Connecting Lines */}
          <div
            style={{
              position: "absolute",
              top: "45px",
              left: "-20%",
              right: "-20%",
              height: "2px",
              background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent)",
              zIndex: 1,
            }}
          ></div>

          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "linear-gradient(145deg, #8b5cf6, #a855f7)",
              margin: "0 auto 15px",
              boxShadow: "0 6px 15px rgba(139, 92, 246, 0.4), inset 0 1px 4px rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.1)",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "0.85rem",
                textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                textAlign: "center",
                lineHeight: "1.2",
              }}
            >
              G2G REE
              <br />
              Partnership
            </div>
          </div>

          <div
            style={{
              background: "rgba(30, 41, 59, 0.8)",
              borderRadius: "10px",
              padding: "15px",
              color: "#e2e8f0",
              fontSize: "0.85rem",
              lineHeight: "1.5",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
              minHeight: "140px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontWeight: "700", color: "#a855f7", marginBottom: "8px", fontSize: "0.9rem" }}>
              Government-to-Government
            </div>
            India and Mongolia can form a G2G REE partnership that diversifies India’s supply and helps Mongolia move from reserves to production.
          </div>
        </div>

        {/* RIGHT CONTENT - Rare Earth Resources */}
        <div className="col-md-4 text-center">
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              background: "linear-gradient(145deg, #10b981, #34d399)",
              margin: "0 auto 15px",
              boxShadow: "0 6px 15px rgba(16, 185, 129, 0.4), inset 0 1px 4px rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "0.8rem",
                textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                textAlign: "center",
                lineHeight: "1.1",
              }}
            >
              3.6 Mt
              <br />
              REO
            </div>
          </div>

          <div
            style={{
              background: "rgba(30, 41, 59, 0.8)",
              borderRadius: "10px",
              padding: "15px",
              color: "#e2e8f0",
              fontSize: "0.85rem",
              lineHeight: "1.5",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
              minHeight: "140px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontWeight: "700", color: "#34d399", marginBottom: "8px", fontSize: "0.9rem" }}>
              Rare Earth Resources
            </div>
           Mongolia has ~3.6 Mt REO (mainly LREEs) in seven deposits. With IREL’s more than 99% purity La, Ce, and NdPr, an IREL–Mongolia tie-up can turn ore into oxides for ceramics, alloys, batteries, and magnets.
          </div>
        </div>
      </div>
    </div>
  );
}
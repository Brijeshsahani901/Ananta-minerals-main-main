"use client";

import React from "react";
import { Card } from "react-bootstrap";
import {
  MapPin,
  TrendingUp,
  Battery,
  DollarSign,
} from "react-feather";

export default function MalaysianMineralInfographic() {
  const maxValue = 7000; 
  const graphData = [
    { name: "Xenotime", value: 11, color: "#3b82f6" },
    { name: "Monazite", value: 196, color: "#10b981" },
    { name: "Carbonate", value: 6438, color: "#f59e0b" }
  ];
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center py-2"
        style={{
             borderRadius: "10px", 
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          minHeight: "530px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Enhanced Background Effects */}
        <div
          className="position-absolute"
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
              "radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 35%), radial-gradient(circle at 80% 20%, #f97316 0%, transparent 35%), radial-gradient(circle at 40% 40%, #10b981 0%, transparent 30%)",
            filter: "blur(60px)",
            opacity: "0.25",
          }}
        />

        {/* Animated Floating Elements */}
        <div
          className="position-absolute"
          style={{
            top: "15%",
            left: "8%",
            width: "60px",
            height: "60px",
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "float 6s ease-in-out infinite",
          }}
        />

        <div
          className="position-absolute"
          style={{
            bottom: "20%",
            right: "10%",
            width: "40px",
            height: "40px",
            background:
              "radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "float 8s ease-in-out infinite 1s",
          }}
        />

        {/* Subtle Grid Pattern */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div
          className="container position-relative z-10"
          style={{ maxWidth: "1200px" }}
        >
          <div className="text-center mb-4">
            <h2
              className="fw-bold mb-2"
              style={{
                fontSize: "2rem",
                background:
                  "linear-gradient(90deg, #60a5fa 0%, #34d399 50%, #fbbf24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 4px 20px rgba(96, 165, 250, 0.3)",
                lineHeight: "1.1",
              }}
            >
              Untapped Potential for India
            </h2>
            <p
              className="fw-light mx-auto"
              style={{
                color: "#cbd5e1",
                fontSize: "0.8rem",
                opacity: "0.9",
                maxWidth: "500px",
                lineHeight: "1.4",
              }}
            >
              Investment in Malaysian Critical Mineral Ecosystem
            </p>
          </div>

          {/* Main Content Container */}
          <div className="row align-items-center g-3">
            {/* Left Side - Info Cards (unchanged) */}
            <div className="col-md-8">
              <div className="row g-3">
                <div className="col-6">
                  <InfoCard
                    icon={<DollarSign size={18} className="text-warning" />}
                    title="Tin refined and semi finished"
                    amount="US$ 75.3M"
                    text="Tin (Refined and Semi finished) is imported by India from Malaysia where it is typically used for Soldering in Electronic Appliances & Phones, Metallurgical Alloys etc."
                    gradient="linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)"
                    delay="0s"
                  />
                </div>
                <div className="col-6">
                  <InfoCard
                    icon={<TrendingUp size={18} className="text-warning" />}
                    title="Tin Import Volume"
                    amount="22,650 T"
                    text="Malaysia imported tin in concentrate to feed its smelting hub. From tin-smelting slag, Malaysia extracted 49 t of struverite, a tantalum-niobium mineral critical for capacitors and aerospace alloys."
                    gradient="linear-gradient(135deg, #c2410c 0%, #ea580c 100%)"
                    delay="0.1s"
                  />
                </div>
                <div className="col-6">
                  <InfoCard
                    icon={<MapPin size={18} className="text-warning" />}
                    title="Super Magnet Facility"
                    amount="US$ 142M"
                    text="Australia's Lynas Rare Earths and South Korea's JS Link (127120.KQ), signed a deal to develop a 3,000-tonne neodymium magnet manufacturing facility near Lynas' advanced materials plant in Malaysia's Kuantan district.There are 16.1 MT resources identified in Malaysia."
                    gradient="linear-gradient(135deg, #047857 0%, #10b981 100%)"
                    delay="0.2s"
                  />
                </div>
                <div className="col-6">
                  <InfoCard
                    icon={<Battery size={18} className="text-warning" />}
                    title="Critical Minerals"
                    amount="70%"
                    text="Xenotime, Monazite, and Carbonates produce LREEs and HREEs used in magnets, catalysts, and optics; about 70% of Carbonate output is exported to China for processing."
                    gradient="linear-gradient(135deg, #991b1b 0%, #ef4444 100%)"
                    delay="0.3s"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Central Hub with Graph replacing Stat Cards */}
            <div className="col-md-4"  >
              <div className="d-flex flex-column align-items-center justify-content-center">
                {/* Central Hub (unchanged) */}
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center position-relative mb-3"
                  style={{
                    width: "140px",
                    height: "140px",
                    background:
                      "linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.9) 100%)",
                    border: "2px solid #3b82f6",
                    boxShadow: `
                      0 0 40px rgba(59, 130, 246, 0.6),
                      inset 0 0 40px rgba(59, 130, 246, 0.1)
                    `,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {/* Animated Rings */}
                  <div
                    className="position-absolute rounded-circle"
                    style={{
                      width: "155px",
                      height: "155px",
                      border: "2px solid rgba(59, 130, 246, 0.4)",
                      animation: "pulse 2s infinite",
                    }}
                  />
                  <div
                    className="position-absolute rounded-circle"
                    style={{
                      width: "170px",
                      height: "170px",
                      border: "1px solid rgba(59, 130, 246, 0.2)",
                      animation: "pulse 3s infinite 0.5s",
                    }}
                  />

                  <div className="text-center position-relative">
                    <div
                      className="fw-bold text-warning mb-1"
                      style={{
                        fontSize: "2.2rem",
                        textShadow: "0 0 25px rgba(251, 191, 36, 0.7)",
                        lineHeight: "1",
                      }}
                    >
                      4
                    </div>
                    <div
                      className="text-light small fw-semibold"
                      style={{
                        letterSpacing: "1.5px",
                        fontSize: "0.65rem",
                      }}
                    >
                      KEY AREAS
                    </div>
                    <div
                      className="text-info"
                      style={{
                        fontSize: "0.6rem",
                        opacity: "0.8",
                      }}
                    >
                      Investment Focus
                    </div>
                  </div>
                </div>

                {/* Graph replacing the 4 Stat Cards */}
           <Card
  className="border-0 shadow-lg w-100 mt-2 mb-4"
  style={{
    borderRadius: "12px",
    background: "linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.9) 100%)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.1)",
    animation: "fadeInUp 0.6s ease-out 0.4s both",
  }}
>
  <Card.Body className="p-2">
    <div className="text-center mb-3">
      <h6
        className="fw-bold mb-1"
        style={{
          color: "#f8fafc",
          fontSize: "0.9rem",
          textTransform: "uppercase",
          letterSpacing: "0.5px"
        }}
      >
      Malaysia Rare Earth Output
      </h6>
      <p
        className="mb-0"
        style={{
          color: "#94a3b8",
          fontSize: "0.7rem"
        }}
      >
        Tonnes
      </p>
    </div>

    {/* Compact Bar Graph */}
    <div className="d-flex flex-column" style={{ gap: "12px" }}>
      {graphData.map((item, index) => (
        <div key={item.name} className="d-flex align-items-center">
          <div
            className="me-2 text-end"
            style={{
              width: "70px",
              color: "#e2e8f0",
              fontSize: "0.7rem",
              fontWeight: "500"
            }}
          >
            {item.name}
          </div>
          
          <div className="flex-grow-1 position-relative">
            <div
              className="d-flex align-items-center position-relative"
              style={{
                height: "24px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "6px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              <div
                className="h-100 d-flex align-items-center justify-content-end pe-2"
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                  background: `linear-gradient(90deg, ${item.color}99, ${item.color})`,
                  borderRadius: "4px",
                  transition: "all 0.8s ease-out",
                  animation: `slideInRight 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Show number only if bar is wide enough */}
                {/* {item.value > 500 && (
                  <span
                    style={{
                      color: "#1e293b",
                      fontSize: "0.65rem",
                      fontWeight: "bold",
                      textShadow: "0 1px 2px rgba(255,255,255,0.5)"
                    }}
                  >
                    {item.value.toLocaleString()}
                  </span>
                )} */}
              </div>
            </div>
            
            {/* Show numbers on the right for all items */}
            <div
              className="position-absolute"
              style={{
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#e2e8f0",
                fontSize: "0.65rem",
                fontWeight: "bold",
                textShadow: "0 1px 2px rgba(0,0,0,0.5)"
              }}
            >
              {item.value.toLocaleString()}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* X-axis scale */}
    <div className="d-flex justify-content-between mt-2 px-1">
      {[0, 2000, 4000, 7000].map((value) => (
        <div
          key={value}
          style={{
            color: "#94a3b8",
            fontSize: "0.6rem",
            fontWeight: "500"
          }}
        >
          {value === 0 ? value : `${value/1000}k`}
        </div>
      ))}
    </div>
  </Card.Body>
</Card>

              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
          }
          50% {
            box-shadow: 0 0 25px rgba(59, 130, 246, 0.8);
          }
          100% {
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
          }
        }
      `}</style>
    </>
  );
}

function InfoCard({ icon, title, amount, text, gradient, delay }) {
  return (
    <Card
      className="border-0 shadow-lg h-100"
      style={{
        borderRadius: "16px",
        background: gradient,
        color: "white",
        animation: `fadeInUp 0.6s ease-out ${delay} both`,
        transition: "transform 0.4s ease, box-shadow 0.4s ease, background 0.6s ease",
        overflow: "hidden",
        cursor: "pointer",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.45)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.25)";
      }}
    >
      {/* Subtle Overlay Shine */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Top Accent Line */}
      {/* <div
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.6) 0%, transparent 100%)",
        }}
      /> */}

      <Card.Body className="p-2 d-flex flex-column">
        {/* Title and Icon in same row */}
        <div className="d-flex align-items-center justify-content-between mb-3">
          {/* Title */}
          <h6
            className="fw-semibold mb-0"
            style={{
              fontSize: "0.8rem",
              opacity: "0.95",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            {title}
          </h6>

          {/* Icon Bubble */}
          <div
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "42px",
              height: "42px",
              background: "rgba(255,255,255,0.18)",
              border: "2px solid rgba(255,255,255,0.25)",
              flexShrink: 0,
              transition: "all 0.3s ease",
              boxShadow: "0 3px 10px rgba(0,0,0,0.25)",
            }}
          >
            {icon}
          </div>
        </div>

        {/* Amount */}
        {amount && (
          <div
            className="fw-bold mb-2"
            style={{
              fontSize: "1.3rem",
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {amount}
          </div>
        )}

        {/* Description */}
        <p
          className="mb-0 flex-grow-1"
          style={{
            lineHeight: "1.5",
            opacity: "0.9",
            fontSize: "0.72rem",
            fontFamily: "'Inter', sans-serif",
            fontWeight: "400",
          }}
        >
          {text}
        </p>
      </Card.Body>
    </Card>
  );
}
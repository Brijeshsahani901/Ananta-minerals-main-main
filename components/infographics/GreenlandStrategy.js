"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function GreenlandInfographic() {
  const data = [
    {
      title: "44.97 million tonnes of Rare Earth Materials ",
      project: "Tanbreez REE",
      color: "#10b981",
      stats: [],
      desc:
        "Tanbreez project has a net present value (NPV) of approximately $3 billion of rare earth element deposits.",
      icon: "⚛️",
    },
    {
      title: "Resource Estimated at 85 Million Tonnes",
      project: "Citronen Fjord Zinc",
      color: "#0ea5e9",
      stats: [],
      desc:
        "Citronen Fjord project hosts 48.8M tonnes grading 4.8% zinc and 0.5% lead in a 3.3M-tonne per year operation.",
      icon: "⛏️",
    },
    {
      title: "Estimated 571 Million  Molybdenum Metal",
      project: "Malmbjerg",
      color: "#8b5cf6",
      stats: [],
      desc:
        "Malmbjerg Molybdenum Project can supply approximately 25% of total EU molybdenum consumption.",
      icon: "🔄",
    },
    {
      title: "440,000 tonnes of Ilmenite concentrate",
      project: "Dundas Project",
      color: "#f59e0b",
      stats: [],
      desc:
        "Dundas Project hosts the world’s highest-grade ilmenite deposit, critical for titanium supply.",
      icon: "💎",
    },
  ];

  return (
    <section style={styles.page}    className={montserrat.className} >
      <h1  className={montserrat.className} style={styles.title}>
        Why is Greenland strategically important?
      </h1>

      <p className={montserrat.className}  style={styles.subtitle}>
        Vast mineral resources critical for clean energy transition and EU supply security
      </p>

      <div className="container">
        <div className="row g-4">
          {data.map((item, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <div className={montserrat.className}  style={{ ...styles.card, borderColor: item.color }}>
                {/* Top badge */}
                <span className={montserrat.className}  style={{ ...styles.badge, background: item.color }}>
                  {item.project}
                </span>

                {/* Icon */}
                <div
                className={montserrat.className} 
                  style={{
                    ...styles.icon,
                    background: item.color,
                  }}
                >
                  {item.icon}
                </div>

                <h3   className={montserrat.className}   style={styles.cardTitle}>{item.title}</h3>

                <div style={styles.stats}>
                  {item.stats.map((s, idx) => (
                    <span
                    className={montserrat.className} 
                      key={idx}
                      style={{
                        ...styles.statChip,
                        borderColor: item.color,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <p  className={montserrat.className} style={styles.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={montserrat.className}  style={styles.footer}>
        <strong className={montserrat.className}  style={{ color: "#38bdf8" }}>Strategic Importance:</strong>{" "}
        Greenland provides Europe an alternative, secure source of critical minerals.
      </div>
    </section>
  );
}

const styles = {
  page: {
    padding: "10px 20px",
    background:
      "linear-gradient(180deg, #0b1814 0%, #0f211c 50%, #0b1814 100%)",
    minHeight: "530px",
    color: "#e5e7eb",
    borderRadius : "10px"
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: "1.8rem",
    background: "linear-gradient(90deg,#38bdf8,#22d3ee,#2dd4bf)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "10px",
  },

  subtitle: {
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#94a3b8",
    marginBottom: "35px",
  },

  card: {
    background: "rgba(255,255,255,0.04)",
    borderRadius: "18px",
    padding: "28px 20px 24px",
    border: "1px solid rgba(255,255,255,0.08)",
    height: "100%",
    position: "relative",
    transition: "transform .25s ease, box-shadow .25s ease",
  },

  badge: {
    position: "absolute",
    top: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#fff",
    padding: "6px 14px",
    fontSize: "0.7rem",
    borderRadius: "12px",
    fontWeight: 700,
    whiteSpace: "nowrap",
  },

  icon: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    margin: "12px auto 10px",
  },

  cardTitle: {
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: 700,
    marginBottom: "12px",
  },

  stats: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    flexWrap: "wrap",
    marginBottom: "12px",
  },

  statChip: {
    padding: "4px 10px",
    borderRadius: "14px",
    fontSize: "0.7rem",
    border: "1px solid",
    background: "rgba(255,255,255,0.05)",
    fontWeight: 600,
  },

  desc: {
    fontSize: "0.78rem",
    lineHeight: "1.5",
    color: "#d1d5db",
    textAlign: "center",
  },

  footer: {
    marginTop: "10px",
    textAlign: "center",
    fontSize: "0.75rem",
    color: "#9ca3af",
    maxWidth: "530px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px 14px",
    background: "rgba(0,0,0,0.3)",
    borderRadius: "12px",
  },
};

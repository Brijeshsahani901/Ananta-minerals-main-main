"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Bar = dynamic(() => import("react-chartjs-2").then(m => m.Bar), { ssr: false });

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default function GreenlandStrategy() {
  const [mounted, setMounted] = useState(false);
  const [hoveredMineral, setHoveredMineral] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const hoverTimeout = useRef(null);

  useEffect(() => setMounted(true), []);

  // Enhanced mineral data with hover information
  const mineralsData = [
    { 
      name: "Gallium", 
      shortDesc: "Wafer material",
      color: "#6366f1",
      usage: "Wafer material / epitaxy (compound semiconductors) + device layers",
      importSources: "China, South Africa (HS line covering gallium/related metals)"
    },
    { 
      name: "Germanium", 
      shortDesc: "Advanced materials",
      color: "#8b5cf6",
      usage: "Advanced materials & devices (front-end)",
      importSources: "China, Japan (reported under 'germanium oxides & zirconium dioxides' HS line)"
    },
    { 
      name: "Indium", 
      shortDesc: "Compound semiconductors",
      color: "#06b6d4",
      usage: "Compound semiconductors + packaging interfaces",
      importSources: "China, South Africa (same HS line as gallium/related metals)"
    },
    { 
      name: "Rare Earth Elements", 
      shortDesc: "CMP process",
      color: "#10b981",
      usage: "CMP (Chemical Mechanical Planarization) (front-end)",
      importSources: "China, United States"
    },
    { 
      name: "Neon", 
      shortDesc: "Lithography gas",
      color: "#f59e0b",
      usage: "Lithography laser gas / specialty gas (front-end)",
      importSources: "Qatar, United Arab Emirates (reported under 'rare gases (excl. argon)' HS line)"
    },
    { 
      name: "Helium", 
      shortDesc: "Fab utilities",
      color: "#ef4444",
      usage: "Fab utilities + process equipment (front-end & back-end)",
      importSources: "Qatar, United Arab Emirates (same 'rare gases (excl. argon)' HS line)"
    },
    { 
      name: "High-purity Arsenic", 
      shortDesc: "Doping",
      color: "#ec4899",
      usage: "Doping + compound semiconductors (front-end)",
      importSources: "China, Japan"
    },
  ];

  const importTable = [
    ["Gallium", "China & Japan"],
    ["Germanium", "China & Japan"],
    ["Indium", "China & South Africa"],
    ["Rare Earths", "China & United States"],
    ["Neon", "Qatar & UAE"],
    ["Helium", "Qatar & UAE"],
    ["Arsenic", "China & Japan"],
  ];

  /* ================= MARKET DATA ================= */
  const marketData = {
    labels: ["2023", "2030"],
    datasets: [
      {
        data: [38, 109],
        backgroundColor: ["#6366f1", "#8b5cf6"],
        borderRadius: 6,
        borderWidth: 0,
        barThickness: 30,
      },
    ],
  };

  const marketOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      datalabels: {
        anchor: "end",
        align: "top",
        color: "#ffffff",
        font: { weight: "bold", size: 9 },
        formatter: v => `$${v}B`,
      },
      tooltip: {
        backgroundColor: "#1e293b",
        titleColor: "#f1f5f9",
        bodyColor: "#cbd5e1",
        borderColor: "#334155",
        borderWidth: 1,
        cornerRadius: 4,
        padding: 6,
        titleFont: { size: 9 },
        bodyFont: { size: 9 },
      }
    },
    scales: {
      y: { 
        beginAtZero: true, 
        max: 128,
        grid: {
          color: '#334155',
          drawBorder: false,
        },
        ticks: {
          color: '#94a3b8',
          font: { size: 8 },
          padding: 3,
          callback: function(value) {
            return '$' + value + 'B';
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#94a3b8',
          font: { size: 9, weight: '600' },
          padding: 3,
        }
      }
    },
  };

  const currentMineralData = hoveredMineral 
    ? mineralsData.find(m => m.name === hoveredMineral)
    : null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
       className={montserrat.className} 
      style={{
        width: "100%",
        minHeight: "530px",
        padding: "2px 16px",
       
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        overflow: "hidden",
        position: "relative",
        border: "1px solid #334155",
        borderRadius: 10,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* ================= HOVER TOOLTIP (FROM FIRST CODE) ================= */}
      {/* <AnimatePresence>
        {currentMineralData && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            style={{
              position: "fixed",
              top: tooltipPos.y + 12,
              left: tooltipPos.x + 12,
              background: "rgba(15,23,42,0.97)",
              border: `1px solid ${currentMineralData.color}55`,
              borderRadius: 8,
              padding: 10,
              width: 300,
              zIndex: 9999,
              pointerEvents: "none",
              boxShadow: "0 10px 30px rgba(0,0,0,.5)",
            }}
          >
            <div style={{ fontWeight: 700, color: "#fff", marginBottom: 6 }}>
              {currentMineralData.name}
            </div>
            <div style={{ fontSize: 12, color: "#cbd5e1", marginBottom: 6 }}>
              <b>Used in:</b> {currentMineralData.usage}
            </div>
            <div style={{ fontSize: 12, color: "#cbd5e1" }}>
              <b>Imports:</b> {currentMineralData.importSources}
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* ================= HEADER ================= */}
      <motion.div 
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
         className={montserrat.className} 
        style={{ 
          textAlign: "center",
          marginBottom: 15,
        }}
      >
        <h2  className={montserrat.className} style={{ 
          fontWeight: 700,
          fontSize: "1rem",
          background: "linear-gradient(90deg, #f1f5f9 0%, #cbd5e1 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginBottom: 3,
          lineHeight: 1.2,
        }}>
          Building Domestic Supply Chains for Indian Semiconductor Plants Demands
        </h2>
      </motion.div>

      {/* ================= MAIN CONTENT GRID ================= */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "35% 65%", 
        gap: 12,
        height: "calc(100% - 60px)",
      }}>

        {/* ================= LEFT COLUMN ================= */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          
          {/* Market Chart */}
          <motion.div
            initial={{ x: -8, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              background: "rgba(30, 41, 59, 0.6)",
              borderRadius: 8,
              padding: 10,
              border: "1px solid #334155",
              flex: 1,
            }}
          >
            <h4 style={{ 
              fontSize: "0.8rem", 
              fontWeight: 600,
              color: "#f1f5f9",
              margin: "0 0 6px 0",
            }}
             className={montserrat.className} >
              India's Semiconductor Market (USD Billion)
            </h4>
            <div style={{ height: 100, marginTop: 30 }}>
              {mounted && <Bar data={marketData} options={marketOptions} />}
            </div>
            <div  className={montserrat.className} style={{ 
              display: "flex", 
              justifyContent: "space-between",
              marginTop: 6,
              fontSize: "0.65rem",
              color: "#94a3b8"
            }}>
              <div>Projected Growth: 187%</div>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <div style={{ width: 5, height: 5, background: "#6366f1", borderRadius: "50%" }} />
                  <span>2023</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <div style={{ width: 5, height: 5, background: "#8b5cf6", borderRadius: "50%" }} />
                  <span>2030</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Production Stats */}
          <motion.div
           className={montserrat.className} 
            initial={{ x: -8, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              background: "rgba(30, 41, 59, 0.6)",
              borderRadius: 8,
              padding: 10,
              border: "1px solid #334155",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 5
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <div  className={montserrat.className} style={{
                  width: 20,
                  height: 20,
                  background: "linear-gradient(135deg, #10b981, #34d399)",
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  color: "#ffffff"
                }}>
                  ⚡
                </div>
                <div>
                  <div  className={montserrat.className}  style={{ fontSize: "0.8rem", fontWeight: 700, color: "#ffffff" }}>
                    70,000 Wafers/Month
                  </div>
                  <div  className={montserrat.className} style={{ fontSize: "0.65rem", color: "#94a3b8" }}>
                  Two major Wafer Fabs Announced in India 
                  </div>
                </div>
              </div>

              <ul style={{ 
                fontSize: "0.7rem", 
                color: "#cbd5e1",
                paddingLeft: 10,
                margin: "6px 0",
                listStyleType: "none"
              }}>
                <li style={{ marginBottom: 3, display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 4, height: 4, background: "#10b981", borderRadius: "50%" }} />
                  Tata Electronics – PSMC Fab (Gujarat)
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 4, height: 4, background: "#3b82f6", borderRadius: "50%" }} />
                  HCL – Foxconn Fab (Uttar Pradesh)
                </li>
              </ul>
            </div>

            <div style={{ 
              background: "rgba(99, 102, 241, 0.1)",
              borderRadius: 6,
              padding: 6,
              border: "1px solid rgba(99, 102, 241, 0.2)"
            }}>
              
              <div style={{ fontSize: "0.65rem", color: "#cbd5e1" }}>
               Indian Semiconductor Mission has approved 10 projects worth : 
              </div>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#ffffff", marginBottom: 2 }}>
                ~₹1.60 Lakh Crore
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <motion.div
          initial={{ x: 8, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {/* Minerals Section */}
          <div  className={montserrat.className}  style={{
            background: "rgba(30, 41, 59, 0.6)",
            borderRadius: 8,
            padding: 10,
            border: "1px solid #334155",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <h4  className={montserrat.className}  style={{ 
                fontSize: "0.8rem", 
                fontWeight: 600,
                color: "#f1f5f9",
                margin: 0
              }}>
             To Manufacture these Chips you need Critical Minerals
              </h4>
            </div>

            <p className={montserrat.className}  style={{ 
              fontSize: "0.7rem", 
              color: "#94a3b8",
              margin: "0 0 10px 0",
              lineHeight: 1.2
            }}>
             India is still 100% import reliant on 7 critical minerals which are important in the midstream process of chip manufacturing
            </p>

            {/* Mineral Cards Grid (WITH HOVER FUNCTIONALITY FROM FIRST CODE) */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(3, 1fr)", 
              gap: 6,
              marginBottom: 10,
              flex: 1,
            }}>
              {mineralsData.map((m, index) => (
                <motion.div 
                  key={m.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                  onMouseMove={e => {
                    setTooltipPos({ x: e.clientX, y: e.clientY });
                  }}
                  onMouseEnter={() => {
                    clearTimeout(hoverTimeout.current);
                    setHoveredMineral(m.name);
                  }}
                  onMouseLeave={() => {
                    hoverTimeout.current = setTimeout(() => {
                      setHoveredMineral(null);
                    }, 80);
                  }}
                  style={{
                    background: `rgba(${parseInt(m.color.slice(1,3), 16)}, ${parseInt(m.color.slice(3,5), 16)}, ${parseInt(m.color.slice(5,7), 16)}, 0.1)`,
                    padding: "6px",
                    borderRadius: "6px",
                    border: `1px solid ${m.color}30`,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    position: "relative",
                    minHeight: "50px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: `${m.color}80`,
                    background: `rgba(${parseInt(m.color.slice(1,3), 16)}, ${parseInt(m.color.slice(3,5), 16)}, ${parseInt(m.color.slice(5,7), 16)}, 0.2)`,
                  }}
                >
                  <div style={{ 
                    fontSize: "0.7rem", 
                    fontWeight: 600,
                    color: "#ffffff",
                    marginBottom: 2,
                    lineHeight: 1.1,
                  }}>
                    {m.name}
                  </div>
                  <div style={{ 
                    fontSize: "0.6rem", 
                    color: "#cbd5e1",
                    lineHeight: 1.1,
                  }}>
                    {m.shortDesc}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Import Table */}
            <div  className={montserrat.className} style={{
              background: "rgba(15, 23, 42, 0.6)",
              borderRadius: "6px",
              overflow: "hidden",
              border: "1px solid #334155",
              fontSize: "0.7rem",
            }}>
              <table style={{
                width: "100%",
                borderCollapse: "collapse"
              }}>
                <thead>
                  <tr style={{ 
                    background: "rgba(30, 41, 59, 0.8)",
                  }}>
                    <th align="left" style={{ 
                      padding: "6px 8px", 
                      fontWeight: 600, 
                      color: "#94a3b8",
                      width: "45%",
                      fontSize: "0.7rem",
                    }}>
                      Mineral
                    </th>
                    <th align="left" style={{ 
                      padding: "6px 8px", 
                      fontWeight: 600, 
                      color: "#94a3b8",
                      fontSize: "0.7rem",
                    }}>
                      Top Import Sources
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {importTable.map(([mineral, source], index) => (
                    <motion.tr 
                     className={montserrat.className} 
                      key={mineral}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.03 }}
                      style={{
                        borderTop: "1px solid #334155",
                      }}
                    >
                      <td style={{ 
                        padding: "6px 8px",
                        fontWeight: 500,
                        color: "#f1f5f9",
                        fontSize: "0.7rem",
                      }}>
                        {mineral}
                      </td>
                      <td style={{ 
                        padding: "6px 8px",
                        color: "#cbd5e1",
                        fontSize: "0.7rem",
                      }}>
                        {source}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
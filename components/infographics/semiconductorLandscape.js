"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Bar = dynamic(() => import("react-chartjs-2").then((m) => m.Bar), {
  ssr: false,
});

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Infographic520Screenshot() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Top 5 exporting countries - CORRECTED DATA from screenshot
  const exportsData = {
    labels: ["China, Hong Kong SAR", "China", "Singapore", "Malaysia", "USA"],
    datasets: [
      {
        label: "Exports (US$ B)",
        data: [209, 198, 117, 85, 78],
        backgroundColor: [
          "#ff6b35",
          "#ff8c42",
          "#ffa857",
          "#ffc46b",
          "#ffdf80",
        ],
        borderRadius: 4,
        barThickness: 12,
      },
    ],
  };

  const exportsOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.8)",
        padding: 8,
        titleFont: { size: 11 },
        bodyFont: { size: 11 },
      },
      datalabels: {
        display: true,
        color: "#ffffff",
        anchor: "end",
        align: "right",
        offset: 4,
        font: {
          size: 9,
          weight: "bold"
        },
        formatter: (value) => `$${value}B`
      }
    },
    scales: {
      x: {
        display: false,
        grid: { display: false },
      },
      y: {
        ticks: {
          color: "#ffffff",
          font: { size: 10, weight: 600 },
          padding: 2,
        },
        grid: { display: false },
      },
    },
  };

  // Top 5 importing countries - CORRECTED DATA from screenshot
  const importsData = {
    labels: [
      "China, Hong Kong SAR",
      "Other Asia, nes",
      "Rep. of Korea",
      "Viet Nam",
      "Netherlands",
    ],
    datasets: [
      {
        label: "Imports (US$ B)",
        data: [67, 19, 19, 12, 10],
        backgroundColor: [
          "#00b4a0",
          "#00c9b1",
          "#00dec2",
          "#00f3d4",
          "#08ffdf",
        ],
        borderRadius: 4,
        barThickness: 10,
      },
    ],
  };

  const importsOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.8)",
        padding: 8,
        titleFont: { size: 11 },
        bodyFont: { size: 11 },
      },
      datalabels: {
        display: true,
        color: "#ffffff",
        anchor: "end",
        align: "right",
        offset: 4,
        font: {
          size: 9,
          weight: "bold"
        },
        formatter: (value) => `$${value}B`
      }
    },
    scales: {
      x: {
        display: false,
        grid: { display: false },
      },
      y: {
        ticks: {
          color: "#ffffff",
          font: { size: 10, weight: 600 },
          padding: 2,
        },
        grid: { display: false },
      },
    },
  };

  // Materials data - CORRECTED FROM SCREENSHOT
  const materials = [
    { name: "Silicon & SiC wafers", value: "~US$ 1.5 bn", color: "#ff6b35" },
    {
      name: "Process chemicals (wet chemicals & solvents)",
      value: "~US$ 1.5 bn",
      color: "#ff8c42",
    },
    { name: "Specialty gases", value: "~US$ 0.7 bn", color: "#ffa857" },
    {
      name: "Photoresists & ancillaries",
      value: "~US$ 0.7 bn",
      color: "#ffc46b",
    },
    { name: "CMP slurries & pads", value: "~US$ 0.6 bn", color: "#ffdf80" },
    {
      name: "Packaging materials (substrates, leadframes, mould compounds, bonding wire, underfills)",
      value: "~US$ 2 bn",
      color: "#00b4a0",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "520px",
        height: "520px",
        padding: "clamp(10px, 2vw, 14px)",
        borderRadius: "12px",
        background:
          "linear-gradient(135deg, #0a1429 0%, #131f3a 50%, #1a2848 100%)",
        color: "#ffffff",
        fontFamily: "Inter, system-ui, sans-serif",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
          radial-gradient(circle at 15% 15%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 85% 85%, rgba(0, 180, 160, 0.08) 0%, transparent 50%)
        `,
          zIndex: 0,
        }}
      />

      {/* Header */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          marginBottom: "clamp(10px, 2vw, 14px)",
          padding: "0 clamp(6px, 1vw, 10px)",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(16px, 3.5vw, 18px)",
            fontWeight: "800",
            background: "linear-gradient(90deg, #ff6b35 0%, #00b4a0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: "0 0 clamp(4px, 1vw, 6px) 0",
            letterSpacing: "-0.01em",
            lineHeight: "1.2",
          }}
        >
          Semiconductor Materials Landscape: Market Size, Capacity & Global
          Trajectory
        </h1>
        <p
          style={{
            fontSize: "clamp(9px, 1.8vw, 11px)",
            color: "rgba(255,255,255,0.7)",
            margin: 0,
            fontWeight: "400",
            lineHeight: "1.3",
          }}
        >
          Semiconductor Materials includes one or more commodity codes that
          include multiple production stages (raw processing products, and
          waste/scrap).
        </p>
      </div>

      {/* Main Grid - Responsive Columns */}
      <div style={{ display: "flex", gap: "clamp(10px, 2vw, 14px)", height: "calc(100% - 70px)" }}>
        {/* Left Column */}
        <div style={{ flex: 2, display: "flex", flexDirection: "column", gap: "clamp(6px, 1.5vw, 8px)" }}>
          {/* Top Stats Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "clamp(4px, 1vw, 6px)",
              height: "auto",
              minHeight: "60px",
            }}
          >
            {/* China Export Card */}
            <div
              style={{
                background: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
                borderRadius: "6px",
                padding: "clamp(6px, 1.5vw, 8px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(255, 107, 53, 0.3)",
                minHeight: "60px",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(7px, 1.5vw, 9px)",
                  fontWeight: "700",
                  opacity: 0.9,
                  lineHeight: "1.1",
                }}
              >
                CHINA'S SEMICONDUCTOR MATERIAL EXPORTS IN 2023
              </div>
              <div
                style={{
                  fontSize: "clamp(14px, 3.5vw, 18px)",
                  fontWeight: "800",
                  lineHeight: "1.1",
                  margin: "clamp(1px, 0.3vw, 2px) 0",
                }}
              >
                $198B
              </div>
              <div style={{ fontSize: "clamp(7px, 1.2vw, 8px)", opacity: 0.8 }}>
                ~ 25% of Global Market Share
              </div>
            </div>

            {/* Global Export Card */}
            <div
              style={{
                background: "linear-gradient(135deg, #00b4a0 0%, #00c9b1 100%)",
                borderRadius: "6px",
                padding: "clamp(6px, 1.5vw, 8px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0, 180, 160, 0.3)",
                minHeight: "60px",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(7px, 1.5vw, 9px)",
                  fontWeight: "700",
                  opacity: 0.9,
                  lineHeight: "1.1",
                }}
              >
                GLOBAL SEMICONDUCTOR MATERIAL EXPORTS IN 2023
              </div>
              <div
                style={{
                  fontSize: "clamp(14px, 3.5vw, 18px)",
                  fontWeight: "800",
                  lineHeight: "1.1",
                  margin: "clamp(1px, 0.3vw, 2px) 0",
                }}
              >
                $843B
              </div>
              <div style={{ fontSize: "clamp(7px, 1.2vw, 8px)", opacity: 0.8 }}>
                India Projected: $110B by 2030
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "clamp(4px, 1vw, 6px)",
              height: "auto",
              minHeight: "120px",
            }}
          >
            {/* Export Chart */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: "6px",
                padding: "clamp(6px, 1.5vw, 8px)",
                border: "1px solid rgba(255,255,255,0.08)",
                minHeight: "120px",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(8px, 1.6vw, 10px)",
                  fontWeight: "700",
                  marginBottom: "4px",
                  color: "#ff6b35",
                }}
              >
                TOP 5 EXPORTING COUNTRIES
              </div>
              <div style={{ height: "95px", minHeight: "95px" }}>
                {mounted && <Bar data={exportsData} options={exportsOptions} />}
              </div>
              {/* Manual value labels */}
              <div style={{ position: "absolute", right: "8px", top: "20px", display: "flex", flexDirection: "column", gap: "12px", height: "95px", justifyContent: "space-between" }}>
                {exportsData.datasets[0].data.map((value, index) => (
                  <div key={index} style={{ fontSize: "9px", fontWeight: "bold", color: "#ffffff", textAlign: "right" }}>
                    ${value}B
                  </div>
                ))}
              </div>
            </div>

            {/* Import Chart */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: "6px",
                padding: "clamp(6px, 1.5vw, 8px)",
                border: "1px solid rgba(255,255,255,0.08)",
                minHeight: "120px",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(8px, 1.6vw, 10px)",
                  fontWeight: "700",
                  marginBottom: "4px",
                  color: "#00b4a0",
                }}
              >
                TOP 5 IMPORTING COUNTRIES
              </div>
              <div style={{ height: "95px", minHeight: "95px" }}>
                {mounted && <Bar data={importsData} options={importsOptions} />}
              </div>
              {/* Manual value labels */}
              <div style={{ position: "absolute", right: "8px", top: "20px", display: "flex", flexDirection: "column", gap: "12px", height: "95px", justifyContent: "space-between" }}>
                {importsData.datasets[0].data.map((value, index) => (
                  <div key={index} style={{ fontSize: "9px", fontWeight: "bold", color: "#ffffff", textAlign: "right" }}>
                    ${value}B
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Materials Table */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: "6px",
              padding: "clamp(6px, 1.5vw, 8px)",
              border: "1px solid rgba(255,255,255,0.08)",
              flex: 1,
              minHeight: "170px",
            }}
          >
            <div
              style={{
                fontSize: "clamp(8px, 1.6vw, 10px)",
                fontWeight: "700",
                marginBottom: "4px",
                color: "#ffffff",
              }}
            >
              PROJECTED INDIA 2030 DEMAND (INDICATIVE)
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "3px",
                height: "auto",
                minHeight: "calc(100% - 20px)",
                overflow: "hidden",
              }}
            >
              {materials.map((material, index) => (
                <div
                  key={index}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "3px",
                    padding: "clamp(4px, 1vw, 6px) clamp(5px, 1.2vw, 6px)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    borderLeft: `2px solid ${material.color}`,
                    minHeight: "26px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(7px, 1.3vw, 8px)",
                      fontWeight: "500",
                      color: "rgba(255,255,255,0.9)",
                      lineHeight: "1.2",
                      flex: 1,
                      paddingRight: "6px",
                    }}
                  >
                    {material.name}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(8px, 1.5vw, 9px)",
                      fontWeight: "800",
                      color: material.color,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {material.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "clamp(8px, 1.8vw, 10px)" }}>
          {/* Project Info Card */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: "8px",
              padding: "clamp(10px, 2vw, 12px)",
              border: "1px solid rgba(255,255,255,0.08)",
              flex: 1,
              minHeight: "300px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "clamp(10px, 2vw, 12px)",
                fontWeight: "700",
                marginBottom: "10px",
                lineHeight: "1.3",
                color: "#ff6b35",
              }}
            >
              Six plus Semiconductor projects approved by the government till
              date will produce over 24 Million chips per annum.
            </div>

            <div
              style={{
                fontSize: "clamp(11px, 2.2vw, 13px)",
                color: "rgba(255,255,255,0.9)",
                marginBottom: "12px",
                lineHeight: "1.4",
                background: "rgba(255,255,255,0.05)",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              India's Semiconductor Market Size is Projected to reach $110 B by 2030
            </div>

            <div
              style={{
                fontSize: "clamp(11px, 2.2vw, 13px)",
                color: "rgba(255,255,255,0.9)",
                marginBottom: "12px",
                lineHeight: "1.4",
                background: "rgba(255,255,255,0.05)",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              According to Market Research Future estimates India's
              semiconductor materials market US$ 2.34 bn (2023)
            </div>

            {/* Market Demand Question */}
            <div
              style={{
                background: "rgba(0, 180, 160, 0.12)",
                borderRadius: "8px",
                padding: "clamp(10px, 2vw, 12px)",
                border: "1px solid rgba(0, 180, 160, 0.3)",
                marginBottom: "10px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(9px, 1.8vw, 11px)",
                  fontWeight: "600",
                  marginBottom: "8px",
                  color: "rgba(255,255,255,0.9)",
                  lineHeight: "1.3",
                }}
              >
                What volume/value of wafers, gases, chemicals and packaging do
                you need to support a ~US$ 100 B+ chip market plus those new
                fabs/OSATs?
              </div>
              <div
                style={{
                  fontSize: "clamp(16px, 3.5vw, 18px)",
                  fontWeight: "800",
                  color: "#00b4a0",
                  textAlign: "center",
                  background: "rgba(0, 180, 160, 0.2)",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid rgba(0, 180, 160, 0.4)",
                }}
              >
                ~ US$ 7 B
              </div>
            </div>

            {/* Additional Info */}
            <div
              style={{
                fontSize: "clamp(8px, 1.4vw, 9px)",
                color: "rgba(255,255,255,0.6)",
                textAlign: "center",
                padding: "8px",
                background: "rgba(255,255,255,0.04)",
                borderRadius: "4px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              Materials category includes various production and packaging
              materials
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
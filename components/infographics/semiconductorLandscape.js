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

import ChartDataLabels from "chartjs-plugin-datalabels";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// REGISTER PLUGINS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default function Infographic520Screenshot() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // EXPORT DATA
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
        font: { size: 9, weight: "bold" },
        formatter: (value) => `$${value}B`,
      },
    },
    scales: {
      x: { display: false, grid: { display: false } },
      y: {
        ticks: { color: "#ffffff", font: { size: 10, weight: 600 } },
        grid: { display: false },
      },
    },
  };

  // IMPORT DATA
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
        font: { size: 9, weight: "bold" },
        formatter: (value) => `$${value}B`,
      },
    },
    scales: {
      x: { display: false, grid: { display: false } },
      y: {
        ticks: { color: "#ffffff", font: { size: 10, weight: 600 } },
        grid: { display: false },
      },
    },
  };

  // MATERIAL TABLE
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
    className={montserrat.className}
      style={{
        width: "100%",
        minHeight: "530px",
        padding: "clamp(10px, 2vw, 14px)",
        borderRadius: "10px",
        background:
          "linear-gradient(135deg, #0a1429 0%, #131f3a 50%, #1a2848 100%)",
        color: "#ffffff",
        fontFamily: "Inter, system-ui, sans-serif",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      {/* HEADER */}
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
        className={montserrat.className}
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
        className={montserrat.className}
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

      {/* MAIN GRID */}
      <div
        style={{
          display: "flex",
          gap: "clamp(10px, 2vw, 14px)",
          height: "calc(100% - 70px)",
        }}
      >
        {/* LEFT SIDE */}
        <div
        className={montserrat.className}
          style={{
            flex: 2,
            display: "flex",
            flexDirection: "column",
            gap: "clamp(6px, 1.5vw, 10px)",
          }}
        >
          {/* TOP CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "clamp(4px, 1vw, 6px)",
            }}
          >
            <div
            className={montserrat.className}
              style={{
                background: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
                borderRadius: "6px",
                padding: "10px",
                boxShadow: "0 4px 12px rgba(255, 107, 53, 0.3)",
              }}
            >
              <div className={montserrat.className} style={{ fontSize: 9, fontWeight: 700 }}>
                CHINA'S SEMICONDUCTOR EXPORTS IN 2023
              </div>
              <div className={montserrat.className} style={{ fontSize: 18, fontWeight: 800 }}>$198B</div>
              <div className={montserrat.className} style={{ fontSize: 8, opacity: 0.8 }}>
                ~25% of global market share
              </div>
            </div>

            <div
            className={montserrat.className}
              style={{
                background: "linear-gradient(135deg, #00b4a0 0%, #00c9b1 100%)",
                borderRadius: "6px",
                padding: "10px",
                boxShadow: "0 4px 12px rgba(0, 180, 160, 0.3)",
              }}
            >
              <div style={{ fontSize: 9, fontWeight: 700 }}>
                GLOBAL SEMICONDUCTOR MATERIAL EXPORTS IN 2023
              </div>
              <div style={{ fontSize: 18, fontWeight: 800 }}>$843B</div>
            </div>
          </div>

          {/* CHARTS */}
          <div
          className={montserrat.className}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "clamp(4px, 1vw, 6px)",
            }}
          >
            {/* EXPORT CHART */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 6,
                padding: "10px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#ff6b35",
                  marginBottom: 4,
                }}
                className={montserrat.className}
              >
                TOP 5 EXPORTING COUNTRIES
              </div>
              <div className={montserrat.className} style={{ height: 95 }}>
                {mounted && <Bar data={exportsData} options={exportsOptions} />}
              </div>
            </div>

            {/* IMPORT CHART */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 6,
                padding: "10px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              className={montserrat.className}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#00b4a0",
                  marginBottom: 4,
                }}
              >
                TOP 5 IMPORTING COUNTRIES
              </div>
              <div className={montserrat.className} style={{ height: 95 }}>
                {mounted && <Bar data={importsData} options={importsOptions} />}
              </div>
            </div>
          </div>

          {/* MATERIAL TABLE */}
          <div
          className={montserrat.className}
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: 6,
              padding: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
              flex: 1,
            }}
          >
            <div className={montserrat.className} style={{ fontSize: 10, fontWeight: 700, marginBottom: 4 }}>
              Semiconductor Material Fab + Packaging projected demand for India
              till 2030
            </div>

            {materials.map((m, i) => (
              <div
              className={montserrat.className}
                key={i}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 3,
                  padding: "6px 8px",
                  display: "flex",
                  justifyContent: "space-between",
                  borderLeft: `2px solid ${m.color}`,
                  marginBottom: 4,
                }}
              >
                <div style={{ fontSize: 8 }}>{m.name}</div>
                <div style={{ fontSize: 9, fontWeight: 800, color: m.color }}>
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}
        >
          <div
          className={montserrat.className}
            style={{
              background: "rgba(255,255,255,0.04)",
              padding: "12px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.08)",
              flex: 1,
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#ff6b35",
                marginBottom: 10,
              }}
              className={montserrat.className}
            >
              Six plus Semiconductor projects approved by the government till
              date will produce over 24 Million chips per annum.
            </div>

            <div
              style={{
                fontSize: 13,
                background: "rgba(255,255,255,0.05)",
                padding: 10,
                borderRadius: 6,
                marginBottom: 10,
              }}
              className={montserrat.className}
            >
              India's Semiconductor Market Size is Projected to reach $110 M by
              2030
            </div>

            <div
            className={montserrat.className}
              style={{
                fontSize: 13,
                background: "rgba(255,255,255,0.05)",
                padding: 10,
                borderRadius: 6,
                marginBottom: 10,
              }}
            >
              According to Market Research Future of the estimates India's
              semiconductor materials market was US$ 2.34 bn (2023)
            </div>

            <div
              style={{
                background: "rgba(0,180,160,0.12)",
                padding: 12,
                borderRadius: 8,
                border: "1px solid rgba(0,180,160,0.3)",
                marginBottom: 10,
              }}
            >
              <div className={montserrat.className} style={{ fontSize: 11, marginBottom: 8 }}>
                What volume/value of wafers, gases, chemicals and packaging do
                you need to support a ~US$ 100 B+ chip market plus new
                fabs/OSATs?
              </div>
              <div
              className={montserrat.className}
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#00b4a0",
                  textAlign: "center",
                }}
              >
                ~ US$ 7 B
              </div>
            </div>

            <div
              style={{
                fontSize: 9,
                color: "rgba(255,255,255,0.6)",
                textAlign: "center",
                padding: 8,
                background: "rgba(255,255,255,0.04)",
                borderRadius: 4,
              }}
              className={montserrat.className}
            >
              Materials category includes various production and packaging
              materials.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

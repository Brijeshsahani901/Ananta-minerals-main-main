"use client";

import React, { useState } from "react";
import { Montserrat, Playfair_Display } from "@/lib/fonts";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export default function MofcomAnnouncement48() {
  const [activeSlice, setActiveSlice] = useState(null);

  const tableData = [
    {
      stage: "Polysilicon",
      position: "No commercial production",
      impact:
        "Access to Chinese manufacturing technology could become harder, delaying new plants.",
    },
    {
      stage: "Ingots and wafers",
      position: "Single-digit GW capacity; around 55 GW planned for 2027",
      impact:
        "Greatest exposure: controls could delay equipment supply, technology transfer and factory commissioning.",
    },
    {
      stage: "Solar cells",
      position: "Growing domestic capacity",
      impact:
        "New production lines and upgrades could face restrictions, depending on the technology.",
    },
    {
      stage: "Modules / panels",
      position: "Large surplus manufacturing capacity",
      impact:
        "Minimal direct impact; finished panels are outside these controls.",
    },
  ];

  return (
    <div
      className={`mofcom-container ${montserrat.className}`}
      style={montserrat.style}
    >
      <div className="mofcom-card">
        {/* Header Title */}
        <div className="mofcom-header">
          <h2
            className={`mofcom-title ${playfair.className}`}
            style={playfair.style}
          >
            MOFCOM Announcement 48: Impact Assessment of China’s Latest Set of
            Export Controls
          </h2>
        </div>

        {/* Top Info & Pie Chart Section */}
        <div className="mofcom-top-section">
          {/* Left Stats and Notes */}
          <div className="mofcom-stats-col">
            {/* Stat Row 1 */}
            <div className="mofcom-stat-row">
              <span className="mofcom-stat-num">40</span>
              <p className="mofcom-stat-desc">
                Restrictions have been added to the export controls list.
                Following pie chart has the restrictions divided in sectors :
              </p>
            </div>

            {/* Stat Row 2 */}
            <div className="mofcom-stat-row">
              <span className="mofcom-stat-num">26</span>
              <p className="mofcom-stat-desc">
                Proposed restrictions require export licences across all three
                sectors. The sector that will get affected for India is the
                solar industry Specifically
              </p>
            </div>

            {/* Note text */}
            <div className="mofcom-note">
              *Polysilicon becomes an ingot; the ingot becomes a wafer, then
              solar cells. Solar Cells are assembled into panel
            </div>
          </div>

          {/* Right Pie Chart */}
          <div className="mofcom-pie-col">
            <div className="mofcom-pie-wrapper">
              <svg
                viewBox="0 0 310 152"
                className="mofcom-pie-svg"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* 1. Bio medicine: 12.5% = 45 deg, from 90 deg (155, 40) to 135 deg (112.57, 57.57) */}
                <path
                  d="M 155 100 L 155 40 A 60 60 0 0 0 112.57 57.57 Z"
                  fill="#f6e7d2"
                  className="pie-slice"
                  style={{
                    opacity: activeSlice && activeSlice !== "bio" ? 0.6 : 1,
                    transformOrigin: "155px 100px",
                    transform:
                      activeSlice === "bio" ? "scale(1.04)" : "scale(1)",
                    transition: "all 0.25s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setActiveSlice("bio")}
                  onMouseLeave={() => setActiveSlice(null)}
                />

                {/* 2. Solar Industry: 30% = 108 deg, from 135 deg (112.57, 57.57) to 243 deg (127.76, 153.46) */}
                <path
                  d="M 155 100 L 112.57 57.57 A 60 60 0 0 0 127.76 153.46 Z"
                  fill="#ef3b2b"
                  className="pie-slice"
                  style={{
                    opacity: activeSlice && activeSlice !== "solar" ? 0.6 : 1,
                    transformOrigin: "155px 100px",
                    transform:
                      activeSlice === "solar" ? "scale(1.04)" : "scale(1)",
                    transition: "all 0.25s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setActiveSlice("solar")}
                  onMouseLeave={() => setActiveSlice(null)}
                />

                {/* 3. AI: 57.5% = 207 deg, from 243 deg (127.76, 153.46) to 90 deg (155, 40) */}
                <path
                  d="M 155 100 L 127.76 153.46 A 60 60 0 1 0 155 40 Z"
                  fill="#adc6f7"
                  className="pie-slice"
                  style={{
                    opacity: activeSlice && activeSlice !== "ai" ? 0.6 : 1,
                    transformOrigin: "155px 100px",
                    transform:
                      activeSlice === "ai" ? "scale(1.04)" : "scale(1)",
                    transition: "all 0.25s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setActiveSlice("ai")}
                  onMouseLeave={() => setActiveSlice(null)}
                />

                {/* Labels */}
                {/* Bio medicine Label (Top-Left) */}
                <g
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setActiveSlice("bio")}
                  onMouseLeave={() => setActiveSlice(null)}
                >
                  <text
                    x="142"
                    y="22"
                    textAnchor="end"
                    fontSize="11.5"
                    fontWeight="500"
                    fill="#1f2937"
                  >
                    Bio medicine
                  </text>
                  <text
                    x="142"
                    y="36"
                    textAnchor="end"
                    fontSize="11.5"
                    fontWeight="500"
                    fill="#1f2937"
                  >
                    12.5%
                  </text>
                </g>

                {/* Solar Industry Label (Bottom-Left) */}
                <g
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setActiveSlice("solar")}
                  onMouseLeave={() => setActiveSlice(null)}
                >
                  <text
                    x="88"
                    y="136"
                    textAnchor="end"
                    fontSize="11.5"
                    fontWeight="500"
                    fill="#1f2937"
                  >
                    Solar Industry
                  </text>
                  <text
                    x="88"
                    y="151"
                    textAnchor="end"
                    fontSize="11.5"
                    fontWeight="500"
                    fill="#1f2937"
                  >
                    30%
                  </text>
                </g>

                {/* AI Label (Right) */}
                <g
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setActiveSlice("ai")}
                  onMouseLeave={() => setActiveSlice(null)}
                >
                  <text
                    x="226"
                    y="136"
                    textAnchor="start"
                    fontSize="11.5"
                    fontWeight="500"
                    fill="#1f2937"
                  >
                    AI
                  </text>
                  <text
                    x="226"
                    y="151"
                    textAnchor="start"
                    fontSize="11.5"
                    fontWeight="500"
                    fill="#1f2937"
                  >
                    57.5%
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Table Section */}
        <div className="mofcom-table-container">
          <table className="mofcom-table">
            <thead>
              <tr>
                <th style={{ width: "16%" }}>Supply-chain stage</th>
                <th style={{ width: "34%" }}>India’s production position</th>
                <th style={{ width: "50%" }}>
                  What the restrictions could mean
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx} className="mofcom-row">
                  <td className="stage-cell">{row.stage}</td>
                  <td className="position-cell">{row.position}</td>
                  <td className="impact-cell">{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        .mofcom-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          background: transparent;
          padding: 0;
        }

        .mofcom-card {
          width: 100%;
          height: 540px;
          min-height: 540px;
          background: linear-gradient(180deg, #ffffff 0%, #f2f5f7 28%, #d8e2e7 68%, #b6c4cb 100%);
          color: #111827;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 6px;
          padding: 12px 24px 14px 24px;
          position: relative;
        }

        .mofcom-header {
          text-align: center;
          margin: 0;
          flex-shrink: 0;
        }

        .mofcom-title {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 23px;
          font-weight: 700;
          color: #111827;
          margin: 0;
          line-height: 1.2;
          letter-spacing: -0.2px;
        }

        .mofcom-top-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-shrink: 0;
          margin: 0;
        }

        .mofcom-stats-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .mofcom-stat-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .mofcom-stat-num {
          font-size: 34px;
          font-weight: 700;
          color: #111827;
          line-height: 1;
          min-width: 44px;
          flex-shrink: 0;
        }

        .mofcom-stat-desc {
          margin: 0;
          font-size: 13px;
          color: #1f2937;
          line-height: 1.3;
        }

        .mofcom-note {
          margin-top: 1px;
          font-size: 11.5px;
          font-style: italic;
          color: #374151;
          line-height: 1.25;
        }

        .mofcom-pie-col {
          flex-shrink: 0;
          width: 290px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .mofcom-pie-wrapper {
          width: 100%;
          height: 130px;
        }

        .mofcom-pie-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .mofcom-table-container {
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
          margin-top: 2px;
          border-radius: 8px;
          overflow: hidden;
        }

        .mofcom-table {
          width: 100%;
          height: 100%;
          border-collapse: collapse;
          border: 1.5px solid #d9756e;
          border-radius: 8px;
          overflow: hidden;
          font-size: 13px;
        }

        .mofcom-table thead tr {
          background-color: #db7b74;
        }

        .mofcom-table th {
          border: 1.5px solid #d9756e;
          padding: 8px 10px;
          color: #5e1d1b;
          font-weight: 700;
          text-align: center;
          vertical-align: middle;
          font-size: 13.5px;
          line-height: 1.25;
        }

        .mofcom-table td {
          border: 1.5px solid #d9756e;
          padding: 7px 12px;
          color: #1f2937;
          text-align: center;
          vertical-align: middle;
          line-height: 1.3;
          background-color: #e2eaee;
          transition: background-color 0.2s ease;
        }

        .mofcom-row:hover td {
          background-color: #d7e4e9;
        }

        .stage-cell {
          font-weight: 600;
          color: #111827;
        }

        @media (max-width: 992px) {
          .mofcom-card {
            height: auto;
            min-height: 540px;
            padding: 16px;
            gap: 16px;
          }

          .mofcom-title {
            font-size: 20px;
          }

          .mofcom-top-section {
            flex-direction: column;
            align-items: center;
          }

          .mofcom-pie-col {
            width: 100%;
            max-width: 320px;
          }

          .mofcom-table-container {
            overflow-x: auto;
          }

          .mofcom-table {
            min-width: 650px;
          }
        }

        @media (max-width: 576px) {
          .mofcom-title {
            font-size: 17px;
          }

          .mofcom-stat-num {
            font-size: 28px;
            min-width: 38px;
          }

          .mofcom-stat-desc {
            font-size: 12px;
          }

          .mofcom-note {
            font-size: 11px;
          }

          .mofcom-table th,
          .mofcom-table td {
            font-size: 12px;
            padding: 6px 8px;
          }
        }
      `}</style>
    </div>
  );
}

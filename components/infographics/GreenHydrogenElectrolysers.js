"use client";

import React from "react";
import { Montserrat, Playfair_Display } from "@/lib/fonts";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function GreenHydrogenElectrolysers() {
  const ticks = [0, 5, 10, 15, 20, 25, 30, 35];

  const barData = [
    { label: "Titanium", value: 20.7, percent: (20.7 / 35) * 100 },
    { label: "Platinum", value: 15, percent: (15 / 35) * 100 },
    { label: "Iridium", value: 35, percent: 100 },
  ];

  return (
    <div className={`electrolyser-container ${montserrat.className}`}>
      {/* Title */}
      <h2 className={`main-title ${playfair.className}`}>
        Minerals Powering Electrolysers for Green Hydrogen
      </h2>

      {/* Top Banner Card */}
      <div className="info-card top-banner">
        <p className="banner-text">
          India’s 5-MMT annual green hydrogen target could require 250 TWh of electricity a year and 50 GW of electrolysers.
        </p>
        <p className="banner-text mt-2">
          As of mid2025, approximately 2.15 gigawatts (GW) of electrolyzer capacity was operational worldwide — equivalent to meeting only about 0.2 percent of current global hydrogen demand.
        </p>
      </div>

      {/* Middle Banner Card: 2 Types of Electrolysers */}
      <div className="info-card middle-banner">
        <div className="middle-top-row">
          <div className="middle-title">
            There are 2 types of Electrolysers mostly operational in producing Green Hydrogen
          </div>
          <div className="legend-wrapper">
            <div className="legend-item">
              <span className="legend-dot dot-alkaline" />
              <span className="legend-text">Alkaline</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot dot-pem" />
              <span className="legend-text">Proton Electron Membrane ( PEM )</span>
            </div>
          </div>
        </div>

        {/* Split Progress Bar */}
        <div className="split-bar-track">
          <div className="split-bar-segment segment-alkaline" style={{ width: "64%" }}>
            64%
          </div>
          <div className="split-bar-segment segment-pem" style={{ width: "36%" }}>
            36%
          </div>
        </div>
      </div>

      {/* Bottom Section: 3 Columns */}
      <div className="bottom-grid">
        {/* Left Column: 50 GW of PEM Electrolysers Bar Chart */}
        <div className="bottom-col col-pem">
          <div className="col-heading pem-heading">
            <em>50 GW of PEM Electrolysers</em> would require below Minerals in Quantity ( Tonnes )
          </div>

          <div className="bar-chart-container">
            <div className="chart-main">
              {/* Vertical Gridlines */}
              <div className="gridlines-layer">
                {ticks.map((t) => (
                  <div
                    key={t}
                    className="gridline-line"
                    style={{ left: `${(t / 35) * 100}%` }}
                  />
                ))}
              </div>

              {/* Rows */}
              <div className="bars-stack">
                {barData.map((item) => (
                  <div key={item.label} className="bar-item-row">
                    <div className="mineral-name">{item.label}</div>
                    <div className="bar-area">
                      <div
                        className="bar-filled"
                        style={{ width: `${item.percent}%` }}
                      >
                        {item.value >= 35 && (
                          <span className="bar-num inside-num">{item.value}</span>
                        )}
                      </div>
                      {item.value < 35 && (
                        <span
                          className="bar-num outside-num"
                          style={{ left: `calc(${item.percent}% + 6px)` }}
                        >
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* X-Axis Scale */}
            <div className="x-axis-container">
              <div className="axis-spacer" />
              <div className="axis-scale">
                {ticks.map((t) => (
                  <span
                    key={t}
                    className="axis-tick"
                    style={{ left: `${(t / 35) * 100}%` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column: Global Iridium Supply Pie Chart */}
        <div className="bottom-col col-iridium">
          <div className="col-heading iridium-heading">
            <em>Global Iridium Supply</em>
          </div>

          <div className="pie-wrapper">
            {/* World Label */}
            <div className="pie-tag tag-world">
              <div>World</div>
              <div>15%</div>
            </div>

            <svg
              viewBox="0 0 160 160"
              className="pie-svg-chart"
              aria-label="Global Iridium Supply: South Africa 85%, World 15%"
            >
              {/* South Africa: 85% */}
              <path
                d="M 80 80 L 80 16 A 64 64 0 1 1 28.22 42.38 Z"
                fill="#4178fb"
              />
              {/* World: 15% */}
              <path
                d="M 80 80 L 28.22 42.38 A 64 64 0 0 1 80 16 Z"
                fill="#a885fc"
              />
            </svg>

            {/* South Africa Label */}
            <div className="pie-tag tag-sa">
              <div>South Africa</div>
              <div>85%</div>
            </div>
          </div>
        </div>

        {/* Right Column: Alkaline Electrolysers Box */}
        <div className="bottom-col col-alkaline">
          <div className="info-card alkaline-card">
            <p className="alkaline-text">
              <em>50 GW of Alkaline Electrolysers</em> would require approximately 50,000 tonnes of Nickel
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .electrolyser-container {
          width: 100%;
          height: 530px;
          min-height: 530px;
          max-height: 530px;
          background: #116a24;
          border-radius: 16px;
          padding: 14px 22px 14px 22px;
          box-sizing: border-box;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow-y: auto;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          position: relative;
        }

        .electrolyser-container::-webkit-scrollbar {
          width: 5px;
        }
        .electrolyser-container::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.25);
          border-radius: 4px;
        }

        .main-title {
          text-align: center;
          font-size: 27px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 10px 0;
          letter-spacing: 0.3px;
          line-height: 1.25;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .info-card {
          background: #0b5118;
          border: 1.5px solid #083c11;
          border-radius: 16px;
          padding: 10px 18px;
          box-sizing: border-box;
        }

        .top-banner {
          margin-bottom: 8px;
        }

        .banner-text {
          margin: 0;
          font-size: 13.5px;
          font-weight: 700;
          line-height: 1.4;
          color: #ffffff;
        }

        .mt-2 {
          margin-top: 6px;
        }

        .middle-banner {
          margin-bottom: 10px;
        }

        .middle-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 8px;
        }

        .middle-title {
          font-size: 13.8px;
          font-weight: 700;
          color: #ffffff;
        }

        .legend-wrapper {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .legend-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
        }

        .dot-alkaline {
          background-color: #4178fb;
        }

        .dot-pem {
          background-color: #a885fc;
        }

        .legend-text {
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
        }

        .split-bar-track {
          display: flex;
          width: 100%;
          height: 28px;
          border-radius: 4px;
          overflow: hidden;
        }

        .split-bar-segment {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        .segment-alkaline {
          background-color: #4178fb;
        }

        .segment-pem {
          background-color: #a885fc;
        }

        .bottom-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.85fr 0.9fr;
          gap: 16px;
          align-items: stretch;
          flex: 1;
        }

        .bottom-col {
          display: flex;
          flex-direction: column;
        }

        .col-heading {
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.35;
          margin-bottom: 8px;
        }

        .pem-heading em,
        .iridium-heading em {
          font-style: italic;
        }

        .iridium-heading {
          text-align: center;
        }

        /* BAR CHART */
        .bar-chart-container {
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: center;
        }

        .chart-main {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 4px 0;
        }

        .gridlines-layer {
          position: absolute;
          left: 72px;
          right: 0;
          top: 0;
          bottom: 0;
          pointer-events: none;
        }

        .gridline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255, 255, 255, 0.22);
          transform: translateX(-50%);
        }

        .bars-stack {
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 1;
        }

        .bar-item-row {
          display: flex;
          align-items: center;
          height: 28px;
        }

        .mineral-name {
          width: 72px;
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
          flex-shrink: 0;
        }

        .bar-area {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
        }

        .bar-filled {
          background-color: #4178fb;
          height: 24px;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 6px;
        }

        .bar-num {
          font-size: 12.5px;
          font-weight: 800;
          color: #ffffff;
        }

        .inside-num {
          color: #ffffff;
        }

        .outside-num {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          white-space: nowrap;
        }

        .x-axis-container {
          display: flex;
          align-items: center;
          margin-top: 4px;
        }

        .axis-spacer {
          width: 72px;
          flex-shrink: 0;
        }

        .axis-scale {
          flex: 1;
          position: relative;
          height: 16px;
        }

        .axis-tick {
          position: absolute;
          transform: translateX(-50%);
          font-size: 12px;
          font-weight: 700;
          color: #ffffff;
        }

        /* PIE CHART */
        .col-iridium {
          align-items: center;
        }

        .pie-wrapper {
          position: relative;
          width: 145px;
          height: 145px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto 0;
        }

        .pie-svg-chart {
          width: 135px;
          height: 135px;
          display: block;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.25));
        }

        .pie-tag {
          position: absolute;
          font-size: 11px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          text-align: center;
          pointer-events: none;
        }

        .tag-world {
          top: -2px;
          left: 8px;
        }

        .tag-sa {
          bottom: -18px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
        }

        /* ALKALINE CALLOUT */
        .col-alkaline {
          justify-content: center;
        }

        .alkaline-card {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 18px;
        }

        .alkaline-text {
          margin: 0;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.45;
          color: #ffffff;
        }

        .alkaline-text em {
          font-style: italic;
        }

        /* Responsive Tweaks */
        @media (max-width: 900px) {
          .electrolyser-container {
            height: auto;
            max-height: none;
            padding: 16px 14px;
          }

          .bottom-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .col-iridium {
            margin: 14px 0 20px 0;
          }

          .tag-sa {
            bottom: -20px;
          }
        }
      `}</style>
    </div>
  );
}

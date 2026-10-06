import React, { useState } from 'react';
import { Montserrat, Playfair_Display } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export default function FertilizerCrossfire() {
  const [hoveredInfo, setHoveredInfo] = useState(null);

  // Chart 2: Top Producers Data
  const producersData = [
    { country: "China", value: 19.0 },
    { country: "United States", value: 8.1 },
    { country: "Russia", value: 7.5 },
    { country: "Saudi Arabia", value: 7.2 },
    { country: "United Arab Emirates", value: 6.3 },
    { country: "Canada", value: 5.0 },
    { country: "Kazakhstan", value: 4.8 },
    { country: "India", value: 3.7 },
    { country: "Republic of Korea", value: 3.1 },
    { country: "Qatar", value: 3.1 },
  ];

  // Chart 3: India's Sulphur Imports Data
  const indiaImportsData = [
    { year: "2020", westAsia: 2.02, other: 0.25 },
    { year: "2021", westAsia: 1.88, other: 0.08 },
    { year: "2022", westAsia: 1.45, other: 1.78 },
    { year: "2023", westAsia: 1.48, other: 0.06 },
    { year: "2024", westAsia: 1.67, other: 0.12 },
    { year: "2025", westAsia: 1.28, other: 0.08 },
  ];

  // Chart 4: Phosphoric Acid Price Data
  const phosphoricData = [
    { period: "Q1 2025", price: 1055, x: 45, y: 95.9 },
    { period: "Q2 2025", price: 1153, x: 123.3, y: 88.5 },
    { period: "Q3 2025", price: 1258, x: 201.7, y: 80.65 },
    { period: "Q4 2025", price: 1258, x: 280.0, y: 80.65 },
    { period: "Q1 2026", price: 1258, x: 358.3, y: 80.65 },
    { period: "Q2 2026", price: 1360, x: 436.7, y: 73.0, annotation: true },
    { period: "Q3 2026", price: 1700, x: 515.0, y: 47.5 },
  ];

  return (
    <div className={`fc-outer-wrapper ${montserrat.className}`}>
      <div className="fc-card">
        {/* Main Title */}
        <div className="fc-main-header">
          <h1 className={`fc-title ${playfair.className}`}>
            Sulphur, Phosphorus and Potash are in the crossfire
          </h1>
        </div>

        {/* Dynamic Tooltip */}
        {hoveredInfo && (
          <div className="fc-floating-tooltip">
            <span className="fc-tooltip-label">{hoveredInfo.label}: </span>
            <span className="fc-tooltip-val">{hoveredInfo.val}</span>
          </div>
        )}

        {/* Top Section - 3 Columns */}
        <div className="fc-top-grid">
          {/* Chart 1: International Sulphur Price */}
          <div className="fc-panel fc-panel-line1">
            <h3 className="fc-panel-title">
              International Sulphur price <span>(USD/ Metric Tonne)</span>
            </h3>
            <div className="fc-svg-container">
              <svg viewBox="0 0 380 210" className="fc-svg" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <marker
                    id="arrow-iran-1"
                    viewBox="0 0 10 10"
                    refX="2"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto"
                  >
                    <path d="M 10 1 L 0 5 L 10 9 z" fill="#111827" />
                  </marker>
                </defs>

                {/* Horizontal Grid lines & Y Ticks */}
                {[
                  { val: "1,200", y: 25 },
                  { val: "1,000", y: 53.3 },
                  { val: "800", y: 81.7 },
                  { val: "600", y: 110.0 },
                  { val: "400", y: 138.3 },
                  { val: "200", y: 166.7 },
                  { val: "0", y: 195 },
                ].map((item, idx) => (
                  <g key={idx}>
                    <line
                      x1="42"
                      y1={item.y}
                      x2="370"
                      y2={item.y}
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />
                    <text
                      x="36"
                      y={item.y + 4}
                      textAnchor="end"
                      fontSize="10"
                      fontWeight="500"
                      fill="#475569"
                    >
                      {item.val}
                    </text>
                  </g>
                ))}

                {/* X Axis Labels */}
                {[
                  { label: "Jul 2025", x: 42 },
                  { label: "Oct 2025", x: 120.25 },
                  { label: "Jan 2026", x: 198.5 },
                  { label: "Apr 2026", x: 276.75 },
                  { label: "Jul 2026", x: 355 },
                ].map((item, idx) => (
                  <text
                    key={idx}
                    x={item.x}
                    y="212"
                    textAnchor="middle"
                    fontSize="9.5"
                    fontWeight="500"
                    fill="#334155"
                  >
                    {item.label}
                  </text>
                ))}

                {/* Teal Trend Line */}
                <path
                  d="M 42 155.3 L 198.5 119.35 L 355 46.25"
                  fill="none"
                  stroke="#2cb5a0"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />

                {/* Point 1: 280 */}
                <circle
                  cx="42"
                  cy="155.3"
                  r="3.5"
                  fill="#2cb5a0"
                  className="fc-interactive-dot"
                  onMouseEnter={() => setHoveredInfo({ label: "Jul 2025 Price", val: "$280 / MT" })}
                  onMouseLeave={() => setHoveredInfo(null)}
                />
                <text
                  x="42"
                  y="172"
                  textAnchor="start"
                  fontSize="12.5"
                  fontWeight="700"
                  fontStyle="italic"
                  fill="#111827"
                >
                  280
                </text>

                {/* Point 2: 534 */}
                <circle
                  cx="198.5"
                  cy="119.35"
                  r="3.5"
                  fill="#2cb5a0"
                  className="fc-interactive-dot"
                  onMouseEnter={() => setHoveredInfo({ label: "Jan 2026 Price", val: "$534 / MT" })}
                  onMouseLeave={() => setHoveredInfo(null)}
                />
                <text
                  x="202"
                  y="136"
                  textAnchor="start"
                  fontSize="12.5"
                  fontWeight="700"
                  fontStyle="italic"
                  fill="#111827"
                >
                  534
                </text>

                {/* Point 3: 1050 */}
                <circle
                  cx="355"
                  cy="46.25"
                  r="3.5"
                  fill="#2cb5a0"
                  className="fc-interactive-dot"
                  onMouseEnter={() => setHoveredInfo({ label: "Jul 2026 Price", val: "$1,050 / MT" })}
                  onMouseLeave={() => setHoveredInfo(null)}
                />
                <text
                  x="345"
                  y="62"
                  textAnchor="middle"
                  fontSize="12.5"
                  fontWeight="700"
                  fontStyle="italic"
                  fill="#111827"
                >
                  1050
                </text>

                {/* Annotation: US Attack on Iran */}
                <g>
                  <line
                    x1="225"
                    y1="107"
                    x2="178"
                    y2="107"
                    stroke="#111827"
                    strokeWidth="1.2"
                    markerEnd="url(#arrow-iran-1)"
                  />
                  <text
                    x="232"
                    y="110.5"
                    fontSize="11.5"
                    fontWeight="700"
                    fontStyle="italic"
                    fill="#1d4ed8"
                  >
                    US Attack on Iran
                  </text>
                </g>
              </svg>
            </div>
          </div>

          {/* Chart 2: Top Producers of Sulphur in 2025 */}
          <div className="fc-panel fc-panel-bar1">
            <h3 className="fc-panel-title">
              Top Producers of Sulphur in 2025 <span>(Million Metric Tonne)</span>
            </h3>
            <div className="fc-svg-container">
              <svg viewBox="0 0 420 210" className="fc-svg" preserveAspectRatio="xMidYMid meet">
                {/* Horizontal Grid lines */}
                {[
                  { val: "20", y: 25 },
                  { val: "15", y: 62.5 },
                  { val: "10", y: 100 },
                  { val: "5", y: 137.5 },
                  { val: "0", y: 175 },
                ].map((item, idx) => (
                  <g key={idx}>
                    <line
                      x1="28"
                      y1={item.y}
                      x2="410"
                      y2={item.y}
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />
                    <text
                      x="23"
                      y={item.y + 4}
                      textAnchor="end"
                      fontSize="10"
                      fontWeight="500"
                      fill="#475569"
                    >
                      {item.val}
                    </text>
                  </g>
                ))}

                {/* Vertical Bars & Labels */}
                {producersData.map((d, i) => {
                  const barW = 26;
                  const x = 36 + i * 37.4;
                  const barH = (d.value / 20) * 150;
                  const y = 175 - barH;

                  return (
                    <g key={i}>
                      <rect
                        x={x}
                        y={y}
                        width={barW}
                        height={barH}
                        fill="#2b6cb0"
                        className="fc-bar-hover"
                        onMouseEnter={() =>
                          setHoveredInfo({ label: d.country, val: `${d.value} Million Tonnes` })
                        }
                        onMouseLeave={() => setHoveredInfo(null)}
                      />
                      {/* Rotated Country Name */}
                      <text
                        x={x + barW / 2 + 3}
                        y="184"
                        transform={`rotate(-45, ${x + barW / 2 + 3}, 184)`}
                        textAnchor="end"
                        fontSize="8.5"
                        fontWeight="500"
                        fill="#1e293b"
                      >
                        {d.country}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Chart 3: India's Sulphur Imports */}
          <div className="fc-panel fc-panel-imports">
            <h3 className="fc-panel-title fc-title-centered">
              India’s Sulphur Imports
            </h3>

            {/* Legend */}
            <div className="fc-purple-legend">
              <div className="fc-legend-item">
                <span className="fc-legend-dot fc-dot-blue" />
                <span className="fc-legend-text">West Asia (Million Tonnes)</span>
              </div>
              <div className="fc-legend-item">
                <span className="fc-legend-dot fc-dot-teal" />
                <span className="fc-legend-text">Other regions (Million Tonnes)</span>
              </div>
            </div>

            <div className="fc-svg-container">
              <svg viewBox="0 0 350 195" className="fc-svg" preserveAspectRatio="xMidYMid meet">
                {/* Horizontal Grid lines */}
                {[
                  { val: "2.5", y: 15 },
                  { val: "2.0", y: 48.4 },
                  { val: "1.5", y: 81.8 },
                  { val: "1.0", y: 115.2 },
                  { val: "0.5", y: 148.6 },
                  { val: "0", y: 182 },
                ].map((item, idx) => (
                  <g key={idx}>
                    <line
                      x1="28"
                      y1={item.y}
                      x2="340"
                      y2={item.y}
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />
                    <text
                      x="23"
                      y={item.y + 3.5}
                      textAnchor="end"
                      fontSize="9.5"
                      fontWeight="500"
                      fill="#475569"
                    >
                      {item.val}
                    </text>
                  </g>
                ))}

                {/* Grouped Bars per Year */}
                {indiaImportsData.map((d, i) => {
                  const groupWidth = 51;
                  const startX = 35 + i * groupWidth;
                  const barW = 14;

                  const hWest = (d.westAsia / 2.5) * 167;
                  const yWest = 182 - hWest;

                  const hOther = (d.other / 2.5) * 167;
                  const yOther = 182 - hOther;

                  return (
                    <g key={i}>
                      {/* West Asia Bar */}
                      <rect
                        x={startX}
                        y={yWest}
                        width={barW}
                        height={hWest}
                        fill="#2b6cb0"
                        className="fc-bar-hover"
                        onMouseEnter={() =>
                          setHoveredInfo({
                            label: `${d.year} West Asia`,
                            val: `${d.westAsia} Million Tonnes`,
                          })
                        }
                        onMouseLeave={() => setHoveredInfo(null)}
                      />

                      {/* Other regions Bar */}
                      <rect
                        x={startX + barW + 2}
                        y={yOther}
                        width={barW}
                        height={hOther}
                        fill="#2cb5a0"
                        className="fc-bar-hover"
                        onMouseEnter={() =>
                          setHoveredInfo({
                            label: `${d.year} Other regions`,
                            val: `${d.other} Million Tonnes`,
                          })
                        }
                        onMouseLeave={() => setHoveredInfo(null)}
                      />

                      {/* Year label */}
                      <text
                        x={startX + barW + 1}
                        y="196"
                        textAnchor="middle"
                        fontSize="10"
                        fontWeight="600"
                        fill="#1e293b"
                      >
                        {d.year}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Section - 2 Columns */}
        <div className="fc-bottom-grid">
          {/* Chart 4: Phosphoric Acid Import Price */}
          <div className="fc-panel fc-panel-line2">
            <h3 className="fc-panel-title">
              Phosphoric Acid Import Price <span>US$ per Tonne</span>
            </h3>
            <div className="fc-svg-container">
              <svg viewBox="0 0 540 200" className="fc-svg" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <marker
                    id="arrow-iran-2"
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="2"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto"
                  >
                    <path d="M 1 10 L 5 0 L 9 10 z" fill="#111827" />
                  </marker>
                </defs>

                {/* Horizontal Grid lines */}
                {[
                  { val: "2,000", y: 25 },
                  { val: "1,500", y: 62.5 },
                  { val: "1,000", y: 100 },
                  { val: "500", y: 137.5 },
                  { val: "0", y: 175 },
                ].map((item, idx) => (
                  <g key={idx}>
                    <line
                      x1="45"
                      y1={item.y}
                      x2="530"
                      y2={item.y}
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />
                    <text
                      x="38"
                      y={item.y + 4}
                      textAnchor="end"
                      fontSize="10"
                      fontWeight="500"
                      fill="#475569"
                    >
                      {item.val}
                    </text>
                  </g>
                ))}

                {/* X Axis Labels */}
                {phosphoricData.map((d, i) => (
                  <text
                    key={i}
                    x={d.x}
                    y="192"
                    textAnchor="middle"
                    fontSize="9.5"
                    fontWeight="500"
                    fill="#334155"
                  >
                    {d.period}
                  </text>
                ))}

                {/* Thick Line Path */}
                <path
                  d="M 45 95.9 L 123.3 88.5 L 201.7 80.65 L 280.0 80.65 L 358.3 80.65 L 436.7 73.0 L 515.0 47.5"
                  fill="none"
                  stroke="#2cb5a0"
                  strokeWidth="3.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Circle Nodes & Price Labels */}
                {phosphoricData.map((d, i) => (
                  <g key={i}>
                    <circle
                      cx={d.x}
                      cy={d.y}
                      r="4.5"
                      fill="#2cb5a0"
                      className="fc-interactive-dot"
                      onMouseEnter={() =>
                        setHoveredInfo({ label: `${d.period} Price`, val: `$${d.price} / Tonne` })
                      }
                      onMouseLeave={() => setHoveredInfo(null)}
                    />
                    <text
                      x={d.x}
                      y={d.y - 10}
                      textAnchor="middle"
                      fontSize="11.5"
                      fontWeight="700"
                      fontStyle="italic"
                      fill="#111827"
                    >
                      {d.price}
                    </text>
                  </g>
                ))}

                {/* Annotation Arrow at Q2 2026 */}
                <g>
                  <line
                    x1="436.7"
                    y1="130"
                    x2="436.7"
                    y2="83"
                    stroke="#111827"
                    strokeWidth="1.2"
                    markerEnd="url(#arrow-iran-2)"
                  />
                  <text
                    x="436.7"
                    y="144"
                    textAnchor="middle"
                    fontSize="11.5"
                    fontWeight="700"
                    fontStyle="italic"
                    fill="#1d4ed8"
                  >
                    US Attack on Iran
                  </text>
                </g>
              </svg>
            </div>
          </div>

          {/* Chart 5: Potash Contract Price */}
          <div className="fc-panel fc-panel-bar2">
            <h3 className="fc-panel-title" style={{ textAlign: 'left' }}>
              Potash contract price <span>US$ per Tonne</span>
            </h3>
            <div className="fc-svg-container">
              <svg viewBox="0 0 480 200" className="fc-svg" preserveAspectRatio="xMidYMid meet">
                {/* Horizontal Baseline & Ticks at Bottom */}
                <line x1="85" y1="168" x2="385" y2="168" stroke="#cbd5e1" strokeWidth="1.2" />

                {[
                  { val: "0", x: 85 },
                  { val: "100", x: 156.25 },
                  { val: "200", x: 227.5 },
                  { val: "300", x: 298.75 },
                  { val: "400", x: 370 },
                ].map((item, idx) => (
                  <g key={idx}>
                    <line
                      x1={item.x}
                      y1="168"
                      x2={item.x}
                      y2="173"
                      stroke="#94a3b8"
                      strokeWidth="1.2"
                    />
                    <text
                      x={item.x}
                      y="188"
                      textAnchor="middle"
                      fontSize="13"
                      fontWeight="500"
                      fill="#1e293b"
                    >
                      {item.val}
                    </text>
                  </g>
                ))}

                {/* June 2025 Bar */}
                <g>
                  <text
                    x="10"
                    y="74"
                    textAnchor="start"
                    fontSize="13.5"
                    fontWeight="600"
                    fill="#1e293b"
                  >
                    June 2025
                  </text>
                  <rect
                    x="85"
                    y="48"
                    width="249.4"
                    height="44"
                    fill="#2b6cb0"
                    className="fc-bar-hover"
                    onMouseEnter={() =>
                      setHoveredInfo({ label: "June 2025 Potash Price", val: "$350 / Tonne" })
                    }
                    onMouseLeave={() => setHoveredInfo(null)}
                  />
                </g>

                {/* June 2026 Bar */}
                <g>
                  <text
                    x="10"
                    y="136"
                    textAnchor="start"
                    fontSize="13.5"
                    fontWeight="600"
                    fill="#1e293b"
                  >
                    June 2026
                  </text>
                  <rect
                    x="85"
                    y="110"
                    width="273.6"
                    height="44"
                    fill="#2b6cb0"
                    className="fc-bar-hover"
                    onMouseEnter={() =>
                      setHoveredInfo({ label: "June 2026 Potash Price", val: "$384 / Tonne" })
                    }
                    onMouseLeave={() => setHoveredInfo(null)}
                  />
                </g>

                {/* Change : 9.7% Annotation */}
                <text
                  x="385"
                  y="102"
                  textAnchor="start"
                  fontSize="13.5"
                  fontWeight="700"
                  fontStyle="italic"
                  fill="#111827"
                >
                  Change : 9.7%
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fc-outer-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          box-sizing: border-box;
          background-color: transparent;
        }

        .fc-card {
          width: 100%; 
          height: 530px; 
          /* Adjusted gradient: Much lighter at top, darker at bottom */
          background: linear-gradient(to bottom, #f7f9f8 0%, #b8c7be 100%);
          border-radius: 0px; 
          box-shadow: none; 
          color: #111827;
          position: relative;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          padding: 20px 24px;
        }

        .fc-main-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .fc-title {
          font-size: 28px; 
          font-weight: 700;
          color: #111827;
          margin: 0;
          letter-spacing: -0.5px;
          line-height: 1.2;
        }

        .fc-floating-tooltip {
          position: absolute;
          top: 14px;
          right: 24px;
          background: #1e293b;
          color: #ffffff;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 11px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          pointer-events: none;
          z-index: 10;
          animation: fadeIn 0.2s ease;
        }

        .fc-tooltip-label {
          color: #94a3b8;
          font-weight: 500;
        }

        .fc-tooltip-val {
          color: #38bdf8;
          font-weight: 700;
        }

        /* Top Grid - 3 columns */
        .fc-top-grid {
          display: grid;
          grid-template-columns: 31% 37% 32%;
          gap: 16px;
          align-items: stretch;
          margin-bottom: 20px;
          flex: 1; 
          min-height: 0;
        }

        /* Bottom Grid - 2 columns */
        .fc-bottom-grid {
          display: grid;
          grid-template-columns: 52% 48%;
          gap: 20px;
          align-items: stretch;
          flex: 1; 
          min-height: 0;
        }

        .fc-panel {
          display: flex;
          flex-direction: column;
          background: transparent;
          min-height: 0;
        }

        .fc-panel-imports {
          border: none;
          padding: 0;
          background: transparent;
        }

        /* Pushes the content to the bottom to align the heading closer to the chart */
        .fc-panel-bar2 {
          justify-content: flex-end; 
        }

        .fc-panel-title {
          font-size: 13.5px;
          font-weight: 700;
          font-style: italic;
          color: #111827;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }

        .fc-panel-title span {
          font-weight: 700; 
          font-style: italic;
          color: #111827;
        }

        .fc-title-centered {
          text-align: center;
          margin-bottom: 4px;
        }

        .fc-purple-legend {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          margin-bottom: 4px;
        }

        .fc-legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .fc-legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
        }

        .fc-dot-blue {
          background-color: #2b6cb0;
        }

        .fc-dot-teal {
          background-color: #2cb5a0;
        }

        .fc-legend-text {
          font-size: 10px;
          font-weight: 500;
          color: #334155;
        }

        .fc-svg-container {
          width: 100%;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 0;
        }

        .fc-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .fc-bar-hover {
          transition: opacity 0.2s ease, filter 0.2s ease;
          cursor: pointer;
        }

        .fc-bar-hover:hover {
          opacity: 0.85;
          filter: brightness(1.1);
        }

        .fc-interactive-dot {
          transition: r 0.2s ease;
          cursor: pointer;
        }

        .fc-interactive-dot:hover {
          r: 6px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .fc-card {
            height: auto;
            min-height: 530px;
          }

          .fc-title {
            font-size: 22px;
          }

          .fc-top-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .fc-bottom-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .fc-card {
            padding: 16px 14px;
          }
        }

        @media (max-width: 576px) {
          .fc-title {
            font-size: 18px;
          }

          .fc-panel-title {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}
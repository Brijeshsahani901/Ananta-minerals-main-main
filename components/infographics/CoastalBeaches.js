import { Montserrat } from "next/font/google";
import { useState, useEffect } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const BAR_DATA = [
  { val: 136, mineral: "Deposits", color: "#4A90E2", label: "Total (in Million Tonnes)" },
  { val: 36, mineral: "Rutile", color: "#9B59B6", label: "Total (in Million Tonnes)" },
  { val: 38, mineral: "Zircon", color: "#F4D03F", label: "Total (in Million Tonnes)" },
  { val: 218, mineral: "Garnet", color: "#f9a825", label: "Total (in Million Tonnes)" },
  { val: 278, mineral: "Sillimanite", color: "#EC7063", label: "Total (in Million Tonnes)" },
];

const MAX_VAL = 300;
const CHART_H = 200;

export default function CoastalMinerals() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  return (
    <div className={montserrat.className}>
      <div className="wrap">

        {/* HEADER */}
        <div className="header">
          <div className="header-line" />
          <h1 className="title">INDIA'S MINERALS IN COASTAL BEACHES</h1>
          <div className="header-line" />
        </div>

        {/* MAIN GRID */}
        <div className="grid">
          {/* ── LEFT COLUMN ── */}
          <div className="col left-col">
            <Card
              emoji="🏖️"
              title="ODISHA"
              bold="13"
              text=" Total Deposits comprising of "
              boldEnd="172.25 MT"
              textEnd=" of Ilmenite"
            />
            <Card
              emoji="🌊"
              title="ANDHRA PRADESH"
              bold="25"
              text=" Total Deposits with "
              boldEnd="4.05 MT"
              textEnd=" of Monazite Sands"
            />
            <Card
              emoji="🌴"
              title="TAMIL NADU"
              bold="330.64"
              text=" Total Heavy Minerals with "
              boldEnd="71.15 MT"
              textEnd=" of Garnet"
            />
          </div>

          {/* ── CENTER COLUMN ── */}
          <div className="col center-col">
            {/* Kerala highlight */}
            <div className="center-card kerala">
              <div className="center-card-icon">🏄</div>
              <h2>KERALA</h2>
              <p><strong>144.02 MT</strong> of Ilmenite and a total of <strong>7.96 MT</strong> of Zircon</p>
            </div>

            {/* Bar chart */}
            <div className="chart-container">
              <div className="y-axis">
                {[300, 250, 200, 150, 100, 50, 0].map(v => (
                  <div key={v} className="y-tick">
                    <span>{v}</span>
                    <div className="y-line" />
                  </div>
                ))}
              </div>
              <div className="bars">
                {BAR_DATA.map((b, i) => {
                  const h = Math.round((b.val / MAX_VAL) * CHART_H);
                  return (
                    <div 
                      className="bar-col" 
                      key={i}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <span className="bar-val">{b.val}</span>
                      <div
                        className="bar"
                        style={{
                          height: h,
                          background: b.color,
                          animationDelay: `${i * 0.1}s`,
                          width: isMobile ? '20px' : isTablet ? '26px' : '32px',
                        }}
                      />
                      {/* Tooltip inside bar-col */}
                      {hoveredIndex === i && (
                        <div className="bar-tooltip">
                          <div className="bar-tooltip-content">
                            <strong>{b.mineral}</strong>
                            <span>{b.val}</span>
                            <span className="tooltip-state">{b.label}</span>
                          </div>
                          <div className="bar-tooltip-arrow"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="chart-label">Total (in Million Tonnes)</p>

            {/* Maharashtra highlight */}
            <div className="center-card maha">
              <div className="center-card-icon">🐚</div>
              <h2>MAHARASHTRA</h2>
              <p><strong>5.64 MT</strong> of Total Heavy Minerals with <strong>5</strong> mineral deposits</p>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="col right-col">
            <Card
              emoji="⛵"
              title="GUJARAT"
              bold="11.64 MT"
              text=" of Ilmenite and "
              boldEnd="0.03 MT"
              textEnd=" of Rutile"
            />
            <Card
              emoji="🎯"
              title="WEST BENGAL"
              bold="1.63 MT"
              text=" of Sillimanite and "
              boldEnd="1.20 MT"
              textEnd=" of Monazite Sands"
            />
            <Card
              emoji="💎"
              title="JHARKHAND"
              bold="1"
              text=" Deposit with "
              boldEnd="0.73 MT"
              textEnd=" of Ilmenite and 0.21 MT of Monazite Sands"
            />
          </div>

        </div>
      </div>

      <style jsx>{`
        /* Apply Montserrat to absolutely everything */
        .wrap, .wrap *,
        h1, h2, h3, h4, h5, h6,
        p, span, div, strong, b,
        .title, .card, .center-card,
        .bar-val, .y-tick span, .chart-label {
          font-family: ${montserrat.style.fontFamily} !important;
        }
        
        .wrap {
          min-height: 530px;
          padding: 10px;
          border-radius: 10px;
          background: linear-gradient(120deg, #00b4b4 0%, #40c9a0 30%, #f7d45a 70%, #f9c030 100%);
          box-shadow: 0 20px 60px rgba(0,0,0,0.18);
          position: relative;
          overflow: visible;
          width:100%;
          max-width:none;
          flex:1;
        }

        /* subtle wave overlay */
        .wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
        }

        /* HEADER */
        .header {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 5px;
        }

        .header-line {
          flex: 1;
          height: 1.5px;
          background: rgba(6,60,60,0.3);
          border-radius: 2px;
        }

        .title {
          font-size: clamp(10px, 2vw, 15px);
          font-weight: 700;
          letter-spacing: clamp(2px, 1vw, 1px);
          color: #063c3c;
          white-space: nowrap;
          text-shadow: 0 1px 0 rgba(255,255,255,0.4);
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr 1fr;
          gap: 16px;
          align-items: center;
        }

        @media (max-width: 1024px) and (min-width: 640px) {
          .grid {
            gap: 12px;
          }
        }

        @media (max-width: 640px) {
          .grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .wrap {
            padding: 16px;
          }
        }

        .col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .right-col {
          align-items: flex-end;
        }

        @media (max-width: 640px) {
          .right-col {
            align-items: stretch;
          }
          
          .left-col {
            order: 1;
          }
          
          .center-col {
            order: 2;
          }
          
          .right-col {
            order: 3;
          }
        }

        /* CENTER */
        .center-col {
          align-items: center;
        }

        .center-card {
          width: 100%;
          background: rgba(255,255,255,0.32);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.5);
          border-radius: 16px;
          padding: 10px 14px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          position: relative;
        }

        .center-card-icon {
          font-size: 22px;
          margin-bottom: 1px;
        }

        .center-card h2 {
          margin: 0;
          font-size: clamp(14px, 2vw, 14px);
          font-weight: 700;
          color: #063c3c;
          letter-spacing: 1;
        }

        .center-card p {
          margin: 4px 0 0;
          font-size: clamp(10px, 2vw, 13px);
          color: #063c3c;
          line-height: 1.45;
        }

        /* CHART */
        .chart-container {
          display: flex;
          align-items: flex-end;
          gap: 4px;
          position: relative;
          padding-bottom: 2px;
          width: 100%;
          max-width: 500px;
        }

        .y-axis {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: ${CHART_H}px;
          padding-bottom: 0;
          margin-right: 4px;
        }

        .y-tick {
          display: flex;
          align-items: center;
          gap: 4px;
          position: relative;
        }

        .y-tick span {
          font-size: clamp(7px, 1.5vw, 8.5px);
          font-weight: 700;
          color: #063c3c;
          width: clamp(15px, 3vw, 20px);
          text-align: right;
        }

        .y-line {
          width: clamp(60px, 15vw, 120px);
          height: 1px;
          background: rgba(6,60,60,0.1);
        }

        .bars {
          display: flex;
          align-items: flex-end;
          gap: clamp(4px, 1.5vw, 8px);
          height: ${CHART_H}px;
          border-left: 2px solid rgba(6,60,60,0.25);
          border-bottom: 2px solid rgba(6,60,60,0.25);
          padding: 0 clamp(4px, 1vw, 6px) 0 clamp(6px, 1.5vw, 8px);
          position: relative;
          flex: 1;
        }

        @media (max-width: 640px) {
          .bars {
            gap: 6px;
            padding: 0 4px;
          }
        }

        .bar-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          flex: 1;
          cursor: pointer;
          position: relative;
        }

        .bar-val {
          font-size: clamp(8px, 1.5vw, 9px);
          font-weight: 800;
          color: #063c3c;
          white-space: nowrap;
        }

        .bar {
          width: 32px;
          border-radius: 6px 6px 2px 2px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.18);
          animation: growBar 0.7s ease-out both;
          transform-origin: bottom;
          transition: width 0.3s ease, transform 0.2s ease;
        }

        .bar:hover {
          transform: scaleX(1.05);
          filter: brightness(1.05);
        }

        @media (max-width: 1024px) and (min-width: 640px) {
          .bar {
            width: 26px;
          }
        }

        @media (max-width: 640px) {
          .bar {
            width: 20px;
          }
        }

        @keyframes growBar {
          from { transform: scaleY(0); opacity: 0; }
          to   { transform: scaleY(1); opacity: 1; }
        }

        .chart-label {
          font-size: clamp(8px, 1.5vw, 9.5px);
          font-weight: 600;
          color: rgba(6,60,60,0.6);
          letter-spacing: 0.5px;
          margin: 8px 0 0;
          text-align: center;
        }

        /* Tooltip styles - inside bar-col */
        .bar-tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 8px;
          z-index: 1000;
          pointer-events: none;
          animation: tooltipFadeIn 0.2s ease-out;
        }

        .bar-tooltip-content {
          background: rgba(6,60,60,0.95);
          color: white;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.2);
          text-align: center;
        }

        .bar-tooltip-content strong {
          display: block;
          font-size: 14px;
          margin-bottom: 4px;
          color: #f9c030;
        }

        .bar-tooltip-content span {
          display: block;
          font-size: 11px;
          opacity: 0.95;
        }

        .tooltip-state {
          font-size: 10px;
          margin-top: 2px;
          color: #ddd;
        }

        .bar-tooltip-arrow {
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid rgba(6,60,60,0.95);
        }

        @keyframes tooltipFadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

/* STATE CARD */
function Card({ emoji, title, bold, text, boldEnd, textEnd, right }) {
  return (
    <div className={`card ${right ? "right" : ""}`}>
      <div className="card-emoji">{emoji}</div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>
          <strong>{bold}</strong>{text}<strong>{boldEnd}</strong>{textEnd}
        </p>
      </div>

      <style jsx>{`
        .card {
          display: flex;
          gap: 2px;
          align-items: flex-start;
          background: rgba(255,255,255,0.28);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.45);
          padding: clamp(8px, 2vw, 5px) clamp(10px, 2.5vw, 5px);
          border-radius: 14px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          width: 100%;
          font-family: ${montserrat.style.fontFamily} !important;
        }
        
        .card *,
        .card h3,
        .card p,
        .card strong,
        .card span {
          font-family: ${montserrat.style.fontFamily} !important;
        }

        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0,0,0,0.15);
        }

        .right {
          flex-direction: row-reverse;
          text-align: right;
        }

        @media (max-width: 640px) {
          .right {
            flex-direction: row;
            text-align: left;
          }
        }

        .card-emoji {
          font-size: clamp(18px, 4vw, 22px);
          flex-shrink: 0;
          line-height: 1;
        }

        h3 {
          font-size: clamp(11px, 2vw, 14px);
          font-weight: 700;
          margin: 0 0 4px 0;
          color: #063c3c;
        }

        p {
          margin: 0;
          font-size: clamp(9px, 1.8vw, 11px);
          line-height: 1.45;
          color: #0a4040;
          font-size: 13px;
        }

        strong {
          font-weight: 800;
          color: #032828;
        }
      `}</style>
    </div>
  );
}
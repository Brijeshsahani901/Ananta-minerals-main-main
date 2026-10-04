import { Montserrat } from "@/lib/fonts";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RareEarthReservesRefined() {
  // Left side data: Reserves & Production share
  const reservesProductionData = [
    {
      country: "China",
      reserves: 49,
      reservesLabel: "49%",
      reservesInside: true,
      production: 69,
      productionLabel: "69%",
      productionInside: true,
    },
    {
      country: "Brazil",
      reserves: 23,
      reservesLabel: "23%",
      reservesInside: true,
      production: 0.05,
      productionLabel: "<0.1%",
      productionInside: false,
    },
    {
      country: "India",
      reserves: 7.7,
      reservesLabel: "7.7%",
      reservesInside: false,
      production: 0.7,
      productionLabel: "0.7%",
      productionInside: false,
    },
    {
      country: "Australia",
      reserves: 6.3,
      reservesLabel: "6.3%",
      reservesInside: false,
      production: 3.3,
      productionLabel: "3.3%",
      productionInside: false,
    },
    {
      country: "Russia",
      reserves: 4.2,
      reservesLabel: "4.2%",
      reservesInside: false,
      production: 0.6,
      productionLabel: "0.6%",
      productionInside: false,
    },
    {
      country: "Vietnam",
      reserves: 3.9,
      reservesLabel: "3.9%",
      reservesInside: false,
      production: 0.05,
      productionLabel: "<0.1%",
      productionInside: false,
    },
    {
      country: "US",
      reserves: 2.1,
      reservesLabel: "2.1%",
      reservesInside: false,
      production: 12,
      productionLabel: "12%",
      productionInside: false,
    },
    {
      country: "Thailand",
      reserves: 0.05,
      reservesLabel: "<0.1%",
      reservesInside: false,
      production: 3.3,
      productionLabel: "3.3%",
      productionInside: false,
    },
    {
      country: "Myanmar",
      reserves: 0,
      reservesLabel: "No estimated reserves",
      reservesShortLabel: "No est. reserves",
      reservesSpecial: true,
      production: 8,
      productionLabel: "8%",
      productionInside: false,
    },
  ];

  // Right side data: China's share of refined rare-earth metal imports
  const refinedImportsData = [
    { country: "United States", value: 85.2, label: "85.2%", isNetSupplier: false },
    { country: "China", value: 0, label: "Net supplier", isNetSupplier: true },
    { country: "Germany", value: 86.1, label: "86.1%", isNetSupplier: false },
    { country: "Japan", value: 62.9, label: "62.9%", isNetSupplier: false },
    { country: "United Kingdom", value: 79.6, label: "79.6%", isNetSupplier: false },
    { country: "India", value: 87.5, label: "87.5%", isNetSupplier: false },
    { country: "France", value: 44.8, label: "44.8%", isNetSupplier: false },
    { country: "Italy", value: 15.7, label: "15.7%", isNetSupplier: false },
    { country: "Russia", value: 99.0, label: "99%", isNetSupplier: false },
    { country: "Brazil", value: 99.6, label: "99.6%", isNetSupplier: false },
  ];

  const maxLeftVal = 70;

  return (
    <div className={`rare-earth-wrapper ${montserrat.className}`}>
      {/* Background ambient lighting */}
      <div className="ambient-glow glow-top-right" />
      <div className="ambient-glow glow-bottom-left" />

      {/* Main scrollable viewport */}
      <div className="infographic-scroll-viewport">
        <div className="infographic-grid">
          {/* ================= LEFT SECTION (Reserves vs Production) ================= */}
          <div className="section-column section-left">
            <div className="section-header">
              <h3 className="section-title">
                Rare Earth Reserves and Production
                <span className="title-sub">
                  *Production is based on mined, rather than refined output
                </span>
              </h3>
            </div>

            <div className="chart-card">
              <div className="bilateral-header">
                <div className="reserves-heading">
                  <span className="legend-dot reserves-dot" />
                  <span className="heading-title">Reserves</span>
                </div>
                <div className="production-heading">
                  <span className="legend-dot production-dot" />
                  <span className="heading-title">Production</span>
                </div>
              </div>

              <div className="bilateral-body">
                {reservesProductionData.map((row, idx) => {
                  const reservesBarWidth = row.reservesSpecial
                    ? 0
                    : Math.min(100, (row.reserves / maxLeftVal) * 100);
                  const productionBarWidth = Math.min(
                    100,
                    (row.production / maxLeftVal) * 100
                  );

                  return (
                    <div key={idx} className="bilateral-row">
                      {/* Left: Reserves Bar / Value */}
                      <div className="reserves-col">
                        {row.reservesSpecial ? (
                          <span className="special-label">
                            <span className="label-desktop">{row.reservesLabel}</span>
                            <span className="label-mobile">{row.reservesShortLabel}</span>
                          </span>
                        ) : row.reservesInside ? (
                          <div
                            className="bar-reserves"
                            style={{ width: `${reservesBarWidth}%` }}
                          >
                            <span className="bar-val-inside-left">
                              {row.reservesLabel}
                            </span>
                          </div>
                        ) : (
                          <div className="bar-with-outside-label-left">
                            <span className="bar-val-outside-left">
                              {row.reservesLabel}
                            </span>
                            {row.reserves > 0.1 && (
                              <div
                                className="bar-reserves"
                                style={{ width: `${reservesBarWidth}%` }}
                              />
                            )}
                          </div>
                        )}
                      </div>

                      {/* Center: Country Name */}
                      <div className="country-center">{row.country}</div>

                      {/* Right: Production Bar / Value */}
                      <div className="production-col">
                        {row.productionInside ? (
                          <div
                            className="bar-production"
                            style={{ width: `${productionBarWidth}%` }}
                          >
                            <span className="bar-val-inside-right">
                              {row.productionLabel}
                            </span>
                          </div>
                        ) : (
                          <div className="bar-with-outside-label-right">
                            {row.production > 0.1 && (
                              <div
                                className="bar-production"
                                style={{ width: `${productionBarWidth}%` }}
                              />
                            )}
                            <span className="bar-val-outside-right">
                              {row.productionLabel}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= RIGHT SECTION (Refined Imports) ================= */}
          <div className="section-column section-right">
            <div className="section-header">
              <h3 className="section-title mb-3">
                Top 10 economies in 2026 by nominal GDP
              </h3>
            </div>

            <div className="chart-card">
              <div className="right-chart-header">
                <span className="legend-dot import-dot" />
                <span className="right-header-title">
                  China&apos;s share of refined rare-earth imports
                </span>
                <span className="legend-value">% of total</span>
              </div>

              <div className="horizontal-bars-list">
                {refinedImportsData.map((item, idx) => (
                  <div key={idx} className="bar-item-row">
                    <div className="right-country-label">{item.country}</div>
                    <div className="bar-track-area">
                      {item.isNetSupplier ? (
                        <div className="net-supplier-wrapper">
                          <span className="net-supplier-icon">⊚</span>
                          <span className="net-supplier-text">Net supplier</span>
                        </div>
                      ) : (
                        <div
                          className="bar-import"
                          style={{ width: `${item.value}%` }}
                        >
                          <span
                            className={
                              item.value < 22
                                ? "bar-val-outside-import"
                                : "bar-val-inside-import"
                            }
                          >
                            {item.label}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ================= BASE / DESKTOP (Default > 1024px) ================= */
        .rare-earth-wrapper {
          width: 100%;
          height: 530px;
          min-height: 530px;
          max-height: 530px;
          background: linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 100%);
          padding: 16px 24px 18px 24px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          color: #ffffff;
          border-radius: 20px;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.06);
          overflow: hidden;
          position: relative;
        }

        .ambient-glow {
          position: absolute;
          pointer-events: none;
          z-index: 0;
        }

        .glow-top-right {
          top: -40%;
          right: -10%;
          width: 50%;
          height: 180%;
          background: radial-gradient(ellipse, rgba(25, 118, 210, 0.06) 0%, transparent 70%);
        }

        .glow-bottom-left {
          bottom: -40%;
          left: -10%;
          width: 40%;
          height: 160%;
          background: radial-gradient(ellipse, rgba(184, 93, 24, 0.05) 0%, transparent 70%);
        }

        /* Scrollable container */
        .infographic-scroll-viewport {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
          overflow-y: auto;
          overflow-x: hidden;
          position: relative;
          z-index: 1;
          padding-right: 2px;
          -webkit-overflow-scrolling: touch;
        }

        /* Sleek scrollbar styling */
        .infographic-scroll-viewport::-webkit-scrollbar {
          width: 4px;
        }
        .infographic-scroll-viewport::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.04);
          border-radius: 4px;
        }
        .infographic-scroll-viewport::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.25);
          border-radius: 4px;
        }
        .infographic-scroll-viewport::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        /* Dual Grid for Desktop */
        .infographic-grid {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 18px;
          align-items: stretch;
          width: 100%;
          height: 100%;
          min-height: 0;
        }

        .section-column {
          display: flex;
          flex-direction: column;
          height: 100%;
          min-height: 0;
        }

        .section-header {
          min-height: 46px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          margin-bottom: 8px;
          text-align: center;
          flex-shrink: 0;
        }

        .section-title {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          line-height: 1.25;
          letter-spacing: 0.2px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .title-sub {
          display: block;
          font-size: 11px;
          font-weight: 400;
          color: #b0b0b0;
          letter-spacing: 0.3px;
          margin-top: 2px;
        }

        .chart-card {
          background: #ffffff;
          border-radius: 14px;
          padding: 12px 16px 14px 16px;
          color: #1a1a1a;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
          transition: all 0.25s ease;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .chart-card:hover {
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.45);
        }

        /* Bilateral Header */
        .bilateral-header {
          display: flex;
          justify-content: space-between;
          padding-bottom: 6px;
          margin-bottom: 6px;
          border-bottom: 2px solid #f0f2f5;
          flex-shrink: 0;
        }

        .reserves-heading,
        .production-heading,
        .right-chart-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.2px;
        }

        .reserves-heading {
          color: #b85d18;
          width: 44%;
          justify-content: flex-end;
        }

        .production-heading {
          color: #1976d2;
          width: 44%;
          justify-content: flex-start;
          padding-left: 8px;
        }

        .right-chart-header {
          color: #0b2b4a;
          justify-content: center;
          padding-bottom: 6px;
          margin-bottom: 6px;
          border-bottom: 2px solid #f0f2f5;
          font-size: 12px;
          flex-shrink: 0;
        }

        .right-header-title {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .legend-dot {
          display: inline-block;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          flex-shrink: 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .reserves-dot {
          background: linear-gradient(135deg, #b85d18, #d4782a);
        }

        .production-dot,
        .import-dot {
          background: linear-gradient(135deg, #1976d2, #42a5f5);
        }

        .legend-value {
          font-size: 9px;
          font-weight: 500;
          color: #8c8c8c;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

        /* Bilateral Body */
        .bilateral-body {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          flex: 1;
          gap: 2px;
          padding: 1px 0;
          min-height: 0;
        }

        .bilateral-row {
          display: flex;
          align-items: center;
          height: 25px;
          border-radius: 6px;
          transition: background 0.15s ease;
          flex-shrink: 0;
          padding: 0 3px;
        }

        .bilateral-row:hover {
          background: #f4f6f8;
        }

        .reserves-col {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 100%;
        }

        .country-center {
          width: 72px;
          text-align: center;
          font-size: 11.5px;
          font-weight: 600;
          color: #1a1a1a;
          padding: 0 5px;
          white-space: nowrap;
          letter-spacing: 0.1px;
          flex-shrink: 0;
          position: relative;
        }

        .country-center::after {
          content: "";
          position: absolute;
          right: -2px;
          top: 3px;
          bottom: 3px;
          width: 1.5px;
          background: #e4e7eb;
          border-radius: 2px;
        }

        .production-col {
          flex: 1;
          display: flex;
          align-items: center;
          height: 100%;
          padding-left: 2px;
        }

        /* Bars Left (Reserves) */
        .bar-reserves {
          background: linear-gradient(90deg, #b85d18, #d4782a);
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 6px;
          box-sizing: border-box;
          border-radius: 6px;
          min-width: 8px;
          transition: width 0.3s ease;
          box-shadow: 0 2px 8px rgba(184, 93, 24, 0.22);
        }

        .bar-with-outside-label-left {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 5px;
          width: 100%;
          height: 100%;
        }

        .bar-val-inside-left {
          color: #ffffff;
          font-size: 10.5px;
          font-weight: 700;
          white-space: nowrap;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
          letter-spacing: 0.1px;
        }

        .bar-val-outside-left {
          color: #1a1a1a;
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
        }

        .special-label {
          font-size: 10.5px;
          font-style: italic;
          color: #777;
          white-space: nowrap;
          padding-right: 3px;
          font-weight: 500;
        }

        .label-mobile {
          display: none;
        }

        /* Bars Right (Production) */
        .bar-production {
          background: linear-gradient(90deg, #1976d2, #42a5f5);
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 6px;
          box-sizing: border-box;
          border-radius: 6px;
          min-width: 8px;
          transition: width 0.3s ease;
          box-shadow: 0 2px 8px rgba(25, 118, 210, 0.22);
        }

        .bar-with-outside-label-right {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 5px;
          width: 100%;
          height: 100%;
          padding-left: 2px;
        }

        .bar-val-inside-right {
          color: #ffffff;
          font-size: 10.5px;
          font-weight: 700;
          white-space: nowrap;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
          letter-spacing: 0.1px;
        }

        .bar-val-outside-right {
          color: #1a1a1a;
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
        }

        /* Right Section - Horizontal Bars */
        .horizontal-bars-list {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          flex: 1;
          gap: 2px;
          padding: 1px 0;
          min-height: 0;
        }

        .bar-item-row {
          display: flex;
          align-items: center;
          height: 25px;
          border-radius: 6px;
          transition: background 0.15s ease;
          flex-shrink: 0;
          padding: 0 3px;
        }

        .bar-item-row:hover {
          background: #f4f6f8;
        }

        .right-country-label {
          width: 105px;
          text-align: right;
          font-size: 11.5px;
          font-weight: 600;
          color: #1a1a1a;
          padding-right: 10px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex-shrink: 0;
          letter-spacing: 0.1px;
        }

        .bar-track-area {
          flex: 1;
          display: flex;
          align-items: center;
          height: 100%;
          position: relative;
          min-width: 0;
        }

        .net-supplier-wrapper {
          display: flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
          padding: 0 12px;
          border-radius: 16px;
          height: 22px;
          box-shadow: 0 2px 6px rgba(46, 125, 50, 0.12);
        }

        .net-supplier-icon {
          font-size: 13px;
          color: #2e7d32;
        }

        .net-supplier-text {
          font-size: 11px;
          font-weight: 600;
          color: #1b5e20;
          letter-spacing: 0.2px;
          white-space: nowrap;
        }

        .bar-import {
          background: linear-gradient(90deg, #1976d2, #42a5f5);
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 6px;
          box-sizing: border-box;
          border-radius: 6px;
          min-width: 22px;
          transition: width 0.3s ease;
          position: relative;
          box-shadow: 0 2px 8px rgba(25, 118, 210, 0.22);
        }

        .bar-val-inside-import {
          color: #ffffff;
          font-size: 10.5px;
          font-weight: 700;
          white-space: nowrap;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
          letter-spacing: 0.1px;
        }

        .bar-val-outside-import {
          position: absolute;
          left: calc(100% + 6px);
          color: #1a1a1a;
          font-size: 10.5px;
          font-weight: 600;
          white-space: nowrap;
          background: #f1f3f5;
          padding: 0 8px;
          border-radius: 10px;
          line-height: 1.6;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }

        /* ================= TABLET VIEW (769px - 1024px) ================= */
        @media (min-width: 769px) and (max-width: 1024px) {
          .rare-earth-wrapper {
            height: 480px;
            min-height: 480px;
            max-height: 480px;
            padding: 14px 16px 16px 16px;
          }
          .infographic-grid {
            gap: 12px;
          }
          .chart-card {
            padding: 10px 12px 12px 12px;
          }
          .section-title {
            font-size: 14px;
          }
          .title-sub {
            font-size: 10.5px;
          }
          .country-center {
            width: 60px;
            font-size: 11px;
          }
          .right-country-label {
            width: 86px;
            font-size: 11px;
            padding-right: 6px;
          }
          .reserves-heading,
          .production-heading,
          .right-chart-header {
            font-size: 11.5px;
          }
          .bilateral-row,
          .bar-item-row {
            height: 23px;
          }
          .bar-reserves,
          .bar-production,
          .bar-import {
            height: 18px;
          }
          .net-supplier-wrapper {
            height: 20px;
            padding: 0 10px;
          }
        }

        /* ================= MOBILE VIEW (<= 768px) ================= */
        @media (max-width: 768px) {
          .rare-earth-wrapper {
            height: auto;
            min-height: 100vh;
            max-height: none;
            padding: 12px 10px 14px 10px;
            border-radius: 16px;
            overflow: visible;
          }

          .infographic-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            height: auto;
            min-height: 0;
            padding-bottom: 6px;
          }

          .section-column {
            height: auto;
            min-height: 0;
            width: 100%;
          }

          .section-header {
            min-height: auto;
            margin-bottom: 6px;
          }

          .section-title {
            font-size: 15px;
            line-height: 1.3;
          }

          .title-sub {
            font-size: 10px;
          }

          .chart-card {
            padding: 12px 10px 12px 10px;
            border-radius: 12px;
            min-height: auto;
          }

          .bilateral-header {
            padding-bottom: 5px;
            margin-bottom: 5px;
          }

          .reserves-heading,
          .production-heading,
          .right-chart-header {
            font-size: 11px;
          }

          .reserves-heading {
            width: 42%;
          }
          .production-heading {
            width: 42%;
          }

          .legend-value {
            font-size: 8.5px;
          }

          .bilateral-body {
            gap: 4px;
          }

          .bilateral-row,
          .bar-item-row {
            height: 32px;
            padding: 0 2px;
          }

          .country-center {
            width: 60px;
            font-size: 11px;
            padding: 0 4px;
          }

          .right-country-label {
            width: 90px;
            font-size: 11px;
            padding-right: 8px;
          }

          .bar-reserves,
          .bar-production,
          .bar-import {
            height: 24px;
            min-width: 10px;
            border-radius: 8px;
          }

          .bar-val-inside-left,
          .bar-val-inside-right,
          .bar-val-inside-import {
            font-size: 11px;
          }

          .bar-val-outside-left,
          .bar-val-outside-right {
            font-size: 11px;
          }

          .label-desktop {
            display: none;
          }

          .label-mobile {
            display: inline;
          }

          .special-label {
            font-size: 10px;
          }

          .net-supplier-wrapper {
            height: 24px;
            padding: 0 10px;
            gap: 5px;
            border-radius: 20px;
          }

          .net-supplier-text {
            font-size: 11px;
          }

          .net-supplier-icon {
            font-size: 14px;
          }

          .bar-val-outside-import {
            left: calc(100% + 6px);
            padding: 0 8px;
            font-size: 11px;
            border-radius: 10px;
            line-height: 1.8;
          }

          .horizontal-bars-list {
            gap: 4px;
          }

          .right-chart-header {
            font-size: 11px;
            padding-bottom: 5px;
            margin-bottom: 5px;
          }

          .right-header-title {
            white-space: normal;
            text-overflow: clip;
          }

          /* Better touch scrolling */
          .infographic-scroll-viewport {
            -webkit-overflow-scrolling: touch;
            overflow-y: auto;
            max-height: none;
          }

          .infographic-scroll-viewport::-webkit-scrollbar {
            width: 3px;
          }

          .chart-card:hover {
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
          }

          .bilateral-row:hover,
          .bar-item-row:hover {
            background: transparent;
          }

          .bilateral-row:active,
          .bar-item-row:active {
            background: #f4f6f8;
          }
        }

        /* ================= SMALL MOBILE VIEW (<= 380px) ================= */
        @media (max-width: 380px) {
          .rare-earth-wrapper {
            padding: 10px 6px 12px 6px;
            border-radius: 12px;
          }

          .chart-card {
            padding: 10px 6px 10px 6px;
            border-radius: 10px;
          }

          .section-title {
            font-size: 13px;
          }

          .title-sub {
            font-size: 9px;
          }

          .country-center {
            width: 50px;
            font-size: 10px;
            padding: 0 2px;
          }

          .right-country-label {
            width: 76px;
            font-size: 10px;
            padding-right: 5px;
          }

          .bilateral-row,
          .bar-item-row {
            height: 28px;
            padding: 0 1px;
          }

          .bar-reserves,
          .bar-production,
          .bar-import {
            height: 20px;
            min-width: 8px;
            border-radius: 6px;
          }

          .bar-val-inside-left,
          .bar-val-inside-right,
          .bar-val-inside-import {
            font-size: 9.5px;
          }

          .bar-val-outside-left,
          .bar-val-outside-right {
            font-size: 9.5px;
          }

          .special-label {
            font-size: 8.5px;
          }

          .net-supplier-wrapper {
            height: 20px;
            padding: 0 8px;
            gap: 3px;
            border-radius: 16px;
          }

          .net-supplier-text {
            font-size: 9px;
          }

          .net-supplier-icon {
            font-size: 12px;
          }

          .bar-val-outside-import {
            left: calc(100% + 4px);
            padding: 0 5px;
            font-size: 9.5px;
            border-radius: 8px;
            line-height: 1.6;
          }

          .reserves-heading,
          .production-heading,
          .right-chart-header {
            font-size: 10px;
            gap: 4px;
          }

          .legend-dot {
            width: 7px;
            height: 7px;
          }

          .legend-value {
            font-size: 7.5px;
          }
        }

        /* ================= EXTRA SMALL (<= 320px) ================= */
        @media (max-width: 320px) {
          .country-center {
            width: 42px;
            font-size: 9px;
            padding: 0 1px;
          }

          .right-country-label {
            width: 64px;
            font-size: 9px;
            padding-right: 4px;
          }

          .bilateral-row,
          .bar-item-row {
            height: 24px;
          }

          .bar-reserves,
          .bar-production,
          .bar-import {
            height: 18px;
          }

          .section-title {
            font-size: 12px;
          }

          .bar-val-inside-left,
          .bar-val-inside-right,
          .bar-val-inside-import {
            font-size: 8.5px;
          }

          .bar-val-outside-left,
          .bar-val-outside-right {
            font-size: 8.5px;
          }
        }
      `}</style>
    </div>
  );
}
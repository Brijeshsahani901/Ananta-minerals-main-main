import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import clsx from "clsx";

export default function FertiliserCrossfire() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={clsx("blog-details-area", "fit-content-height")}
      >
        {/* Full-width image */}
        <div style={{ width: "100%", background: "#f5f5f5", margin: "0px 0" }}>
          <img
            src={`${basePath}/assets/minerals_images/fertiliser-crossfire.webp`}
            alt="Fertiliser in the Crossfire: India's Dependence on Sulphur, Phosphate and Potash"
            style={{
              width: "100%",
              height: "60vh",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Main content */}
        <div className="container">
          <div className={clsx("row", "justify-content-center")}>
            <div className={clsx("col-xl-12", "col-lg-10")}>
              <div style={{ marginTop: "30px" }}>
                <div
                  className="p-4"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                  }}
                >
                  <h3 className="my-3">
                    Fertiliser in the Crossfire: India's Dependence on Sulphur,
                    Phosphate and Potash
                  </h3>

                  <p className="my-3">
                    On 28 September 2026, India's External Affairs Minister, Dr
                    S. Jaishankar, at a New York Conference highlighted the "4F"
                    crisis: Food, Fuel, Fertilisers and Finance. He warned that
                    the Russia-Ukraine and Iran-Gulf conflicts were overlapping
                    across all four areas. At the heart of this crisis lie 3
                    Elements: Sulphur, Phosphorus, and Potassium. India's
                    dependence on imported Sulphur, Phosphates, and Potash shows
                    how these pressures intersect: disrupted energy and mineral
                    supplies raise agricultural costs, while cushioning farmers
                    strains public finances.
                  </p>

                  <p className="my-3">
                    These commodities perform different functions. Phosphate
                    rock supplies phosphorus; sulphuric acid converts it into
                    phosphoric acid, which combines with ammonia to produce
                    fertilisers such as diammonium phosphate (DAP). Potash
                    supplies potassium, another essential crop nutrient. Thus,
                    the relevant agricultural price story concerns phosphate
                    rock, phosphoric acid and finished fertilisers, rather than
                    elemental phosphorus alone.
                  </p>

                  {/* Sulphur price chart */}
                  <div
                    className={clsx("my-4", "p-4")}
                    style={{
                      background: "#f8f9fa",
                      borderRadius: "8px",
                      textAlign: "center",
                    }}
                  >
                    {/* Sulphur price chart — pure SVG (wide, larger fonts) */}
                    <div
                      className={clsx("my-4", "p-4")}
                      style={{
                        background: "#f8f9fa",
                        borderRadius: "8px",
                        maxWidth: "860px",
                        margin: "0 auto",
                      }}
                    >
                      <h5
                        style={{
                          textAlign: "left",
                          fontWeight: 700,
                          color: "#1a1a1a",
                          marginBottom: "4px",
                          fontSize: "1.25rem",
                        }}
                      >
                        Sulphur prices rose 275% in one year
                      </h5>
                      <p
                        style={{
                          textAlign: "left",
                          color: "#6c757d",
                          fontSize: "0.95rem",
                          marginBottom: "14px",
                        }}
                      >
                        Three labelled observations from the supplied newspaper
                        chart
                      </p>

                      <svg
                        viewBox="0 0 800 320"
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                        role="img"
                        aria-label="Sulphur prices rose from $280 per tonne in July 2025 to $1,050 per tonne in July 2026"
                      >
                        {/* Y-axis label */}
                        <text
                          x="20"
                          y="160"
                          fill="#495057"
                          fontSize="16"
                          textAnchor="middle"
                          transform="rotate(-90 20 160)"
                        >
                          US$ per tonne
                        </text>

                        {/* Horizontal gridlines + Y-axis labels */}
                        {[
                          { y: 260, label: "0" },
                          { y: 200, label: "250" },
                          { y: 140, label: "500" },
                          { y: 80, label: "750" },
                          { y: 20, label: "1000" },
                        ].map((g, i) => (
                          <g key={i}>
                            <line
                              x1="60"
                              y1={g.y}
                              x2="760"
                              y2={g.y}
                              stroke="#e9ecef"
                              strokeWidth="1"
                            />
                            <text
                              x="50"
                              y={g.y + 5}
                              fill="#6c757d"
                              fontSize="15"
                              textAnchor="end"
                            >
                              {g.label}
                            </text>
                          </g>
                        ))}

                        {/* Line connecting the three points */}
                        <polyline
                          points="120,224 420,144 720,31"
                          fill="none"
                          stroke="#2c7a7b"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        {/* Data points */}
                        <circle cx="120" cy="224" r="7" fill="#2c7a7b" />
                        <circle cx="420" cy="144" r="7" fill="#2c7a7b" />
                        <circle cx="720" cy="31" r="7" fill="#2c7a7b" />

                        {/* Value labels above points */}
                        <text
                          x="120"
                          y="206"
                          fill="#1a1a1a"
                          fontSize="19"
                          fontWeight="700"
                          textAnchor="middle"
                        >
                          $280
                        </text>
                        <text
                          x="420"
                          y="126"
                          fill="#1a1a1a"
                          fontSize="19"
                          fontWeight="700"
                          textAnchor="middle"
                        >
                          $534
                        </text>
                        <text
                          x="720"
                          y="13"
                          fill="#1a1a1a"
                          fontSize="19"
                          fontWeight="700"
                          textAnchor="middle"
                        >
                          $1,050
                        </text>

                        {/* X-axis labels */}
                        <text
                          x="120"
                          y="298"
                          fill="#495057"
                          fontSize="16"
                          textAnchor="middle"
                        >
                          Jul 2025
                        </text>
                        <text
                          x="420"
                          y="298"
                          fill="#495057"
                          fontSize="16"
                          textAnchor="middle"
                        >
                          Dec 2025
                        </text>
                        <text
                          x="720"
                          y="298"
                          fill="#495057"
                          fontSize="16"
                          textAnchor="middle"
                        >
                          Jul 2026
                        </text>
                      </svg>
                    </div>
                  </div>

                  <p className="my-3">
                    Sulphur prices began rising in late 2025 as demand grew and
                    the Russia-Ukraine war disrupted supply. They passed $500
                    per tonne by December, then climbed much faster after the
                    U.S. and Israel attacked Iran in early 2026.
                  </p>

                  <p className="my-3">
                    Around 92% of the world's sulphur is recovered during
                    petroleum refining and natural gas processing. Just 8% is
                    mined from natural deposits or sulphur-rich minerals such as
                    pyrite. China was the largest producer in 2025, with an
                    estimated 19 million metric tonnes, followed by the United
                    States at 8.1 million metric tonnes. Despite ranking 8th
                    with 3.7 million metric tonnes, this was not enough to meet
                    domestic demand. India's imports have grown over the years,
                    with West Asian producers contributing to about 90% of its
                    total imports. In 2025, India imported 2.25 MMT of sulphur,
                    of which 2.02 MMT came from West Asia. The fertiliser
                    industry accounts for most of India's demand, with the
                    Fertiliser Association of India estimating that 52% of the
                    sulphur required for the industry came through imports in
                    2024-25.
                  </p>

                  <p className="my-3">
                    The first major supply disruption came from Russia, the
                    world's third-largest sulphur producer. Ukrainian drone
                    strikes on its oil and gas facilities prompted Moscow to
                    limit industrial sulphur exports to protect domestic
                    supplies. The restriction, initially set to expire in
                    December 2025, has been extended through 31 December 2026.
                  </p>

                  <p className="my-3">
                    A larger shock followed in February 2026, when U.S. and
                    Israeli attacks on Iran disrupted trade from West Asia. The
                    region supplies roughly 90% of India's sulphur imports and
                    accounts for more than 45% of global seaborne sulphur trade.
                    China's restrictions on sulphuric acid exports to serve
                    domestic needs tightened the market further.
                  </p>

                  <p className="my-3">
                    India's sulphur import bill had already risen from US$248
                    million in 2024 to US$638 million in 2025—about two and a
                    half times as much. Rising sulphur prices were another blow
                    to the market's already rising demand, driven by its
                    increasing use in the Critical Minerals Processing Industry.
                  </p>

                  <p className="my-3">
                    As per the CRU Group, the global market had moved into a
                    structural deficit by 2024. It estimated the demand to be
                    72.8 MMT in 2025, against a supply of 70.8 MMT — a deficit
                    of about 1.9 MT. Stock releases from Kazakhstan and Saudi
                    Arabia helped bridge the gap, but those inventories were
                    also being drawn down.
                  </p>

                  <p className="my-3">
                    When countries are trying to diversify from China and build
                    their domestic capability, these price shocks slow down the
                    process, as was seen in Indonesia. A major reason for the
                    increasing demand is because of metals processing, linked to
                    production of batteries. Sulphuric acid is used in
                    High-Pressure Acid Leach (HPAL) plants to extract nickel
                    from laterite ores, which is then used in products including
                    EV batteries. Indonesia has become a key player in this
                    industry, with both its nickel-related Sulphuric acid demand
                    and imports roughly quintupling between 2021 and 2025.
                  </p>

                  {/* Indonesia nickel chart */}
                  <div
                    className={clsx("my-4", "p-4")}
                    style={{
                      background: "#f8f9fa",
                      borderRadius: "8px",
                      textAlign: "center",
                    }}
                  >
                    {/* Indonesia nickel acid demand chart — pure SVG (inline) */}
                    <div
                      className={clsx("my-4", "p-4")}
                      style={{
                        background: "#f8f9fa",
                        borderRadius: "8px",
                        maxWidth: "860px",
                        margin: "0 auto",
                      }}
                    >
                      <h5
                        style={{
                          textAlign: "left",
                          fontWeight: 700,
                          color: "#1a1a1a",
                          marginBottom: "4px",
                          fontSize: "1.25rem",
                        }}
                      >
                        Indonesia's nickel sector is driving acid demand
                      </h5>
                      <p
                        style={{
                          textAlign: "left",
                          color: "#6c757d",
                          fontSize: "0.95rem",
                          marginBottom: "14px",
                        }}
                      >
                        Nickel-related sulphuric acid demand increased about 4.6
                        times
                      </p>

                      <svg
                        viewBox="0 0 800 320"
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                        role="img"
                        aria-label="Indonesia's nickel-related sulphuric acid demand rose from 3.5 million tonnes in 2021 to 16 million tonnes in 2025"
                      >
                        {/* Y-axis label */}
                        <text
                          x="20"
                          y="150"
                          fill="#495057"
                          fontSize="15"
                          textAnchor="middle"
                          transform="rotate(-90 20 150)"
                        >
                          Million tonnes of acid per year
                        </text>

                        {/* Horizontal gridlines + Y-axis labels */}
                        {[
                          { y: 260, label: "0" },
                          { y: 200, label: "4" },
                          { y: 140, label: "8" },
                          { y: 80, label: "12" },
                          { y: 20, label: "16" },
                        ].map((g, i) => (
                          <g key={i}>
                            <line
                              x1="70"
                              y1={g.y}
                              x2="760"
                              y2={g.y}
                              stroke="#e9ecef"
                              strokeWidth="1"
                            />
                            <text
                              x="60"
                              y={g.y + 5}
                              fill="#6c757d"
                              fontSize="15"
                              textAnchor="end"
                            >
                              {g.label}
                            </text>
                          </g>
                        ))}

                        {/* Bar 2021 — value 3.5 → y = 260 - (3.5/16)*240 = 207.5 */}
                        <rect
                          x="170"
                          y="207.5"
                          width="160"
                          height="52.5"
                          fill="#b8c4cc"
                        />
                        {/* Value label above 2021 bar */}
                        <text
                          x="250"
                          y="196"
                          fill="#1a1a1a"
                          fontSize="19"
                          fontWeight="700"
                          textAnchor="middle"
                        >
                          3.5
                        </text>

                        {/* Bar 2025 — value 16 → y = 260 - (16/16)*240 = 20 */}
                        <rect
                          x="510"
                          y="20"
                          width="160"
                          height="240"
                          fill="#2c7a7b"
                        />
                        {/* Value label above 2025 bar */}
                        <text
                          x="590"
                          y="13"
                          fill="#1a1a1a"
                          fontSize="19"
                          fontWeight="700"
                          textAnchor="middle"
                        >
                          16
                        </text>

                        {/* X-axis labels */}
                        <text
                          x="250"
                          y="298"
                          fill="#495057"
                          fontSize="16"
                          textAnchor="middle"
                        >
                          2021
                        </text>
                        <text
                          x="590"
                          y="298"
                          fill="#495057"
                          fontSize="16"
                          textAnchor="middle"
                        >
                          2025
                        </text>
                      </svg>

                      <p
                        style={{
                          textAlign: "left",
                          color: "#6c757d",
                          fontSize: "0.8rem",
                          marginTop: "10px",
                          marginBottom: 0,
                        }}
                      >
                        Source: CRU, Indonesia acid price and nickel-related
                        demand, 2026.
                        <br />
                        Figures measure sulphuric acid, not elemental sulphur;
                        selected years only.
                      </p>
                    </div>
                  </div>

                  <p className="my-3">
                    The implications extend well beyond nickel. In lithium
                    processing, the conventional Sulphuric-acid route treats
                    heat-converted spodumene concentrate to produce
                    water-soluble lithium sulphate. Copper and cobalt are also
                    exposed. Sulphuric acid dissolves copper from suitable ores
                    before solvent extraction, and electrowinning recovers the
                    metal. The same acid is used to extract cobalt alongside
                    nickel in laterite-processing plants.
                  </p>

                  <div
                    className={clsx("my-4", "p-4")}
                    style={{
                      background: "#f8f9fa",
                      borderRadius: "8px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      className={clsx("my-4", "p-4")}
                      style={{
                        background: "#f8f9fa",
                        borderRadius: "8px",
                        maxWidth: "960px",
                        margin: "0 auto",
                      }}
                    >
                      {/* Section heading */}
                      <h5
                        style={{
                          textAlign: "left",
                          fontWeight: 700,
                          color: "#1a1a1a",
                          marginBottom: "4px",
                          fontSize: "1.25rem",
                        }}
                      >
                        India's fertiliser import prices have risen unevenly
                      </h5>
                      <p
                        style={{
                          textAlign: "left",
                          color: "#6c757d",
                          fontSize: "0.95rem",
                          marginBottom: "20px",
                        }}
                      >
                        Different products and quotation units; price levels are
                        not directly comparable.
                      </p>

                      {/* Two charts side by side */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "32px",
                          justifyContent: "center",
                          alignItems: "flex-start",
                        }}
                      >
                        {/* ============ LEFT: Phosphoric acid line chart ============ */}
                        <div style={{ flex: "1 1 420px", minWidth: "300px" }}>
                          <h6
                            style={{
                              textAlign: "left",
                              fontWeight: 700,
                              color: "#1a1a1a",
                              marginBottom: "2px",
                              fontSize: "1.1rem",
                            }}
                          >
                            Phosphoric acid: +61%
                          </h6>
                          <p
                            style={{
                              textAlign: "left",
                              color: "#6c757d",
                              fontSize: "0.85rem",
                              marginBottom: "10px",
                            }}
                          >
                            US$ per tonne P₂O₅ • India CFR
                          </p>

                          <svg
                            viewBox="0 0 800 340"
                            style={{
                              width: "100%",
                              height: "auto",
                              display: "block",
                            }}
                            role="img"
                            aria-label="Phosphoric acid prices rose from $1,055 in Q1 2025 to $1,700 in Q3 2026"
                          >
                            {/* Horizontal gridlines + Y-axis labels */}
                            {[
                              { y: 280, label: "0" },
                              { y: 220, label: "500" },
                              { y: 160, label: "1000" },
                              { y: 100, label: "1500" },
                            ].map((g, i) => (
                              <g key={i}>
                                <line
                                  x1="70"
                                  y1={g.y}
                                  x2="760"
                                  y2={g.y}
                                  stroke="#e9ecef"
                                  strokeWidth="1"
                                />
                                <text
                                  x="60"
                                  y={g.y + 5}
                                  fill="#6c757d"
                                  fontSize="14"
                                  textAnchor="end"
                                >
                                  {g.label}
                                </text>
                              </g>
                            ))}

                            {/* Line connecting 7 points */}
                            <polyline
                              points="120,153 220,142 320,129 420,129 520,125 620,117 720,76"
                              fill="none"
                              stroke="#2c7a7b"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />

                            {/* Data points */}
                            <circle cx="120" cy="153" r="5" fill="#2c7a7b" />
                            <circle cx="220" cy="142" r="5" fill="#2c7a7b" />
                            <circle cx="320" cy="129" r="5" fill="#2c7a7b" />
                            <circle cx="420" cy="129" r="5" fill="#2c7a7b" />
                            <circle cx="520" cy="125" r="5" fill="#2c7a7b" />
                            <circle cx="620" cy="117" r="5" fill="#2c7a7b" />
                            <circle cx="720" cy="76" r="5" fill="#2c7a7b" />

                            {/* Value labels above each point */}
                            <text
                              x="120"
                              y="141"
                              fill="#1a1a1a"
                              fontSize="13"
                              fontWeight="700"
                              textAnchor="middle"
                            >
                              1,055
                            </text>
                            <text
                              x="220"
                              y="130"
                              fill="#1a1a1a"
                              fontSize="13"
                              fontWeight="700"
                              textAnchor="middle"
                            >
                              1,153
                            </text>
                            <text
                              x="320"
                              y="117"
                              fill="#1a1a1a"
                              fontSize="13"
                              fontWeight="700"
                              textAnchor="middle"
                            >
                              1,258
                            </text>
                            <text
                              x="420"
                              y="117"
                              fill="#1a1a1a"
                              fontSize="13"
                              fontWeight="700"
                              textAnchor="middle"
                            >
                              1,258
                            </text>
                            <text
                              x="520"
                              y="113"
                              fill="#1a1a1a"
                              fontSize="13"
                              fontWeight="700"
                              textAnchor="middle"
                            >
                              1,290
                            </text>
                            <text
                              x="620"
                              y="105"
                              fill="#1a1a1a"
                              fontSize="13"
                              fontWeight="700"
                              textAnchor="middle"
                            >
                              1,360
                            </text>
                            <text
                              x="720"
                              y="64"
                              fill="#1a1a1a"
                              fontSize="13"
                              fontWeight="700"
                              textAnchor="middle"
                            >
                              1,700
                            </text>

                            {/* X-axis labels — quarter + year stacked */}
                            {[
                              { x: 120, q: "Q1", y: "2025" },
                              { x: 220, q: "Q2", y: "" },
                              { x: 320, q: "Q3", y: "" },
                              { x: 420, q: "Q4", y: "" },
                              { x: 520, q: "Q1", y: "2026" },
                              { x: 620, q: "Q2", y: "" },
                              { x: 720, q: "Q3", y: "" },
                            ].map((l, i) => (
                              <g key={i}>
                                <text
                                  x={l.x}
                                  y="308"
                                  fill="#495057"
                                  fontSize="13"
                                  textAnchor="middle"
                                >
                                  {l.q}
                                </text>
                                {l.y && (
                                  <text
                                    x={l.x}
                                    y="324"
                                    fill="#495057"
                                    fontSize="13"
                                    textAnchor="middle"
                                  >
                                    {l.y}
                                  </text>
                                )}
                              </g>
                            ))}
                          </svg>
                        </div>

                        {/* ============ RIGHT: Potash bar chart ============ */}
                        <div
                          style={{
                            flex: "1 1 320px",
                            minWidth: "260px",
                            maxWidth: "420px",
                          }}
                        >
                          <h6
                            style={{
                              textAlign: "left",
                              fontWeight: 700,
                              color: "#1a1a1a",
                              marginBottom: "2px",
                              fontSize: "1.1rem",
                            }}
                          >
                            Potash: +9.7%
                          </h6>
                          <p
                            style={{
                              textAlign: "left",
                              color: "#6c757d",
                              fontSize: "0.85rem",
                              marginBottom: "10px",
                            }}
                          >
                            US$ per tonne • ICL-IPL contracts
                          </p>

                          <svg
                            viewBox="0 0 460 340"
                            style={{
                              width: "100%",
                              height: "auto",
                              display: "block",
                            }}
                            role="img"
                            aria-label="Potash prices rose from $349 per tonne in June 2025 to $383 in June 2026"
                          >
                            {/* Horizontal gridlines + Y-axis labels */}
                            {[
                              { y: 280, label: "0" },
                              { y: 220, label: "100" },
                              { y: 160, label: "200" },
                              { y: 100, label: "300" },
                              { y: 40, label: "400" },
                            ].map((g, i) => (
                              <g key={i}>
                                <line
                                  x1="60"
                                  y1={g.y}
                                  x2="440"
                                  y2={g.y}
                                  stroke="#e9ecef"
                                  strokeWidth="1"
                                />
                                <text
                                  x="50"
                                  y={g.y + 5}
                                  fill="#6c757d"
                                  fontSize="14"
                                  textAnchor="end"
                                >
                                  {g.label}
                                </text>
                              </g>
                            ))}

                            {/* Bar June 2025 — value 349 → y = 280 - (349/400)*240 = 70.6 */}
                            <rect
                              x="120"
                              y="70.6"
                              width="90"
                              height="209.4"
                              fill="#b8c4cc"
                            />
                            <text
                              x="165"
                              y="60"
                              fill="#1a1a1a"
                              fontSize="15"
                              fontWeight="700"
                              textAnchor="middle"
                            >
                              349
                            </text>
                            <text
                              x="165"
                              y="308"
                              fill="#495057"
                              fontSize="13"
                              textAnchor="middle"
                            >
                              June 2025
                            </text>

                            {/* Bar June 2026 — value 383 → y = 280 - (383/400)*240 = 50.2 */}
                            <rect
                              x="290"
                              y="50.2"
                              width="90"
                              height="229.8"
                              fill="#2c7a7b"
                            />
                            <text
                              x="335"
                              y="40"
                              fill="#1a1a1a"
                              fontSize="15"
                              fontWeight="700"
                              textAnchor="middle"
                            >
                              383
                            </text>
                            <text
                              x="335"
                              y="308"
                              fill="#495057"
                              fontSize="13"
                              textAnchor="middle"
                            >
                              June 2026
                            </text>
                          </svg>
                        </div>
                      </div>

                      {/* Source note */}
                      <p
                        style={{
                          textAlign: "left",
                          color: "#6c757d",
                          fontSize: "0.8rem",
                          marginTop: "12px",
                          marginBottom: 0,
                        }}
                      >
                        Sources: Indian Express; Fertilizer Daily / Argus; ICL
                        2025 results and June 2026 SEC filing.
                      </p>
                    </div>
                  </div>

                  <p className="my-3">
                    India's phosphoric-acid benchmark increased from $1,055 in
                    January-March 2025 to $1,700 in July-September 2026,
                    approximately 61%. These quotations are per tonne of P₂O₅
                    nutrient content, including freight, rather than per
                    physical tonne of acid. An April 2026 Indian DAP tender
                    secured supplies at $930–935 per tonne, compared with
                    $725–750 a year earlier.
                  </p>

                  <p className="my-3">
                    Potash has risen more moderately. ICL's contracts with
                    Indian Potash Limited increased from $349 per tonne in June
                    2025 to $383 in June 2026, about 10%. Wartime operating
                    problems affected ICL's Israeli production, while transport,
                    insurance and trade restrictions have increased supply risks
                    and landed costs across fertiliser markets.
                  </p>

                  <p className="my-3">
                    India's exposure is substantial. Official figures for
                    2024-25 show imports meeting all muriate-of-potash (MOP)
                    requirements, 86% of fertiliser-sector rock-phosphate needs
                    and 52% of phosphoric-acid requirements. ICRIER identifies
                    the following principal suppliers for that financial year;
                    shares refer to each product's imports.
                  </p>

                  {/* Supplier table */}
                  <div className={clsx("table-responsive", "my-4")}>
                    <table className={clsx("table", "table-bordered")}>
                      <thead className="table-light">
                        <tr>
                          <th>Product</th>
                          <th>Principal suppliers • FY2024–25 import shares</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Potash (MOP)</strong>
                          </td>
                          <td>Russia 51%; Canada 25%; Israel 8%; Jordan 8%</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Phosphate rock</strong>
                          </td>
                          <td>Jordan 46%; Morocco 16%; Egypt 14%; Togo 10%</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Phosphoric acid</strong>
                          </td>
                          <td>Jordan 33%; Senegal 24%; Morocco 18%</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Finished DAP</strong>
                          </td>
                          <td>
                            Saudi Arabia 42%; Morocco 23%; China 19%; Russia 6%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className={clsx("text-muted", "mb-0")}>
                      <small>
                        Selected suppliers; each row need not total 100%.
                        Source: ICRIER / FAI.
                      </small>
                    </p>
                  </div>

                  <p className="my-3">
                    Export restrictions compound the disruption. Russia extended
                    its ban on specified sulphur exports through December 2026,
                    with exemptions. China suspended DAP and
                    monoammonium-phosphate exports to protect domestic
                    availability; S&amp;P Global reported on 2 September that
                    resumption remained uncertain. Belarusian potash faces a
                    different barrier: EU import and transit restrictions. These
                    measures should not be conflated with a worldwide ban on
                    Russian or Belarusian fertilisers.14,15,16
                  </p>

                  <p className="my-3">
                    Potash could also come under the crossfire because shipping
                    adds a common cost to both nutrients. India's Department of
                    Fertilisers reported that Red Sea insecurity diverted some
                    fertiliser shipments around the Cape of Good Hope, adding
                    more than 6,500 kilometres to the journey, particularly for
                    DAP. The Russia-Ukraine and West Asia conflicts have thus
                    affected prices through different channels: supply
                    restrictions, production costs, freight and access to
                    established routes. India's fertiliser subsidies can shield
                    farmers from some of the rise in international prices, but
                    they shift more of that cost to the public budget and,
                    ultimately on the taxpayer.
                  </p>

                  <p className="my-3">
                    India just finished its weakest monsoon in a decade.
                    Rainfall ended 12.6% below normal, and the prospect of a
                    "Godzilla" El Nino adds a climate shock to an already
                    strained fertiliser market. If droughts and floods damage
                    harvests while fertiliser supplies remain costly and
                    uncertain, the pressure on 4F could worsen in coming months.
                  </p>

                  <p style={{ color: "#686868" }} className="mt-5">
                    Copyright © 2026 by Ananta Aspen Centre
                    <br />
                    This text is protected by copyright and may not be
                    reproduced, distributed, or modified without permission
                  </p>

                  <Card
                    className={clsx(
                      "d-flex",
                      "flex-column",
                      "flex-md-row",
                      "gap-4",
                      "p-4",
                      "mt-5",
                      "shadow-sm",
                    )}
                    style={{
                      backgroundColor: "#fff6f6",
                      borderRadius: "10px",
                    }}
                  >
                    {/* Author Icon */}
                    <div
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        backgroundColor: "#e9ecef",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        flexShrink: 0,
                      }}
                    >
                      <FaUserCircle size={60} color="#2F4156" />
                    </div>

                    {/* Text Content */}
                    <div style={{ flex: 1 }}>
                      <div
                        className={clsx(
                          "d-flex",
                          "align-items-center",
                          "mb-3",
                          "gap-2",
                        )}
                      >
                        <h5
                          className={clsx("mb-0", "fw-semibold", "text-dark")}
                        >
                          Mithilesh Phadke
                        </h5>
                        <Badge bg="success" pill>
                          Author
                        </Badge>
                      </div>

                      <p className="text-muted" style={{ lineHeight: 1.6 }}>
                        Mithilesh Phadke is a Programme Executive at the Ananta
                        Aspen Centre. This non-partisan, non-profit organisation
                        promotes value-based leadership and convenes Track II
                        dialogues with India's strategic partner countries. At
                        the Centre, he works in the Leadership vertical where he
                        curates programmes, socratic dialogues and fellowships
                        for various demographics, including high school
                        students, mid-career professionals, senior leaders, and
                        women entrepreneurs from tier 2 &amp; 3 cities. He is
                        also part of an annual event called Ananta Godrej Ideas
                        India, where fellows from Ananta's seven fellowships and
                        different walks of life gather to exchange ideas for
                        ushering in significant societal change. Additionally,
                        he contributes to the International Relations Vertical
                        on a project basis, like curation support for the Arctic
                        Circle India Forum, and research support for Ananta's
                        Critical Minerals Dashboard. He is also involved in
                        leading an annual public event that dissects and
                        analyses the Indian government's Union Budget. Across
                        the programmes, his role varies from curation, research,
                        logistics management, analytical visualisation, graphic
                        tools development, and stakeholder engagement to connect
                        government, business, and civil society for more
                        effective dialogue. His work reflects a commitment to
                        nurturing leadership and fostering informed
                        conversations that contribute to a better future.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}

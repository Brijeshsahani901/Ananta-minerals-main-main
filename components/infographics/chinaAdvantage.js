// "use client";

// import React, { useEffect, useState } from "react";
// import dynamic from "next/dynamic";

// const Line = dynamic(() => import("react-chartjs-2").then((m) => m.Line), { ssr: false });
// const Doughnut = dynamic(
//   () => import("react-chartjs-2").then((m) => m.Doughnut),
//   { ssr: false }
// );

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   PointElement,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, ArcElement, Tooltip, Legend);

// export default function Infographic520() {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);

//   /* ---------- LINE CHART ---------- */
//   const lineData = {
//     labels: ["2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025"],
//     datasets: [
//       {
//         data: [40, 85, 110, 130, 95, 80, 120, 430, 210, 120, 90],
//         borderColor: "#d4c4ff",
//         backgroundColor: "rgba(209,179,255,0.22)",
//         pointBackgroundColor: "#f3edff",
//         pointBorderColor: "#fff",
//         pointBorderWidth: 2,
//         pointRadius: 3,
//         borderWidth: 2,
//         tension: 0.35,
//       },
//     ],
//   };

  // const lineOptions = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: { legend: { display: false } },
  //   scales: {
  //     x: {
  //       ticks: { color: "#e2defc", font: { size: 10 }, maxRotation: 0 },
  //       grid: { display: false },
  //     },
  //     y: {
  //       ticks: { color: "#d0ccf4", font: { size: 10 } },
  //       grid: { color: "rgba(255,255,255,0.1)" },
  //     },
  //   },
  // };

//   /* ---------- DONUT CHART ---------- */
//   const donutData = {
//     datasets: [
//       {
//         data: [83, 95, 99],
//         backgroundColor: ["#7c3aed", "#ef476f", "#10b981"],
//         borderWidth: 0,
//       },
//     ],
//   };

//   /* ---------- BASE STYLES ---------- */
//   const card = {
//     background: "rgba(255,255,255,0.06)",
//     border: "1px solid rgba(255,255,255,0.12)",
//     borderRadius: 18,
//     padding: 16,
//     width: "100%",
//     boxShadow: "0 8px 24px rgba(0,0,0,0.28)",
//   };

// //   const total = b.NMC + b.LFP;
// // const nmcHeight = (b.NMC / total) * 100;
// // const lfpHeight = (b.LFP / total) * 100;


//   return (
//     <div
//       style={{
//         width: "100%",
//         minHeight: "520px",
//         padding: 16,
//         borderRadius: 24,
//         background: "linear-gradient(135deg,#080715,#14122f 40%,#221a50 95%)",
//         position: "relative",
//         overflow: "hidden",
//         color: "white",
//         fontFamily: "Inter",
//         boxShadow: "0 0 25px rgba(0,0,0,0.45)",
//       }}
//     >
//       {/* ===================== CENTER HEADING ===================== */}
//       <div
//         style={{
//           position: "absolute",
//           top: 6,
//           left: "50%",
//           transform: "translateX(-50%)",
//           fontSize: "clamp(14px, 2vw, 22px)",
//           fontWeight: 900,
//           whiteSpace: "nowrap",
//           background: "linear-gradient(90deg,#c084fc,#fb7185)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           letterSpacing: 0.4,
//         }}
//       >
//         China’s Competitive Advantage in Battery Space
//       </div>

//       {/* Glow under title */}
//       <div
//         style={{
//           position: "absolute",
//           top: 34,
//           left: "50%",
//           transform: "translateX(-50%)",
//           width: 240,
//           height: 18,
//           background: "radial-gradient(circle,rgba(255,255,255,0.13),transparent)",
//           filter: "blur(10px)",
//         }}
//       ></div>

//       {/* BOOTSTRAP GRID START */}
//       <div className="container-fluid" style={{ marginTop: 40 }}>
//         <div className="row g-3">

//           {/* LEFT COLUMN */}
//           <div className="col-12 col-lg-8">
//             <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              
//               {/* ---------- TOP CARD ---------- */}
//               <div style={{ ...card }}>
//                 <div style={{   fontSize: 15, fontWeight: 800 }}> 
//                   Market Share of Lithium Iron Phosphate batteries (LFP) and Nickel based 
//                   batteries (NMC) — 2024 vs 2030 (projected) – IEA
//                 </div>

//                 <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  
//                   {/* LEFT TEXT */}
//                   <div style={{ flex: 1, minWidth: 260 }}>
//                     <ul style={{ margin: 0, paddingLeft: 20, fontSize: 12.5, lineHeight: 1.55 }}>
//                       <li>
//                         Globally, electric 2W/3W and most buses favor LFP—safer, cheaper,
//                         heat-tolerant. Nickel-based (NMC) powers higher-range models.
//                       </li>

//                       <li style={{ marginTop: 8 }}>
//                         Companies adopt LFP for durability; NMC for energy-dense performance,
//                         cold climate conditions and extended routes worldwide fleets.
//                       </li>
//                     </ul>
//                   </div>

//                   {/* RIGHT MINI BARS */}
//                <div
//   style={{
//     display: "flex",
//     gap: 20,
//     alignItems: "flex-end",
//     minWidth: 150,
//     paddingRight: 10,
//   }}
// >
//   {[
//     { year: "2024", LFP: 45, NMC: 40 },
//     { year: "2030", LFP: 65, NMC: 35 },
//   ].map((b) => {
//     // REMOVE GAP → recalculate heights to fill 100%
//     const total = b.LFP + b.NMC;
//     const nmcHeight = (b.NMC / total) * 100;
//     const lfpHeight = (b.LFP / total) * 100;

//     return (
//       <div key={b.year} style={{ textAlign: "center" }}>
//         <div
//           style={{
//             width: 42,
//             height: 90,
//             borderRadius: 12,
//             background: "#1e1538",
//             border: "1px solid rgba(255,255,255,0.08)",
//             position: "relative",
//             overflow: "hidden",
//           }}
//         >
//           {/* NMC (TOP) */}
//           <div
//             style={{
//               height: `${nmcHeight}%`,
//               background: "rgba(217,140,255,0.45)",
//               width: "100%",
//               position: "absolute",
//               top: 0,
//             }}
//           ></div>

//           {/* LFP (BOTTOM) */}
//           <div
//             style={{
//               height: `${lfpHeight}%`,
//               background: "rgba(85,125,255,0.48)",
//               width: "100%",
//               position: "absolute",
//               bottom: 0,
//             }}
//           ></div>

//           {/* NMC LABEL */}
//           <div
//             style={{
//               position: "absolute",
//               top: 2,
//               left: "50%",
//               transform: "translateX(-50%)",
//               fontSize: 9,
//               fontWeight: 500,
//             }}
//           >
//             NMC {b.NMC}%
//           </div>

//           {/* LFP LABEL */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: 2,
//               left: "50%",
//               transform: "translateX(-50%)",
//               fontSize: 9,
//               fontWeight: 500,
//             }}
//           >
//             LFP {b.LFP}%
//           </div>
//         </div>

//         <div style={{ fontSize: 11.5, marginTop: 5 }}>{b.year}</div>
//       </div>
//     );
//   })}
// </div>


//                 </div>
//               </div>

//        {/* ---------- UPDATED LINE GRAPH CARD (Screenshot Style, SAME HEIGHT) ---------- */}
// <div
//   style={{
//     background: "linear-gradient(135deg, #1a1333, #231b47)",
//     border: "1px solid rgba(255,255,255,0.10)",
//     borderRadius: 18,
//     padding: "18px 20px",
//     position: "relative",
//     width: "100%",
//   }}
// >
//   {/* Heading */}
//   <div
//     style={{
//       fontSize: 15,
//       fontWeight: 800,
//       marginBottom: 6,
//       color: "white",
//       lineHeight: 1.2,
//     }}
//   >
//     China’s Competitive Advantage in LFP Battery space
//   </div>

//   {/* Description */}
//   <div
//     style={{
//       fontSize: 10.5,
//       color: "rgba(255,255,255,0.85)",
//       maxWidth: "90%",
//       lineHeight: 1.35,
//       marginBottom: 8,
//       marginLeft : 20
//     }}
//   >
//     China plummets the prices of Lithium Carbonate with a supply surplus,
//     which makes it difficult for international mining companies to compete,
//     thus making it a dominant player in the long run
//   </div>

//   {/* Y-Axis Label */}
//   <div
//     style={{
//       position: "absolute",
//       left: -48,
//       top: "55%",
//       transform: "translateY(-50%) rotate(-90deg)",
//       color: "rgba(255,255,255,0.75)",
//       fontSize: 9.5,
//       fontWeight: 600,
//       letterSpacing: 0.3,
//       whiteSpace: "nowrap",
//     }}
//   >
//     Lithium Carbonate Prices
//   </div>

//   {/* Chart */}
//   <div style={{ height: 120, width: "100%" }}>
//     <Line
//       data={{
//         labels: [
//           "2015", "2016", "2017", "2018", "2019",
//           "2020", "2021", "2022", "2023", "2024", "2025"
//         ],
//         datasets: [
//           {
//             data: [40, 85, 110, 130, 95, 80, 120, 430, 210, 120, 90],
//             borderColor: "#C8A9FF",
//             backgroundColor: "#C8A9FF",
//             pointBackgroundColor: "#E5CFFF",
//             pointBorderColor: "#ffffff",
//             pointRadius: 3.5,
//             borderWidth: 2.2,
//             tension: 0.35,
//           },
//         ],
//       }}
//       options={{
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: { legend: { display: false } },
//         scales: {
//           x: {
//             ticks: {
//               color: "rgba(255,255,255,0.9)",
//               font: { size: 10 },
//             },
//             grid: {
//               color: "rgba(255,255,255,0.15)",
//               borderDash: [4, 4],
//             },
//           },
//           y: {
//             ticks: {
//               color: "rgba(255,255,255,0.9)",
//               font: { size: 10 },
//             },
//             grid: {
//               color: "rgba(255,255,255,0.15)",
//               borderDash: [4, 4],
//             },
//           },
//         },
//       }}
//     />
//   </div>
// </div>

//             </div>
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className="col-12 col-lg-4">
//             <div style={{ ...card, display: "flex", flexDirection: "column", gap: 14 }}>
              
//               <div style={{ fontSize: 11.5, lineHeight: 1.45 }}>
//                 China currently dominates both battery-grade purified phosphoric acid (PPA)
//                 production (75% of global supply) and battery-grade manganese sulphate
//                 production (95%).
//               </div>

//               <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
//                 {/* <div style={{ width: 110, height: 110 }}>
//                   <Doughnut data={donutData} />
//                 </div>

//                 <div style={{ fontSize: 11.2, lineHeight: 1.45 }}>
//                   83% — Material Processing <br />
//                   95% — Cell Components <br />
//                   99% — Battery Packs
//                 </div> */}
                
//               </div>

//               <div>
//                 <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 4,lineHeight: 1.1 }}>
//                   India’s Economic & Policy Measures
//                 </div>

//                 <ul style={{ paddingLeft: 18, margin: 0, fontSize: 11.3, lineHeight: 1.41 }}>
//                   <li>
//                     India is emerging as Asia’s new critical-mineral hub, using NCMM, duty
//                     waivers, mining royalty reforms & policy incentives.
//                   </li>
//                   <li style={{ marginTop: 4 }}>
//                     Joint Ventures with Japan & Korea, export restrictions, and domestic PLI
//                     schemes could strengthen India’s mineral security.
//                   </li>
//                 </ul>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Line = dynamic(() => import("react-chartjs-2").then((m) => m.Line), { ssr: false });
const Bar = dynamic(() => import("react-chartjs-2").then((m) => m.Bar), { ssr: false });

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function Infographic520() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  /* ---------- LINE CHART ---------- */
  const lineData = {
    labels: ["2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025"],
    datasets: [
      {
        data: [40, 85, 110, 130, 95, 80, 120, 430, 210, 120, 90],
        borderColor: "#d4c4ff",
        backgroundColor: "rgba(209,179,255,0.22)",
        pointBackgroundColor: "#f3edff",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 3,
        borderWidth: 2,
        tension: 0.35,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        ticks: { color: "#e2defc", font: { size: 10 }, maxRotation: 0 },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#d0ccf4", font: { size: 10 } },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  /* ---------- BAR CHART FOR CHINA DOMINANCE ---------- */
  const barData = {
    labels: ["Material Processing", "Cell Components", "Battery Packs"],
    datasets: [
      {
        data: [83, 95, 99],
        backgroundColor: ["#7c3aed", "#ef476f", "#10b981"],
        borderRadius: 8,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        ticks: { color: "white", font: { size: 10 } },
        grid: { display: false },
      },
      y: {
        ticks: { color: "white", font: { size: 10 } },
        grid: { color: "rgba(255,255,255,0.15)" },
        beginAtZero: true,
        max: 100,
      },
    },
  };

  /* ---------- BASE CARD STYLE ---------- */
  const card = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 18,
    padding: 16,
    width: "100%",
    boxShadow: "0 8px 24px rgba(0,0,0,0.28)",
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "530px",
        padding: 16,
        borderRadius: 10,
        background: "linear-gradient(135deg,#080715,#14122f 40%,#221a50 95%)",
        position: "relative",
        overflow: "hidden",
        color: "white",
        fontFamily: "Inter",
        boxShadow: "0 0 25px rgba(0,0,0,0.45)",
      }}
    >
      {/* ===================== CENTER HEADING ===================== */}
      <div
        style={{
          position: "absolute",
          top: 6,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "clamp(14px, 2vw, 22px)",
          fontWeight: 900,
          whiteSpace: "nowrap",
          background: "linear-gradient(90deg,#c084fc,#fb7185)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: 0.4,
        }}
      >
        China’s Competitive Advantage in Battery Space
      </div>

      {/* Glow under title */}
      <div
        style={{
          position: "absolute",
          top: 34,
          left: "50%",
          transform: "translateX(-50%)",
          width: 240,
          height: 18,
          background: "radial-gradient(circle,rgba(255,255,255,0.13),transparent)",
          filter: "blur(10px)",
        }}
      ></div>

      {/* BOOTSTRAP GRID */}
      <div className="container-fluid" style={{ marginTop: 40 }}>
        <div className="row g-3">

          {/* LEFT COLUMN */}
          <div className="col-12 col-lg-8">
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

              {/* ---------- TOP CARD ---------- */}
              <div style={{ ...card }}>
                <div style={{ fontSize: 15, fontWeight: 800,lineHeight: 1.1 }}>
                  Market Share of Lithium Iron Phosphate batteries (LFP) and Nickel based 
                  batteries (NMC) — 2024 vs 2030 (projected) – IEA
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  
                  {/* LEFT TEXT */}
                  <div className="mt-1" style={{ flex: 1, minWidth: 260}}>
                    <ul style={{ margin: 0, paddingLeft: 20, fontSize: 12.5, lineHeight: 1.55 }}>
                      <li>
                        Globally, electric 2W/3W and most buses favor LFP—safer, cheaper,
                        heat-tolerant. Nickel-based (NMC) powers higher-range models.
                      </li>
                      <li style={{ marginTop: 8 }}>
                        Companies adopt LFP for durability; NMC for energy-dense performance,
                        cold climate conditions and extended routes worldwide fleets.
                      </li>
                    </ul>
                  </div>

                  {/* RIGHT MINI BARS */}
                  <div
                    style={{
                      display: "flex",
                      gap: 20,
                      alignItems: "flex-end",
                      minWidth: 150,
                      paddingRight: 10,
                    }}
                  >
                    {[
                      { year: "2024", LFP: 45, NMC: 40 },
                      { year: "2030", LFP: 65, NMC: 35 },
                    ].map((b) => {
                      const total = b.LFP + b.NMC;
                      const nmcHeight = (b.NMC / total) * 100;
                      const lfpHeight = (b.LFP / total) * 100;

                      return (
                        <div key={b.year} style={{ textAlign: "center" }}>
                          <div
                            style={{
                              width: 42,
                              height: 90,
                              borderRadius: 12,
                              background: "#1e1538",
                              border: "1px solid rgba(255,255,255,0.08)",
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              style={{
                                height: `${nmcHeight}%`,
                                background: "rgba(217,140,255,0.45)",
                                width: "100%",
                                position: "absolute",
                                top: 0,
                              }}
                            ></div>

                            <div
                              style={{
                                height: `${lfpHeight}%`,
                                background: "rgba(85,125,255,0.48)",
                                width: "100%",
                                position: "absolute",
                                bottom: 0,
                              }}
                            ></div>

                            <div
                              style={{
                                position: "absolute",
                                top: 2,
                                left: "50%",
                                transform: "translateX(-50%)",
                                fontSize: 9,
                                fontWeight: 500,
                              }}
                            >
                              NMC {b.NMC}%
                            </div>

                            <div
                              style={{
                                position: "absolute",
                                bottom: 2,
                                left: "50%",
                                transform: "translateX(-50%)",
                                fontSize: 9,
                                fontWeight: 500,
                              }}
                            >
                              LFP {b.LFP}%
                            </div>
                          </div>

                          <div style={{ fontSize: 11.5, marginTop: 5 }}>{b.year}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* ---------- LINE GRAPH CARD ---------- */}
              <div
                style={{
                  background: "linear-gradient(135deg, #1a1333, #231b47)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 18,
                  padding: "18px 20px",
                  position: "relative",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    marginBottom: 6,
                    color: "white",
                    lineHeight: 1.2,
                  }}
                >
                  China’s Competitive Advantage in LFP Battery space
                </div>

                <div
                  style={{
                    fontSize: 10.5,
                    color: "rgba(255,255,255,0.85)",
                    maxWidth: "90%",
                    lineHeight: 1.35,
                    marginBottom: 8,
                    marginLeft: 20,
                  }}
                >
                  China plummets the prices of Lithium Carbonate with a supply surplus,
                  which makes it difficult for international mining companies to compete,
                  thus making it a dominant player in the long run
                </div>

                <div
                  style={{
                    position: "absolute",
                    left: -48,
                    top: "55%",
                    transform: "translateY(-50%) rotate(-90deg)",
                    color: "rgba(255,255,255,0.75)",
                    fontSize: 9.5,
                    fontWeight: 600,
                    letterSpacing: 0.3,
                  }}
                >
                  Lithium Carbonate Prices
                </div>

                <div style={{ height: 120 }}>
                  <Line data={lineData} options={lineOptions} />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-12 col-lg-4">
            <div style={{ ...card, display: "flex", flexDirection: "column", gap: 14 }}>

              <div style={{ fontSize: 11.5, lineHeight: 1.45 }}>
                China currently dominates both battery-grade purified phosphoric acid (PPA)
                production (75% of global supply) and battery-grade manganese sulphate
                production (95%).
              </div>

              {/* ---------- BAR GRAPH REPLACING DONUT ---------- */}
{/* ---------- BAR GRAPH REPLACING DONUT ---------- */}
<div style={{ position: "relative", width: "100%", height: 160 }}>

  {/* VERTICAL Y-AXIS LABEL */}
  <div
    style={{
      position: "absolute",
      left: -45,
      top: "40%",
      transform: "translateY(-50%) rotate(-90deg)",
      color: "rgba(255,255,255,0.85)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 0.5,
      whiteSpace: "nowrap"
    }}
  >
    China’s Dominance (%)
  </div>

  {/* BAR CHART WITH VALUES INSIDE */}
  <Bar
    data={barData}
    options={{
      ...barOptions,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
      },
      animation: false,
    }}
    plugins={[
      {
        id: "insideValueLabels",
        afterDatasetsDraw(chart) {
          const { ctx, data } = chart;

          chart.getDatasetMeta(0).data.forEach((bar, index) => {
            const value = data.datasets[0].data[index];

            ctx.save();
            ctx.fillStyle = "white";    // WHITE TEXT INSIDE
            ctx.font = "600 12px Inter";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            ctx.fillText(
              value + "%",
              bar.x,
              bar.y + (bar.height / 2)   // TEXT INSIDE THE BAR
            );

            ctx.restore();
          });
        },
      },
    ]}
  />

</div>


              {/* ---------------------------------------------- */}

              <div>
                <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 4, lineHeight: 1.1 }}>
                  India’s Economic & Policy Measures
                </div>

                <ul style={{ paddingLeft: 18, margin: 0, fontSize: 11.3, lineHeight: 1.41 }}>
                  <li>
                    India is emerging as Asia’s new critical-mineral hub, using NCMM, duty
                    waivers, mining royalty reforms & policy incentives.
                  </li>
                  <li style={{ marginTop: 4 }}>
                    Joint Ventures with Japan & Korea, export restrictions, and domestic PLI
                    schemes could strengthen India’s mineral security.
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

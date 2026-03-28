// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState, useRef } from "react";

// export default function SyntheticGraphiteInfographic3D() {
//   const [isHovered, setIsHovered] = useState(false);
//   const [currentYear, setCurrentYear] = useState(2005);
//   const containerRef = useRef(null);

//   const productionData = [
//     { year: 2025, value: 3.5, label: "3.5 MT" },
//     { year: 2030, value: 7.0, label: "7.0 MT" },
//   ];


//   const maxY = 8;
//   const minY = 0;
//   const chartTop = 10;
//   const chartBottom = 90;
//   const chartHeight = chartBottom - chartTop;

//   const getY = (value) =>
//     chartBottom - ((value - minY) / (maxY - minY)) * chartHeight;

//   const startPoint = { x: 22, y: getY(productionData[0].value) };
//   const endPoint = { x: 78, y: getY(productionData[1].value) };

//   const dx = endPoint.x - startPoint.x;
//   const dy = endPoint.y - startPoint.y;
//   const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;
//   // Auto-animate through years
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentYear((prev) => (prev >= 2030 ? 2005 : prev + 1));
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="w-100 d-flex justify-content-center align-items-center"
//       style={{
//         minHeight: "530px",
//         position: "relative",
//         borderRadius : 12,
//         overflow: "hidden",
//         background:
//           "linear-gradient(135deg, #0a0a1a 0%, #020210 30%, #000005 100%)",
//       }}
//     >
//       {/* Enhanced 3D Background with dynamic particles */}
//       <div
//         style={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           background: `
//             radial-gradient(circle at 20% 30%, rgba(0, 255, 200, 0.15) 0%, transparent 40%),
//             radial-gradient(circle at 80% 70%, rgba(255, 68, 68, 0.15) 0%, transparent 40%),
//             radial-gradient(circle at 50% 50%, rgba(255, 184, 0, 0.1) 0%, transparent 60%)
//           `,
//           filter: "blur(40px)",
//         }}
//       />

//       {/* Animated floating particles with depth */}
//       <div style={{ position: "absolute", width: "100%", height: "100%" }}>
//         {[...Array(40)].map((_, i) => (
//           <motion.div
//             key={i}
//             style={{
//               position: "absolute",
//               width: Math.random() * 3 + 1 + "px",
//               height: Math.random() * 3 + 1 + "px",
//               background:
//                 i % 3 === 0 ? "#00ffc8" : i % 3 === 1 ? "#ff4444" : "#ffb800",
//               borderRadius: "50%",
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               opacity: 0.3,
//               zIndex: Math.floor(Math.random() * 3),
//             }}
//             animate={{
//               y: [0, -Math.random() * 100 - 50],
//               x: [0, Math.random() * 40 - 20],
//               opacity: [0, 0.4, 0],
//             }}
//             transition={{
//               duration: Math.random() * 4 + 3,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       {/* 3D Grid with perspective effect */}
//       <motion.div
//         style={{
//           position: "absolute",
//           width: "150%",
//           height: "150%",
//           backgroundImage: `
//             linear-gradient(rgba(0, 255, 200, 0.08) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0, 255, 200, 0.08) 1px, transparent 1px)
//           `,
//           backgroundSize: "40px 40px",
//           transform: "rotateX(60deg) translateY(-20%) rotateZ(45deg)",
//           opacity: 0.15,
//         }}
//         animate={{
//           backgroundPosition: ["0px 0px", "40px 40px"],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       {/* Main 3D Container */}
//       <motion.div
//         className="container-fluid"
//         style={{
//           maxWidth: "1200px",
//           padding: "15px",
//           perspective: "1000px",
//           position: "relative",
//           zIndex: 10,
//         }}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Enhanced Main Title with 3D effect */}
//         <motion.div
//           className="text-center mb-3"
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//         >
//           <h2
//             style={{
//               color: "#ffffff",
//               fontSize: "22px",
//               fontWeight: "800",
//               textShadow:
//                 "0 4px 20px rgba(0, 255, 200, 0.5), 0 0 30px rgba(0, 255, 200, 0.3)",
//               letterSpacing: "1.5px",
//               marginBottom: "5px",
//               position: "relative",
//               display: "inline-block",
//             }}
//           >
//             From Coke to Batteries: How Synthetic Graphite Became a Global Essential
//             <motion.div
//               style={{
//                 position: "absolute",
//                 bottom: "-5px",
//                 left: "0",
//                 right: "0",
//                 height: "2px",
//                 background:
//                   "linear-gradient(90deg, transparent, #00ffc8, transparent)",
//               }}
//               animate={{
//                 backgroundPosition: ["0% 0%", "100% 0%"],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />
//           </h2>
//         </motion.div>

//         {/* Main Content Row with enhanced 3D */}
//         <motion.div
//           className="row g-3"
//           style={{
//             transformStyle: "preserve-3d",
//           }}
//           animate={{
//             rotateX: isHovered ? -5 : 0,
//             rotateY: isHovered ? 3 : 0,
//           }}
//           transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
   
//         >
//           {/* LEFT COLUMN: China's Control & Graphitization */}
//           <div className="col-md-4 d-flex flex-column">
//             {/* China's Control Card */}
//             <motion.div
//               className="flex-grow-1"
//               initial={{ x: -30, opacity: 0, rotateY: -15 }}
//               animate={{ x: 0, opacity: 1, rotateY: 0 }}
//               transition={{ delay: 0.3, duration: 0.7 }}
//             >
//               <motion.div
//                 style={{
//                   width: "100%",
//                   height: "220px",
//                   // minHeight: "180px",
//                   background:
//                     "linear-gradient(135deg, rgba(255,68,68,0.2), rgba(204,0,0,0.15))",
//                   borderRadius: "16px",
//                   border: "1px solid rgba(255, 68, 68, 0.4)",
//                   boxShadow: `
//                     0 20px 40px rgba(255, 68, 68, 0.2),
//                     0 0 60px rgba(255, 68, 68, 0.15),
//                     inset 0 0 20px rgba(255, 255, 255, 0.05)
//                   `,
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   padding: "15px",
//                   position: "relative",
//                   overflow: "hidden",
//                   backdropFilter: "blur(12px)",
//                 }}
//                 // whileHover={{ scale: 1.02, translateZ: 15 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {/* Animated Background Pattern */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     width: "200%",
//                     height: "200%",
//                     background: `repeating-linear-gradient(
//                       45deg,
//                       transparent,
//                       transparent 10px,
//                       rgba(255, 68, 68, 0.05) 10px,
//                       rgba(255, 68, 68, 0.05) 20px
//                     )`,
//                     animation: "slide 20s linear infinite",
//                   }}
//                 />

//                 <div
//                   className="text-center position-relative"
//                   style={{ zIndex: 2 }}
//                 >
//                   <div
//                     style={{
//                       fontSize: "13px",
//                       fontWeight: "600",
//                       color: "#ff8888",
//                       marginBottom: "10px",
//                       textTransform: "uppercase",
//                       letterSpacing: "1.2px",
//                     }}
//                   >
//                     China's Control
//                   </div>

//                   <div
//                     className="position-relative"
//                     style={{
//                       width: "110px",
//                       height: "110px",
//                       margin: "0 auto 12px",
//                     }}
//                   >
//                     {/* Outer Ring */}
//                     <motion.svg
//                       width="110"
//                       height="110"
//                       viewBox="0 0 110 110"
//                       style={{ position: "absolute", top: 0, left: 0 }}
//                       initial={{ rotate: -90 }}
//                       animate={{ rotate: 270 }}
//                       transition={{
//                         delay: 0.5,
//                         duration: 2,
//                         repeat: Infinity,
//                         ease: "linear",
//                       }}
//                     >
//                       <circle
//                         cx="55"
//                         cy="55"
//                         r="52"
//                         fill="none"
//                         stroke="rgba(255, 68, 68, 0.4)"
//                         strokeWidth="2"
//                         strokeDasharray="0.1 4"
//                       />
//                     </motion.svg>

//                     {/* Progress Ring */}
//                     <motion.div
//                       style={{
//                         position: "absolute",
//                         width: "110px",
//                         height: "110px",
//                         borderRadius: "50%",
//                         background:
//                           "conic-gradient(#ff4444 80%, rgba(255,68,68,0.1) 20%)",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                       }}
//                       initial={{ rotate: -90 }}
//                       animate={{ rotate: 0 }}
//                       transition={{ delay: 0.5, duration: 1.5 }}
//                     >
//                       {/* Inner Circle */}
//                       <div
//                         style={{
//                           width: "80px",
//                           height: "80px",
//                           borderRadius: "50%",
//                           background:
//                             "linear-gradient(135deg, rgba(255,68,68,0.3), rgba(204,0,0,0.2))",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           border: "2px solid rgba(255,68,68,0.5)",
//                           boxShadow: "inset 0 0 15px rgba(0,0,0,0.5)",
//                         }}
//                       >
//                         <div
//                           style={{
//                             fontSize: "28px",
//                             fontWeight: "800",
//                             color: "#ffffff",
//                             textShadow: "0 2px 8px rgba(0,0,0,0.5)",
//                           }}
//                         >
//                           80%
//                         </div>
//                       </div>
//                     </motion.div>
//                   </div>

//                   <div
//                     style={{
//                       fontSize: "11px",
//                       fontWeight: "500",
//                       color: "#ffffff",
//                       lineHeight: 1.4,
//                       padding: "0 8px",
//                       opacity: 0.9,
//                     }}
//                   >
//                     Controls of global synthetic graphite output
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* Graphitization Card */}
//             <motion.div
//               className="mt-3"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.6 }}
//               style={{ flexShrink: 0 }}
//             >
//               <div
//                 style={{
//                   background:
//                     "linear-gradient(135deg, rgba(255,184,0,0.15), rgba(255,140,0,0.1))",
//                   borderRadius: "12px",
//                   padding: "15px",
//                   border: "1px solid rgba(255, 184, 0, 0.4)",
//                   boxShadow: "0 12px 25px rgba(255, 184, 0, 0.15)",
//                   backdropFilter: "blur(10px)",
//                   transformStyle: "preserve-3d",
//                   transform: "translateZ(10px)",
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: "14px",
//                     color: "#e0e0e0",
//                     lineHeight: 1.5,
//                     opacity: 0.9,
//                   }}
//                 >
//                   Synthetic graphite is produced through a process of
//                   graphitization at 2,500–3,000°C, which drives out impurities.
//                   This makes it far purer than most natural graphite — critical
//                   for EV batteries, semiconductors, and nuclear applications
//                   where contamination cannot be tolerated.
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* CENTER COLUMN: 98% Capacity Sphere */}
//           <div
//             className="col-md-4 d-flex flex-column align-items-center justify-content-center"
//             style={{ height: "400px" }}
//           >
//             {/* 3D Sphere Container */}
//             <motion.div
//               className="position-relative"
//               initial={{ scale: 0, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               {/* Outer Glow Rings */}
//               <motion.div
//                 style={{
//                   position: "absolute",
//                   width: "260px",
//                   height: "260px",
//                   borderRadius: "50%",
//                   border: "1px solid rgba(255, 184, 0, 0.3)",
//                   filter: "blur(8px)",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                 }}
//                 animate={{
//                   scale: [1, 1.2, 1],
//                   opacity: [0.3, 0.6, 0.3],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                 }}
//               />

//               {/* Main Sphere */}
//               <motion.div
//                 style={{
//                   width: "200px",
//                   height: "200px",
//                   borderRadius: "50%",
//                   background:
//                     "radial-gradient(circle at 30% 30%, #ffcc44, #ffb800, #ff8800)",
//                   boxShadow: `
//                     0 0 60px rgba(255, 184, 0, 0.6),
//                     inset 0 0 40px rgba(255, 255, 255, 0.2)
//                   `,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   position: "relative",
//                   overflow: "hidden",
//                 }}
//                 // animate={{
//                 //   rotateY: [0, 180, 360],
//                 // }}
//                 transition={{
//                   duration: 20,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//               >
//                 {/* Sphere inner pattern */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     width: "100%",
//                     height: "100%",
//                     background: `radial-gradient(
//                       circle at 40% 40%,
//                       transparent 30%,
//                       rgba(255, 255, 255, 0.1) 70%
//                     )`,
//                     borderRadius: "50%",
//                   }}
//                 />

//                 {/* Sphere content */}
//                 <div
//                   style={{
//                     width: "150px",
//                     height: "150px",
//                     borderRadius: "50%",
//                     background:
//                       "radial-gradient(circle at 40% 40%, #ffdd66, #ffb800, #ff9900)",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     border: "2px solid rgba(255, 255, 255, 0.15)",
//                     boxShadow: "inset 0 0 25px rgba(0,0,0,0.5)",
//                     position: "relative",
//                     zIndex: 2,
//                   }}
//                 >
//                   <div
//                     style={{
//                       fontSize: "32px",
//                       fontWeight: "900",
//                       color: "#ffffff",
//                       textShadow: "0 3px 12px rgba(0,0,0,0.8)",
//                     }}
//                   >
//                     98%
//                   </div>
//                   <div
//                     style={{
//                       fontSize: "9px",
//                       fontWeight: "600",
//                       color: "#ffffff",
//                       textAlign: "center",
//                       padding: "0 12px",
//                       lineHeight: 1.3,
//                       marginTop: "6px",
//                       textShadow: "0 1px 4px rgba(0,0,0,0.7)",
//                     }}
//                   >
//                     of Graphitization capacity for Battery Anode, a critical
//                     midstream process to produce synthetic graphite
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Floating particles around sphere */}
//               {[...Array(8)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   style={{
//                     position: "absolute",
//                     width: "4px",
//                     height: "4px",
//                     background: "#ffb800",
//                     borderRadius: "50%",
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                   }}
//                   animate={{
//                     x: [0, Math.cos((i * 45 * Math.PI) / 180) * 130],
//                     y: [0, Math.sin((i * 45 * Math.PI) / 180) * 130],
//                     opacity: [0, 1, 0],
//                   }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     delay: i * 0.4,
//                   }}
//                 />
//               ))}
//             </motion.div>

//             {/* Description below sphere */}
//             <motion.div
//               className="mt-3"
//               initial={{ y: 15, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.7 }}
//               style={{ width: "100%", maxWidth: "250px" }}
//             >
//               <div
//                 style={{
//                   background:
//                     "linear-gradient(135deg, rgba(0,255,200,0.15), rgba(0,150,255,0.1))",
//                   borderRadius: "10px",
//                   padding: "12px",
//                   border: "1px solid rgba(0, 255, 200, 0.3)",
//                   boxShadow: "0 10px 25px rgba(0, 255, 200, 0.15)",
//                   backdropFilter: "blur(8px)",
//                   textAlign: "center",
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: "14px",
//                     color: "#e0e0e0",
//                     lineHeight: 1.4,
//                     opacity: 0.9,
//                   }}
//                 >
//                   China’s grip on synthetic graphite is tighter than its grip on
//                   lithium, nickel, or rare earths
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* RIGHT COLUMN: Production Growth Chart */}
//           <div
//             className="col-md-4 d-flex flex-column"
//             style={{ height: "400px" }}
//           >
//             {/* Production Chart */}
//  <motion.div
//       className="flex-grow-1"
//       initial={{ x: 30, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{ delay: 0.5 }}
//     >
//       <div
//         style={{
//           background: "radial-gradient(circle at top, #081426, #020814)",
//           borderRadius: "14px",
//           padding: "16px",
//           border: "1px solid rgba(0, 150, 255, 0.35)",
//           boxShadow: "0 15px 35px rgba(0, 0, 0, 0.7)",
//           backdropFilter: "blur(10px)",
//           height: "100%",
//           display: "flex",
//           flexDirection: "column",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         {/* subtle glow */}
//         <div
//           style={{
//             position: "absolute",
//             top: "-40px",
//             left: "40%",
//             width: "120px",
//             height: "120px",
//             background: "radial-gradient(circle, rgba(0,255,200,0.22), transparent)",
//             filter: "blur(8px)",
//             zIndex: 0,
//           }}
//         />

//         {/* Title */}
//         <div
//           style={{
//             fontSize: "13px",
//             fontWeight: "700",
//             color: "#e9f7ff",
//             marginBottom: "4px",
//             textAlign: "center",
//             letterSpacing: "0.6px",
//             zIndex: 2,
//           }}
//         >
//           Production of Synthetic Graphite in Million Tonnes
//         </div>
//         {/* Chart Container */}
//         <div
//           style={{
//             flex: 1,
//             position: "relative",
//             zIndex: 2,
//             paddingRight: "10px",
//             paddingLeft: "30px",
//           }}
//         >
//           {/* Y-axis labels */}
//           <div
//             style={{
//               position: "absolute",
//               left: 0,
//               top: 0,
//               bottom: "30px",
//               width: "25px",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               padding: "5px 0",
//               fontSize: "9px",
//               color: "#92a3b5",
//             }}
//           >
//             {[8, 6, 4, 2, 0].map((num) => (
//               <div
//                 key={num}
//                 style={{ textAlign: "right", paddingRight: "3px",fontSize : "13px" }}
//               >
//                 {num}
//               </div>
//             ))}
//           </div>

//           {/* Plot area */}
//           <div
//             style={{
//               position: "absolute",
//               left: "30px",
//               right: 0,
//               top: 0,
//               bottom: "30px",
//               borderBottom: "1px solid rgba(160, 200, 220, 0.35)",
//             }}
//           >
//             {/* grid lines */}
//             <svg
//               viewBox="0 0 100 100"
//               preserveAspectRatio="none"
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 opacity: 0.18,
//               }}
//             >
//               {[0, 25, 50, 75, 100].map((y) => (
//                 <line
//                   key={y}
//                   x1="0"
//                   x2="100"
//                   y1={y}
//                   y2={y}
//                   stroke="#6c7d90"
//                   strokeWidth="0.4"
//                 />
//               ))}
//             </svg>

//             {/* ARROW LINES + DOT */}
//             <motion.svg
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               viewBox="0 0 100 100"
//               preserveAspectRatio="none"
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 overflow: "visible",
//               }}
//             >
//               {/* shadow / back line */}
//               <motion.line
//                 x1={startPoint.x}
//                 y1={startPoint.y}
//                 x2={endPoint.x}
//                 y2={endPoint.y}
//                 stroke="rgba(4, 32, 70, 0.95)"
//                 strokeWidth="3.4"
//                 strokeLinecap="round"
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{ duration: 1, delay: 0.15 }}
//               />
//               {/* main blue line */}
//               <motion.line
//                 x1={startPoint.x}
//                 y1={startPoint.y}
//                 x2={endPoint.x}
//                 y2={endPoint.y}
//                 stroke="#3aa0ff"
//                 strokeWidth="2.2"
//                 strokeLinecap="round"
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{ duration: 1, delay: 0.25 }}
//               />
//               {/* light cyan overlay line */}
//               <motion.line
//                 x1={startPoint.x + 0.8}
//                 y1={startPoint.y - 0.6}
//                 x2={endPoint.x + 0.8}
//                 y2={endPoint.y - 0.6}
//                 stroke="#7fffe7"
//                 strokeWidth="1.6"
//                 strokeLinecap="round"
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{ duration: 1, delay: 0.35 }}
//               />

//               {/* start dot */}
//               <circle
//                 cx={startPoint.x}
//                 cy={startPoint.y}
//                 r="2.3"
//                 fill="#ffffff"
//                 stroke="#2b78ff"
//                 strokeWidth="1.4"
//               />
//               <circle
//                 cx={startPoint.x}
//                 cy={startPoint.y}
//                 r="1.1"
//                 fill="#2b78ff"
//               />

//               {/* arrow head perfectly aligned to line */}
//               <g
//                 transform={`translate(${endPoint.x},${endPoint.y}) rotate(${angleDeg})`}
//               >
//                 <polygon
//                   points="0,0 -6,3 -6,-3"
//                   fill="#2b78ff"
//                   opacity="0.9"
//                 />
//                 <polygon
//                   points="0,0 -5,2.5 -5,-2.5"
//                   fill="#7fffe7"
//                   opacity="0.95"
//                 />
//               </g>
//             </motion.svg>

//             {/* value labels near points */}
//             <div
//               style={{
//                 position: "absolute",
//                 left: "20%",
//                 bottom: `${100 - startPoint.y + 6}%`,
//                 transform: "translateX(-50%)",
//                 fontSize: "9px",
//                 fontWeight: 600,
//                 color: "#eaffff",
//                 background: "rgba(0,0,0,0.75)",
//                 padding: "2px 6px",
//                 borderRadius: "4px",
//                 boxShadow: "0 0 6px rgba(0,0,0,0.6)",
//               }}
//             >
//               {productionData[0].label}
//             </div>
//             <div
//               style={{
//                 position: "absolute",
//                 left: "80%",
//                 bottom: `${100 - endPoint.y + 6}%`,
//                 transform: "translateX(-50%)",
//                 fontSize: "9px",
//                 fontWeight: 600,
//                 color: "#eaffff",
//                 background: "rgba(0,0,0,0.75)",
//                 padding: "2px 6px",
//                 borderRadius: "4px",
//                 boxShadow: "0 0 6px rgba(0,0,0,0.6)",
//               }}
//             >
//               {productionData[1].label}
//             </div>
//           </div>

//           {/* X-axis year labels */}
//           <div
//             style={{
//               position: "absolute",
//               left: "30px",
//               right: 0,
//               bottom: 0,
//               height: "28px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-around",
//               fontSize: "9px",
//               color: "#dde7f5",
//             }}
//           >
//             {productionData.map((item) => (
//               <div style={{fontSize : 12}} key={item.year}>{item.year}</div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>


//             {/* Summary Card */}
//             <motion.div
//               className="mt-3"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.8 }}
//               style={{ flexShrink: 0 }}
//             >
//               <div
//                 style={{
//                   background: "rgba(10, 20, 40, 0.6)",
//                   borderRadius: "10px",
//                   padding: "12px",
//                   border: "1px solid rgba(100, 150, 255, 0.2)",
//                   boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
//                   backdropFilter: "blur(5px)",
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: "14px",
//                     color: "#e0e0e0",
//                     lineHeight: 1.5,
//                     opacity: 0.9,
//                   }}
//                 >
//                   Graphitisation is not a mine — it's a furnace-based,
//                   high-temperature processing step.
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* CSS for animations */}
//       <style jsx>{`
//         @keyframes slide {
//           0% {
//             transform: translateX(0) translateY(0);
//           }
//           100% {
//             transform: translateX(-20px) translateY(-20px);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function SyntheticGraphiteInfographic3D() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentYear, setCurrentYear] = useState(2005);
  const containerRef = useRef(null);

  const productionData = [
    { year: 2025, value: 3.5, label: "3.5 MT" },
    { year: 2030, value: 7.0, label: "7.0 MT" },
  ];

  const maxY = 8;
  const minY = 0;
  const chartTop = 10;
  const chartBottom = 90;
  const chartHeight = chartBottom - chartTop;

  const getY = (value) =>
    chartBottom - ((value - minY) / (maxY - minY)) * chartHeight;

  const startPoint = { x: 22, y: getY(productionData[0].value) };
  const endPoint = { x: 78, y: getY(productionData[1].value) };

  const dx = endPoint.x - startPoint.x;
  const dy = endPoint.y - startPoint.y;
  const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;
  
  // Auto-animate through years
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear((prev) => (prev >= 2030 ? 2005 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      
      className="w-100 d-flex justify-content-center align-items-center"
      style={{
        minHeight: "530px",
        position: "relative",
        borderRadius: 10,
        overflow: "hidden",
        background: "#0a0a1a",
      }}
    >
      {/* Simple Background */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(circle at 20% 30%, rgba(0, 255, 200, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(255, 68, 68, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(255, 184, 0, 0.03) 0%, transparent 60%)
          `,
        }}
      />

      <motion.div
      className={montserrat.className}
       
        style={{
          maxWidth: "1200px",
          padding: "15px",
          perspective: "1000px",
          position: "relative",
          zIndex: 10,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Title */}
        <motion.div
        
          className="text-center mb-3"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <h2
          className={montserrat.className}
            style={{
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            From Coke to Batteries: How Synthetic Graphite Became a Global Essential
          </h2>
        </motion.div>

        {/* Main Content Row */}
        <motion.div
          className="row g-3"
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX: isHovered ? -5 : 0,
            rotateY: isHovered ? 3 : 0,
          }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          {/* LEFT COLUMN: China's Control & Graphitization */}
          <div className="col-md-4 d-flex flex-column">
            {/* China's Control Card */}
            <motion.div
              className="flex-grow-1"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <motion.div
              className={montserrat.className}
                style={{
                  width: "100%",
                  // height: "220px",
                  background: "rgba(255,68,68,0.1)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 68, 68, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "15px",
                  position: "relative",
                  overflow: "hidden",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <div
                  className={montserrat.className}
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#ff8888",
                      marginBottom: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "1.2px",
                    }}
                  >
                    China's Control
                  </div>

                  <div
                    className="position-relative"
                    style={{
                      width: "90px",
                      height: "90px",
                      margin: "0 auto 5px",
                    }}
                  >
                    {/* Progress Ring */}
                    <motion.div
                      style={{
                        position: "absolute",
                        width: "110px",
                        height: "110px",
                        borderRadius: "50%",
                        background:
                          "conic-gradient(#ff4444 80%, rgba(255,68,68,0.1) 20%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      transition={{ delay: 0.5, duration: 1.5 }}
                    >
                      {/* Inner Circle */}
                      <div
                        style={{
                          width: "70px",
                          height: "70px",
                          borderRadius: "50%",
                          background: "rgba(255,68,68,0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid rgba(255,68,68,0.4)",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "22px",
                            fontWeight: "800",
                            color: "#ffffff",
                          }}
                        >
                          80%
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div
                  className={montserrat.className}
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#ffffff",
                      lineHeight: 1.4,
                      padding: "0 8px",
                      opacity: 0.9,
                      marginTop:20
                    }}
                  >
                    Controls of global synthetic graphite output
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Graphitization Card */}
            <motion.div
              className="mt-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ flexShrink: 0 }}
            >
              <div
                style={{
                  background: "rgba(255,184,0,0.1)",
                  borderRadius: "12px",
                  padding: "15px",
                  border: "1px solid rgba(255, 184, 0, 0.3)",
                }}
              >
                <div
                className={montserrat.className}
                  style={{
                    fontSize: "14px",
                    color: "#e0e0e0",
                    lineHeight: 1.5,
                  }}
                >
                  Synthetic graphite is produced through a process of
                  graphitization at 2,500–3,000°C, which drives out impurities.
                  This makes it far purer than most natural graphite — critical
                  for EV batteries, semiconductors, and nuclear applications
                  where contamination cannot be tolerated.
                </div>
              </div>
            </motion.div>
          </div>

          {/* CENTER COLUMN: 98% Capacity Sphere */}
          <div
            className="col-md-4 d-flex flex-column align-items-center justify-content-center"
            style={{ height: "400px" }}
          >
            {/* Sphere Container */}
            <motion.div
              className="position-relative"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
            >
              {/* Main Sphere */}
              <motion.div
                style={{
                  // width: "130px",
                  // height: "130px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 30% 30%, #ffcc44, #ffb800, #ff8800)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Sphere inner pattern */}
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    background: `radial-gradient(
                      circle at 40% 40%,
                      transparent 30%,
                      rgba(255, 255, 255, 0.1) 70%
                    )`,
                    borderRadius: "50%",
                  }}
                />

                {/* Sphere content */}
                <div
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle at 40% 40%, #ffdd66, #ffb800, #ff9900)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <div
                  className={montserrat.className}
                    style={{
                      fontSize: "28px",
                      fontWeight: "900",
                      color: "#ffffff",
                    }}
                  >
                    98%
                  </div>

                  <div
                  className={montserrat.className}
                    style={{
                      fontSize: 9.3,
                      fontWeight: "600",
                      color: "#ffffff",
                      textAlign: "center",
                      padding: "0 10px",
                      lineHeight: 1.3,
                      marginTop: "5px",
                    }}
                  >
                    of Graphitization capacity for Battery Anode, a critical
                    midstream process to produce synthetic graphite
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Description below sphere */}
            <motion.div
              className="mt-3"
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              style={{ width: "100%", maxWidth: "250px" }}
            >
              <div
                style={{
                  background: "rgba(0,255,200,0.1)",
                  borderRadius: "10px",
                  padding: "12px",
                  border: "1px solid rgba(0, 255, 200, 0.3)",
                  textAlign: "center",
                }}
              >
                <div
                className={montserrat.className}
                  style={{
                    fontSize: "14px",
                    color: "#e0e0e0",
                    lineHeight: 1.4,
                  }}
                >
                  China's grip on synthetic graphite is tighter than its grip on
                  lithium, nickel, or rare earths
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Production Growth Chart */}
          <div
            className="col-md-4 d-flex flex-column"
            style={{ height: "400px" }}
          >
            {/* Production Chart */}
            <motion.div
              className="flex-grow-1"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div
                style={{
                  background: "#081426",
                  borderRadius: "12px",
                  padding: "16px",
                  border: "1px solid rgba(0, 150, 255, 0.3)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Title */}
                <div
                className={montserrat.className}
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#e9f7ff",
                    marginBottom: "4px",
                    textAlign: "center",
                    letterSpacing: "0.6px",
                    zIndex: 2,
                  }}
                >
                  Production of Synthetic Graphite in Million Tonnes
                </div>
                
                {/* Chart Container */}
                <div
                  style={{
                    flex: 1,
                    position: "relative",
                    zIndex: 2,
                    paddingRight: "10px",
                    paddingLeft: "30px",
                  }}
                >
                  {/* Y-axis labels */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: "30px",
                      width: "25px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: "5px 0",
                      fontSize: "9px",
                      color: "#92a3b5",
                    }}
                  >
                    {[8, 6, 4, 2, 0].map((num) => (
                      <div
                        key={num}
                        style={{ textAlign: "right", paddingRight: "3px", fontSize: "13px" }}
                      >
                        {num}
                      </div>
                    ))}
                  </div>

                  {/* Plot area */}
                  <div
                    style={{
                      position: "absolute",
                      left: "30px",
                      right: 0,
                      top: 0,
                      bottom: "30px",
                      borderBottom: "1px solid rgba(160, 200, 220, 0.3)",
                    }}
                  >
                    {/* grid lines */}
                    <svg
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      style={{
                        position: "absolute",
                        inset: 0,
                        opacity: 0.15,
                      }}
                    >
                      {[0, 25, 50, 75, 100].map((y) => (
                        <line
                          key={y}
                          x1="0"
                          x2="100"
                          y1={y}
                          y2={y}
                          stroke="#6c7d90"
                          strokeWidth="0.4"
                        />
                      ))}
                    </svg>

                    {/* ARROW LINES + DOT */}
                    <motion.svg
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      style={{
                        position: "absolute",
                        inset: 0,
                        overflow: "visible",
                      }}
                    >
                      {/* main blue line */}
                      <motion.line
                        x1={startPoint.x}
                        y1={startPoint.y}
                        x2={endPoint.x}
                        y2={endPoint.y}
                        stroke="#3aa0ff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.25 }}
                      />

                      {/* start dot */}
                      <circle
                        cx={startPoint.x}
                        cy={startPoint.y}
                        r="1.5"
                        fill="#ffffff"
                        stroke="#2b78ff"
                        strokeWidth="0.8"
                      />
                      <circle
                        cx={startPoint.x}
                        cy={startPoint.y}
                        r="0.8"
                        fill="#2b78ff"
                      />

                      {/* arrow head */}
                      <g
                        transform={`translate(${endPoint.x},${endPoint.y}) rotate(${angleDeg})`}
                      >
                        <polygon
                          points="0,0 -5,2.5 -5,-2.5"
                          fill="#2b78ff"
                        />
                      </g>
                    </motion.svg>

                    {/* value labels */}
                    <div
                      style={{
                        position: "absolute",
                        left: "20%",
                        bottom: `${100 - startPoint.y + 6}%`,
                        transform: "translateX(-50%)",
                        fontSize: "8px",
                        fontWeight: 600,
                        color: "#eaffff",
                        background: "rgba(0,0,0,0.7)",
                        padding: "2px 5px",
                        borderRadius: "3px",
                      }}
                    >
                      {productionData[0].label}
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: "80%",
                        bottom: `${100 - endPoint.y + 6}%`,
                        transform: "translateX(-50%)",
                        fontSize: "8px",
                        fontWeight: 600,
                        color: "#eaffff",
                        background: "rgba(0,0,0,0.7)",
                        padding: "2px 5px",
                        borderRadius: "3px",
                      }}
                    >
                      {productionData[1].label}
                    </div>
                  </div>

                  {/* X-axis year labels */}
                  <div
                    style={{
                      position: "absolute",
                      left: "30px",
                      right: 0,
                      bottom: 0,
                      height: "28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      fontSize: "9px",
                      color: "#dde7f5",
                    }}
                  >
                    {productionData.map((item) => (
                      <div style={{ fontSize: 12 }} key={item.year}>
                        {item.year}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Summary Card */}
            <motion.div
              className="mt-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{ flexShrink: 0 }}
            >
              <div
                style={{
                  background: "rgba(10, 20, 40, 0.4)",
                  borderRadius: "10px",
                  padding: "12px",
                  border: "1px solid rgba(100, 150, 255, 0.2)",
                }}
              >
                <div
                className={montserrat.className}
                  style={{
                    fontSize: "14px",
                    color: "#e0e0e0",
                    lineHeight: 1.5,
                  }}
                >
                  Graphitisation is not a mine — it's a furnace-based,
                  high-temperature processing step.
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
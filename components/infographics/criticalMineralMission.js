// import React, { useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function CriticalMineralMission() {
//   const blocksRef = useRef([]);
  
//   // Add CSS animations
//   useEffect(() => {
//     const style = document.createElement('style');
//     style.textContent = `
//       @keyframes slideUp {
//         from { opacity: 0; transform: translateY(15px); }
//         to { opacity: 1; transform: translateY(0); }
//       }
      
//       @keyframes pulse {
//         0%, 100% { opacity: 0.6; transform: scale(1); }
//         50% { opacity: 0.8; transform: scale(1.05); }
//       }
      
//       @keyframes float {
//         0% { transform: translateY(0) translateX(0); opacity: 0.3; }
//         25% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
//         50% { transform: translateY(-40px) translateX(-10px); opacity: 0.7; }
//         75% { transform: translateY(-20px) translateX(5px); opacity: 0.5; }
//         100% { transform: translateY(0) translateX(0); opacity: 0.3; }
//       }
      
//       @keyframes fadeIn {
//         from { opacity: 0; }
//         to { opacity: 1; }
//       }
      
//       .mission-block {
//         animation: slideUp 0.5s ease forwards;
//         opacity: 0;
//         transition: all 0.3s ease;
//       }
      
//       .mission-block:hover {
//         transform: translateY(-2px);
//         box-shadow: 0 10px 25px rgba(0,0,0,0.3) !important;
//       }
      
//       .arrow-line {
//         animation: fadeIn 0.8s ease forwards;
//         opacity: 0;
//         animation-delay: var(--delay);
//       }
      
//       @media (max-width: 768px) {
//         .mobile-stack {
//           flex-direction: column !important;
//           align-items: center !important;
//         }
        
//         .mobile-full-width {
//           width: 100% !important;
//           margin-bottom: 15px;
//         }
        
//         .mobile-center {
//           text-align: center;
//         }
//       }
//     `;
//     document.head.appendChild(style);
    
//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         fontFamily: "'Inter','Poppins',sans-serif",
//         background:
//           "linear-gradient(135deg, #0f172a 0%, #1e3a8a 30%, #0369a1 70%, #0d9488 100%)",
//         minHeight: "530px",
//         padding: "25px 20px",
//         borderRadius: "20px",
//         boxShadow:
//           "0 15px 35px rgba(0,0,0,0.4), inset 0 0 20px rgba(255,255,255,0.08)",
//         overflow: "hidden",
//         margin: "0 auto",
//         position: "relative",
//         width: "100%",
//         maxWidth: "1000px",
//       }}
//     >
//       {/* Background effects */}
//       <div
//         style={{
//           position: "absolute",
//           top: "-60px",
//           right: "-60px",
//           width: "150px",
//           height: "150px",
//           borderRadius: "50%",
//           background: "radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 65%)",
//           filter: "blur(15px)",
//           animation: "pulse 6s infinite ease-in-out",
//         }}
//       ></div>

//       {/* Floating particles */}
//       {[...Array(8)].map((_, i) => (
//         <div
//           key={i}
//           style={{
//             position: "absolute",
//             width: `${Math.random() * 4 + 2}px`,
//             height: `${Math.random() * 4 + 2}px`,
//             background: `rgba(255,255,255,${Math.random() * 0.3 + 0.1})`,
//             borderRadius: "50%",
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             animation: `float ${Math.random() * 20 + 10}s infinite linear`,
//             animationDelay: `${Math.random() * 5}s`,
//             zIndex: 1,
//           }}
//         />
//       ))}

//       {/* TITLE */}
//       <div className="mobile-center mx-auto " style={{ marginBottom: "30px", position: "relative", zIndex: 2 ,textAlign:"center"}}>
//         <h2
//           style={{
//             color: "#FFFFFF",
//             fontWeight: 800,
//             fontSize: "1.4rem",
//             marginBottom: "8px",
//             textTransform: "uppercase",
//             textShadow: "0 2px 8px rgba(0,0,0,0.5)",
//             letterSpacing: "0.8px",
//             animation: "slideUp 0.8s ease forwards",
//             lineHeight: "1.3",
//           }}
//         >
//           National Critical Mineral Mission
//         </h2>
//         <p
//           style={{
//             fontSize: "0.95rem",
//             fontWeight: 500,
//             color: "#E2E8F0",
//             margin: 0,
//             opacity: 0.9,
//             letterSpacing: "0.3px",
//           }}
//         >
//           Budgetary & Strategic Investment Framework
//         </p>
//       </div>

//       {/* Main container with arrows */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 2,
//           padding: "0 10px",
//         }}
//       >
//         {/* TOP CARD - Block 1 */}
//         <div
//           ref={(el) => (blocksRef.current[0] = el)}
//           className="mission-block"
//           style={{
//             background: "linear-gradient(135deg, rgba(56, 189, 248, 0.18), rgba(14, 165, 233, 0.1))",
//             backdropFilter: "blur(12px)",
//             width: "92%",
//             maxWidth: "600px",
//             borderRadius: "18px",
//             padding: "22px 25px",
//             border: "1px solid rgba(255,255,255,0.15)",
//             boxShadow: "0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
//             margin: "0 auto 60px",
//             position: "relative",
//             overflow: "hidden",
//             transitionDelay: "0.1s",
//             minHeight: "100px",
//             zIndex: 3,
//           }}
//         >
//           {/* Left accent bar */}
//           <div
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "6px",
//               height: "100%",
//               background: "linear-gradient(180deg, #38bdf8, #0284c7, #0ea5e9)",
//               borderRadius: "18px 0 0 18px",
//             }}
//           />
          
//           {/* Glow effect */}
//           <div
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: "80%",
//               height: "80%",
//               background: "radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)",
//               filter: "blur(20px)",
//               zIndex: -1,
//             }}
//           />
          
//           <div
//             style={{
//               fontSize: "2rem",
//               fontWeight: 900,
//               color: "#FFFFFF",
//               marginBottom: "6px",
//               textShadow: "0 2px 10px rgba(14, 165, 233, 0.5)",
//               lineHeight: "1.1",
//               letterSpacing: "0.5px",
//             }}
//           >
//             ₹34,300 CRORE
//           </div>
//           <div
//             style={{
//               color: "#E2E8F0",
//               fontSize: "0.9rem",
//               lineHeight: "1.5",
//               paddingLeft: "12px",
//               borderLeft: "2px solid rgba(56, 189, 248, 0.6)",
//               fontWeight: 400,
//               opacity: 0.9,
//             }}
//           >
//             India's total investment envelope for Critical Minerals
//           </div>
          
//           {/* Decorative corner elements */}
//           <div style={{
//             position: "absolute",
//             top: "12px",
//             right: "12px",
//             width: "20px",
//             height: "20px",
//             borderTop: "2px solid rgba(56, 189, 248, 0.4)",
//             borderRight: "2px solid rgba(56, 189, 248, 0.4)",
//             borderRadius: "0 10px 0 0",
//           }} />
//           <div style={{
//             position: "absolute",
//             bottom: "12px",
//             left: "12px",
//             width: "20px",
//             height: "20px",
//             borderBottom: "2px solid rgba(56, 189, 248, 0.4)",
//             borderLeft: "2px solid rgba(56, 189, 248, 0.4)",
//             borderRadius: "0 0 0 10px",
//           }} />
//         </div>

//         {/* CONNECTOR ARROW from Top Card to Middle Line */}
//         <div
//           className="arrow-line"
//           style={{
//             position: "absolute",
//             left: "50%",
//             transform: "translateX(-50%)",
//             top: "calc(100px + 22px)", // Top card height + padding + margin
//             width: "2px",
//             height: "40px",
//             background: "linear-gradient(180deg, #38bdf8, rgba(56, 189, 248, 0.3))",
//             "--delay": "0.6s",
//             zIndex: 2,
//           }}
//         >
//           <div
//             style={{
//               position: "absolute",
//               bottom: "-8px",
//               left: "50%",
//               transform: "translateX(-50%)",
//               width: "0",
//               height: "0",
//               borderLeft: "8px solid transparent",
//               borderRight: "8px solid transparent",
//               borderTop: "12px solid #38bdf8",
//               filter: "drop-shadow(0 2px 4px rgba(14, 165, 233, 0.5))",
//             }}
//           />
//         </div>

//         {/* BOTTOM ROW - Block 2 and Block 3 */}
//         <div 
//           className="d-flex justify-content-between mobile-stack"
//           style={{ 
//             position: "relative",
//             padding: "40px 0 0",
//             maxWidth: "900px",
//             margin: "0 auto",
//           }}
//         >
//           {/* Middle connector line */}
//           <div
//             className="arrow-line"
//             style={{
//               position: "absolute",
//               left: "50%",
//               transform: "translateX(-50%)",
//               top: "40px",
//               width: "80%",
//               maxWidth: "500px",
//               height: "2px",
//               background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
//               "--delay": "0.8s",
//               zIndex: 1,
//             }}
//           />
          
//           {/* Branch connector from middle line to left card */}
//           <div
//             className="arrow-line"
//             style={{
//               position: "absolute",
//               left: "25%",
//               transform: "translateX(-50%)",
//               top: "40px",
//               width: "2px",
//               height: "30px",
//               background: "linear-gradient(180deg, rgba(255,255,255,0.2), #8b5cf6)",
//               "--delay": "1s",
//               zIndex: 1,
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 bottom: "-8px",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 width: "0",
//                 height: "0",
//                 borderLeft: "6px solid transparent",
//                 borderRight: "6px solid transparent",
//                 borderTop: "10px solid #8b5cf6",
//                 filter: "drop-shadow(0 2px 4px rgba(139, 92, 246, 0.5))",
//               }}
//             />
//           </div>
          
//           {/* Branch connector from middle line to right card */}
//           <div
//             className="arrow-line"
//             style={{
//               position: "absolute",
//               left: "75%",
//               transform: "translateX(-50%)",
//               top: "40px",
//               width: "2px",
//               height: "30px",
//               background: "linear-gradient(180deg, rgba(255,255,255,0.2), #22c55e)",
//               "--delay": "1.1s",
//               zIndex: 1,
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 bottom: "-8px",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 width: "0",
//                 height: "0",
//                 borderLeft: "6px solid transparent",
//                 borderRight: "6px solid transparent",
//                 borderTop: "10px solid #22c55e",
//                 filter: "drop-shadow(0 2px 4px rgba(34, 197, 94, 0.5))",
//               }}
//             />
//           </div>

//           {/* Block 2 - Left Branch */}
//           <div
//             ref={(el) => (blocksRef.current[1] = el)}
//             className="mission-block mobile-full-width"
//             style={{
//               background: "linear-gradient(135deg, rgba(139, 92, 246, 0.18), rgba(124, 58, 237, 0.1))",
//               backdropFilter: "blur(12px)",
//               width: "46%",
//               borderRadius: "18px",
//               padding: "20px",
//               border: "1px solid rgba(255,255,255,0.15)",
//               boxShadow: "0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
//               position: "relative",
//               overflow: "hidden",
//               transitionDelay: "0.2s",
//               minHeight: "120px",
//               zIndex: 3,
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "6px",
//                 height: "100%",
//                 background: "linear-gradient(180deg, #8b5cf6, #7c3aed, #6d28d9)",
//                 borderRadius: "18px 0 0 18px",
//               }}
//             />
            
//             <div
//               style={{
//                 fontSize: "1.7rem",
//                 fontWeight: 900,
//                 color: "#FFFFFF",
//                 marginBottom: "8px",
//                 textShadow: "0 2px 8px rgba(139, 92, 246, 0.5)",
//                 lineHeight: "1.1",
//                 letterSpacing: "0.5px",
//               }}
//             >
//               ₹16,300 CRORE
//             </div>
//             <div
//               style={{
//                 color: "#E2E8F0",
//                 fontSize: "0.85rem",
//                 lineHeight: "1.5",
//                 paddingLeft: "12px",
//                 borderLeft: "2px solid rgba(139, 92, 246, 0.6)",
//                 fontWeight: 400,
//                 opacity: 0.9,
//               }}
//             >
           
// Union Government budgetary support
//  Focused on exploration, processing capacity, R&D, and strategic interventions
//             </div>
            
//             {/* Icon/Indicator */}
//             <div style={{
//               position: "absolute",
//               top: "15px",
//               right: "15px",
//               width: "24px",
//               height: "24px",
//               background: "rgba(139, 92, 246, 0.2)",
//               borderRadius: "50%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               border: "1px solid rgba(139, 92, 246, 0.4)",
//             }}>
//               <div style={{
//                 width: "8px",
//                 height: "8px",
//                 background: "#8b5cf6",
//                 borderRadius: "50%",
//               }} />
//             </div>
//           </div>

//           {/* Block 3 - Right Branch */}
//           <div
//             ref={(el) => (blocksRef.current[2] = el)}
//             className="mission-block mobile-full-width"
//             style={{
//               background: "linear-gradient(135deg, rgba(34, 197, 94, 0.18), rgba(22, 163, 74, 0.1))",
//               backdropFilter: "blur(12px)",
//               width: "46%",
//               borderRadius: "18px",
//               padding: "20px",
//               border: "1px solid rgba(255,255,255,0.15)",
//               boxShadow: "0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
//               position: "relative",
//               overflow: "hidden",
//               transitionDelay: "0.3s",
//               minHeight: "120px",
//               zIndex: 3,
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "6px",
//                 height: "100%",
//                 background: "linear-gradient(180deg, #22c55e, #16a34a, #15803d)",
//                 borderRadius: "18px 0 0 18px",
//               }}
//             />
            
//             <div
//               style={{
//                 fontSize: "1.7rem",
//                 fontWeight: 900,
//                 color: "#FFFFFF",
//                 marginBottom: "8px",
//                 textShadow: "0 2px 8px rgba(34, 197, 94, 0.5)",
//                 lineHeight: "1.1",
//                 letterSpacing: "0.5px",
//               }}
//             >
//               ₹18,000 CRORE
//             </div>
//             <div
//               style={{
//                 color: "#E2E8F0",
//                 fontSize: "0.85rem",
//                 lineHeight: "1.5",
//                 paddingLeft: "12px",
//                 borderLeft: "2px solid rgba(34, 197, 94, 0.6)",
//                 fontWeight: 400,
//                 opacity: 0.9,
//               }}
//             >
            
// Expected investment by PSUs and strategic partners
//  Includes mining, beneficiation, overseas asset acquisition, and refining projects
//             </div>
            
//             {/* Icon/Indicator */}
//             <div style={{
//               position: "absolute",
//               top: "15px",
//               right: "15px",
//               width: "24px",
//               height: "24px",
//               background: "rgba(34, 197, 94, 0.2)",
//               borderRadius: "50%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               border: "1px solid rgba(34, 197, 94, 0.4)",
//             }}>
//               <div style={{
//                 width: "8px",
//                 height: "8px",
//                 background: "#22c55e",
//                 borderRadius: "50%",
//               }} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CriticalMineralMission() {
  const blocksRef = useRef([]);
  
  // Add CSS animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.05); }
      }
      
      @keyframes float {
        0% { transform: translateY(0) translateX(0); opacity: 0.3; }
        25% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
        50% { transform: translateY(-40px) translateX(-10px); opacity: 0.7; }
        75% { transform: translateY(-20px) translateX(5px); opacity: 0.5; }
        100% { transform: translateY(0) translateX(0); opacity: 0.3; }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      .mission-block {
        animation: slideUp 0.5s ease forwards;
        opacity: 0;
        transition: all 0.3s ease;
      }
      
      .mission-block:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.3) !important;
      }
      
      .arrow-line {
        animation: fadeIn 0.8s ease forwards;
        opacity: 0;
        animation-delay: var(--delay);
      }
      
      @media (max-width: 768px) {
        .mobile-stack {
          flex-direction: column !important;
          align-items: center !important;
        }
        
        .mobile-full-width {
          width: 100% !important;
          margin-bottom: 15px;
        }
        
        .mobile-center {
          text-align: center;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Inter','Poppins',sans-serif",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a8a 30%, #0369a1 70%, #0d9488 100%)",
        minHeight: "530px",
        padding: "25px 20px",
        borderRadius: "10px",
        boxShadow:
          "0 15px 35px rgba(0,0,0,0.4), inset 0 0 20px rgba(255,255,255,0.08)",
        overflow: "hidden",
        margin: "0 auto",
        position: "relative",
        width: "100%",
        maxWidth: "1000px",
      }}
    >
      {/* Background effects */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 65%)",
          filter: "blur(15px)",
          animation: "pulse 6s infinite ease-in-out",
        }}
      ></div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: `rgba(255,255,255,${Math.random() * 0.3 + 0.1})`,
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 20 + 10}s infinite linear`,
            animationDelay: `${Math.random() * 5}s`,
            zIndex: 1,
          }}
        />
      ))}

      {/* TITLE */}
      <div className="mobile-center mx-auto " style={{ marginBottom: "30px", position: "relative", zIndex: 2 ,textAlign:"center"}}>
        <h2
          style={{
            color: "#FFFFFF",
            fontWeight: 800,
            fontSize: "1.4rem",
            marginBottom: "8px",
            textTransform: "uppercase",
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            letterSpacing: "0.8px",
            animation: "slideUp 0.8s ease forwards",
            lineHeight: "1.3",
          }}
        >
          National Critical Mineral Mission
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            fontWeight: 500,
            color: "#E2E8F0",
            margin: 0,
            opacity: 0.9,
            letterSpacing: "0.3px",
          }}
        >
          Budgetary & Strategic Investment Framework
        </p>
      </div>

      {/* Main container with arrows */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "0 10px",
        }}
      >
        {/* TOP CARD - Block 1 */}
        <div
          ref={(el) => (blocksRef.current[0] = el)}
          className="mission-block"
          style={{
            background: "linear-gradient(135deg, rgba(56, 189, 248, 0.18), rgba(14, 165, 233, 0.1))",
            backdropFilter: "blur(12px)",
            width: "92%",
            maxWidth: "600px",
            borderRadius: "18px",
            padding: "22px 25px",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
            margin: "0 auto 60px",
            position: "relative",
            overflow: "hidden",
            transitionDelay: "0.1s",
            minHeight: "100px",
            zIndex: 3,
          }}
        >
          {/* Left accent bar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "6px",
              height: "100%",
              background: "linear-gradient(180deg, #38bdf8, #0284c7, #0ea5e9)",
              borderRadius: "18px 0 0 18px",
            }}
          />
          
          {/* Glow effect */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "80%",
              background: "radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)",
              filter: "blur(20px)",
              zIndex: -1,
            }}
          />
          
          <div
            style={{
              fontSize: "2rem",
              fontWeight: 900,
              color: "#FFFFFF",
              marginBottom: "6px",
              textShadow: "0 2px 10px rgba(14, 165, 233, 0.5)",
              lineHeight: "1.1",
              letterSpacing: "0.5px",
            }}
          >
            ₹34,300 CRORE (USD 4.1 billion)
          </div>
          <div
            style={{
              color: "#E2E8F0",
              fontSize: "0.9rem",
              lineHeight: "1.5",
              paddingLeft: "12px",
              borderLeft: "2px solid rgba(56, 189, 248, 0.6)",
              fontWeight: 400,
              opacity: 0.9,
            }}
          >
            India's total investment envelope for Critical Minerals
          </div>
          
          {/* Decorative corner elements */}
          <div style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "20px",
            height: "20px",
            borderTop: "2px solid rgba(56, 189, 248, 0.4)",
            borderRight: "2px solid rgba(56, 189, 248, 0.4)",
            borderRadius: "0 10px 0 0",
          }} />
          <div style={{
            position: "absolute",
            bottom: "12px",
            left: "12px",
            width: "20px",
            height: "20px",
            borderBottom: "2px solid rgba(56, 189, 248, 0.4)",
            borderLeft: "2px solid rgba(56, 189, 248, 0.4)",
            borderRadius: "0 0 0 10px",
          }} />
        </div>

        {/* CONNECTOR ARROW from Top Card to Middle Line */}
        <div
          className="arrow-line"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: "calc(100px + 22px)", // Top card height + padding + margin
            width: "2px",
            height: "40px",
            background: "linear-gradient(180deg, #38bdf8, rgba(56, 189, 248, 0.3))",
            "--delay": "0.6s",
            zIndex: 2,
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "0",
              height: "0",
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: "12px solid #38bdf8",
              filter: "drop-shadow(0 2px 4px rgba(14, 165, 233, 0.5))",
            }}
          />
        </div>

        {/* BOTTOM ROW - Block 2 and Block 3 */}
        <div 
          className="d-flex justify-content-between mobile-stack"
          style={{ 
            position: "relative",
            padding: "40px 0 0",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Middle connector line */}
          <div
            className="arrow-line"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: "40px",
              width: "80%",
              maxWidth: "500px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
              "--delay": "0.8s",
              zIndex: 1,
            }}
          />
          
          {/* Branch connector from middle line to left card */}
          <div
            className="arrow-line"
            style={{
              position: "absolute",
              left: "25%",
              transform: "translateX(-50%)",
              top: "40px",
              width: "2px",
              height: "30px",
              background: "linear-gradient(180deg, rgba(255,255,255,0.2), #8b5cf6)",
              "--delay": "1s",
              zIndex: 1,
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "-8px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "0",
                height: "0",
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: "10px solid #8b5cf6",
                filter: "drop-shadow(0 2px 4px rgba(139, 92, 246, 0.5))",
              }}
            />
          </div>
          
          {/* Branch connector from middle line to right card */}
          <div
            className="arrow-line"
            style={{
              position: "absolute",
              left: "75%",
              transform: "translateX(-50%)",
              top: "40px",
              width: "2px",
              height: "30px",
              background: "linear-gradient(180deg, rgba(255,255,255,0.2), #22c55e)",
              "--delay": "1.1s",
              zIndex: 1,
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "-8px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "0",
                height: "0",
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: "10px solid #22c55e",
                filter: "drop-shadow(0 2px 4px rgba(34, 197, 94, 0.5))",
              }}
            />
          </div>

          {/* Block 2 - Left Branch */}
          <div
            ref={(el) => (blocksRef.current[1] = el)}
            className="mission-block mobile-full-width"
            style={{
              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.18), rgba(124, 58, 237, 0.1))",
              backdropFilter: "blur(12px)",
              width: "46%",
              borderRadius: "18px",
              padding: "20px",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              position: "relative",
              overflow: "hidden",
              transitionDelay: "0.2s",
              minHeight: "120px",
              zIndex: 3,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "6px",
                height: "100%",
                background: "linear-gradient(180deg, #8b5cf6, #7c3aed, #6d28d9)",
                borderRadius: "18px 0 0 18px",
              }}
            />
            
            <div
              style={{
                fontSize: "1.7rem",
                fontWeight: 900,
                color: "#FFFFFF",
                marginBottom: "8px",
                textShadow: "0 2px 8px rgba(139, 92, 246, 0.5)",
                lineHeight: "1.1",
                letterSpacing: "0.5px",
              }}
            >
              ₹16,300 CRORE (USD 2.0 billion)
            </div>
            <div
              style={{
                color: "#E2E8F0",
                fontSize: "0.85rem",
                lineHeight: "1.5",
                paddingLeft: "12px",
                borderLeft: "2px solid rgba(139, 92, 246, 0.6)",
                fontWeight: 400,
                opacity: 0.9,
              }}
            >
           
Union Government budgetary support
 Focused on exploration, processing capacity, R&D, and strategic interventions
            </div>
            
            {/* Icon/Indicator */}
            <div style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              width: "24px",
              height: "24px",
              background: "rgba(139, 92, 246, 0.2)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(139, 92, 246, 0.4)",
            }}>
              <div style={{
                width: "8px",
                height: "8px",
                background: "#8b5cf6",
                borderRadius: "50%",
              }} />
            </div>
          </div>

          {/* Block 3 - Right Branch */}
          <div
            ref={(el) => (blocksRef.current[2] = el)}
            className="mission-block mobile-full-width"
            style={{
              background: "linear-gradient(135deg, rgba(34, 197, 94, 0.18), rgba(22, 163, 74, 0.1))",
              backdropFilter: "blur(12px)",
              width: "46%",
              borderRadius: "18px",
              padding: "20px",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              position: "relative",
              overflow: "hidden",
              transitionDelay: "0.3s",
              minHeight: "120px",
              zIndex: 3,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "6px",
                height: "100%",
                background: "linear-gradient(180deg, #22c55e, #16a34a, #15803d)",
                borderRadius: "18px 0 0 18px",
              }}
            />
            
            <div
              style={{
                fontSize: "1.7rem",
                fontWeight: 900,
                color: "#FFFFFF",
                marginBottom: "8px",
                textShadow: "0 2px 8px rgba(34, 197, 94, 0.5)",
                lineHeight: "1.1",
                letterSpacing: "0.5px",
              }}
            >
              ₹18,000 CRORE (USD 2.2 billion)
            </div>
            <div
              style={{
                color: "#E2E8F0",
                fontSize: "0.85rem",
                lineHeight: "1.5",
                paddingLeft: "12px",
                borderLeft: "2px solid rgba(34, 197, 94, 0.6)",
                fontWeight: 400,
                opacity: 0.9,
              }}
            >
            
Expected investment by PSUs and strategic partners
 Includes mining, beneficiation, overseas asset acquisition, and refining projects
            </div>
            
            {/* Icon/Indicator */}
            <div style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              width: "24px",
              height: "24px",
              background: "rgba(34, 197, 94, 0.2)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(34, 197, 94, 0.4)",
            }}>
              <div style={{
                width: "8px",
                height: "8px",
                background: "#22c55e",
                borderRadius: "50%",
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
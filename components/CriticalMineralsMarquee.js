// import { useEffect, useRef, useState } from "react";

// export default function CriticalMineralsMarquee() {
//   const marqueeRef = useRef(null);
//   const contentRef = useRef(null);
//   const animationRef = useRef(null);
//   const positionRef = useRef(0);
//   const lastTimeRef = useRef(0);
//   const speed = 40;

//   const [hoveredItem, setHoveredItem] = useState(null);
//   const [isPaused, setIsPaused] = useState(false);

//   const mineralsData = [
//     { name: "Copper", price: 13.125, change: 0.001, previous: 13.112 },
//     { name: "Aluminium", price: 3.129, change: -0.015, previous: 3.175 },
//     { name: "Cobalt", price: 56.29, change: 0.0, previous: 56.29 },
//     { name: "Gallium", price: 261.04, change: 0.054, previous: 247.69 },
//     { name: "Indium", price: 629.1, change: 0.234, previous: 509.74 },
//     { name: "Lithium", price: 19.66, change: -0.199, previous: 24.55 },
//     { name: "Nickel", price: 17.55, change: -0.062, previous: 18.71 },
//     { name: "Palladium", price: 55460.04, change: -0.149, previous: 65185.64 },
//     { name: "Silver", price: 2596.3, change: -0.216, previous: 3309.81 },
//     { name: "Tin", price: 49.09, change: -0.136, previous: 56.816 },
//     { name: "Uranium", price: 190.15, change: 0.001, previous: 190.04 },
//     { name: "Zinc", price: 3.392, change: 0.034, previous: 3.279 },
//   ];

//   useEffect(() => {
//     const animate = (time) => {
//       if (!lastTimeRef.current) lastTimeRef.current = time;
//       const delta = time - lastTimeRef.current;

//       if (!isPaused && contentRef.current) {
//         positionRef.current += (delta * speed) / 1000;

//         if (positionRef.current >= contentRef.current.scrollWidth / 2) {
//           positionRef.current = 0;
//         }

//         contentRef.current.style.transform = `translateX(-${positionRef.current}px)`;
//       }

//       lastTimeRef.current = time;
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animationRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationRef.current);
//   }, [isPaused]);

//   return (
//     <div style={styles.wrapper}>
//       <div
//         ref={marqueeRef}
//         style={styles.marqueeContainer}
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//       >
//         <div ref={contentRef} style={styles.marquee}>
//           {[...mineralsData, ...mineralsData].map((item, i) => {
//             const isUp = item.change > 0;
//             const isDown = item.change < 0;

//             return (
//               <div
//                 key={i}
//                 style={styles.item}
//                 onMouseEnter={() => setHoveredItem(item)}
//                 onMouseLeave={() => setHoveredItem(null)}
//               >
//                 <span style={styles.name}>{item.name}</span>
//                 <span style={styles.price}>
//                   ${item.price.toLocaleString()}
//                 </span>

//                 <span
//                   style={{
//                     ...styles.change,
//                     color: isUp
//                       ? "#16a34a"
//                       : isDown
//                       ? "#dc2626"
//                       : "#9ca3af",
//                   }}
//                 >
//                   {isUp ? "▲" : isDown ? "▼" : "–"} {item.change}%
//                 </span>
//               </div>
//             );
//           })}
//         </div>

//         {/* Hover Popup */}
//         {hoveredItem && <PopupCard item={hoveredItem} />}

//         <div style={styles.fadeLeft} />
//         <div style={styles.fadeRight} />

//         {/* Right End Button */}
//         <button style={styles.priceButton}>
//           Price in $ per Kg
//         </button>
//       </div>
//     </div>
//   );
// }

// /* ===========================
//    POPUP COMPONENT
// =========================== */

// function PopupCard({ item }) {
//   const yoy =
//     ((item.price - item.previous) / item.previous) * 100;

//   const isUp = yoy > 0;
//   const isDown = yoy < 0;

//   return (
//     <div style={styles.popup}>
//       <div style={styles.popupHeader}>
//         {item.name} Index
//       </div>

//       <div style={styles.popupBody}>
//         <div>
//           <strong>Current:</strong> ${item.price}
//         </div>

//         <div style={{ marginTop: 8 }}>
//           <strong>YOY:</strong>{" "}
//           <span
//             style={{
//               color: isUp
//                 ? "#16a34a"
//                 : isDown
//                 ? "#dc2626"
//                 : "#9ca3af",
//             }}
//           >
//             {isUp ? "🡡" : isDown ? "🡣" : "–"}{" "}
//             {yoy.toFixed(2)}%
//           </span>
//         </div>

//         <div style={{ marginTop: 8 }}>
//           <strong>2WK:</strong>{" "}
//           <span
//             style={{
//               color:
//                 item.change > 0
//                   ? "#16a34a"
//                   : item.change < 0
//                   ? "#dc2626"
//                   : "#9ca3af",
//             }}
//           >
//             {item.change > 0
//               ? "🡡"
//               : item.change < 0
//               ? "🡣"
//               : "–"}{" "}
//             {(item.change * 100).toFixed(2)}%
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ===========================
//    STYLES
// =========================== */

// const styles = {
//   wrapper: {
//     width: "100%",
//     background: "#111827",
//     color: "#fff",
//     height: "50px",
//     display: "flex",
//     alignItems: "center",
//     overflow: "hidden",
//     position: "relative",
//   },

//   marqueeContainer: {
//     width: "100%",
//     overflow: "hidden",
//     position: "relative",
//   },

//   marquee: {
//     display: "flex",
//     gap: "40px",
//     whiteSpace: "nowrap",
//     willChange: "transform",
//     paddingLeft: "20px",
//   },

//   item: {
//     cursor: "pointer",
//     display: "flex",
//     gap: "10px",
//     fontWeight: 600,
//   },

//   name: {
//     color: "#e5e7eb",
//   },

//   price: {
//     color: "#fff",
//   },

//   change: {
//     fontWeight: 700,
//   },

//   popup: {
//     position: "absolute",
//     top: "60px",
//     left: "30%",
//     width: "280px",
//     background: "#1f2937",
//     borderRadius: "10px",
//     boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
//     zIndex: 10,
//     overflow: "hidden",
//   },

//   popupHeader: {
//     padding: "12px",
//     background: "#111827",
//     fontWeight: 700,
//     fontSize: "16px",
//   },

//   popupBody: {
//     padding: "15px",
//     fontSize: "14px",
//   },

//   fadeLeft: {
//     position: "absolute",
//     left: 0,
//     top: 0,
//     width: "50px",
//     height: "100%",
//     background:
//       "linear-gradient(90deg,#111827 0%,rgba(17,24,39,0) 100%)",
//   },

//   fadeRight: {
//     position: "absolute",
//     right: 0,
//     top: 0,
//     width: "50px",
//     height: "100%",
//     background:
//       "linear-gradient(270deg,#111827 0%,rgba(17,24,39,0) 100%)",
//   },

// priceButton: {
//   position: "absolute",
//   right: "12px",
//   top: "50%",
//   transform: "translateY(-50%)",
//   background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
//   color: "#ffffff",
//   border: "none",
//   padding: "7px 16px",
//   borderRadius: "20px", // halka sa zyada rounded
//   fontWeight: 600,
//   fontSize: "13px",
//   cursor: "pointer",
//   zIndex: 20,
//   whiteSpace: "nowrap",
//   boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
//   transition: "all 0.3s ease",
// },

// };


import { useEffect, useRef, useState } from "react";

export default function CriticalMineralsMarquee() {
  const marqueeRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const lastTimeRef = useRef(0);
  const speed = 40;

  const [hoveredItem, setHoveredItem] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const mineralsData = [
    { name: "Copper", price: 13.125, change: 0.001, previous: 13.112 },
    { name: "Aluminium", price: 3.129, change: -0.015, previous: 3.175 },
    { name: "Cobalt", price: 56.29, change: 0.0, previous: 56.29 },
    { name: "Gallium", price: 261.04, change: 0.054, previous: 247.69 },
    { name: "Indium", price: 629.1, change: 0.234, previous: 509.74 },
    { name: "Lithium", price: 19.66, change: -0.199, previous: 24.55 },
    { name: "Nickel", price: 17.55, change: -0.062, previous: 18.71 },
    { name: "Palladium", price: 55460.04, change: -0.149, previous: 65185.64 },
    { name: "Silver", price: 2596.3, change: -0.216, previous: 3309.81 },
    { name: "Tin", price: 49.09, change: -0.136, previous: 56.816 },
    { name: "Uranium", price: 190.15, change: 0.001, previous: 190.04 },
    { name: "Zinc", price: 3.392, change: 0.034, previous: 3.279 },
  ];

  useEffect(() => {
    const animate = (time) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;

      if (!isPaused && contentRef.current) {
        positionRef.current += (delta * speed) / 1000;

        if (positionRef.current >= contentRef.current.scrollWidth / 2) {
          positionRef.current = 0;
        }

        contentRef.current.style.transform = `translateX(-${positionRef.current}px)`;
      }

      lastTimeRef.current = time;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused]);

  return (
    <div style={styles.wrapper}>
      <div
        ref={marqueeRef}
        style={styles.marqueeContainer}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div ref={contentRef} style={styles.marquee}>
          {[...mineralsData, ...mineralsData].map((item, i) => {
            const isUp = item.change > 0;
            const isDown = item.change < 0;

            return (
              <div
                key={i}
                style={styles.item}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span style={styles.name}>{item.name}</span>
                <span style={styles.price}>
                  ${item.price.toLocaleString()}
                </span>

                <span
                  style={{
                    ...styles.change,
                    color: isUp
                      ? "#16a34a"
                      : isDown
                      ? "#dc2626"
                      : "#9ca3af",
                  }}
                >
                  {isUp ? "▲" : isDown ? "▼" : "–"} {item.change}%
                </span>
              </div>
            );
          })}
        </div>

        {/* Hover Popup */}
        {hoveredItem && <PopupCard item={hoveredItem} />}

        <div style={styles.fadeLeft} />
        <div style={styles.fadeRight} />

        {/* Right End Fixed Text - Price in $ per kg */}
        <div style={styles.priceText}>
          Price in $ per kg
        </div>
      </div>
    </div>
  );
}

/* ===========================
   POPUP COMPONENT
=========================== */

function PopupCard({ item }) {
  const yoy =
    ((item.price - item.previous) / item.previous) * 100;

  const isUp = yoy > 0;
  const isDown = yoy < 0;

  return (
    <div style={styles.popup}>
      <div style={styles.popupHeader}>
        {item.name} Index
      </div>

      <div style={styles.popupBody}>
        <div>
          <strong>Current:</strong> ${item.price}
        </div>

        <div style={{ marginTop: 8 }}>
          <strong>YOY:</strong>{" "}
          <span
            style={{
              color: isUp
                ? "#16a34a"
                : isDown
                ? "#dc2626"
                : "#9ca3af",
            }}
          >
            {isUp ? "🡡" : isDown ? "🡣" : "–"}{" "}
            {yoy.toFixed(2)}%
          </span>
        </div>

        <div style={{ marginTop: 8 }}>
          <strong>2WK:</strong>{" "}
          <span
            style={{
              color:
                item.change > 0
                  ? "#16a34a"
                  : item.change < 0
                  ? "#dc2626"
                  : "#9ca3af",
            }}
          >
            {item.change > 0
              ? "🡡"
              : item.change < 0
              ? "🡣"
              : "–"}{" "}
            {(item.change * 100).toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
}

/* ===========================
   STYLES
=========================== */

const styles = {
  wrapper: {
    width: "100%",
    background: "#111827",
    color: "#fff",
    height: "50px",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },

  marqueeContainer: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },

  marquee: {
    display: "flex",
    gap: "40px",
    whiteSpace: "nowrap",
    willChange: "transform",
    paddingLeft: "20px",
  },

  item: {
    cursor: "pointer",
    display: "flex",
    gap: "10px",
    fontWeight: 600,
  },

  name: {
    color: "#e5e7eb",
  },

  price: {
    color: "#fff",
  },

  change: {
    fontWeight: 700,
  },

  popup: {
    position: "absolute",
    top: "60px",
    left: "30%",
    width: "280px",
    background: "#1f2937",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    zIndex: 10,
    overflow: "hidden",
  },

  popupHeader: {
    padding: "12px",
    background: "#111827",
    fontWeight: 700,
    fontSize: "16px",
  },

  popupBody: {
    padding: "15px",
    fontSize: "14px",
  },

  fadeLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "50px",
    height: "100%",
    background:
      "linear-gradient(90deg,#111827 0%,rgba(17,24,39,0) 100%)",
    zIndex: 5,
  },

  fadeRight: {
    position: "absolute",
    right: 0,
    top: 0,
    width: "50px",
    height: "100%",
    background:
      "linear-gradient(270deg,#111827 0%,rgba(17,24,39,0) 100%)",
    zIndex: 5,
  },

  priceText: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    color: "#ffffff",
    fontWeight: 700,
    fontSize: "14px",
    zIndex: 20,
    whiteSpace: "nowrap",
    background: "#111827",
    padding: "0 5px",
    borderLeft: "2px solid #374151",
    letterSpacing: "0.1px",
  },
};
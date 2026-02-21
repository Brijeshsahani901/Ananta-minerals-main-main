import { useEffect, useRef } from "react";

export default function CriticalMineralsMarquee() {
  const marqueeRef = useRef(null);
  const marqueeContentRef = useRef(null);
  const animationRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const scrollSpeedRef = useRef(40);
  const isPausedRef = useRef(false);
  const lastTimestampRef = useRef(0);
  
  // All metals from your dropdown list with price data
  const allMetals = [
    { name: "Aluminium", code: "AL", price: "$3.1024/kg", trend: "up", change: "+2.3%" },
    { name: "Cobalt", code: "CO", price: "$56.290/kg", trend: "same", change: "0.0%" },
    { name: "Copper", code: "CU", price: "$13.011/kg", trend: "up", change: "+1.7%" },
    { name: "Gallium", code: "GA", price: "$261.04/kg", trend: "up", change: "+5.2%" },
    { name: "Gold", code: "AU", price: "$161171.69/kg", trend: "up", change: "+0.8%" },
    { name: "Indium", code: "IN", price: "$629.10/kg", trend: "down", change: "-1.4%" },
    { name: "Iridium", code: "IR", price: "$144678.36/kg", trend: "same", change: "0.0%" },
    { name: "Iron Ore", code: "FE", price: "$0.1006/kg", trend: "down", change: "-0.5%" },
    { name: "Lead", code: "PB", price: "$1.9780/kg", trend: "up", change: "+1.2%" },
    { name: "Lithium", code: "LI", price: "$19.669/kg", trend: "up", change: "+3.8%" },
    { name: "Molybdenum", code: "MO", price: "$73.757/kg", trend: "up", change: "+2.1%" },
    { name: "Neodymium", code: "ND", price: "$154.02/kg", trend: "down", change: "-0.7%" },
    { name: "Nickel", code: "NI", price: "$17.550/kg", trend: "up", change: "+0.9%" },
    { name: "Palladium", code: "PD", price: "$55460.04/kg", trend: "same", change: "0.0%" },
    { name: "Platinum", code: "PT", price: "$67005.37/kg", trend: "up", change: "+0.5%" },
    { name: "Rhodium", code: "RH", price: "$334367.76/kg", trend: "down", change: "-1.2%" },
    { name: "Ruthenium", code: "RU", price: "$29257.18/kg", trend: "up", change: "+0.3%" },
    { name: "Silver", code: "AG", price: "$2596.30/kg", trend: "up", change: "+2.1%" },
    { name: "Steel Rebar", code: "ST", price: "$0.4414/kg", trend: "same", change: "0.0%" },
    { name: "Tellurium", code: "TE", price: "$109.91/kg", trend: "up", change: "+3.5%" },
    { name: "Tin", code: "SN", price: "$49.098/kg", trend: "down", change: "-0.9%" },
    { name: "Uranium", code: "U", price: "$190.15/kg", trend: "down", change: "-0.8%" },
    { name: "Zinc", code: "ZN", price: "$3.3921/kg", trend: "up", change: "+1.2%" },
  ];

// useEffect(() => {
//   const content = marqueeContentRef.current;
//   if (!content) return;

//   const items = content.children;
//   let totalWidth = 0;

//   for (let i = 0; i < items.length / 2; i++) {
//     const item = items[i];
//     const style = window.getComputedStyle(item);
//     totalWidth += item.offsetWidth +
//       parseFloat(style.marginLeft) +
//       parseFloat(style.marginRight);
//   }

//   const animate = (timestamp) => {
//     if (!lastTimestampRef.current) {
//       lastTimestampRef.current = timestamp;
//     }

//     if (!isPausedRef.current) {
//       const elapsed = timestamp - lastTimestampRef.current;
//       const move = (elapsed * scrollSpeedRef.current) / 1000;

//       scrollPositionRef.current += move;

//       if (scrollPositionRef.current >= totalWidth) {
//         scrollPositionRef.current = 0;
//       }

//       content.style.transform = `translateX(-${scrollPositionRef.current}px)`;
//     }

//     lastTimestampRef.current = timestamp;
//     animationRef.current = requestAnimationFrame(animate);
//   };

//   animationRef.current = requestAnimationFrame(animate);

//   return () => cancelAnimationFrame(animationRef.current);
// }, []);


useEffect(() => {
  const marquee = marqueeRef.current;
  const content = marqueeContentRef.current;
  if (!marquee || !content) return;

  const items = content.children;
  let totalWidth = 0;

  // Calculate width of only first set
  for (let i = 0; i < items.length / 2; i++) {
    const item = items[i];
    const style = window.getComputedStyle(item);
    totalWidth +=
      item.offsetWidth +
      parseFloat(style.marginLeft) +
      parseFloat(style.marginRight);
  }

  const animate = (timestamp) => {
    if (!lastTimestampRef.current) {
      lastTimestampRef.current = timestamp;
    }

    const delta = timestamp - lastTimestampRef.current;

    if (!isPausedRef.current) {
      scrollPositionRef.current +=
        (delta * scrollSpeedRef.current) / 1000;

      if (scrollPositionRef.current >= totalWidth) {
        scrollPositionRef.current = 0;
      }

      content.style.transform = `translateX(-${scrollPositionRef.current}px)`;
    }

    lastTimestampRef.current = timestamp;
    animationRef.current = requestAnimationFrame(animate);
  };

  animationRef.current = requestAnimationFrame(animate);

  // ✅ Hover pause
  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
    lastTimestampRef.current = performance.now(); // prevents jump
  };

  marquee.addEventListener("mouseenter", handleMouseEnter);
  marquee.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    cancelAnimationFrame(animationRef.current);
    marquee.removeEventListener("mouseenter", handleMouseEnter);
    marquee.removeEventListener("mouseleave", handleMouseLeave);
  };
}, []);


  return (
    <div style={styles.wrapper}>
      {/* Marquee Section */}
      <div ref={marqueeRef} style={styles.marqueeContainer}>
        <div ref={marqueeContentRef} style={styles.marquee}>
          {[...allMetals, ...allMetals].map((item, index) => (
            <div key={index} style={styles.tickerItem}>
              <div style={styles.tickerContent}>
                {/* Mineral Name & Price in single box */}
                <span style={styles.mineralName}>{item.name}</span>
                <span style={styles.priceValue}>${item.price}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient Overlays */}
        <div style={styles.fadeLeft}></div>
        <div style={styles.fadeRight}></div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    background: "#0a0f1f",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    overflow: "hidden",
    position: "relative",
    height: "36px",
    display: "flex",
    alignItems: "center",
  },
  
  marqueeContainer: {
    position: "relative",
    overflow: "hidden",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  
  marquee: {
    display: "flex",
    willChange: "transform",
    height: "100%",
    alignItems: "center",
    padding: "0 4px",
    whiteSpace: "nowrap",
    // Double width will be set dynamically in useEffect
  },
  
  tickerItem: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    margin: "0 8px", // Increased margin to prevent overlapping
    flexShrink: 0,
  },
  
  tickerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px", // Increased gap for better spacing
    padding: "6px 16px", // Slightly larger padding
    background: "rgba(15, 23, 42, 0.9)",
    borderRadius: "8px",
    border: "1px solid rgba(51, 65, 85, 0.5)",
    height: "28px",
    minWidth: "fit-content",
    backdropFilter: "blur(4px)",
    transition: "all 0.2s ease",
    
    ":hover": {
      background: "rgba(30, 41, 59, 0.95)",
      borderColor: "rgba(59, 130, 246, 0.6)",
      transform: "translateY(-1px)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    },
  },
  
  mineralName: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#f8fafc",
    letterSpacing: "0.1px",
    whiteSpace: "nowrap",
  },
  
  priceValue: {
    fontSize: "12px",
    fontWeight: 700,
    color: "#ffffff",
    fontFamily: "'Roboto Mono', monospace",
    letterSpacing: "-0.1px",
    whiteSpace: "nowrap",
  },
  
  fadeLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "80px",
    height: "100%",
    background: "linear-gradient(90deg, #0a0f1f 20%, transparent 100%)",
    pointerEvents: "none",
    zIndex: 2,
  },
  
  fadeRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "80px",
    height: "100%",
    background: "linear-gradient(270deg, #0a0f1f 20%, transparent 100%)",
    pointerEvents: "none",
    zIndex: 2,
  },
};
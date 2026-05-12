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
  { name: "Copper", price: 13.29, change: 2.074, previous: 13.020 },
  { name: "Aluminium", price: 3.58, change: 5.917, previous: 3.380 },
  { name: "Cobalt", price: 56.290, change: 0.000, previous: 56.290 },
  { name: "Gallium", price: 304.13, change: 8.606, previous: 280.030 },
  { name: "Indium", price: 637.6, change: -7.724, previous: 690.970 },
  { name: "Lithium", price: 25.38, change: 6.639, previous: 23.800 },
  { name: "Nickel", price: 19.6, change: 11.427, previous: 17.590 },
  { name: "Palladium", price: 47759.93, change: -12.592, previous: 54640.190 },
  { name: "Silver", price: 2422.24, change: -15.390, previous: 2862.830 },
  { name: "Tin", price: 50.33, change: -0.691, previous: 50.680 },
  { name: "Uranium", price: 191.36, change: 1.046, previous: 189.380 },
  { name: "Zinc", price: 3.4, change: 1.493, previous: 3.350 },
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
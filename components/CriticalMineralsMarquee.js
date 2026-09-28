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
  {
    name: "Aluminium",
    price: 3.26,
    change: 0.62,
    previous: 3.24,
  },
  {
    name: "Cobalt",
    price: 39.77,
    change: -29.35,
    previous: 56.29,
  },
  {
    name: "Copper",
    price: 14.75,
    change: 1.58,
    previous: 14.52,
  },
  {
    name: "Gallium",
    price: 262.85,
    change: -2.31,
    previous: 269.07,
  },
  {
    name: "Indium",
    price: 787.81,
    change: -3.38,
    previous: 815.38,
  },
  {
    name: "Lithium",
    price: 20.07,
    change: -8.23,
    previous: 21.87,
  },
  {
    name: "Molybdenum",
    price: 92.67,
    change: 1.23,
    previous: 91.54,
  },
  {
    name: "Neodymium",
    price: 141.88,
    change: 0.21,
    previous: 141.58,
  },
  {
    name: "Nickel",
    price: 16.38,
    change: -2.33,
    previous: 16.77,
  },
  {
    name: "Palladium",
    price: 42262.16,
    change: -0.49,
    previous: 42471.14,
  },
  {
    name: "Silver",
    price: 2117.77,
    change: 1.87,
    previous: 2078.87,
  },
  {
    name: "Tellurium",
    price: 119.25,
    change: -0.08,
    previous: 119.34,
  },
  {
    name: "Tin",
    price: 53.7,
    change: -3.8,
    previous: 55.82,
  },
  {
    name: "Uranium",
    price: 197.75,
    change: 2.93,
    previous: 192.13,
  },
  {
    name: "Zinc",
    price: 3.92,
    change: 4.81,
    previous: 3.74,
  },
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
                <span style={styles.price}>${item.price.toLocaleString()}</span>

                <span
                  style={{
                    ...styles.change,
                    color: isUp ? "#16a34a" : isDown ? "#dc2626" : "#9ca3af",
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
        <div style={styles.priceText}>Price in $ per kg</div>
      </div>
    </div>
  );
}

/* ===========================
   POPUP COMPONENT
=========================== */

function PopupCard({ item }) {
  const yoy = ((item.price - item.previous) / item.previous) * 100;

  const isUp = yoy > 0;
  const isDown = yoy < 0;

  return (
    <div style={styles.popup}>
      <div style={styles.popupHeader}>{item.name} Index</div>

      <div style={styles.popupBody}>
        <div>
          <strong>Current:</strong> ${item.price}
        </div>

        <div style={{ marginTop: 8 }}>
          <strong>YOY:</strong>{" "}
          <span
            style={{
              color: isUp ? "#16a34a" : isDown ? "#dc2626" : "#9ca3af",
            }}
          >
            {isUp ? "🡡" : isDown ? "🡣" : "–"} {yoy.toFixed(2)}%
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
            {item.change > 0 ? "🡡" : item.change < 0 ? "🡣" : "–"}{" "}
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
    background: "linear-gradient(90deg,#111827 0%,rgba(17,24,39,0) 100%)",
    zIndex: 5,
  },

  fadeRight: {
    position: "absolute",
    right: 0,
    top: 0,
    width: "50px",
    height: "100%",
    background: "linear-gradient(270deg,#111827 0%,rgba(17,24,39,0) 100%)",
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

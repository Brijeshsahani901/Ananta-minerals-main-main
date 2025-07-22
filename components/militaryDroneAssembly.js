import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import {
  FaAccessibleIcon,
  FaBrain,
  FaCogs,
  FaFlask,
  FaChargingStation,
} from "react-icons/fa";
import { gsap } from "gsap";

export default function MilitaryDronesWithGsapTilt() {
  const [activeStep, setActiveStep] = React.useState(1);
  const [hoveredStep, setHoveredStep] = React.useState(null);
  const cardRefs = React.useRef({}); // To store refs of cards

  const icons = {
    1: <FaAccessibleIcon size={28} color="#68d8c0" />,
    2: <FaBrain size={28} color="#68d8c0" />,
    3: <FaCogs size={28} color="#68d8c0" />,
    4: <FaFlask size={28} color="#68d8c0" />,
    5: <FaChargingStation size={28} color="#68d8c0" />,
  };

  const steps = [
    { id: 1, title: "Frame Fabrication" },
    { id: 2, title: "Motor & Propeller Production" },
    { id: 3, title: "Avionics & Electronics Production" },
    { id: 4, title: "Battery-Pack Assembly" },
    { id: 5, title: "Software & Flight-Control R&D" },
  ];

  const stepDetails = {
    1: [
      "Aluminium — DJI sky city Frame shop, Shenzhen, China",
      "Titanium — Aerovironment, Inc., Simi Valley, USA",
      "Samarium — Pomrot SA, Paris, France",
      "Niobium — Ebit Systems Ltd., Haifa, Israel",
    ],
    2: [
      "Neodymium — T-MOTOR, Nanchang, China",
      "Boron — Aerovironment, Inc., Simi Valley, USA",
      "Iron & Cobalt — Pomrot SA, Paris, France",
      "Cobalt — Ebit Systems Ltd., Haifa, Israel",
    ],
    3: [
      "Gallium & Germanium — DJI, Shenzhen, China",
      "Indium & Tantalum — Skylab, Inc., USA",
      "Silver, Gold & Copper — Pomrot SA, France",
      "Tungsten — Ebit Systems Ltd., Israel",
    ],
    4: [
      "Lithium — Tesla Gigabattery, Nevada, USA",
      "Cobalt, Nickel, Manganese — Indonesia/CATL, West Java",
      "Graphite — Saft Groupe S.A., France",
      "Synthetic Graphite — Custom Cells, Israel",
    ],
    5: [
      "DJI — Shenzhen, China",
      "Aerovironment — Simi Valley, USA",
      "Pomrot SA — Paris, France",
      "Ebit Systems Ltd. — Haifa, Israel",
    ],
  };

  // Handle mouse move for tilt effect
  const handleMouseMove = (e, id) => {
    const card = cardRefs.current[id];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const cardWidth = rect.width;
    const cardHeight = rect.height;

    // Calculate mouse position relative to center (-1 to 1)
    const x = ((e.clientX - rect.left) / cardWidth) * 2 - 1;
    const y = ((e.clientY - rect.top) / cardHeight) * 2 - 1;

    // Max rotation angles
    const maxRotateX = 25; // degrees
    const maxRotateY = 25;

    gsap.to(card, {
      duration: 0.3,
      rotationX: -y * maxRotateX,
      rotationY: x * maxRotateY,
      scale: 1.05,
      ease: "power3.out",
      transformPerspective: 600,
      transformOrigin: "center",
      boxShadow:
        "0 20px 40px rgba(0,0,0,0.25), 0 12px 20px rgba(0,0,0,0.15)",
      overwrite: "auto",
    });
  };

  // Reset card tilt on mouse leave
  const handleMouseLeave = (id) => {
    const card = cardRefs.current[id];
    if (!card) return;

    gsap.to(card, {
      duration: 0.5,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      ease: "power3.out",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      overwrite: "auto",
    });

    setHoveredStep(null);
  };

  // On mouse enter, show snackbar info
  const handleMouseEnter = (id) => {
    setHoveredStep(id);
  };

  // Keyboard focus effects
  const handleFocus = (id) => {
    setHoveredStep(id);
    const card = cardRefs.current[id];
    if (!card) return;

    gsap.to(card, {
      duration: 0.4,
      rotationX: 0,
      rotationY: 0,
      scale: 1.05,
      ease: "power3.out",
      boxShadow:
        "0 20px 40px rgba(0,0,0,0.25), 0 12px 20px rgba(0,0,0,0.15)",
      overwrite: "auto",
    });
  };

  const handleBlur = (id) => {
    const card = cardRefs.current[id];
    if (!card) return;

    gsap.to(card, {
      duration: 0.4,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      ease: "power3.out",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      overwrite: "auto",
    });

    setHoveredStep(null);
  };

  return (
    <div
      style={{
        maxWidth: 960,
        margin: "auto",
        padding: 20,
        background: "#e8f0f2",
        borderRadius: 16,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        userSelect: "none",
        position: "relative",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: 40,
          color: "#234e52",
          fontWeight: "700",
          textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        Military Drones Assembly Timeline
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        {steps.map(({ id, title }) => {
          const isActive = id === activeStep;
          return (
            <div
              key={id}
              ref={(el) => {
                if (el) {
                  cardRefs.current[id] = el;
                }
              }}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
              aria-label={`Select step ${id}: ${title}`}
              onClick={() => setActiveStep(id)}
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseMove={(e) => handleMouseMove(e, id)}
              onMouseLeave={() => handleMouseLeave(id)}
              onFocus={() => handleFocus(id)}
              onBlur={() => handleBlur(id)}
              style={{
                cursor: "pointer",
                borderRadius: 20,
                padding: 24,
                width: 180,
                background: isActive
                  ? "linear-gradient(145deg, #3f8e7d, #3a786d)"
                  : "linear-gradient(145deg, #ffffff, #e6e6e6)",
                color: isActive ? "#ffffff" : "#1f2d3d",
                boxShadow: isActive
                  ? "0 12px 24px rgba(63, 142, 125, 0.4)"
                  : "0 8px 20px rgba(0, 0, 0, 0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                userSelect: "none",
                transformStyle: "preserve-3d",
                willChange: "transform",
                transition: "all 0.35s ease",
                outline: "none",
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: isActive
                    ? "radial-gradient(circle at 30% 30%, #1e3a3a, #234e52)"
                    : "radial-gradient(circle at 30% 30%, #e0f7f6, #b2e1df)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: isActive
                    ? "0 4px 10px rgba(0, 0, 0, 0.5), inset 0 0 8px #68d8c0"
                    : "0 4px 8px rgba(44, 122, 123, 0.3)",
                  transition: "all 0.3s ease",
                  flexShrink: 0,
                }}
              >
                {icons[id]}
              </div>
              <div
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  fontWeight: "600",
                  userSelect: "none",
                  textShadow: isActive
                    ? "0 0 5px rgba(255, 255, 255, 0.3)"
                    : "none",
                }}
              >
                {title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Snackbar at top left */}
      <Snackbar
        open={hoveredStep !== null}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        autoHideDuration={null}
        onClose={() => setHoveredStep(null)}
        sx={{ pointerEvents: "none" }}
      >
        {hoveredStep !== null && (
          <Alert
            severity="success"
            variant="filled"
            onClose={() => setHoveredStep(null)}
            sx={{
              pointerEvents: "auto",
              minWidth: 320,
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              userSelect: "text",
              backgroundColor: "#0d2a47",
              color: "#ffffff",
              boxShadow:
                "0 8px 20px rgba(0,0,0,0.3), inset 0 0 10px #1a3c6e",
            }}
          >
            <strong>{steps.find((s) => s.id === hoveredStep).title}</strong>
            <ul
              style={{
                paddingLeft: 20,
                marginTop: 8,
                marginBottom: 0,
                userSelect: "text",
              }}
            >
              {stepDetails[hoveredStep].map((item, idx) => (
                <li key={idx} style={{ marginBottom: 4 }}>
                  {item}
                </li>
              ))}
            </ul>
          </Alert>
        )}
      </Snackbar>
    </div>
  );
}

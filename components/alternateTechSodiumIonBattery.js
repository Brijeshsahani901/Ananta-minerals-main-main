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

export default function AlternateTechSodiumIonSupplyChain() {
  const [activeStep, setActiveStep] = React.useState(null);
  const [hoveredStep, setHoveredStep] = React.useState(null);
  const [snackbarHovered, setSnackbarHovered] = React.useState(false);
  const cardRefs = React.useRef({});

  const icons = {
    1: <FaAccessibleIcon size={28} color="#c38d41" />,
    2: <FaBrain size={28} color="#c38d41" />,
    3: <FaCogs size={28} color="#c38d41" />,
    4: <FaFlask size={28} color="#c38d41" />,
    5: <FaChargingStation size={28} color="#c38d41" />,
  };

  const iconsWhite = {
    1: <FaAccessibleIcon size={28} color="#fff" />,
    2: <FaBrain size={28} color="#fff" />,
    3: <FaCogs size={28} color="#fff" />,
    4: <FaFlask size={28} color="#fff" />,
    5: <FaChargingStation size={28} color="#fff" />,
  };

  const steps = [
    { id: 1, title: "Mining & Raw Materials" },
    { id: 2, title: "Refining & Chemical Processing" },
    { id: 3, title: "Precursor & Active‑Material Production" },
    { id: 4, title: "Pilot Manufacturing" },
    { id: 5, title: "Module & Pack Assembly" },
  ];

  const stepDetails = {
    1: [
      "Sodium carbonate (soda salt) — U.S., China & Turkey",
      "Metal‑carbon precursor — Biomass source worldwide",
      "Iron compound — Australia, Brazil, China",
    ],
    2: [
      "Soda ash to battery‑grade chemicals — U.S., China, Turkey",
      "Processed chemicals — Chinese & European firms",
      "Carbonic chemicals — Europe & Asia for Prussian‑type carboids",
    ],
    3: [
      "Prussian‑Blue carbon synthesis — CATL (China)",
      "Hard‑carbon anodes — MIT, CATL (China), Atifus (Sweden)",
    ],
    4: [
      "CATL cells — Yibin & Quanzhou",
      "BYD cells — pilot plant Xuzhou (300 Wh)",
      "Hilda Battery — 5–10 kWh cells (China)",
      "Faradion — 1 Wh sodium‑ion demo (UK/India)",
      "Natron Energy — Prussian‑blue cells (Michigan, USA)",
    ],
    5: [
      "Module & Pack assembly — aluminum interconnect & BMS integration (China, Europe, USA)",
    ],
  };

  const handleMouseMove = (e, id) => {
    const card = cardRefs.current[id];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    gsap.to(card, {
      duration: 0,
      rotationX: -y * 25,
      rotationY: x * 25,
      scale: 1.05,
      ease: "power3.out",
      transformPerspective: 600,
      transformOrigin: "center",
      boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
      overwrite: "auto",
    });
  };

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

    const fillEl = card.querySelector(".fill");
    if (fillEl) {
      gsap.to(fillEl, {
        duration: 0.5,
        height: 0,
        ease: "power3.out",
      });
    }
    
    // Only reset hover state if not hovering over snackbar
    if (!snackbarHovered) {
      setHoveredStep(null);
    }
  };

  const handleMouseEnter = (id) => {
    setHoveredStep(id);
    const card = cardRefs.current[id];
    if (!card) return;

    const fillEl = card.querySelector(".fill");
    if (fillEl) {
      gsap.to(fillEl, {
        duration: 0.5,
        height: "100%",
        ease: "power3.out",
      });
    }
  };

  const handleFocus = (id) => {
    setHoveredStep(id);
    const card = cardRefs.current[id];
    if (!card) return;
    gsap.to(card, {
      duration: 0.4,
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
      ease: "power3.out",
    });

    const fillEl = card.querySelector(".fill");
    if (fillEl) {
      gsap.to(fillEl, {
        duration: 0.5,
        height: "100%",
        ease: "power3.out",
      });
    }
  };

  const handleBlur = (id) => {
    const card = cardRefs.current[id];
    if (!card) return;
    gsap.to(card, {
      duration: 0.4,
      scale: 1,
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      ease: "power3.out",
    });

    const fillEl = card.querySelector(".fill");
    if (fillEl) {
      gsap.to(fillEl, {
        duration: 0.5,
        height: 0,
        ease: "power3.out",
      });
    }
    
    // Only reset hover state if not hovering over snackbar
    if (!snackbarHovered) {
      setHoveredStep(null);
    }
  };

  const handleSnackbarMouseEnter = () => {
    setSnackbarHovered(true);
  };

  const handleSnackbarMouseLeave = () => {
    setSnackbarHovered(false);
    setHoveredStep(null);
  };

  return (
    <div
      style={{
        // maxWidth: 960,
        margin: "auto",
        padding: 20,
        background: "#f5f5f5",
        borderRadius: 16,
        // userSelect: "none",
            maxHeight : "68vh",
            minHeight : "68vh",
        position: "relative",
        zIndex: 1,
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: 40,
          color: "gray",
          fontWeight: "700",
        }}
      >
        Sodium-Ion Battery Supply Chain
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: 40,
          // flexWrap: "wrap",
          position: "relative",
          overflowX : "scroll",
          zIndex: 1,
              marginBottom : "5vh"
        }}
      >
        {steps.map(({ id, title }) => {
          const isActive = id === activeStep;
          const isHovered = id === hoveredStep;

          return (
            <div
              key={id}
              ref={(el) => (cardRefs.current[id] = el)}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
              onClick={() => setActiveStep(id)}
              onMouseEnter={() => handleMouseEnter(id)}
              // onMouseMove={(e) => handleMouseMove(e, id)}
              // onMouseLeave={() => handleMouseLeave(id)}
              // onFocus={() => handleFocus(id)}
              // onBlur={() => handleBlur(id)}
              style={{
                cursor: "pointer",
                borderRadius: 20,
                // paddingX: "1vw",
                // width: "auto",
                position: "relative",
                       width : "100px",
                maxWidth : "100px",
                minWidth : "100px",
                // color: isActive || isHovered ? "#fff" : "#1f2d3d",
                // boxShadow: isActive
                //   ? "0 12px 24px rgba(195, 141, 65, 0.4)"
                //   : "0 8px 20px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                // transformStyle: "preserve-3d",
                // willChange: "transform",
                // transition: "color 0.35s ease",
                outline: "none",
                // background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
                // overflowX: "scroll",
                zIndex: isActive || isHovered ? 2 : 1,
              }}
            >
              <div
                className="fill"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 0,
                  // background: "linear-gradient(145deg, #c38d41, #6f7e40)",
                  borderRadius: 20,
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  // background: isActive || isHovered
                  //   ? "rgba(255,255,255,0.3)"
                  //   : "radial-gradient(circle at 30% 30%, #f9f3ea, #ece3d8)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: isActive || isHovered
                    ? "0 4px 10px rgba(0,0,0,0.5), inset 0 0 8px #c38d41"
                    : "0 4px 8px rgba(111, 126, 64, 0.3)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {isActive || isHovered ? iconsWhite[id] : icons[id]}
              </div>
              <div
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  fontWeight: "600",
                  textShadow:
                    isActive || isHovered
                      ? "0 0 5px rgba(255,255,255,0.3)"
                      : "none",
                  position: "relative",
                  color : "gray",
                  zIndex: 1,
                }}
              >
                {title}
              </div>
            </div>
          );
        })}
      </div>

<div className="mb-4" style={{ textAlign: "center" }}>
        <em className="px-2 mt-4 fw-normal" style={{fontSize : "14px", textAlign : "center" ,fontWeight : "500" }}>
      This infographic lays out the end‑to‑end sodium‑ion battery value chain—from soda‑ash and hard‑carbon mining through chemical refining, Prussian‑blue cathode and hard‑carbon anode synthesis, to pilot cell manufacturing and final module assembly. It highlights global raw‑material sources (U.S., China, Turkey, Australia) alongside pioneering firms like Altris (Sweden), CATL and BYD (China), Faradion (UK) and Natron (USA), showing where new sodium‑ion technologies are being scaled. By mapping each stage and its key players, the graphic underscores emerging supply‑chain opportunities and strategic hotspots for diversifying away from lithium‑based systems.
     </em>
      </div>


      <Snackbar
        open={hoveredStep !== null || activeStep !== null}
        anchorOrigin={{ vertical: "top", horizontal: "bottom" }}
        autoHideDuration={null}
        onClose={() => {
          if (!snackbarHovered) {
            setHoveredStep(null);
          }
        }}
         style={{
            position: "relative",
            top: "-19vh",
            left: -10,
            zIndex: 9999,
          }}
      >
        <div 
          onMouseEnter={handleSnackbarMouseEnter}
          onMouseLeave={handleSnackbarMouseLeave}
        >
          <Alert
            severity="success"
            variant="filled"
            onClose={() => setHoveredStep(null)}
            sx={{
              pointerEvents: "auto",
              minWidth: 320,
              userSelect: "text",
              backgroundColor: "#6f7e40",
              color: "#ffffff",
              '&:hover': {
                boxShadow: '0 0 10px rgba(0,0,0,0.3)',
              },
            }}
          >
            <strong>{steps.find((s) => s.id === (hoveredStep || activeStep))?.title}</strong>
            <ul style={{ marginTop: 8, paddingLeft: 20 }}>
              {stepDetails[hoveredStep || activeStep]?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Alert>
        </div>
      </Snackbar>
    </div>
  );
}
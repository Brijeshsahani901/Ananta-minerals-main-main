import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import {
  FaMountain,
  FaFilter,
  FaIndustry,
  FaFlask,
  FaMicrochip,
} from "react-icons/fa";
import { gsap } from "gsap";

export default function SupplyChainSteps() {
  const [hoveredStep, setHoveredStep] = React.useState(null);
  const [activeStep, setActiveStep] = React.useState(null);
  const [snackbarHovered, setSnackbarHovered] = React.useState(false);
  const cardRefs = React.useRef({});

  const icons = {
    1: <FaMountain size={28} color="#00B9B3" />,
    2: <FaFilter size={28} color="#00B9B3" />,
    3: <FaIndustry size={28} color="#00B9B3" />,
    4: <FaFlask size={28} color="#00B9B3" />,
    5: <FaMicrochip size={28} color="#00B9B3" />,
  };

  const steps = [
    { id: 1, title: "Mineral Extraction" },
    { id: 2, title: "Concentration" },
    { id: 3, title: "Refining" },
    { id: 4, title: "Precursor & Active Material Synthesis" },
    { id: 5, title: "Electrode & Component Fabric" },
  ];

  const stepDetails = {
    1: [
      "Lithium — Australia (Greenbushes), Chile & Argentina (Salar brine)",
      "Nickel — Indonesia, Philippines, Canada, Russia",
      "Cobalt — DRC (70% of global supply)",
      "Graphite — China, Mozambique, Brazil",
      "Manganese — South Africa, Australia",
    ],
    2: [
      "Australia — Tianqi Lithium, Western Australia",
      "Indonesia — Pomalaa Nickel Plant, Sulawesi",
      "China — Baotou Rare Earth, Inner Mongolia",
    ],
    3: [
      "China — Ganfeng Lithium Refining, Jiangxi",
      "South Korea — POSCO Pilbara, Gwangyang",
      "Japan — Sumitomo Refinery, Niihama",
    ],
    4: [
      "China — CATL Active-Material Line, Fujian",
      "South Korea — LG Energy, Ochang",
      "Poland — Umicore Cathode Plant, Nysa",
    ],
    5: [
      "China — SVOLT Electrode Center, Jiangsu",
      "Japan — Panasonic, Osaka",
      "South Korea — POSCO Future M, Gwangyang",
    ],
  };

  const isStepActive = (id) => id === hoveredStep || id === activeStep;

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
      boxShadow: "0 20px 40px rgba(0,0,0,0.25), 0 12px 20px rgba(0,0,0,0.15)",
      overwrite: "auto",
    });
  };

  const resetCard = (id) => {
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

    // Only reset hover state if not hovering over snackbar
    if (!snackbarHovered) {
      setHoveredStep(null);
    }
  };

  const focusCard = (id) => {
    setHoveredStep(id);
    const card = cardRefs.current[id];
    if (!card) return;

    gsap.to(card, {
      duration: 0.4,
      rotationX: 0,
      rotationY: 0,
      scale: 1.05,
      ease: "power3.out",
      boxShadow: "0 20px 40px rgba(0,0,0,0.25), 0 12px 20px rgba(0,0,0,0.15)",
      overwrite: "auto",
    });
  };

  const blurCard = (id) => {
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
        margin: "auto",
        padding: 20,
        // background: "rgb(247 240 247)",
        // maxHeight : "50vh",
        backgroundColor : "#B8E3E9",
        borderRadius: 16,
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
        EV Battery Supply Chain
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: 40,
          // flexWrap: "wrap",
          position: "relative",
                 overflowX : "scroll",
                //  width : "100px",
          zIndex: 1,
          marginBottom : "15px"
        }}
      >
        {steps.map(({ id, title }) => {
          const isActive = isStepActive(id);

          return (
            <div
              key={id}
              ref={(el) => el && (cardRefs.current[id] = el)}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
              onClick={() => {
                setActiveStep((prev) => (prev === id ? null : id));
              }}
              onMouseEnter={() => setHoveredStep(id)}
                onMouseLeave={() => setHoveredStep(null)}  
              // onMouseMove={(e) => handleMouseMove(e, id)}
              // onMouseLeave={() => resetCard(id)}
              // onFocus={() => focusCard(id)}
              // onBlur={() => blurCard(id)}
              style={{
                cursor: "pointer",
                borderRadius: 20,
                // paddingX: "1vw",
                // width: "auto",
                position: "relative",
                // color: isActive || isHovered ? "#fff" : "#1f2d3d",
                // boxShadow: isActive
                //   ? "0 12px 24px rgba(195, 141, 65, 0.4)"
                //   : "0 8px 20px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                    width : "100px",
                maxWidth : "100px",
                minWidth : "100px",
                // transformStyle: "preserve-3d",
                // willChange: "transform",
                // transition: "color 0.35s ease",
                outline: "none",
                // background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
                // overflowX: "scroll",
                zIndex: isActive ? 2 : 1,
              }}
            >
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: isActive ? "100%" : "0%",
                  // background: "linear-gradient(to top, #962b27, #7d305b)",
                  borderRadius: 20,
                  zIndex: 0,
                  pointerEvents: "none",
                  transition: "height 0.4s ease-in-out",
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    // backgroundColor : "white",
                    // background: isActive
                    //   ? "#ffffff"
                    //   : "radial-gradient(circle at 30% 30%, #fbeaea, #e5cfd2)",
                     color: "red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: isActive
                      ? "0 4px 10px rgba(0,0,0,0.5), inset 0 0 8px #962b27"
                      : "0 4px 8px rgba(125, 48, 91, 0.3)",
                    transition: "all 0.3s ease",
                    marginBottom: 12,
                    zIndex: 1,
                  }}
                >
                  {icons[id]}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    fontWeight: "600",
                     color: "gray",
                    textShadow: isActive
                      ? "0 0 5px rgba(255, 255, 255, 0.3)"
                      : "none",
                    zIndex: 1,
                  }}
                >
                  {title}
                </div>
              </div>
            </div>
          );
        })}
      </div>

<div className="mb-4"  style={{ textAlign: "center" }}>
        <em className="px-2 mt-4 fw-normal" style={{fontSize : "14px", textAlign : "center" ,fontWeight : "500" }}>
        This infographic traces the full EV‑battery value chain—from lithium,
        nickel, cobalt and graphite extraction in Australia, Chile, DRC and
        beyond, through concentration and refining hubs in China, South Korea
        and Japan, to precursor synthesis and electrode fabrication across Asia
        and Europe. By aligning each processing stage with its dominant minerals
        and flagship facilities (e.g., Pilgangoora’s spodumene operation,
        Ganfeng’s lithium refinery, CATL’s active‑material line), it exposes the
        geographically dispersed network underpinning electric‑vehicle
        batteries. Its goal is to spotlight critical chokepoints and strategic
        dependencies in the global battery supply chain, underscoring where
        diversification and resilient sourcing are most needed.
      </em>
      </div>


      <Snackbar
        open={hoveredStep !== null || activeStep !== null}
        anchorOrigin={{ vertical: "top", horizontal: "bottom" }}
        autoHideDuration={null}
        onClose={() => {
          if (!snackbarHovered) {
            setHoveredStep(null);
            setActiveStep(null);
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
            onClose={() => {
              setHoveredStep(null);
              setActiveStep(null);
            }}
            sx={{
              pointerEvents: "auto",
              minWidth: 320,
              maxHeight : "20vh",
              userSelect: "text",
              backgroundColor: "#005451",
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
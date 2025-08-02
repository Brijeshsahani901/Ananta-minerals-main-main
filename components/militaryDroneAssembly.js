import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import {
  FaTools,
  FaMotorcycle,
  FaMicrochip,
  FaBatteryFull,
  FaRocket,
} from "react-icons/fa";
import { gsap } from "gsap";

export default function MilitaryDronesWithGsapTilt() {
  const [hoveredStep, setHoveredStep] = React.useState(null);
  const [activeStep, setActiveStep] = React.useState(null);
  const [snackbarHovered, setSnackbarHovered] = React.useState(false);
  const cardRefs = React.useRef({});
  const snackbarRef = React.useRef(null);


  const icons = {
    1: <FaTools size={28} color="#68d8c0" />,
    2: <FaMotorcycle size={28} color="#68d8c0" />,
    3: <FaMicrochip size={28} color="#68d8c0" />,
    4: <FaBatteryFull size={28} color="#68d8c0" />,
    5: <FaRocket size={28} color="#68d8c0" />,
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
      "Aluminium — DJI Shenzhen, China",
      "Titanium — Aerovironment, USA",
      "Samarium — Pomrot SA, France",
      "Niobium — Ebit Systems, Israel",
    ],
    2: [
      "Neodymium — T‑MOTOR, China",
      "Boron — Aerovironment, USA",
      "Iron & Cobalt — Pomrot SA, France",
      "Cobalt — Ebit Systems, Israel",
    ],
    3: [
      "Gallium & Germanium — DJI, China",
      "Indium & Tantalum — Skylab, USA",
      "Silver, Gold & Copper — Pomrot SA, France",
      "Tungsten — Ebit Systems, Israel",
    ],
    4: [
      "Lithium — Tesla Gigafactory, USA",
      "Co, Ni, Mn — CATL, Indonesia",
      "Graphite — Saft Groupe, France",
      "Synthetic Graphite — Custom Cells, Israel",
    ],
    5: [
      "DJI R&D — Shenzhen, China",
      "Aerovironment R&D — USA",
      "Pomrot R&D — France",
      "Ebit Systems R&D — Israel",
    ],
  };

  React.useEffect(() => {
  function handleClickOutside(event) {
    if (
      snackbarRef.current &&
      !snackbarRef.current.contains(event.target) &&
      !snackbarHovered
    ) {
      setHoveredStep(null);
      setActiveStep(null);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [snackbarHovered]);


  const tiltCard = (e, id) => {
    const el = cardRefs.current[id];
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 2 - 1;
    const y = ((e.clientY - r.top) / r.height) * 2 - 1;
    gsap.to(el, {
      duration: 0,
      rotationX: -y * 25,
      rotationY: x * 25,
      scale: 1.05,
      ease: "power3.out",
      transformPerspective: 600,
      transformOrigin: "center",
      boxShadow: "0 20px 40px rgba(0,0,0,0.25),0 12px 20px rgba(0,0,0,0.15)",
      overwrite: "auto",
    });
  };

  const resetCard = (id) => {
    const el = cardRefs.current[id];
    if (!el) return;
    gsap.to(el, {
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
    const el = cardRefs.current[id];
    if (!el) return;
    gsap.to(el, {
      duration: 0.4,
      rotationX: 0,
      rotationY: 0,
      scale: 1.05,
      ease: "power3.out",
      boxShadow: "0 20px 40px rgba(0,0,0,0.25),0 12px 20px rgba(0,0,0,0.15)",
      overwrite: "auto",
    });
  };

  const blurCard = (id) => {
    const el = cardRefs.current[id];
    if (!el) return;
    gsap.to(el, {
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
        background: "#e8f0f2",
        borderRadius: 16,
        position: "relative",
            maxHeight : "1200px",
             minHeight : "68vh",
        zIndex: 1,
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: 40,
          color: "gray",
          fontWeight: 700,
        }}
      >
        Military Drones Assembly Supply Chain
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          // flexWrap: "wrap",
          gap: 40,
          position: "relative",
           overflowX : "scroll",
          zIndex: 1,
              marginBottom : "35px"
        }}
      >
        {steps.map(({ id, title }) => {
          const isActive = id === hoveredStep || id === activeStep;

          return (
            <div
              key={id}
              ref={(el) => {
                if (el) cardRefs.current[id] = el;
              }}
              onClick={() => {
                setActiveStep((prev) => (prev === id ? null : id));
              }}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
              onMouseEnter={() => setHoveredStep(id)}
              // onMouseMove={(e) => tiltCard(e, id)}
              // onMouseLeave={() => resetCard(id)}
              // onFocus={() => focusCard(id)}
              // onBlur={() => blurCard(id)}
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
                zIndex: isActive ? 2 : 1,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: isActive ? "100%" : "0%",
                  // background: "linear-gradient(to bottom, #3f8e7d, #3a786d)",
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
                    // background: isActive
                    //   ? "radial-gradient(circle at 30% 30%, #1e3a3a, #234e52)"
                    //   : "radial-gradient(circle at 30% 30%, #e0f7f6, #b2e1df)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: isActive
                      ? "0 4px 10px rgba(0,0,0,0.5), inset 0 0 8px #68d8c0"
                      : "0 4px 8px rgba(44,122,123,0.3)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {icons[id]}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    textAlign: "center",
                    color : "gray",
                    textShadow: isActive
                      ? "0 0 5px rgba(255,255,255,0.3)"
                      : "none",
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
     This infographic maps out the five key stages of military drone production—from frame fabrication through software R&D—highlighting the critical minerals (aluminum, rare‑earth magnets, lithium, gallium) required at each step. It further pinpoints leading facilities and global companies illustrating how global supply chains and geopolitics intersect in drone manufacturing. By laying out mineral dependencies alongside major production hubs, the graphic underscores potential bottlenecks and strategic vulnerabilities in securing essential resources for defense‑grade UAVs.
      </em>
      </div>

        <Snackbar
          open={hoveredStep !== null || activeStep !== null}
          anchorOrigin={{ vertical: "top", horizontal: "bottom" }}
          autoHideDuration={null}
          onClose={() => {
            if (!snackbarHovered) {
              setHoveredStep(null);
              setActiveStep(null)
            }
          }}
         style={{
            position: "relative",
            top: "-15vh",
            left: -10,
            zIndex: 9999,
          }}
        >
          <div
            ref={snackbarRef}
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
                zIndex: 99999,
                pointerEvents: "auto",
                minWidth: 320,
                backgroundColor: "#3b7d71",
                color: "#ffffff",
                "&:hover": {
                  boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                },
              }}
            >
              <strong>
                {steps.find((s) => s.id === (hoveredStep || activeStep))?.title}
              </strong>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                {stepDetails[hoveredStep || activeStep]?.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: 4 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </Alert>
          </div>
        </Snackbar>
    </div>
  );
}

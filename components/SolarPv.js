import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import {
  FaMountain,
  FaIndustry,
  FaFilter,
  FaCube,
  FaSolarPanel,
} from "react-icons/fa";
import { gsap } from "gsap";

export default function SolarPV() {
  const [hoveredStep, setHoveredStep] = React.useState(null);
  const [activeStep, setActiveStep] = React.useState(null);
  const [isHoveringSnackbar, setIsHoveringSnackbar] = React.useState(false);
  const cardRefs = React.useRef({});

  const icons = {
    1: <FaMountain size={28} color="#517891" />,
    2: <FaIndustry size={28} color="#517891" />,
    3: <FaFilter size={28} color="#517891" />,
    4: <FaCube size={28} color="#517891" />,
    5: <FaSolarPanel size={28} color="#517891" />,
  };

  const iconsHover = {
    1: <FaMountain size={28} color="#ffffff" />,
    2: <FaIndustry size={28} color="#ffffff" />,
    3: <FaFilter size={28} color="#ffffff" />,
    4: <FaCube size={28} color="#ffffff" />,
    5: <FaSolarPanel size={28} color="#ffffff" />,
  };

  const steps = [
    { id: 1, title: "Quartz (SiO₂) Mining" },
    { id: 2, title: "Metallurgical-grade Silicon Production" },
    { id: 3, title: "Polysilicon Purification" },
    { id: 4, title: "Ingot & Wafer Production" },
    { id: 5, title: "Cell Metallization" },
  ];

  const stepDetails = {
    1: [
      "Quartz (SiO₂) – feedstock for silicon – The Quartz Corp, Rana Mines (Norway)",
      "Critical Mineral: Quartz (SiO₂) – feedstock for silicon",
      "Company & Origin: The Quartz Corp, Rana Mines, Norway",
    ],
    2: [
      "Metallurgical-grade Silicon – Wacker Chemie (Burghausen, Germany)",
      "Critical Mineral: Silicon (Si) – refined from quartz for further purification",
      "Company & Origin: Wacker Chemie, Burghausen, Germany",
    ],
    3: [
      "Polysilicon (>99.9999%) – Hemlock Semiconductor (Michigan, USA)",
      "Critical Mineral: Silicon (Si) – purified to solar‑grade (>99.9999 %)",
      "Company & Origin: Hemlock Semiconductor, Hemlock, Michigan, USA",
    ],
    4: [
      "Monocrystalline ingot & wafer – LONG Green Energy (Xi'an, China)",
      "Critical Mineral: Silicon (Si) – cast into ingots and sliced into wafers",
      "Company & Origin: LONGi Green Energy, Xi'an, China",
    ],
    5: [
      "Cell metallization – Silver paste on Si wafer – JinkoSolar (Zhejiang, China)",
      "Silicon (Si) – wafer substrate",
      "Silver (Ag) – via metallization step above",
      "Company & Origin: JinkoSolar, Haining, Zhejiang, China",
    ],
  };

  // const handleMouseMove = (e, id) => {
  //   const card = cardRefs.current[id];
  //   if (!card) return;
  //   const rect = card.getBoundingClientRect();
  //   const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  //   const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

  //   gsap.to(card, {
  //     duration: 0,
  //     rotationX: -y * 40,
  //     rotationY: x * 40,
  //     scale: 1.08,
  //     ease: "power3.out",
  //     transformPerspective: 600,
  //     transformOrigin: "center",
  //     boxShadow: "0 35px 80px rgba(0,0,0,0.5)",
  //     overwrite: "auto",
  //   });

  //   const overlay = card.querySelector(".overlay");
  //   if (overlay) {
  //     gsap.to(overlay, {
  //       duration: 0.5,
  //       height: "100%",
  //       ease: "power3.out",
  //     });
  //   }
  // };

  // const handleMouseLeave = (id) => {
  //   const card = cardRefs.current[id];
  //   if (!card) return;

  //   gsap.to(card, {
  //     duration: 0.5,
  //     rotationX: 0,
  //     rotationY: 0,
  //     scale: 1,
  //     ease: "power3.out",
  //     boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  //     overwrite: "auto",
  //   });

  //   if (activeStep !== id) {
  //     const overlay = card.querySelector(".overlay");
  //     if (overlay) {
  //       gsap.to(overlay, {
  //         duration: 0.5,
  //         height: "0%",
  //         ease: "power3.inOut",
  //       });
  //     }
  //   }

  //   if (activeStep === null && !isHoveringSnackbar) {
  //     setHoveredStep(null);
  //   }
  // };

  const handleCardClick = (id) => {
    setActiveStep((prev) => (prev === id ? null : id));
  };

  // React.useEffect(() => {
  //   if (activeStep !== null) {
  //     Object.entries(cardRefs.current).forEach(([key, card]) => {
  //       if (!card) return;
  //       const overlay = card.querySelector(".overlay");
  //       if (!overlay) return;

  //       if (parseInt(key, 10) === activeStep) {
  //         gsap.to(overlay, {
  //           duration: 0.5,
  //           height: "100%",
  //           ease: "power3.out",
  //         });
  //       } else {
  //         gsap.to(overlay, {
  //           duration: 0.5,
  //           height: "0%",
  //           ease: "power3.inOut",
  //         });
  //       }
  //     });
  //   } else {
  //     Object.entries(cardRefs.current).forEach(([key, card]) => {
  //       if (!card) return;
  //       const overlay = card.querySelector(".overlay");
  //       if (!overlay) return;
  //       if (hoveredStep && parseInt(key, 10) === hoveredStep) {
  //         gsap.to(overlay, {
  //           duration: 0.5,
  //           height: "100%",
  //           ease: "power3.out",
  //         });
  //       } else {
  //         gsap.to(overlay, {
  //           duration: 0.5,
  //           height: "0%",
  //           ease: "power3.inOut",
  //         });
  //       }
  //     });
  //   }
  // }, [activeStep, hoveredStep]);

  const infoStep = activeStep !== null ? activeStep : hoveredStep;

  return (
    <div
      style={{
        margin: "auto",
        padding: 20,
        // background: "rgb(227 222 241)",
        backgroundColor: "#C8D9E6",
        borderRadius: 16,
        position: "relative",
        maxHeight : "68vh",
            minHeight : "68vh",
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
        Solar PV Cells Supply Chain
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: 40,         // flexWrap: "wrap",
          position: "relative",
             overflowX : "scroll",
          zIndex: 1,
              marginBottom : "5vh"
        }}
      >
        {steps.map(({ id, title }) => {
          const isHovered = id === hoveredStep;
          const isActive = id === activeStep;
          const isHighlighted = isHovered || isActive;

          return (
            <div
              key={id}
              ref={(el) => (cardRefs.current[id] = el)}
              tabIndex={0}
              role="button"
              // onClick={() => handleCardClick(id)}
              onMouseEnter={() => setHoveredStep(id)}
              onMouseLeave={() => setHoveredStep(null)}  
              // onMouseMove={(e) => handleMouseMove(e, id)}
              // onMouseLeave={() => handleMouseLeave(id)}
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
                zIndex: isHighlighted ? 2 : 1,
              }}
            >
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "0%",
                  background: "linear-gradient(to bottom, #2d3990, #4a82be)",
                  pointerEvents: "none",
                  zIndex: 0,
                  borderRadius: 20,
                  willChange: "height",
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
                    background: isHighlighted
                      ? "#ffffff33"
                      : "radial-gradient(circle at 30% 30%, #e5e9f5, #dfe4ec)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: isHighlighted
                      ? "0 4px 12px rgba(255,255,255,0.6), inset 0 0 8px #ffffff"
                      : "0 4px 8px rgba(74,130,190,0.3)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {isHighlighted ? iconsHover[id] : icons[id]}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    fontWeight: 600,
                    transition: "color 0.3s ease",
                    color: "gray",
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
        This infographic outlines the end‑to‑end supply chain for solar
        photovoltaic cell manufacturing, from quartz mining in Norway through
        silicon purification in the U.S. and Germany to wafer slicing in China
        and silver metallization in Germany. By pairing each production stage
        with its critical mineral inputs (quartz, silicon, silver) and flagship
        facilities, it highlights the global network of suppliers that underpin
        clean‑energy technology. The graphic’s intent is to reveal potential
        chokepoints and strategic dependencies—emphasizing how securing
        high‑purity materials is vital for scaling solar deployment worldwide.
      </em>
      </div>

    {hoveredStep && (
  <Snackbar
    open={true}
    anchorOrigin={{ vertical: "top", horizontal: "bottom" }}
    autoHideDuration={null}
    style={{
      position: "relative",
      top: "-17vh",
      left: -10,
      zIndex: 9999,
    }}
  >
    <Alert
      severity="success"
      variant="filled"
      onClose={() => setHoveredStep(null)}
      sx={{
        pointerEvents: "auto",
        minWidth: 320,
        userSelect: "text",
        backgroundColor: "#517891",
        color: "#ffffff",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3), inset 0 0 10px #1a3c6e",
        "&:hover": {
          cursor: "default",
        },
      }}
    >
      <strong>{steps.find((s) => s.id === hoveredStep)?.title}</strong>
      <ul style={{ marginTop: 8, paddingLeft: 20 }}>
        {stepDetails[hoveredStep]?.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </Alert>
  </Snackbar>
)}

    </div>
  );
}

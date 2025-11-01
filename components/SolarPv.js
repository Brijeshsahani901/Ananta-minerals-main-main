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
import useMediaQuery from "@mui/material/useMediaQuery";

export default function SolarPV() {
  const [hoveredStep, setHoveredStep] = React.useState(null);
  const [activeStep, setActiveStep] = React.useState(null);
  const cardRefs = React.useRef({});

  const [snackbarTop, setSnackbarTop] = React.useState(getTopOffset());
  const isMobile = useMediaQuery("(max-width:768px)");

  function getTopOffset() {
    return window.innerWidth <= 768 ? -280 : -150;
  }

  React.useEffect(() => {
    const handleResize = () => setSnackbarTop(getTopOffset());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <div className="responsivec-container"   style={{
         minHeight: "520px",
       
      }}>
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
          justifyContent: isMobile ? "center" : "space-between",
          gap: 5,
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
          marginBottom: "5vh",
          padding: "0 10px",
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
              onMouseEnter={() => setHoveredStep(id)}
              onMouseLeave={() => setHoveredStep(null)}
              style={{
                cursor: "pointer",
                borderRadius: 20,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                width: "100px",
                maxWidth: "100px",
                minWidth: "100px",
                outline: "none",
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

      <div className="mb-4" style={{ textAlign: "center" }}>
        <em
          className="px-2 mt-4"
          style={{ fontSize: "14px", textAlign: "center"}}
        >
          This infographic outlines the end‑to‑end supply chain for solar
          photovoltaic cell manufacturing, from quartz mining in Norway through
          silicon purification in the U.S. and Germany to wafer slicing in China
          and silver metallization in Germany. By pairing each production stage
          with its critical mineral inputs (quartz, silicon, silver) and
          flagship facilities, it highlights the global network of suppliers
          that underpin clean‑energy technology. The graphic’s intent is to
          reveal potential chokepoints and strategic dependencies—emphasizing
          how securing high‑purity materials is vital for scaling solar
          deployment worldwide.
        </em>
      </div>

      {hoveredStep && (
        <Snackbar
          open={true}
          anchorOrigin={{ vertical: "top", horizontal: "bottom" }}
          autoHideDuration={null}
          style={{
            position: "relative",
            top: snackbarTop,
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

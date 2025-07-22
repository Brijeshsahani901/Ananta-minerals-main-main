import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaMountain,
  FaIndustry,
  FaFilter,
  FaCube,
  FaSolarPanel,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SolarPV() {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const hoverInfo = {
    1: {
      title: 'QUARTZ (SiO₂) MINING',
      items: [
        {
          name: 'Critical Mineral',
          detail: 'Quartz (SiO₂) – feedstock for silicon',
        },
        {
          name: 'Company & Origin',
          detail: 'The Quartz Corp, Rana Mines, Norway',
        },
      ],
    },
    2: {
      title: 'METALLURGICAL-GRADE SILICON PRODUCTION',
      items: [
        {
          name: 'Critical Mineral',
          detail: 'Silicon (Si) – refined from quartz for further purification',
        },
        {
          name: 'Company & Origin',
          detail: 'Wacker Chemie, Burghausen, Germany',
        },
      ],
    },
    3: {
      title: 'POLYSILICON PURIFICATION',
      items: [
        {
          name: 'Critical Mineral',
          detail: 'Silicon (Si) – purified to select value (>99.9999 %)',
        },
        {
          name: 'Company & Origin',
          detail: 'Hemlock Semiconductor, Hemlock, Michigan, USA',
        },
      ],
    },
    4: {
      title: 'MONOCRYSTALLINE SILICON INGOT & WAFER PRODUCTION',
      items: [
        {
          name: 'Critical Mineral',
          detail: 'Silicon (Si) – cast into ingots and sliced into wafers',
        },
        {
          name: 'Company & Origin',
          detail: 'LONG Green Energy, Xi\'an, China',
        },
      ],
    },
    5: {
      title: 'CELL METALLIZATION',
      items: [
        {
          name: 'Critical Mineral',
          detail: 'Silicon (Si) – wafer substrate',
        },
        {
          name: 'Critical Mineral',
          detail: 'Silver (Ag) – frontside metallization paste',
        },
        {
          name: 'Company & Origin',
          detail: 'JinkoSolar, Haining, Zhejiang, China',
        },
      ],
    },
  };

  const steps = [
    {
      step: 1,
      title: 'Quartz (SiO₂) Mining',
      icon: <FaMountain size={20} />,
      iconPosition: 'top',
      color: '#3083DC',
      showRightNotch: true,
    },
    {
      step: 2,
      title: 'Metallurgical-Grade Silicon Production',
      icon: <FaIndustry size={20} />,
      iconPosition: 'bottom',
      color: '#1F3C88',
      showLeftNotch: true,
      showRightNotch: true,
    },
    {
      step: 3,
      title: 'Polysilicon Purification',
      icon: <FaFilter size={20} />,
      iconPosition: 'top',
      color: '#4E4E4E',
      showLeftNotch: true,
      showRightNotch: true,
    },
    {
      step: 4,
      title: 'Monocrystalline Silicon Ingot & Wafer Production',
      icon: <FaCube size={20} />,
      iconPosition: 'bottom',
      color: '#1F3C88',
      showLeftNotch: true,
      showRightNotch: true,
    },
    {
      step: 5,
      title: 'Cell Metallization',
      icon: <FaSolarPanel size={20} />,
      iconPosition: 'top',
      color: '#3083DC',
      showLeftNotch: true,
    },
  ];

  const StepCard = ({
    step,
    title,
    subtitle,
    icon,
    iconPosition,
    color,
    showRightNotch,
    showLeftNotch,
    setHoveredStep,
  }) => {
    return (
      <motion.div
        onMouseEnter={() => !isMobile && setHoveredStep(step)}
        onMouseLeave={() => !isMobile && setHoveredStep(null)}
        onClick={() =>
          isMobile && setHoveredStep(hoveredStep === step ? null : step)
        }
        whileHover={{ scale: isMobile ? 1 : 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="position-relative text-center"
        style={{
          flex: "0 0 auto",
          minWidth: "140px",
          maxWidth: "180px",
          margin: "2px 10px",
          width: isMobile ? "100%" : "auto",
        }}
      >
        {/* Icon */}
        <div
          className="rounded-circle d-flex justify-content-center align-items-center shadow-sm"
          style={{
            width: "50px",
            height: "50px",
            position: "absolute",
            [iconPosition]: "-16px",
            left: "50%",
            transform: "translateX(-50%)",
            border: `3px solid #4f948b`,
            backgroundColor: "#fff",
            zIndex: 2,
          }}
        >
          {icon}
        </div>

        {/* Card */}
        <div
          className="bg-white shadow-sm px-3 py-3"
          style={{
            paddingTop: iconPosition === "top" ? "38px" : "16px",
            paddingBottom: iconPosition === "bottom" ? "38px" : "16px",
            borderRadius: "10px",
            borderTop: iconPosition === "top" ? `3px solid #4f948b` : undefined,
            borderBottom:
              iconPosition === "bottom" ? `3px solid #4f948b` : undefined,
            fontSize: "0.85rem",
            minHeight: isMobile ? "auto" : "150px",
            marginTop: isMobile ? "40px" : "100px",
          }}
        >
          <div className="text-muted mb-1" style={{ fontSize: "0.75rem" }}>
            {step}
          </div>
          <div className="fw-bold" style={{ fontSize: "0.9rem" }}>
            {title}
          </div>
          {subtitle && (
            <p
              className="text-muted mt-1 mb-0"
              style={{ fontSize: "0.75rem", lineHeight: "1.3" }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Bar */}
        {!isMobile && (
          <div
            className="position-absolute w-100"
            style={{
              height: "10px",
              bottom: iconPosition === "top" ? "-5px" : undefined,
              top: iconPosition === "bottom" ? "-5px" : undefined,
              backgroundColor: "#c05538",
              borderRadius: "4px",
              zIndex: 1,
            }}
          />
        )}

        {/* Notches */}
        {!isMobile && showRightNotch && (
          <div
            className="position-absolute"
            style={{
              width: 0,
              height: 0,
              right: "-12px",
              top: "50%",
              transform: "translateY(-50%)",
              borderTop: "12px solid transparent",
              borderBottom: "12px solid transparent",
              borderLeft: `12px solid #4f948b`,
              zIndex: 1,
            }}
          />
        )}
        {!isMobile && showLeftNotch && (
          <div
            className="position-absolute"
            style={{
              width: 0,
              height: 0,
              left: "-12px",
              top: "50%",
              transform: "translateY(-50%)",
              borderTop: "12px solid transparent",
              borderBottom: "12px solid transparent",
              borderRight: `12px solid #c05538`,
              zIndex: 1,
            }}
          />
        )}
      </motion.div>
    );
  };

  return (
    <div
      className="solar-pv-container"
      style={{
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        backgroundColor: '#d9d9d9',
        padding: '1rem',
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
          height:"70vh",
      }}
    >
      <div className="text-center mb-3">
        <h4 style={{ 
          fontSize: isMobile ? '1.1rem' : '1.2rem', 
          color: '#2c3e50', 
          marginBottom: '0.5rem' 
        }}>
          Solar PV - Global Manufacturing Process
        </h4>
        <p
          className="text-muted"
          style={{
            fontSize: isMobile ? '0.8rem' : '0.9rem',
            marginBottom: '1rem',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          Explore the stages of solar PV production from raw materials to finished cells
        </p>
      </div>

      {/* Desktop Hover Info Box */}
      {!isMobile && hoveredStep && hoverInfo[hoveredStep] && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="position-absolute text-white p-3 shadow"
          style={{
            top: "75px",
            left: "500",
            transform: "translateX(-50%)",
            backgroundColor: "#4e4e4e",
            borderRadius: "10px",
            width: "94%",
            maxWidth: "1200px",
            fontSize: "13px",
            zIndex: 18,
          }}
        >
          <div className="fw-bold text-center mb-2">{hoverInfo[hoveredStep].title}</div>
          {hoverInfo[hoveredStep].items.map((item, i) => (
            <div key={i} className="mb-1">
              <strong>{item.name}</strong>: {item.detail}
            </div>
          ))}
        </motion.div>
      )}

      {/* Steps */}
      <div
        className="step-cards-container d-flex h-100"
        style={{
         overflow:'auto',
          flexWrap: isMobile ? 'wrap' : 'nowrap',
          justifyContent: isMobile ? 'center' : 'flex-start',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: '1rem',
          gap: isMobile ? '20px' : '0',
          paddingTop: "5vh",
        }}
      >
        {steps.map((s, i) => (
          <div 
            key={i} 
            style={{ 
              scrollSnapAlign: 'start',
              marginTop: isMobile ? '20px' : '50px',
              width: isMobile ? '100%' : 'auto',
            }}
          >
            <StepCard 
              {...s} 
              setHoveredStep={setHoveredStep} 
            />
            {isMobile && hoveredStep === s.step && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="text-white p-3 mt-2 shadow"
                style={{
                  backgroundColor: '#4e4e4e',
                  borderRadius: '10px',
                  fontSize: '12px',
                  margin: '0 10px',
                }}
              >
                <div className="fw-bold text-center mb-2">
                  {hoverInfo[s.step].title}
                </div>
                {hoverInfo[s.step].items.map((item, i) => (
                  <div key={i} className="mb-1">
                    <strong>{item.name}</strong>: {item.detail}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
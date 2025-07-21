import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaAccessibleIcon,
  FaBrain,
  FaCogs,
  FaFlask,
  FaChargingStation,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MilitaryDronesAssembly() {
  const [hoveredStep, setHoveredStep] = useState(null);

  const hoverInfo = {
    1: {
      title: 'Frame Fabrication',
      items: [
        {
          name: 'Aluminium',
          detail: 'DJI sky city Frame shop, Shenzhen, China',
        },
        {
          name: 'Titanium',
          detail: 'Composite Airframe shop (Aerovironment, Inc.), Simi Valley, USA',
        },
        {
          name: 'Samarium',
          detail: 'Airframe Plant (Pomrot SA), Paris, France',
        },
        {
          name: 'Niobium',
          detail: 'Cyclone Composites (Ebit Systems Ltd.), Haifa, Israel',
        },
      ],
    },
    2: {
      title: 'Motor & Propeller Production',
      items: [
        {
          name: 'Neodymium, Praseodymium & Dysprosium',
          detail: 'T-MOTOR Propulsion Systems, Nanchang, China',
        },
        {
          name: 'Boron',
          detail: 'Electric Drive Unit Plant (Aerovironment, Inc.), Simi Valley, USA',
        },
        {
          name: 'Iron & Cobalt',
          detail: 'In-House Motor Lines (Pomrot SA), Paris, France',
        },
        {
          name: 'Cobalt',
          detail: 'Rotary-Wing Drive (Ebit Systems Ltd.), Haifa, Israel',
        },
      ],
    },
    3: {
      title: 'Avionics & Electronics Production',
      items: [
        {
          name: 'Gallium & Germanium',
          detail: 'Flight Control Module Lines (DJI), Shenzhen, China',
        },
        {
          name: 'Indium & Tantalum',
          detail: 'Avionics Integration (Skylab, Inc.), Schwenksville, USA',
        },
        {
          name: 'Silver, Gold & Copper',
          detail: 'Embedded Systems Plant (Pomrot SA), Paris, France',
        },
        {
          name: 'Tungsten',
          detail: 'UAV Electronics Center (Ebit Systems Ltd.), Haifa, Israel',
        },
      ],
    },
    4: {
      title: 'Battery-Pack Assembly',
      items: [
        {
          name: 'Lithium',
          detail: 'Gigabattery Nevada (Tesla, Inc.), Sparks, USA',
        },
        {
          name: 'Cobalt, Nickel & Manganese',
          detail: 'Indonesia Battery Corp & CATL Gigafactory, West Java (Indonesia/China)',
        },
        {
          name: 'Graphite',
          detail: 'Battery Module Plant (Saft Groupe S.A.), Nersac, France',
        },
        {
          name: 'Graphite (Synthetic)',
          detail: 'Custom Cells Pack Facility (EMF partner), Israel',
        },
      ],
    },
    5: {
      title: 'Software & Flight-Control R&D',
      items: [
        {
          name: 'DJI',
          detail: 'Shenzhen, China - Flight control algorithms and autonomous systems',
        },
        {
          name: 'Aerovironment, Inc.',
          detail: 'Simi Valley, USA - Military-grade navigation and control systems',
        },
        {
          name: 'Pomrot SA',
          detail: 'Paris, France - Secure communication and data link systems',
        },
        {
          name: 'Ebit Systems Ltd.',
          detail: 'Haifa, Israel - AI-based targeting and mission planning systems',
        },
      ],
    },
  };

  const steps = [
    {
      step: 1,
      title: 'Frame Fabrication',
      icon: <FaAccessibleIcon size={20} />,
      iconPosition: 'top',
      color: '#3083DC',
      showRightNotch: true,
    },
    {
      step: 2,
      title: 'Motor & Propeller Production',
      icon: <FaBrain size={20} />,
      iconPosition: 'bottom',
      color: '#1F3C88',
      showLeftNotch: true,
      showRightNotch: true,
    },
    {
      step: 3,
      title: 'Avionics & Electronics Production',
      icon: <FaCogs size={20} />,
      iconPosition: 'top',
      color: '#4E4E4E',
      showLeftNotch: true,
      showRightNotch: true,
    },
    {
      step: 4,
      title: 'Battery-Pack Assembly',
      icon: <FaFlask size={20} />,
      iconPosition: 'bottom',
      color: '#1F3C88',
      showLeftNotch: true,
      showRightNotch: true,
    },
    {
      step: 5,
      title: 'Software & Flight-Control R&D',
      icon: <FaChargingStation size={20} />,
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
        onMouseEnter={() => setHoveredStep(step)}
        onMouseLeave={() => setHoveredStep(null)}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="position-relative text-center"
        style={{
          flex: '1 1 140px',
          margin: '2px',
          maxWidth: '180px',
          marginRight: '20px',
        }}
      >
        {/* Icon */}
         <div
          className="rounded-circle d-flex justify-content-center align-items-center shadow-sm"
          style={{
            width: '50px',
            height: '50px',
            position: 'absolute',
            [iconPosition]: '-16px',
            left: '50%',
            transform: 'translateX(-50%)',
            border: `3px solid #4f948b`,
            backgroundColor: '#fff',
            zIndex: 2,
          }}
        >
          {icon}
        </div>

        {/* Card */}
         <div
          className="bg-white shadow-sm px-3 py-3"
          style={{
            paddingTop: iconPosition === 'top' ? '38px' : '16px',
            paddingBottom: iconPosition === 'bottom' ? '38px' : '16px',
            borderRadius: '10px',
            borderTop: iconPosition === 'top' ? `3px solid #4f948b` : undefined,
            borderBottom: iconPosition === 'bottom' ? `3px solid #4f948b` : undefined,
            fontSize: '0.85rem',
            minHeight: '150px',
            marginTop : "100px"
          }}
        >
          <div className="text-muted mb-1" style={{ fontSize: '0.75rem' }}>{step}</div>
          <div className="fw-bold" style={{ fontSize: '0.9rem' }}>{title}</div>
          {subtitle && (
            <p className="text-muted mt-1 mb-0" style={{ fontSize: '0.75rem', lineHeight: '1.3' }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Bar */}
      <div
          className="position-absolute w-100"
          style={{
            height: '10px',
            bottom: iconPosition === 'top' ? '-5px' : undefined,
            top: iconPosition === 'bottom' ? '-5px' : undefined,
            backgroundColor: "#c05538",
            borderRadius: '4px',
            zIndex: 1,
          }}
        />


        {/* Notches */}
        {showRightNotch && (
          <div
            className="position-absolute"
            style={{
              width: 0,
              height: 0,
              right: '-12px',
              top: '50%',
              transform: 'translateY(-50%)',
              borderTop: '12px solid transparent',
              borderBottom: '12px solid transparent',
              borderLeft: `12px solid #4f948b`,
              zIndex: 1,
            }}
          />
        )}
        {showLeftNotch && (
          <div
            className="position-absolute"
            style={{
              width: 0,
              height: 0,
              left: '-12px',
              top: '50%',
              transform: 'translateY(-50%)',
              borderTop: '12px solid transparent',
              borderBottom: '12px solid transparent',
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
  }}
>
      <div className="text-center mb-3">
        <h4 style={{ fontSize: '1.2rem', color: '#2c3e50', marginBottom: '0.5rem' }}>
          Military Drones Assembly
        </h4>
        <p
          className="text-muted"
          style={{
            fontSize: '0.9rem',
            marginBottom: '1rem',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
           Critical Minerals Supply Chain
        </p>
      </div>

      {/* Central Hover Info Box */}
      {hoveredStep && hoverInfo[hoveredStep] && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="position-absolute text-white p-3 shadow"
          style={{
            top: '75px',
            left: '500',
            transform: 'translateX(-50%)',
            backgroundColor: '#4e4e4e',
            borderRadius: '10px',
            width: '94%',
            maxWidth: '1200px',
            fontSize: '13px',
            zIndex: 100,
          }}
        >
          <div className="fw-bold mb-2 text-center">{hoverInfo[hoveredStep].title}</div>
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
    overflowX: 'auto',
    overflowY: 'auto',
    flexWrap: 'nowrap',
    scrollSnapType: 'x mandatory',
    WebkitOverflowScrolling: 'touch',
    paddingBottom: '1rem',
  }}
>
  {steps.map((s, i) => (
    <div key={i} style={{ scrollSnapAlign: 'start',marginTop : "10vh" }}>
      <StepCard {...s} setHoveredStep={setHoveredStep} />
    </div>
  ))}
</div>
    </div>
  );
}
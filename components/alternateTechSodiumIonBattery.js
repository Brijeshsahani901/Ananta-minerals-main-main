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

export default function AlternateTechSodiumIon() {
  const [hoveredStep, setHoveredStep] = useState(null);

  const hoverInfo = {
    1: {
      title: 'Mining & Raw Materials',
      items: [
        {
          name: 'Sodium carbonate (soda salt)',
          detail: 'U.S., China & Turkey',
        },
        {
          name: 'Metal carbon precursor',
          detail: 'Biomass source globally; processed by Na ion firms',
        },
        {
          name: 'Iron compound',
          detail: 'Australia, Brazil, China',
        },
      ],
    },
    2: {
      title: 'Refining & Chemical Processing',
      items: [
        {
          name: 'Soda Ash – Sodium Carbonate',
          detail: 'U.S., China, Turkey process soda ash for battery-grade supply',
        },
        {
          name: 'Processed to battery grade',
          detail: 'By Chinese and European firms',
        },
        {
          name: 'Carbonic Chemicals',
          detail: 'Refined in Europe and Asia for Prussian-like-type carboids',
        },
      ],
    },
    3: {
      title: 'Precursor & Active-Material Production',
      items: [
        {
          name: 'Prussian-Blue Carbon Synthesis',
          detail: 'Produced and scaled via Northwall CATL (Chinese), Prussian white carboids for its "Master" range',
        },
        {
          name: 'Hard Carbon Anodes',
          detail: 'Developed by MIT and scaled by CATL (China), Atifus (Sweden), National USA with biomass-derived sources',
        },
      ],
    },
    4: {
      title: 'Cell Design & Pilot Manufacturing',
      items: [
        {
          name: 'CATL (China)',
          detail: 'Producing cells in Yibin and Quânça',
        },
        {
          name: 'BYD (China)',
          detail: 'Xuzhou plant 300Wh capacity under construction',
        },
        {
          name: 'Hilda Battery (China)',
          detail: 'Optimal performance cells, scaling 5-10kWh',
        },
        {
          name: 'Faradion (UK)',
          detail: '1.0Wh target in India',
        },
        {
          name: 'Natron Energy (USA)',
          detail: 'Prussian blue cells for industrial storage; Michigan facility producing > 0.6/0.9kW/m²',
        },
      ],
    },
    5: {
      title: 'Module & Pack Assembly',
      items: [
        {
          name: 'Modular integration',
          detail: 'Pack built with aluminum-based interconnector and BMS integration primarily in China, Europe, and the U.S. (Nation, RTG, Northwall)',
        },
      ],
    },
  };

  const steps = [
    {
      step: 1,
      title: 'Mining & Raw Materials',
      icon: <FaAccessibleIcon size={20} />,
      iconPosition: 'top',
      color: '#3083DC',
      showRightNotch: true,
    },
    {
      step: 2,
      title: 'Refining & Chemical Processing',
      icon: <FaBrain size={20} />,
      iconPosition: 'bottom',
      color: '#1F3C88',
      showLeftNotch: true,
      showRightNotch: true,
    },
    {
      step: 3,
      title: 'Precursor & Active-Material Production',
      icon: <FaCogs size={20} />,
      iconPosition: 'top',
      color: '#4E4E4E',
      showLeftNotch: true,
      showRightNotch: true,
    },
    {
      step: 4,
      title: 'Cell Design & Pilot Manufacturing',
      icon: <FaFlask size={20} />,
      iconPosition: 'bottom',
      color: '#1F3C88',
      showLeftNotch: true,
      showRightNotch: true,
    },
    {
      step: 5,
      title: 'Module & Pack Assembly',
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
           marginTop : "100px"
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
            border: `3px solid #c38d41`,
            backgroundColor: '#fff',
            zIndex: 2,
            //    marginTop : "100px"
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
            borderTop: iconPosition === 'top' ? `3px solid #c38d41` : undefined,
            borderBottom: iconPosition === 'bottom' ? `3px solid #c38d41` : undefined,
            fontSize: '0.85rem',
            minHeight: '150px',
            // marginTop : "100px"
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
            backgroundColor: "#6f7e40",
            borderRadius: '4px',
            zIndex: 1,
            //    marginTop : "100px"
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
              borderLeft: `12px solid #6f7e40`,
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
              borderRight: `12px solid #c38d41`,
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
          Alternate Tech Sodium Ion Battery
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
          Explore the stages of sodium ion battery production and key players globally.
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
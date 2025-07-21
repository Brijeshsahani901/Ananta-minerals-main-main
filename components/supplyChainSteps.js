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

export default function SupplyChainSteps() {
  const [hoveredStep, setHoveredStep] = useState(null);

  const hoverInfo = {
    1: {
      title: 'Mineral Extraction',
      countries: [
        {
          name: 'Lithium (spodumene hard-rock & brine)',
          detail: 'Australia (Greenbushes spodumene), Chile & Argentina (Salar brine)',
        },
        {
          name: 'Nickel (laterite & sulfide)',
          detail: 'Indonesia, Philippines (laterite HPAL), Canada, Russia (sulfide deposits)',
        },
        {
          name: 'Cobalt (by product of copper/nickel)',
          detail: 'DRC (70% of global mine output)',
        },
        {
          name: 'Graphite (natural)',
          detail: 'China, Mozambique, Brazil',
        },
        {
          name: 'Manganese (oxide & sulfate)',
          detail: 'South Africa, Australia',
        },
      ],
    },
    2: {
      title: 'Concentration',
      countries: [
        {
          name: 'Australia',
          detail: 'Rincon Operation, Tianqi Lithium - Western Australia',
        },
        {
          name: 'Indonesia',
          detail: 'Pomalaa Nickel Plant, PT Aneka Tambang (ANTAM) - Sulawesi',
        },
        {
          name: 'China',
          detail: 'Baotou Rare Earth Processing Plant, China Northern Rare Earth Group - Inner Mongolia',
        },
      ],
    },
    3: {
      title: 'Refining',
      countries: [
        {
          name: 'China',
          detail: 'Yichun Lithium Refining Facility, Ganfeng Lithium - Jiangxi Province',
        },
        {
          name: 'South Korea',
          detail: 'Yulchon Lithium Hydroxide Plant, POSCO Pilbara Lithium Solution - Gwangyang, Jeollanam-do',
        },
        {
          name: 'Japan',
          detail: 'Niihama Nickel Refinery, Sumitomo Metal Mining - Niihama',
        },
      ],
    },
    4: {
      title: 'Precursor & Active-Material Synthesis',
      countries: [
        {
          name: 'China',
          detail: 'Ningde Gigafactory (Active-Material Line), CATL - Fujian Province',
        },
        {
          name: 'South Korea',
          detail: 'Ochang Energy Plant, LG Energy Solution - North Chungcheong Province',
        },
        {
          name: 'Poland',
          detail: 'Nysa Cathode Plant, Umicore Battery Materials Poland - Nysa',
        },
      ],
    },
    5: {
      title: 'Electrode & Component Fabrication',
      countries: [
        {
          name: 'China',
          detail: 'Wuxi Electrode-Fabrication Center, SVOLT Energy Technology - Jiangsu Province',
        },
        {
          name: 'Japan',
          detail: 'Suminoe Factory, Panasonic Energy Co., Ltd. - Osaka',
        },
        {
          name: 'South Korea',
          detail: 'Cathode Coating Line, POSCO Future M - Gwangyang, Jeollanam-do',
        },
      ],
    },
  };

  const steps = [
    {
      step: 1,
      title: 'Mineral Extraction',
      icon: <FaAccessibleIcon size={20} />,
      iconPosition: 'top',
      color: '#3083DC',
      showRightNotch: true,
    },
    {
      step: 2,
      title: 'Concentration',
      subtitle: '(Crushing/Grinding → Concentrates)',
      icon: <FaBrain size={20} />,
      iconPosition: 'bottom',
      color: '#1F3C88',
      showLeftNotch: true,
      showRightNotch: true,
    },
    {
      step: 3,
      title: 'Refining',
      subtitle: '(Smelting & Chemical purification)',
      icon: <FaCogs size={20} />,
      iconPosition: 'top',
      color: '#4E4E4E',
      showLeftNotch: true,
      showRightNotch: true,
    },
    {
      step: 4,
      title: 'Material Synthesis',
      icon: <FaFlask size={20} />,
      iconPosition: 'bottom',
      color: '#1F3C88',
      showLeftNotch: true,
      showRightNotch: true,
    },
    {
      step: 5,
      title: 'Electrode Fabrication',
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
            border: `3px solid ${color}`,
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
            borderTop: iconPosition === 'top' ? `3px solid ${color}` : undefined,
            borderBottom: iconPosition === 'bottom' ? `3px solid ${color}` : undefined,
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
            backgroundColor: color,
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
              borderLeft: `12px solid ${color}`,
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
              borderRight: `12px solid ${color}`,
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
          EV Battery 
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
          Global Manufacturing Process and Key players
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
          <div className="fw-bold mt-10 text-center" >{hoverInfo[hoveredStep].title}</div>
          {hoverInfo[hoveredStep].countries.map((c, i) => (
            <div key={i} className="mb-1">
              <strong>{c.name}</strong>: {c.detail}
            </div>
          ))}
        </motion.div>
      )}

      {/* Steps */}
<div
  className="step-cards-container d-flex h-100"
  onTouchStart={(e) => {
    const touch = e.touches[0];
    e.currentTarget.dataset.startX = touch.clientX;
    e.currentTarget.dataset.startY = touch.clientY;
  }}
  onTouchMove={(e) => {
    const touch = e.touches[0];
    const startX = parseFloat(e.currentTarget.dataset.startX || '0');
    const startY = parseFloat(e.currentTarget.dataset.startY || '0');
    const deltaX = Math.abs(touch.clientX - startX);
    const deltaY = Math.abs(touch.clientY - startY);

    // 👇 prevent Swiper from moving to next slide if horizontal scroll is active
    if (deltaX > deltaY) {
      e.stopPropagation();
    }
  }}
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

"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AsiaMineralInfographic() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  const page = {
    padding: "20px 30px",
    minHeight: "520px",
    borderRadius: 24,
    overflow: "hidden",
    position: "relative",
    background: "linear-gradient(180deg, #0b1814 0%, #0f211c 50%, #0b1814 100%)",
    boxShadow: `
      inset 0 0 100px rgba(0,0,0,0.6),
      0 8px 30px rgba(0,0,0,0.4)
    `,
    color: "#e5e5e5",
    fontFamily: "'Inter', sans-serif",
  };

  const backgroundGlow = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(13, 148, 136, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(234, 88, 12, 0.1) 0%, transparent 50%)
    `,
    zIndex: 0,
  };

  const title = {
    textAlign: "center",
    fontSize: "1.3rem",
    fontWeight: 800,
    marginBottom: 15,
    background: "linear-gradient(90deg, #ffffff, #b7c1c8, #ffffff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "200% 100%",
    animation: "shimmer 3s ease-in-out infinite",
    textShadow: "0 4px 20px rgba(0,0,0,0.8)",
    lineHeight: 1.2,
    position: "relative",
    width: "auto",
    zIndex: 10,
  };

  // Modern Glass Morphism Card
  const cardContainer = {
    position: "relative",
    paddingTop: "5px",
    transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
    height: "100%",
    borderRadius: 20,
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    cursor: "pointer",
  };

  const cardHoverEffect = {
   
  };

  const cardActiveEffect = {

  };

  // Enhanced 3D Icon with smooth animation
  const iconCircle = (borderColor, isHovered, isActive) => ({
    width: 90,
    height: 90,
    borderRadius: "50%",
    background: isHovered 
      ? "linear-gradient(145deg, #ffffff, #aab4bc)"
      : "linear-gradient(145deg, #f8f9fa, #b8c2cc)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 42,
    margin: "5px auto",
    border: `3px solid ${borderColor}`,
    boxShadow: isHovered
      ? `
        0 0 35px ${borderColor}cc,
        0 20px 40px rgba(0,0,0,0.8),
        inset 0 2px 12px rgba(255,255,255,0.9)
      `
      : `
        0 15px 35px rgba(0,0,0,0.6),
        inset 0 2px 8px rgba(255,255,255,0.7),
        inset 0 -2px 6px rgba(0,0,0,0.3)
      `,
  
    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    cursor: "pointer",
    zIndex: 20,
    position: "relative",
    overflow: "hidden",
  });

  // Modern Gradient Arrow Block
  const arrowBlock = (color1, color2, isHovered, isActive) => ({
    width: "92%",
    margin: "0 auto",
    marginTop: -20,
    padding: "24px 18px",
    background: `linear-gradient(135deg, ${color1}20, ${color2}40)`,
    backdropFilter: "blur(10px)",
    border: `1.5px solid ${isHovered ? color1 + '80' : 'rgba(255,255,255,0.1)'}`,
    clipPath: "polygon(0 0, 85% 0, 95% 50%, 85% 100%, 0 100%)",
    color: "#fff",
    fontWeight: 800,
    textAlign: "center",
    boxShadow: isHovered
      ? `
        0 20px 40px rgba(0,0,0,0.9),
        inset 0 2px 12px rgba(255,255,255,0.3)
      `
      : "0 12px 30px rgba(0,0,0,0.6)",

    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
    zIndex: 15,
    position: "relative",
    borderRadius: 12,
  });

  const statValue = {
    fontSize: 22,
    fontWeight: 900,
    letterSpacing: "0.5px",
    textShadow: "0 4px 8px rgba(0,0,0,0.7)",
    lineHeight: 1.2,
    background: "linear-gradient(90deg, #ffffff, #e2e8f0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const statSubtitle = {
    fontSize: 12,
    opacity: 0.9,
    fontWeight: 600,
    marginTop: 4,
    color: "#cbd5e1",
  };

  const statLabel = {
    fontSize: 12,
    marginTop: 8,
    fontWeight: 700,
    textDecoration: "none",
    opacity: 0.95,
    color: "#f8fafc",
    letterSpacing: "0.3px",
  };

  const desc = {
    fontSize: 13,
    lineHeight: 1.6,
    color: "#e2e8f0",
    marginTop: 20,
    padding: "0 12px",
    textAlign: "center",
    transition: "all 0.4s ease",
    opacity: 0.9,
  };

  const cardsRow = {
    height: "calc(100% - 100px)",
    alignItems: "stretch",
    position: "relative",
    zIndex: 5,
  };

  // Animation keyframes as inline style
  const styleTag = `  `;

  // Custom icons with card colors
  const CustomIcon = ({ type, color, isHovered }) => {
    const iconStyle = {
      fontSize: "42px",
      filter: isHovered ? "drop-shadow(0 4px 8px rgba(0,0,0,0.4))" : "none",
      transform: isHovered ? "scale(1.1)" : "scale(1)",
      transition: "all 0.3s ease",
      display: "block",
    };

    switch (type) {
      case "magnet":
        return (
          <div style={iconStyle}>
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 3V7M16 3V7M3 13H21M3 21H21M5 7H19V21H5V7Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 13H15V17H9V13Z" fill={color}/>
            </svg>
          </div>
        );
      case "lithium":
        return (
          <div style={iconStyle}>
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2V4M12 20V22M4 12H2M6.34 6.34L4.93 4.93M17.66 6.34L19.07 4.93M6.34 17.66L4.93 19.07M17.66 17.66L19.07 19.07M22 12H20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="4" fill={color}/>
            </svg>
          </div>
        );
      case "mining":
        return (
          <div style={iconStyle}>
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10H14V14H10V10Z" fill={color}/>
              <path d="M2 8L12 3L22 8V16L12 21L2 16V8Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
              <path d="M6 12H8M16 12H18M12 6V8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const CountryCard = ({ country, iconType, color1, color2, value, subtitle, label, description, isHovered, isActive, onHover, onClick }) => (
    <div
      className="col-md-4 text-center smooth-transition"
      style={{
        ...cardContainer,
        ...(isHovered ? cardHoverEffect : {}),
        ...(isActive ? cardActiveEffect : {}),
      }}
      onMouseEnter={() => onHover(country)}
      onMouseLeave={() => onHover(null)}
      onMouseDown={() => onClick(country)}
      onMouseUp={() => onClick(null)}
    >
      {/* Animated background glow */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at center, ${color1}15 0%, transparent 70%)`,
        opacity: isHovered ? 1 : 0,
        transition: "opacity 0.5s ease",
        borderRadius: 20,
        zIndex: -1,
      }} />
      
      <div style={iconCircle(color1, isHovered, isActive)}>
        <CustomIcon type={iconType} color={color1} isHovered={isHovered} />
      </div>

      <div style={arrowBlock(color1, color2, isHovered, isActive)}>
        <div style={statValue}>{value}</div>
        <div style={statSubtitle}>{subtitle}</div>
        <div style={statLabel}>{label}</div>
      </div>

      <p style={{ 
        ...desc, 
        opacity: isHovered ? 1 : 0.85,
        transform: isHovered ? "translateY(4px)" : "translateY(0)",
        color: isHovered ? "#f1f5f9" : "#e2e8f0",
        transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}>
        {description}
      </p>
    </div>
  );

  return (
    <div style={page}>
      <style>{styleTag}</style>
      <div style={backgroundGlow} />
      
      <h2 style={title} className="px-5">
        Asia's Critical Mineral Powerhouses: Tracking Korea, Indonesia & Japan
      </h2>

      <div className="row" style={cardsRow}>
        <CountryCard
          country="japan"
          iconType="magnet"
          color1="#2563eb"
          color2="#1e40af"
          value="10–15,000T"
          subtitle="Per year"
          label="Global Magnet Output"
          description="Japan produces 10,000–15,000 t of magnets annually—around 5–10% of global output—ranking second after China. JOGMEC has supported 100+ metal projects through financing and guarantees, including major investments in Lynas and strategic stockpiles of cobalt, ferrovanadium, and molybdenum for its automotive and electronics sectors."
          isHovered={hoveredCard === "japan"}
          isActive={activeCard === "japan"}
          onHover={setHoveredCard}
          onClick={setActiveCard}
        />

        <CountryCard
          country="korea"
          iconType="lithium"
          color1="#0d9488"
          color2="#0f766e"
          value="68,000T"
          subtitle="Per year"
          label="Lithium Hydroxide"
          description="Posco a South korean company has a joint venture with Australian Company to process Lithium for batteries .South Korea is currently the No. 1 producer of lithium hydroxide outside China, and that its output is set to grow ~87% between 2024 and 2030"
          isHovered={hoveredCard === "korea"}
          isActive={activeCard === "korea"}
          onHover={setHoveredCard}
          onClick={setActiveCard}
        />

        <CountryCard
          country="indonesia"
          iconType="mining"
          color1="#ea580c"
          color2="#c2410c"
          value="11.9%"
          subtitle="Mining Contribution"
          label="In GDP"
          description="Indonesia holds 72 Mt of nickel reserves and produces nearly half of global supply. About 80% goes to NPI/ferronickel, while under 20% becomes MHP for EV batteries. The country operates 44 nickel smelters, major alumina and copper refining capacity, and produces 60–70 kt/year of refined tin."
          isHovered={hoveredCard === "indonesia"}
          isActive={activeCard === "indonesia"}
          onHover={setHoveredCard}
          onClick={setActiveCard}
        />
      </div>
    </div>
  );
}
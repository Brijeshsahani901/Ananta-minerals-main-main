"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiFlag, FiGlobe } from "react-icons/fi";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AluminiumInfographic() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  const containerStyle = {
    minHeight: "530px",
    background: "linear-gradient(145deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
    borderRadius: "10px",
    padding: "15px",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 15px 50px rgba(0, 0, 0, 0.7)",
    margin: "0 auto",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "15px",
    position: "relative",
    zIndex: 2,
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "900",
    background: "linear-gradient(90deg, #60a5fa, #34d399, #fbbf24)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "5px",
    textShadow: "0 2px 15px rgba(0,0,0,0.4)",
    lineHeight: "1.3",
  };

  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "12px",
    minHeight: "450px",
    padding: "5px",
    // Responsive breakpoints
    "@media (max-width: 1200px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "15px",
    },
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "12px",
    },
  };

  const cardStyle = (isHovered, isActive, color) => ({
    background: isHovered 
      ? `linear-gradient(180deg, ${color}15 0%, rgba(30, 41, 59, 0.95) 100%)`
      : "rgba(30, 41, 59, 0.85)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    padding: "15px",
    border: `1px solid ${isHovered ? `${color}60` : "rgba(255,255,255,0.1)"}`,
    transition: "all 0.3s ease",
    transform: isActive ? "scale(0.98)" : isHovered ? "translateY(-5px)" : "none",
    boxShadow: isHovered 
      ? `0 15px 35px rgba(0,0,0,0.5), 0 0 0 1px ${color}30`
      : "0 8px 25px rgba(0,0,0,0.4)",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    height: "100%",
    minHeight: "400px",
    // Responsive
    "@media (max-width: 1200px)": {
      minHeight: "380px",
    },
    "@media (max-width: 768px)": {
      minHeight: "auto",
      padding: "12px",
    },
  });

  const iconContainerStyle = (color, isHovered) => ({
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: isHovered
      ? `linear-gradient(145deg, ${color}40, ${color}10)`
      : "linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "12px",
    border: `2px solid ${color}${isHovered ? "80" : "40"}`,
    boxShadow: isHovered
      ? `0 0 25px ${color}50, inset 0 2px 10px rgba(255,255,255,0.2)`
      : "inset 0 2px 8px rgba(0,0,0,0.3), 0 4px 15px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
    // Responsive
    "@media (max-width: 768px)": {
      width: "60px",
      height: "60px",
    },
  });

  const valueStyle = {
    fontSize: "1.5rem",
    fontWeight: "900",
    background: "linear-gradient(90deg, #ffffff, #e2e8f0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "5px",
    lineHeight: "1.2",
    textAlign: "center",
    // Responsive
    "@media (max-width: 768px)": {
      fontSize: "1.3rem",
    },
  };

  const labelStyle = (color) => ({
    fontSize: "0.9rem",
    fontWeight: "700",
    color: "#f1f5f9",
    marginBottom: "10px",
    textAlign: "center",
    borderBottom: `2px solid ${color}40`,
    paddingBottom: "6px",
    width: "100%",
    // Responsive
    "@media (max-width: 768px)": {
      fontSize: "0.85rem",
      marginBottom: "8px",
    },
  });

  const descriptionStyle = (isHovered) => ({
    fontSize: "0.75rem",
    color: isHovered ? "#e2e8f0" : "#94a3b8",
    lineHeight: "1.5",
    textAlign: "center",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    transition: "all 0.3s ease",
    padding: "0 5px",
    // Responsive
    "@media (max-width: 768px)": {
      fontSize: "0.7rem",
    },
  });



  const bulletListStyle = {
    paddingLeft: "12px",
    margin: "8px 0",
  };

  const bulletItemStyle = {
    fontSize: "0.7rem",
    color: "#e2e8f0",
    lineHeight: "1.4",
    marginBottom: "6px",
    position: "relative",
  };

  const bulletIconStyle = {
    position: "absolute",
    left: "-12px",
    color: "#fbbf24",
    fontSize: "0.9rem",
  };

 

  // Custom icons
  const CustomIcon = ({ type, color, isHovered }) => {
    
    const iconStyle = {
      width: "35px",
      height: "35px",
      filter: isHovered ? `drop-shadow(0 0 10px ${color}80)` : "none",
      transition: "all 0.3s ease",
      // Responsive
      "@media (max-width: 768px)": {
        width: "30px",
        height: "30px",
      },
    };

    switch (type) {
      case "production":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21H21M3 10H21M5 10L5 21M19 10V21M12 10V21M9 3L7 8M15 3L17 8M6 3H18L20 8H4L6 3Z" 
              stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 14H12.01" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case "recycling":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3L19 6L21 6C21.5523 6 22 6.44772 22 7V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V7C2 6.44772 2.44772 6 3 6L5 6L8 3H16Z" 
              stroke={color} strokeWidth="2" strokeLinejoin="round"/>
            <path d="M8 3H16V6H8V3Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
            <path d="M12 10V16M12 16L9 13M12 16L15 13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "china":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="2"/>
            <path d="M12 3V21M3 12H21" stroke={color} strokeWidth="1.5"/>
            <circle cx="12" cy="12" r="3" fill={color}/>
          </svg>
        );
      case "india":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" 
              stroke={color} strokeWidth="2"/>
            <circle cx="12" cy="9" r="1" fill={color}/>
            <path d="M12 12V16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <path d="M8 12H16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const data = [
       {
      id: "recycling",
      icon: "recycling",
      color: "#22c55e", // Green
      value: "75%",
      label: "Global Aluminium Can Recycling",
      description: "Global ‘Aluminium Can’ Recycling reaches 75%",
      additional: "",
      highlight: "75%",
      stats: [
        "Energy savings: 95% vs primary production",
        "Recycled aluminium saves 8 tonnes CO₂ per tonne"
      ]
    },
    {
      id: "production",
      icon: "production",
      color: "#3b82f6", // Blue
      value: "75 M Tonnes",
      label: "World Primary Aluminium Production",
      description: "Annual global primary aluminium production",
      additional: "World primary aluminium production: 70–75 million tonnes per year. China produces approximately 55- 60% compared to India which is 6%",
      comparison: [
        { country: "China", percentage: "55-60%" },
        { country: "India", percentage: "6%" }
      ]
    },
 
    {
      id: "china",
      icon: "china",
      color: "#ef4444", // Red
      value: "35-40%",
      label: "China’s dominance",
      description: "China’s dominance is strongly linked to power generation:",
      additional: "Approximately 35-40% of the production cost is occupied by power generation.",
      details: [
        "Approximately 35-40% of the production cost is occupied by power generation."
      ],
      powerCost: "35-40% of production cost is power"
    },
    {
      id: "india",
        icon: <FiGlobe style={{ color: "#d32f2f", fontSize: "28px" }} />,
      color: "#f59e0b", // Amber
      value: "",
      label: "",
      description: "How does China dominate the Aluminium Martket?",
      additional: "",
      growthStats: [
    
      ],
      advantages: [
           "For years, many Chinese smelters got below-market electricity, especially in coal-rich regions such as Inner Mongolia and Xinjiang, or hydro-rich provinces such as Yunnan and Sichuan.",
        "Local governments often offered discounted industrial tariffs, tax breaks, and infrastructure to attract/alleviate smelters and related industries.",
      ],
      marketShare: ""
    }
  ];

  // Apply responsive styles dynamically
  const applyResponsiveStyles = () => {
    const gridStyle = { ...gridContainer };
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const isTablet = typeof window !== 'undefined' && window.innerWidth <= 1200 && window.innerWidth > 768;
    
    if (isMobile) {
      gridStyle.gridTemplateColumns = "1fr";
      gridStyle.gap = "12px";
    } else if (isTablet) {
      gridStyle.gridTemplateColumns = "repeat(2, 1fr)";
      gridStyle.gap = "15px";
    } else {
      gridStyle.gridTemplateColumns = "repeat(4, 1fr)";
      gridStyle.gap = "12px";
    }
    
    return gridStyle;
  };

  return (
    <div className={montserrat.className} style={containerStyle}>
      <div style={headerStyle}>
        <h2 className={montserrat.className} style={titleStyle}>Aluminium: The Metal That Moves the World</h2>
      </div>

      <div style={applyResponsiveStyles()}>
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              ...cardStyle(
                hoveredCard === item.id,
                activeCard === item.id,
                item.color
              ),
              minHeight: window.innerWidth <= 768 ? "auto" : "400px",
            }}
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onMouseDown={() => setActiveCard(item.id)}
            onMouseUp={() => setActiveCard(null)}
          >
           <div style={iconContainerStyle(item.color, hoveredCard === item.id)}>
  {item.id === "india" ? (
    <FiGlobe style={{
      width: "35px",
      height: "35px",
      color: item.color,
      filter: hoveredCard === item.id ? `drop-shadow(0 0 10px ${item.color}80)` : "none",
      transition: "all 0.3s ease",
    }} />
  ) : (
    <CustomIcon 
      type={item.icon} 
      color={item.color} 
      isHovered={hoveredCard === item.id}
    />
  )}
</div>

            <div style={valueStyle}>{item.value}</div>
            <div style={labelStyle(item.color)}>{item.label}</div>

            <div style={descriptionStyle(hoveredCard === item.id)}>
              <div style={{ width: "100%" }}>
                <div style={{ marginBottom: "6px", fontWeight: "600", color: "#e2e8f0", fontSize: "0.8rem" }}>
                  {item.description}
                </div>
                
                {item.additional && (
                  <div style={{ fontSize: "0.7rem", color: "#cbd5e1", marginBottom: "8px" }}>
                    {item.additional}
                  </div>
                )}

            

                {item.id === "india" && (
                  <div>
              
                    <ul style={bulletListStyle}>
                      {item.growthStats.map((stat, index) => (
                        <li key={index} style={bulletItemStyle}>
                          <span style={bulletIconStyle}>•</span>
                          {stat}
                        </li>
                      ))}
                    </ul>
                    <ul style={bulletListStyle}>
                      {item.advantages.map((advantage, index) => (
                        <li key={index} style={{...bulletItemStyle, color: "#94a3b8"}}>
                          <span style={{...bulletIconStyle, color: "#60a5fa"}}>✓</span>
                          {advantage}
                        </li>
                      ))}
                    </ul>
                 
                  </div>
                )}
{/* 
                {item.id === "china" && (
                  <div>
                    <ul style={bulletListStyle}>
                      {item.details.map((detail, index) => (
                        <li key={index} style={bulletItemStyle}>
                          <span style={bulletIconStyle}>•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div style={percentageBoxStyle(item.color)}>
                      <div style={percentageValueStyle}>{item.value}</div>
                      <div style={{ fontSize: "0.7rem", color: "#e2e8f0" }}>
                        {item.powerCost}
                      </div>
                    </div>
                  </div>
                )} */}

                {/* {item.id === "recycling" && item.stats && (
                  <div style={comparisonStyle}>
                    <div style={{ fontSize: "0.7rem", color: "#fbbf24", fontWeight: "600", marginBottom: "6px" }}>
                      Environmental Benefits:
                    </div>
                    {item.stats.map((stat, index) => (
                      <div key={index} style={{ 
                        fontSize: "0.65rem",
                        color: "#e2e8f0",
                        marginBottom: "4px",
                        paddingLeft: "8px",
                        borderLeft: `2px solid ${item.color}`
                      }}>
                        {stat}
                      </div>
                    ))}
                  </div>
                )} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
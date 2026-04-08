"use client";

import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import RareEarthInfographic from "../RareEarthInfographic";
import IndiaAfghanistan from "../IndiaAfghanistan";
import IndiaAndMongolia from "../infographics/indiaAndMongolia";
import MalaysianMineralInfographic from "../infographics/indiaMalaysiaCriticalMinerals";
import ChinaAdvantage from "../infographics/chinaAdvantage";
import InvestInMalasiya from "../infographics/investInMalasiya";
import Infographic520Screenshot from "../infographics/semiconductorLandscape";
import SyntheticGraphite from "../infographics/syntheticGraphite";
import Aluminium from "../infographics/Aluminium";
import CriticalMineralMission from "../infographics/criticalMineralMission";
import IndiaOmanMineralInfographic from "../infographics/omenPotential";
import Venezuela from "../infographics/venezuela";
import GreenlandStrategy from "../infographics/GreenlandStrategy";
import MineralsSnapshot from "../infographics/MineralSnapshot";
import SilverCriticalMineral from "../infographics/Silver";
import IndiaUSFTA from "../infographics/IndiaUSFTA";
import CountryStats from "../infographics/CountryStats";
import ChileSnapshot from "../infographics/ChileSnapshot";
import RareEarthStory from "../infographics/RareEarthStory";
import GCCConflict from "../infographics/GCCConflict";
import CoastalBeaches from "../infographics/CoastalBeaches";
import HeliumSignificance from "../infographics/HeliumSignificance";
import MiningBottleneck from "../infographics/MiningBottleneck";
import JapanIndiaCriticalMinerals from "../infographics/JapanIndiaCriticalMinerals";


const BlackWrapper = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "540px",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
};

export default function TechnologySlider() {
  const slides = [
    
     <BlackWrapper><JapanIndiaCriticalMinerals /></BlackWrapper>,
    <BlackWrapper><MiningBottleneck /></BlackWrapper>,
    <BlackWrapper><HeliumSignificance /></BlackWrapper>,
     <BlackWrapper><CoastalBeaches /></BlackWrapper>,
     <BlackWrapper><GCCConflict /></BlackWrapper>,
    <BlackWrapper><RareEarthStory /></BlackWrapper>,
    <BlackWrapper><ChileSnapshot /></BlackWrapper>,
    <BlackWrapper><CountryStats /></BlackWrapper>,
    <BlackWrapper><IndiaUSFTA /></BlackWrapper>,
    <BlackWrapper><SilverCriticalMineral /></BlackWrapper>,
    <BlackWrapper><MineralsSnapshot /></BlackWrapper>,
    <BlackWrapper><GreenlandStrategy /></BlackWrapper>,
    <BlackWrapper><Venezuela /></BlackWrapper>,
    <BlackWrapper><IndiaOmanMineralInfographic /></BlackWrapper>,
    <BlackWrapper><CriticalMineralMission /></BlackWrapper>,
    <BlackWrapper><Aluminium /></BlackWrapper>,
    <BlackWrapper><SyntheticGraphite /></BlackWrapper>,
    <BlackWrapper><Infographic520Screenshot /></BlackWrapper>,
    <BlackWrapper><InvestInMalasiya /></BlackWrapper>,
    <BlackWrapper><ChinaAdvantage /></BlackWrapper>,
    <BlackWrapper><MalaysianMineralInfographic /></BlackWrapper>,
    <BlackWrapper><IndiaAndMongolia /></BlackWrapper>,
    <BlackWrapper><IndiaAfghanistan /></BlackWrapper>,
    <BlackWrapper><RareEarthInfographic /></BlackWrapper>,
  ];

  const total = slides.length;

  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState("right");
  const [isPaused, setIsPaused] = useState(false);

  /* ===== NAVIGATION ===== */
  const nextSlide = () => {
    setPrevIndex(index);
    setDirection("right");
    setIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setPrevIndex(index);
    setDirection("left");
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  /* ===== AUTO SLIDE (1 SECOND) ===== */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5900000); // 1 second

    return () => clearInterval(interval);
  }, [index, isPaused]);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "540px", backgroundColor: "black"
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ===== ARROWS ===== */}
      <div className="slider-arrows">
        <div onClick={prevSlide} className="arrow arrow-left">
          <FiChevronLeft size={30} color="#fff" />
        </div>

        <div onClick={nextSlide} className="arrow arrow-right">
          <FiChevronRight size={30} color="#fff" />
        </div>
      </div>

      {/* ===== CAROUSEL SHELL ===== */}
      <Carousel activeIndex={0} controls={false} indicators={false} interval={null} slide={false}>
        <Carousel.Item style={{ minHeight: "540px", backgroundColor: "black" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              minHeight: "540px", backgroundColor: "black"
            }}
          >
            {/* OLD SLIDE (EXIT) */}
            {prevIndex !== null && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  animation:
                    direction === "right"
                      ? "slideOutLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                      : "slideOutRight 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "transform",
                }}
              >
                {slides[prevIndex]}
              </div>
            )}

            {/* NEW SLIDE (ENTER) */}
            <div
              key={index}
              style={{
                position: "relative",
                animation:
                  direction === "right"
                    ? "slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                    : "slideInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: "transform",
              }}
            >
              {slides[index]}
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* ===== STYLES & ANIMATIONS ===== */}
      <style>
        {`
          .slider-arrows {
            position: absolute;
            top: 10px;
            left: 0;
            right: 0;
            z-index: 20;
            pointer-events: none;
          }

          .arrow {
            position: absolute;
            cursor: pointer;
            pointer-events: all;
          }

          .arrow-left {
            left: 10px;
          }

          .arrow-right {
            right: 10px;
          }

          @media (max-width: 768px) {
            .slider-arrows {
              top: auto;
              bottom: 12px;
              display: flex;
              justify-content: space-between;
              padding: 0 20px;
            }

            .arrow {
              position: relative;
            }
          }

          @keyframes slideInRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }

          @keyframes slideOutLeft {
            from { transform: translateX(0); }
            to { transform: translateX(-35%); opacity: 0; }
          }

          @keyframes slideInLeft {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
          }

          @keyframes slideOutRight {
            from { transform: translateX(0); }
            to { transform: translateX(35%); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}

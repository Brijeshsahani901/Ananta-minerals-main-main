
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* ===== IMPORT SLIDES ===== */
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

export default function TechnologySlider() {
  const slides = [
    <IndiaUSFTA/>,
    <SilverCriticalMineral />,
    <MineralsSnapshot />,
    <GreenlandStrategy />,
    <Venezuela />,
    <IndiaOmanMineralInfographic />,
    <CriticalMineralMission />,
    <Aluminium />,
    <SyntheticGraphite />,
    <Infographic520Screenshot />,
    <InvestInMalasiya />,
    <ChinaAdvantage />,
    <MalaysianMineralInfographic />,
    <IndiaAndMongolia />,
    <IndiaAfghanistan />,
    <RareEarthInfographic />,
  ];

  const total = slides.length;

  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState("right");

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

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* ARROWS */}
  {/* ARROWS */}
<div className="slider-arrows">
  <div onClick={prevSlide} className="arrow arrow-left">
    <FiChevronLeft size={30} color="#fff" />
  </div>

  <div onClick={nextSlide} className="arrow arrow-right">
    <FiChevronRight size={30} color="#fff" />
  </div>
</div>


      {/* CAROUSEL SHELL */}
      <Carousel activeIndex={0} controls={false} indicators interval={null} slide={false}>
        <Carousel.Item>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
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

      {/* KEYFRAMES */}
<style>
{`
  /* ===== DESKTOP DEFAULT ===== */
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

  /* ===== MOBILE VIEW ===== */
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

  /* ===== ANIMATIONS ===== */
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

/* ARROW STYLES */
const arrowLeft = {
  position: "absolute",
  top: 10,
  left: 10,
  zIndex: 20,
  cursor: "pointer",
};

const arrowRight = {
  position: "absolute",
  top: 10,
  right: 10,
  zIndex: 20,
  cursor: "pointer",
};

import { useState } from "react";
import { Carousel } from "react-bootstrap";
import RareEarthInfographic from "../RareEarthInfographic";
import IndiaAfghanistan from "../IndiaAfghanistan";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import IndiaAndMongolia from "../infographics/indiaAndMongolia";
import MalaysianMineralInfographic from "../infographics/indiaMalaysiaCriticalMinerals";
import ChinaAdvantage from "../infographics/chinaAdvantage";
import InvestInMalasiya from "../infographics/investInMalasiya";
import Infographic520Screenshot from "../infographics/semiconductorLandscape";
export default function TechnologySlider() {
  const totalSlides = 6;
  const [index, setIndex] = useState(0);
  const [prevClicked, setPrevClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  const nextSlide = () => {
    setNextClicked(true);
    setTimeout(() => setNextClicked(false), 150);
    setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setPrevClicked(true);
    setTimeout(() => setPrevClicked(false), 150);
    setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // ✅ Arrow color logic:
  // White on last 2 slides (index 4 and 5), dark otherwise
  const isWhiteSlide = index < 6;
  const arrowColor = isWhiteSlide ? "#fff" : "#333";

  const buttonBaseStyle = {
    position: "absolute",
    zIndex: 20,
    cursor: "pointer",
    backgroundColor: "transparent",
    padding: "8px 12px",
    borderRadius: "4px",
    transition: "transform 0.1s ease, opacity 0.2s ease",
    userSelect: "none",
    opacity: 0.9,
    ...(prevClicked || nextClicked ? { transform: "scale(0.92)" } : {}),
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Desktop View - Buttons at Top */}
      <div className="d-none d-md-block">
        <div
          onClick={prevSlide}
          style={{
            ...buttonBaseStyle,
            top: "10px",
            left: "10px",
          }}
        >
          <FiChevronLeft size={30} color={arrowColor} />
        </div>
        <div
          onClick={nextSlide}
          style={{
            ...buttonBaseStyle,
            top: "10px",
            right: "10px",
          }}
        >
          <FiChevronRight size={30} color={arrowColor} />
        </div>
      </div>

      {/* Mobile View - Buttons at Bottom */}
      <div className="d-md-none">
        <div
          onClick={prevSlide}
          style={{
            ...buttonBaseStyle,
            bottom: "10px",
            left: "10px",
          }}
        >
          <FiChevronLeft size={28} color={arrowColor} />
        </div>
        <div
          onClick={nextSlide}
          style={{
            ...buttonBaseStyle,
            bottom: "10px",
            right: "10px",
          }}
        >
          <FiChevronRight size={28} color={arrowColor} />
        </div>
      </div>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        controls={false}
        indicators
        touch={false} // Disable swipe gestures
      >

  <Carousel.Item>
          <div className="d-block w-100">
            <Infographic520Screenshot />
          </div>
        </Carousel.Item>
       
        <Carousel.Item>
          <div className="d-block w-100">
            <InvestInMalasiya />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-block w-100">
            <ChinaAdvantage />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100">
            <MalaysianMineralInfographic />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100">
            <IndiaAndMongolia />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-block w-100">
            <IndiaAfghanistan />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-block w-100">
            <RareEarthInfographic />
          </div>
        </Carousel.Item>

        {/* <Carousel.Item>
          <div className="d-block w-100">
            <SolarPV />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-block w-100">
            <SupplyChainSteps />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-block w-100">
            <AlternateTechSodiumIon />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-block w-100">
            <MilitaryDronesAssembly />
          </div>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}

import { useState } from "react";
import { Carousel } from "react-bootstrap";
import SupplyChainSteps from "../supplyChainSteps";
import AlternateTechSodiumIon from "../alternateTechSodiumIonBattery";
import MilitaryDronesAssembly from "../militaryDroneAssembly";
import SolarPV from "../SolarPv";
import RareEarthInfographic from "../RareEarthInfographic";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function TechnologySlider() {
  const totalSlides = 5; 
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

  const isLastSlide = index === totalSlides - 1;
  const arrowColor = isLastSlide ? "#fff" : "#333";

  const buttonBaseStyle = {
    position: "absolute",
    zIndex: 20,
    cursor: "pointer",
    backgroundColor: "transparent",
    padding: "8px 12px",
    borderRadius: "4px",
    transition: "transform 0.1s ease",
    userSelect: "none",
    boxShadow: "none",
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
            zIndex: 5,
          }}
        >
          <FiChevronLeft size={28} color={arrowColor} />
        </div>
        <div
          onClick={nextSlide}
          style={{
            ...buttonBaseStyle,
            top: "10px",
            right: "10px",
            zIndex: 5,
          }}
        >
          <FiChevronRight size={28} color={arrowColor} />
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
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100">
            <RareEarthInfographic />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

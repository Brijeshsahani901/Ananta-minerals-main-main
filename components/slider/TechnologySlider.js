// // components/TechnologySlider.js

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper";
// import SupplyChainSteps from "../supplyChainSteps";
// import data from "@/util/blogData";
// import Link from "next/link";
// import AlternateTechSodiumIon from "../alternateTechSodiumIonBattery";
// import MilitaryDronesAssembly from "../militaryDroneAssembly";
// import SolarPV from "../SolarPv";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// export default function TechnologySlider() {
//   return (
//     <>
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         slidesPerView={1}
//         spaceBetween={0}
//         centeredSlides={true}
//         loop={true}
//         autoplay={{
//           delay: 100000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//           el: ".block-gallery-pagination",
//         }}
//          noSwipingClass="no-swiping"
//         nested={true} // ✅ Allow scrollable children
//         touchStartPreventDefault={false} // ✅ Let inner components receive touch
//         className="row tgslider__active"
//       >
//         <SwiperSlide>
//           <SupplyChainSteps />
//         </SwiperSlide>

//         <SwiperSlide>
//           <AlternateTechSodiumIon />
//         </SwiperSlide>

//         <SwiperSlide>
//           <MilitaryDronesAssembly />
//         </SwiperSlide>

//         <SwiperSlide>
//           <SolarPV /> {/* ✅ This one now scrolls properly on mobile */}
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

import { useState } from "react";
import { Carousel } from "react-bootstrap";
import SupplyChainSteps from "../supplyChainSteps";
import AlternateTechSodiumIon from "../alternateTechSodiumIonBattery";
import MilitaryDronesAssembly from "../militaryDroneAssembly";
import SolarPV from "../SolarPv";

export default function TechnologySlider() {
  const totalSlides = 4;
  const [index, setIndex] = useState(0);
  const [prevClicked, setPrevClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  const nextSlide = () => {
    setNextClicked(true);
    setTimeout(() => setNextClicked(false), 150); // reset after animation
    setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setPrevClicked(true);
    setTimeout(() => setPrevClicked(false), 150);
    setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const buttonBaseStyle = {
    position: "absolute",
    top: "10px",
    zIndex: 20,
    cursor: "pointer",
    backgroundColor: "#fff",
    padding: "8px 12px",
    borderRadius: "4px",
    boxShadow: "0 0 5px rgba(0,0,0,0.3)",
    transition: "transform 0.1s ease, background-color 0.1s ease",
    userSelect: "none",
  };

  const clickedStyle = {
    transform: "scale(0.92)",
    // backgroundColor: "#e0e0e0",
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Custom Prev Button */}
      <div
        onClick={prevSlide}
        style={{
          ...buttonBaseStyle,
          left: "10px",
          ...(prevClicked ? clickedStyle : {}),
        }}
      >
        &#8592; Prev
      </div>

      {/* Custom Next Button */}
      <div
        onClick={nextSlide}
        style={{
          ...buttonBaseStyle,
          right: "10px",
          ...(nextClicked ? clickedStyle : {}),
        }}
      >
        Next &#8594;
      </div>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        controls={false}
        indicators
      >
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
            <SolarPV />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect, useState } from "react";

export default function TrendingSlider() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  const data = [
    {
      path: "/agriculture",
      label: "Agriculture",
      img: `${basePath}/assets/sectors_images/agriculture.jpg`,
    },
    {
      path: "/automobile",
      label: "Automobile",
      img: `${basePath}/assets/sectors_images/automobile.jpg`,
    },
    {
      path: "/defence-and-aerospace",
      label: "Defence & Aerospace",
      img: `${basePath}/assets/sectors_images/defence.jpg`,
    },
    {
      path: "/renewable-energy",
      label: "Renewable Energy",
      img: `${basePath}/assets/sectors_images/renewable.jpg`,
    },
  ];

  useEffect(() => {
    setIsSwiperReady(true);
  }, []);

  return (
    <div className="position-relative py-4 px-0">
      {isSwiperReady && (
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="trending-card group">
                <Link href={item.path}>
                  <div className="image-wrapper">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="img-fluid zoom-image"
                    />

                    {/* Top-left label */}
                    <div className="label-top-left">
                      <span>{item.label}</span>
                    </div>

                    {/* Center overlay label on hover */}
                    <div className="label-overlay">
                      <span>{item.label}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Custom navigation buttons (mobile only) */}
      <button
        ref={prevRef}
        className="swiper-button-prev d-md-none position-absolute"
      />
      <button
        ref={nextRef}
        className="swiper-button-next d-md-none position-absolute"
      />

      {/* Styles */}
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          background: rgba(0, 0, 0, 0.4);
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }

        .swiper-button-prev {
          left: 10px;
        }

        .swiper-button-next {
          right: 10px;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 16px;
          font-weight: bold;
        }

        .trending-card {
          padding: 5px;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 250px;
          border-radius: 15px;
          overflow: hidden;
        }

        .zoom-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .group:hover .zoom-image {
          transform: scale(1.05);
        }

        .label-top-left {
          position: absolute;
          top: 8px;
          left: 8px;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 6px 12px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          z-index: 2;
          transition: opacity 0.3s ease;
        }

        .label-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.85);
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 18px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 3;
          white-space: nowrap;
        }

        .group:hover .label-overlay {
          opacity: 1;
        }

        .group:hover .label-top-left {
          opacity: 0;
          visibility: hidden;
        }
      `}</style>
    </div>
  );
}

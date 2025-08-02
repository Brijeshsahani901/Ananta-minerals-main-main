import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect, useState } from "react";

export default function TrendingSlider({ showItem }) {
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
    <div className="relative">
      {isSwiperReady && (
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={30}
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
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="trending__post col-md-12">
                <div className="trending__post-thumb group">
                  <Link href={item.path}>
                    <div className="image-wrapper group">
                      <img
                        src={item.img}
                        alt={item.label}
                        className="zoom-image w-full"
                        style={{ borderRadius: "20px" }}
                      />

                      {/* Top-left label (hidden on hover) */}
                      <div className="label-top-left group-hover-hidden">
                        <span>{item.label}</span>
                      </div>

                      {/* Center overlay label (shows on hover) */}
                      <div className="label-overlay">
                        <span>{item.label}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Custom navigation buttons (visible only on mobile) */}
      <button ref={prevRef} className="swiper-button-prev flex md:hidden" />
      <button ref={nextRef} className="swiper-button-next flex md:hidden" />

      {/* Custom styles */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.3);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          cursor: pointer;
        }

        .swiper-button-prev {
          left: 10px;
        }

        .swiper-button-next {
          right: 10px;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }

        @media (min-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
        }

        .image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
        }

        .zoom-image {
          transition: transform 0.5s ease;
        }

        .group:hover .zoom-image {
          transform: scale(1.1);
        }

        .label-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.85);
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 6px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          font-weight: 700;
          font-size: 18px;
          white-space: nowrap;
          z-index: 2;
        }

        .group:hover .label-overlay {
          opacity: 1;
        }

        .label-top-left {
          position: absolute;
          top: 0px;
          left: 0px;
          background-color: rgba(0, 0, 0, 0.75);
          color: #fff;
          padding: 6px 12px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          z-index: 3;
          transition: opacity 0.3s ease;
        }

        /* Hide the top-left label on hover */
        .group:hover .label-top-left {
          opacity: 0;
          visibility: hidden;
        }
      `}</style>
    </div>
  );
}

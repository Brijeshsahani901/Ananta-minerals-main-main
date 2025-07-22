import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect } from "react";

const data = [
  {
    path: "/agriculture",
    label: "Agriculture",
    img: "https://media.istockphoto.com/id/543212762/photo/tractor-cultivating-field-at-spring.jpg?s=612x612&w=0&k=20&c=uJDy7MECNZeHDKfUrLNeQuT7A1IqQe89lmLREhjIJYU=",
  },
  {
    path: "/automobile",
    label: "Automobile",
    img: "https://t4.ftcdn.net/jpg/03/05/62/85/360_F_305628557_uLekPhLRHrGjSL8KfPFqOX0JQbjL4D6.jpg",
  },
  {
    path: "/defense-and-aerospace",
    label: "Defence & Aerospace",
    img: "https://media.istockphoto.com/id/1393877368/photo/jet-fighters-flying-over-the-clouds.jpg?s=612x612&w=0&k=20&c=55sIGBxms9CeOogF2euYJHLK1G8O97Zs614dnHZn2YM=",
  },
  {
    path: "/renewable-energy",
    label: "Renewable energy",
    img: "https://drmcet.ac.in/wp-content/uploads/2024/06/Renewable-energy-image.png",
  },
];

export default function TrendingSlider({ showItem }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
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
//        onSwiper={(swiper) => {
//   setTimeout(() => {
//     swiper.navigation.init(); // ❌ REMOVE THIS
//     swiper.navigation.update(); // ❌ AND THIS
//   });
// }}
        breakpoints={{
          640: {
            slidesPerView: showItem,
            loop: true,
          },
        }}
        className="swiper-wrapper"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="trending__post">
              <div className="trending__post-thumb tgImage__hover">
                <Link href={item.path}>
                  <img src={item.img} alt={item.label} className="w-full" />
                </Link>
              </div>
              <div className="trending__post-content">
                <h4
                  className="title tgcommon__hover"
                  style={{ color: "#4a8bdf", textDecoration: "none" }}
                >
                  <Link
                    href={item.path}
                    style={{ color: "#4a8bdf", textDecoration: "none" }}
                  >
                    {item.label}
                  </Link>
                </h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons with refs */}
      <button
        ref={prevRef}
        className="swiper-button-prev !opacity-50 !text-white !w-8 !h-8 md:!hidden"
      ></button>
      <button
        ref={nextRef}
        className="swiper-button-next !opacity-50 !text-white !w-8 !h-8 md:!hidden"
      ></button>

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
      `}</style>
    </div>
  );
}

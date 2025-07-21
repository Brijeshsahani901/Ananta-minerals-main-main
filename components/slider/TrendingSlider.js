import { Swiper, SwiperSlide } from "swiper/react";
// import data from "@/util/blogData";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";

// const data = [
//   {
//     id: 1,
//     img: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=600&auto=format&fit=crop",
//     trending: true,
//     category: "Battery Minerals",
//     title: "Lithium-ion battery demand driving mineral exploration boom",
//     route: "/batteryScene",
//   },
//   {
//     id: 2,
//     img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&auto=format&fit=crop",
//     trending: false,
//     category: "Automobile Minerals",
//     title: "Critical minerals powering the electric vehicle revolution",
//     route: "/batteryScene",
//   },
//   {
//     id: 3,
//     img: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?w=600&auto=format&fit=crop",
//     trending: true,
//     category: "Defense & Aerospace",
//     title: "Rare earth elements essential for modern defense systems",
//     route: "/droneAssembly",
//   },
//   {
//     id: 4,
//     img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&auto=format&fit=crop",
//     trending: false,
//     category: "Renewable Energy",
//     title: "Wind turbines and solar panels rely on critical mineral supply",
//     route: "/batteryScene",
//   },
// ];


const data = [
 {
    path: "/agriculture",
    label: "Agriculture",
    img: "https://media.istockphoto.com/id/543212762/photo/tractor-cultivating-field-at-spring.jpg?s=612x612&w=0&k=20&c=uJDy7MECNZeHDKfUrLNeQuT7A1IqQe89lmLREhjIJYU=", // Cobalt ore image
  }, {
    path: "/automobile",
    label: "Automobile",
    img: "https://t4.ftcdn.net/jpg/03/05/62/85/360_F_305628557_uL3ekPhLRHrGjSL8KfPFqOX0JQbjL4D6.jpg", // Cobalt ore image
  }, {
    path: "/defense-and-aerospace",
    label: "Defence & Aerospace",
    img: "https://media.istockphoto.com/id/1393877368/photo/jet-fighters-flying-over-the-clouds.jpg?s=612x612&w=0&k=20&c=55sIGBxms9CeOogF2euYJHLK1G8O97Zs614dnHZn2YM=", // Cobalt ore image
  }, {
    path: "/renewable-energy",
    label: "Renewable energy",
    img: "https://drmcet.ac.in/wp-content/uploads/2024/06/Renewable-energy-image.png", // Cobalt ore image
  },
]

export default function TrendingSlider({ showItem }) {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={showItem}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".block-gallery-pagination",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: showItem,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: showItem,
            spaceBetween: 30,
          },
        }}
        className="swiper-wrapper"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="trending__post">
              <div className="trending__post-thumb tgImage__hover">
               
                <Link href="#">
                  <img src={item.img} alt={item.category} />
                </Link>
                {item.trending && (
                  <span className="is_trend">
                    <i className="fas fa-bolt" />
                  </span>
                )}
              </div>
              <div className="trending__post-content">
                <ul className="tgbanner__content-meta list-wrap">
                  <li className="category">
                    <Link href="#">{item.category}</Link>
                  </li>
                
                </ul>
                <h4 className="title tgcommon__hover" style={{ color: "#4a8bdf",textDecoration:"none" }}>
                  <Link href="#" style={{ color: "#4a8bdf",textDecoration:"none" }}>{item.label}</Link>
                </h4>
             
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

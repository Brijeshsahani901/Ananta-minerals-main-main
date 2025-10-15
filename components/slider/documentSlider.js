// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';

// const DocumentSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
//   const [isHovered, setIsHovered] = useState(false);
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//   const slides = [
//     {
//       id: 0,
//       image: `${basePath}/assets/minerals_images/battery.jpg`,
//       title: "Critical Pathways: Building India's Mineral Value Chain",
//       link: "/supply-chain/critical-pathway",
//       content: "India's ambition for critical mineral independence rests on a complex sequence of capabilities that span the full length of the value chain, from geological mapping and resource estimation to the final...",
//       author: "Prerna Bountra",
//       date: "July 2025",
//       category: "Research Report"
//     },
//     {
//       id: 1,
//       image: `${basePath}/assets/minerals_images/closing_loop.jpg`,
//       title: "Closing the Loop: Strengthening India's Battery Recycling Supply Chains",
//       link: "/supply-chain/critical-pathway",
//       content: "This strategic report analyzes India's battery recycling ecosystem and its role in securing critical mineral supply chains for the clean energy transition.",
//       author: "Ayan Barman",
//       date: "July 2025",
//       category: "Research Report"
//     }
//   ];

//   const nextSlide = () => {
//     setDirection(1);
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? '100%' : '-100%',
//       opacity: 0.5,
//       scale: 0.95
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         x: { type: "spring", stiffness: 300, damping: 30 },
//         opacity: { duration: 0.3 },
//         scale: { duration: 0.3 }
//       }
//     },
//     exit: (direction) => ({
//       x: direction < 0 ? '100%' : '-100%',
//       opacity: 0.5,
//       scale: 0.95,
//       transition: {
//         duration: 0.3
//       }
//     })
//   };

//   return (
//     <div
//       className="document-slider-container position-relative"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="document-box mx-auto" style={{
//         maxWidth: "1300px",
//         borderRadius: "16px",
//         backgroundColor: "#fff",
//         boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//         overflow: "hidden",
//         position: "relative",
//         height: "300px",
//         maxHeight : "600px",
//         border: "1px solid rgba(0,0,0,0.05)"
//       }}>
//         <AnimatePresence custom={direction} mode="wait">
//           {slides.map((slide) => (
//             currentSlide === slide.id && (
//               <motion.div
//                 key={slide.id}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 className="position-absolute w-100 h-100"
//               >
//                <div className="d-flex flex-column flex-md-row h-100 w-100">

//                   <div className="w-100 w-md-50 position-relative" style={{  minHeight: "200px" }}
// >

//                     <motion.img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="img-fluid h-100 w-100"
//                       style={{
//                         objectFit: "cover",
//                         objectPosition: "center"
//                       }}
//                       initial={{ opacity: 0.8 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ duration: 0.5 }}
//                     />
//                   </div>
//                   <div className="col-md-7 px-5 py-4 d-flex flex-column">
//                     <Link href={slide.link} className="text-decoration-none">
//                       <motion.h3
//                         className="text-dark"
//                         style={{
//                           fontSize: "1.8rem",
//                           fontWeight: 600,
//                           marginBottom: "1.5rem",
//                           lineHeight: "1.3",
//                           cursor: "pointer"
//                         }}
//                         whileHover={{ color: "#0066cc" }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         {slide.title}
//                       </motion.h3>
//                     </Link>
//                     <motion.p
//                       className="my-3 flex-grow-1"
//                       style={{
//                         fontSize: "1.1rem",
//                         lineHeight: "1.7",
//                         color: "#555"
//                       }}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2, duration: 0.3 }}
//                     >
//                       {slide.content}
//                     </motion.p>
//                     <motion.div
//                       className="d-flex align-items-center mt-auto pt-3"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 0.4 }}
//                     >
//                       <div style={{
//                         width: "2px",
//                         height: "24px",
//                         backgroundColor: "#000",
//                         marginRight: "16px"
//                       }}></div>
//                       <p className="date m-0" style={{
//                         color: "#777",
//                         fontSize: "0.9rem",
//                         letterSpacing: "0.3px"
//                       }}>
//                         {slide.date} &nbsp;&nbsp;•&nbsp;&nbsp; {slide.author}
//                       </p>
//                     </motion.div>
//                   </div>
//                 </div>
//               </motion.div>
//             )
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* Navigation arrows */}
//       <motion.button
//         onClick={prevSlide}
//         className="position-absolute top-50 start-0 translate-middle-y btn btn-light rounded-circle p-3 border-0"
//         style={{
//           zIndex: 10,
//           boxShadow: "0 2px 15px rgba(0,0,0,0.15)",
//           backgroundColor: "rgba(255,255,255,0.95)",
//           width: "50px",
//           height: "50px",
//           marginLeft:"2vw"
//         }}
//         aria-label="Previous slide"
//         whileHover={{ scale: 1.1, backgroundColor: "rgba(245,245,245,0.95)" }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </motion.button>
//       <motion.button
//         onClick={nextSlide}
//         className="position-absolute top-50 end-0 translate-middle-y btn btn-light rounded-circle p-3 border-0"
//         style={{
//           zIndex: 10,
//           boxShadow: "0 2px 15px rgba(0,0,0,0.15)",
//           backgroundColor: "rgba(255,255,255,0.95)",
//           width: "50px",
//           height: "50px",
//           marginRight:"2vw"
//         }}
//         aria-label="Next slide"
//         whileHover={{ scale: 1.1, backgroundColor: "rgba(245,245,245,0.95)" }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M9 18L15 12L9 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </motion.button>

//       {/* Slide indicator */}
//       <div className="text-center mt-4">
//         <div className="d-flex justify-content-center align-items-center">
//           {slides.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => {
//                 setDirection(index > currentSlide ? 1 : -1);
//                 setCurrentSlide(index);
//               }}
//               className="mx-2 rounded-circle border-0 p-0 position-relative"
//               style={{
//                 width: currentSlide === index ? "24px" : "12px",
//                 height: "12px",
//                 backgroundColor: currentSlide === index ? "#0066cc" : "#ddd",
//                 transition: "all 0.3s ease",
//                 cursor: "pointer"
//               }}
//               aria-label={`Go to slide ${index + 1}`}
//               whileHover={{ scale: 1.2 }}
//             >
//               {currentSlide === index && (
//                 <motion.span
//                   className="position-absolute top-0 start-0 h-100 bg-primary"
//                   style={{
//                     borderRadius: "6px",
//                     display: "block",
//                     width: "100%"
//                   }}
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: 1 }}
//                   transition={{ duration: 4.8, ease: "linear" }}
//                   key={index}
//                 />
//               )}
//             </motion.button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DocumentSlider;

// import Link from 'next/link';
// import { motion } from 'framer-motion';

// const DocumentSlider = () => {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//   const slides = [
//     {
//       id: 0,
//       image: `${basePath}/assets/minerals_images/battery.jpg`,
//       title: "Critical Pathways: Building India's Mineral Value Chain",
//       link: "/supply-chain/critical-pathway",
//       content: "India's ambition for critical mineral independence rests on a complex sequence of capabilities that span the full length of the value chain, from geological mapping and resource estimation to the final...",
//       author: "Prerna Bountra",
//       date: "July 2025",
//       category: "Research Report"
//     },
//     {
//       id: 1,
//       image: `${basePath}/assets/minerals_images/closing_loop.jpg`,
//       title: "Closing the Loop: Strengthening India's Battery Recycling Supply Chains",
//       link: "/supply-chain/critical-pathway",
//       content: "This strategic report analyzes India's battery recycling ecosystem and its role in securing critical mineral supply chains for the clean energy transition.",
//       author: "Ayan Barman",
//       date: "July 2025",
//       category: "Research Report"
//     }
//   ];

//   return (
//     <div className="document-sections-container" style={{ maxWidth: "1300px", margin: "0 auto" }}>
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className="document-box my-5"
//           style={{
//             borderRadius: "16px",
//             backgroundColor: "#fff",
//             boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//             overflow: "hidden",
//             border: "1px solid rgba(0,0,0,0.05)"
//           }}
//         >
//           <div className="d-flex flex-column flex-md-row w-100" style={{ minHeight: "300px" }}>
//             {/* Image Section */}
//             <div className="w-100 w-md-50">
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="img-fluid h-100 w-100"
//                 style={{
//                   objectFit: "cover",
//                   objectPosition: "center",
//                   minHeight: "300px"
//                 }}
//               />
//             </div>

//             {/* Text Section */}
//             <div className="col-md-7 px-5 py-4 d-flex flex-column">
//               <Link href={slide.link} className="text-decoration-none">
//                 <h3
//                   className="text-dark"
//                   style={{
//                     fontSize: "1.8rem",
//                     fontWeight: 600,
//                     marginBottom: "1.5rem",
//                     lineHeight: "1.3",
//                     cursor: "pointer"
//                   }}
//                 >
//                   {slide.title}
//                 </h3>
//               </Link>
//               <p
//                 className="my-3 flex-grow-1"
//                 style={{
//                   fontSize: "1.1rem",
//                   lineHeight: "1.7",
//                   color: "#555"
//                 }}
//               >
//                 {slide.content}
//               </p>
//               <div className="d-flex align-items-center mt-auto pt-3">
//                 <div style={{
//                   width: "2px",
//                   height: "24px",
//                   backgroundColor: "#000",
//                   marginRight: "16px"
//                 }}></div>
//                 <p className="date m-0" style={{
//                   color: "#777",
//                   fontSize: "0.9rem",
//                   letterSpacing: "0.3px"
//                 }}>
//                   {slide.date} &nbsp;&nbsp;•&nbsp;&nbsp; {slide.author}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DocumentSlider;

"use client";
import Link from "next/link";

const DocumentSlider = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const slides = [
    {
      id: 1,
      image: `${basePath}/assets/minerals_images/battery.jpg`,
      title: "Critical Pathways: Building India's Mineral Value Chain",
      link: "/supply-chain/critical-pathway",
      content:
        "India's ambition for critical mineral independence rests on a complex sequence of capabilities that span the full length of the value chain...",
      author: "Prerna Bountra",
      date: "July 2025",
      category: "Research Report",
    },
    {
      id: 2,
      image: `${basePath}/assets/minerals_images/closing_loop.jpg`,
      title:
        "Closing the Loop: Strengthening India's Battery Recycling Supply Chains",
      link: "/supply-chain/closing-loop",
      content:
        "This strategic report analyzes India's battery recycling ecosystem and its role in securing critical mineral supply chains...",
      author: "Ayan Barman",
      date: "July 2025",
      category: "Research Report",
    },
    {
      id: 3,
      image: `${basePath}/assets/minerals_images/colorful-baubles.jpg`,
      title: "Breaking China's stranglehold over rare earth supplies",
      link: "/supply-chain/rare-earth-strategy",
      content:
        "Chinese supplies of rare-earth doped magnets to India have not resumed... The problem must be tackled at multiple levels...",
      author: "T K Arun",
      date: "September 2025",
      category: "Strategic Analysis",
    },
     {
      id: 4,
      image: `${basePath}/assets/minerals_images/rare_earth_minerals.jpg`,
      title: "Rare Earth Elements Just Got Rarer",
      link: "/supply-chain/rare-earth-elements",
      content:
        "The Ministry of Commerce of the People’s Republic of China (MOFCOM) published two formal announcements expanding export controls related to rare-earth elements (REEs) and REE-related technologies.",
      author: "Ayan Barman",
      date: "October 2025",
      category: "Strategic Analysis",
    },
  ];

  // ✅ Date parsing helper
  const parseDate = (dateStr) => {
    const clean = dateStr.replace(/(\d+)(st|nd|rd|th)/gi, "$1").replace(/,/g, "");
    return new Date(clean);
  };

  // ✅ Sort slides by latest date
  const sortedSlides = [...slides].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  const getCardWidth = () => {
    if (sortedSlides.length <= 2) {
      return `calc(${100 / sortedSlides.length}% - 1rem)`;
    } else {
      return "calc(33.33% - 1rem)";
    }
  };

  return (
    <div
      className="document-scroll-container"
      style={{
        overflowX: sortedSlides.length > 2 ? "auto" : "hidden",
        padding: "2rem 1rem",
        whiteSpace: "nowrap",
        scrollBehavior: "smooth",
      }}
    >
      <div
        className="d-flex flex-nowrap"
        style={{
          gap: "1.5rem",
          paddingBottom: "1rem",
          justifyContent: sortedSlides.length <= 2 ? "center" : "flex-start",
        }}
      >
        {sortedSlides.map((slide) => (
          <div
            key={slide.id}
            className="document-card bg-white"
            style={{
              flex: `0 0 ${getCardWidth()}`,
              maxWidth: sortedSlides.length <= 2 ? "none" : "350px",
              minWidth: sortedSlides.length <= 2 ? "auto" : "280px",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              border: "1px solid rgba(0,0,0,0.05)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              minHeight: "500px",
            }}
          >
            {/* Image */}
            <div style={{ height: "200px", overflow: "hidden" }}>
              <img
                src={slide.image}
                alt={slide.title}
                className="img-fluid w-100 h-100"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            {/* Content */}
            <div className="px-4 py-3 d-flex flex-column flex-grow-1">
              <Link href={slide.link} className="text-decoration-none">
                <h3
                  className="text-dark"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    lineHeight: "1.4",
                    cursor: "pointer",
                    overflow: "visible",
                    whiteSpace: "normal",
                    textOverflow: "unset",
                  }}
                >
                  {slide.title}
                </h3>
              </Link>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: "#555",
                  flexGrow: 1,
                  whiteSpace: "normal",
                }}
              >
                {slide.content}
              </p>
              <div className="d-flex align-items-center mt-3">
                <div
                  style={{
                    width: "2px",
                    height: "24px",
                    backgroundColor: "#000",
                    marginRight: "16px",
                  }}
                ></div>
                <p
                  className="date m-0"
                  style={{ color: "#777", fontSize: "0.9rem" }}
                >
                  {slide.date} | {slide.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hide Scrollbar & Responsive */}
      <style jsx>{`
        .document-scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .document-scroll-container::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 992px) {
          .document-card {
            flex: 0 0 calc(50% - 1rem) !important;
            min-width: 250px;
          }
        }

        @media (max-width: 768px) {
          .document-card {
            flex: 0 0 calc(${sortedSlides.length <= 2 ? "50%" : "100%"} - 1rem) !important;
            min-width: ${sortedSlides.length <= 2 ? "250px" : "100%"};
          }
        }

        @media (max-width: 576px) {
          .document-card {
            flex: 0 0 calc(100% - 1rem) !important;
            min-width: 100%;
          }
          .document-card h3 {
            font-size: 1.1rem;
          }
          .document-card p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default DocumentSlider;

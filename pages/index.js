// // "use client";

// import Layout from "@/components/layout/Layout";
// import TrendingSlider from "@/components/slider/TrendingSlider";
// import TechnologySlider from "@/components/slider/TechnologySlider";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import DocumentSlider from "@/components/slider/documentSlider";
// import Map from "@/components/Map";
// import { mineralPosts } from "@/util/mineralData";

// const staggerContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const postItem = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
// };

// const sortedMineralPosts = [...mineralPosts].sort((a, b) => {
//   const dateA = new Date(a.date.replace(/(\d+)(st|nd|rd|th)/, "$1"));
//   const dateB = new Date(b.date.replace(/(\d+)(st|nd|rd|th)/, "$1"));
//   return dateB - dateA;
// });

// export default function Home1() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };
//   const borderThickness = "0.5px";

//   const [isMobile, setIsMobile] = useState(false);
//   const whatsNewRef = useRef(null);

//   useEffect(() => {
//     // Check if device is mobile
//     const checkIsMobile = () => {
//       return window.innerWidth < 768;
//     };

//     setIsMobile(checkIsMobile());

//     const handleResize = () => {
//       setIsMobile(checkIsMobile());
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
//       <Layout headerStyle={1}>
//         <motion.section className="tgbanner__area" variants={fadeInUp}>
//           <div className="px-2">
//             {/* Proper responsive layout using Bootstrap row and columns */}
//             <div className="row px-md-5">
//               {/* Left: Technology Slider */}
//               <div className="col-12 col-lg-8 mb-4 mt-4">
//                 <motion.div
//                   initial="hidden"
//                   animate="visible"
//                   variants={fadeInUp}
//                 >
//                   <TechnologySlider />
//                 </motion.div>
//               </div>

//               {/* Right: What's New section */}
//               <motion.div
//                 ref={whatsNewRef}
//                 className="col-12 col-lg-4 px-4"
//                 style={{
//                   height: isMobile ? "auto" : "auto",
//                   maxHeight: isMobile ? "none" : "510px",
//                   overflowY: "auto",
//                   overflowX: "hidden",
//                   scrollbarWidth: "none",
//                   msOverflowStyle: "none",
//                   WebkitOverflowScrolling: "touch",

//                 }}
//                 variants={staggerContainer}
//               >
//                 <div
//                   style={{
//                     padding: "16px 12px",
//                     borderBottom: "1px solid #ddd",
//                     backgroundColor: "#ffffff",
//                     position: isMobile ? "relative" : "sticky",
//                     top: 0,
//                     zIndex: 10,
//                   }}
//                 >
//                   <h3 style={{ fontSize: "20px" }}>What's New</h3>
//                 </div>

//                 {sortedMineralPosts.map((post, index) => (
//                   <div className="d-flex" key={post.id}>
//                     <div className={post.img == "" ? "col-12" : "col-8"}>
//                       <a
//                         href={post.path}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <motion.div variants={postItem}>
//                           <div style={{ marginTop: "10px" }}>
//                             <h2
//                               style={{
//                                 fontSize: "18px",
//                                 margin: "8px 0 0",
//                                 color: "black",
//                                 fontWeight: "600",
//                               }}
//                             >
//                               <div
//                                 onMouseEnter={(e) =>
//                                   (e.currentTarget.style.color = "#2F4156")
//                                 }
//                                 onMouseLeave={(e) =>
//                                   (e.currentTarget.style.color = "")
//                                 }
//                               >
//                                 {post.title}
//                               </div>
//                             </h2>

//                             <div>
//                               <p
//                                 style={{
//                                   fontSize: "14px",
//                                   color: "gray",
//                                   marginTop: "10px",
//                                 }}
//                               >
//                                 {post.description ? post.description : ""}
//                               </p>

//                               <div
//                                 style={{
//                                   display: "flex",
//                                   alignItems: "center",
//                                   fontSize: "14px",
//                                 }}
//                               >
//                                 <span
//                                   style={{ color: "#2F4156", fontWeight: 500 }}
//                                 >
//                                   {post.date}
//                                 </span>
//                                 <div
//                                   style={{
//                                     height: "12px",
//                                     width: "2px",
//                                     background: "black",
//                                     margin: "0 10px",
//                                   }}
//                                 ></div>
//                                 <span
//                                   style={{ color: "#2F4156", fontWeight: 500 }}
//                                 >
//                                   {post.author}
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </motion.div>
//                       </a>

//                       {index !== mineralPosts.length - 1 && (
//                         <div
//                           style={{
//                             background: "black",
//                             height: "0.5px",
//                             width: "150%",
//                             margin: "3vh 0",
//                           }}
//                         ></div>
//                       )}
//                     </div>

//                     {post.img != "" && (
//                       <div className="col-4">
//                         <img
//                           src={`${basePath}/assets/minerals_images/${post.img}`}
//                           alt="About"
//                           style={{
//                             width: "100%",
//                             height: "20vh",
//                             objectFit: "cover",
//                             marginTop: "1.5vh",
//                             borderRadius: "5px",
//                           }}
//                         />
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
//           </div>

//           {/* Divider */}
//           <hr
//             style={{
//               border: "none",
//               borderTop: `${borderThickness} solid black`,
//               margin: "40px 0",
//               width: "100%",
//             }}
//           />

//           {/* Document Slider */}
//           <div className="mb-3 pb-3 px-md-5">
//             <h3 style={{ marginLeft: "14px" }}>Latest Uploads</h3>
//             <DocumentSlider />
//           </div>

//           <hr
//             style={{
//               border: "none",
//               borderTop: `${borderThickness} solid black`,
//               margin: "40px 0",
//               width: "100%",
//             }}
//           />

//           {/* Map Section */}
//           <motion.section
//             className="trending-post-area section__hover-line"
//             variants={fadeInUp}
//             style={{
//               paddingBottom: "20px",
//               paddingTop:
//                 typeof window !== "undefined" && window.innerWidth < 768
//                   ? "20px"
//                   : "0",
//             }}
//           >
//             <div className="px-md-5 px-2">
//               <Map />
//             </div>
//           </motion.section>

//           <hr
//             style={{
//               border: "none",
//               borderTop: `${borderThickness} solid black`,
//               margin: "40px 0",
//               width: "100%",
//             }}
//           />
//           {/* Sectors in Focus */}
//           <motion.section
//             variants={fadeInUp}
//             style={{
//               paddingBottom: "20px",
//               paddingTop:
//                 typeof window !== "undefined" && window.innerWidth < 768
//                   ? "20px"
//                   : "0",
//             }}
//           >
//             <div className="px-md-5 px-4">
//               <div className="trending__slider">
//                 <div className="swiper-container trending-active">
//                   <h3 style={{ marginBottom: "3vh" }}>Sectors in Focus</h3>
//                   <TrendingSlider showItem={4} />
//                 </div>
//               </div>
//             </div>
//           </motion.section>
//         </motion.section>
//       </Layout>
//     </motion.div>
//   );
// }

"use client";

import Layout from "@/components/layout/Layout";
import TrendingSlider from "@/components/slider/TrendingSlider";
import TechnologySlider from "@/components/slider/TechnologySlider";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import DocumentSlider from "@/components/slider/documentSlider";
import Map from "@/components/Map";
import { mineralPosts } from "@/util/mineralData";

const sortedMineralPosts = [...mineralPosts].sort((a, b) => {
  const dateA = new Date(a.date.replace(/(\d+)(st|nd|rd|th)/, "$1"));
  const dateB = new Date(b.date.replace(/(\d+)(st|nd|rd|th)/, "$1"));
  return dateB - dateA;
});

export default function Home1() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const borderThickness = "0.5px";

  const [isMobile, setIsMobile] = useState(false);
  const whatsNewRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      return window.innerWidth < 768;
    };

    setIsMobile(checkIsMobile());
    setIsVisible(true);

    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Enhanced scroll handler for the What's New section
  useEffect(() => {
    const handleScroll = () => {
      if (whatsNewRef.current) {
        const element = whatsNewRef.current;
        const scrollTop = element.scrollTop;

        // Add shadow when scrolled
        if (scrollTop > 0) {
          element.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
        } else {
          element.style.boxShadow = "none";
        }
      }
    };

    const currentRef = whatsNewRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Enhanced hover effects
  const handleMouseEnter = (e) => {
    e.currentTarget.style.color = "#2F4156";
    e.currentTarget.style.transform = "translateX(3px)";
    e.currentTarget.style.transition = "all 0.2s ease";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.color = "";
    e.currentTarget.style.transform = "translateX(0)";
  };

  // Fade-in animation style
  const fadeInStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  };

  return (
    <div>
      <Layout headerStyle={1}>
        <section className="tgbanner__area" style={fadeInStyle}>
          <div className="px-2">
            {/* Proper responsive layout using Bootstrap row and columns */}
            <div className="row px-md-5">
              {/* Left: Technology Slider */}
              <div className="col-12 col-lg-8 mb-4">
                <div style={fadeInStyle}>
                  <TechnologySlider />
                </div>
              </div>

              {/* Right: What's New section */}
              <div
                ref={whatsNewRef}
                className="col-12 col-lg-4 px-3"
                style={{
                  height: isMobile ? "auto" : "520px",
                  maxHeight: isMobile ? "none" : "520px",
                  overflowY: "auto",
                  overflowX: "hidden",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                  borderRadius: "6px",
                  border: "1px solid #e0e0e0",
                  transition: "box-shadow 0.3s ease",
                  backgroundColor: "#ffffff",
                }}
              >
                {/* Header */}
                <div
                  style={{
                    padding: "10px 10px",
                    borderBottom: "1px solid #e0e0e0",
                    backgroundColor: "#ffffff",
                    position: isMobile ? "relative" : "sticky",
                    top: 0,
                    zIndex: 10,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "18px",
                      margin: 0,
                      color: "#2F4156",
                      fontWeight: "600",
                    }}
                  >
                    What's New
                  </h3>
                </div>

                {/* Posts */}
                <div style={{ padding: "6px 6px" }}>
                  {sortedMineralPosts.map((post, index) => (
                    <div
                      className="d-flex"
                      key={post.id}
                      style={{
                        marginBottom:
                          index !== mineralPosts.length - 1 ? "6px" : "0",
                        padding: "4px 0",
                      }}
                    >
                      <div className={post.img === "" ? "col-12" : "col-8"}>
                        {/* Conditional rendering for posts with custom links */}
                        {post.customLinks ? (
                          <div
                            style={{
                              padding: "6px",
                              borderRadius: "4px",
                              transition: "background-color 0.2s ease",
                              cursor: "pointer",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "#f8f9fa")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "transparent")
                            }
                          >
                            <h2
                              style={{
                                fontSize: "15px",
                                margin: "0 0 2px 0",
                                color: "#111",
                                fontWeight: "600",
                                lineHeight: "1.35",
                              }}
                            >
                              <div
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                style={{ cursor: "pointer" }}
                              >
                                {post.title
                                  .split(" ")
                                  .map((word, wordIndex) => {
                                    const linkKey = word.replace(/[.,]/g, "");
                                    if (post.customLinks[linkKey]) {
                                      return (
                                        <a
                                          key={wordIndex}
                                          href={post.customLinks[linkKey]}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          style={{
                                            color: "#111",
                                            textDecoration: "none",
                                            fontWeight: "600",
                                            borderBottom: "1px solid #111",
                                          }}
                                          onMouseEnter={(e) => {
                                            e.currentTarget.style.color =
                                              "#0056b3";
                                            e.currentTarget.style.borderBottomColor =
                                              "#0056b3";
                                          }}
                                          onMouseLeave={(e) => {
                                            e.currentTarget.style.color =
                                              "#111";
                                            e.currentTarget.style.borderBottomColor =
                                              "#111";
                                          }}
                                        >
                                          {word}{" "}
                                        </a>
                                      );
                                    }
                                    return <span key={wordIndex}>{word} </span>;
                                  })}
                              </div>
                            </h2>
                          </div>
                        ) : (
                          // Original link wrapper for posts without custom links
                          <a
                            href={post.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              style={{
                                padding: "6px",
                                borderRadius: "4px",
                                transition: "background-color 0.2s ease",
                                cursor: "pointer",
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                  "#f8f9fa")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                  "transparent")
                              }
                            >
                              <h2
                                style={{
                                  fontSize: "15px",
                                  margin: "0 0 2px 0",
                                  color: "#111",
                                  fontWeight: "600",
                                  lineHeight: "1.35",
                                }}
                              >
                                <div
                                  onMouseEnter={handleMouseEnter}
                                  onMouseLeave={handleMouseLeave}
                                  style={{ cursor: "pointer" }}
                                >
                                  {post.title}
                                </div>
                              </h2>
                            </div>
                          </a>
                        )}

                        {/* Common content for all posts */}
                        {post.description && (
                          <p
                            style={{
                              fontSize: "13px",
                              color: "#666",
                              margin: "2px 0 0 0",
                              lineHeight: "1.35",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {post.description}
                          </p>
                        )}

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "12px",
                            marginTop: "4px",
                                marginLeft : "7px",
                            color: "#2F4156",
                            fontWeight: 500,
                          }}
                        >
                          <span>{post.date}</span>
                          <div
                            style={{
                              height: "10px",
                              width: "1px",
                              background: "#ccc",
                              margin: "0 6px",
                            }}
                          ></div>
                          <span>{post.author}</span>
                        </div>

                        {/* Divider */}
                        {index !== mineralPosts.length - 1 && (
                          <div
                            style={{
                              background:
                                "linear-gradient(90deg, transparent 0%, #e0e0e0 50%, transparent 100%)",
                              height: "0.5px",
                              width: "100%",
                              margin: "6px 0",
                            }}
                          ></div>
                        )}
                      </div>

                      {/* Thumbnail Image */}
                      {post.img !== "" && (
                        <div className="col-4">
                          <div
                            style={{
                              padding: "6px 4px",
                              height: "100%",
                              display: "flex",
                              alignItems: "flex-start",
                            }}
                          >
                            <img
                              src={`${basePath}/assets/minerals_images/${post.img}`}
                              alt={post.title}
                              style={{
                                width: "100%",
                                height: "70px",
                                objectFit: "cover",
                                borderRadius: "4px",
                                transition: "transform 0.2s ease",
                                cursor: "pointer",
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.transform =
                                  "scale(1.03)")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.transform = "scale(1)")
                              }
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr
            style={{
              border: "none",
              borderTop: `${borderThickness} solid #e0e0e0`,
              margin: "30px 0",
              width: "100%",
            }}
          />

          {/* Document Slider */}
          <div className="mb-3 pb-3 px-md-5">
            <h3
              style={{
                marginLeft: "14px",
                marginBottom: "16px",
                color: "#2F4156",
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              Latest Uploads
            </h3>
            <DocumentSlider />
          </div>

          <hr
            style={{
              border: "none",
              borderTop: `${borderThickness} solid #e0e0e0`,
              margin: "30px 0",
              width: "100%",
            }}
          />

          {/* Map Section */}
          <section
            className="trending-post-area section__hover-line"
            style={{
              paddingBottom: "16px",
              paddingTop: isMobile ? "16px" : "0",
              ...fadeInStyle,
            }}
          >
            <div className="px-md-5 px-2">
              <Map />
            </div>
          </section>

          <hr
            style={{
              border: "none",
              borderTop: `${borderThickness} solid #e0e0e0`,
              margin: "30px 0",
              width: "100%",
            }}
          />

          {/* Sectors in Focus */}
          <section
            style={{
              paddingBottom: "20px",
              paddingTop: isMobile ? "16px" : "0",
              ...fadeInStyle,
            }}
          >
            <div className="px-md-5 px-4">
              <div className="trending__slider">
                <div className="swiper-container trending-active">
                  <h3
                    style={{
                      color: "#2F4156",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    Sectors in Focus
                  </h3>
                  <TrendingSlider showItem={4} />
                </div>
              </div>
            </div>
          </section>
        </section>
      </Layout>
    </div>
  );
}

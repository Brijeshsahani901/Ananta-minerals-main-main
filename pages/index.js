// "use client";

import Layout from "@/components/layout/Layout";
import TrendingSlider from "@/components/slider/TrendingSlider";
import TechnologySlider from "@/components/slider/TechnologySlider";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import DocumentSlider from "@/components/slider/documentSlider";
import Map from "@/components/Map";
import { mineralPosts } from "@/util/mineralData";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const postItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const sortedMineralPosts = [...mineralPosts].sort((a, b) => {
  const dateA = new Date(a.date.replace(/(\d+)(st|nd|rd|th)/, "$1"));
  const dateB = new Date(b.date.replace(/(\d+)(st|nd|rd|th)/, "$1"));
  return dateB - dateA;
});

export default function Home1() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const borderThickness = "0.5px";

  const [isMobile, setIsMobile] = useState(false);
  const whatsNewRef = useRef(null);

  useEffect(() => {
    // Check if device is mobile
    const checkIsMobile = () => {
      return window.innerWidth < 768;
    };

    setIsMobile(checkIsMobile());

    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
      <Layout headerStyle={1}>
        <motion.section className="tgbanner__area" variants={fadeInUp}>
          <div className="px-2">
            {/* Proper responsive layout using Bootstrap row and columns */}
            <div className="row px-md-5">
              {/* Left: Technology Slider */}
              <div className="col-12 col-lg-8 mb-4 mt-4">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                >
                  <TechnologySlider />
                </motion.div>
              </div>

              {/* Right: What's New section */}
              <motion.div
                ref={whatsNewRef}
                className="col-12 col-lg-4 px-4"
                style={{
                  height: isMobile ? "auto" : "auto",
                  maxHeight: isMobile ? "none" : "510px",
                  overflowY: isMobile ? "visible" : "auto",
                  overflowX: "hidden",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
                variants={staggerContainer}
              >
                <div
                  style={{
                    padding: "16px 12px",
                    borderBottom: "1px solid #ddd",
                    backgroundColor: "#ffffff",
                    position: isMobile ? "relative" : "sticky",
                    top: 0,
                    zIndex: 10,
                  }}
                >
                  <h3 style={{ fontSize: "20px" }}>What's New</h3>
                </div>

                {sortedMineralPosts.map((post, index) => (
                  <div className="d-flex" key={post.id}>
                    <div className={post.img == "" ? "col-12" : "col-8"}>
                      <a
                        href={post.path}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div variants={postItem}>
                          <div style={{ marginTop: "10px" }}>
                            <h2
                              style={{
                                fontSize: "18px",
                                margin: "8px 0 0",
                                color: "black",
                                fontWeight: "600",
                              }}
                            >
                              <div
                                onMouseEnter={(e) =>
                                  (e.currentTarget.style.color = "#2F4156")
                                }
                                onMouseLeave={(e) =>
                                  (e.currentTarget.style.color = "")
                                }
                              >
                                {post.title}
                              </div>
                            </h2>

                            <div>
                              <p
                                style={{
                                  fontSize: "14px",
                                  color: "gray",
                                  marginTop: "10px",
                                }}
                              >
                                {post.description ? post.description : ""}
                              </p>

                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  fontSize: "14px",
                                }}
                              >
                                <span
                                  style={{ color: "#2F4156", fontWeight: 500 }}
                                >
                                  {post.date}
                                </span>
                                <div
                                  style={{
                                    height: "12px",
                                    width: "2px",
                                    background: "black",
                                    margin: "0 10px",
                                  }}
                                ></div>
                                <span
                                  style={{ color: "#2F4156", fontWeight: 500 }}
                                >
                                  {post.author}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </a>

                      {index !== mineralPosts.length - 1 && (
                        <div
                          style={{
                            background: "black",
                            height: "0.5px",
                            width: "150%",
                            margin: "3vh 0",
                          }}
                        ></div>
                      )}
                    </div>

                    {post.img != "" && (
                      <div className="col-4">
                        <img
                          src={`${basePath}/assets/minerals_images/${post.img}`}
                          alt="About"
                          style={{
                            width: "100%",
                            height: "20vh",
                            objectFit: "cover",
                            marginTop: "1.5vh",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <hr
            style={{
              border: "none",
              borderTop: `${borderThickness} solid black`,
              margin: "40px 0",
              width: "100%",
            }}
          />

          {/* Document Slider */}
          <div className="mb-3 pb-3 px-md-5">
            <h3 style={{ marginLeft: "14px" }}>Latest Uploads</h3>
            <DocumentSlider />
          </div>

          <hr
            style={{
              border: "none",
              borderTop: `${borderThickness} solid black`,
              margin: "40px 0",
              width: "100%",
            }}
          />

          {/* Map Section */}
          <motion.section
            className="trending-post-area section__hover-line"
            variants={fadeInUp}
            style={{
              paddingBottom: "20px",
              paddingTop:
                typeof window !== "undefined" && window.innerWidth < 768
                  ? "20px"
                  : "0",
            }}
          >
            <div className="px-md-5 px-2">
              <Map />
            </div>
          </motion.section>

          <hr
            style={{
              border: "none",
              borderTop: `${borderThickness} solid black`,
              margin: "40px 0",
              width: "100%",
            }}
          />
          {/* Sectors in Focus */}
          <motion.section
            variants={fadeInUp}
            style={{
              paddingBottom: "20px",
              paddingTop:
                typeof window !== "undefined" && window.innerWidth < 768
                  ? "20px"
                  : "0",
            }}
          >
            <div className="px-md-5 px-4">
              <div className="trending__slider">
                <div className="swiper-container trending-active">
                  <h3 style={{ marginBottom: "3vh" }}>Sectors in Focus</h3>
                  <TrendingSlider showItem={4} />
                </div>
              </div>
            </div>
          </motion.section>
        </motion.section>
      </Layout>
    </motion.div>
  );
}

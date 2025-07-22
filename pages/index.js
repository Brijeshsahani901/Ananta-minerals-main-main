"use client";

import Layout from "@/components/layout/Layout";
import TrendingSlider from "@/components/slider/TrendingSlider";
import TechnologySlider from "@/components/slider/TechnologySlider";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FloatingParticles from "@/components/floatingParticle";
import ScrollContainer from "@/components/scrollContainer";

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

// Sample mineral posts
const mineralPosts = [
  {
    id: 1,
    title: "Critical Pathways: Building India's Mineral Value Chain",
    description:
      "India's national security, space ambitions, and semiconductor self-sufficiency depend on strategic mineral access.",
    downloadUrl: "#", // Add your actual download link here
    path:"/supply-chain"
  },
  {
    id: 2,
    title:
      "Closing the Loop: Strengthening India’s Battery Recycling Supply Chains ",
    description:
      "The robustness and resilience of India’s clean energy supply chains depend heavily on how efficiently the country can recover and reintegrate critical minerals from end-of-life (EOL) batteries",
    downloadUrl: "#", // Add your actual download link here
    path:"/supply-chain"
  },
];

export default function Home1() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const borderColor = "rgba(0, 0, 0, 0.25)"; 
  const borderThickness = "0.5px";

  return (
  <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
  <Layout headerStyle={1}>
    <motion.section
      className="tgbanner__area"
      variants={fadeInUp}
    >
      <div
        className="container"
        style={{ boxSizing: "border-box" }}
      >
        <div
          className="tgbanner__grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* Left: Technology Slider */}
          <div
            className="tgbanner__post big-post col-9"
            style={{
              flex: "1 1 600px",
              minWidth: "300px",
              boxSizing: "border-box",
            }}
          >
            <div className="tgbanner__thumb tgImage__hover col-lg-12 col-md-12 col-sm-12">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                
              >
                <TechnologySlider />
              </motion.div>
            </div>
          </div>

          {/* Vertical Divider - Hidden on mobile */}
          <div
            className="vertical-divider"
            style={{
              width: borderThickness,
              height: "79vh",
              backgroundColor: borderColor,
              alignSelf: "stretch",
              display: window.innerWidth < 768 ? "none" : "block"
            }}
          />

          {/* Right: Blog Posts */}
          <motion.div
            className="col-lg-3 col-md-12 col-sm-12"
            style={{
              height: "69vh",
              overflowY: "auto",
              paddingRight: "10px",
              scrollbarWidth: "thin",
              flex: "1 1 300px",
              minWidth: "300px"
            }}
            variants={staggerContainer}
          >
            {mineralPosts.map((post) => (
              <Link href={`${post.path}`} passHref key={post.id}>
                <motion.div
                  variants={postItem}
                  style={{
                    marginBottom: "30px",
                    borderBottom: "1px solid #eee",
                    paddingBottom: "20px",
                  }}
                >
                  <div style={{ marginTop: "10px" }}>
                    <h2
                      style={{
                        fontSize: "16px",
                        margin: "8px 0 0",
                        color: "black",
                        fontWeight: "bold"
                      }}
                    >
                      <Link href="#">{post.title}</Link>
                    </h2>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "gray",
                        margin: "5px 0 10px",
                      }}
                    >
                      {post.description} While the country has made strides in
                      mining and refining bulk materials, it remains
                      import-dependent for high-purity inputs.
                    </p>

                    <motion.a
                      href={post.downloadUrl}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 20px rgba(102, 126, 234, 0.5)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: "0.49rem 1.1rem",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        letterSpacing: "0.4px",
                        borderRadius: "999px",
                        cursor: "pointer",
                        color: "white",
                        backgroundImage:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.12)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        textDecoration: "none",
                        transition: "box-shadow 0.3s ease, color 0.2s ease",
                        minWidth: "fit-content",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 16L7 11L8.41 9.59L11 12.17V4H13V12.17L15.59 9.58L17 11L12 16Z"
                          fill="currentColor"
                        />
                        <path
                          d="M19 19H5V15H3V20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20V15H19V19Z"
                          fill="currentColor"
                        />
                      </svg>
                      Download Report
                    </motion.a>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Horizontal Divider with responsive margin */}
      <hr
        style={{
          border: "none",
          borderTop: `${borderThickness} solid ${borderColor}`,
          margin: "40px 0",
          width: "100%"
        }}
      />
      
      {/* Trending Section with top padding for mobile */}
      <motion.section
        className="trending-post-area section__hover-line"
        variants={fadeInUp}
        style={{
          paddingBottom: "20px",
          paddingTop: window.innerWidth < 768 ? "20px" : "0"
        }}
      >
        <div className="container">
          <div className="trending__slider">
            <div className="swiper-container trending-active">
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

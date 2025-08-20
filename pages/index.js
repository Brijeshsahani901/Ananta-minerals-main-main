"use client";

import Layout from "@/components/layout/Layout";
import TrendingSlider from "@/components/slider/TrendingSlider";
import TechnologySlider from "@/components/slider/TechnologySlider";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FloatingParticles from "@/components/floatingParticle";
import ScrollContainer from "@/components/scrollContainer";
import DocumentSlider from "@/components/slider/documentSlider";

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
  // {
  //   id: 3,
  //   title: "Parliament Update: Rare Earth Minerals",
  //   description: "",
  //   downloadUrl: "#", // Add your actual download link here
  //   path: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2147282",
  //   author: "PIB",
  //   img: "",
  //   date: "23rd July, 2025",
  // },
  // {
  //   id: 4,
  //   title: " India in talks with Chile and Peru to source Critical Minerals ",
  //   description: "",
  //   downloadUrl: "#", // Add your actual download link here
  //   path: "https://www.reuters.com/world/china/india-holding-talks-with-chile-peru-sourcing-critical-minerals-trade-ministry-2025-07-15",
  //   author: "Reuters",
  //   date: "15th July,2025",
  //   img: "",
  // },
  // {
  //   id: 5,
  //   title: "India-UK Tech Pact Expands Focus to Critical Minerals",
  //   description: "",
  //   downloadUrl: "#", // Add your actual download link here
  //   path: "https://stratnewsglobal.com/world-news/india-uk-tech-pact-expands-focus-to-critical-minerals-frontier-domains/",
  //   author: "StratNews Global",
  //   date: "25th July, 2025",
  //   img: "",
  // },
  // {
  //   id: 6,
  //   title: "India’s Rare Earth Partnership with 5 African Nations",
  //   description: "",
  //   downloadUrl: "#", // Add your actual download link here
  //   path: "https://africa.businessinsider.com/local/lifestyle/india-ramps-up-rare-earth-partnership-with-5-african-nations-to-counter-chinas/1k9kg7f",
  //   author: "Business Insider Africa",
  //   date: "28th July, 2025",
  //   img: "",
  // },
  // {
  //   id: 7,
  //   title:
  //     "Hindustan Zinc secures Potash block, adds REE and Tungsten in Critical Minerals push",
  //   description: "",
  //   downloadUrl: "#", // Add your actual download link here
  //   path: "https://energy.economictimes.indiatimes.com/news/coal/hindustan-zinc-secures-potash-block-adds[…]tungsten-assets-in-critical-minerals-push/122608335",
  //   author: "ET Energy World",
  //   date: "17th July, 2025",
  //   img: "",
  // },
  // {
  //   id: 8,
  //   title: "New Autonomous Vehicle Studies Deep Ocean Critical Minerals",
  //   description: "",
  //   downloadUrl: "#", // Add your actual download link here
  //   path: "https://astrobiology.com/2025/07/ocean-world-exploration-new-autonomous-vehicle-studies-deep-ocean-critical-minerals.html#:~:text=Ocean%20World%20Exploration%3A%20New%20Autonomous%20Vehicle%20Studies%20Deep%20Ocean%20Critical%20Minerals,-By%20Keith%20Cowing&text=A%20new%20autonomous%20underwater%20vehicle,waters%20near%20the%20Mariana%20Trench",
  //   author: "Astrobiology",
  //   date: "13th July, 2025",
  //   img: "",
  // },
  // {
  //   id: 9,
  //   title: "Disruption In The Supply Of Rare Eartg Magnets",
  //   description: "",
  //   downloadUrl: "#", // Add your actual download link here
  //   path: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151394",
  //   author: "PIB",
  //   date: "13th July, 2025",
  //   img: "",
  // },
  // {
  //   id: 10,
  //   title:
  //     "Mines Ministry Recognizes Seven Centres of Excellence to work under the National Critical Mineral Mission",
  //   description: "",
  //   downloadUrl: "#", // Add your actual download link here
  //   path: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151287",
  //   author: "PIB",
  //   date: "13th July, 2025",
  //   img: "",
  // },

    {
      id: 1,
      title: "Disruption In The Supply Of Rare Earth Magnets",
      downloadUrl: "#", // Add your actual download link here
      path: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151394",
      author: "PIB",
      date: "13th July, 2025",
      img: "",
    },
    {
      id: 2,
      title:
        "Mines Ministry Recognizes Seven Centres of Excellence to work under the National Critical Mineral Mission",
      downloadUrl: "#", // Add your actual download link here
      path: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151287",
      author: "PIB",
      date: "13th July, 2025",
      img: "",
    },
    {
      id: 3,
      title: "Parliament Question: Rare Earth Minerals",
      downloadUrl: "#", // Add your actual download link here
      path: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2147282",
      author: "PIB",
      date: "13th July, 2025",
      img: "",
    },
    {
      id: 4,
      title:
        " India in talks with Chile and Peru to source Critical Minerals",
      downloadUrl: "#", // Add your actual download link here
      path: "https://www.reuters.com/world/china/india-holding-talks-with-chile-peru-sourcing-critical-minerals-trade-ministry-2025-07-15",
      author: "Reuters",
      date: "15th July, 2025",
      img: "",
    },
    {
      id: 5,
      title:
        "India-UK Tech Pact shifts focus towards Critical Minerals",
      downloadUrl: "#", // Add your actual download link here
      path: "https://stratnewsglobal.com/world-news/india-uk-tech-pact-expands-focus-to-critical-minerals-frontier-domains/",
      author: "StratNews Global",
      date: "25th July, 2025",
      img: "",
    },
    {
      id: 6,
      title:
        "India’s Rare Earth Partnership with Africa",
      downloadUrl: "#", // Add your actual download link here
      path: "https://africa.businessinsider.com/local/lifestyle/india-ramps-up-rare-earth-partnership-with-5-african-nations-to-counter-chinas/1k9kg7f",
      author: "Business Insider Africa",
      date: "28th July, 2025",
      img: "",
    },
    {
      id: 7,
      title:
        "Hindustan Zinc secures Potash block- REE and Tungsten up next",
      downloadUrl: "#", // Add your actual download link here
      path: "https://energy.economictimes.indiatimes.com/news/coal/hindustan-zinc-secures-potash-block-adds[…]tungsten-assets-in-critical-minerals-push/122608335",
      author: "ET Energy World",
      date: "17th July, 2025",
      img: "",
    },
     {
      id: 8,
      title:
        "New Tech: Autonomous Vehicle designed for deep ocean mining",
      downloadUrl: "#", // Add your actual download link here
      path: "https://astrobiology.com/2025/07/ocean-world-exploration-new-autonomous-vehicle-studies-deep-ocean-critical-minerals.html#:~:text=Ocean%20World%20Exploration%3A%20New%20Autonomous%20Vehicle%20Studies%20Deep%20Ocean%20Critical%20Minerals,-By%20Keith%20Cowing&text=A%20new%20autonomous%20underwater%20vehicle,waters%20near%20the%20Mariana%20Trench",
      author: "Astribiology",
      date: "13th July, 2025",
      img: "",
    },
     {
      id: 9,
      title:
        "India and the UK have committed £1.8 million to expand the UK–India Critical Minerals Supply Chain Observatory",
      downloadUrl: "#", // Add your actual download link here
      path: "https://www.logisticsinsider.in/india-and-uk-invest-1-8-million-to-launch-worlds-first-critical-minerals-supply-chain-observatory/",
      author: "Logistics Insider",
      date: "18th August, 2025",
      img: "",
    },
     {
      id: 10,
      title:
        "India's Critical Minerals Push: 5 policy pillars proposed for India's rare earth self-reliance",
      downloadUrl: "#", // Add your actual download link here
      path: "https://www.logisticsinsider.in/india-and-uk-invest-1-8-million-to-launch-worlds-first-critical-minerals-supply-chain-observatory/",
      author: " Times of India",
      date: "16th August, 2025",
      img: "",
    },
];

const sortedMineralPosts = [...mineralPosts].sort((a, b) => {
  const dateA = new Date(a.date.replace(/(\d+)(st|nd|rd|th)/, '$1'));
  const dateB = new Date(b.date.replace(/(\d+)(st|nd|rd|th)/, '$1'));
  return dateB - dateA; // Descending order
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

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
      <Layout headerStyle={1}>
        <motion.section className="tgbanner__area" variants={fadeInUp}>
          <div className="px-5 ">
            <div
              className=" row "
              style={{
                display: "flex",
                // flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              {/* Left: Technology Slider */}
              <div className="col-xl-9 col-12 slider-show">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                >
                  <TechnologySlider />
                </motion.div>
              </div>

              {/* Vertical Divider */}
              <div className="vertical-divider" />

              {/* Right: Blog Posts */}
              <motion.div
                className="col-xl-3"
                style={{
                  maxHeight: "70vh",
                  overflowY: "auto",
                  overflowX: "hidden",
                  paddingRight: "10px",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  flex: "1 1 300px",
                  minWidth: "300px",
                }}
                variants={staggerContainer}
              >
                <div
                  style={{
                    padding: "16px 12px",
                    borderBottom: "1px solid #ddd",
                    backgroundColor: "#ffffff",
                    position: "sticky",
                    top: 0,
                    width: "full",
                    flex: 1,
                    zIndex: 10,
                  }}
                >
                  <h3 style={{ marginLeft: "-1vw", fontSize: "20px" }}>
                    What's New
                  </h3>
                </div>
                {/* Loop through posts here */}
                {sortedMineralPosts.map((post, index) => (
                  <div className="d-flex" key={post.id}>
                    <div className={post.img == "" ? "col-12" : "col-8"}>
                      <a
                        href={
                          /^https?:\/\//.test(post.path) ? post.path : post.path
                        }
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
                                fontWeight: "bold",
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
                                  margin: "5px 0 10px",
                                }}
                              >
                                {post.description ? post.description : ""}
                              </p>

                              {/* Date + line + author */}
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  fontSize: "14px",
                                }}
                              >
                                <span style={{ color: "#2F4156" }}>
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
                                <span style={{ color: "#2F4156" }}>
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
                            minHeight: "20vh",
                            display: "block",
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

          {/* Horizontal Divider with responsive margin */}
          <hr
            style={{
              border: "none",
              borderTop: `${borderThickness} solid black`,
              margin: "40px 0",
              width: "100%",
              fontWeight: "bold",
            }}
          />

          {/* <div className="document-box my-5 m-5" style={{  borderRadius: "10px", backgroundColor: "#fff", overflow: "hidden" }}>
                        <div className="row g-0">
                          <div className="col-5">
                            <img
                              src={`${basePath}/assets/minerals_images/battery.jpg`}
                              alt="Mineral Value Chain"
                              className="img-fluid h-75 w-100"
                              style={{ objectFit: "cover" , borderRadius: "10px",}}
                            />
                          </div>
                          <div className="col-7 px-4 pt-2">
                            <Link href="/supply-chain/critical-pathway">
                              <h3
                                // ref={criticalRef}
                                // onMouseEnter={() => handleMouseEnter(criticalRef)}
                                // onMouseLeave={() => handleMouseLeave(criticalRef)}
                              >
                                Critical Pathways: Building India's Mineral Value Chain
                              </h3>
                            </Link>
                           <p className="my-3">
                          India's ambition for critical mineral independence
                          rests on a complex sequence of capabilities that span
                          the full length of the value chain, from geological
                          mapping and resource estimation to the final
                          integration of metals into defence systems or
                          electronic devices. Each stage in this continuum
                          reveals areas of progress as well as persistent
                          structural limitations.
                        </p>

                            <div style={{ position: "relative", color: "black", top: 20, left: 90, background: "black", height: "12px", width: "2px" }}></div>
                            <p className="date">
                              July 2025 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Prerna Bountra
                            </p>
                          </div>
                        </div>
                      </div> */}
          <div className=" mb-3 pb-3">
            <h3 style={{ marginLeft: "8vw", marginBottom: "3vh" }}>
              Latest Uploads
            </h3>
            <DocumentSlider />
          </div>

          <hr
            style={{
              border: "none",
              borderTop: `${borderThickness} solid black`,
              margin: "40px 0",
              width: "100%",
              fontWeight: "bold",
            }}
          />

          {/* Trending Section with top padding for mobile */}
          <motion.section
            className="trending-post-area section__hover-line"
            variants={fadeInUp}
            style={{
              paddingBottom: "20px",
              paddingTop: window.innerWidth < 768 ? "20px" : "0",
            }}
          >
            <div className="px-5">
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

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import BlogSidebar from "@/components/elements/BlogSidebar";
import BatteryScene from "@/components/batterScene";
import BatteryManufacturingScene from "@/components/batteryManufacturingScene";
import REERecyclingScene from "@/components/REERecyclingScene";
import { motion } from "framer-motion";

const InfoPanel = ({ step, isVisible }) => {
  if (!step || !isVisible) return null;

  return (
    <div
      className="position-absolute top-0 start-0 m-3 p-3 rounded border"
      style={{
        width: "320px",
        backgroundColor: "rgba(31, 41, 55, 0.9)",
        transition: "opacity 0.3s",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <h3 className="text-primary fs-5 fw-bold mb-3">{step.title}</h3>
      <ul className="text-light list-unstyled">
        {step.details.map((detail, i) => (
          <li key={i} className="d-flex mb-2">
            <span className="text-primary me-2">•</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const REERecycling = () => {
  const [activeStep, setActiveStep] = useState("frame");
  const [showInfo, setShowInfo] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  const recyclingPlants = [
    {
      id: 1,
      title: "Attero Recycling Pvt Ltd",
      type: "hydrometallurgical",
      color: "#4FD1C5", // Teal color for hydromet
      position: [-8, 0, 0],
      details: [
        "Uses patented hydrometallurgical processes",
        "Recovers Nd, Pr, Dy at >98% yield",
        "99.9% purity output",
      ],
    },
    {
      id: 2,
      title: "Lohum Cleantech",
      type: "battery",
      color: "#F6AD55", // Orange color for battery
      position: [0, 0, 0],
      details: [
        "India's largest Li-ion battery recycler",
        "4 GWh capacity",
        "Recovers Li, Co, Ni, Mn for battery-grade reuse",
        "Invests 10% of revenue in R&D",
      ],
    },
    {
      id: 3,
      title: "Owais Metals & Minerals",
      type: "slag",
      color: "#9F7AEA", // Purple color for slag
      position: [8, 0, 0],
      details: [
        "Proprietary process for critical oxides",
        "Extracts Ta2O5, Na2O5 from mining slag",
        "99.9% purity with DAE approval",
      ],
    },
  ];

  return (
    <>
      <Layout headerStyle={1}>
        <div className="position-relative w-100 vh-100 bg-dark overflow-hidden">
          <div style={{ width: "100%", height: "100vh" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0}
            >
              <REERecyclingScene
                plants={recyclingPlants}
                activePlant={activeStep}
              />
            </motion.div>

            <InfoPanel
              step={recyclingPlants.find((s) => s.id === activeStep)}
              isVisible={showInfo}
            />

            {/* Optional step controls */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "10px",
                zIndex: 10,
              }}
            >
              {recyclingPlants.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  style={{
                    padding: "8px 12px",
                    backgroundColor: step.color,
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  {step.title.split(" ")[0]} {/* Show first word */}
                </button>
              ))}
            </div>
          </div>

          <div
            className="position-absolute bottom-0 start-0 m-3 p-3 rounded border"
            style={{
              backgroundColor: "rgba(31, 41, 55, 0.7)",
              borderColor: "#4B5563",
            }}
          >
            <div className="d-flex align-items-center gap-3">
              <button
                className="btn btn-primary px-3 py-2"
                onClick={() => setShowInfo(!showInfo)}
              >
                {showInfo ? "Hide Info" : "Show Info"}
              </button>
            </div>
          </div>
        </div>
        <section className="blog-details-area pt-80 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              {/* Social Icons */}
              <motion.div
                className="col-lg-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="blog-details-social">
                  <ul className="list-wrap">
                    {[
                      "facebook-f",
                      "twitter",
                      "linkedin-in",
                      "pinterest",
                      "share",
                    ].map((icon, i) => (
                      <li key={i}>
                        <Link href="#">
                          <i className={`fab fa-${icon}`} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Blog Posts */}
              <div className="col-xl-8 col-lg-7">
                <div className="blog-post-wrapper">
                  {[...Array(4)].map((_, i) => {
                    const postData = [
                      {
                        category: "Technology",
                        author: "Industrial Engineer",
                        date: "Jul 9, 2025",
                        title:
                          "Advanced Patented Technologies in REE Recycling",
                        image:
                          "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?...",
                        points: [
                          "Unicore's Pyro-hydro plant uses proprietary two-step smelting-hydrometallurgy...",
                          "Licore's Ion-captar system processes REt-3.5 30% faster...",
                          "Hypnoling's IPMS tech recovers magnet scrap with 88% energy savings...",
                          "Hitachi Metals automated HDD disassembly recovers 140 drives/hour...",
                        ],
                      },
                      {
                        category: "Policy",
                        author: "Policy Analyst",
                        date: "Jul 2, 2025",
                        title: "Regulatory Advantages in Rare Earth Recycling",
                        image:
                          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?...",
                        points: [
                          "Cyclite's nuclear license allows processing phosphor powders...",
                          "Solvay's EU incentives support La Rochelle plant...",
                          "Circular partnerships like MOLIs help meet EU's 25% recycling target",
                        ],
                      },
                      {
                        category: "Investment",
                        author: "Financial Reporter",
                        date: "Jun 25, 2025",
                        title: "Government-Backed REE Recycling Projects",
                        image:
                          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?...",
                        points: [
                          "Lyons Rare Earths secured $120M DoD contract...",
                          "MP Materials received $58.5M tax credit...",
                          "Diversified support through Australia's and Malaysia's programs...",
                          "MP's 10-year supply deal with GM ensures steady cashflow",
                        ],
                      },
                      {
                        category: "Emerging Markets",
                        author: "India Correspondent",
                        date: "Jun 18, 2025",
                        title: "India's Rare Earth Recycling Challenges",
                        image:
                          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?...",
                        points: [
                          "Key Players: NAMO EWASTE, Attero, Lohum...",
                          "Regulatory Hurdles: Monazite classification, CRZ zones...",
                          "Capital Intensity: $300-500M for SX-EW plants...",
                          "Fragmented Oversight across multiple ministries...",
                          "Tech Gap: Limited pilot-scale at CSIR-NML and BARC",
                        ],
                      },
                    ][i];

                    return (
                      <motion.div
                        key={i}
                        className="latest__post-item mb-4"
                        custom={i + 1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                      >
                        <div className="latest__post-thumb tgImage__hover">
                          <Link href="#">
                            <img
                              src={postData.image}
                              alt={postData.title}
                              className="img-fluid"
                            />
                          </Link>
                        </div>
                        <div className="latest__post-content">
                          <ul className="tgbanner__content-meta list-wrap">
                            <li className="category">
                              <Link href="#">{postData.category}</Link>
                            </li>
                            <li>
                              <span className="by">By</span>{" "}
                              <Link href="#">{postData.author}</Link>
                            </li>
                            <li>{postData.date}</li>
                          </ul>
                          <h3 className="title tgcommon__hover">
                            <Link href="#">{postData.title}</Link>
                          </h3>
                          <p>
                            {i === 0 &&
                              "Cutting-edge technologies are revolutionizing rare earth recovery:"}
                            {i === 1 &&
                              "Strategic policy frameworks are enabling recycling breakthroughs:"}
                            {i === 2 &&
                              "Major public investments are de-risking rare earth recycling:"}
                            {i === 3 &&
                              "India faces unique hurdles in developing REE recycling capacity:"}
                          </p>
                          <ul>
                            {postData.points.map((point, idx) => (
                              <li key={idx}>
                                <strong>{point.split(":")[0]}</strong>
                                {point.includes(":")
                                  ? `:${point.split(":")[1]}`
                                  : ""}
                              </li>
                            ))}
                          </ul>
                          <div className="latest__post-read-more">
                            <Link href="#">
                              Read More{" "}
                              <i className="far fa-long-arrow-right" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <motion.div
                className="col-xl-3 col-lg-4 col-md-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={4}
              >
                <BlogSidebar />
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default REERecycling;

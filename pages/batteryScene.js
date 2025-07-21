import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import BlogSidebar from "@/components/elements/BlogSidebar";
import BatteryScene from "@/components/batterScene";
import { motion } from "framer-motion";

const DroneAssembly = () => {
  const [activeStep, setActiveStep] = useState("frame");
  const [showInfo, setShowInfo] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const socialIcons = [
    "facebook-f",
    "twitter",
    "linkedin-in",
    "behance",
    "share",
  ];

  const posts = [
    {
      category: "Mining",
      author: "Materials Scientist",
      date: "Jul 9, 2025",
      title: "Mining & Raw Materials for Sodium-Ion Batteries",
      image:
        "https://borates.today/wp-content/uploads/2022/09/AdobeStock_452681227.jpg",
      excerpt:
        "Sodium-ion battery production begins with extracting raw materials like sodium carbonate, iron, and manganese. These are sourced from regions like the U.S., Turkey, and Australia. Supply chain stability and sustainable mining practices are key to scalability.",
    },
    {
      category: "Refining",
      author: "Process Engineer",
      date: "Jul 3, 2025",
      title: "Chemical Processing & Refining for Battery Materials",
      image:
        "https://ingun.com/media/CMS%20Media/knowledge/techtalk/hero-blog-battery-forming-min.jpg",
      excerpt:
        "After extraction, materials are refined through thermal and chemical treatments to improve purity. Carbon-based materials are treated to form anodes, while sodium and metal oxides are prepared for cathode synthesis.",
    },
    {
      category: "Manufacturing",
      author: "Battery Engineer",
      date: "Jun 26, 2025",
      title: "Cell Design and Manufacturing in Sodium-Ion Batteries",
      image:
        "https://web-assets.bcg.com/51/0f/3695da9d407da3ce2ab0fa236b46/the-battery-cell-factory-of-the-future-rectangle.jpg",
      excerpt:
        "Refined materials are assembled into electrodes and cells using roll-to-roll techniques. Pilot plants in Europe and Asia are testing scalable designs with improved density and safety. Automation is key.",
    },
  ];
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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

  return (
    <>
      <Layout headerStyle={1}>
        <div className="position-relative w-100 vh-100 bg-dark overflow-hidden">
          {/* 3D Scene */}
          {isClient && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0}
            >
              <BatteryScene />
            </motion.div>
          )}

          {/* Info Panel */}

          {/* Control UI */}
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
              {/* Social Share Icons */}
              <motion.div
                className="col-lg-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0}
              >
                <div className="blog-details-social">
                  <ul className="list-wrap">
                    {socialIcons.map((icon, i) => (
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
                  {posts.map((post, i) => (
                    <motion.div
                      key={i}
                      className="latest__post-item mb-4"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      custom={i + 1}
                    >
                      <div className="latest__post-thumb tgImage__hover">
                        <Link href="#">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="latest__post-content">
                        <ul className="tgbanner__content-meta list-wrap">
                          <li className="category">
                            <Link href="#">{post.category}</Link>
                          </li>
                          <li>
                            <span className="by">By</span>{" "}
                            <Link href="#">{post.author}</Link>
                          </li>
                          <li>{post.date}</li>
                        </ul>
                        <h3 className="title tgcommon__hover">
                          <Link href="#">{post.title}</Link>
                        </h3>
                        <p>{post.excerpt}</p>
                        <div className="latest__post-read-more">
                          <Link href="#">
                            Read More <i className="far fa-long-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <motion.div
                className="col-xl-3 col-lg-4 col-md-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={posts.length + 1}
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

export default DroneAssembly;

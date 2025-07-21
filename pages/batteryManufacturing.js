import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import BlogSidebar from "@/components/elements/BlogSidebar";
import BatteryScene from "@/components/batterScene";
import BatteryManufacturingScene from "@/components/batteryManufacturingScene";
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

const BatteryManufacturing = () => {
  const [activeStep, setActiveStep] = useState("frame");
  const [showInfo, setShowInfo] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const posts = [
    {
      category: "Mining",
      author: "Resource Analyst",
      date: "Jul 15, 2025",
      title: "Global Mineral Extraction for EV Batteries",
      image:
        "https://assets.telecomtv.com/assets/telecomtv/open-cast-mine-11646.jpg?w=1280",
      excerpt:
        "The EV revolution begins with mining critical minerals like lithium, nickel, and cobalt. Major deposits are found in Australia, Indonesia, and the DRC. Sustainable and ethical sourcing is key as demand surges.",
    },
    {
      category: "Processing",
      author: "Chemical Engineer",
      date: "Jul 8, 2025",
      title: "Advanced Refining Techniques for Battery Materials",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      excerpt:
        "Raw minerals undergo complex refining to achieve battery-grade purity. Chinese facilities lead lithium processing, while South Korea leads nickel. New hydrometallurgy is 30% more energy-efficient.",
    },
    {
      category: "Production",
      author: "Manufacturing Expert",
      date: "Jun 30, 2025",
      title: "Gigafactories: The Future of Battery Production",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      excerpt:
        "CATL’s Ningde factory makes batteries for 8,000 EVs daily. Dry electrode tech shrinks footprints while boosting output. Europe and the U.S. are emerging as key battery hubs.",
    },
  ];

  const socialIcons = [
    "facebook-f",
    "twitter",
    "linkedin-in",
    "pinterest",
    "share",
  ];

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

  const batterySteps = [
    {
      id: 1,
      title: "Mineral Extraction",
      position: [-10, 0, 0],
      color: "#4F46E5", // indigo
      details: [
        "Lithium (spodumene & brine): Australia, Chile, Argentina",
        "Nickel (laterite & sulfide): Indonesia, Philippines, Canada, Russia",
        "Cobalt (by-product): DRC (≈70% of global output)",
        "Graphite: China, Mozambique, Brazil",
        "Manganese: South Africa, Australia",
      ],
    },
    {
      id: 2,
      title: "Concentration",
      position: [-5, 0, 0],
      color: "#10B981", // emerald
      details: [
        "Pilbara Minerals - Australia",
        "PT Anoka Tansheng (ANTARA) - China",
        "Baokou Rare-Earth Plant - China Northern Rare Earth Group",
      ],
    },
    {
      id: 3,
      title: "Refining",
      position: [0, 0, 0],
      color: "#F59E0B", // amber
      details: [
        "Yichun Lithium Refining - Ganfeng Lithium, China",
        "POSCO Pilbara Lithium Solutions - South Korea",
        "Sumitomo Metal Mining - Japan",
      ],
    },
    {
      id: 4,
      title: "Precursor & Active-Material",
      position: [5, 0, 0],
      color: "#EF4444", // red
      details: [
        "CATL - Ningde Gigafactory, China",
        "LG Energy Solutions - South Korea",
        "Umicore Battery Materials - Poland",
      ],
    },
    {
      id: 5,
      title: "Electrode & Component",
      position: [10, 0, 0],
      color: "#8B5CF6", // violet
      details: [
        "SVOLT Energy Technology - China",
        "Panasonic Energy - Japan",
        "Multiple facilities - South Korea",
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
              <BatteryManufacturingScene
                steps={batterySteps}
                activeStep={activeStep}
              />
              <InfoPanel
                step={batterySteps.find((s) => s.id === activeStep)}
                isVisible={showInfo}
              />
            </motion.div>

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
              {batterySteps.map((step) => (
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

export default BatteryManufacturing;

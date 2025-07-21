import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import BlogSidebar from "@/components/elements/BlogSidebar";
import BatteryScene from "@/components/batterScene";
import SolarPanelScene from "@/components/solarPanelScene";
import { motion } from "framer-motion";

const Solar = () => {
  const [activeStep, setActiveStep] = useState("frame");
  const [showInfo, setShowInfo] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const blogPosts = [
    {
      id: 1,
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Quartz_Br%C3%A9sil.jpg/1200px-Quartz_Br%C3%A9sil.jpg",
      alt: "Quartz Mining",
      category: "Mining",
      author: "Geo Specialist",
      date: "Jul 9, 2025",
      title: "Step 1: Quartz Mining for Silicon Feedstock",
      description:
        "The Quartz Corp mines high-purity quartz (SiO₂) from Rana Mines, Norway — a vital raw material for producing silicon used in semiconductors and solar cells.",
    },
    {
      id: 2,
      imgSrc: "https://hackaday.com/wp-content/uploads/2018/01/milling.jpg",
      alt: "Silicon Refining",
      category: "Refining",
      author: "Chemical Engineer",
      date: "Jul 8, 2025",
      title: "Step 2: Refining Quartz into Metallurgical Silicon",
      description:
        "At Wacker Chemie in Burghausen, Germany, quartz is refined into silicon, a crucial intermediate used for electronics and photovoltaics. This involves high-temperature arc furnaces and purification.",
    },
    {
      id: 3,
      imgSrc:
        "https://www.energy.gov/sites/default/files/styles/full_article_width/public/2024-08/Crystalline-Silicon-08152024_PERC.png?itok=-kJ0dD7n",
      alt: "Solar Grade Silicon",
      category: "Purification",
      author: "Materials Engineer",
      date: "Jul 7, 2025",
      title: "Step 3: Purifying Silicon to Solar Grade",
      description:
        "Hemlock Semiconductor, based in Michigan, USA, purifies silicon to solar-grade quality (99.9999%), ensuring it's suitable for photovoltaic applications in the energy sector.",
    },
    {
      id: 4,
      imgSrc:
        "https://www.nikon.com/business/semi/technology/img/02/pic_01.png",
      alt: "Silicon Ingot and Wafers",
      category: "Manufacturing",
      author: "Process Technician",
      date: "Jul 6, 2025",
      title: "Step 4: Casting Silicon Ingots and Slicing Wafers",
      description:
        "LONGi Green Energy in Xi’an, China, casts purified silicon into monocrystalline ingots, then slices them into ultra-thin wafers used as the substrate in solar panel cells.",
    },
    {
      id: 5,
      imgSrc:
        "https://rayzonsolar.com/img/blog/the-manufacturing-process-of-solar-panels.jpg",
      alt: "Solar Cell Manufacturing",
      category: "Cell Assembly",
      author: "Photovoltaics Expert",
      date: "Jul 5, 2025",
      title: "Step 5: Wafer to Solar Cell with Metallization",
      description:
        "JinkoSolar in Zhejiang, China, uses metallization to deposit silver (Ag) onto silicon wafers, creating electrical contacts that complete the photovoltaic cell structure.",
    },
  ];
  const socialIcons = [
    { href: "#", iconClass: "fab fa-facebook-f", label: "Facebook" },
    { href: "#", iconClass: "fab fa-twitter", label: "Twitter" },
    { href: "#", iconClass: "fab fa-linkedin-in", label: "LinkedIn" },
    { href: "#", iconClass: "fab fa-behance", label: "Behance" },
    { href: "#", iconClass: "fas fa-share", label: "Share" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
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
              <SolarPanelScene />
            </motion.div>
          )}

       
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
              >
                <div className="blog-details-social">
                  <ul className="list-wrap">
                    {socialIcons.map(({ href, iconClass, label }) => (
                      <li key={label}>
                        <Link href={href} aria-label={label}>
                          <i className={iconClass} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Blog Posts */}
              <div className="col-xl-8 col-lg-7">
                <div className="blog-post-wrapper">
                  {blogPosts.map(
                    ({
                      id,
                      imgSrc,
                      alt,
                      category,
                      author,
                      date,
                      title,
                      description,
                    }) => (
                      <motion.div
                        key={id}
                        className="latest__post-item"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                      >
                        <div className="latest__post-thumb tgImage__hover">
                          <Link href="#">
                            <img src={imgSrc} alt={alt} />
                          </Link>
                        </div>
                        <div className="latest__post-content">
                          <ul className="tgbanner__content-meta list-wrap">
                            <li className="category">
                              <Link href="#">{category}</Link>
                            </li>
                            <li>
                              <span className="by">By</span>{" "}
                              <Link href="#">{author}</Link>
                            </li>
                            <li>{date}</li>
                          </ul>
                          <h3 className="title tgcommon__hover">
                            <Link href="#">{title}</Link>
                          </h3>
                          <p>{description}</p>
                          <div className="latest__post-read-more">
                            <Link href="#">
                              Read More{" "}
                              <i className="far fa-long-arrow-right" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              {/* Blog Sidebar */}
              <motion.div
                className="col-xl-3 col-lg-4 col-md-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
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

export default Solar;

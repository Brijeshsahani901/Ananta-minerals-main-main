import BlogSidebar from "@/components/elements/BlogSidebar";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

import SolarPV from "@/components/SolarPv";
import { FaDownload } from "react-icons/fa";
import { useState, useRef } from "react";
import gsap from "gsap";

export default function MineralSecurity() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const criticalRef = useRef(null);

  const handleMouseEnter = (ref) => {
    gsap.to(ref.current, {
      duration: 0.3,
      scale: 1.03,
      textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, {
      duration: 0.3,
      scale: 1,
      textShadow: "none",
      ease: "power2.out",
    });
  };

  const handleDownload = () => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const pdfUrl = `${basePath}/assets/downloads/Renewable_Energy_Applications.pdf`;

    // Open the PDF in a new browser tab
    window.open(pdfUrl, "_blank");
  };

  return (
    <>
      <Layout
        breadcrumbCategory="Energy"
        breadcrumbPostTitle="Critical Minerals for India's Renewable Energy Transition"
      >
        <section
          className="blog-details-area "
          style={{
            backgroundImage: `url("${basePath}static/media/home-shape.684c9f3deb5fb22fbe2f.png")`,
          }}
        >
          <div>
            <SolarPV />
          </div>
          <div className="container mt-50">
            <div className="row justify-content-center">
              <div className="col-lg-1"></div>
              <div className="col-xl-12 col-lg-12">
                <div className="blog-post-wrapper">
                  <div className="latest__post-item">
                    <div className="latest__post-content">
                      <div
                        className="document-box mb-4"
                        style={{
                          // border: "1px solid #dee2e6",
                          borderRadius: "5px",
                          backgroundColor: "#fff",
                          overflow: "hidden",
                        }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4" > 
                            <img
                              src={`${basePath}/assets/sectors_images/renewable.jpg`}
                              alt="automobile"
                              className="img-fluid h-100 w-100"
                              style={{ objectFit: "cover",borderRadius : "20px" }}
                            />
                          </div>
                          <div className="col-md-8">
                            {/* <Link href="/supply-chain/critical-pathway"> */}
                            <h2
                              className="mb-4"
                              style={{ cursor: "pointer" }}
                              onClick={handleDownload}
                              ref={criticalRef}
                              onMouseEnter={() => handleMouseEnter(criticalRef)}
                              onMouseLeave={() => handleMouseLeave(criticalRef)}
                            >
                              Critical Minerals for India's Renewable Energy
                              Transition
                            </h2>
                            {/* </Link> */}
                            <p>
                              The renewable energy sector is increasingly
                              vulnerable to supply, pricing, and processing
                              challenges concerning key transition
                              minerals—copper, platinum group metals (PGMs), and
                              tellurium. These are essential for wind turbines,
                              solar photovoltaic cells, hydrogen electrolysers,
                              and grid-scale electrification systems. Copper
                              supply is under strain due to falling ore grades,
                              high energy costs in top producers like Chile and
                              Peru, and delays in new project permits. PGMs,
                              especially platinum and iridium, are
                              geopolitically risky due to their concentration in
                              South Africa and Russia, directly impacting
                              hydrogen fuel cell scale-up. 
                            </p>
                            <div
                              style={{
                                position: "relative",
                                color: "black",
                                top: 20,
                                left: 90,
                                background: "black",
                                height: "12px",
                                width: "2px",
                              }}
                            ></div>
                            <p className="date">
                              July 2025 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              Ayan Barman
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <h1 className="title">
                        Critical Minerals for India's Renewable Energy
                        Transition
                      </h1>

                      <div className="post-meta">
                        <p className="date">
                          <b>Date</b> :- July 2025
                        </p>
                        <p className="author">
                          <b>Author(s)</b> :- By Ayan Barman
                        </p>
                        <br />
                        <button
                          onClick={handleDownload}
                          className="btn btn-primary rounded d-inline-flex align-items-center"
                          style={{
                            padding: "0.4rem 0.75rem",
                            fontSize: "0.75rem",
                            textTransform: "none",
                            lineHeight: 1,
                            fontWeight: 500,
                            margintop: "5px",
                          }}
                        >
                          <FaDownload
                            className="me-1"
                            style={{ fontSize: "0.85rem" }}
                          />
                          Download Study
                        </button>
                      </div>

                      <div
                        style={{
                          background: "#f5f5f5",
                          margin: "50px 0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <SolarPV />
                      </div>

                      <div className="content-section">
                        <h3 className="content-title">Overview</h3>
                        <p>
                          The renewable energy sector is increasingly vulnerable
                          to supply, pricing, and processing challenges
                          concerning key transition minerals—copper, platinum
                          group metals (PGMs), and tellurium. These are
                          essential for wind turbines, solar photovoltaic cells,
                          hydrogen electrolysers, and grid-scale electrification
                          systems.
                        </p>
                        <p>
                          Copper supply is under strain due to falling ore
                          grades, high energy costs in top producers like Chile
                          and Peru, and delays in new project permits. PGMs,
                          especially platinum and iridium, are geopolitically
                          risky due to their concentration in South Africa and
                          Russia, directly impacting hydrogen fuel cell
                          scale-up. Tellurium, a low-extraction byproduct of
                          copper refining used in CdTe solar panels, is hampered
                          by limited refining capacity and remains a bottleneck.
                          Without strategic intervention, these constraints may
                          derail India's clean energy targets and slow solar and
                          hydrogen tech deployment.
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

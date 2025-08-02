import Layout from "@/components/layout/Layout";
import MilitaryDronesAssembly from "@/components/militaryDroneAssembly";
import { FaDownload } from "react-icons/fa";
import { useState, useRef } from "react";
import gsap from "gsap";

export default function DefenceAerospace() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const criticalRef = useRef(null);

  const handleMouseEnter = (ref) => {
    gsap.to(ref.current, {
      duration: 0.3,
      scale: 1.02,
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
    const pdfUrl = `${basePath}/assets/downloads/Defence_and_Aerospace.pdf`;

    // Open the PDF in a new browser tab
    window.open(pdfUrl, "_blank");
  };

  return (
    <>
      <Layout
        breadcrumbCategory="Defence"
        breadcrumbPostTitle="Mineral Security in India's Defence and Aerospace Supply Chain"
      >
        <section
          className="blog-details-area"
          style={{
            backgroundImage: `url("${basePath}/static/media/home-shape.684c9f3deb5fb22fbe2f.png")`,
          }}
        >
          <div>
            <MilitaryDronesAssembly />
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
                          borderRadius: "5px",
                          backgroundColor: "#fff",
                          overflow: "hidden",
                        }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={`${basePath}/assets/sectors_images/defence.jpg`}
                              alt="automobile"
                              className="img-fluid h-100 w-100"
                                      style={{ objectFit: "cover" , borderRadius: "20px", }}
                            />
                          </div>
                          <div className="col-md-8 ml-3">
                            {/* <Link href="/supply-chain/critical-pathway"> */}
                            <h2
                            className="mb-4"
                              style={{ cursor: "pointer" }}
                              onClick={handleDownload}
                              ref={criticalRef}
                              onMouseEnter={() => handleMouseEnter(criticalRef)}
                              onMouseLeave={() => handleMouseLeave(criticalRef)}
                            >
                              Mineral Security in India's Defence and Aerospace
                              Supply Chain
                            </h2>
                            {/* </Link> */}
                            <p>
                              The defence and aerospace sectors represent the
                              technological apex of India's industrial
                              ambitions, underpinning national security,
                              regional power projection, and strategic autonomy.
                              These sectors are becoming increasingly
                              mineral-intensive, driven by the adoption of
                              hypersonic platforms, miniaturised electronic
                              warfare systems, directed energy weapons, and
                              advanced jet propulsion technologies. India's
                              defence and aerospace minerals landscape is
                              characterized by high import dependency for all
                              high-purity strategic minerals, with complete
                              external reliance for at least five critical
                              minerals. There are no strategic stockpiling
                              mechanisms for elements such as tantalum, rhenium,
                              or niobium, and minimal domestic refining and
                              separation capacity, particularly for REEs, PGMs,
                              and hafnium.
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
                              Prerna Bountra
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* <h1 className="title">
                        Mineral Security in India's Defence and Aerospace Supply
                        Chain
                      </h1>

                     <div className="post-meta">
                        <p className="date">
                          <b>Date</b> :- July 2025
                        </p>
                        <p className="author">
                          <b>Author(s)</b> :- By Prerna Bountra
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
                        <MilitaryDronesAssembly />
                      </div>

                      <div className="content-section">
                        <h3 className="content-title">Overview</h3>
                        <p>
                          The defence and aerospace sectors represent the
                          technological apex of India's industrial ambitions,
                          underpinning national security, regional power
                          projection, and strategic autonomy. These sectors are
                          becoming increasingly mineral-intensive, driven by the
                          adoption of hypersonic platforms, miniaturised
                          electronic warfare systems, directed energy weapons,
                          and advanced jet propulsion technologies.
                        </p>
                        <p>
                          India's defence and aerospace minerals landscape is
                          characterized by high import dependency for all
                          high-purity strategic minerals, with complete external
                          reliance for at least five critical minerals. There
                          are no strategic stockpiling mechanisms for elements
                          such as tantalum, rhenium, or niobium, and minimal
                          domestic refining and separation capacity,
                          particularly for REEs, PGMs, and hafnium.
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

import BlogSidebar from "@/components/elements/BlogSidebar";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import AlternateTechSodiumIon from "@/components/alternateTechSodiumIonBattery";
import { FaDownload } from "react-icons/fa";
import SupplyChainSteps from "@/components/supplyChainSteps";
import { useState, useRef } from "react";
import gsap from "gsap";

export default function Automobile() {
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
    const pdfUrl = `${basePath}/assets/downloads/Automobile.pdf`;

    // Open the PDF in a new browser tab
    window.open(pdfUrl, "_blank");
  };

  return (
    <>
      <Layout
        breadcrumbCategory="Agriculture"
        breadcrumbPostTitle="Automobile Industry and Battery Applications"
      >
        <section
          className="blog-details-area"
          style={{
            backgroundImage: `url("${basePath}/static/media/home-shape.684c9f3deb5fb22fbe2f.png")`,
          }}
        >
          <div>
            <SupplyChainSteps />
          </div>
          <div className="container mt-50">
            <div className="row justify-content-center">
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
                              src={`${basePath}/assets/sectors_images/automobile.jpg`}
                              alt="automobile"
                              className="img-fluid h-100 w-100"
                              style={{ objectFit: "cover" , borderRadius: "20px", }}
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
                              Automobile Industry and Battery Applications
                            </h2>
                            {/* </Link> */}
                            <p>
                              The rapid shift toward electric vehicles (EVs) and
                              next-generation battery technologies has made the
                              automotive sector highly dependent on a secure,
                              affordable supply of critical minerals—especially
                              lithium, nickel, cobalt, graphite, and rare earth
                              elements (REEs). These materials are essential for
                              manufacturing high-performance batteries and
                              electric drivetrains, directly impacting vehicle
                              range, safety, and cost competitiveness. For
                              automakers and battery manufacturers, control over
                              mineral supply chains and processing
                              infrastructure is now a core strategic concern.
                              Any disruption—whether from raw material
                              shortages, processing bottlenecks, or geopolitical
                              events—can halt production lines, drive up
                              component costs, and threaten the industry's
                              ability to meet regulatory emissions targets and
                              consumer demand for EVs.
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
                        Automobile Industry and Battery Applications
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

                      <div className="content-section">
                        <h3 className="content-title mt-5">Overview</h3>
                        <p>
                          The rapid shift toward electric vehicles (EVs) and
                          next-generation battery technologies has made the
                          automotive sector highly dependent on a secure,
                          affordable supply of critical minerals—especially
                          lithium, nickel, cobalt, graphite, and rare earth
                          elements (REEs). These materials are essential for
                          manufacturing high-performance batteries and electric
                          drivetrains, directly impacting vehicle range, safety,
                          and cost competitiveness. For automakers and battery
                          manufacturers, control over mineral supply chains and
                          processing infrastructure is now a core strategic
                          concern. Any disruption—whether from raw material
                          shortages, processing bottlenecks, or geopolitical
                          events—can halt production lines, drive up component
                          costs, and threaten the industry's ability to meet
                          regulatory emissions targets and consumer demand for
                          EVs.
                        </p>
                        <p>
                          Geopolitical factors have become a major source of
                          risk for automotive and battery manufacturers.
                          Resource nationalism, export controls, and the
                          concentration of refining capacity in a handful of
                          countries—most notably China—translate into
                          significant supply chain vulnerabilities. China’s
                          dominance in the refining and processing of lithium,
                          nickel, cobalt, graphite, and REEs has allowed it to
                          impose export quotas, dual-license requirements, and
                          outright bans that can suddenly curtail global supply
                          and trigger price spikes of 20–30% in vital battery
                          and magnet materials. These policies create acute
                          strategic challenges for automakers and battery
                          producers, forcing them to scramble for alternative
                          sources, absorb higher costs, and face potential
                          production delays that threaten profitability and
                          market share. This chapter analyzes the geopolitical
                          dynamics surrounding each critical mineral relevant to
                          this sector, highlights cross-cutting risks for the
                          automotive and battery industry, and proposes
                          actionable strategies for industry and policymakers to
                          secure resilient, sustainable supply chains.
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

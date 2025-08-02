import BlogSidebar from "@/components/elements/BlogSidebar";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState, useRef } from "react";
import gsap from "gsap";
import SupplyChainSteps from "@/components/supplyChainSteps";
import { FaDownload } from "react-icons/fa";

export default function Agriculture() {
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
    const pdfUrl = `${basePath}/assets/downloads/Agriculture.pdf`;

    // Open the PDF in a new browser tab
    window.open(pdfUrl, "_blank");
  };

  return (
    <>
      <Layout
        breadcrumbCategory="Agriculture"
        breadcrumbPostTitle="Mineral Security in India's Agriculture Sector"
      >
        <section
          className="blog-details-area"
          style={{
            backgroundImage: `url("${basePath}/static/media/home-shape.684c9f3deb5fb22fbe2f.png")`,
          }}
        >
          <div style={{ width: "100%", background: "#f5f5f5", margin: "0px 0" }}>
          <img
           src={`${basePath}/assets/sectors_images/agriculture.jpg`}
            alt="About"
            style={{
              width: "100%",
              height: "79vh",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>
          {/* <div>
            <SupplyChainSteps />
          </div> */}
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
                              src={`${basePath}/assets/sectors_images/agriculture.jpg`}
                              alt="automobile"
                              className="img-fluid h-100 w-100"
                              style={{
                                objectFit: "cover",
                                borderRadius: "20px",
                              }}
                            />
                          </div>
                          <div className="col-md-8">
                            <h2
                              className="mb-4"
                              style={{ cursor: "pointer" }}
                              onClick={handleDownload}
                              ref={criticalRef}
                              onMouseEnter={() => handleMouseEnter(criticalRef)}
                              onMouseLeave={() => handleMouseLeave(criticalRef)}
                            >
                              Mineral Security in India's Agriculture Sector
                            </h2>
                            <p>
                              India's agricultural sector—on which over 60% of
                              the population depends directly or
                              indirectly—relies heavily on the uninterrupted
                              supply of mineral-based fertilizers. This
                              dependency exposes a critical vulnerability: in
                              2023 alone, India imported over 18 million tonnes
                              of key fertilizer minerals, with import reliance
                              ranging from 50% to 100% across major inputs. The
                              implications are twofold—a significant economic
                              strain, reflected in the fertilizer subsidy bill
                              reaching ₹2.25 lakh crore in FY2023-24, and a
                              growing food security risk if global supply chains
                              are disrupted.
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

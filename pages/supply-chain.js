import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import { useRef } from 'react';
import gsap from 'gsap';

export default function SupplyChain() {
   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const handleDownload = (label) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const link = document.createElement("a");
    link.href = `${basePath}/assets/downloads/${label}.pdf`;
    link.download = `${label}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 🔹 Create individual refs for each h5
  const criticalRef = useRef(null);
  const loopRef = useRef(null);

  const handleMouseEnter = (ref) => {
    gsap.to(ref.current, {
      duration: 0.3,
      scale: 1.05,
      textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, {
      duration: 0.3,
      scale: 1,
      textShadow: "none",
      ease: "power2.out"
    });
  };

  return (
    <Layout
      breadcrumbCategory="supply chain"
      breadcrumbPostTitle="Critical Minerals Resource Center"
    >
      <section
        className="blog-details-area fit-content-height"
        style={{
          backgroundImage: `url("${basePath}/static/media/home-shape.684c9f3deb5fb22fbe2f.png")`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div className="blog-post-wrapper">
                <div className="latest__post-item">
                  <div className="latest__post-content">
                    <div className="documents-overview mt-4">

                      {/* --------- Document Box 1 --------- */}
                      <div className="document-box mb-4" style={{ border: "1px solid #dee2e6", borderRadius: "20px", backgroundColor: "#fff", overflow: "hidden" }}>
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={`${basePath}/assets/minerals_images/battery.jpg`}
                              alt="Mineral Value Chain"
                              className="img-fluid h-100 w-100"
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                          <div className="col-md-8 p-4">
                            <Link href="/supply-chain/critical-pathway">
                              <h5
                                ref={criticalRef}
                                onMouseEnter={() => handleMouseEnter(criticalRef)}
                                onMouseLeave={() => handleMouseLeave(criticalRef)}
                              >
                                Critical Pathways: Building India's Mineral Value Chain
                              </h5>
                            </Link>
                            <p>
                              This comprehensive analysis examines India's strategic mineral dependencies across the entire value chain - from geological exploration to final integration in defense and electronics.
                            </p>
                            <div style={{ position: "relative", color: "black", top: 20, left: 90, background: "black", height: "12px", width: "2px" }}></div>
                            <p className="date">
                              July 2025 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Prerna Bountra
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* --------- Document Box 2 --------- */}
                      <div className="document-box" style={{ border: "1px solid #dee2e6", borderRadius: "20px", backgroundColor: "#fff", overflow: "hidden" }}>
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                          src={`${basePath}/assets/minerals_images/closing_loop.jpg`}
                              alt="Battery Recycling"
                              className="img-fluid h-100 w-100"
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                          <div className="col-md-8 p-4">
                            <Link href="/supply-chain/closing-loop">
                              <h5
                                ref={loopRef}
                                onMouseEnter={() => handleMouseEnter(loopRef)}
                                onMouseLeave={() => handleMouseLeave(loopRef)}
                              >
                                Closing the Loop: Strengthening India's Battery Recycling Supply Chains
                              </h5>
                            </Link>
                            <p>
                              This strategic report analyzes India's battery recycling ecosystem and its role in securing critical mineral supply chains for the clean energy transition.
                            </p>
                            <div style={{ position: "relative", color: "black", top: 20, left: 90, background: "black", height: "12px", width: "2px" }}></div>
                            <p className="date">
                              July 2025 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ayan Barman
                            </p>
                          </div>
                        </div>
                      </div>

                    </div> {/* .documents-overview */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

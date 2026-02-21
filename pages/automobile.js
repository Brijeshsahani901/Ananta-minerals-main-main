
// import Layout from "@/components/layout/Layout";
// import SupplyChainSteps from "@/components/supplyChainSteps";
// import { useRef } from "react";
// import gsap from "gsap";

// export default function Automobile() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
//   const criticalRef = useRef(null);

//   const handleMouseEnter = (ref) => {
//     gsap.to(ref.current, {
//       duration: 0.3,
//       scale: 1.03,
//       textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
//       ease: "power2.out",
//     });
//   };

//   const handleMouseLeave = (ref) => {
//     gsap.to(ref.current, {
//       duration: 0.3,
//       scale: 1,
//       textShadow: "none",
//       ease: "power2.out",
//     });
//   };

//   const handleDownload = () => {
//     const pdfUrl = `${basePath}/assets/downloads/Automobile.pdf`;
//     window.open(pdfUrl, "_blank");
//   };

//   return (
//     <>
//       <Layout
//         breadcrumbCategory="Automobile"
//         breadcrumbPostTitle="Automobile Industry and Battery Applications"
//       >
//         <section
//           className="blog-details-area"
//           style={{
//             backgroundImage: `url("${basePath}/static/media/home-shape.684c9f3deb5fb22fbe2f.png")`,
//           }}
//         >
//           <div>
//             <SupplyChainSteps />
//           </div>

//           <div className="container mt-50">
//             <div className="row justify-content-center">
//               <div className="col-xl-12 col-lg-12">
//                 <div className="blog-post-wrapper">
//                   <div className="latest__post-item">
//                     <div className="latest__post-content">
//                       <div
//                         className="document-box mb-4"
//                         style={{
//                           borderRadius: "5px",
//                           backgroundColor: "#fff",
//                           overflow: "hidden",
//                         }}
//                       >
//                         <div className="row g-0">
//                           <div className="col-md-4">
//                             <img
//                               src={`${basePath}/assets/sectors_images/automobile.jpg`}
//                               alt="automobile"
//                               className="img-fluid h-100 w-100"
//                               style={{
//                                 objectFit: "cover",
//                                 borderRadius: "20px",
//                               }}
//                             />
//                           </div>

//                           <div className="col-md-8">
//                             {/* Heading (non-clickable) */}
//                             <h2
//                               className="mb-4"
//                               ref={criticalRef}
//                               onMouseEnter={() => handleMouseEnter(criticalRef)}
//                               onMouseLeave={() => handleMouseLeave(criticalRef)}
//                               style={{
//                                 cursor: "default",
//                               }}
//                             >
//                               Automobile Industry and Battery Applications
//                             </h2>

//                             {/* Description */}
//                             <p>
//                               The rapid shift toward electric vehicles (EVs) and
//                               next-generation battery technologies has made the
//                               automotive sector highly dependent on a secure,
//                               affordable supply of critical minerals—especially
//                               lithium, nickel, cobalt, graphite, and rare earth
//                               elements (REEs). These materials are essential for
//                               manufacturing high-performance batteries and
//                               electric drivetrains, directly impacting vehicle
//                               range, safety, and cost competitiveness. For
//                               automakers and battery manufacturers, control over
//                               mineral supply chains and processing
//                               infrastructure is now a core strategic concern.
//                               Any disruption—whether from raw material
//                               shortages, processing bottlenecks, or geopolitical
//                               events—can halt production lines, drive up
//                               component costs, and threaten the industry's
//                               ability to meet regulatory emissions targets and
//                               consumer demand for EVs.
//                             </p>

//                             {/* Stylish View Report Button */}
//                             <button
//   onClick={handleDownload}
//   style={{
//     marginTop: "15px",
//     padding: "8px 20px",
//     background: "linear-gradient(135deg, #2F4156 0%, #3A506B 100%)",
//     color: "#fff",
//     border: "none",
//     borderRadius: "15px",
//     fontWeight: "500",
//     fontSize: "14px",
//     boxShadow: "0 4px 12px rgba(47, 65, 86, 0.4)",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "8px",
//     letterSpacing: "0.4px",
//   }}
//   onMouseEnter={(e) => {
//     e.target.style.transform = "scale(1.05)";
//     e.target.style.boxShadow = "0 6px 14px rgba(0, 114, 255, 0.6)";
//   }}
//   onMouseLeave={(e) => {
//     e.target.style.transform = "scale(1)";
//     e.target.style.boxShadow = "0 4px 10px rgba(0, 114, 255, 0.4)";
//   }}
// >
//   <i
//     className="fas fa-file-pdf"
//     style={{ fontSize: "18px", color: "red", fontVariant: "outlined" }}
//   ></i>
//   View Report
// </button>


//                             {/* Author and date */}
//                             <div
//                               style={{
//                                 position: "relative",
//                                 color: "black",
//                                 top: 20,
//                                 left: 90,
//                                 background: "black",
//                                 height: "12px",
//                                 width: "2px",
//                               }}
//                             ></div>
//                             <p className="date">
//                               July 2025 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                               Ayan Barman
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </Layout>
//     </>
//   );
// }


"use client";

import Layout from "@/components/layout/Layout";
import SupplyChainSteps from "@/components/supplyChainSteps";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function Automobile() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const handleDownload = () => {
    const pdfUrl = `${basePath}/assets/downloads/Automobile.pdf`;
    window.open(pdfUrl, "_blank");
  };

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="blog-details-area fit-content-height"
      >
        <div style={{ width: "100%", background: "#f5f5f5" }}>
          <img
            src={`${basePath}/assets/sectors_images/automobile.jpg`}
            alt="Automobile Industry and Battery Applications"
            style={{
              width: "100%",
              height: "60vh",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-10">
              <div style={{ marginTop: "30px" }}>
                <div
                  className="p-4"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                  }}
                >
                  {/* Title */}
                  <h3 className="my-3">
                    Automobile Industry and Battery Applications
                  </h3>

                  {/* Content */}
                  <p className="my-3">
                    The rapid shift toward electric vehicles (EVs) and next-generation battery technologies has made the automotive sector highly dependent on a secure, affordable supply of critical minerals—especially lithium, nickel, cobalt, graphite, and rare earth elements (REEs).
                  </p>

                  <p className="my-3">
                    These materials are essential for manufacturing high-performance batteries and electric drivetrains, directly impacting vehicle range, safety, and cost competitiveness. For automakers and battery manufacturers, control over mineral supply chains and processing infrastructure is now a core strategic concern.
                  </p>

                  <p className="my-3">
                    Any disruption—whether from raw material shortages, processing bottlenecks, or geopolitical events—can halt production lines, drive up component costs, and threaten the industry's ability to meet regulatory emissions targets and consumer demand for EVs.
                  </p>

                  {/* Download Button */}
                  <button
                    onClick={handleDownload}
                    style={{
                      marginTop: "15px",
                      padding: "10px 22px",
                      background: "linear-gradient(135deg, #2F4156 0%, #3A506B 100%)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      fontWeight: "500",
                      fontSize: "14px",
                      boxShadow: "0 4px 12px rgba(47, 65, 86, 0.4)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    View Report (PDF)
                  </button>
   <Card
                    className="d-flex flex-column flex-md-row gap-4 p-4 mt-5 shadow-sm"
                    style={{
                      backgroundColor: "#fff6f6",
                      borderRadius: "10px",
                    }}
                  >
                    {/* Author Icon */}
                    <div
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        backgroundColor: "#e9ecef",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        flexShrink: 0,
                      }}
                    >
                      <FaUserCircle size={60} color="#2F4156" />
                    </div>

                    {/* Text Content */}
                    <div style={{ flex: 1 }}>
                      <div className="d-flex align-items-center mb-3 gap-2">
                        <h5 className="mb-0 fw-semibold text-dark">
                          Ayan Barman
                        </h5>
                        <Badge bg="success" pill>
                          Author
                        </Badge>
                      </div>

                      <p className="text-muted" style={{ lineHeight: 1.6 }}>
                        Ayan Barman is an international relations researcher at
                        Ananta Aspen Centre focusing on the geopolitical
                        implications of critical minerals. He holds a BA in
                        Liberal & Humanities Studies from O.P. Jindal
                        University, where he studied global security dynamics.
                        Ayan has contributed to policy reports at NITI Aayog and
                        authored articles on geopolitical issues with the
                        Observer Research Foundation. He has also worked at
                        British Petroleum (BP) as an executive. He is dedicated
                        to enhancing India's role in global governance and
                        promoting sustainable development in critical minerals.
                      </p>
                    </div>
                  </Card>

                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}
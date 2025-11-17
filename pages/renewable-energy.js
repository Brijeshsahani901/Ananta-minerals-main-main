// import Layout from "@/components/layout/Layout";

// import SolarPV from "@/components/SolarPv";
// import {  useRef } from "react";
// import gsap from "gsap";

// export default function MineralSecurity() {
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
//     const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
//     const pdfUrl = `${basePath}/assets/downloads/Renewable_Energy_Applications.pdf`;

//     // Open the PDF in a new browser tab
//     window.open(pdfUrl, "_blank");
//   };

//   return (
//     <>
//       <Layout
//         breadcrumbCategory="Energy"
//         breadcrumbPostTitle="Critical Minerals for India's Renewable Energy Transition"
//       >
//         <section
//           className="blog-details-area "
//           style={{
//             backgroundImage: `url("${basePath}static/media/home-shape.684c9f3deb5fb22fbe2f.png")`,
//           }}
//         >
//           <div>
//             <SolarPV />
//           </div>
//           <div className="container mt-50">
//             <div className="row justify-content-center">
//               <div className="col-lg-1"></div>
//               <div className="col-xl-12 col-lg-12">
//                 <div className="blog-post-wrapper">
//                   <div className="latest__post-item">
//                     <div className="latest__post-content">
//                       <div
//                         className="document-box mb-4"
//                         style={{
//                           // border: "1px solid #dee2e6",
//                           borderRadius: "5px",
//                           backgroundColor: "#fff",
//                           overflow: "hidden",
//                         }}
//                       >
//                         <div className="row g-0">
//                           <div className="col-md-4" > 
//                             <img
//                               src={`${basePath}/assets/sectors_images/renewable.jpg`}
//                               alt="automobile"
//                               className="img-fluid h-100 w-100"
//                               style={{ objectFit: "cover",borderRadius : "20px" }}
//                             />
//                           </div>
//                           <div className="col-md-8">
//                             {/* <Link href="/supply-chain/critical-pathway"> */}
//                             <h2
//                               className="mb-4"
//                               style={{ cursor: "pointer" }}
//                               onClick={handleDownload}
//                               ref={criticalRef}
//                               onMouseEnter={() => handleMouseEnter(criticalRef)}
//                               onMouseLeave={() => handleMouseLeave(criticalRef)}
//                             >
//                               Critical Minerals for India's Renewable Energy
//                               Transition
//                             </h2>
//                             {/* </Link> */}
//                             <p>
//                               The renewable energy sector is increasingly
//                               vulnerable to supply, pricing, and processing
//                               challenges concerning key transition
//                               minerals—copper, platinum group metals (PGMs), and
//                               tellurium. These are essential for wind turbines,
//                               solar photovoltaic cells, hydrogen electrolysers,
//                               and grid-scale electrification systems. Copper
//                               supply is under strain due to falling ore grades,
//                               high energy costs in top producers like Chile and
//                               Peru, and delays in new project permits. PGMs,
//                               especially platinum and iridium, are
//                               geopolitically risky due to their concentration in
//                               South Africa and Russia, directly impacting
//                               hydrogen fuel cell scale-up. 
//                             </p>
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


import Layout from "@/components/layout/Layout";
import SolarPV from "@/components/SolarPv";
import { useRef } from "react";
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
    const pdfUrl = `${basePath}/assets/downloads/Renewable_Energy_Applications.pdf`;
    window.open(pdfUrl, "_blank");
  };

  return (
    <>
      <Layout
        breadcrumbCategory="Energy"
        breadcrumbPostTitle="Critical Minerals for India's Renewable Energy Transition"
      >
        <section
          className="blog-details-area"
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
                          borderRadius: "5px",
                          backgroundColor: "#fff",
                          overflow: "hidden",
                        }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={`${basePath}/assets/sectors_images/renewable.jpg`}
                              alt="renewable energy"
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
                              ref={criticalRef}
                              onMouseEnter={() => handleMouseEnter(criticalRef)}
                              onMouseLeave={() => handleMouseLeave(criticalRef)}
                              style={{ cursor: "default" }}
                            >
                              Critical Minerals for India's Renewable Energy
                              Transition
                            </h2>

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

                            {/* Small "View Report" button */}
                                                   <button
  onClick={handleDownload}
  style={{
    marginTop: "15px",
    padding: "8px 20px",
    background: "linear-gradient(135deg, #2F4156 0%, #3A506B 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "15px",
    fontWeight: "500",
    fontSize: "14px",
    boxShadow: "0 4px 12px rgba(47, 65, 86, 0.4)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    letterSpacing: "0.4px",
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = "scale(1.05)";
    e.target.style.boxShadow = "0 6px 14px rgba(0, 114, 255, 0.6)";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0 4px 10px rgba(0, 114, 255, 0.4)";
  }}
>
  <i
    className="fas fa-file-pdf"
    style={{ fontSize: "18px", color: "red", fontVariant: "outlined" }}
  ></i>
  View Report
</button>
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

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

gsap.registerPlugin(ScrollTrigger);

export default function Sulphur() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const contentRef = useRef(null);

  // useEffect(() => {
  //   const elements = contentRef.current.querySelectorAll(".fade-in-on-scroll");

  //   elements.forEach((el) => {
  //     gsap.fromTo(
  //       el,
  //       { autoAlpha: 0, y: 15 },
  //       {
  //         duration: 0.5,
  //         autoAlpha: 1,
  //         y: 0,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: el,
  //           start: "top 90%",
  //           toggleActions: "play none none reverse",
  //         },
  //       }
  //     );
  //   });
  // }, []);

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="blog-details-area fit-content-height"
        ref={contentRef}
      >
        {/* Full-width image */}
        <div style={{ width: "100%", background: "#f5f5f5", margin: "0px 0" }} className="fade-in-on-scroll">
          <img
            src={`${basePath}/assets/minerals_images/min.jpg`}
            alt="Sulphur"
            style={{
              width: "100%",
            height : "400px",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Main content */}
        <div className="container fade-in-on-scroll">
          <div className="row justify-content-center fade-in-on-scroll">
            <div className="col-xl-12 col-lg-10 fade-in-on-scroll">
              <div className="blog-post-wrapper fade-in-on-scroll">
                <div className="latest__post-item fade-in-on-scroll">
                  <div className="latest__post-content fade-in-on-scroll">
                    <div style={{ marginTop: "30px" }}>
                      <div
                        className="p-4 fade-in-on-scroll"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#fff",
                        }}
                      >
                        <h3 className="fade-in-on-scroll my-4"><strong>Sulphur: Strategic Alternatives</strong></h3>

                        <h4 className="fade-in-on-scroll my-4 text-blue"><strong>Alternate Chemistries</strong></h4>

                        <p className="fade-in-on-scroll my-4 ">
                          Despite its critical role in plant metabolism, elemental sulphur remains underutilized in Indian agriculture due to its low bioavailability. An innovative solution lies in leveraging Sulphur-Oxidizing Bacteria (SOB), such as <em>Thiobacillus thiooxidans</em>, which convert elemental sulphur into plant-available sulphate. Studies by ICAR-CRIDA (2023) have shown that SOB inoculation can improve sulphur uptake by 20–30%, especially in alkaline and sulphur-deficient soils found in central and western India.
                        </p>

                        <h4 className="fade-in-on-scroll my-4 text-blue"><strong>Technological Alternatives</strong></h4>

                        <p className="fade-in-on-scroll my-4">
                          India's sulphur consumption is tightly linked to its petroleum refining and fertilizer sectors. Advancing Sulphur Recovery Units (SRUs) at domestic refineries is imperative. Technologies such as double absorption systems and catalytic reduction, employed successfully at Petronas' RAPID refinery in Malaysia, offer efficiency improvements of over 95% in sulphur recovery rates.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          In parallel, Sulphur-Enriched Compost (SEC)—produced by integrating elemental sulphur with municipal solid waste compost—presents a dual benefit: sustainable nutrient delivery and waste valorization. Urban centers like Pune and Indore, with operational composting plants, can be targeted for SEC pilots.
                        </p>

                        <h4 className="fade-in-on-scroll text-blue my-4"><strong>Strengthening Supply Chains</strong></h4>

                        <p className="fade-in-on-scroll my-4">
                          Sulphur procurement is currently fragmented and exposed to price volatility. To stabilize access, sulphur offtake must be institutionalized through long-term public-sector agreements with Saudi Arabia, Qatar, and the UAE. Entities such as the IOCL–RIL–ONGC consortium should be mandated to jointly pursue strategic procurement under the Ministry of Petroleum and Natural Gas. Simultaneously, these companies should upgrade SRU infrastructure across Indian refineries to meet high recovery benchmarks (≥98%), aligning with both fertilizer security and emissions control mandates.
                        </p>

                        <p className="fade-in-on-scroll my-4"><em>Disclaimer: Data updated as of June 2025, next update on September 2025</em></p>

                        <h5 className="fade-in-on-scroll my-4 text-blue">References</h5>

                        <p className="fade-in-on-scroll my-4 fw-normal" style={{ fontSize: "1.08rem" }}>
                          ICAR-CRIDA. (2023). <em>Sulphur Use Efficiency Enhancement via SOB Inoculants in Indian Soils</em>. Hyderabad.<br /><br />
                          Petronas RAPID Refinery Report. (2022). <em>Advanced Sulphur Recovery Systems and Emission Control Benchmarks</em>. Malaysia.<br /><br />
                          USGS. (2024). <em>Mineral Commodity Summaries — Sulphur</em>, p. 161.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}
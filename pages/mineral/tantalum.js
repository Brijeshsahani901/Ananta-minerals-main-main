import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
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
            alt="About"
            style={{
              width: "100%",
              height: "70vh",
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
                        <h3 className="fade-in-on-scroll my-4"><strong>Tantalum: Building Supply Security</strong></h3>

                        <h4 className="fade-in-on-scroll my-4 text-blue"><strong>Alternate Chemistries</strong></h4>

                        <p className="fade-in-on-scroll my-4">
                          Tantalum's unique properties—high melting point, corrosion resistance, and dielectric strength—make it hard to replace. However, niche substitution is possible in some applications. Research at the Indian Institute of Science (IISc) and Armament Research & Development Establishment (ARDE) has demonstrated early-stage viability of replacing tantalum capacitors with niobium oxide capacitors in aerospace-grade electronic systems. While niobium capacitors operate at lower voltages, they can meet specifications for unmanned aerial vehicles (UAVs), radar units, and artillery fire control systems, especially when paired with circuit redesigns for lower power thresholds (IEEE Journal of Advanced Materials, 2023). These alternatives, though not universal, could help reduce demand pressure in specific military-grade electronics.
                        </p>

                        <h4 className="fade-in-on-scroll my-4 text-blue"><strong>Alternate Technologies</strong></h4>

                        <p className="fade-in-on-scroll my-4">
                          Tantalum's high melting point and corrosion resistance make its recovery complex, but not infeasible. Plasma arc melting technologies—adopted in Japan and Finland—offer a path forward for India to recycle tantalum from capacitor-grade e-waste. State-owned enterprises such as Bharat Heavy Electricals Limited (BHEL) and Bharat Electronics Limited (BEL) could partner with Finland's Critical Materials Recycling Platform to trial low-temperature plasma disassociation for metal recovery. Japan's Hitachi, for instance, demonstrated 85% recovery efficiency of tantalum from multilayer ceramic capacitors in 2022 (Hitachi Materials Innovation Report, 2023). Investment in such technologies aligns with India's evolving e-waste policy and Make in India objectives.
                        </p>

                        <h4 className="fade-in-on-scroll my-4 text-blue"><strong>Snapshot of Tantalum</strong></h4>

                        {/* Table */}
                        <div className="table-responsive fade-in-on-scroll my-4">
                          <table className="table table-bordered fade-in-on-scroll">
                            <thead style={{ backgroundColor: "#f0f0f0" }} className="fade-in-on-scroll">
                              <tr className="text-blue">
                                <th><strong>Aspect</strong></th>
                                <th><strong>Detail</strong></th>
                              </tr>
                            </thead>
                            <tbody className="fade-in-on-scroll">
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Primary Use</strong></td>
                                <td>Capacitors in electronics, aerospace components, medical implants</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Global Reserves</strong></td>
                                <td>~390,000 tonnes (USGS, 2023)</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Top Producers</strong></td>
                                <td>DRC, Rwanda, Brazil, Australia</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>India's Status</strong></td>
                                <td>No primary production; 100% import dependent</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Criticality for India</strong></td>
                                <td>High (used in defense electronics, nuclear energy, telecom)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <h4 className="fade-in-on-scroll  my-4 text-blue"><strong>Strengthening Supply Chains</strong></h4>

                        <p className="fade-in-on-scroll my-4">
                          Tantalum's global supply is heavily concentrated in the Democratic Republic of Congo (DRC) and Rwanda, regions with ongoing concerns around illegal mining and conflict financing. To reduce geopolitical risk, India should prioritize sourcing from certified producers. Long-term contracts should be pursued with AMG Brasil (Brazil) and Global Advanced Metals (Australia), both of which are ISO-certified and comply with OECD Due Diligence Guidance on conflict-free mineral sourcing.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          India should also establish a strategic reserve of 100 tonnes of tantalum oxide, approximately equivalent to its estimated 10-year defense requirement, to safeguard against future supply shocks (CEEW Mineral Security Analysis, 2023). Bilateral engagement with Australia and Brazil could also explore <strong>joint beneficiation or recycling projects</strong>, modeled on the India-Australia Critical Minerals Investment Partnership.
                        </p>

                        <p className="fade-in-on-scroll my-4"><em>Disclaimer: Data updated as of June 2025, next update on September 2025</em></p>

                        <h4 className="fade-in-on-scroll my-4 text-blue">References</h4>
                        <p className="fade-in-on-scroll my-2">
                          CEEW. (2023). <em>Mineral Security Analysis: Strategic Minerals for India's Future</em>.
                        </p>
                        <p className="fade-in-on-scroll my-2">
                          Hitachi. (2023). <em>Materials Innovation Report: Recovering Strategic Metals from Electronics</em>.
                        </p>
                        <p className="fade-in-on-scroll my-2">
                          IEEE Journal of Advanced Materials. (2023). <em>Substituting Tantalum Capacitors in Military Electronics</em>.
                        </p>
                        <p className="fade-in-on-scroll my-2">
                          US Geological Survey. (2023). <em>Mineral Commodity Summaries: Tantalum</em>.
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
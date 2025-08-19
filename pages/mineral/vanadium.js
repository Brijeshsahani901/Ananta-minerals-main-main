import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

gsap.registerPlugin(ScrollTrigger);

export default function Vanadium() {
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
            alt="Vanadium"
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
                        <h4 className="fade-in-on-scroll"><strong>Vanadium: Strategic Alternatives</strong></h4>

                        <h4 className="fade-in-on-scroll my-4 text-blue"><strong>Alternate Chemistries</strong></h4>

                        <p className="fade-in-on-scroll my-4">
                          In certain aerospace alloys, niobium and chromium have demonstrated partial substitutability for vanadium. For instance, the Ti-6Al-4V alloy, widely used in aircraft structures, can be reformulated with niobium for non-critical applications subject to lower mechanical stress (DoD Strategic Materials Report, 2023).
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          <a href="https://www.safran-group.com/pressroom/safran-inaugurates-ceramic-matrix-composites-research-center-2018-11-06-0?utm_source=chatgpt.com" className="text-decoration-underline">Safran Ceramics</a>, through its Bordeaux Aeroparc research center, has pioneered the development of ceramic-matrix composites (CMCs) reinforced with silicon carbide (SiC). These composites exhibit superior weight-to-strength ratios and high thermal resilience, making them potential substitutes for vanadium-titanium alloys in turbine hot-section components. <a href="https://www.geaerospace.com/news/press-releases/joint-ventures/nippon-carbon-company-ge-and-safran-establish-silicon-carbide?utm_source=chatgpt.com" className="text-decoration-underline">GE Aerospace</a>, in collaboration with Nippon Carbon, has also established the NGS Advanced Fibers joint venture to scale up SiC continuous-fiber production for next-generation turbine blades—displacing vanadium-containing superalloys in several aerospace platforms.
                        </p>

                        <h4 className="fade-in-on-scroll text-blue my-4"><strong>Alternate Technologies</strong></h4>

                        <p className="fade-in-on-scroll my-4">
                          Innovations in extractive metallurgy, such as redox flow leaching and ion-exchange extraction, are being piloted in Kazakhstan and Canada to recover vanadium from secondary sources like oil fly ash and bauxite residue (IEA, 2024, p. 223). India's petroleum sector—particularly BPCL and IOCL—could establish pilot-scale recovery facilities to extract vanadium from desulfurisation by-products.
                        </p>

                        <div className="fade-in-on-scroll my-4">
                          <h4 className="my-4 "><strong>Secondary Vanadium Recovery Technologies</strong></h4>
                          <div className="table-responsive my-4">
                            <table className="table table-bordered">
                              <thead style={{ backgroundColor: "#f0f0f0" }}>
                                <tr className="text-blue">
                                  <th><strong>Technology</strong></th>
                                  <th><strong>Source Material</strong></th>
                                  <th><strong>Pilot Countries</strong></th>
                                  <th><strong>Relevance to India</strong></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="text-light-blue">Redox Flow Leaching</td>
                                  <td>Oil Fly Ash</td>
                                  <td>Kazakhstan, Canada</td>
                                  <td>High — Used in BPCL/IOCL units</td>
                                </tr>
                                <tr>
                                  <td className="text-light-blue">Ion-Exchange Extraction</td>
                                  <td>Bauxite Residue (Red Mud)</td>
                                  <td>China, Australia</td>
                                  <td>Moderate — Aluminum sector</td>
                                </tr>
                                <tr>
                                  <td className="text-light-blue">Selective Precipitation</td>
                                  <td>Refinery Wastes</td>
                                  <td>USA</td>
                                  <td>High — NML-DRDO pilot program</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <h4 className="fade-in-on-scroll text-blue my-4"><strong>Strategic MoUs and Trade Frameworks for India</strong></h4>

                        <i className="fade-in-on-scroll  fw-normal my-4">Safran CMC Technology Transfer MoU</i>
                        <ul className="fade-in-on-scroll my-4">
                          <li className="my-3 fw-normal">Partners: Ministry of Defence, DRDO, Safran Ceramics</li>
                          <li className="my-3 fw-normal">Scope: ₹400 crore co-funded pilot line at MIDHANI to license Safran's SiC–CMC fabrication protocols for turbine engine components.</li>
                        </ul>

                        <i className="fade-in-on-scroll  fw-normal my-4">NGS Advanced Fibers Joint Venture</i>
                        <ul className="fade-in-on-scroll">
                          <li className="my-3 fw-normal">Partners: Dept. of Heavy Industries, GE Aerospace, Nippon Carbon, ATDC</li>
                          <li className="my-3 fw-normal">Scope: Establish an Indian facility under the NGS JV to localize SiC fiber and precursor production (₹300 crore grant).</li>
                        </ul>

                        <i className="fade-in-on-scroll  fw-normal my-4">USGS–India Vanadium Recovery Consortium</i>
                        <ul className="fade-in-on-scroll my-4">
                          <li className="my-3 fw-normal">Partners: National Minerals Information Center (USGS), Indian Bureau of Mines, NML</li>
                          <li className="my-3 fw-normal">Scope: ₹150 crore co-financed facility at NML to adapt USGS-tested selective-precipitation protocols for refinery and power-plant wastes.</li>
                        </ul>

                        <p className="fade-in-on-scroll my-4">
                          India currently relies heavily on imports of aerospace-grade vanadium pentoxide, primarily sourced from South Africa (13%) and Brazil (8%), where producers like Largo Inc. are expanding capacity. Strategic partnerships with these countries could be developed under the Minerals Security Partnership (MSP) or bilateral Government-to-Government (G2G) mechanisms to ensure secure supply of vanadium for aerospace and defence-grade alloys.
                        </p>

                        <h5 className="fade-in-on-scroll my-4">References</h5>
                        <p className="fade-in-on-scroll my-4" style={{ fontSize: "1.08rem" }}>
                          DoD Strategic Materials Report. (2023). <em>United States Department of Defense Annual Review on Strategic and Critical Materials</em>.<br /><br />
                          GE Aerospace. (2024). <em>NGS Advanced Fibers Partnership Briefing</em>.<br /><br />
                          IEA. (2024). <em>The Role of Critical Minerals in Clean Energy Transitions</em>, International Energy Agency.<br /><br />
                          Safran Group. (2024). <em>Safran Ceramics — Research & Technology Overview</em>.<br /><br />
                          USGS. (2025). <em>Mineral Commodity Summaries: Vanadium</em>. U.S. Geological Survey.
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
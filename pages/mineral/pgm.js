import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

gsap.registerPlugin(ScrollTrigger);

export default function PlatinumGroupMetals() {
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
            alt="Platinum Group Metals"
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
                        <h3 className="fade-in-on-scroll my-4"><strong>Platinum Group Metals (PGMs): Substitution, Supply Resilience, and Strategic Innovation</strong></h3>

                        <h4 className="fade-in-on-scroll text-blue my-4"><strong>Alternate Chemistries</strong></h4>

                        <p className="fade-in-on-scroll my-4">
                          A global push to reduce dependence on platinum group metals (PGMs) has gained momentum, particularly in fuel cells, industrial catalysts, and high-performance electronics. Companies like Toyota and Hyundai have pioneered the use of nickel-molybdenum catalysts in fuel cell vehicles, reducing platinum loadings by up to 20% (<em>IBM Yearbook, 2024, Chapter 13, p. 4</em>). Similarly, ruthenium-based resistors have replaced palladium-silver alloys in high-voltage defence applications, demonstrating that substitution is possible when performance thresholds are maintained.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          India should replicate the U.S. Department of Energy's "<em>H2@Scale</em>" initiative by launching a National PGM Substitution Fund, specifically supporting rhenium- and molybdenum-based catalytic innovations. This would not only reduce India's dependency on imported PGMs but also catalyse domestic R&D across strategic sectors.
                        </p>

                        <div className="fade-in-on-scroll my-4">
                          <h5 className="my-4"><strong>Table 1: Global Leaders in PGM‑Free Catalyst and Electrode Technologies</strong></h5>
                          <div className="table-responsive my-4">
                            <table className="table table-bordered">
                              <thead style={{ backgroundColor: "#f0f0f0" }}>
                                <tr className="text-blue">
                                  <th><strong>Technology</strong></th>
                                  <th><strong>Developer</strong></th>
                                  <th><strong>Description</strong></th>
                                  <th><strong>Timeline</strong></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td><strong>Nickel‑based alkaline electrodes</strong></td>
                                  <td><a href="https://www.toyota-industries.com/news/2024/05/30/008672/index.html?utm_source=chatgpt.com" className="text-decoration-underline">Toyota Industries Corporation</a></td>
                                  <td>Precious‑metal--free bipolar electrodes matching Pt-based hydrogen production efficiency and durability.</td>
                                  <td>Prototyping by 2028</td>
                                </tr>
                                <tr>
                                  <td><strong>Co‑N‑C cathode for PEMFC</strong></td>
                                  <td><a href="https://www.pnnl.gov/news-media/stronger-cobalt-fuel-cells?utm_source=chatgpt.com" className="text-decoration-underline">Pacific Northwest National Lab</a></td>
                                  <td>Delivers ORR activity comparable to Pt/C, with 4x higher durability under acidic conditions.</td>
                                  <td>Lab-validated</td>
                                </tr>
                                <tr>
                                  <td className="text-light-blue"><strong>Pt‑free ORR electrocatalysts</strong></td>
                                  <td><a href="https://www.anl.gov/article/platinumfree-catalysts-could-make-cheaper-hydrogen-fuel-cells?utm_source=chatgpt.com" className="text-decoration-underline">Argonne National Laboratory</a></td>
                                  <td>High‑performance ORR catalysts with atomic‑scale optimization for automotive and stationary cells.</td>
                                  <td>Pre-commercial</td>
                                </tr>
                                <tr>
                                  <td className="text-light-blue"><strong>PGM‑free cathodic materials</strong></td>
                                  <td><a href="https://pajaritopowder.com/pajarito-powder-selected-for-u-s-department-of-energy-hydrogen-fuel-cell-project/?utm_source=chatgpt.com" className="text-decoration-underline">Pajarito Powder</a></td>
                                  <td>Selected by US DOE for $1M project; early‑stage materials entering commercial demonstration phase.</td>
                                  <td>Pilot-ready</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <h3 className="fade-in-on-scroll my-4 text-blue"><strong>Alternate Technologies</strong></h3>

                        <p className="fade-in-on-scroll my-4">
                          In the near term, <strong>recycling</strong> offers the most viable route to secure PGM supplies. Urban mining initiatives in Japan and the EU report recovery rates of over 90% for PGMs from auto-catalysts and aerospace scrap (<em>OECD Urban Mining Report, 2023</em>). India should mandate reverse logistics standards in automotive and aerospace sectors to enable collection and processing of end-of-life PGM-bearing components.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          Technologies such as hydrometallurgy and bioleaching, already under investigation by CSIR-NML and IIT-Bombay, must be adapted for scalable domestic recycling systems. Partnerships with global leaders like Johnson Matthey and Umicore could catalyse deployment.
                        </p>

                        <div className="fade-in-on-scroll my-4">
                          <h5 my-4><strong>Table 2: Strategic MoUs and R&D Partnerships for India</strong></h5>
                          <div className="table-responsive my-4">
                            <table className="table table-bordered">
                              <thead style={{ backgroundColor: "#f0f0f0" }}>
                                <tr className="text-blue">
                                  <th><strong>Initiative</strong></th>
                                  <th><strong>Partners</strong></th>
                                  <th><strong>Scope</strong></th>
                                  <th><strong>Budget</strong></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="text-light-blue"><strong>Toyota Electrode Licensing MoU</strong></td>
                                  <td>MNRE, Toyota Industries Corporation</td>
                                  <td>License nickel‑based electrodes for alkaline electrolysis; ₹300 crore pilot line at CSIR-NCL with joint prototyping.</td>
                                  <td>₹300 crore</td>
                                </tr>
                                <tr>
                                  <td className="text-light-blue"><strong>PNNL Co‑Catalyst JDA</strong></td>
                                  <td>DST, Pacific Northwest National Laboratory</td>
                                  <td>Co-develop Co‑N‑C cathodes for Indian MEAs; ₹200 crore allocated via Indo‑US S&T Forum.</td>
                                  <td>₹200 crore</td>
                                </tr>
                                <tr>
                                  <td className="text-light-blue"><strong>Argonne ORR Insights Collaboration</strong></td>
                                  <td>DST, Argonne NL, IISc Bangalore</td>
                                  <td>₹150 crore test-bed at IISc to validate Argonne's Pt‑free ORR catalysts under automotive duty cycles.</td>
                                  <td>₹150 crore</td>
                                </tr>
                                <tr>
                                  <td className="text-light-blue"><strong>Pajarito Tech‑Transfer Pact</strong></td>
                                  <td>DHI, Pajarito Powder, Tata Motors</td>
                                  <td>Scale up PGM‑free PEMFC packs in India with 100 kW demo; offtake commitments from Tata Motors.</td>
                                  <td>₹100 crore</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <h5 className="fade-in-on-scroll text-blue my-4">Additional Policy Recommendations</h5>

                        <h5 className="fade-in-on-scroll fw-normal my-4"><em>Strengthening Supply Chains</em></h5>

                        <p className="fade-in-on-scroll my-4">
                          India's over 95% import dependency on PGMs leaves it vulnerable to geopolitical shocks. In 2023 alone, India imported 11,953 rhodium and 525 iridium shipments, primarily from South Africa and Russia—both of which face chronic production instability (<em>Volza, 2024a; IEA, 2024, p. 201</em>).
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          A dual-track strategy is essential:
                        </p>

                        <ul className="fade-in-on-scroll my-4 fw-normal">
                          <li className="my-3">Strategic stockpiling of PGMs, especially rhodium, iridium, and palladium, under a sovereign inventory model.</li>
                          <li className="my-3">Joint exploration ventures with politically stable countries such as Canada and Finland, leveraging emerging projects like the Marathon (Canada) and Sakatti (Finland) deposits.</li>
                        </ul>

                        <div className="fade-in-on-scroll my-4">
                          <h5 className="my-4"><strong>Table 3: Substitution Possibilities and Emerging Alternatives</strong></h5>
                          <div className="table-responsive my-4">
                            <table className="table table-bordered">
                              <thead style={{ backgroundColor: "#f0f0f0" }}>
                                <tr className="text-blue">
                                  <th><strong>PGM</strong></th>
                                  <th><strong>Current Use</strong></th>
                                  <th><strong>Substitute</strong></th>
                                  <th><strong>Application Area</strong></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="text-light-blue">Platinum</td>
                                  <td>Catalytic converters, fuel cells</td>
                                  <td>Palladium (up to 25% substitution)</td>
                                  <td>Automotive diesel converters</td>
                                </tr>
                                <tr>
                                  <td className="text-light-blue">Palladium</td>
                                  <td>Electrical components, catalysts</td>
                                  <td>Ruthenium, Nickel, Silver</td>
                                  <td>Resistors, petroleum refining</td>
                                </tr>
                                <tr>
                                  <td className="text-light-blue">Rhodium</td>
                                  <td>NOx control in emission systems</td>
                                  <td>Rhenium, Cerium-based coatings</td>
                                  <td>Automotive and industrial catalysts</td>
                                </tr>
                                <tr>
                                  <td className="text-light-blue">All PGMs</td>
                                  <td>Fuel cells, chemical catalysis</td>
                                  <td>Co‑N‑C, Ni-Mo, Pt‑free ORR catalysts</td>
                                  <td>PEMFCs, electrolysers, industrial reactors</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <p className="fade-in-on-scroll my-4">
                          India must not only secure short-term access but also invest in long-term diversification of PGM sources. Exploration partnerships with Australia, Finland, and Canada—members of the Minerals Security Partnership (MSP)—should be prioritised.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          Indian mining firms and automotive manufacturers could co-invest in PGM mining JVs, mimicking the global trend where automakers form backward linkages to lock in strategic minerals. Domestically, deeper exploration in the Singhbhum Craton and northeastern belts may uncover smaller but commercially relevant PGM deposits.
                        </p>

                        <p className="fade-in-on-scroll my-4"><em>Disclaimer: Data updated as of June 2025, next update on September 2025</em></p>

                        <h4 className="fade-in-on-scroll my-4">References</h4>
                        <p className="fade-in-on-scroll my-4" style={{ fontSize: "0.9rem" }}>
                          Argonne National Laboratory. (2023). <em>High-Performance ORR Catalysts: Atomic-Level Insights for PGM Substitution</em>.<br /><br />
                          IBM Yearbook. (2024). <em>Chapter 13: Strategic Materials — Platinum Group Metals</em>. Indian Bureau of Mines, Ministry of Mines.<br /><br />
                          IEA. (2024). <em>Global Critical Minerals Outlook 2024</em>, International Energy Agency.<br /><br />
                          OECD. (2023). <em>Urban Mining: Recovering Strategic Metals from Electronic and Automotive Waste</em>. OECD Urban Circular Economy Series.<br /><br />
                          Pacific Northwest National Laboratory (PNNL). (2023). <em>Cobalt-Nitrogen-Carbon Catalysts for PEMFCs</em>.<br /><br />
                          Toyota Industries. (2023). <em>Nickel-Based Electrode Technologies for Hydrogen Production</em>.<br /><br />
                          U.S. DOE. (2023). <em>Fuel Cell Technologies Office Project Selections</em>. U.S. Department of Energy.<br /><br />
                          Volza. (2024a). <em>India PGM Imports Data: Rhodium and Iridium Shipment Analysis</em>.
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
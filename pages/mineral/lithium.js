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
                        <h4 className="fade-in-on-scroll my-4"><strong>Lithium and the Future of Battery Chemistries</strong></h4>

                        <p className="fade-in-on-scroll">
                          The global energy transition is driving an urgent search for alternatives to conventional lithium-ion batteries, particularly those dependent on geopolitically sensitive minerals such as cobalt and nickel. Sodium-ion batteries, now in commercial production by China's CATL, present a <a href="https://www.reuters.com/technology/chinese-battery-maker-catl-launches-second-generation-fast-charging-battery-2025-04-21/#:~:text=CATL%20became%20the%20first%20major,in%20EVs%2C%20experts%20have%20said." className="text-decoration-underline">promising substitute</a> owing to sodium's abundance and low cost. Norway's <a href="https://www.morrowbatteries.com/about-us" className="text-decoration-underline">Morrow Batteries</a> and India-UK ventures like LiNa Energy's pilot with Tata Power further highlight growing global interest in this chemistry.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          Beyond sodium, global R&D efforts are advancing a suite of next-generation battery chemistries:
                        </p>

                        <ul className="fade-in-on-scroll my-4 fw-normal">
                          <li className="my-3">Solid-state batteries, being pursued by the <a href="https://www.faraday.ac.uk/" className="text-decoration-underline">UK's Faraday Institution</a>, US firms Solid Power and QuantumScape (in partnership with BMW and Volkswagen), and Japan's Toyota, offer improved safety and energy density while eliminating the need for liquid electrolytes.</li>
                          <li className="my-3">Australia's CSIRO is developing <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2111234#:~:text=Titanium%20is%20widely%20used%20in%20metal%20alloys%2C,flow%20batteries%2C%20which%20are%20rechargeable%20and%20well%2Dsuited" className="text-decoration-underline">lithium-titanate and vanadium redox flow batteries</a> for grid-scale storage.</li>
                          <li className="my-3">Magnesium-ion systems, under development at the University of Maryland and other institutions, leverage divalent charge carriers for higher volumetric capacity.</li>
                          <li className="my-3"><a href="https://www.electrive.com/2015/10/08/lithium-air-storm-potassium-ion-battery-argonne-national-laboratory/#:~:text=High%20stability:%20The%20EU%2Dfunded%20STABLE%20project%20successfully,a%20far%20cry%20from%20those%20of%20Li%2Dion" className="text-decoration-underline">Potassium-ion batteries</a>, with research led by Argonne National Laboratory, show potential due to fast diffusion kinetics and the ability to operate in aqueous electrolytes.</li>
                          <li className="my-3"><a href="https://cris.uni-muenster.de/portal/en/project/73726943" className="text-decoration-underline">Organic radical batteries</a>, pioneered at Germany's University of Münster, offer ultra-fast charging through polymer-based cathodes.</li>
                          <li className="my-3">Dual-ion batteries, developed by Samsung SDI, utilize fluorinated electrolytes and graphite anodes for enhanced energy density.</li>
                          <li className="my-3">Metal-air <a href="https://www.researchgate.net/publication/313593127_Lithium_Sulfur_and_Lithium_Oxygen_batteries_New_Frontiers_of_Sustainable_Energy_Storage#:~:text=Abstract,environmentally%20compatible%20energy%20storage%20systems." className="text-decoration-underline">batteries</a> such as lithium-sulfur and lithium-oxygen, researched at MIT and Oxford, promise theoretical energy densities far surpassing those of today's Li-ion systems.</li>
                        </ul>

                        <p className="fade-in-on-scroll my-4">
                          These innovations form a diverse portfolio of alternatives that reduce or eliminate cobalt and nickel dependence, offering pathways to secure, high-performance, and lower-cost energy storage.
                        </p>

                        {/* Table */}
                        <div className="table-responsive fade-in-on-scroll my-4">
                          <table className="table table-bordered fade-in-on-scroll">
                            <thead style={{ backgroundColor: "#f0f0f0" }} className="fade-in-on-scroll">
                              <tr className="text-light-blue">
                                <th><strong>Innovation / Chemistry</strong></th>
                                <th><strong>Minerals Substituted or De-Risked</strong></th>
                                <th><strong>Strategic Benefit for India</strong></th>
                              </tr>
                            </thead>
                            <tbody className="fade-in-on-scroll">
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue">Sodium-ion batteries</td>
                                <td>Lithium, Cobalt, Nickel</td>
                                <td>Reduces dependency on hard-to-secure lithium and cobalt</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue">Lithium-sulfur and Lithium-air</td>
                                <td>Cobalt, Nickel</td>
                                <td>Enables high energy density with fewer strategic inputs</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue">Magnesium-ion batteries</td>
                                <td>Cobalt, Nickel</td>
                                <td>Divalent ions allow for higher capacity with abundant metal</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue">Potassium-ion batteries</td>
                                <td>Lithium</td>
                                <td>Uses earth-abundant potassium; safer aqueous electrolytes</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue">Organic radical batteries</td>
                                <td>Cobalt, Nickel</td>
                                <td>Fast charging; potential for polymer-based domestic R&D</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue">Vanadium redox flow</td>
                                <td>Lithium, Cobalt</td>
                                <td>Long-duration storage; integrates with India's RE expansion</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue">Dual-ion systems</td>
                                <td>Cobalt</td>
                                <td>Higher energy density; emerging industrial-scale potential</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <h4 className="fade-in-on-scroll text-blue my-4"><strong>Strategic International Collaborations for India</strong></h4>

                        <p className="fade-in-on-scroll">
                          To future-proof its battery ecosystem and reduce mineral dependence, India should forge deeper partnerships with global innovation leaders. The following strategic frameworks are recommended:
                        </p>

                        <h5 className="fade-in-on-scroll my-4"><em>UK-India Sodium-BESS Scale-Up MoU</em></h5>

                        <p className="fade-in-on-scroll">
                          Building on the existing Tata Power-LiNa Energy pilot, India and the UK could sign a formal MoU to co-fund a megawatt-scale sodium battery plant hosted by BHEL or the National Battery Testing Centre, with support from the UK's Department for Business and Trade under the 2024 energy cooperation framework.
                        </p>

                        <h5 className="fade-in-on-scroll my-4"><em>India-Australia Solid-State Battery Consortium</em></h5>

                        <p className="fade-in-on-scroll">
                          Under the India-Australia Critical Minerals Research Partnership, India could co-create a Solid-State Innovation Cell at CSIR and IIT Madras, jointly funded with CSIRO, to pilot lithium-sulfur and lithium-air batteries by 2027 using CSIRO's RAFT SPE (solid polymer electrolyte) technology.
                        </p>

                        <h5 className="fade-in-on-scroll my-4"><em>US-India Solid-State MoU</em></h5>

                        <p className="fade-in-on-scroll">
                          Leveraging India's membership in the Minerals Security Partnership (MSP), a Technology Collaboration Agreement could be negotiated with Solid Power or QuantumScape, establishing a joint pilot facility in an Indian SEZ. This initiative could be supported by a ₹600 crore Production Linked Incentive (PLI) scheme focused on next-generation battery materials.
                        </p>

                        <h5 className="fade-in-on-scroll my-4"><em>Domestic Lithium-Ion Indigenization</em></h5>

                        <p className="fade-in-on-scroll">
                          India should scale the PureEV-CSIR-CECRI model by facilitating a tri-party MoU between DST, NITI Aayog, and leading OEMs (e.g., Tata Motors) to develop 100 MW of cell and pack capacity, integrating cathode active material production and unified testing infrastructure.
                        </p>

                        <h4 className="fade-in-on-scroll text-blue my-4"><strong>Policy Recommendations</strong></h4>

                        <h5 className="fade-in-on-scroll my-4"><em>Diversifying Strategic Partnerships</em></h5>

                        <p className="fade-in-on-scroll">
                          India must deepen its relationships with lithium-rich nations such as Australia, Argentina, and Bolivia. Existing MoUs—such as those with Argentina and Chile—should evolve into binding supply contracts involving Indian capital investment or technical cooperation in mining and processing. India should also utilize forums such as the Quad and BRICS to enhance its negotiation capacity and access to upstream lithium resources.
                        </p>

                        <h5 className="fade-in-on-scroll my-4"><em>Scaling Battery Recycling</em></h5>

                        <p className="fade-in-on-scroll">
                          With global attention on battery circularity, India must expedite lithium recycling infrastructure development. This includes:
                        </p>

                        <ul className="fade-in-on-scroll fw-normal my-4">
                          <li className="my-2">Incentivizing private sector participation through tax breaks and capital subsidies.</li>
                          <li className="my-2">Establishing dedicated recycling zones and mandating Extended Producer Responsibility (EPR) norms.</li>
                          <li className="my-2">Supporting R&D in advanced recovery technologies.</li>
                        </ul>

                        <p className="fade-in-on-scroll">
                          In 2023, over 90 companies in North America and Europe were actively recycling or planning to recycle lithium batteries—often through partnerships between automakers and recyclers to ensure a steady supply of battery-grade materials (S&P Global, 2023, p. 36). India must build a comparable ecosystem.
                        </p>

                        <h5 className="fade-in-on-scroll my-4"><em>Battery Tech and Patent Collaboration with Japan</em></h5>

                        <p className="fade-in-on-scroll">
                          Japan accounted for 41% of global lithium-ion battery patents between 2014-2018 (Guvvadi, 2024), despite limited domestic EV uptake. This gap offers a strategic opening for India to collaborate with Japan to:
                        </p>

                        <ul className="fade-in-on-scroll fw-normal my-4">
                          <li className="my-2">Establish joint R&D and manufacturing ventures in battery production.</li>
                          <li className="my-2">File co-owned patents that leverage Japanese technological leadership and India's emerging EV market.</li>
                          <li className="my-2">Facilitate knowledge transfer and IP development to strengthen India's domestic innovation base.</li>
                        </ul>

                        <p className="fade-in-on-scroll">
                          India's battery strategy must balance short-term supply security with long-term technological self-reliance. Deepening global partnerships, scaling innovation in alternative chemistries, and developing a robust domestic ecosystem—from manufacturing to recycling—are essential to building a resilient battery value chain and reducing strategic vulnerabilities.
                        </p>

                        <p className="fade-in-on-scroll"><em>Disclaimer: Data updated as of June 2025, next update on September 2025</em></p>

                        <h5 className="fade-in-on-scroll text-blue my-4">References</h5>

                        <p className="fade-in-on-scroll" >
                          Argonne National Laboratory. (2023). <em>Potassium-Ion Research Update.</em><br /><br />
                          CATL. (2023). <em>Sodium-ion Battery Product Launch.</em><br /><br />
                          CSIRO. (2023). <em>Next-Gen Battery Innovation Portfolio.</em><br /><br />
                          Faraday Institution. (2024). <em>Solid-State Battery Research.</em><br /><br />
                          Guvvadi, R. (2024). <em>Innovation in Batteries: A Global Patent Review.</em> IEA.<br /><br />
                          IEA. (2023). <em>Battery Innovation and IP Trends Report.</em><br /><br />
                          MIT & Oxford. (2024). <em>Metal-Air Battery Performance Study.</em><br /><br />
                          Morrow Batteries. (2024). <em>Technology Overview.</em><br /><br />
                          Samsung SDI. (2023). <em>Dual-Ion Battery Advances.</em><br /><br />
                          S&P Global. (2023). <em>Battery Recycling Landscape.</em> p. 36.<br /><br />
                          Solid Power, QuantumScape. (2024). <em>Technology Partnership Briefings.</em><br /><br />
                          University of Münster. (2023). <em>Organic Radical Battery Research.</em><br />
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
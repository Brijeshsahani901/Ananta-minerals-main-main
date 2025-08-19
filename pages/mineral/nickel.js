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
                        <h3 className="fade-in-on-scroll my-4"><strong>Nickel: Strategic Alternatives</strong></h3>

                        <h5 className="fade-in-on-scroll my-4 fw-normal"><strong>Alternate Chemistries: Reducing Nickel Dependency</strong></h5>

                        <p className="fade-in-on-scroll my-4">
                          With the global energy transition driving demand for electric vehicles (EVs) and stationary storage, the reliance on nickel-rich cathode chemistries—particularly nickel-manganese-cobalt (NMC) and nickel-cobalt-aluminium (NCA)—has raised concerns over long-term supply, cost volatility, and geopolitical risk. India can mitigate these vulnerabilities by accelerating the shift to nickel-free or low-nickel battery chemistries, while diversifying applications of nickel in other industrial sectors.
                        </p>

                        <h5 className="fade-in-on-scroll my-4  fw-normal"><em>Rise of LFP and Manganese-Based Batteries</em></h5>

                        <p className="fade-in-on-scroll my-4">
                          China has led the global transition toward lithium iron phosphate (LFP) batteries, which offer lower cost, improved thermal stability, and no reliance on nickel or cobalt. Companies like BYD and Tesla now widely deploy LFP for mainstream EVs. India has begun testing such chemistries under local conditions: IIT Madras' "<a href="https://www.iitm.ac.in/happenings/press-releases-and-coverages/iit-madras-launches-zero-e-mission-drive-nations-electric" className="underline">Zero e‑mission</a>" Battery Engineering Lab is evaluating LFP cells from CATL, BYD, and Vianode to adapt them to Indian climate and usage profiles.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          In Europe, the Battery 2030+ project under Horizon 2020 is advancing manganese-rich cathode chemistries, including LNMO (lithium nickel manganese oxide), which reduce nickel and cobalt intensity while retaining high energy density. In the US, <a href="https://www.silanano.com/" className="underline">Sila Nanotechnologies</a> and Nano One Materials are innovating high-silicon anodes and low-nickel, high-manganese cathodes, respectively, to reduce dependency on high-grade nickel.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          Indonesia—among the world's largest nickel producers—is scaling up <a href="https://arxiv.org/abs/2108.03496?utm_source=chatgpt.com" className="underline">NCM cathode production</a> while investing in alternative chemistries as a hedge against resource bottlenecks and pricing pressures.
                        </p>

                        <h5 className="fade-in-on-scroll my-4  fw-normal"><em>Nickel Recycling and Circularity Innovations</em></h5>

                        <p className="fade-in-on-scroll my-4">
                          The UK has pioneered molten salt direct recycling (MSDR) techniques to convert low-nickel <a href="https://arxiv.org/abs/2108.03496?utm_source=chatgpt.com" className="underline">NMC</a> scrap into high-performance single-crystal cathodes. These upcycling methods are currently under evaluation at CSIR--CECRI for possible scale-up in India, providing an opportunity to reduce primary nickel demand through secondary material recovery.
                        </p>

                        <h5 className="fade-in-on-scroll my-4  fw-normal"><em>Non-Battery Alternatives to Nickel</em></h5>

                        <p className="fade-in-on-scroll my-4">
                          Beyond batteries, the substitution of nickel is gaining momentum across construction, transport, and industrial sectors:
                        </p>

                        <ul className="fade-in-on-scroll my-4 fw-normal">
                          <li className="my-3">Low-nickel duplex stainless steels and ultra-chromium grades are replacing austenitic steels in infrastructure and marine applications.</li>
                          <li className="my-3">Aluminium, coated steels, and engineered plastics are displacing nickel-containing alloys in pipelines, automotive, and consumer goods.</li>
                          <li className="my-3">In corrosive environments, titanium alloys and specialty polymers are increasingly used instead of traditional nickel-based corrosion-resistant alloys, especially in petrochemical and power generation sectors.</li>
                        </ul>

                        <p className="fade-in-on-scroll my-4">
                          These substitutions provide India with additional levers to reduce long-term industrial demand for primary nickel.
                        </p>

                        {/* Table */}
                        <div className="table-responsive fade-in-on-scroll my-4">
                          <table className="table table-bordered fade-in-on-scroll">
                            <thead style={{ backgroundColor: "#f0f0f0" }} className="fade-in-on-scroll">
                              <tr className="text-blue">
                                <th ><strong>Chemistry / Technology</strong></th>
                                <th><strong>Nickel Dependency</strong></th>
                                <th><strong>Key Features</strong></th>
                                <th><strong>Leading Developers / Institutions</strong></th>
                                <th><strong>Relevance for India</strong></th>
                              </tr>
                            </thead>
                            <tbody className="fade-in-on-scroll">
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Lithium Iron Phosphate (LFP)</strong></td>
                                <td>Nickel-free</td>
                                <td>Low cost, high safety, long cycle life</td>
                                <td>BYD, Tesla, CATL, Vianode</td>
                                <td>Being tested at IIT Madras' "Zero e-mission" Lab</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Lithium Nickel Manganese Oxide (LNMO)</strong></td>
                                <td>Low-nickel</td>
                                <td>High energy density, cobalt-free variants possible</td>
                                <td>Umicore, CRU Group, Horizon 2020</td>
                                <td>Proposed India--EU MoU for demo plant at BHEL</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>High-Manganese Cathodes</strong></td>
                                <td>Low-nickel</td>
                                <td>Abundant manganese, scalable</td>
                                <td>Nano One Materials, CSIRO</td>
                                <td>Part of proposed CSIRO--IIT Bombay pilot collaboration</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>High-Silicon Anodes</strong></td>
                                <td>Not cathode dependent</td>
                                <td>Boosts capacity, reduces pressure on cathode metals</td>
                                <td>Sila Nanotechnologies (USA)</td>
                                <td>Relevant for hybrid chemistries in Indian EVs</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Molten Salt Direct Recycling (MSDR)</strong></td>
                                <td>Reduces virgin nickel use</td>
                                <td>Converts NMC scrap into high-performance cathodes</td>
                                <td>Imperial College London</td>
                                <td>Under evaluation at CSIR--CECRI for scale-up</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Battery Upcycling Techniques</strong></td>
                                <td>Secondary nickel recovery</td>
                                <td>Reduces reliance on mined nickel</td>
                                <td>Multiple UK and EU labs</td>
                                <td>Proposed Indo-UK battery recycling pact</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <h4 className="fade-in-on-scroll my-4 text-blue"><strong>Strategic MoUs and Trade Frameworks for India</strong></h4>

                        <p className="fade-in-on-scroll my-4">
                          To enable access to emerging nickel alternatives and technologies, India can pursue the following international partnerships:
                        </p>

                        <h5 className="fade-in-on-scroll my-4"><em>LFP Cell Localization Agreement (India--U.S.)</em></h5>

                        <p className="fade-in-on-scroll my-4"  >
                          Establish a Technology Collaboration Agreement with General Motors and Vianode to set up an LFP cell pilot-line in an Indian Special Economic Zone (SEZ). Supported by a ₹400 crore Production Linked Incentive (PLI) for "Nickel-Free Battery Cells," this initiative would draw on GM's Indiana cell production expertise and Vianode's high-purity precursor materials.
                        </p>

                        <h5 className="fade-in-on-scroll my-4"><em>LNMO Scale-Up MoU (India--EU)</em></h5>

                        <p className="fade-in-on-scroll my-4">
                          Under the India--EU Green Tech Partnership, an MoU could be signed with Umicore and CRU Group to co-fund a 50 MWh LNMO (low-nickel cathode) manufacturing demonstration plant at BHEL, backed by EU Innovation Fund grants.
                        </p>

                        <h5 className="fade-in-on-scroll my-4"><em>Nickel Recycling Pact (India--UK)</em></h5>

                        <p className="fade-in-on-scroll my-4">
                          Formalize a Memorandum of Cooperation (MoC) between IIT Madras' "Zero e‑mission" lab and Imperial College's MSDR spin-out to establish a battery waste upcycling hub in India. This could recover nickel and other cathode materials from retired EV batteries, reducing import dependency.
                        </p>

                        <h5 className="fade-in-on-scroll my-4"><em>Australia Critical Minerals Extension</em></h5>

                        <p className="fade-in-on-scroll my-4">
                          Expand the India--Australia Critical Minerals Research Partnership to include CSIRO-led R&D on high-manganese spinel cathodes, with pilot-scale data shared with IIT Bombay and CSIR labs for local validation and adaptation.
                        </p>

                        <h4 className="fade-in-on-scroll my-4 text-blue"><strong>Policy Recommendations</strong></h4>

                        <h5 className="fade-in-on-scroll my-4  fw-normal"><em>Strengthen Bilateral Supply Agreements</em></h5>

                        <p className="fade-in-on-scroll my-4">
                          India should deepen ties with nickel-rich nations such as Indonesia, the Philippines, and Australia. While Australia remains a key Quad and MSP partner, deeper commercial arrangements with Indonesia—already a major player in nickel refining—will be vital.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          Leveraging BRICS, G20, and ASEAN platforms can help India forge multilateral cooperation frameworks on nickel supply chains, enhance regional mining resilience, and mitigate risks of resource nationalism.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          Strategic joint ventures—akin to India's KABIL model—could be replicated for nickel exploration, extraction, and refining, ensuring long-term access to resources and minimizing pricing shocks.
                        </p>

                        <h5 className="fade-in-on-scroll my-4 fw-normal"><em>Incentivize Domestic Development</em></h5>

                        <p className="fade-in-on-scroll my-4">
                          India should prioritize tax breaks, royalty waivers, and subsidies to attract foreign direct investment (FDI) into its nascent nickel value chain. Public-private partnerships must be structured to upgrade exploration technologies, establish cost-effective refining infrastructure, and localize nickel-based cathode precursor and sulfate production.
                        </p>

                        <h5 className="fade-in-on-scroll my-4 fw-normal"><em>Export Diversification</em></h5>

                        <p className="fade-in-on-scrollmy-4">
                          India must develop an export portfolio that includes raw ore, intermediates (e.g., mixed hydroxide precipitate or nickel matte), and refined nickel. This diversification will reduce India's exposure to global price cycles while bolstering its competitiveness in the international nickel supply chain.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          India's transition to cleaner energy systems must be backed by strategic shifts away from vulnerable mineral supply chains. Reducing nickel reliance through alternate battery chemistries, building strategic partnerships, and localizing industrial capacity are all essential to ensuring long-term supply security and technological sovereignty.
                        </p>

                        <p className="fade-in-on-scroll my-4"><em>Disclaimer: Data updated as of June 2025, next update on September 2025</em></p>

                        <h5 className="fade-in-on-scroll my-4 text-blue">References</h5>
                        <p className="fade-in-on-scroll my-4">
                          Battery 2030+ (2024). <em>Europe's Next-Gen Battery Research Program</em>.
                        </p>
                        <p className="fade-in-on-scroll my-4">
                          CRU Group (2024). <em>Nickel Demand Outlook and LNMO Projections</em>.
                        </p>
                        <p className="fade-in-on-scroll my-4">
                          CSIR-CECRI (2023). <em>Pilot Evaluation of MSDR Cathode Recycling</em>.
                        </p>
                        <p className="fade-in-on-scroll my-4">
                          GM & Vianode (2023). <em>Battery Cell and Precursor Collaboration Announcements</em>.
                        </p>
                        <p className="fade-in-on-scroll my-4">
                          Horizon 2020 (2023). <em>Advanced Cathode Projects under EU Funding</em>.
                        </p>
                        <p className="fade-in-on-scroll my-4">
                          Indonesia Investment Authority (2023). <em>Nickel Sector Policy & R&D Directions</em>.
                        </p>
                        <p className="fade-in-on-scroll my-4">
                          IIT Madras (2024). <em>Zero e-mission Battery Engineering Lab Brief</em>.
                        </p>
                        <p className="fade-in-on-scroll my-4">
                          Imperial College London (2023). <em>Molten Salt Battery Recycling Process</em>.
                        </p>
                        <p className="fade-in-on-scroll my-4">
                          Sila Nanotechnologies & Nano One (2024). <em>Low-Nickel Cathode Technology Notes</em>.
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
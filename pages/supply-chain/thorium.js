import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function Thorium() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="blog-details-area fit-content-height"
      >
        {/* Full-width image - keeping the same image as original, replace if needed */}
        <div style={{ width: "100%", background: "#f5f5f5", margin: "0px 0" }}>
          <img
            src={`${basePath}/assets/minerals_images/thorium.jpg`}
            alt="Thorium: India's Long Game in Nuclear Power"
            style={{
              width: "100%",
              height: "60vh",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Main content */}
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
                  <h3 className="my-3">
                    Thorium: India's Long Game in Nuclear Power
                  </h3>

                  <h4 className="my-3">Why Thorium Matters Now</h4>

                  <p className="my-3">
                    India is talking about thorium again as the country's nuclear strategy
                    is moving from aspiration to implementation. The government has set a
                    Nuclear Energy Mission that targets <a
                      href="https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2223250&utm_source=chatgpt.com&reg=3&lang=2"
                      target="_blank"
                      rel="noopener noreferrer"
                    ><strong>100 GWe of nuclear capacity by 2047</strong></a>,
                    tied directly to energy security and the net-zero 2070 goal. The Indian
                    Parliament has <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2247967&lang=1&reg=3&utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >confirmed that</a> the <strong>SHANTI Act, 2025,</strong> now provides a legal framework for limited
                    private participation in nuclear energy and research under regulatory
                    oversight.
                  </p>

                  <p className="my-3">
                    On 6<sup>th</sup> April, 2026, the <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2249537&lang=1&reg=3&utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    ><strong>Prototype Fast Breeder Reactor (PFBR) at Kalpakkam </strong></a>
                    reached first criticality, marking a major step in the second stage of
                    India's three-stage programme and reinforcing the case for a
                    thorium-centred long game. The breakthrough matters as thorium is not a
                    political slogan; it is a strategic fuel option for a country that
                    possesses limited uranium and large thorium-bearing monazite sands. The
                    <a
                      href="https://www.iaea.org/newscenter/news/thoriums-long-term-potential-in-nuclear-energy-new-iaea-analysis?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    > IAEA describes thorium </a>
                    as a fertile material that can breed fissile uranium-233, potentially
                    offering a long-term solution to energy security, while also <a
                      href="https://www.iaea.org/publications/6722/potential-of-thorium-based-fuel-cycles-to-constrain-plutonium-and-reduce-long-lived-waste-toxicity?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >producing less 'long-lived waste' </a>
                    than present-day uranium fuel cycles. In other words, thorium is
                    attractive not because it is easy, but because it fits India's
                    structural constraint: abundant domestic thorium, scarce domestic
                    uranium, and a hard push for round-the-clock clean power.
                  </p>

                  <h4 className="my-3">Thorium's Renewed Strategic Relevance</h4>

                  <p className="my-3">
                    Thorium is not a ready-made reactor fuel; it is a fertile material that
                    needs a driver, such as uranium or plutonium, to start and sustain the
                    chain reaction. The IAEA is explicit on this point, i.e. thorium-232
                    must be irradiated before it becomes uranium-233, which is then usable
                    as fuel. That is why thorium is both promising and frustrating. It is
                    abundant in nature, but commercial deployment remains technically
                    demanding, because extraction, fuel fabrication and reprocessing are all
                    more complex than for conventional uranium fuel cycles.
                  </p>

                  <p className="my-3">
                    This is why the global thorium story has stagnated in the R&D stage for
                    decades, yet the lane is widening globally. China's experimental <a
                      href="https://www.world-nuclear-news.org/articles/chinese-msr-achieves-conversion-of-thorium-uranium-fuel?cid=64010&utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >2 MWt molten salt reactor in Wuwei </a>
                    reportedly achieved the first successful thorium-to-uranium fuel
                    conversion in 2025, while the <a
                      href="https://inl.gov/nuclear-energy/accelerating-nuclear-energy/?utm_source=chatgpt.com&__cf_chl_f_tk=4Z4E2dBQmox4RaZgwt2FFWiGOdo7Pv4e3UsF1Q1KZsc-1775637579-1.0.1.1-YM1mHcQtCwYUiI3o6Nkg5FJBbE6FEh0s4vip8rDb.DA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >Idaho National Laboratory </a>
                    has supported Clean Core Thorium Energy's thorium-HALEU fuel testing,
                    including irradiation work in the U.S. advanced-fuels ecosystem. These
                    are not commercial breakthroughs, but they are meaningful because they
                    show that thorium is moving from theory toward validated engineering
                    pathways.
                  </p>

                  <h4 className="my-3">India's Thorium Wealth, The Geologic Advantage</h4>

                  <p className="my-3">
                    Thorium, while categorised alongside or within rare earth elements
                    (REEs), is not explicitly listed in the Ministry of Mines' <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1942027&reg=3&lang=2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >2023 list of 30 designated critical minerals</a>,
                    but rather treated as a strategic 'atomic mineral,' falling under the
                    purview of <a
                      href="https://www.aerb.gov.in/images/PDF/Atomic-Energy-Act-1962.pdf#:~:text=(g)%E2%80%9Cprescribed%20substance%E2%80%9D%20means%20any%20substance%20including%20any,prescribed%20by%20notification%20by%20the%20Central%20Government."
                      target="_blank"
                      rel="noopener noreferrer"
                    >the Atomic Energy Act, 1962</a>,
                    due to its role in India's nuclear energy program.
                  </p>

                  <p className="my-3">
                    India's advantage begins with geology. Official government data show
                    <a
                      href="https://dae.gov.in/press-release-10-2012-export-of-monazite-from-india-facts/?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    > monazite-bearing beach sands </a>
                    and inland placers spread across <strong>Odisha, Andhra Pradesh, Tamil Nadu,
                    Kerala, Maharashtra, Gujarat, West Bengal and Jharkhand</strong>, and the
                    Department of Atomic Energy (DAE) has repeatedly stressed that monazite is
                    a prescribed substance under strict regulation. The DAE also states that
                    <a
                      href="https://www.irel.co.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    > <strong>IREL (India) Limited</strong></a>, a government
                    PSU, is the only entity permitted to produce and process monazite for
                    domestic use and export, which implies that thorium in India is not just
                    a resource question, but a controlled-industrial question.
                  </p>

                  {/* Mineral Deposits Table */}
                  <div className="my-4">
                    <div className="table-responsive">
                      <table
                        className="table table-bordered"
                        style={{ border: "1px solid #dee2e6", width: "100%", fontSize: "0.9rem" }}
                      >
                        <thead style={{ backgroundColor: "#f8f9fa" }}>
                          <tr>
                            <th style={{ border: "1px solid #dee2e6", padding: "10px", textAlign: "center" }}>State</th>
                            <th style={{ border: "1px solid #dee2e6", padding: "10px", textAlign: "center" }}>Deposits</th>
                            <th style={{ border: "1px solid #dee2e6", padding: "10px", textAlign: "center" }}>Ilmenite</th>
                            <th style={{ border: "1px solid #dee2e6", padding: "10px", textAlign: "center" }}>Rutile</th>
                            <th style={{ border: "1px solid #dee2e6", padding: "10px", textAlign: "center" }}>Leucoxene</th>
                            <th style={{ border: "1px solid #dee2e6", padding: "10px", textAlign: "center" }}>Monazite</th>
                            <th style={{ border: "1px solid #dee2e6", padding: "10px", textAlign: "center" }}>Zircon</th>
                            <th style={{ border: "1px solid #dee2e6", padding: "10px", textAlign: "center" }}>Garnet</th>
                            <th style={{ border: "1px solid #dee2e6", padding: "10px", textAlign: "center" }}>Sillimanite</th>
                            <th style={{ border: "1px solid #dee2e6", padding: "10px", textAlign: "center" }}>Total Heavy Minerals (THM)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td style={{ padding: "8px" }}>Odisha</td><td style={{ padding: "8px" }}>13</td><td style={{ padding: "8px" }}>172.25</td><td style={{ padding: "8px" }}>7.19</td><td style={{ padding: "8px" }}>0.94</td><td style={{ padding: "8px" }}>3.22</td><td style={{ padding: "8px" }}>6.00</td><td style={{ padding: "8px" }}>71.60</td><td style={{ padding: "8px" }}>90.17</td><td style={{ padding: "8px" }}>351.36</td></tr>
                          <tr><td style={{ padding: "8px" }}>Andhra Pradesh</td><td style={{ padding: "8px" }}>25</td><td style={{ padding: "8px" }}>178.75</td><td style={{ padding: "8px" }}>11.46</td><td style={{ padding: "8px" }}>3.64</td><td style={{ padding: "8px" }}>4.05</td><td style={{ padding: "8px" }}>12.75</td><td style={{ padding: "8px" }}>67.30</td><td style={{ padding: "8px" }}>81.85</td><td style={{ padding: "8px" }}>359.79</td></tr>
                          <tr><td style={{ padding: "8px" }}>Tamil Nadu</td><td style={{ padding: "8px" }}>54</td><td style={{ padding: "8px" }}>191.29</td><td style={{ padding: "8px" }}>8.35</td><td style={{ padding: "8px" }}>6.56</td><td style={{ padding: "8px" }}>2.55</td><td style={{ padding: "8px" }}>10.75</td><td style={{ padding: "8px" }}>71.15</td><td style={{ padding: "8px" }}>39.99</td><td style={{ padding: "8px" }}>330.64</td></tr>
                          <tr><td style={{ padding: "8px" }}>Kerala</td><td style={{ padding: "8px" }}>35</td><td style={{ padding: "8px" }}>144.02</td><td style={{ padding: "8px" }}>8.74</td><td style={{ padding: "8px" }}>8.23</td><td style={{ padding: "8px" }}>1.84</td><td style={{ padding: "8px" }}>7.96</td><td style={{ padding: "8px" }}>7.38</td><td style={{ padding: "8px" }}>64.72</td><td style={{ padding: "8px" }}>242.88</td></tr>
                          <tr><td style={{ padding: "8px" }}>Maharashtra</td><td style={{ padding: "8px" }}>5</td><td style={{ padding: "8px" }}>5.50</td><td style={{ padding: "8px" }}>0.01</td><td style={{ padding: "8px" }}>0.06</td><td style={{ padding: "8px" }}>0.004</td><td style={{ padding: "8px" }}>0.03</td><td style={{ padding: "8px" }}>0.02</td><td style={{ padding: "8px" }}>0.01</td><td style={{ padding: "8px" }}>5.64</td></tr>
                          <tr><td style={{ padding: "8px" }}>Gujarat</td><td style={{ padding: "8px" }}>2</td><td style={{ padding: "8px" }}>11.64</td><td style={{ padding: "8px" }}>0.03</td><td style={{ padding: "8px" }}>0.33</td><td style={{ padding: "8px" }}>0.07</td><td style={{ padding: "8px" }}>0.06</td><td style={{ padding: "8px" }}>0.38</td><td style={{ padding: "8px" }}>0.04</td><td style={{ padding: "8px" }}>12.53</td></tr>
                          <tr><td style={{ padding: "8px" }}>West Bengal</td><td style={{ padding: "8px" }}>1</td><td style={{ padding: "8px" }}>2.05</td><td style={{ padding: "8px" }}>0.19</td><td style={{ padding: "8px" }}>-</td><td style={{ padding: "8px" }}>1.20</td><td style={{ padding: "8px" }}>0.38</td><td style={{ padding: "8px" }}>-</td><td style={{ padding: "8px" }}>1.63</td><td style={{ padding: "8px" }}>5.45</td></tr>
                          <tr><td style={{ padding: "8px" }}>Jharkhand</td><td style={{ padding: "8px" }}>1</td><td style={{ padding: "8px" }}>0.73</td><td style={{ padding: "8px" }}>0.01</td><td style={{ padding: "8px" }}>-</td><td style={{ padding: "8px" }}>0.21</td><td style={{ padding: "8px" }}>0.08</td><td style={{ padding: "8px" }}>-</td><td style={{ padding: "8px" }}>0.08</td><td style={{ padding: "8px" }}>1.12</td></tr>
                          <tr style={{ backgroundColor: "#f2f2f2", fontWeight: "bold" }}><td style={{ padding: "8px" }}>Total</td><td style={{ padding: "8px" }}>136</td><td style={{ padding: "8px" }}>706.24</td><td style={{ padding: "8px" }}>35.98</td><td style={{ padding: "8px" }}>19.75</td><td style={{ padding: "8px" }}>13.15</td><td style={{ padding: "8px" }}>38.00</td><td style={{ padding: "8px" }}>217.83</td><td style={{ padding: "8px" }}>278.48</td><td style={{ padding: "8px" }}>1,309.42</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#6c757d",
                        marginTop: "10px",
                        fontStyle: "italic",
                      }}
                    >
                      Source: Department of Atomic Energy, PIB, 11<sup>th</sup> March 2026, Parliament Question: Minerals in Coastal Beaches
                    </p>
                  </div>

                  <p className="my-3">
                    The scale is significant enough to matter strategically. The United
                    States Geological Survey (USGS) still identifies <a
                      href="https://pubs.usgs.gov/periodicals/mcs2023/mcs2023-thorium.pdf?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >India as holding the world's largest thorium resources</a>,
                    estimated at about <strong>850,000 tons</strong>, while recent PIB replies show India
                    further possesses <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2238892&lang=1&reg=6&utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    ><strong>13.15 million tonnes of monazite</strong> resources </a>
                    and large rare-earth-bearing coastal deposits. That is the real Indian
                    thorium story: not a shortage of raw potential, but a shortage of
                    conversion capacity, fuel-cycle maturity and bankable projects that can
                    turn geological advantage into industrial power.
                  </p>

                  <h4 className="my-3">India's Program: From Stage Two to Stage Three</h4>

                  <p className="my-3">
                    India's three-stage nuclear programme is designed precisely to solve this
                    problem. The government states that fast breeder reactors are the
                    bridge: they recycle fissile material, extend limited uranium supplies,
                    and create the conditions for later thorium use. The PFBR's April 2026
                    criticality is therefore not just a reactor milestone; it is a structural
                    milestone for India's long-term fuel cycle. The Bhabha Atomic Research
                    Centre's (BARC) <a
                      href="https://www.barc.gov.in/randd/ahwr.html?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >Advanced Heavy Water Reactor work (AHWR) </a>
                    is meant to demonstrate large-scale thorium utilisation, and the DAE has
                    described thorium reactors and associated fuel-cycle facilities as a
                    core mission area.
                  </p>

                  <h4 className="my-3">From Resource to Reactor</h4>

                  <p className="my-3">
                    India's thorium story is compelling not simply because it has large
                    reserves, but because the state still retains control over the entire
                    strategic chain: mining, processing, fuel fabrication, reactor design,
                    and long-term waste management. The Department of Atomic Energy states
                    its mandate explicitly, which includes thorium reactors and associated
                    fuel-cycle facilities, while BARC's AHWR programme is designed to
                    demonstrate large-scale thorium utilisation and passive safety features.
                    The combination provides India with something rare in global nuclear
                    policy: a fuel advantage linked to an indigenous technology pathway,
                    rather than an import-dependent one.
                  </p>

                  <p className="my-3">
                    But the edge is not automatic. The government has opened a legal pathway
                    through the SHANTI Act, 2025, yet PIB has confirmed that implementing
                    rules and timelines have not yet been notified. In other words, the
                    political signal is strong, but the execution architecture is still
                    under development. That gap is significant as thorium is not a quick
                    commercial play. The IAEA is clear that thorium must first be converted
                    into uranium-233 and that extraction, remote fuel fabrication, and
                    reprocessing are technically demanding and expensive. India's challenge
                    is therefore not the absence of a vision, but the necessity of speed in
                    turning that vision into an investable industrial system.
                  </p>

                  <p className="my-3">
                    That is where the next phase becomes decisive. India's monazite-rich
                    coastal belt, across Odisha, Andhra Pradesh, Tamil Nadu and Kerala,
                    offers the upstream material base. The PFBR's first criticality now
                    strengthens the bridge into stage two of the nuclear programme, while
                    AHWR remains the clearest demonstration route for stage three. If India
                    can connect those three pieces, the resource base, breeder bridge, and
                    thorium demonstration, it will not just reduce import dependence. It
                    will build a strategic fuel system with long-horizon energy autonomy.
                  </p>

  <p style={{color: "#686868"}}>
                                        Copyright ©️ 2025 by Ananta Aspen Centre<br/>
                                            This text is protected by copyright and may not be reproduced, distributed, or modified without permission
                                    </p>
                  {/* Author Card */}
                  <Card
                    className="d-flex flex-column flex-md-row gap-4 p-4 mt-5 shadow-sm"
                    style={{
                      backgroundColor: "#fff6f6",
                      borderRadius: "10px",
                    }}
                  >
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
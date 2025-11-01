import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function CriticalPathway() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="blog-details-area fit-content-height"
      >
        {/* Full-width image */}
        <div style={{ width: "100%", background: "#f5f5f5", margin: "0px 0" }}>
          <img
            src={`${basePath}/assets/minerals_images/magnet.jpg`}
            alt="About"
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
                  <h2 className="my-3 ">
                    Magnets, Money, and Momentum: India's Rare-Earth PLI Push
                  </h2>

                  <p className="my-3">
                    In October 2025, the Indian Finance Ministry cleared a Rs. 7,300-7,350 crore (USD 880-885 million) Production-Linked Incentive (PLI) to establish domestic sintered rare-earth permanent magnet (REPM) capacity for EVs, wind turbines and defence, a direct policy response to heightened supply-chain risk after China's October REE export controls. The scheme will run for 7 years and target several vertically integrated manufacturing units to reach a meaningful tonnage by 2030.
                  </p>

                  <h3 className="my-3 ">Export licences, shipping delays, and a strategic fiscal reply</h3>

                  <p className="my-3">
                    On 9 October 2025, China's Ministry of Commerce announced new export controls on rare-earth elements (REEs) and related technologies. These regulations added five more REEs to China's licensing regime (effective 8 Nov 2025). Foreign-made magnets containing any Chinese-origin REE or produced with Chinese REE tech now require a Beijing export permit. Beijing aims to increase national security and curb illicit mining.
                  </p>

                  <div className="table-responsive my-4">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th><strong>Country</strong></th>
                          <th><strong>REE Mine Production 2023</strong></th>
                          <th><strong>Reserves</strong></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>China</td>
                          <td>240,000t</td>
                          <td>44,000,000t</td>
                        </tr>
                        <tr>
                          <td>India</td>
                          <td>2,900t</td>
                          <td>6,900,000t</td>
                        </tr>
                        <tr>
                          <td>The USA</td>
                          <td>43,000t</td>
                          <td>1,800,000t</td>
                        </tr>
                        <tr>
                          <td>Australia</td>
                          <td>18,000t</td>
                          <td>5,700,000t</td>
                        </tr>
                        <tr>
                          <td><strong>World Rounded</strong></td>
                          <td><strong>350,000t</strong></td>
                          <td><strong>110,000,000</strong></td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-muted small">
                      <em>Source: USGS MCS 2024</em>
                    </p>
                  </div>

                  <p className="my-3">
                    Additionally, China is unique in holding vast reserves. It has about 44 million tonnes of known REE reserves, which account for nearly half the global total. By contrast, Brazil's are about 21 Mt, and India's about 6.9 Mt.
                  </p>

                  <p className="my-3">
                    Notably, mining ore is only part of the story. China also dominates processing and manufacturing. Estimates suggest China accounts for roughly 70% of global REE mining, 90% of chemical separation/refining, and 93% of permanent-magnet production. This vertical integration means that even if other mines start up, bottlenecks remain in separation facilities and magnet factories.
                  </p>

                  <p className="my-3">
                    China has been rapidly expanding this outreach. For example, Australia's Mt Weld mine (the world's largest concentrate) ships ore to Malaysia for refining, prompting China to get in talks for a rare earths refinery project with Kuala Lumpur. India likewise has almost no domestic magnet-making facilities: it imported 53,748 tonnes of permanent rare-earth magnets in FY2024-25, overwhelmingly from China.
                  </p>

                  <div className="table-responsive my-4">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th><strong>Description</strong></th>
                          <th><strong>India's Dependency on China (2022)- Value in kg</strong></th>
                          <th><strong>India's Dependency on China (2023)- Value in kg</strong></th>
                          <th><strong>India's Dependency on China (2024)- Value in kg</strong></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Permanent Magnets and articles intended to become permanent magnets</td>
                          <td><em>82.7 percent</em></td>
                          <td><em>87.89 percent</em></td>
                          <td><em>84.8 percent</em></td>
                        </tr>
                        <tr>
                          <td>Other Permanent magnets</td>
                          <td><em>82.2 percent</em></td>
                          <td><em>88.8 percent</em></td>
                          <td><em>90.4 percent</em></td>
                        </tr>
                        <tr>
                          <td>Electro Magnetic lifting heads</td>
                          <td><em>65.8 percent</em></td>
                          <td><em>66.99 percent</em></td>
                          <td><em>63.2 percent</em></td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-muted small">
                      <em>Source: DGCIS</em>
                    </p>
                  </div>

                  <p className="my-3">
                    These figures outline the concentrated exposure India faces for permanent magnets. Over 60-80 percent of certain magnet groups originate from China, leaving Indian OEMs and defence suppliers vulnerable.
                  </p>

                  <h3 className="my-3 ">The PLI Solution: Money and Market Access</h3>

                  <p className="my-3">
                    The PLI primarily subsidises magnet manufacturing (sintering, assembly, finishing). However, upstream processes such as mining, chemical separation, metallisation and alloying --- remain underdeveloped in India. GSI/NCMM exploration is expanding resources and acreage, yet commercial separation plants and high-purity metallurgy are effectively non-existent today. Without secured feedstock, finished-magnet plants will still rely on imported oxides/metals.
                  </p>

                  <p className="my-3">
                    China's October 2025 export notices (MOFCOM) extend licensing to goods and technologies containing Chinese-origin REEs, creating extra paperwork and potential shipment delays, not outright bans, but clear friction. This intensifies the urgency for the PLI to deliver an alternate supply quickly.
                  </p>

                  <h3 className="my-3 ">From stockpiles to sintering, a phased substitution forecast.</h3>

                  <h4 className="my-3 ">Short term (0-18 months):</h4>
                  <p className="my-3">
                    Stockpiling & import fixes should be prioritised. India is already planning strategic stockpiles to counter Chinese restrictions. OEMs will test ferrite or magnet-lite designs and import finished subassemblies where possible; Chinese licensing will create timing risk rather than immediate permanent cutoffs.
                  </p>

                  <h4 className="my-3 ">Medium term (18-48 months):</h4>
                  <p className="my-3">
                    Factory build-outs would be the next step. Greenfield magnet plants typically require 18-36 months to commission; expect initial magnet lines online in 2-3 years if capex awards, land and clearances move fast. JVs/tech licences with non-Chinese refiners (Lynas/MP Materials) or Japanese/Korean OEMs will be critical to get separation and alloying expertise.
                  </p>

                  <h4 className="my-3 ">Long term (4 plus years to 2030):</h4>
                  <p className="my-3">
                    Conditional verticalization to be incorporated. If the PLI is coupled with secured raw-material access, i.e. domestic mining ramp-up, KABIL deals, and NCMM output, India could reach target domestic magnet capacity by 2030; full upstream independence ( which includes the separation stage till alloy production) is tentatively a 5-10 year challenge.
                  </p>

                  <h3 className="my-3 ">The PLI is a lifeline, but not a silver bullet.</h3>

                  <p className="my-3">
                    The PLI is necessary and strategically well-timed, but its success hinges on parallel actions, rapid tendering and capex award, secured feedstock (domestic and overseas), tech partnerships, and streamlined clearances. Without those, the PLI will raise domestic magnet output but stop short of true upstream independence before 2030.
                  </p>

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
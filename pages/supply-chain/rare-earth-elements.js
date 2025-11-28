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
            src={`${basePath}/assets/minerals_images/rare_earth_minerals.jpg`}
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
                    Rare Earth Elements Just Got Rarer: China Tightens the Tap
                    on Critical Minerals
                  </h2>

                  <p className="my-3">
                    On 9-10 October 2025, the Ministry of Commerce of the
                    People's Republic of China (MOFCOM) published <a target="_blank" href="https://cset.georgetown.edu/publication/mofcom-notice-2025-61/"></a>two formal
                    announcements expanding export controls related to
                    rare-earth elements (REEs) and REE-related technologies.
                  </p>

                  <ul className="my-3">
                    <li>
                      <strong>Announcement No.61</strong> prescribes
                      export-licensing requirements for specified REE materials
                      and downstream products.
                    </li>
                    <li>
                      <strong>Announcement No.62</strong> extends export
                      controls to REE-related technologies and clarifies that
                      transfers via trade, IP licences, investment, or provision
                      of technical data may fall under the control regime.
                      MOFCOM's published texts state that the measures are
                      adopted under China's export-control legal framework and
                      set out licensing procedures, compliance guidance and
                      phased implementation dates.
                    </li>
                  </ul>

                  <p className="my-3">
                    The announcements have immediate operational effects:
                    exporters now face a new licensing regime and case-by-case
                    scrutiny for shipments or transfers involving controlled
                    REEs or magnet components.
                  </p>

                  <p className="my-3">
                    China's customs data show a sharp <a href="https://wits.worldbank.org/trade/comtrade/en/country/CHN/year/2024/tradeflow/Exports/partner/ALL/product/280530" target="_blank">month-on-month fall</a> in REE
                    exports in September, intensifying market anxiety.
                  </p>

                  <h3 className="my-3 ">A recurring pattern?</h3>

                  <p className="my-3">
                    In late September-October 2025, China's trading behaviour
                    towards major seaborne suppliers triggered market concerns
                    and led to several trade shifts. China Mineral Resources
                    Group (CMRG) was reported to have instructed mills and
                    traders to pause purchases of certain cargoes from BHP Group
                    amid contract negotiations and pricing disputes. Subsequent
                    reporting showed CMRG offering some BHP cargoes for sale to
                    domestic traders while a narrow set of Jimblebar fines (type
                    of iron ore) remained under an effective freeze.
                  </p>

                  <p className="my-3">
                    China's recent state-led buyer actions in iron ore (notably
                    directives reported from China Mineral Resources Group
                    affecting BHP cargoes) and the October MOFCOM export-control
                    notices on rare-earth elements are distinct mechanisms, one
                    domestically procurement-driven and the other regulatory.
                    Still, both have produced observable shifts in trade flows
                    and market signals. Official MOFCOM texts establish
                    licensing requirements for specific REE materials and
                    technologies, while market reporting recorded CMRG's
                    purchase suspensions and cargo reallocations. Together,
                    these recorded actions illustrate two documented ways
                    Chinese policy or state enterprise behaviour aims to alter
                    global commodity distribution as well as contract execution
                    for exporters and trading partners in measurable, documented
                    ways.
                  </p>

                  <h3 className="my-3 ">Why it matters for India</h3>

                  <p className="my-3">
                    India's clean‑energy and advanced‑manufacturing sectors
                    depend critically on rare earth products, most of which
                    today come from China. Official trade data show that China
                    overwhelmingly dominates India's imports of permanent
                    magnets and other processed REE goods. For example, India's
                    imports of "permanent magnets and articles" (HS 8505) in
                    FY2024-25 (through March 2025) totalled on the order of
                    45-50 thousand tonnes, the vast majority sourced from China.
                    In particular, about 21,897 tonnes of "other permanent
                    magnets" (HS85051900) and 17,685 tonnes of "metal permanent
                    magnets" (HS85051190) were imported in 2024-25, roughly
                    84.8% and 90.4% of those categories' totals, respectively.
                    This means well over four-fifths of India's high-performance
                    magnet imports come from China, magnets that are vital for
                    EV and hybrid motors, wind turbines and other green‑tech
                    applications.
                  </p>

                  <div className="table-responsive my-4">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th rowSpan="2">
                            <strong>HS Code</strong>
                          </th>
                          <th colSpan="3" className="text-center">
                            <strong>India's Import from China</strong>
                          </th>
                          <th colSpan="3" className="text-center">
                            <strong>India's Import from World</strong>
                          </th>
                          <th colSpan="3" className="text-center">
                            <strong>Import Dependency on China</strong>
                          </th>
                        </tr>
                        <tr>
                          <th>
                            <strong>2022-23</strong>
                          </th>
                          <th>
                            <strong>2023-24</strong>
                          </th>
                          <th>
                            <strong>2024-25</strong>
                          </th>
                          <th>
                            <strong>2022-23</strong>
                          </th>
                          <th>
                            <strong>2023-24</strong>
                          </th>
                          <th>
                            <strong>2024-25</strong>
                          </th>
                          <th>
                            <strong>2022-23</strong>
                          </th>
                          <th>
                            <strong>2023-24</strong>
                          </th>
                          <th>
                            <strong>2024-25</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>85051900</td>
                          <td>44.13</td>
                          <td>44.14</td>
                          <td>50.42</td>
                          <td>69.73</td>
                          <td>70.11</td>
                          <td>84.65</td>
                          <td>63.3%</td>
                          <td>63.0%</td>
                          <td>59.6%</td>
                        </tr>
                        <tr>
                          <td>85051190</td>
                          <td>88.42</td>
                          <td>90.8</td>
                          <td>110.68</td>
                          <td>124.73</td>
                          <td>124.77</td>
                          <td>136.14</td>
                          <td>70.9%</td>
                          <td>72.8%</td>
                          <td>81.3%</td>
                        </tr>
                        <tr>
                          <td>85059000</td>
                          <td>25.96</td>
                          <td>26.26</td>
                          <td>28.04</td>
                          <td>80.62</td>
                          <td>79.73</td>
                          <td>88.67</td>
                          <td>32.2%</td>
                          <td>32.9%</td>
                          <td>31.6%</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-muted small">
                      <em>Source: DCGIS</em>
                    </p>
                  </div>

                  <p className="my-3">
                    In India, the Geological Survey of India (GSI) is conducting{" "}
                    <em>hundreds</em> of critical mineral surveys through
                    2030-31. For instance, GSI launched about 195 REE‐targeted
                    exploration projects in FY2024-25 and 230 more in FY2025-26.
                  </p>

                  <p className="my-3">
                    Additionally, public press releases note that GSI's work
                    includes dozens of sites across Rajasthan, Gujarat, Bihar,
                    Tamil Nadu and other states.
                  </p>

                  <p className="my-3">
                    Lok Sabha and Rajya Sabha records provide <a target="_blank" href="https://sansad.in/getFile/loksabhaquestions/annex/184/AU5253_uzur2H.pdf?source=pqals&&utm_source=chatgpt.com">detailed
                    inventories </a>of India's REE efforts. Written answers list
                    specific high-priority 'G4' stage projects targeting
                    neodymium, dysprosium and other REEs. For example, official
                    tables show G4‑stage reconnaissance of Nd-Dy deposits at
                    Sirohi (Jirawal‑Sanpur) and Bhilwara (Mahendragarh--Gundli)
                    in Rajasthan.
                  </p>

                  <h3 className="my-3 ">Bottom Line</h3>

                  <p className="my-3">
                    China's October controls are a structural escalation as they
                    convert scale and technical dominance into policy leverage.
                    For India, the immediate task is pragmatic: triage
                    industrial risk with stockpiles and supplier mapping, seek
                    concrete licensing assurances from Beijing, and rapidly
                    scale diversified processing and recycling capacity so
                    strategic industries (EVs, renewables, defence) are
                    insulated from a single-country shock.
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
                        to enhancing India’s role in global governance and
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

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function MotherOfAllDeals() {
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
            src={`${basePath}/assets/minerals_images/indai-europe.png`}
            alt="The Mother of All Deals and Critical Minerals"
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
                    The Mother of All Deals and Critical Minerals
                  </h3>

                  <p className="my-3">
                    Global critical-raw-materials (CRM) supply chains today are thin,
                    concentrated and geopolitically charged. China <a
                      href="https://www.eia.gov/todayinenergy/detail.php?id=65305&utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      dominates processing and refining for many battery and rare-earth inputs
                    </a>,
                    leaving miners and manufacturers outside China exposed to single-point
                    chokepoints, export controls and price spikes. At the same time,
                    policies such as U.S. <a
                      href="https://www.eia.gov/todayinenergy/detail.php?id=65305&utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      industrial support backtracks&nbsp;
                    </a>
                    and tariffs, and Europe's own push for tighter environmental and due
                    diligence regulations, have raised the premium on reliable, low-carbon,
                    traceable supply, but they also raise compliance costs for exporters.
                    These structural pressures make market access, investment and
                    predictable offtake agreements essential for any country that wants to
                    scale CRM value chains.
                  </p>

                  <p className="my-3">
                    <a
                      href="https://www.pib.gov.in/PressReleseDetail.aspx?PRID=2219065&lang=1&reg=3&utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The India--EU Free Trade Agreement (FTA)&nbsp;
                    </a>
                    is a strategic lever for India to convert mineral endowments and
                    emerging upstream capabilities into durable industrial value. The
                    headline element, <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2219146&reg=3&lang=2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      'broad tariff elimination' and 'zero duty' market access&nbsp;
                    </a>
                    on very large shares of tariff lines, directly reduces an avoidable cost
                    wedge that has historically discouraged exporting processed and
                    semi-processed goods to high-value markets. By removing customs duties
                    and simplifying market entry, the FTA lowers the marginal cost of Indian
                    exports and raises the commercial attractiveness of investing in Indian
                    processing and downstream plants that serve EU manufacturers.
                  </p>

                  <p className="my-3">
                    For Europe, the deal is more than cheaper imports - it is an instrument
                    of strategic diversification. <a
                      href="https://single-market-economy.ec.europa.eu/sectors/raw-materials/areas-specific-interest/critical-raw-materials/critical-raw-materials-act_en?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The European Critical Raw Materials Act&nbsp;
                    </a>
                    sets clear targets for domestic processing, recycling and
                    diversification to avoid overreliance on any single third country. A
                    reliable, tariff-free relationship with India helps the EU meet its 2030
                    resilience benchmarks by adding an alternative supply and processing
                    partner that can be held to EU sustainability and due diligence
                    standards. That gives European original equipment manufacturers (OEMs)
                    and battery/renewable-tech firms a second, strategically palatable
                    sourcing route.
                  </p>
                  <p className="my-3">
                    Operationally, the FTA can catalyze three upward moves in the value
                    chain for India. First, it makes exporting higher-margin, value-added
                    products (purified oxides, precursor salts, cathode materials, specialty
                    steel and magnets) more profitable versus shipping raw concentrates.
                    Second, it signals to European investors that India will be a stable
                    demand market with low tariff risk, a crucial pull for greenfield
                    processing or JV capital. Third, long-term market access can underwrite
                    technology transfer and workforce skilling required to close the
                    processing gap that currently gives China an outsized advantage.
                  </p>

                  <p className="my-3">
                    But the agreement is not a silver bullet. Europe's sustainability rules
                    (due diligence, digital product passports) and the <a
                      href="https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Carbon Border Adjustment Mechanism &nbsp;
                    </a>
                    raise compliance costs for exporters whose production is
                    carbon-intensive or whose supply chains lack traceability. Indian
                    suppliers will therefore need to invest in cleaner processes, emissions
                    accounting, and third-party audits before they can fully utilize EU
                    demand at scale. The FTA does help with market access, but it does not
                    remove the technical and capital hurdles of meeting the EU's green and
                    social benchmarks.
                  </p>
                  <p className="my-3">
                    There are also strategic risks. Greater trade openness can accelerate
                    resource-intensive extraction and processing unless matched by strong
                    domestic regulation. India must avoid repeating environmental and social
                    externalities that undermine both local consent and long-term
                    reputation, and while tariff removal can improve margins, it may expose
                    nascent domestic industries to competitive pressure from EU firms in
                    adjacent manufacturing segments. Careful phasing, targeted incentives,
                    and local content strategies will be required to capture jobs and higher
                    value domestically. Ultimately, trade deals alone rarely redraw global
                    processing maps overnight; capacity creation takes time, capital and
                    industrial policy alignment.
                  </p>
                  <ol className="my-3">
                    <li className="mb-2" >
                      Use the FTA's assured market access to negotiate guaranteed-offtake
                      and co-investment deals with EU firms for processing plants and
                      precursors.
                    </li>
                    <li className="mb-2">
                      Fast-track environmental and carbon-accounting upgrades in target
                      sectors and seek EU technical assistance and the agreed climate
                      finance to lower compliance costs.
                    </li>
                    <li className="mb-2">
                      Back-scaled pilot projects with concessional finance and land/permit
                      facilitation to attract technology partners.
                    </li>
                    <li className="mb-2">
                      Build a clear export compliance & <a
                        href="https://ce-rise.eu/news/digital-passport-for-critical-raw-materials-a-breakthrough-in-the-energy-transition/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        DPP (digital product passport)&nbsp;
                      </a>
                      program so Indian CRM exports arrive at EU ports ready for immediate
                      acceptance.
                    </li>
                  </ol>
                  <p className="my-3">
                    The FTA removes an easy, visible cost, i.e., tariffs, and replaces
                    uncertainty with predictable market access. For buyers in Europe who
                    want reliable, green inputs, India can now offer competitively priced,
                    higher-quality processed minerals and parts. Predictable demand from
                    Europe will justify the upfront cost of cleaner, higher-tech processing
                    plants in India, and once those plants are in place, India will gain not
                    only higher export prices but also better employment opportunities, more
                    technology, and a stronger voice in resilient global CRM chains.
                  </p>

                  <p className="my-3">
                    The FTA creates a real window for India to move from a commodity
                    exporter toward a processing and manufacturing partner for Europe.
                    Still, India must pair market access with rapid upgrades in processing
                    capacity, environmental performance and traceability to turn tariff
                    gains into a durable industrial advantage.
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
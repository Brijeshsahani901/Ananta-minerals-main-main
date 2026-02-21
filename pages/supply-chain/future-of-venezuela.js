import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function ClosingLoop() {
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
            src={`${basePath}/assets/minerals_images/venezeula.jpg`}
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
                  <h3 className="my-3">
                    The Future of Venezuelan Critical Minerals
                  </h3>

                  <h4 className="my-3">A sudden strategic reconfiguration</h4>

                  <p className="my-3">
                    The{" "}
                    <a
                      href="https://www.nytimes.com/2026/01/03/us/politics/trump-capture-maduro-venezuela.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      US strikes on Venezuela
                    </a>{" "}
                    in early January 2026, coined as 'Operation Absolute Resolve,' and the
                    subsequent US assertion of control over Venezuelan oil flows, have
                    abruptly changed the risk calculus in Caracas. Washington's actions,
                    including air operations, blockades of tankers and a public claim that{" "}
                    <a
                      href="https://www.reuters.com/business/energy/chevron-talks-with-us-government-expanded-venezuela-license-sources-say-2026-01-07/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chevron, operating under U.S. authorisation
                    </a>
                    , will control oil shipments to the U.S., have raised geopolitical
                    uncertainty across Latin America. The events expose Venezuela's
                    natural-resource wealth to new strategic manoeuvres. For India, which is
                    exploring deeper ties with Caracas beyond oil, these events turn a
                    potential supplier and partner into a geopolitically fraught theatre.
                  </p>

                  <h4 className="my-3">Chinese presence in Venezuela</h4>

                  <p className="my-3">
                    The Embassy of India in Caracas maintains{" "}
                    <a
                      href="https://www.eoicaracas.gov.in/docs/Mining%20Sector.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      commercial and sector reports
                    </a>{" "}
                    that catalogue Venezuela's mineral endowments and investment environment. The
                    mining-sector chapter emphasises the Guayana Shield's geological wealth,
                    possessing iron, nickel, bauxite, gold, manganese and other metals, and
                    identifies opportunities for foreign investors while cautioning on legal
                    and institutional hurdles. The Embassy's business guides and commercial
                    reports (2020-2023 briefs) further document China's longstanding energy
                    sector footprint and note the rising commercial activity. Though
                    granular, up-to-date line-item statistics on Chinese mining
                    investments are limited in public embassy reports; they instead
                    highlight broader Chinese financing and state-firm engagement in
                    Venezuelan energy and resource projects. The Embassy materials are
                    useful for locating priority mineral provinces and mapping prior
                    engagement outreach by Indian missions.
                  </p>

                  <h4 className="my-3">Venezuela's critical minerals capacity - the headline picture</h4>

                  <p className="my-3">
                    Independent reporting and government claims over the last five years
                    point to significant, if incompletely surveyed,{" "}
                    <a
                      href="https://in.investing.com/analysis/why-the-us-is-targeting-venezuela-and-what-it-means-for-markets-200633613"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      critical-mineral potential: large nickel deposits, extensive bauxite, copper prospects,
                      'black sand' concentrations that may contain coltan (niobium-tantalum)
                      and thorium-bearing rare-earth minerals, and other battery-metal possibilities
                    </a>
                    . Venezuelan officials and some local surveys have cited very large nickel
                    tonnages and expansive polymetallic resources in the Guayana Shield, but
                    these estimates remain unevenly verified and constrained by weak
                    infrastructure and limited modern exploration. In short, high geological
                    upside, low current deliverability.
                  </p>

                  <h4 className="my-3">Venezuela courting India - recent engagements</h4>

                  <p className="my-3">
                    On the diplomatic track, Caracas has explicitly sought to broaden ties
                    with India beyond hydrocarbons. Recent meetings between{" "}
                    <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190279&reg=3&lang=2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Commerce Minister Piyush Goyal with Venezuela's Ecological Mining Development Minister
                    </a>
                    , and press notes from India's commerce and external affairs channels
                    display Caracas pitching mining, nickel and other critical minerals as
                    investment opportunities for Indian industry. The Indian side has
                    responded by reactivating bilateral mechanisms, and local embassy
                    business guides have been used to promote opportunities. These overtures
                    are earnest but nascent as they have not yet translated into large,
                    on-the-ground Indian mining projects.
                  </p>

                  <h4 className="my-3">Implications for India - risks and narrow strategic openings</h4>

                  <p className="my-3">
                    The US's military and maritime escalation complicates any Indian push
                    into Venezuelan mining. First, political risk spikes such as investments
                    negotiated with Maduro-era entities may face legal and sanctions-related
                    exposure if control over oil and state revenues shifts, or if new
                    U.S.-aligned authorities impose different contractual terms. Second,
                    China's deep{" "}
                    <a
                      href="https://nationalinterest.org/feature/venezuela-has-more-just-oil-and-china-knows-it-206543"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      economic ties via loans, oil-for-assets arrangements and state-firm presence
                    </a>{" "}
                    mean that any opening for India will intersect with Beijing's entrenched
                    interests. Recent reporting shows Chinese firms remain active and judge
                    Caracas strategically important. That said, the disruption also creates
                    a narrow window. If Venezuela seeks to diversify partners in the face of
                    Western pressure, India can offer an alternative that blends commercial
                    investment with non-interventionist diplomacy, but only if New Delhi
                    manages sanctions risk and structures deals with strong legal
                    protections and escrowed, compliance-friendly arrangements.
                  </p>

                  <h4 className="my-3">What next for India - practical choices</h4>

                  <p className="my-3">
                    India's prudent response should be layered. In the short term, India
                    could utilize the Embassy in Caracas with the Ministry of External
                    Affairs to map which Venezuelan mining assets are legally and
                    contractually clear of sanctions and which counterparties are exposed to
                    U.S. claims. Secondly, policy must insist on robust due diligence,
                    political-risk insurance and escrow mechanisms for any exploratory
                    investments. In the medium term, pursue technical cooperation through
                    geological surveys, capacity building, joint exploration financing,
                    rather than direct green-field mining, to avoid immediate sovereign-risk
                    exposure while building presence. In the long term, the goal must be
                    centred on integrating any Venezuelan track with broader diversification
                    via South America, Africa and domestic projects, and coordinate with
                    like-minded partners to avoid being boxed in by great-power competition.
                    Finally, New Delhi should push a diplomatic line favouring stability and
                    legal predictability in Caracas, both to protect potential investors and
                    to preserve India's strategic autonomy.
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
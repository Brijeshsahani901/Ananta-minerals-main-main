import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa"; // Keeping import as per your pattern

export default function MultilateralLendersArticle() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="blog-details-area fit-content-height"
      >
        {/* Full-width image - using a relevant placeholder image */}
        <div style={{ width: "100%", background: "#f5f5f5", margin: "0px 0" }}>
          <img
            src={`${basePath}/assets/minerals_images/multilateral-lenders.webp`}
            alt="Multilateral lenders meeting"
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
                    How multilateral lenders are moving to reshape Asia's critical minerals value chain
                  </h3>

                  <p className="my-3">
                    The global race for critical minerals until 2010 when China and Japan had a brief{" "}
                    <a
                      href="https://cepr.org/voxeu/columns/revisiting-china-japan-rare-earths-dispute-2010"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      dispute
                    </a>{" "}
                    over the supply of Rare Earth Elements (REEs), had been a story told almost entirely in extraction terms. Until 2010 the policy discourse was fixed on where lithium, cobalt, nickel and rare earth elements sit in the ground and which sovereign or corporate actor can secure access to them fastest. What has changed after 2010 is the growing recognition, among governments, development financiers and private capital alike, that raw material access alone does not translate into industrial advantage, and that the countries sitting atop the world's most significant mineral deposits have historically captured the least value from them.
                  </p>

                  <p className="my-3">
                    It is into this gap that multilateral development banks are now explicitly positioning themselves, with the Asian Development Bank (ADB){" "}
                    <a
                      href="https://www.adb.org/news/adb-launches-initiative-build-asia-critical-minerals-supply-chains"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      launching
                    </a>{" "}
                    its Critical Minerals-to-Manufacturing Financing Partnership Facility.
                  </p>

                  <p className="my-3">
                    Before examining what the facility can realistically achieve, it is worth noting the institutional context in which it is operating. China is ADB's second largest shareholder, holding approximately 6.4% of voting shares behind only Japan and the US, which means that an institution being used partly as a vehicle to reduce regional dependence on Chinese processing dominance is simultaneously accountable to Beijing as a major capital contributor and governance stakeholder. This is not a contradiction that ADB's public communications dwell on, but it is one that shapes what the institution can say, which projects it can prioritise, and how explicitly it can frame its mandate in terms that Beijing would recognise as directed against its industrial interests. Japan, ADB's largest shareholder and the $20mn anchor donor to the new facility's grant window, is effectively using the multilateral architecture to advance a diversification agenda that its own bilateral foreign policy cannot pursue openly without diplomatic cost.
                  </p>

                  <p className="my-3">
                    India occupies a similarly complicated position. As both a significant ADB borrower and a country with its own substantial critical mineral ambitions, including rare earth deposits and an emerging battery manufacturing sector, India has strong reasons to want the kind of value chain development the facility is designed to enable. It also has strong reasons to be cautious about a multilateral framework in which China retains meaningful governance influence over the standards, environmental requirements and technology-sharing arrangements that will shape how that value chain develops. The ADB's strict environmental and social due diligence requirements, which apply to all projects supported through the facility, are framed as safeguards, and they are, but they also represent a set of conditions over whose design China has had a seat at the table in ways that India and Japan, despite their larger shareholdings, cannot fully insulate from Beijing's institutional influence.
                  </p>

                  <p className="my-3">
                    The facility's architecture reflects the financing realities of moving up a value chain that requires substantially more capital, technical capacity and regulatory sophistication than mining alone. A grant window seeded with $20mn from Japan and $1.6mn from the UK will fund feasibility studies, environmental and social assessments and technical assistance, addressing the early-stage project preparation gap that has historically prevented developing member countries from attracting downstream investment. A catalytic finance window anchored by $500mn memoranda from Korea Eximbank and the Korean Trade Insurance Corporation is designed to crowd in private cofinancing by absorbing the risk profile that commercial lenders have been unwilling to carry unassisted in frontier and emerging market contexts.
                  </p>

                  <p className="my-3">
                    The structure is sensible as far as it goes, but it also reflects the limitations of what multilateral financing can realistically achieve in a sector where the competitive dynamics are being shaped by forces considerably larger than development bank balance sheets. China's dominance across critical mineral processing is not a gap in the market waiting to be filled by better feasibility studies. It is the product of two decades of deliberate industrial policy, state-directed investment, and a willingness to operate at margins that private capital finds unattractive.
                  </p>

                  {/* Optional: Placeholder for a relevant chart/image */}
                  {/* 
                  <div className="my-4 text-center">
                    <img
                      src={`${basePath}/assets/minerals_images/adb-critical-minerals-chart.png`}
                      alt="ADB Critical Minerals Facility Structure"
                      style={{
                        width: "75%",
                        height: "500px",
                        display: "inline-block",
                      }}
                    />
                    <p className="text-muted mt-2" style={{ fontSize: "0.85rem" }}>
                      Source: Asian Development Bank
                    </p>
                  </div>
                  */}

                  <p style={{ color: "#686868" }}>
                    Copyright ©️ 2025 by Ananta Aspen Centre<br/>
                    This text is protected by copyright and may not be reproduced, distributed, or modified without permission
                  </p>

                  <Card
                    className="d-flex flex-column flex-md-row gap-4 p-4 mt-5 shadow-sm"
                    style={{
                      backgroundColor: "#fff6f6",
                      borderRadius: "10px",
                    }}
                  >
                    {/* Author Icon */}
                    <img
                      src={`${basePath}/assets/img/aditya-pareek.jpeg`}
                      alt="Aditya Pareek"
                      width={100}
                      height={100}
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        flexShrink: 0,
                      }}
                    />
                    {/* Text Content */}
                    <div style={{ flex: 1 }}>
                      <div className="d-flex align-items-center mb-3 gap-2">
                        <h5 className="mb-0 fw-semibold text-dark">
                          Aditya Pareek
                        </h5>
                        <Badge bg="success" pill>
                          Author
                        </Badge>
                      </div>

                      <p className="text-muted" style={{ lineHeight: 1.6 }}>
                        Aditya Pareek is a consultant with the Ananta Aspen Centre, he studies the intersection of technology and geopolitics and specialises on the affairs of the former Soviet space.
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
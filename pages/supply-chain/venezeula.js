import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function VenezuelaIndiaCriticalMinerals() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="blog-details-area fit-content-height"
      >
        {/* Full-width image placeholder - you can replace with relevant Venezuela/India minerals image */}
        <div style={{ width: "100%", background: "#f5f5f5", margin: "0px 0" }}>
          <img
            src={`${basePath}/assets/minerals_images/venezuela-flag.jpg`}
            alt="India's Path to Venezuela's Critical Minerals"
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
                    A path for Indian state firms in US play for Venezuela's Critical Minerals
                  </h3>
                  
                  <p className="my-3">
                    The conversation about US-Venezuela cooperation in critical minerals has so far been dominated by American and Canadian mining companies primarily because they are geographically the closest processing and production linked entities. However as Washington seeks to expand which partners it relies on for securing the critical minerals value chain India's state-owned enterprises may be first in that discussion with long-established, if deeply stagnated, stakes in Venezuela's natural resource economy.
                  </p>
                  
                  <p className="my-3">
                    Venezuela is believed to hold deposits of coltan, from which tantalum and niobium are derived, and bauxite, which can contain aluminum and gallium. Tantalum, niobium, aluminum, and gallium are all{" "}
                    <a
                      href="https://www.everycrsreport.com/files/2026-01-07_IF13145_e385924a2f20b8b1460afc40322d4137f1956556.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      designated
                    </a>{" "}
                    critical minerals by the US Geological Survey. Coltan is vital to smartphones, Electric Vehicle(EV) batteries, and military missile defense systems, while nickel plays an essential role in EV batteries, wind turbines, and the production of high-strength steels. These are precisely the materials that Washington and New Delhi are scrambling to secure as Chinese dominance over global mineral processing becomes an acute strategic liability.
                  </p>
                  
                  <p className="my-3">
                    India's public sector has been{" "}
                    <a
                      href="https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2039606&reg=3&lang=2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      pursuing
                    </a>{" "}
                    critical mineral assets across South America for several years, primarily through Khanij Bidesh India Limited (KABIL), a joint venture anchored by National Aluminium Company Limited (NALCO), Mineral Exploration Corporation Ltd, and Hindustan Copper Ltd. KABIL is mandated to scout for and secure 12 mineral assets overseas where India lacks ample reserves and has to rely on imports, with an initial focus on lithium and cobalt.
                  </p>
                  
                  <p className="my-3">
                    KABIL has signed an exploration and development contract with Argentina's state-owned company, obtaining exclusivity rights for lithium blocks in Catamarca Province, and has signed a Non-Disclosure Agreement with Chile's Empresa Nacional de Minería (ENAMI) to explore brine-type lithium blocks. The Indian government's global mineral strategy also includes Bolivia, and is looking to potentially widen a trade agreement with Chile to include critical minerals.
                  </p>
                  
                  <p className="my-3">
                    Venezuela has not yet featured in KABIL's operational portfolio, and the reasons are structural. For years, the sanctions environment made any serious Indian engagement with Venezuelan mining a compliance nightmare. To avoid being hit by secondary sanctions, India cut back sharply on its Venezuelan trade after 2019, and Indian state owned companies primarily from the hydrocarbon industry were unable to repatriate their{" "}
                    <a
                      href="https://www.cnbctv18.com/energy/us-control-of-venezuelan-oil-may-unlock-1-bn-stuck-dues-for-india-lift-output-19813862.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      owed dues of around $1 billion
                    </a>{" "}
                    from joint ventures.
                  </p>
                  
                  <p className="my-3">
                    This is where the emerging US-Venezuela minerals framework creates a genuinely complex dynamic for Indian PSUs. On one hand, the March 2026 US Office of Foreign Assets Control (OFAC){" "}
                    <a
                      href="https://ofac.treasury.gov/media/935396/download?inline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      general licenses
                    </a>{" "}
                    authorizing negotiations for mining sector investment in Venezuela open a door that was previously shut. If the US sanctions architecture continues to ease, Indian state firms, with their existing South American networks and government-to-government negotiating frameworks, are plausibly positioned to seek access to Venezuela's coltan and bauxite deposits. NALCO, already operating in the bauxite and alumina value chain domestically, would have a logical industrial interest in Venezuelan bauxite given the deposits's reportedly high gibbsite quality.
                  </p>
                  
                  <p className="my-3">
                    On the other hand, the terms being set by Washington are explicitly preferential toward American capital. Although the new Venezuelan{" "}
                    <a
                      href="https://www.reuters.com/world/americas/us-interior-secretary-meets-with-rodriguez-mining-companies-venezuela-visit-2026-03-04/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      mining law
                    </a>{" "}
                    opens concessions to foreign corporations for the first time in over two decades, with disputes settled through international arbitration, the implicit queue for Venezuelan mineral access is being organized in Washington, and India is not currently in the room.
                  </p>
                  
                  <p className="my-3">
                    The most viable path for India's PSUs is probably the same contingent, preparatory posture that OFAC's General License 55 itself encodes. They should map the opportunity, build the bilateral relationships, and wait for the governance conditions that make serious capital deployment defensible. Venezuela's coltan and bauxite will still be there, whether India gets a seat at the table when the real allocation of access begins is the more pressing question.
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
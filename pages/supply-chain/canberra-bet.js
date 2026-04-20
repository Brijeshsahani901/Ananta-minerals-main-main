import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function CaneberraBet() {
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
            src={`${basePath}/assets/minerals_images/canberra.jpg`}
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
                    The US-Australia critical minerals framework and the path ahead
                  </h3>

                  <p className="my-3">
                    The &nbsp;
                    <a
                      href="https://www.industry.gov.au/publications/united-states-australia-framework-securing-supply-mining-and-processing-critical-minerals-and-rare-earths"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      signing of the{" "}
                    </a>{" "}
                    US-Australia Framework for Securing Supply in the Mining and Processing of Critical Minerals and Rare Earths
                    in October 2025 was widely read as a strategic hedge against China's dominance in mineral processing. Six months on, the combined funding commitments from both governments have already reached{" "}
                    <a
                      href="https://www.trademinister.gov.au/minister/don-farrell/media-release/australia-us-critical-minerals-framework-investing-additional-projects"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      $5 billion
                    </a>
                    Australian dollars , exceeding the initial target set at signing. The pace of deployment reflects how rapidly the geopolitical case for the partnership has intensified, driven not only by competition with Beijing, but by a fuel crisis at home that has stripped Australia of any remaining ambiguity about its energy vulnerabilities.
                  </p>

                  <p className="my-3">
                    The bilateral framework, now overseen jointly by Australia's Minister for Resources Madeleine King and the US Interior Secretary, is directing priority investment toward rare earths and critical minerals including nickel, cobalt, gallium, magnesium, vanadium and graphite. The financing architecture runs through Export Finance Australia on the Australian side and the US Export-Import Bank on the American side, with both institutions co-issuing letters of support for individual projects. The Tronox Holdings Rare Earths Refinery Project has attracted coordinated letters of support from each institution for a single project. Additional projects, including EQ Resources's Mt Carbine Tungsten Project and investments in vanadium and scandium, have also received indicative government backing, with both governments committing substantial funding toward the shared project pipeline.
                  </p>

                  <p className="my-3">
                    What makes the timing of this announcement politically charged is that it lands in the middle of the most acute energy emergency Australia has faced in decades. Since late February 2026, the Strait of Hormuz has been largely blocked following US and Israeli strikes on Iran, with Iran's Islamic Revolutionary Guard Corps issuing warnings against passage, launching confirmed attacks on merchant ships, and reportedly laying sea mines in the waterway. Before the crisis, a significant share of the world's seaborne oil trade and global Liquified Natural Gas (LNG) transited through the strait daily. Despite a temporary ceasefire raising hopes of resumption, the US subsequently announced it would begin implementing a blockade of maritime traffic entering and leaving Iranian ports, a move widely expected to deepen existing shortages.
                  </p>

                  <p className="my-3">
                    For Australia, the consequences have been immediate and painful. The country{" "}
                    <a
                      href="https://www.abc.net.au/news/2026-04-14/debunking-four-myths-around-australias-fuel-crisis/106558264"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      sources
                    </a>{" "}
                    the vast majority of its refined fuel from Asian refineries that depend on crude transiting through the Strait of Hormuz, and the disruption has produced a lag effect now biting into domestic availability, with diesel prices surging in capital cities and climbing even higher in remote communities. Australia once operated multiple domestic refineries but now has only two, Ampol's Lytton facility in Brisbane and Viva Energy's Geelong plant, together meeting only a fraction of national needs. Onshore liquid fuel stocks sit well below the International Energy Agency's stockholding obligation, and a portion of that inventory consists of reserves that cannot be practically pumped at scale.
                  </p>

                  <p className="my-3">
                    Australian Prime Minister Albanese's diplomatic sprint through Singapore, Brunei and Malaysia to secure additional refined fuel supplies underscored the structural absurdity at the heart of Australia's position. The{" "}
                    <a
                      href="https://www.theguardian.com/australia-news/2026/apr/10/australia-singapore-fuel-supply-deal-agreement-albanese"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Singapore agreement
                    </a>{" "}
                    guarantees that the city-state will not restrict fuel exports to Australia as long as Singapore has fuel available. It does not guarantee that Singapore will have fuel to spare, because its refinery output depends on the same Strait of Hormuz access that is currently disrupted. The deal protects against a willing supplier choosing to look elsewhere. It offers no protection against the supplier running short.
                  </p>

                  <p className="my-3">
                    This is precisely the context in which the critical minerals framework takes on added weight beyond its stated supply chain objectives. Australia exports vast quantities of energy yet remains structurally dependent on imported liquid fuels, and the Hormuz closure is only the first layer of vulnerability in a chain of maritime chokepoints stretching from the Persian Gulf through the Indonesian archipelago, with the overwhelming majority of Australia's maritime imports moving through these Southeast Asian routes. The minerals deal with Washington is in part a long-term bet that deeper strategic integration with the US translates into an overarching strategic supply and value chain co-dependence, with Australian energy needs resonating with Washington when it mulls policy that may adversely affect its own interest in Oceania.
                  </p>

                  <div className="my-4 text-center">
                    <img
                      src={`${basePath}/assets/minerals_images/canverra-bet.png`}
                      alt="Source: Geosciences Australia/ABC"
                      style={{
                        width: "75%",
                        height : "500px",
                        // maxWidth: "700px",
                        // height: "auto",
                        display: "inline-block",
                      }}
                    />
                    <p className="text-muted mt-2" style={{ fontSize: "0.85rem" }}>
                      Source: Geosciences Australia/ABC
                    </p>
                  </div>


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
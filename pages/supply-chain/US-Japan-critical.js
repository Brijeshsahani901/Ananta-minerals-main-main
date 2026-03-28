import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";

export default function USJapanCritical() {
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
                        src={`${basePath}/assets/minerals_images/us-japan.jpeg`}
                        alt="How the US-Japan critical minerals framework is a template for India"
                        style={{
                            width: "100%",
                            height: "60vh",
                            display: "block",
                            objectFit: "fill",
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
                                        How the US-Japan critical minerals framework is a template for India
                                    </h3>

                                    <p className="my-3">
                                        When Washington and Tokyo formalised their{" "}
                                        <a
                                            href="https://www.whitehouse.gov/briefings-statements/2025/10/united-states-japan-framework-for-securing-the-supply-of-critical-minerals-and-rare-earths-through-mining-and-processing/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            critical minerals framework
                                        </a>{" "}
                                        agreement in October 2025, the immediate commentary focused on what it
                                        meant for the bilateral relationship and what it signalled to Beijing.
                                        That was the right read in the short term, but the more durable
                                        significance of the US-Japan agreement may lie in what it established as
                                        a replicable model for how Pax Silica, the emerging US led critical
                                        minerals order operates, as it draws in new partners and integrates them
                                        into a coherent supply chain architecture. India,{" "}
                                        <a
                                            href="https://www.mea.gov.in/press-releases.htm?dtl/40800/India_Joins_Pax_Silica_Initiative_Signs_the_Joint_Statement_on_IndiaUS_AI_Opportunity_Partnership"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            now part of that order
                                        </a>
                                        , since February 2026, stands to be a major beneficiary of that template.
                                    </p>

                                    <p className="my-3">
                                        The US-Japan framework has moved beyond declarations of intent and
                                        constructed actual mechanisms, coordinated stockpiling arrangements,
                                        rapid response protocols for supply disruptions, joint project financing
                                        through grants, guarantees and equity, and a foundation for binding
                                        plurilateral trade rules. It demonstrated that two nations with distinct
                                        industrial profiles, US's capital and demand on one side and Japan's
                                        processing technology and refining expertise on the other, could be
                                        integrated into a single supply chain architecture with shared standards
                                        and mutual commitments. That proof of concept matters enormously,
                                        because it gives India's involvement in Pax Silica a working model to
                                        extend.
                                    </p>

                                    <p className="my-3">
                                        India's profile within this architecture is, in important respects,
                                        more compelling than Japan's was at the outset. Japan brought
                                        processing capability but little upstream resources. New Delhi brings
                                        both as evident from the reserves of rare earths along India's
                                        coastline, and other{" "}
                                        <a
                                            href="https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2120525&reg=3&lang=2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            critical minerals identified under the National Critical Mineral
                                            Mission
                                        </a>{" "}
                                        give it genuine upstream relevance. India's scale as a manufacturing
                                        economy and the ambition of its energy transition targets give it
                                        substantial downstream demand. And its position within the Quad, already
                                        engaged through the{" "}
                                        <a
                                            href="https://www.mea.gov.in/bilateral-documents.htm?dtl/39733/Joint_Statement_from_the_Quad_Foreign_Ministers_Meeting_in_Washington_DC_July_01_2025"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Quad Critical Minerals Initiative
                                        </a>{" "}
                                        launched in July 2025, means the diplomatic groundwork for deeper
                                        integration has been laid.
                                    </p>

                                    <p className="my-3">
                                        The architecture of coordinated stockpiling, for instance, which was
                                        novel when Washington and Tokyo agreed to develop it together, is now an
                                        established instrument that Pax Silica partnership promises New Delhi.
                                        Joint financing mechanisms, through which US and Japanese government
                                        capital was mobilised alongside private investment to support mineral
                                        projects in third countries, can be redirected toward Indian processing
                                        capacity and overseas acquisition efforts by Indian state-backed firms.
                                        The rapid response protocols designed to manage supply shocks between
                                        the US and Japan can be extended to cover Indian nodes in the same
                                        supply chain.
                                    </p>

                                    <p className="my-3">
                                        Japan's own role within this expanded architecture is worth noting,
                                        having helped design and road-test the model, Tokyo is now a natural
                                        bridge between Washington and New Delhi. Japan's{" "}
                                        <a
                                            href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2162043&reg=3&lang=2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            investment
                                        </a>{" "}
                                        in rare earth refining in Andhra Pradesh, and its broader industrial
                                        partnerships with Indian firms, give it a stake in India's successful
                                        integration into Pax Silica. A stronger Indian minerals sector is not a
                                        competitive threat to Japan within this framework; it is a complementary
                                        asset that deepens the collective resilience of the whole.
                                    </p>

                                    <p className="my-3">
                                        The broader significance is structural, Pax Silica is not simply a
                                        network of bilateral deals; it is an attempt to build a self-reinforcing
                                        system in which allied nations collectively reduce their dependence on
                                        Chinese-controlled mineral supply chains. Each new partner that
                                        integrates meaningfully into that system adds upstream resources,
                                        processing nodes or demand anchors that make the whole more robust.
                                        India's entry, modelled on the US-Japan template but adapted to its
                                        distinct capabilities and geography, represents one of the most
                                        significant elements in the expansion and consolidation of that system.
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
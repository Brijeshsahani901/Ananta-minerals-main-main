import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";

export default function IndianLatin() {
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
                        src={`${basePath}/assets/minerals_images/india-latin.jpg`}
                        alt="Union Budget positions India in the global supply chain with Rare Earths Corridors"
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
                                        India's Critical Minerals Strategy in Latin America
                                    </h3>

                                    <p className="my-3">
                                        India's search for critical minerals is entering a more assertive diplomatic phase, and Latin America is becoming central to that effort. As the global energy transition to greener sources accelerates, minerals such as lithium, copper, cobalt and rare earth elements have shifted from being niche commodities to strategic assets. The International Energy Agency has projected that demand for several energy-transition minerals could <a href="https://www.iea.org/energy-system/industry/critical-minerals" target="_blank" rel="noopener noreferrer">multiply several times</a> over by 2030 under net-zero pathways, intensifying competition for secure and diversified supply. For a country like India, which is simultaneously pursuing rapid economic growth and ambitious electrification targets, ensuring access to these materials is now a core pillar of foreign policy.
                                    </p>

                                    <p className="my-3">
                                        New Delhi's lithium agreement with Argentina marked a watershed moment in this strategy. In 2024, the Indian state-owned firm Khanij Bidesh India Ltd. <a href="https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1996380&reg=3&lang=2" target="_blank" rel="noopener noreferrer">signed</a> an exploration and development agreement with a provincial mining company in Catamarca, giving India its first overseas foothold in lithium extraction. The deal was more than a commercial arrangement; it signalled India's willingness to move upstream in mineral supply chains rather than relying solely on market purchases.
                                    </p>

                                    <p className="my-3">
                                        Much of the world's lithium reserves are <a href="https://hir.harvard.edu/lithium-triangle/" target="_blank" rel="noopener noreferrer">concentrated</a> in the so-called Lithium Triangle of Argentina, Bolivia and Chile. At the same time, processing capacity for lithium, rare earths and battery materials is heavily <a href="https://newlinesinstitute.org/tech-econ-sov-sec/the-silent-cartel-how-chinese-companies-came-to-dominate-critical-mineral-markets/" target="_blank" rel="noopener noreferrer">dominated by China</a>. Beijing's grip over refining and midstream processing has raised concerns in capitals from Washington to Tokyo. For India, which shares a contested border with China and has experienced periodic diplomatic and military tensions, dependence on Chinese-controlled mineral supply chains carries strategic risk. Securing upstream stakes in friendly jurisdictions is therefore as much about geopolitical hedging as it is about industrial planning.
                                    </p>

                                    <p className="my-3">
                                        While Argentina has provided a promising entry point, broadening this engagement across Latin America would give India greater leverage and flexibility. In this context, Brazil stands out as a logical next partner for a formalised critical minerals pact. Brazil is Latin America's largest economy and a major mining powerhouse with reserves spanning niobium, copper, manganese, graphite and rare earth elements. It possesses some of the world's most significant niobium deposits and has been investing in expanding its role in battery materials and value-added processing. For India, which has identified a basket of more than two dozen minerals as critical to its energy transition, Brazil offers diversification beyond lithium into a wider array of strategic inputs.
                                    </p>

                                    <p className="my-3">
                                        A structured mineral partnership with Brazil would align with both countries's broader strategic trajectories. India has been steadily institutionalising its critical minerals policy, from creating a dedicated list of priority minerals to encouraging overseas acquisitions by state-backed and private firms. Brazil, for its part, has been recalibrating its mining framework to attract long-term foreign investment, including in downstream processing and low-carbon extraction technologies. A bilateral pact could encompass joint exploration, offtake agreements, technology sharing and potentially collaboration on refining capacity. Such an arrangement would not only secure supplies for India but also embed it more deeply in Brazil's industrial ecosystem.
                                    </p>

                                    <p className="my-3">
                                        There is also a multilateral dimension to consider. India and Brazil are members of groupings such as BRICS and the G20, where discussions increasingly touch on supply-chain resilience and sustainable development. A critical minerals accord would reinforce Global South cooperation, presenting an alternative to purely Western led mineral alliances such as <a href="https://www.state.gov/pax-silica" target="_blank" rel="noopener noreferrer">Pax Silica</a> which is led by the US. At the same time, India would need to balance this engagement carefully, ensuring that cooperation with Brazil complements, rather than complicates, its ties with other partners in the Indo-Pacific and beyond.
                                    </p>

                                    <p className="my-3">
                                        From a policy perspective, India's outreach to Latin America reflects a recognition that mineral security cannot be an afterthought. The transition to electric mobility, grid-scale storage and renewable energy infrastructure will require predictable and affordable flows of raw materials. India's <a href="https://ibm.gov.in/writereaddata/files/1713089629661bac5d244c8IMYB_2021_Volume_III.pdf" target="_blank" rel="noopener noreferrer">domestic mineral endowment</a> is limited in several key categories. Recycling and substitution will play a role, but they cannot fully offset import dependence in the near to medium term. Overseas partnerships are therefore indispensable.
                                    </p>

                                    <p className="my-3">
                                        A formalised pact with Brazil would also help India mitigate concentration risk. Relying heavily on a single supplier, even a friendly one, exposes the country to political, regulatory or environmental disruptions. Diversifying across Argentina and Brazil, and potentially other Latin American producers, would create a portfolio approach to mineral diplomacy. It would also give Indian firms bargaining power in price negotiations and contract structuring.
                                    </p>

                                    <p className="my-3">
                                        However, such partnerships must be structured with sensitivity to local politics and environmental concerns. Mining projects in the developing world including Latin America often face scrutiny over water use, land rights and community impact. India will need to position itself as a responsible investor, aligning with global standards on sustainability and transparency. Doing so would enhance its credibility as a long-term partner and differentiate it from more extractive models of engagement that China often faces international criticism for.
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
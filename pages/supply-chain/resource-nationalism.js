import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";

export default function ResourceNationalism() {
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
                        src={`${basePath}/assets/minerals_images/resource-nationalism.jpg`}
                        alt="Resource nationalism's grip on global critical minerals supply chains"
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
                                        Resource nationalism's grip on global critical minerals supply chains
                                    </h3>

                                    <p className="my-3">
                                        In an era of green energy transition, critical minerals such as lithium, cobalt, nickel, graphite, and Rare Earth Elements (REE)s fuel everything from Electric Vehicle (EV) batteries to wind turbines and semiconductors. Yet, resource nationalism, where governments prioritize domestic control over foreign investment, is fracturing the global supply chains these minerals depend on. This trend, accelerating since 2020, threatens globally coordinated energy security, inflates costs, and slows decarbonization efforts.
                                    </p>

                                    <p className="my-3">
                                        Resource nationalism manifests in many forms such as export bans, heightened royalties, nationalization of mines, and local content rules. Indonesia's 2020 nickel ore <a href="https://www.lowyinstitute.org/the-interpreter/glimpse-indonesia-s-nickel-policy" target="_blank" rel="noopener noreferrer">export ban</a> exemplifies this. To build a domestic processing industry, Jakarta forced foreign firms like China's Tsingshan to <a href="https://carnegieendowment.org/research/2023/04/how-indonesia-used-chinese-industrial-investments-to-turn-nickel-into-the-new-gold" target="_blank" rel="noopener noreferrer">invest</a> billions in local smelters. Production soared, capturing more value. But globally, it spiked nickel prices, hammering EV makers like Tesla who scrambled for Australian or Canadian alternatives. Smaller players faced shortages, delaying projects.
                                    </p>

                                    <p className="my-3">
                                        China dominates the REE sector as a whole, <a href="https://www.dw.com/en/can-the-west-break-chinas-grip-on-rare-earths/a-74474562" target="_blank" rel="noopener noreferrer">producing 70%</a> of the world's supply and refining over <a href="https://www.reuters.com/world/china/china-tightens-rare-earth-export-controls-2025-10-09/" target="_blank" rel="noopener noreferrer">90% of global REEs</a>. Beijing's 2010 <a href="https://cepr.org/voxeu/columns/revisiting-china-japan-rare-earths-dispute-2010" target="_blank" rel="noopener noreferrer">embargo</a> on Japan, <a href="https://www.csis.org/analysis/chinas-new-graphite-restrictions" target="_blank" rel="noopener noreferrer">2023 graphite export curbs</a> and <a href="https://economictimes.indiatimes.com/industry/indl-goods/svs/metals-mining/india-faces-challenges-in-local-rare-earth-production-amidst-chinas-export-restrictions/articleshow/124834455.cms?from=mdr" target="_blank" rel="noopener noreferrer">2025 export controls on REE processing equipment</a> sales to India are all examples of this dominance in REE value chains being weaponside into strategic geopolitical leverage.
                                    </p>

                                    <p className="my-3">
                                        Due to this coercion, when export licenses tighten, prices surge; neodymium costs <a href="https://asia.nikkei.com/business/markets/commodities/rare-earth-prices-soar-beyond-china-restrictions-as-us-hoards-magnet-materials" target="_blank" rel="noopener noreferrer">jumped 50% in 2024-2025</a> amid US-China tensions. Downstream, this ripples to magnets in EVs and defense tech, eroding supply predictability in these critical sectors.
                                    </p>

                                    <p className="my-3">
                                        Africa's cobalt belt tells a similar story. The Democratic Republic of Congo (DRC) supplies 80% of global cobalt, entwined with <a href="https://www.cfr.org/articles/china-africa-march-2025" target="_blank" rel="noopener noreferrer">Chinese firms controlling 80% of output from its mines</a>. Facing Western scrutiny over child labor and environmental damage, Kinshasa imposed a 2023 <a href="https://www.reuters.com/world/africa/congo-extends-cobalt-export-ban-by-three-months-2025-06-21/" target="_blank" rel="noopener noreferrer">export suspension</a> on raw cobalt, pushing for local refining. While noble from a humanitarian perspective, the ban exposed major vulnerabilities for the global Cobalt supply chain as output dipped, prices hit historic highs, and global battery makers hoarded stocks, inflating costs by 20-30%.
                                    </p>

                                    <p className="my-3">
                                        These policies stem from legitimate grievances, developing nations seek to escape the "resource curse", where raw exports fund little beyond elite corruption. However, this has negative consequences for shared climate goals that affect all countries and people as climate change and degradation is not optimally addressed in an economic environment where beans are being counted over individual national interests.
                                    </p>

                                    <p className="my-3">
                                        Resource nationalism could in aggregate add trillions to net-zero costs globally, through commodity price volatility and delays.
                                    </p>

                                    <p className="my-3">
                                        As mining and processing becomes unsuitable for long term fiscal and climate goals, both governments and companies including tech giants are pivoting to recycling or "landfill mining" to fulfill as much of their critical minerals requirements as possible. Furthermore, alternatives technologies such as Sodium-ion batteries are being sought and adopted to bypass the supply of certain elements, however safe and scaled adoption of these alternatives will require decades of work from governments, regulators, vendors and manufacturers alike.
                                    </p>

                                    <p className="my-3">
                                        Organisations and forums like the United Nations(UN) and its functionaries through its various agencies can serve as reliable go-betweens and consensus builders in a world where colonial legacies and resource exploitation for developing countries remains a sore subject.
                                    </p>

                                    <p className="my-3">
                                        However measures such as India's <a href="https://mines.gov.in/admin/storage/ckeditor/SCHEME_GUIDELINES_02_1759320252.pdf" target="_blank" rel="noopener noreferrer">Production Linked Incentive(PLI)</a> elevate the debate from being focused on corporate profits and modern "just in time" efficiency practices. There is hope that global industrial giants will take appeals for diversification and multi-sourcing seriously, reducing the burden on historically over exploited supplier countries especially in the developing world and would give them time to move beyond the trauma and participate in the global value chains anew.
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
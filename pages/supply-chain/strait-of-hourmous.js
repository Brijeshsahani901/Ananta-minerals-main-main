import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function StraitOfHourmous() {
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
                        src={`${basePath}/assets/minerals_images/strait-of-hourmous.jpg`}
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
                                        Strait Flush: Pentagon's Rush and India's ICET Mineral Play
                                    </h3>

                                    <p className="my-3">
                                        The Pentagon's urgent request for 13 critical minerals, including
                                        tungsten, yttrium, and germanium, made just hours before military
                                        strikes on Iran in early March 2026, has exposed a stark reality, i.e.
                                        one of the world's largest military powers faces{" "}
                                        <a
                                            href="https://www.reuters.com/world/us/pentagon-sought-fresh-supply-13-critical-minerals-day-before-iran-attack-2026-03-04/?utm_source=chatgpt.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            acute supply-chain vulnerabilities
                                        </a>{" "}
                                        during 'Operation Epic Fury.' For India, the crisis arrives at a
                                        precarious moment. As New Delhi pursues ambitious targets in electric
                                        vehicles, defence manufacturing, and renewable energy under its{" "}
                                        <a
                                            href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2160822&reg=3&lang=2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            'Aatmanirbhar Bharat'
                                        </a>{" "}
                                        (self-reliant India) initiative, it confronts an uncomfortable
                                        dependency. China processes over 80% of the world's rare earth
                                        elements, and India imports over{" "}
                                        <a
                                            href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151394&reg=3&lang=2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            53,000 metric tonnes of rare earth element magnets
                                        </a>{" "}
                                        annually. The convergence of Pentagon urgency, Middle Eastern
                                        instability, and China's stranglehold on mineral processing creates
                                        both acute risks and unprecedented opportunities for Indian
                                        policymakers.
                                    </p>

                                    <h4 className="my-3">A Wartime Wake-Up Call?</h4>

                                    <p className="my-3">
                                        The timing of the Pentagon's mineral request is instructive. On March
                                        4, just one day before major military operations against Iran, the U.S.
                                        military{" "}
                                        <a
                                            href="https://www.miningreporters.com/noticia/news/2026/03/pentagon-seeks-us-supply-13-critical-minerals-after-iran-strikes"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            formally asked domestic mining companies to accelerate
                                            supplies of 13 strategic minerals
                                        </a>{" "}
                                        used in semiconductors, weapons systems, and advanced defence platforms.
                                        The list spans arsenic, bismuth, gadolinium, germanium, graphite,
                                        hafnium, nickel, samarium, tungsten, vanadium, and others. This is not
                                        routine procurement; it signals that sustained military operations in
                                        the Middle East have exposed critical gaps in America's own mineral
                                        reserves.
                                    </p>

                                    <p className="my-3">
                                        India's vulnerability mirrors America's, but with a critical
                                        difference. While the U.S. can mobilise domestic production and allied
                                        suppliers, India remains structurally dependent on China for processed
                                        rare earths. India holds{" "}
                                        <a
                                            href="https://ddnews.gov.in/en/with-8-of-worlds-reserves-india-poised-to-play-key-role-in-rare-earth-elements-supply-chain/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            approximately 8% of the world's rare earth reserves
                                        </a>
                                        , yet lacks the downstream processing infrastructure to convert raw ore
                                        into finished magnets and alloys. This asymmetry, abundant raw materials
                                        but absent processing capacity, leaves India exposed to both supply
                                        disruptions and price manipulation.
                                    </p>

                                    <h4 className="my-3">Iran's Indirect Grip on India's Industrial Base</h4>

                                    <p className="my-3">
                                        Beyond rare earths, Iran's geopolitical instability threatens India's
                                        supply of non-metallic minerals critical to cement and steel production.
                                        India{" "}
                                        <a
                                            href="https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2238525&reg=3&lang=2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            historically sourced gypsum and limestone via the Hormuz Strait
                                        </a>
                                        , a chokepoint now fraught with military risk. Disruptions to Persian Gulf
                                        mineral flows would cascade through India's construction and
                                        infrastructure sectors, already stressed by rising costs.
                                    </p>

                                    <p className="my-3">
                                        However, India possesses strategic alternatives.{" "}
                                        <a
                                            href="https://mines.gov.in/admin/download/6433da09a9f741681119753.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Rajasthan
                                        </a>{" "}
                                        holds substantial gypsum reserves, while Oman, a stable Gulf nation,
                                        offers a viable alternative supply route for{" "}
                                        <a
                                            href="https://samataindia.org.in/mici/attachments/article/11/FACTSHEET_Gypsum.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            limestone and other mineral imports
                                        </a>
                                        . Forward-thinking policymakers should accelerate domestic extraction
                                        permits in Rajasthan while negotiating preferential trade agreements
                                        with Oman, reducing exposure to Iran-linked supply shocks.
                                    </p>

                                    <h4 className="my-3">EV Battery Costs Surge Amid Resource Nationalism</h4>

                                    <p className="my-3">
                                        The Iran crisis has triggered a secondary shock with surging prices for
                                        lithium, cobalt, and nickel, the mineral trinity of electric vehicle
                                        batteries. This form of 'resource nationalism,' driven by
                                        conflict-induced supply fears, directly{" "}
                                        <a
                                            href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2117701&reg=3&lang=2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            undermines India's Production-Linked Incentive (PLI) scheme for battery
                                            manufacturing
                                        </a>
                                        . Indian firms would potentially face eroding margins as mineral costs
                                        spike faster than battery prices can adjust, a trend visible in 2022-23.
                                    </p>

                                    <p className="my-3">
                                        The policy response must include strategic stockpiling. India should
                                        establish a National Mineral Reserve, purchasing lithium, cobalt, and
                                        nickel at current elevated prices, counterintuitive, but prudent
                                        insurance against further disruption. Coupled with accelerated domestic
                                        extraction in Kashmir (lithium) and Odisha (nickel), stockpiling creates
                                        a buffer against future geopolitical shocks. While the Ministry of Mines
                                        have introduced ad valorem royalty rates for minerals directly affecting
                                        the automobile manufacturing sector, a balance between domestic and
                                        international push is imperative.
                                    </p>

                                    <h4 className="my-3">US-India Minerals Partnership: A Strategic Opportunity</h4>

                                    <p className="my-3">
                                        Yet the Iran crisis also opens doors. The U.S. Pentagon's urgent
                                        mineral needs create an opportunity for India to position itself as an
                                        alternative supplier of processed minerals. Under the{" "}
                                        <a
                                            href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2062127&reg=3&lang=2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            India-U.S. Comprehensive and Global Strategic Partnership (iCET)
                                            framework
                                        </a>
                                        , New Delhi can negotiate preferential access to U.S. markets for
                                        Indian-processed rare earths, tungsten, and germanium. This transforms
                                        India from a dependent importer into a strategic supplier.
                                    </p>

                                    <p className="my-3">
                                        The Indian Rare Earths Limited (IREL), a government enterprise, has
                                        begun{" "}
                                        <a
                                            href="https://www.irel.co.in/upcoming-projects"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            manufacturing rare earth magnets and metals
                                        </a>
                                        . While still nascent, IREL's expansion, backed by the Rs.280-crore (USD 30.3 million) Rare
                                        Earth Permanent Magnet (REPM) scheme, could position India as a leading
                                        QUAD partner in de-risking supply chains from China.
                                    </p>

                                    <h4 className="my-3">Defence Supply Chains and Indigenous Munitions</h4>

                                    <p className="my-3">
                                        <a
                                            href="https://www.airandspaceforces.com/dod-seeks-to-quell-weapons-concerns-as-white-house-crafts-iran-supplemental/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Finally, the Iran operations have depleted munitions stocks globally,
                                            requiring minerals like hafnium and samarium for precision
                                            weapons.
                                        </a>
                                        India's indigenous defence production, critical to the Central
                                        government's vision of a Rs. 461.7 lakh crores (USD 5 trillion)
                                        economy, depends on securing domestic mineral sources. Without hafnium
                                        for electronics in missiles and samarium for permanent magnets in radar
                                        systems, India cannot achieve true defence self-reliance.
                                    </p>

                                    <h4 className="my-3">Conclusion</h4>

                                    <p className="my-3">
                                        The Pentagon's urgent mineral request and the Iran crisis have exposed
                                        a fundamental truth, i.e. in the 21st century, geopolitical power flows
                                        through mineral supply chains. India faces a choice: remain dependent on
                                        China, or invest decisively in processing capacity, domestic reserves,
                                        and strategic partnerships. The moment is urgent, and the opportunity to
                                        pivot from vulnerability to strategic leverage is real.
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
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
                        src={`${basePath}/assets/minerals_images/helium.jpeg`}
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
                                    <h3 className="my-3 ">
                                        Helium Under Pressure: Invisible Gas, Visible Crisis
                                    </h3>

                                    <p className="my-3">
                                        The Iran Crisis and West Asian escalation have triggered an unlikely but
                                        critical supply shock: helium. Strikes <a href="https://www.reuters.com/business/energy/helium-prices-soar-qatar-lng-halt-exposes-fragile-supply-chain-2026-03-12/?utm_source=chatgpt.com" target="_blank">affecting Qatar's Ras Laffan complex</a>,
                                        a cornerstone of global helium production, have reportedly cut supply by
                                        nearly 5.2 million cubic metres per month, exposing just how fragile
                                        this invisible market is. What appears to be a niche industrial gas has
                                        suddenly become a frontline geopolitical commodity.
                                    </p>

                                    <p className="my-3">
                                        This moment is not incidental. It arrives at the intersection of three
                                        structural pressures: <a href="https://www.kunalganglani.com/blog/helium-shortage-semiconductor-supply-chain/" target="_blank">rising demand&nbsp;</a>
                                        from semiconductor manufacturing and healthcare, extreme geographic
                                        concentration of supply, and the absence of scalable substitutes. For
                                        India, an economy simultaneously expanding its digital infrastructure,
                                        healthcare capacity, and advanced manufacturing ambitions, helium is no
                                        longer peripheral; it is strategic.
                                    </p>

                                    <p className="my-3 fw-bold">Helium in Focus: Scarcity Behind Abundance</p>

                                    <p className="my-3">
                                        Helium itself presents itself as a paradox. It is the second most
                                        abundant element in the universe, yet on Earth, it is rare,
                                        non-renewable, and irreplaceable in critical applications. Extracted
                                        primarily as a byproduct of natural gas processing, helium requires
                                        <a href="https://www.linde-engineering.com/products-and-services/success-stories/2024/icy-travels" target="_blank"> complex cryogenic separation </a>
                                        and specialized transport. Once released, it escapes irreversibly into
                                        the atmosphere.
                                    </p>

                                    <p className="my-3">
                                        Its uses are deeply embedded in high-technology systems. In healthcare,
                                        helium is indispensable for MRI machines, where it enables
                                        superconducting magnets to function at extremely low temperatures. In
                                        semiconductors, it ensures controlled environments for chip fabrication.
                                        Aerospace, nuclear research, fibre optics, and quantum computing all
                                        depend on helium's unique inert and cryogenic properties.
                                    </p>

                                    <p className="my-3">
                                        Production, however, is tightly concentrated. <a href="https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-helium.pdf" target="_blank">The United States dominates global output</a>,
                                        producing roughly 81 million cubic metres in 2025 (about 42.6%),
                                        followed by Qatar (33%), Russia, Algeria, and Canada. This concentration
                                        creates systemic vulnerability. When a single node, like Qatar, faces
                                        disruption, the ripple effects are immediate and global.
                                    </p>

                                    <p className="my-3 fw-bold">
                                        World Production and Reserves of Helium-3 (rare, light, and
                                        non-radioactive isotope of helium considered crucial for nuclear fusion
                                        reactors)
                                    </p>

                                    <div className="table-responsive my-4">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th><strong>Country</strong></th>
                                                    <th><strong>Production 2025 million litres (ML)</strong></th>
                                                    <th><strong>Reserves 2025</strong></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>United States</td>
                                                    <td>81</td>
                                                    <td>8500</td>
                                                </tr>
                                                <tr>
                                                    <td>Algeria</td>
                                                    <td>11</td>
                                                    <td>1800</td>
                                                </tr>
                                                <tr>
                                                    <td>Canada</td>
                                                    <td>6</td>
                                                    <td>NA</td>
                                                </tr>
                                                <tr>
                                                    <td>China</td>
                                                    <td>3</td>
                                                    <td>NA</td>
                                                </tr>
                                                <tr>
                                                    <td>Poland</td>
                                                    <td>3</td>
                                                    <td>24</td>
                                                </tr>
                                                <tr>
                                                    <td>Qatar</td>
                                                    <td>63</td>
                                                    <td>Large (Estimated)</td>
                                                </tr>
                                                <tr>
                                                    <td>Russia</td>
                                                    <td>18</td>
                                                    <td>1700</td>
                                                </tr>
                                                <tr>
                                                    <td>South Africa</td>
                                                    <td>Less than ½ unit</td>
                                                    <td>400</td>
                                                </tr>
                                                <tr>
                                                    <td>World total (rounded)</td>
                                                    <td>190</td>
                                                    <td>NA (unverified)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p className="text-muted small">
                                            <em>Source- USGS 2026 Chapter on Helium and Rare Gases</em>
                                        </p>
                                    </div>

                                    <p className="my-3">
                                        The current crisis illustrates this starkly. Semiconductor hubs such as
                                        <a href="https://www.scmp.com/tech/article/3347005/korea-taiwan-chip-sectors-most-exposed-helium-shortage-amid-middle-east-war-fitch" target="_blank"> South Korea and Taiwan</a>,
                                        heavily reliant on Gulf-sourced helium, face fabrication risks.
                                        Healthcare systems, including those in India, are bracing for cost
                                        spikes and supply constraints. Meanwhile, U.S. producers and industrial
                                        gas giants are <a href="https://www.tradingkey.com/analysis/stocks/us-stocks/261702277-helium-2026-shock-stocks-affected-tradingkey" target="_blank">positioned to benefit from higher prices </a>
                                        and tighter markets. Spot prices are increasing rapidly due to the
                                        sudden disruption in global supply caused by the Iran crisis.
                                    </p>

                                    <p className="my-3 fw-bold ">India Focus: Early Moves, Structural Gaps</p>

                                    <p className="my-3">
                                        India's helium story is still nascent but evolving. The country does not
                                        currently rank among major global producers, but it is beginning to
                                        recognise helium within the broader framework of critical minerals and
                                        strategic resources.
                                    </p>

                                    <p className="my-3">
                                        A key step is the <a href="https://www.indianchemicalnews.com/general/lite/ongc-energy-centre-trust-and-eil-sign-agreement-for-helium-recovery-demonstration-plant-in-tamil-nadu-27174" target="_blank">Helium Recovery Demonstration Plant in Kuthalam, Tamil Nadu</a>,
                                        being developed by ONGC and Engineers India Ltd. With an investment of
                                        approximately USD 4.2 million (INR 39.42 crore), the plant aims to
                                        achieve 99.995% purity and represents India's first serious attempt at
                                        domestic helium extraction and processing. While modest in scale, it
                                        signals intent.
                                    </p>

                                    <p className="my-3">
                                        This initiative aligns with India's <a href="C:\Users\ayanbarman\Library\Containers\com.microsoft.Word\Data\Library\Preferences\AutoRecovery\National Critical Mineral Mission" target="_blank">National Critical Mineral Mission</a>,
                                        which seeks to reduce dependence on imports and build domestic value
                                        chains across strategic resources. Exploration efforts, particularly in
                                        <a href="https://www.nature.com/articles/s41598-020-78906-x" target="_blank"> Rajasthan's Bikaner-Nagaur basin</a>,
                                        are expanding, though helium-specific discoveries remain limited.
                                    </p>

                                    <p className="my-3">
                                        On the financing side, India is leveraging broader innovation
                                        frameworks. <a href="https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=1781859&utm_source=chatgpt.com&reg=3&lang=2" target="_blank">Schemes such as the USD 100 million (INR 945 crore) Startup India Seed Fund</a>
                                        and public-sector R&D funding provide indirect support for deep-tech and
                                        materials research, including gas-processing technologies. However,
                                        there is no dedicated helium-focused funding architecture yet, and given
                                        supply chain chokepoints, India must consider pilots to integrate helium
                                        into broader deep-tech funding solutions and policies.
                                    </p>

                                    <p className="my-3">
                                        The structural challenge is clear: India is entering a market where
                                        supply is geopolitically concentrated, technologically complex, and
                                        capital-intensive. Early-stage efforts are necessary but insufficient.
                                    </p>

                                    <p className="my-3 fw-bold ">The Trade-Offs: Strategic Asset, Structural Constraint</p>

                                    <p className="my-3">
                                        Helium's importance is matched by its limitations. First, it is finite
                                        and non-renewable. Unlike many minerals, helium cannot be recycled once
                                        released, making long-term supply inherently constrained, regardless of
                                        technological progress.
                                    </p>

                                    <p className="my-3">
                                        Second, production is tied to natural gas extraction, meaning helium
                                        supply is indirectly linked to fossil fuel economics and geopolitics. In
                                        the long-term, if energy requirements shift away from hydrocarbons,
                                        however unlikely it may seem now, helium availability may paradoxically
                                        tighten unless dedicated extraction strategies are developed.
                                    </p>

                                    <p className="my-3">
                                        Third, the supply chain is highly geopolitically exposed. The current
                                        crisis underscores how disruptions in West Asia, or sanctions affecting
                                        Russia, can rapidly constrict global availability. This concentration
                                        further enables pricing power among a small group of producers.
                                    </p>

                                    <p className="my-3">
                                        Fourth, logistics are complex. Helium requires specialised storage and
                                        transport, and even under ideal conditions, losses occur through
                                        'boil-off' during transit. This makes long-distance supply chains
                                        inherently inefficient and vulnerable.
                                    </p>

                                    <p className="my-3">
                                        Finally, there is no real substitute. In critical applications such as
                                        cryogenics and semiconductor fabrication, helium is functionally
                                        irreplaceable. This creates a worst-case scenario for import-dependent
                                        economies: high exposure with limited alternatives.
                                    </p>

                                    <p className="my-3 fw-bold">Strategic Pathways: What Should India Do?</p>

                                    <p className="my-3">
                                        The helium challenge is not insurmountable, but it demands early,
                                        coordinated action. Priorities must include-
                                    </p>

                                    <ul className="my-3">
                                        <li>
                                            <strong>Build Strategic Reserves and Storage Capacity</strong><br />
                                            India must treat helium similarly to crude oil by establishing
                                            strategic reserves. Even limited stockpiling can buffer short-term
                                            disruptions, particularly for critical sectors such as healthcare and
                                            semiconductors. This requires investment in storage infrastructure and
                                            procurement strategies during periods of relative price stability.
                                        </li>
                                        <li className="mt-2">
                                            <strong>Accelerate Domestic Recovery and Exploration</strong><br />
                                            Projects similar to the Kuthalam plant must move beyond demonstration
                                            scale. India should expand helium recovery from existing natural gas
                                            fields, particularly through ONGC-led initiatives, and incentivise
                                            exploration in prospective basins. Even a partial domestic supply can
                                            reduce exposure to external shocks.
                                        </li>
                                        <li className="mt-2">
                                            <strong>Secure Long-Term International Contracts</strong><br />
                                            Given structural constraints, India cannot rely solely on domestic
                                            production. Negotiating long-term supply agreements with diversified
                                            partners, including the United States, Algeria, and Canada. Such
                                            contracts would provide stability and reduce dependence on
                                            geopolitically volatile regions.
                                        </li>
                                        <li className="mt-2">
                                            <strong>Invest in Technology and Substitution Pathways</strong><br />
                                            While helium itself has no direct substitute, efficiency improvements
                                            are possible. India must invest in helium recycling technologies,
                                            improved cryogenic systems, and alternative cooling methods where
                                            feasible. Over time, reducing the intensity of use can mitigate demand
                                            pressures.
                                        </li>
                                    </ul>

                                    <p className="my-3 fw-bold ">From Invisible to Indispensable</p>

                                    <p className="my-3">
                                        Helium rarely features in strategic discourse, but it should. The
                                        current crisis has revealed a simple truth: in a technology-driven
                                        economy, even the most invisible inputs can become critical
                                        vulnerabilities.
                                    </p>

                                    <p className="my-3">
                                        For India, the lesson is not just about helium. It is about anticipating
                                        supply-chain risks in emerging sectors before they crystallise into
                                        crises. Helium may not command headlines like lithium or rare earths,
                                        but its role in enabling healthcare, digital infrastructure, and
                                        advanced manufacturing makes it equally indispensable.
                                    </p>


  <p style={{color: "#686868"}}>
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
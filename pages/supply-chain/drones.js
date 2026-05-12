import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function Drones() {
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
                        src={`${basePath}/assets/minerals_images/drones.webp`}
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
                                        Drones and Dependency: How Critical Minerals Shape Combat Power
                                    </h3>

                                    <p className="my-3">
                                        Drones have moved beyond the role of peripheral tools to become a core feature of
                                        contemporary warfare. Their appeal lies in their ability to minimise risk to personnel,
                                        reduce costs compared to crewed aircraft, and deliver a level of precision that
                                        conventional ground operations rarely achieve. What began as a niche capability has
                                        evolved into a defining feature of modern conflict. Recent conflicts have made this
                                        shift unmistakable. The Russia-Ukraine war and tensions involving Iran have brought
                                        drone warfare into sharp public focus, but their use extends far beyond these theatres.
                                        From the{" "}
                                        <a
                                            href="https://horninstitute.org/how-drones-are-redefining-conflicts-in-the-horn-of-africa/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Horn of Africa
                                        </a>{" "}
                                        to{" "}
                                        <a
                                            href="https://acleddata.com/report/war-sky-how-drone-warfare-shaping-conflict-myanmar"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Myanmar
                                        </a>
                                        , drones are now embedded in conflict ecosystems worldwide.{" "}
                                        <a
                                            href="https://insidefpv.com/blogs/blogs/operation-sindoor-rise-drone-warfare-india?srsltid=AfmBOopaUZkhwaJU9AEiIsXT3QQfr2-F81dy5q2kYCO6AONn3PAlOW7H"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            India
                                        </a>
                                        , too, has witnessed their deployment, during Operation Sindoor in May 2025.
                                    </p>

                                    <p className="my-3">
                                        Earlier, aerial operations relied on single platforms or a handful of manually
                                        coordinated units. Each drone required individual control, limiting both coverage and
                                        responsiveness.{" "}
                                        <a
                                            href="https://rareearthexchanges.com/drone-swarms/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Drone swarms
                                        </a>{" "}
                                        have transformed this model. Enabled by distributed sensing, mesh communication
                                        networks, and coordinated task allocation, they scale operations dynamically with the
                                        number of units deployed. If one drone fails, others adjust and continue the mission.
                                        It is not merely a cluster of drones, but a self-organising system that shares
                                        information, follows distributed rules, and adapts collectively with minimal human
                                        intervention.
                                    </p>

                                    <p className="my-3">
                                        Yet even as warfare becomes more technologically sophisticated, one enduring{" "}
                                        <a
                                            href="https://www.tandfonline.com/doi/full/10.1080/01495933.2025.2456427#d1e1027"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            principle
                                        </a>{" "}
                                        remains: mass still matters. Large-scale deployment is essential to sustaining
                                        battlefield advantage. Advanced technologies must be paired with the capacity to
                                        produce and supply them at scale. At the centre of this equation lies a less visible
                                        but decisive factor—critical minerals. Historically as well, access to industrial
                                        materials has shaped military outcomes. In the Second World War, resources like tin
                                        and tungsten underpinned this. Today, despite technological advances, the logic
                                        remains the same: control over material inputs translates into combat power. In the
                                        age of drone warfare, this dependence has become both deeper and more complex.
                                    </p>

                                    <p className="my-3">
                                        Drones rely on a complex mix of{" "}
                                        <a
                                            href="https://www.csis.org/analysis/drone-supply-chain-war-identifying-chokepoints-making-drone"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            materials
                                        </a>{" "}
                                        to function effectively. At the structural level, drone airframes rely heavily on
                                        aluminium-lithium alloys and specialised titanium. Aluminium-lithium enables longer
                                        wings and greater payload margins, while titanium is critical for hard points,
                                        fasteners, landing gear components, and high-temperature or erosive zones. Larger
                                        drones further depend on aluminium-silicon-copper piston alloys, along with steel or
                                        titanium valvetrain components and magnesium castings to reduce weight. At the heart
                                        of propulsion systems are neodymium-iron-boron magnets, which convert electrical
                                        current into lift and torque. Each small drone motor may contain only 5–15 grams of
                                        these magnets, but this scales to tonnes across entire fleets. Drone endurance is
                                        fundamentally limited by battery capacity. Each kilowatt-hour requires significant
                                        quantities of copper, aluminium, graphite, and smaller amounts of lithium, nickel,
                                        cobalt, or manganese. Gallium-nitride power amplifiers enable efficient communications
                                        and radar functions, while infrared sensors depend on compounds such as indium
                                        antimonide and mercury cadmium telluride. Flight controllers, navigation systems, and
                                        datalinks similarly depend on complex semiconductor supply chains.
                                    </p>

                                    <p className="my-3">
                                        The supply chain behind these components is highly concentrated. For example, roughly{" "}
                                        <a
                                            href="https://www.bis.doc.gov/index.php/documents/section-232-investigations/3142-2022-09-fact-sheet-biden-harris-administration-announces-actions-to-secure-rare-earth-element/file"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            90 percent
                                        </a>{" "}
                                        of global sintered magnet production occurs in China. In October 2025, following
                                        President Trump's threat of 100 percent tariffs on Chinese goods, Beijing{" "}
                                        <a
                                            href="https://www.politico.com/news/2025/10/12/china-defiance-trump-100-tariff-00605499"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            signalled
                                        </a>{" "}
                                        it could retaliate by cutting off critical minerals exports. In April 2026, Beijing{" "}
                                        <a
                                            href="https://www.scmp.com/economy/global-economy/article/3351292/china-places-7-eu-entities-export-control-list"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            placed
                                        </a>{" "}
                                        seven EU entities on its export control list, barring them from accessing Chinese
                                        “dual-use” items due to their alleged involvement in arms sales to Taiwan. Together,
                                        these episodes underscore the strategic leverage China wields through its control over
                                        critical minerals and its ability to weaponise supply chains.
                                    </p>

                                    <p className="my-3">
                                        In wartime conditions, these vulnerabilities become acute. High rates of attrition
                                        demand rapid replacement, and even the loss of a single precursor chemical or
                                        specialised alloy can halt production across an entire class of drones. Industrial
                                        resilience, in this context, becomes synonymous with combat power.
                                    </p>

                                    <p className="my-3">
                                        The{" "}
                                        <a
                                            href="https://www.weforum.org/stories/2024/08/critical-minerals-are-the-key-to-21st-century-tech-heres-the-trilemma-that-defines-how-to-mine-them/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            “minerals trilemma”
                                        </a>{" "}
                                        captures the core challenge policymakers face in designing mineral strategies:
                                        balancing three competing priorities that are often in tension. Advancing one of these
                                        objectives frequently comes at the expense of the others.
                                    </p>

                                    <ul className="my-3">
                                        <li>
                                            <strong>First is security:</strong> the need to ensure reliable access to critical
                                            minerals and maintain strategic autonomy.
                                        </li>
                                        <li>
                                            <strong>Second is cost:</strong> keeping resources affordable and supply chains
                                            economically viable.
                                        </li>
                                        <li>
                                            <strong>Third is sustainability:</strong> ensuring that extraction and processing
                                            meet environmental and social standards.
                                        </li>
                                    </ul>

                                    <p className="my-3">
                                        Given the{" "}
                                        <a
                                            href="https://www.tandfonline.com/doi/full/10.1080/01495933.2025.2456427#d1e1027"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            dual-use
                                        </a>{" "}
                                        nature of many critical minerals and the evolving character of warfare, the challenge
                                        of securing stable and resilient supply chains while balancing competing demands from
                                        civilian sectors also exists.
                                    </p>

                                    <p className="my-3">
                                        Crucially, the defence sector's reliance on critical minerals remains partially
                                        obscured by its classified nature. This opacity complicates efforts to assess
                                        vulnerabilities across supply chains. A national-level{" "}
                                        <a
                                            href="https://www.csis.org/analysis/drone-supply-chain-war-identifying-chokepoints-making-drone"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            database
                                        </a>{" "}
                                        linking defence acquisition programmes to their underlying material dependencies could
                                        help address this gap by mapping exposure to specific critical minerals and processing
                                        stages before crises reveal them. Without such visibility, strategic planning risks
                                        being reactive rather than anticipatory.
                                    </p>

                                    <p className="my-3">
                                        Policy responses are now emerging. The United States is set to implement{" "}
                                        <a
                                            href="https://www.morningstar.com/news/pr-newswire/20260311ln07828/the-drone-revolutions-dependence-on-chinese-rare-earth-processing-oilpricecom-market-commentary"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            new defence procurement rules
                                        </a>{" "}
                                        from January 2027 that will effectively exclude Chinese-origin rare earth materials
                                        from military systems, forcing the development of alternative supply chains. In
                                        Europe, countries including France, Germany, Poland, the United Kingdom, and Italy are{" "}
                                        <a
                                            href="https://www.taipeitimes.com/News/world/archives/2026/02/22/2003852695"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            collaborating
                                        </a>{" "}
                                        to build low-cost air defence systems and autonomous drones, drawing on lessons from
                                        Ukraine.
                                    </p>

                                    <p className="my-3">
                                        India, too, has been responding to these challenges. Initiatives such as the
                                        Production Linked Incentive{" "}
                                        <a
                                            href="https://www.theweek.in/news/defence/2026/04/17/the-drone-dilemma-india-isnt-talking-about.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            scheme
                                        </a>{" "}
                                        and the proposed{" "}
                                        <a
                                            href="https://insidefpv.com/blogs/blogs/mission-drone-shakti?srsltid=AfmBOoqZFhZKtI321xn-Oy19AK1Nkn14Ee5wuAvv_qfA63d10vW4-pL0"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Mission Drone Shakti
                                        </a>{" "}
                                        which is estimated to set aside Rs 1,600–1,800 crore, aim
                                        to strengthen domestic manufacturing across key components like motors, sensors,
                                        batteries, and control systems. These efforts signal a broader recognition that
                                        technological capability must be matched by supply chain sovereignty.
                                    </p>

                                    <p className="my-3">
                                        Ultimately, drone warfare is only as effective as the supply chains that sustain it.
                                        As conflicts demand scale and rapid replacement, securing resilient material inputs
                                        becomes central to military readiness. The battlefield, therefore, extends far beyond
                                        the frontlines: to mines, refineries, and factories that determine whether production
                                        can keep pace with attrition.
                                    </p>


                                    <p style={{color: "#686868"}}>
                                        Copyright ©️ 2025 by Ananta Aspen Centre<br/>
                                            This text is protected by copyright and may not be reproduced, distributed, or modified without permission
                                    </p>
                                    <Card
                                        className="p-4 mt-5 shadow-sm"
                                        style={{
                                            backgroundColor: "#fff6f6",
                                            borderRadius: "10px",
                                        }}
                                    >
                                        <div className="d-flex flex-column flex-md-row align-items-start gap-4 mb-4">
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
                                                    overflow: "hidden",
                                                    flexShrink: 0,
                                                }}
                                            >
                                                <img
                                                    src={`${basePath}/assets/img/maitreyee.jpg`}
                                                    alt="Maitrayee Jha"
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                    onError={(e) => {
                                                        e.target.style.display = "none";
                                                        e.target.nextSibling.style.display = "flex";
                                                    }}
                                                />
                                                <FaUserCircle
                                                    size={60}
                                                    color="#2F4156"
                                                    style={{ display: "none" }}
                                                />
                                            </div>

                                            {/* Bio */}
                                            <div>
                                                <div className="d-flex align-items-center mb-2 gap-2">
                                                    <h5 className="mb-0 fw-semibold text-dark">
                                                        Maitrayee Jha
                                                    </h5>
                                                    <Badge bg="success" pill>
                                                        Author
                                                    </Badge>
                                                </div>
                                                <p
                                                    className="text-muted mb-0"
                                                    style={{ lineHeight: 1.6 }}
                                                >
                                                    Maitrayee Jha is a Programme Executive at the Ananta
                                                    Centre. She holds a Master's degree in Conflict
                                                    Analysis and Peace Building from Jamia Millia Islamia,
                                                    as well as a postgraduate diploma in Conflict
                                                    Transformation and Peace Building from Lady Shri Ram
                                                    College, University of Delhi. She earned her
                                                    Bachelor's (Honours) degree in Philosophy, with a
                                                    minor in Political Science, from Miranda House,
                                                    University of Delhi.
                                                </p>
                                            </div>
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
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function AsiaPlaybook() {
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
            src={`${basePath}/assets/minerals_images/asia-playbook.jpg`}
            alt="Asia's Critical Minerals Playbook and India's Role"
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
                  <h2 className="my-3">
                    From Reserves to Riches: Asia's Critical Minerals Playbook
                    and India's Role
                  </h2>

                  <p className="my-3">
                    India has ambitious plans to turn its rich mineral reserves
                    into a strategic strength. Despite hosting about{" "}
                    <span style={{ color: "blue" }}>6.3%</span> of global
                    rare-earth reserves and being a top-five graphite producer,
                    India relies heavily on imports for its critical minerals.
                    In <span style={{ color: "blue" }}>2023</span>, it met
                    roughly <span style={{ color: "blue" }}>80%</span> of its
                    lithium and cobalt needs and{" "}
                    <span style={{ color: "blue" }}>90%</span> of its rare-earth
                    demand through imports. To address this gap, New Delhi
                    launched the{" "}
                    <span style={{ color: "blue" }}>
                      'National Critical Minerals Mission'
                    </span>{" "}
                    (NCMM) in{" "}
                    <span style={{ color: "blue" }}>January 2025</span> (initial
                    budget <span style={{ color: "blue" }}>₹16,300 cr</span>) to
                    boost exploration, processing and recycling. Customs duties
                    have been slashed or eliminated on many critical metals
                    (e.g., <span style={{ color: "blue" }}>25 minerals</span>,
                    such as lithium, REEs, and nickel, now face zero duty), and
                    schemes are in the works to incentivise domestic processing.
                  </p>

                  <h3 className="my-3">
                    Japanese and Korean Investment in India
                  </h3>

                  <p className="my-3">
                    India's policy drive has attracted leading East Asian firms.{" "}
                    <span style={{ color: "blue" }}>Japan's Toyota Tsusho</span>{" "}
                    has been a pioneer: its subsidiary,{" "}
                    <span style={{ color: "blue" }}>
                      Toyotsu Rare Earths India (TREI)
                    </span>
                    , operates in{" "}
                    <span style={{ color: "blue" }}>Andhra Pradesh</span>,
                    refining rare-earth oxides (lanthanum, neodymium, etc.) for
                    export to Japan's EV and tech industries. Japan's trading
                    houses are also scouting India's resources:
                    <span style={{ color: "blue" }}>
                      {" "}
                      Sojitz and Mitsui
                    </span>{" "}
                    have begun evaluating joint mining/processing ventures in
                    India's mineral-rich eastern corridor. At the governmental
                    level, India and Japan signed a cooperation{" "}
                    <span style={{ color: "blue" }}>MoU in August 2025</span> to
                    strengthen supply chains for critical minerals and support
                    sustainable resource development.
                  </p>

                  <p className="my-3">
                    Korean firms are likewise stepping up.{" "}
                    <span style={{ color: "blue" }}>
                      LG Energy Solution (LGES)
                    </span>{" "}
                    has inked an initial agreement with India's{" "}
                    <span style={{ color: "blue" }}>JSW Energy</span> to build a
                    <span style={{ color: "blue" }}>
                      {" "}
                      $1.5 billion, 10 GWh EV battery plant in India
                    </span>
                    .<span style={{ color: "blue" }}> POSCO</span> (South
                    Korea's steel giant) has explored India's lithium and steel
                    sectors and participates in regional battery forums.
                    Broadly, South Korea's policy (such as its aggressive
                    tech-industry incentives) complements India's goals of
                    localising battery supply chains.
                  </p>

                  <p className="my-3">
                    Domestic conglomerates are getting involved too, with India
                    weaving together Asian partnerships. Japan brings refining
                    technology and market offtake, Korea brings battery
                    know-how, and India offers raw materials and growing demand.
                    These collaborations are encouraged by supportive policies
                    in all countries, such as Japan's{" "}
                    <span style={{ color: "blue" }}>
                      Yen 2 trillion Supply Chain Diversification Programme
                    </span>{" "}
                    and{" "}
                    <span style={{ color: "blue" }}>
                      2022 Economic Security Act
                    </span>{" "}
                    provide subsidies and insurance for projects abroad—and by
                    India's relaxed FDI rules (
                    <span style={{ color: "blue" }}>
                      100% automatic for minerals
                    </span>
                    ) and fast-tracked clearances.
                  </p>

                  <h3 className="my-3">Lessons from Indonesia and Malaysia</h3>

                  <p className="my-3">
                    India's neighbours offer useful contrasts.{" "}
                    <span style={{ color: "blue" }}>Indonesia</span>, sitting on
                    the world's largest nickel reserves, has long pursued a
                    strict downstream strategy. Since{" "}
                    <span style={{ color: "blue" }}>2014</span>, it has banned
                    raw nickel exports and mandated onshore smelting. These
                    policies unleashed a torrent of investment, mostly Chinese,
                    into Indonesian smelters and refineries. As a result,
                    Indonesia's processed-nickel exports jumped from about{" "}
                    <span style={{ color: "blue" }}>
                      $1 billion in 2015 to roughly $30 billion by 2022
                    </span>
                    . The government's{" "}
                    <span style={{ color: "blue" }}>
                      2025 mining-law amendments
                    </span>
                    go further: miners must give priority to selling into local
                    industries, and new licenses favour firms that build
                    domestic refining capacity. Indonesia is even attracting EV
                    production: in <span style={{ color: "blue" }}>2024</span>,
                    it opened Southeast Asia's first electric-vehicle battery
                    plant (a{" "}
                    <span style={{ color: "blue" }}>
                      $1 billion Hyundai/LG consortium project
                    </span>
                    ) to tap its nickel and cobalt. The lesson for India is
                    clear: streamlined regulations and clear domestic sales
                    rules can mobilise capital into refining and downstream
                    plants, turning raw ore into high-value products at home.
                  </p>

                  <p className="my-3">
                    <span style={{ color: "blue" }}>Malaysia</span> has
                    similarly leveraged policy to boost processing. Despite
                    about{" "}
                    <span style={{ color: "blue" }}>16.1 million tonnes</span>{" "}
                    of rare-earth deposits, Malaysia long lacked the technology
                    to exploit them. Today, its government is courting
                    investment to change that. In late{" "}
                    <span style={{ color: "blue" }}>2025</span>, Prime Minister{" "}
                    <span style={{ color: "blue" }}>Anwar Ibrahim</span>
                    announced plans for a{" "}
                    <span style={{ color: "blue" }}>
                      600-million-ringgit (USD 140 million)
                    </span>{" "}
                    neodymium-magnet plant to be built in{" "}
                    <span style={{ color: "blue" }}>Pahang</span> by Australia's{" "}
                    <span style={{ color: "blue" }}>Lynas Rare Earths</span> and
                    Korea's <span style={{ color: "blue" }}>JS Link</span>. This{" "}
                    <span style={{ color: "blue" }}>3,000-tonne per year</span>{" "}
                    facility will enable Malaysia to add value to its rare-earth
                    output. Such projects, alongside talks on U.S. and Chinese
                    cooperation deals, signal Malaysia's push for a diversified
                    critical-minerals network. India can draw inspiration from
                    this—public-private megaprojects, with outside tech, and
                    incentives for specialised plants helped Southeast Asian
                    nations capture downstream value.
                  </p>

                  <h3 className="my-3">India's Position</h3>

                  <p className="my-3">
                    India is positioning itself as a new hub in Asia's critical
                    mineral landscape. Policies like the{" "}
                    <span style={{ color: "blue" }}>NCMM</span>, duty waivers,
                    and local-content rules are driving a flurry of deals.
                    Already, Japanese and Korean companies are lining up to
                    invest in Indian refining, batteries and magnet plants,
                    often in partnership with Indian firms. At the same time,
                    India is studying its neighbours' playbooks. Indonesia's
                    nickel-upgrading mandates and Malaysia's rare-earth
                    partnerships offer models for building regional supply-chain
                    resilience. Success will depend on translating today's
                    frameworks and MOUs into bankable projects, combining
                    Japan's technology and Korea's battery prowess with India's
                    resource base, while adopting streamlined, ESG-friendly
                    rules like those that have fuelled investment in Indonesia
                    and Malaysia. If it does, India can strengthen not only its
                    own mineral security but that of the entire region.
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
                        to enhancing India’s role in global governance and
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

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
                  <h3 className="my-3">
                    From Reserves to Riches: Asia's Critical Minerals Playbook
                    and India's Role
                  </h3>

                  <p className="my-3">
                    India has ambitious plans to turn its rich mineral reserves
                    into a strategic strength. Despite hosting about 6.3% of
                    global rare-earth reserves and being a top-five graphite
                    producer, India relies heavily on imports for its critical
                    minerals. In 2023, it met roughly 80% of its lithium and
                    cobalt needs and 90% of its rare-earth demand through
                    imports. To address this gap, New Delhi launched the{" "}
                    <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2120525"
                      target="_blank"
                    >
                      'National Critical Minerals Mission'
                    </a>{" "}
                    (NCMM) in January 2025 (initial budget ₹16,300 cr) to boost
                    exploration, processing and recycling. Customs duties have
                    been slashed or eliminated on many{" "}
                    <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2035601"
                      target="_blank"
                    >
                      critical metals{" "}
                    </a>
                    (e.g.,25 minerals, such as lithium, REEs, and nickel, now
                    face zero duty), and schemes are in the works to incentivise
                    domestic processing.
                  </p>

                  <h4 className="my-3">
                    Japanese and Korean Investment in India
                  </h4>

                  <p className="my-3">
                    India's policy drive has attracted leading East Asian firms.{" "}
                    Japan's Toyota Tsusho has been a pioneer: its subsidiary,{" "}
                    Toyotsu Rare Earths India (TREI) ,{" "}
                    <a href="https://trei.co.in/about.html" target="_blank">
                      {" "}
                      operates in Andhra Pradesh
                    </a>
                    , refining rare-earth oxides (lanthanum, neodymium, etc.)
                    for export to Japan's EV and tech industries. Japan's
                    trading houses are also scouting India's resources:
                    <a
                      href="https://www.japancalling.in/post/india-japan-critical-minerals-strategic-partnership-indo-pacific"
                      target="_blank"
                    >
                      {" "}
                      Sojitz and Mitsui
                    </a>{" "}
                    have begun evaluating joint mining/processing ventures in
                    India's mineral-rich eastern corridor. At the governmental
                    level, India and Japan signed a cooperation{" "}
                    <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2162043"
                      target="_blank"
                    >
                      MoU in August 2025
                    </a>{" "}
                    to strengthen supply chains for critical minerals and
                    support sustainable resource development.
                  </p>

                  <p className="my-3">
                    Korean firms are likewise stepping up. LG Energy Solution
                    (LGES) has inked an initial agreement with India's JSW
                    Energy to build a{" "}
                    <a
                      target="_blank"
                      href="https://www.business-standard.com/companies/news/lg-energy-solution-jsw-discuss-1-5-bn-ev-battery-manufacturing-venture-124121700817_1.html"
                    >
                      $1.5 billion, 10 GWh EV battery plant in India
                    </a>{" "}
                    .POSCO (South Korea's steel giant) has{" "}
                    <a
                      target="_blank"
                      href="https://www.just-auto.com/news/posco-invests-us765m-in-australian-lithium-jv-with-minres/"
                    >
                      {" "}
                      explored India's lithium and steel sectors and
                      participates
                    </a>{" "}
                    in regional battery forums. Broadly, South Korea's policy
                    (such as its aggressive tech-industry incentives)
                    complements India's goals of localising battery supply
                    chains.
                  </p>

                  <p className="my-3">
                    Domestic conglomerates are getting involved too, with India
                    weaving together Asian partnerships. Japan brings refining
                    technology and market offtake, Korea brings battery
                    know-how, and India offers raw materials and growing demand.
                    These collaborations are encouraged by supportive policies
                    in all countries, such as Japan's{" "}
                    <a
                      href="https://www.eria.org/uploads/India-ASEAN-Japan-Cooperation-for-Diversified-Resilient-Supply-Chains.pdf"
                      target="_blank"
                    >
                      Yen 2 trillion Supply Chain Diversification Programme
                    </a>{" "}
                    and 2022 Economic Security Act provide subsidies and
                    insurance for projects abroad—and by India's{" "}
                    <a
                      href="https://www.india-briefing.com/news/india-fdi-tracker-2025-38140.html/"
                      target="_blank"
                    >
                      {" "}
                      relaxed FDI rules{" "}
                    </a>{" "}
                    ( 100% automatic for minerals ) and fast-tracked clearances.
                  </p>

                  <h4 className="my-3">Lessons from Indonesia and Malaysia</h4>

                  <p className="my-3">
                    India's neighbours offer useful contrasts. Indonesia,
                    sitting on the world's largest nickel reserves, has long
                    pursued a strict downstream strategy. Since 2014, it has
                    banned raw nickel exports and mandated onshore smelting.
                    These policies unleashed a torrent of investment, mostly
                    Chinese, into Indonesian smelters and refineries. As a
                    result, Indonesia's processed-nickel exports jumped from
                    about{" "}
                    <a
                      href="https://insg.org/wp-content/uploads/2024/09/publist_The-World-Nickel-Factbook-2024.pdf"
                      target="_blank"
                    >
                      $1 billion in 2015 to roughly $30 billion by 2022
                    </a>
                    . The government's 2025{" "}
                    <a
                      target="_blank"
                      href="https://www.aseanbriefing.com/news/indonesias-mining-law-amendments-boosting-the-domestic-mineral-market/"
                    >
                      mining-law
                    </a>{" "}
                    amendments go further: miners must give priority to selling
                    into local industries, and new licenses favour firms that
                    build domestic refining capacity. Indonesia is even
                    attracting EV production: in 2024, it opened Southeast
                    Asia's first electric-vehicle battery plant ({" "}
                    <a
                      target="_blank"
                      href="https://www.investmentmonitor.ai/news/hyundai-and-lg-opens-ev-battery-facility-in-indonesia/"
                    >
                     a $1 billion Hyundai/LG consortium project
                    </a>
                    ) to tap its nickel and cobalt. The lesson for India is
                    clear: streamlined regulations and clear domestic sales
                    rules can mobilise capital into refining and downstream
                    plants, turning raw ore into high-value products at home.
                  </p>

                  <p className="my-3">
                    Malaysia has similarly leveraged policy to boost processing.
                    Despite about 16.1 million tonnes of rare-earth deposits,
                    Malaysia long lacked the technology to exploit them. Today,
                    its government is courting investment to change that. In
                    late 2025, Prime Minister Anwar Ibrahim announced plans for
                    a{" "}
                    <a
                      href="https://www.csis.org/analysis/developing-rare-earth-processing-hubs-analytical-approach"
                      target="_blank"
                    >
                      600-million-ringgit
                    </a>{" "}
                    (USD 140 million) neodymium-magnet plant to be built in{" "}
                    Pahang by Australia's Lynas Rare Earths and Korea's JS Link.
                    This 3,000-tonne per year facility will enable Malaysia to
                    add value to its rare-earth output. Such projects, alongside
                    talks on U.S. and Chinese cooperation deals, signal
                    Malaysia's push for a diversified critical-minerals network.
                    India can draw inspiration from this—public-private
                    megaprojects, with outside tech, and incentives for
                    specialised plants helped Southeast Asian nations capture
                    downstream value.
                  </p>

                  <h4 className="my-3">India's Position</h4>

                  <p className="my-3">
                    India is positioning itself as a new hub in Asia's critical
                    mineral landscape. Policies like the{" "}
                    NCMM, duty waivers,
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

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function DeepSeaMinerals() {
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
            src={`${basePath}/assets/minerals_images/deep-sea-minerals.jpg`}
            alt="Beneath the Surface: India's Ambition in Deep-Sea Minerals"
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
                    Beneath the Surface: India's Ambition in Deep-Sea Minerals
                  </h3>

                  <p className="my-3">
                    The global shift from fossil fuels to clean energy has
                    sharply increased the demand for critical minerals. As the
                    world accelerates toward renewable energy, electric
                    mobility, and advanced manufacturing, deep-sea mineral
                    deposits are emerging as a promising new frontier. According
                    to the USGS, if deep-ocean mining evolves at a pace similar
                    to offshore oil production, it could meet nearly
                    35–45% of global critical-mineral demand by
                    <a target="_blank" href="https://theoregongroup.com/investment-insights/deep-sea-mining-is-coming-whether-the-environmental-lobby-like-it-or-not/?utm_source=chatgpt.com"> 2065</a>.
                  </p>

                  <h4 className="my-3">
                    But What is Deep Sea Mining?
                  </h4>

                  <p className="my-3">
                    Deep sea mining involves the exploration and potential
                    extraction of mineral-rich deposits located on the ocean
                    floor. Three major resource types available on ocean floor
                    are:
                  </p>

                  <ul className="my-3" style={{ paddingLeft: "20px" }}>
                    <li className="mb-2">
                     <strong> <a href="https://www.gao.gov/blog/deep-sea-mining-could-help-meet-demand-critical-minerals,-also-comes-serious-obstacles?utm_source=chatgpt.com" target="_blank">Polymetallic Nodules (PMN):</a> </strong> Potato-sized
                      deposits rich in manganese, nickel, copper, cobalt, and
                      some rare earth elements, typically found on abyssal
                      plains such as the Clarion–Clipperton Zone (CCZ) and the
                      Central Indian Ocean Basin (CIOB).
                    </li>
                    <li className="mb-2">
                      <strong>Polymetallic Sulphides (PMS):</strong> Copper-,
                      zinc-, gold-, and silver-bearing deposits formed at
                      hydrothermal vent systems along mid-ocean ridges.
                    </li>
                    <li className="mb-2">
                      <strong>Cobalt-rich Ferromanganese Crusts (CFC):</strong>{" "}
                      Hard crusts on seamounts enriched with cobalt, nickel,
                      platinum, and rare earth elements.
                    </li>
                  </ul>

                  <p className="my-3">
                    In India's maritime zones, the Ministry of Mines is the
                    nodal authority for offshore mineral resources. In
                    international waters, all exploration or mining activity
                    requires clearance from the International Seabed Authority
                    (ISA). The most active global exploration region in the
                    international waters is the{" "}
                    <a href="https://www.usgs.gov/publications/deep-ocean-polymetallic-nodules-and-cobalt-rich-ferromanganese-crusts-global-ocean-new?utm_source=chatgpt.com" target="_blank">
                      Clarion–Clipperton Zone
                    </a>
                    , where USGS assessments estimate over{" "}
                    <span>21 billion tonnes</span> of polymetallic nodules.
                  </p>

                  {/* Deep sea mining image */}
                  <div className="text-center my-4">
                    <img
                      src={`${basePath}/assets/map.png`}
                      alt="Deep Sea Mining Regions"
                      style={{
                        width: "100%",
                        // maxWidth: "800px",
                        height: "500px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      }}
                    />
                  </div>

                  <p className="my-3">
                    The next promising zone in international water for
                    exploration and mining is the Central Indian Ocean Basin
                    (CIOB). The ISA has allocated a{" "}
                    75,000 sq km block
                    estimated to contain approximately{" "}
                    <a href="https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=170138" target="_blank">
                      380 million tonnes of PMN
                    </a>
                    , including significant quantities of nickel, copper,
                    cobalt, and manganese. Even utilising 10% of this reserve
                    could support India's long-term energy requirements for
                    decades.
                  </p>
                  <ul
                    style={{
                      marginTop: "-6px",
                      marginBottom: "18px",
                      lineHeight: "1.6",
                    }}
                  >
                    <li>4.7 Mt Nickel</li>
                    <li>4.29 Mt Copper</li>
                    <li>0.55 Mt Cobalt</li>
                    <li>92.59 Mt Manganese</li>
                  </ul>
                  <p className="my-3">
                    In September 2025,
                    India strengthened its deep-sea mineral portfolio by signing
                    a 15-year ISA contract to explore a{" "}
                    
                      10,000 sq km PMS block
                  
                    on the <a target="_blank" href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2168923&&utm_source=chatgpt.com" >Carlsberg Ridge</a>—believed to host
                    Iron, Copper-, Zinc-, Gold-, Platinum and Silver-rich
                    sulphides. With these two contracts (Polymetallic Nodules in
                    Central Indian Ocean Basin + Polymetallic Sulphides on
                    Carlsberg Ridge), India is one of the very few countries
                    with multiple ISA exploration licences spanning different
                    mineral types and the only one to hold two contracts in the
                    Indian Ocean.
                  </p>

                  <h4 className="my-3">
                    India's Technological Capabilities
                  </h4>

                  <p className="my-3">
                    Under the <a target="_blank" href="https://www.pib.gov.in/PressNoteDetails.aspx?ModuleId=3&&NoteId=155043&&id=155043&&utm_source=chatgpt.com">Deep Ocean Mission</a> and the{" "}
                    <a target="_blank" href="https://www.isro.gov.in/Samudrayaan_Project.html?utm_source=chatgpt.com">Samudrayaan Project</a>, India is developing a
                    full technology stack for deep-sea operations. The
                   Matsya-6000 crewed submersible—a three-person titanium
                    sphere rated for 6,000 m depth—has completed major
                    milestones, including successful wet tests to 500 m in 2025
                    and fabrication of the personnel sphere after over{" "}<a target="_blank" href="https://timesofindia.indiatimes.com/india/india-develops-personnel-sphere-completes-welding-on-submersible-after-700-trials/articleshow/122867246.cms?utm_source=chatgpt.com">
                    700 welding trials. </a>
                    Indian aquanauts have also completed deep-dive training
                    missions to ~5,000 m, generating valuable scientific data
                    for emerging blue-economy applications.
                  </p>

                  <p className="my-3">
                    India's engineering capabilities continue to advance
                    rapidly. In{" "}
                    October 2024, the
                    National Institute of Ocean Technology (NIOT) deployed{" "}
                    <a target="_blank" href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2003456">Varaha-3</a> in the Andaman Sea at 1,193 m
                    depth, successfully collecting polymetallic nodules rich in
                    nickel, cobalt and copper—marking a major milestone in
                    domestic mining R&D. NIOT is developing crawler-based
                    collectors, pumping systems, and riser technologies to
                    enable operations at 5,000–6,000 m, supported by autonomous
                    underwater vehicles, ROVs, acoustic communications, and
                    hydrophone-based links successfully tested over 5.5 km.
                  </p>

                  <h4 className="my-3">
                    Global Leaders and India's Position
                  </h4>

                  <p className="my-3">
                    Globally, several nations and companies have demonstrated
                    advanced deep-sea mining technologies.{" "}
                    <a target="_blank" href="https://investors.metals.co/news-releases/news-release-details/tmc-and-allseas-achieve-historic-milestone-nodules-collected/?utm_source=chatgpt.com">The Metals Company (TMC)</a> and Allseas
                     completed an integrated pilot mining campaign in the Clarion
                    Clipperton Zone in 2022, marking the most advanced
                    end-to-end demonstration to date. Japan's
                    <a target="_blank" href="https://onepetro.org/ISOPEIOPEC/proceedings-abstract/ISOPE19/ISOPE19/ISOPE-I-19-655/21181"> JOGMEC</a> successfully tested continuous ore
                    lifting from sulphide fields in 2017 near Okinawa, producing
                    concentrate suitable for smelting. Countries such as China,
                    Korea, Germany, Belgium and France operate highly capable
                    deep-sea fleets and prototypes, with multiple small-scale
                    tests already performed.
                  </p>

                  <h4 className="my-3">
                    India's Next Steps: Policy and Technology Pathway
                  </h4>

                  <p className="my-3">
                    India's roadmap includes commissioning{" "}
                    <a href="https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2104039&&utm_source=chatgpt.com" target="_blank">Matsya-6000</a> for
                    scientific dives to 6,000 m, expanding integrated tests of
                    mining systems (crawler + pump + riser), and progressing
                    toward a pilot nodule-recovery trial in the CIOB.
                    Metallurgical development remains crucial: India previously
                    built a pilot plant with{" "}
                    <a href="https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=90533&&utm_source=chatgpt.com" target="_blank">
                      Hindustan Zinc Ltd (PIB 2017)
                    </a>{" "}
                    to process 500 kg/day of nodules for nickel-copper-cobalt
                    extraction, though updates since then have been limited.
                  </p>

                  <p className="my-3">
                    Following the successful Varaha-3 trial, NIOT's next phase
                    includes geological surveys with the Geological Survey of
                    India (GSI) and a second Varaha-3 deployment to validate
                    nodule collection, sizing, and test pumping—key steps toward
                    an integrated mining demonstration.
                  </p>

                  <p className="my-3">
                    India currently stands in the "advanced R&D / demonstration"
                    tier: ahead of many developing states but not yet at the
                    level of players that have completed full pilot mining
                    campaigns at scale.
                  </p>

                  <p className="my-3">
                    Unlike the Pacific, where consortia like{" "}
                    <a target="_blank" href="https://www.miningstockeducation.com/2022/10/tmc-and-allseas-achieve-historic-milestone-nodules-collected-from-the-seafloor-and-lifted-to-the-production-vessel-using-4-km-riser-during-pilot-trials-in-the-clarion-clipperton-zone-for-fi/?utm_source=chatgpt.com">
                      The Metals Company
                    </a>{" "}
                    attract direct foreign capital, India's Deep Ocean Mission
                    remains largely state-funded. India's next step in deep-sea
                    minerals cannot be only about state-led exploration; it has
                    to be about building a competitive ecosystem around it.
                    Having secured ISA exploration areas and demonstrated
                    serious R&D under the Deep Ocean Mission, India is now in a
                    position to carefully open the door to private
                    participation—starting not on the seabed, but on land, in
                    domestic processing and downstream value-addition of
                    polymetallic nodules (PMN) and polymetallic sulphides (PMS).
                  </p>

                  <p className="my-3">
                    Pilot plants abroad already show what is possible: The
                    Metals Company has moved to commercial-scale flowsheets and
                    prefeasibility studies for CCZ nodules, integrating mined
                    nodules into existing refineries and smelters, with robust
                    techno-economic models and ESG disclosures. Japan's JOGMEC
                    has gone a step further on PMS, lifting ore from its Okinawa
                    SMS field, floating a concentrate and feeding it into
                    existing domestic smelters—a full loop from seabed to metal
                    that India can aim to emulate on its own terms.
                  </p>

                  <p className="my-3">
                    India's advances in deep-sea mineral capabilities can evolve
                    into a global leadership opportunity—offering trusted
                    critical-mineral solutions while strengthening India's soft
                    power through responsible, science-driven ocean stewardship.
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
                          Mithilesh Phadke
                        </h5>
                        <Badge bg="success" pill>
                          Author
                        </Badge>
                      </div>

                      <p className="text-muted" style={{ lineHeight: 1.6 }}>
                        Mithilesh Phadke is a Programme Executive at the Ananta
                        Aspen Centre. This non-partisan, non-profit organisation
                        promotes value- based leadership and convenes Track II
                        dialogues with India’s strategic partner countries. At
                        the Centre, he works in the Leadership vertical where he
                        curates programmes, socratic dialogues and fellowships
                        for various demographics, including high school
                        students, mid-career professionals, senior leaders, and
                        women entrepreneurs from tier 2 &amp; 3 cities. He is
                        also part of an annual event called Ananta Godrej Ideas
                        India, where fellows from Ananta’s seven fellowships and
                        different walks of life gather to exchange ideas for
                        ushering in significant societal change. Additionally,
                        he contributes to the International Relations Vertical
                        on a project basis, like curation support for the Arctic
                        Circle India Forum, and research support for Ananta’s
                        Critical Minerals Dashboard. He is also involved in
                        leading an annual public event that dissects and
                        analyses the Indian government&#39;s Union Budget.
                        Across the programmes, his role varies from curation,
                        research, logistics management, analytical
                        visualisation, graphic tools development, and
                        stakeholder engagement to connect government, business,
                        and civil society for more effective dialogue. His work
                        reflects a commitment to nurturing leadership and
                        fostering informed conversations that contribute to a
                        better future.
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

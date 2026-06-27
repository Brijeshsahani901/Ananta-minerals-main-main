import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PentagonCriticalMinerals() {
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
            src={`${basePath}/assets/minerals_images/pentagon-critical-merals.webp`}
            alt="The Pentagon's critical minerals rush meets foreign civil society pressure"
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
                    The Pentagon's critical minerals rush meets foreign civil
                    society pressure
                  </h3>

                  <p className="my-3">
                    The US Department of War is confronting a potential supply
                    chain crisis as its involvement in the combat operations in
                    the West Asia region continues to drag on and its arsenal
                    and inventory requires replacements for expended material.
                    The raw materials needed to manufacture modern weapons and
                    systems require servicing complex supply chains across
                    international partners, jurisdictions and civil society
                    scrutiny. As that reality sharpens, the Pentagon has
                    responded with a mix of emergency procurement, experimental
                    industrial technology, and foreign partnerships.
                  </p>

                  <p className="my-3">
                    Australia's Lynas Rare Earths, the largest commercial rare
                    earth producer outside China, signed a \$96 million
                    four-year{" "}
                    <a
                      href="https://www.wsj.com/business/lynas-rare-earths-lines-up-96-million-supply-deal-with-pentagon-9e849bfd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      agreement
                    </a>{" "}
                    with the Pentagon in March 2026. The deal commits Lynas to
                    supplying light and heavy rare earth oxides at a floor price
                    of \$110 per kilogram for neodymium-praseodymium oxide, a
                    key input for permanent magnets used in weapons guidance
                    systems and defense electronics. Lynas mines rare earth
                    materials in Western Australia and refines them at its
                    Gebeng facility in Malaysia's Pahang state, placing Malaysia
                    at the processing hub without seemingly building a civil
                    society consensus for it in the country.
                  </p>

                  <p className="my-3">
                    In April 2026, a coalition of 57 Malaysian civil society
                    organizations{" "}
                    <a
                      href="https://asia.nikkei.com/spotlight/supply-chain/lynas-rare-earth-deal-with-pentagon-triggers-outcry-in-malaysia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      issued
                    </a>{" "}
                    a formal memorandum to Prime Minister Anwar Ibrahim opposing
                    an agreement between Lynas Rare Earths and the Pentagon. The
                    groups argued on multiple grounds that Malaysia should not
                    participate. On sovereignty, they contended that Malaysia's
                    constitutionally grounded non-alignment policy sits
                    uncomfortably alongside a foreign company on Malaysian soil
                    feeding directly into a foreign military supply chain. On
                    legal grounds, they raised concerns about potential
                    complicity in internationally contested military operations.
                    The environmental dimension added further weight, rare earth
                    processing produces radioactive waste residues containing
                    thorium and uranium, and Lynas has faced sustained public
                    opposition on those grounds for over a decade. An argument
                    could be made that Malaysia would end up absorbing the
                    environmental cost of processing operations whose strategic
                    and financial benefits flow primarily to Australia and the
                    US.
                  </p>

                  <p className="my-3">
                    According to a{" "}
                    <a
                      href="https://www.reuters.com/world/us/pentagon-sought-fresh-supply-13-critical-minerals-day-before-iran-attack-2026-03-04/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      report
                    </a>{" "}
                    by Reuters, in March 2026 the Pentagon quietly circulated a
                    request to its Defense Industrial Base Consortium (DIBC), a
                    sprawling network of over 1,500 companies, research
                    institutions, and universities that collectively undergird
                    American military production. The request asked for project
                    proposals covering thirteen specific critical minerals:
                    arsenic, bismuth, gadolinium, germanium, graphite, hafnium,
                    nickel, samarium, tungsten, vanadium, ytterbium, yttrium,
                    and zirconium, with potential development funding ranging
                    from \$100 million to over \$500 million per project.
                  </p>

                  <p className="my-3">
                    However, the seemingly longer term domestic answer from the
                    Pentagon's perspective may involve a meaningful rethink of
                    what a refinery can be. Perhaps drawing from the utility of
                    Small and Modular Nuclear Reactors (SMRs), the same concept
                    is being{" "}
                    <a
                      href="https://www.reuters.com/business/energy/us-military-developing-small-refineries-critical-minerals-2025-12-09/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      piloted
                    </a>{" "}
                    by the US armed forces and the Idaho National Laboratory and
                    mining company Perpetua Resources. Reportedly, the prototype
                    mining units can be housed in non-dedicated military
                    installations and bases with other traditional functions as
                    well as expanded at scale as needed owing to their modular
                    nature. While only being tried out with the processing of
                    antimony trisulfide which is commonly used as a primer in
                    ammunition, the programme could be expanded to refine
                    tungsten and boron too.
                  </p>

                  <p className="my-3">
                    However, in the modern globalised world, economies of scale
                    require supply and value chains to be non-autarkic with
                    several moving parts and stakeholders involved across
                    borders, as no one country has enough mineral deposits,
                    infrastructure, processing capability or ability to absorb
                    the potential environmental impact to be self sufficient in
                    all materials required in the production of modern high tech
                    weapons systems.
                  </p>

                  <p style={{ color: "#686868" }}>
                    Copyright ©️ 2025 by Ananta Aspen Centre
                    <br />
                    This text is protected by copyright and may not be
                    reproduced, distributed, or modified without permission
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
                          Mithilesh Phadke
                        </h5>
                        <Badge bg="success" pill>
                          Author
                        </Badge>
                      </div>

                      <p className="text-muted" style={{ lineHeight: 1.6 }}>
                        Mithilesh Phadke is a Programme Executive at the Ananta
                        Aspen Centre. This non-partisan, non-profit organisation
                        promotes value- based leadership and convenes Track II
                        dialogues with India's strategic partner countries. At
                        the Centre, he works in the Leadership vertical where he
                        curates programmes, socratic dialogues and fellowships
                        for various demographics, including high school
                        students, mid-career professionals, senior leaders, and
                        women entrepreneurs from tier 2 &amp; 3 cities. He is
                        also part of an annual event called Ananta Godrej Ideas
                        India, where fellows from Ananta's seven fellowships and
                        different walks of life gather to exchange ideas for
                        ushering in significant societal change. Additionally,
                        he contributes to the International Relations Vertical
                        on a project basis, like curation support for the Arctic
                        Circle India Forum, and research support for Ananta's
                        Critical Minerals Dashboard. He is also involved in
                        leading an annual public event that dissects and
                        analyses the Indian government's Union Budget. Across
                        the programmes, his role varies from curation, research,
                        logistics management, analytical visualisation, graphic
                        tools development, and stakeholder engagement to connect
                        government, business, and civil society for more
                        effective dialogue. His work reflects a commitment to
                        nurturing leadership and fostering informed
                        conversations that contribute to a better future.
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

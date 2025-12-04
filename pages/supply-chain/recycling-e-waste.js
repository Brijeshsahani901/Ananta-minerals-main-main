import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function RecyclingEWaste() {
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
            src={`${basePath}/assets/minerals_images/e-waste.png`}
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
                    The Missing Discourse in CRM Recycling from E-Waste
                  </h3>

                  <p className="my-3">
                    The recovery of critical raw materials (CRMs) from electronic waste has
                    drawn significant attention in discussions on the circular economy and
                    sustainable development. Metals such as cobalt, nickel, lithium, and
                    rare earth elements are central to clean energy transitions and
                    recovering them from e-waste appears to offer a potential secondary
                    source for manufacturing.
                    <sup><a href="https://mines.gov.in/admin/storage/ckeditor/NCMM_1739251643.pdf">[1]</a></sup>
                  </p>

                  <p className="my-3">
                    CRM recycling from e-waste can build stronger domestic supply chains for
                    critical materials, particularly in light of the geopolitical tensions
                    that threaten access to these resources. This, in turn, has implications
                    for the stability of our manufacturing systems.
                  </p>

                  <p className="my-3">
                    While the recovery of CRMs from e-waste holds great promise, not all
                    CRMs behave the same in recycling systems. Some critical metals are
                    already showing viable pathways to scale-up recovery, while others
                    remain constrained by cost, scale, or demand. The discussion that
                    follows seeks to examine this distinction in detail.
                  </p>

                  <h4 className="my-3 ">Differences in Recoverability Across CRMs</h4>

                  <p className="my-3">
                    Certain critical metals in e-waste—such as copper, nickel, cobalt,
                    lithium—are present in quantities and concentrations that make their
                    recovery worthwhile. They are not just scattered trace elements; they
                    exist in forms and quantities where established recycling technologies
                    can extract them effectively. Their strong market value, when matched
                    with clear industrial demand, creates viable economics for recovery. And
                    this alignment of recovery technology, metal value, and demand can draw
                    investment-at-scale and build the foundation of a functioning secondary
                    materials market.
                  </p>

                  <p className="my-3">
                    By contrast, CRMs such as rare earths, tantalum, and indium are usually
                    found in very small, dispersed amounts across multiple components.
                    Extracting them requires comparatively more complex processes, and the
                    costs of separation and purification are high. Recovery is further
                    constrained by limited visibility into how much industry actually needs
                    or is willing to purchase these recycled materials. Without that
                    clarity, it is difficult to judge whether large-scale recycling would
                    ever be economically viable.
                  </p>

                  <h4 className="my-3 ">The Role of Collection in Scaling Recovery</h4>

                  <p className="my-3">
                    In 2021–22, India generated an estimated 1.6 million tonnes of e-waste,
                    of which only about one-third entered formal recycling
                    channels.<sup><a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1941054">[2]</a></sup>
                    The remainder flowed through informal networks, where recovery is often
                    unsafe, unregulated, and environmentally hazardous. For metals where
                    technical feasibility, economics of scale, and industrial demand are
                    already present, such as copper, nickel, cobalt, lithium, investing in
                    systems for collection and channeling of e-waste into the formal sector
                    can significantly enable scale-up. For these metals, collection is
                    catalytic: it increases feedstock volume, stabilizes supply, and
                    provides recyclers with confidence to invest in infrastructure.
                  </p>

                  <p className="my-3">
                    For the other CRMs, scaling operations through supply-side improvements
                    would have to take place after economic viability at scale is assessed
                    and tested.
                  </p>

                  <h4 className="my-3 ">Offtake Agreements and Market Viability</h4>

                  <p className="my-3">
                    Offtake agreements provide recyclers with committed buyers, reducing
                    investment risk by providing some revenue assurance. Globally,
                    agreements such as Cyclic Materials and Glencore for recycled copper
                    <sup><a href="https://www.reuters.com/markets/commodities/glencore-ties-up-with-cyclic-materials-copper-recycling-push-2024-12-11/">[3]</a></sup>,
                    and Electra and Glencore for nickel and cobalt from battery black mass
                    <sup><a href="https://electrabmc.com/news-releases/news/electra-announces-commercial-agreements-with-glencore">[4]</a></sup>,
                    are examples of structured offtake arrangements that exist for
                    high-volume, high-value metals.
                  </p>

                  <p className="my-3">
                    But, for such arrangements manufacturers need consistent quantity and
                    quality supply as well as forecasting for future supply. Investors in
                    recycling, on the other hand, want revenue certainty before committing
                    to the operational and capital expenditure required to achieve such
                    volumes and quality. This mismatch leaves both sides hesitant, resulting
                    in a slowing of progress toward a reliable domestic CRM recovery
                    industry.
                  </p>

                  <p className="my-3">
                    Globally, most existing offtake agreements are concentrated around
                    metals like copper, nickel, cobalt, and lithium. In India, agreements
                    for even these metals remain uncommon. For other CRMs such as rare
                    earths, identifying manufacturers and their volume and quality demands
                    is a prerequisite to determining their economic viability.
                  </p>

                  <h4 className="my-3 ">Policy Directions for Effective CRM Recycling</h4>

                  <p className="my-3">
                    For CRMs with relatively mature recovery pathways, policy attention can
                    focus on a few key areas. It can strengthen collection systems and bring
                    informal actors into safer and more traceable channels. It can also
                    reduce investment risk through tools such as viability-gap funding,
                    green financing, or co-investment schemes, while supporting demand—for
                    example, by requiring the use of recycled materials in products—so
                    that supply and demand grow together. Together, these measures can
                    facilitate the scaling of operations and help establish a stable,
                    functioning recycling ecosystem.
                  </p>

                  <p className="my-3">
                    By contrast, for CRMs where both the market for recovered materials, and
                    economically viable recovery remain unclear, we would need a careful,
                    systematic study of demand, costs, and the conditions needed to make
                    recovery financially sustainable. Different stakeholders—including
                    government, manufacturers, refiners, recyclers, and research
                    institutions—need to work together through targeted R&D and
                    well-designed pilot projects to clarify the technical and implementation
                    pathways required for recovery to take hold.
                  </p>

                  <p className="my-3">
                    By assessing each material on its own terms and tailoring interventions
                    accordingly, India can unlock the potential of CRM recovery in a
                    practical and resilient manner.
                  </p>

                  <p className="my-3 text-muted small">
                    <em>Note: In regulatory frameworks, batteries and e-waste are treated
                    separately. However, this blog considers batteries within the scope of
                    e-waste, since they represent a key source of lithium, cobalt, and
                    nickel.</em>
                  </p>

                  <h4 className="my-3 ">Sources:</h4>
                  <ol className="small">
                    <li>
                      <em>National Critical Minerals Mission</em>. (2025, January).{" "}
                      <a href="https://mines.gov.in/admin/storage/ckeditor/NCMM_1739251643.pdf">
                        https://mines.gov.in/admin/storage/ckeditor/NCMM_1739251643.pdf
                      </a>
                    </li>
                    <li>
                      <em>E-Waste management</em>. (n.d.-b).{" "}
                      <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1941054">
                        https://www.pib.gov.in/PressReleasePage.aspx?PRID=1941054
                      </a>
                    </li>
                    <li>
                      <em>Glencore ties up with Cyclic Materials in copper recycling push</em>. (2024, December 11). Reuters.{" "}
                      <a href="https://www.reuters.com/markets/commodities/glencore-ties-up-with-cyclic-materials-copper-recycling-push-2024-12-11/">
                        https://www.reuters.com/markets/commodities/glencore-ties-up-with-cyclic-materials-copper-recycling-push-2024-12-11/
                      </a>
                    </li>
                    <li>
                      <em>Electra Battery Materials - EV supply chain</em>. (n.d.). Electra Battery Materials.{" "}
                      <a href="https://electrabmc.com/news-releases/news/electra-announces-commercial-agreements-with-glencore">
                        https://electrabmc.com/news-releases/news/electra-announces-commercial-agreements-with-glencore
                      </a>
                    </li>
                  </ol>

    <Card
      className="p-4 mt-5 shadow-sm"
      style={{
        backgroundColor: "#fff6f6",
        borderRadius: "10px",
      }}
    >
      {/* Author 1 - Keerthi Lanka */}
      <div className="d-flex flex-column flex-md-row align-items-start gap-4 mb-4 pb-4 border-bottom">
        {/* Photo */}
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
            src={`${basePath}/assets/img/keerthii.jpg`}
            alt="Keerthi Lanka"
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
            <h5 className="mb-0 fw-semibold text-dark">Keerthi Lanka</h5>
            <Badge bg="success" pill>
              Senior Specialist – Strategic Alliances
            </Badge>
          </div>
          <p className="text-muted mb-0" style={{ lineHeight: 1.6 }}>
            Keerthi Lanka is a Senior Specialist at Karo Sambhav. She drives
            large-scale awareness programmes, grants, CSR projects, and
            partnerships that advance India's circular economy and e-waste
            solutions. With a background in Development Management and
            Psychology, and experience across social enterprises, NGOs, CSR, and
            volunteer leadership, she brings expertise in driving impact-driven
            programmes, process-design, and communications.
          </p>
        </div>
      </div>

      {/* Author 2 - Shivangi Aggarwal */}
      <div className="d-flex flex-column flex-md-row align-items-start gap-4">
        {/* Photo */}
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
            src={`${basePath}/assets/img/shivangii.jpg`}
            alt="Shivangi Aggarwal"
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
            <h5 className="mb-0 fw-semibold text-dark">Shivangi Aggarwal</h5>
            <Badge bg="primary" pill>
              Lead - Project Office
            </Badge>
          </div>
          <p className="text-muted mb-0" style={{ lineHeight: 1.6 }}>
            Shivangi has over seven years of experience in the development and
            implementation of Extended Producer Responsibility (EPR) and
            Circular Economy systems. She has worked with leading global brands
            such as Apple, Ericsson, Medtronic, and PepsiCo, supporting their
            compliance and sustainability initiatives. At Karo Sambhav,
            Shivangi oversees the Project Office, which leads initiatives to
            advance collection systems, R&D on the recovery of critical raw
            materials (CRMs), solutions for hard-to-recycle e-waste fractions,
            and the design of circular economy and EPR policy frameworks. She
            also oversees the development of strategic collaborations and growth
            partnerships to scale circular solutions. She holds an MSc in
            Environmental Studies and Resource Management from the TERI School
            of Advanced Studies, and a BSc in Chemistry from Gargi College,
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
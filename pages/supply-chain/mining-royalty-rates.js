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
            src={`${basePath}/assets/minerals_images/royalty-rates.jpg`}
            alt="Royalty Reform for Strategic Minerals"
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
                    Royalty Reform for Strategic Minerals: Clearer prices but
                    not a silver bullet
                  </h3>

                  <p className="my-3">
                    On 12 November 2025, the Union Cabinet revised the method of
                    charging royalties on four minerals the government
                    designates as 'critical' for the clean-energy transition:
                    graphite, caesium, rubidium, and zirconium.
                  </p>

                  <p className="my-3">
                    Instead of a fixed per-tonne charge in many cases, the
                    government set ad-valorem (percentage-of-price) rates tied
                    to the Average Sale Price (ASP) published by the Indian
                    Bureau of Mines: graphite will be
                    <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2189394&utm_source=chatgpt.com&reg=3&lang=2"
                      target="_blank"
                    >
                     &nbsp;charged at&nbsp;
                    </a>
                    2% of ASP for high-grade (&gt;80% fixed carbon) and 4% for
                    lower grades; caesium and rubidium are set at 2% of ASP;
                    zirconium at 1% of ASP. This is an administrative change
                    intended to clarify and align the fiscal terms more closely
                    with market value.
                  </p>

                  <h4 className="my-3">
                    Why did the state just decide to earn with the market, not
                    against it
                  </h4>

                  <p className="my-3">
                    A per-tonne royalty treats every tonne the same, no matter
                    its quality or the price of the metal, so low-grade deposits
                    or times of weak prices can look unprofitable to bidders. An
                    ad-valorem royalty moves with the market; when the metal
                    sells for less, the royalty falls; when prices rise, the
                    state shares in the upside. The Indian Bureau of Mines
                    already
                    <a
                      href="https://ibm.gov.in/writereaddata/files/175551907368a318616dc85ASP_Min_JUNE_2025.pdf?utm_source=chatgpt.com"
                      target="_blank"
                    >
                      &nbsp;calculates and publishes ASPs monthly
                    </a>
                    , so the technical system to implement these
                    percentage-based royalties exists. That administrative
                    readiness makes the change straightforward to apply.
                  </p>

                  <h4 className="my-3">
                    How the state shares the upside- and calms the downside
                  </h4>

                  <p className="my-3">
                    This reform is feasible and useful because it eliminates a
                    straightforward, avoidable source of uncertainty for
                    companies considering bidding in auctions. India has been
                    running tranches of auctions for critical mineral blocks;
                    some earlier rounds{" "}
                    <a
                      href="https://www.reuters.com/world/india/india-cancels-14-out-18-critical-mineral-block-auctions-launched-second-tranche-2024-06-24/?utm_source=chatgpt.com"
                      target="_blank"
                    >
                      saw many blocks either fail to attract bids or be
                      cancelled.
                    </a>
                    Clearer, market-linked royalties reduce a key unknown in
                    project economics and should improve the auction hit rate,
                    i.e., the share of blocks offered that are actually won and
                    contracted. But royalty clarity is only one part of what
                    makes a mine happen.
                  </p>

                  <p className="my-3">
                    The benefits to expect are seemingly direct. First, more
                    transparent royalties should make more blocks commercially
                    viable on paper, especially deposits that are mixed or lower
                    grade. Second, because many critical minerals occur
                    together, rationalising royalties for graphite and similar
                    minerals makes it more likely developers will chase
                    polymetallic deposits that also contain lithium or rare
                    earths. Third, any increase in domestic supply, even if
                    modest, helps lower India's reliance on imports for inputs
                    used in batteries and high-tech manufacturing. Those are
                    real strategic wins, even if they take time to appear.
                  </p>

                  <p className="my-3">
                    But the reform has clear limits. Royalties are an important
                    cost, but they are not the whole story. Mines need capital,
                    reliable power and water, good roads and ports, timely
                    permits, and the ability to turn concentrate into
                    higher-value material. If India mines more ore but still
                    lacks large-scale, high-purity processors, most material
                    could be sold abroad as concentrates, and India will miss
                    the jobs and industry benefits of downstream refining. Also,
                    because ad-valorem links state revenue to market swings,
                    states could face sudden shortfalls when prices crash unless
                    there are smoothing measures such as minimum floors,
                    deferrals or compensatory transfers. Finally, faster or more
                    aggressive auctioning without robust community consultation
                    and environmental safeguards risks local opposition and
                    project delays.
                  </p>

                  <h4 className="my-3">Lessons we can learn</h4>

                  <p className="my-3">
                    Looking overseas gives useful lessons. New South Wales in
                    Australia introduced a{" "}
                    <strong>Critical</strong>
                    <a
                      href="https://www.resources.nsw.gov.au/invest-nsw/nsw-mineral-resources/critical-minerals-and-high-tech-metals/critical-minerals-royalty?utm_source=chatgpt.com"
                      target="_blank"
                    >
                    &nbsp;Minerals Royalty Deferral&nbsp;
                    </a>
                    Scheme that temporarily defers royalty payments for new
                    projects for up to five years, a policy designed to ease
                    cash-flow when a mine starts up, and the Australian federal
                    government has paired royalty flexibility with tax
                    incentives aimed at encouraging domestic processing. Those
                    twin tools are what helped translate mines into local
                    processing projects in some cases. By contrast, Indonesia
                    forced processing through export controls and stricter rules
                    for nickel, which did bring smelters but also caused timing,
                    capacity and compliance problems. The takeaway: fiscal
                    changes help, but they work best when combined with
                    predictable industrial policy, infrastructure, and clear
                    timelines.
                  </p>

<div className="my-4">
  <div className="table-responsive">
    <table
      className="table table-bordered"
      style={{ border: "1px solid #dee2e6", width: "100%" }}
    >
      <thead style={{ backgroundColor: "#f8f9fa" }}>
        <tr>
          <th
            style={{
              border: "1px solid #dee2e6",
              padding: "14px",
              fontWeight: "bold",
              textAlign: "center",
              width: "30%",
            }}
          >
            Mineral
          </th>
          <th
            style={{
              border: "1px solid #dee2e6",
              padding: "14px",
              fontWeight: "bold",
              textAlign: "center",
              width: "50%",
            }}
          >
            Royalty Rates
          </th>
        </tr>
      </thead>

      <tbody>
        {/* Caesium */}
        <tr>
          <td
            style={{
              border: "1px solid #dee2e6",
              padding: "14px",
              verticalAlign: "middle",
              textAlign: "center",
            }}
          >
            Caesium
          </td>
          <td style={{ border: "1px solid #dee2e6", padding: "14px" }}>
            2% of Average Sale Price (ASP) of Caesium metal chargeable on the
            Caesium metal contained in the ore produced
          </td>
        </tr>

        {/* Graphite */}
        <tr>
          <td
            style={{
              border: "1px solid #dee2e6",
              padding: "14px",
              verticalAlign: "top",
              textAlign: "center",
            }}
          >
            Graphite
            <ul style={{ margin: "10px 0 0 0", paddingLeft: "20px", textAlign:"start"}}>
            <li>With eighty per cent or more fixed carbon</li>
              <li>With less than eighty per cent fixed carbon</li>
            </ul>
          </td>

          <td style={{ border: "1px solid #dee2e6", padding: "14px" }}>
            <div>
              <div>2% of ASP on ad valorem basis</div>
              <div>4% of ASP on ad valorem basis</div>
            </div>
          </td>
        </tr>

        {/* Rubidium */}
        <tr>
          <td
            style={{
              border: "1px solid #dee2e6",
              padding: "14px",
              verticalAlign: "middle",
              textAlign: "center",
            }}
          >
            Rubidium
          </td>
          <td style={{ border: "1px solid #dee2e6", padding: "14px" }}>
            2% of ASP of Rubidium metal chargeable on the Rubidium metal
            contained in the ore produced
          </td>
        </tr>

        {/* Zirconium */}
        <tr>
          <td
            style={{
              border: "1px solid #dee2e6",
              padding: "14px",
              verticalAlign: "middle",
              textAlign: "center",
            }}
          >
            Zirconium
          </td>
          <td style={{ border: "1px solid #dee2e6", padding: "14px" }}>
            1% of ASP of Zirconium metal chargeable on the Zirconium metal
            contained in the ore produced
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <p
    style={{
      fontSize: "0.9rem",
      color: "#6c757d",
      marginTop: "10px",
      fontStyle: "italic",
    }}
  >
    Source: PIB Delhi
  </p>
</div>



                  <p className="my-3">
                    The simple conclusion is this: moving graphite, caesium,
                    rubidium and zirconium to ASP-linked ad-valorem royalties is
                    a sensible, low-friction reform that removes an unnecessary
                    barrier for some projects and aligns state take with market
                    value. It should help with auction economics and may nudge
                    more bidders into the market. But it is not a silver bullet.
                    To turn more mined tonnes into domestic factories, jobs and
                    long-term strategic resilience, India will need parallel
                    measures, processing incentives, infrastructure, clear
                    permitting timelines, and good social and environmental
                    practices. Judge the policy by whether more blocks actually
                    get developed and whether downstream processing projects
                    follow, not only by the headline percentages themselves.
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

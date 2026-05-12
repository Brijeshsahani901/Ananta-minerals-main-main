import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";

export default function IndiasProspective() {
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
            src={`${basePath}/assets/minerals_images/pax.jpg`}
            alt="India's prospective role in Pax Silica's evolution and US micro-refinery strategy"
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
                    India's prospective role in Pax Silica's evolution and US
                    micro-refinery strategy
                  </h3>

                  <p className="my-3">
                    Two recent developments in the US's quest to derisk its
                    defence critical minerals inputs from China have direct
                    implications for India. First, a new initiative by the Trump
                    Whitehouse called "
                    <a
                      className="mx-1"
                      href="https://www.state.gov/releases/office-of-the-spokesperson/2025/12/pax-silica-initiative"
                      target="_blank"
                    >
                      Pax Silica
                    </a>
                    " which stands on a coalition of eight nations, Japan, South
                    Korea, Singapore, the Netherlands, the United Kingdom,
                    Israel, the UAE, and Australia, committed to securing
                    semiconductor and associated critical minerals supply
                    chains.
                  </p>

                  <p className="my-3">
                    The second, a separate initiative by the Pentagon which
                    involves building refineries small enough to fit in shipping
                    containers. This engineering feat masks a revolutionary
                    shift in how the US intends to secure the raw materials that
                    modern defense systems ubiquitously require. Together these
                    developments reflect India's precarious position in
                    restructuring global supply critical mineral and
                    semiconductor value chains.
                  </p>

                  <p className="my-3">
                    Rather than depend on massive commercial refineries
                    concentrated in vulnerable geographies, according to a
                    <a
                      className="mx-1"
                      href="https://www.reuters.com/business/energy/us-military-developing-small-refineries-critical-minerals-2025-12-09/"
                      target="_blank"
                    >
                      report
                    </a>
                    by Reuters, the Pentagon is developing modular processing
                    units that can operate at military installations with
                    minimal output but maximum control.
                  </p>

                  <p className="my-3">
                    Antimony trisulfide, a hardening agent for ammunition and
                    alloys, became a priority after China abruptly halted
                    exports in 2021, forcing Washington to deplete its strategic
                    stockpile and confront a structural vulnerability.
                  </p>

                  {/* Antimony Data Table - Exact screenshot format */}
                  <div
                    className="mt-4 mb-5"
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      padding: "15px",
                    }}
                  >
                    <h4 className="text-center mb-2" style={{ color: "#333" }}>
                      <strong>ANTIMONY</strong>
                    </h4>
                    <p
                      className="text-center mb-3"
                      style={{ fontSize: "0.9rem", color: "#666" }}
                    >
                      (Data in metric tons, antimony content, unless otherwise
                      specified)
                    </p>

                      <p style={{ marginBottom: "10px" }}>
                        <strong>Domestic Production and Use:</strong> In 2024,
                        no marketable antimony was mined in the United States.
                        Primary antimony metal and oxide were produced by one
                        company in Montana using imported feedstock; data were
                        not available. Secondary antimony production came from
                        antimonial lead recovered from spent lead-acid batteries
                        and was intended for the lead-acid battery industry. The
                        estimated value of secondary antimony produced in 2024
                        was about $73 million. Recycling supplied about 15% of
                        estimated domestic apparent consumption, and the
                        remainder came from imports. In the United States, the
                        leading uses of antimony were metal products, including
                        antimonial lead and ammunition, 40%; flame retardants,
                        39%; and nonmetal products, including ceramics and glass
                        and rubber products, 21%.
                      </p>

                    <div className="table-responsive fade-in-on-scroll">


                      <table
                        className="table table-bordered fade-in-on-scroll"
                        style={{
                          fontSize: "0.85rem",
                          marginBottom: "10px",
                        }}
                      >
                        <thead>
                          <tr>
                            <th
                              style={{
                                textAlign: "center",
                                backgroundColor: "#f0f0f0",
                                fontWeight: "bold",
                                padding: "8px",
                              }}
                              colSpan="6"
                            >
                              <strong>Salient Statistics—United States:</strong>
                            </th>
                          </tr>
                          <tr>
                            <th
                              style={{
                                width: "40%",
                                fontWeight: "bold",
                                backgroundColor: "#f8f8f8",
                                padding: "6px",
                              }}
                            >
                              Category
                            </th>
                            <th
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                backgroundColor: "#f8f8f8",
                                padding: "6px",
                              }}
                            >
                              2020
                            </th>
                            <th
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                backgroundColor: "#f8f8f8",
                                padding: "6px",
                              }}
                            >
                              2021
                            </th>
                            <th
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                backgroundColor: "#f8f8f8",
                                padding: "6px",
                              }}
                            >
                              2022
                            </th>
                            <th
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                backgroundColor: "#f8f8f8",
                                padding: "6px",
                              }}
                            >
                              2023
                            </th>
                            <th
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                backgroundColor: "#f8f8f8",
                                padding: "6px",
                              }}
                            >
                              2024*
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Production Section */}
                          <tr>
                            <td
                              style={{
                                fontWeight: "bold",
                                padding: "6px",
                                backgroundColor: "#f5f5f5",
                              }}
                            >
                              Production:
                            </td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                          </tr>
                          <tr>
                            <td style={{ paddingLeft: "20px", padding: "6px" }}>
                              Mine (recoverable antimony)
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              —
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              —
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              —
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              —
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              —
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                paddingLeft: "20px",
                                fontStyle: "italic",
                                padding: "6px",
                              }}
                            >
                              Smelter:
                            </td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                          </tr>
                          <tr>
                            <td style={{ paddingLeft: "40px", padding: "6px" }}>
                              Primary
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              254
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              19
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              W
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              W
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              W
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingLeft: "40px", padding: "6px" }}>
                              Secondary
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              3,520
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              4,050
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              4,100
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              3,490
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              3,500
                            </td>
                          </tr>

                          {/* Imports Section */}
                          <tr>
                            <td
                              style={{
                                fontWeight: "bold",
                                padding: "6px",
                                backgroundColor: "#f5f5f5",
                              }}
                            >
                              Imports for consumption:
                            </td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                          </tr>
                          <tr>
                            <td style={{ paddingLeft: "20px", padding: "6px" }}>
                              Ore and concentrates
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              105
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              31
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              29
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              6
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              310
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingLeft: "20px", padding: "6px" }}>
                              Oxide
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              15,000
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              19,100
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              16,900
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              14,000
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              20,000
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingLeft: "20px", padding: "6px" }}>
                              Unwrought, powder
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              5,200
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              6,970
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              6,510
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              6,060
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              4,100
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingLeft: "20px", padding: "6px" }}>
                              Antimony articles¹
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              318
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              514
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              1,790
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              1,620
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              330
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingLeft: "20px", padding: "6px" }}>
                              Waste and scrap¹
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              6
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              13
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              71
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              3
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              17
                            </td>
                          </tr>

                          {/* Exports Section */}
                          <tr>
                            <td
                              style={{
                                fontWeight: "bold",
                                padding: "6px",
                                backgroundColor: "#f5f5f5",
                              }}
                            >
                              Exports:
                            </td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                            <td
                              style={{ textAlign: "center", padding: "6px" }}
                            ></td>
                          </tr>
                          <tr>
                            <td style={{ paddingLeft: "20px", padding: "6px" }}>
                              Ore and concentrates¹
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              10
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              9
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              53
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              24
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              —
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingLeft: "20px", padding: "6px" }}>
                              Oxide
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              1,230
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              1,530
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              2,420
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              1,740
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              2,200
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingLeft: "20px", padding: "6px" }}>
                              Unwrought, powder
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              269
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              824
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              1,230
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              1,510
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              1,500
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingLeft: "20px", padding: "6px" }}>
                              Antimony articles¹
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              97
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              97
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              585
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              433
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              79
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingLeft: "20px", padding: "6px" }}>
                              Waste and scrap¹
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              11
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              136
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              26
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              2
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              53
                            </td>
                          </tr>

                          {/* Consumption, Price, and Net Import */}
                          <tr>
                            <td style={{ fontWeight: "bold", padding: "6px" }}>
                              Consumption, apparent²
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              22,400
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              27,800
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              23,900
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              20,300
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              24,000
                            </td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold", padding: "6px" }}>
                              Price, metal, average, dollars per pound³
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              2.67
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              5.31
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              6.18
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              5.49
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              9.50
                            </td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold", padding: "6px" }}>
                              Net import reliance⁴ as a percentage of apparent
                              consumption
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              83
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              85
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              83
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              83
                            </td>
                            <td style={{ textAlign: "center", padding: "6px" }}>
                              85
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div style={{ fontSize: "0.85rem", lineHeight: "1.4" }}>
                    

                      <p style={{ marginBottom: "10px" }}>
                        <strong>Recycling:</strong> The bulk of secondary
                        antimony is recovered at secondary lead smelters as
                        antimonial lead, most of which was generated by, and
                        then consumed by, the lead-acid battery industry.
                      </p>

                      <p style={{ marginBottom: "10px" }}>
                        <strong>Import Sources (2020–2023):</strong> Ore and
                        concentrates: Italy, 44%; China, 23%; Belgium, 16%;
                        India, 10%; and other, 7%. Oxide: China,<sup>5</sup>{" "}
                        76%; Belgium, 11%; Bolivia, 6%; and other, 7%. Unwrought
                        metal and powder: India, 25%; China,<sup>5</sup> 24%;
                        Thailand, 13%; Vietnam, 12%; and other, 26%. Total metal
                        and oxide: China,<sup>5</sup> 63%; Belgium, 8%, India,
                        6%; Bolivia, 5%; and other, 18%.
                      </p>

                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "#666",
                          marginTop: "15px",
                          paddingTop: "10px",
                          borderTop: "1px solid #eee",
                        }}
                      >
                        <p className="fst-italic" style={{ marginBottom: "0" }}>
                          <a
                            className="mx-1"
                            href="https://pubs.usgs.gov/periodicals/mcs2025/mcs2025.pdf"
                            target="_blank"
                          >
                            Source: U.S. Geological Survey, Mineral Commodity
                            Summaries, January 2025
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="my-3">
                    The prototype micro facilities for processing Antimony have
                    reportedly been developed by a private firm called Westpro
                    Machinery at the cost of $30 million, and they fit within
                    four shipping containers, which can in theory even fit on
                    any of the US Navy's aircraft carriers with some
                    adaptations. While there is no utility in basing the
                    processing capability on naval vessels of any size, the
                    theoretical prospect shows that these facilities could
                    likely be transported via traditional sea-lift capabilities
                    adding to their chances of survival during disaster events
                    or armed conflict where they may become targets.
                  </p>

                  <p className="my-3">
                    If the pilot project for the micro scale processing of
                    Antimony succeeds in meeting Pentagon goals, Tungsten, Rare
                    Earth Elements, and Boron refineries will be next in line.
                    These could eventually operate on US and allied military
                    bases or other government facilities, perhaps even decoyed
                    for operation secrecy, creating a distributed network immune
                    to single-point failures and targeted attacks.
                  </p>

                  <p className="my-3">
                    India for its part faces exposure to Chinese dominated
                    global critical minerals value chain that dwarfs that of the
                    US. According to data from the latest edition of the
                    <a
                      className="mx-1"
                      href="https://ibm.gov.in/writereaddata/files/17454767536809dc9139ba8IMYB_BOOK_2023.pdf"
                      target="_blank"
                    >
                      Indian Bureau of Mines Yearbook
                    </a>
                    , New Delhi imports 100% of its refined Antimony, Lithium,
                    Cobalt and Nickel, minerals essential to advanced defense
                    systems, telecommunications infrastructure, and
                    semiconductor manufacturing.
                  </p>

                  <p className="my-3">
                    This vulnerability has likely played a role in India's
                    exclusion from US's Pax Silica initiative's first phase, and
                    it reflects a blunt technical reality, India refines
                    negligible amounts of the critical minerals it consumes if
                    at all. Furthermore India is only now setting up its first
                    modern semiconductor production facilities with yet unclear
                    commercial viability and longevity.
                  </p>

                  <p className="my-3">
                    Pax Silica is built as the coalition around nations with
                    either extant processing capacity, semiconductor
                    manufacturing equipment makers, or long standing chip
                    fabricators, and advanced materials processors, or a lot of
                    capital to invest in those ventures that the global
                    technology ecosystem depends upon.
                  </p>

                  <p className="my-3">
                    However in any future expansion of Pax Silica India's
                    inclusion is likely, as India sits at the geographic nexus
                    of critical mineral rich regions. The aptly named Minerals
                    Security Partnership, another US led initiative, of which
                    India became a member in June 2023, includes Australia and
                    several African producers with substantial reserves. India's
                    relative proximity to Southeast Asian processing hubs and
                    its established relationships with mining companies across
                    the Indo-Pacific also position it as a natural node for
                    decentralized refining infrastructure.
                  </p>

                  <p className="my-3">
                    Unlike remote US military bases, similar or slightly larger
                    Indian facilities could serve dual civilian-military
                    purposes, reducing capital intensity and distributing
                    processing across multiple economic actors.
                  </p>

                  <p className="my-3">
                    India's processing deficit is a constraint, but it is not
                    necessarily permanent. The Pentagon's modular refinery
                    strategy could overcome India's traditional refining
                    infrastructure shortfalls in a relatively short time and
                    with minimal costs. Small scale, portable refineries require
                    lower capital intensity and less complex supply chains than
                    traditional commercial facilities. They demand technical
                    cooperation but not the massive infrastructure finance that
                    India's lack of foreign origin green field investment make
                    impractical.
                  </p>

                  <p className="my-3">
                    A bilateral arrangement whereby the US transfers portable
                    refinery technology, finances construction, and guarantees
                    access to technical specifications could position India as a
                    distributed node in America's decentralized minerals
                    network.
                  </p>

                  <p className="my-3">
                    This would achieve multiple strategic objectives
                    simultaneously, it would give India a pathway to processing
                    self sufficiency, reduce US dependence further, as well as
                    position India as essential to Western defense supply chains
                    rather than a peripheral actor, and create institutional
                    mechanisms for deeper defense-industrial cooperation.
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
                        Aditya Pareek is a consultant with the Ananta Aspen
                        Centre, he studies the intersection of technology and
                        geopolitics and specialises on the affairs of the former
                        Soviet space.
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

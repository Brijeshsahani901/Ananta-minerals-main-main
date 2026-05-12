import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function karnatak() {
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
            src={`${basePath}/assets/minerals_images/karnatak.jpg`}
            alt="Karnataka bets on MiniMines for processing complex"
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
                    Karnataka bets on MiniMines for processing complex
                  </h3>
                  <p className="my-3">
                    On November 28 2025, Karnataka
                    <a
                      href="https://m-mines.com/minimines-inks-rs-350-cr-deal-with-karnataka-to-set-up-critical-minerals-refining-complex/"
                      target="_blank"
                    >
                      &nbsp;signed&nbsp;
                    </a>
                    a memorandum of understanding with Bengaluru based startup
                    MiniMines Cleantech Solutions to set up a INR350 crore
                    critical minerals refining complex in the state capital. The
                    agreement, routed through the state government's Department
                    of Electronics, IT & Biotechnology, aims to contribute
                    towards plugging a critical gap in India's clean energy and
                    critical minerals value chain, large‑scale and high purity
                    processing capacity.
                  </p>
                  <p className="my-3">
                    The proposed facility is designed to serve as a hub for
                    refining materials used in electric mobility, renewable
                    energy, aerospace, defence and electronics. According to a
                    press release by MiniMines, the first phase will have a
                    refining capacity of 15,000 Metric Tonnes Per Annum(MTPA)
                    and an annual throughput of around 13,400 tonnes of refined
                    output. On paper, that throughput is expected to translate
                    into refined materials worth INR500--600 crore a year, and
                    an even larger knock‑on effect across downstream
                    manufacturing.
                  </p>
                  <p className="my-3">
                    India has spent the past few years reorienting its approach
                    to critical minerals, auctioning exploration and mining
                    blocks, and forming international partnerships for secure
                    supply, especially with its Quadilateral security
                    dialogue(Quad) partners - US, Japan and Australia to lower
                    dependence on China as a source. But mines alone do not
                    create battery cells, magnets or semiconductors. The
                    chokepoint is often the ability to turn mined ore,
                    industrial scrap or end‑of‑life products into battery‑grade
                    chemicals and magnet‑grade oxides that factories can
                    actually use.
                  </p>
                  <h4 className="mt-3">
                   Table :  Country-wise quantum of rare earth metals imported by India
                    during last 5 years
                  </h4>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ display: "inline", marginRight: "6px" }}>
                      Quantity in Tonnes
                    </p>
                  </div>
                  <div className="table-responsive fade-in-on-scroll mt-3">
                    <table className="table table-bordered fade-in-on-scroll">
                      <thead
                        style={{ backgroundColor: "#f0f0f0" }}
                        className="fade-in-on-scroll"
                      >
                        <tr className="text-blue">
                          <th>#</th>
                          <th>HS Code- Description</th>

                          <th colSpan="2">2019-20</th>
                          <th colSpan="2">2020-21</th>
                          <th colSpan="2">2021-22</th>
                          <th colSpan="2">2022-23</th>
                          <th colSpan="2">2023-24</th>
                        </tr>

                        <tr>
                          <th></th>
                          <th></th>

                          <th>Country</th>
                          <th>Qty</th>
                          <th>Country</th>
                          <th>Qty</th>
                          <th>Country</th>
                          <th>Qty</th>
                          <th>Country</th>
                          <th>Qty</th>
                          <th>Country</th>
                          <th>Qty</th>
                        </tr>
                      </thead>

                      <tbody className="fade-in-on-scroll">
                        {/* ------------------------- ROW 1 -------------------------- */}
                        <tr>
                          <td rowSpan="7">
                            <strong>1.</strong>
                          </td>
                          <td rowSpan="7">
                            28053000- Alkali or alkaline earth metals:
                            Rare-earth metals, scandium and yttrium, whether or
                            not intermixed or inter alloyed
                          </td>

                          <td>China</td>
                          <td>437</td>
                          <td>China</td>
                          <td>445</td>
                          <td>China</td>
                          <td>714.5</td>
                          <td>China</td>
                          <td>709</td>
                          <td>China</td>
                          <td>699</td>
                        </tr>

                        <tr>
                          <td>Hong Kong</td>
                          <td>34</td>
                          <td>Japan</td>
                          <td>11</td>
                          <td>Japan</td>
                          <td>34</td>
                          <td>Japan</td>
                          <td>42</td>
                          <td>Hong Kong</td>
                          <td>234</td>
                        </tr>

                        <tr>
                          <td>Japan</td>
                          <td>2</td>
                          <td>Sweden</td>
                          <td>10</td>
                          <td>USA</td>
                          <td>6.6</td>
                          <td>Singapore</td>
                          <td>20</td>
                          <td>Japan</td>
                          <td>192</td>
                        </tr>

                        <tr>
                          <td>USA</td>
                          <td>0.57</td>
                          <td>USA</td>
                          <td>4.69</td>
                          <td>Hong Kong</td>
                          <td>5</td>
                          <td>Hong Kong</td>
                          <td>20</td>
                          <td>Mongolia</td>
                          <td>60</td>
                        </tr>

                        <tr>
                          <td>UK</td>
                          <td>0.08</td>
                          <td>Hong Kong</td>
                          <td>0.05</td>
                          <td>Russia</td>
                          <td>1</td>
                          <td>USA</td>
                          <td>1.09</td>
                          <td>UK</td>
                          <td>0.11</td>
                        </tr>

                        <tr>
                          <td>Others</td>
                          <td>0.00</td>
                          <td>Others</td>
                          <td>0.07</td>
                          <td>Others</td>
                          <td>0.06</td>
                          <td>Others</td>
                          <td>0.18</td>
                          <td>Others</td>
                          <td>0.02</td>
                        </tr>

                        <tr>
                          <td>
                            <strong>Total</strong>
                          </td>
                          <td>
                            <strong>473.65</strong>
                          </td>
                          <td>
                            <strong>Total</strong>
                          </td>
                          <td>
                            <strong>470.61</strong>
                          </td>
                          <td>
                            <strong>Total</strong>
                          </td>
                          <td>
                            <strong>761</strong>
                          </td>
                          <td>
                            <strong>Total</strong>
                          </td>
                          <td>
                            <strong>792</strong>
                          </td>
                          <td>
                            <strong>Total</strong>
                          </td>
                          <td>
                            <strong>1,185</strong>
                          </td>
                        </tr>

                        {/* ------------------------- ROW 2 -------------------------- */}

                        <tr>
                          <td rowSpan="7">
                            <strong>2.</strong>
                          </td>
                          <td rowSpan="7">
                            2846 - Compounds, inorganic or organic, of rare
                            earth metals
                          </td>

                          <td>Russia</td>
                          <td>452</td>
                          <td>China</td>
                          <td>695</td>
                          <td>China</td>
                          <td>745</td>
                          <td>China</td>
                          <td>796</td>
                          <td>China</td>
                          <td>780</td>
                        </tr>

                        <tr>
                          <td>China</td>
                          <td>434</td>
                          <td>Russia</td>
                          <td>156</td>
                          <td>Japan</td>
                          <td>196</td>
                          <td>Korea</td>
                          <td>150</td>
                          <td>Japan</td>
                          <td>148</td>
                        </tr>

                        <tr>
                          <td>Japan</td>
                          <td>255</td>
                          <td>Japan</td>
                          <td>133</td>
                          <td>Korea</td>
                          <td>93</td>
                          <td>Japan</td>
                          <td>148</td>
                          <td>Korea</td>
                          <td>90</td>
                        </tr>

                        <tr>
                          <td>Germany</td>
                          <td>59</td>
                          <td>Korea</td>
                          <td>91</td>
                          <td>Austria</td>
                          <td>41</td>
                          <td>USA</td>
                          <td>20</td>
                          <td>USA</td>
                          <td>24</td>
                        </tr>

                        <tr>
                          <td>Austria</td>
                          <td>31</td>
                          <td>Austria</td>
                          <td>46</td>
                          <td>Russia</td>
                          <td>40</td>
                          <td>France</td>
                          <td>14</td>
                          <td>France</td>
                          <td>19</td>
                        </tr>

                        <tr>
                          <td>Others</td>
                          <td>144</td>
                          <td>Others</td>
                          <td>129</td>
                          <td>Others</td>
                          <td>69</td>
                          <td>Others</td>
                          <td>24</td>
                          <td>Others</td>
                          <td>24</td>
                        </tr>

                        <tr>
                          <td>
                            <strong>Total</strong>
                          </td>
                          <td>
                            <strong>1,375</strong>
                          </td>
                          <td>
                            <strong>Total</strong>
                          </td>
                          <td>
                            <strong>1,250</strong>
                          </td>
                          <td>
                            <strong>Total</strong>
                          </td>
                          <td>
                            <strong>1,183</strong>
                          </td>
                          <td>
                            <strong>Total</strong>
                          </td>
                          <td>
                            <strong>1,153</strong>
                          </td>
                          <td>
                            <strong>Total</strong>
                          </td>
                          <td>
                            <strong>1,086</strong>
                          </td>
                        </tr>

                        {/* ------------------------- REE TOTAL -------------------------- */}
                        <tr style={{ backgroundColor: "#f0f0f0" }}>
                          <td colSpan="2">
                            <strong>REE Total</strong>
                          </td>
                          <td colSpan="2">
                            <strong>1,848</strong>
                          </td>
                          <td colSpan="2">
                            <strong>1,721</strong>
                          </td>
                          <td colSpan="2">
                            <strong>1,944</strong>
                          </td>
                          <td colSpan="2">
                            <strong>1,945</strong>
                          </td>
                          <td colSpan="2">
                            <strong>2,270</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p
                      className="fst-italic text-muted fade-in-on-scroll"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Note: REE has 17 elements. HS codes 280530 and 2846
                      pertain to REE as a whole and not to a particular element.
                    </p>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <h5 style={{ display: "inline", marginRight: "6px" }}>
                      Source :
                    </h5>

                    <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2117701&&reg=3&&lang=2"
                      target="_blank"
                      style={{ display: "inline" }}
                    >
                      Press Information Bureau
                    </a>
                  </div>

                  <p className="my-3">
                    For a state that already hosts electronics, IT services and
                    deep‑tech start‑ups, adding a refining hub is a bet that
                    processing capacity can anchor a broader industrial
                    ecosystem around batteries and advanced components.
                  </p>
                  <p className="my-3">
                    It is also a way of earning with the value chain, not
                    against it. Instead of exporting concentrates or scrap and
                    re‑importing high‑purity materials at a premium, the idea is
                    to capture more of the value‑addition and tax base within
                    Karnataka.
                  </p>
                  <p className="my-3">
                    MiniMines's projections highlight two separate effects, the
                    direct value of refined materials and the indirect value
                    created across connected supply chains.
                  </p>
                  <p className="my-3">
                    The company estimates that once the first supply phase
                    stabilises, for every INR1 crore of its output, it expects
                    nearly INR 3 crore of downstream industrial value to be
                    generated in industries that turn those materials into
                    cathodes, magnets, components and finished products. That
                    kind of multiplier effect is plausible because critical
                    materials often sit at the top of long, high‑value chains; a
                    small quantity of lithium or rare earths can unlock far
                    larger value in electric vehicles, wind turbines or defence
                    systems.
                  </p>
                  <p className="my-3">
                    The project's financial footprint is framed in similar
                    terms. The complex is projected to support around INR 13,000
                    crores in annual turnover and nearly INR 200 crore in Goods
                    and Services Tax(GST) revenue, while creating more than
                    1,500 direct and indirect jobs. If those numbers
                    materialise, Karnataka secures not just a niche plant, but a
                    new tax and employment anchor in an industry that is still
                    nascent nationally.
                  </p>
                  <p className="my-3">
                    Crucially, the project is built on recycling and
                    circularity, because apart from processing it is also
                    looking to re-process critical minerals from a practice
                    called urban or landfill mining. The facility will deploy
                    MiniMines's so-called patented Hybrid‑Hydrometallurgy (HHM)
                    process to recover materials from old lithium‑ion batteries
                    and will integrate its developing HydroMag REE Loop
                    technology for rare‑earth magnet recovery. In parallel, it
                    will host an R&D and training centre focused on workforce
                    development, technology transfer and circular mineral
                    processing. That combination of plant plus lab gives the
                    state a platform not just to process today's waste streams,
                    but to adapt as chemistries and technologies evolve.
                  </p>
                  <p className="my-3">
                    An on‑site R&D and training centre is likely to
                    substantially contribute towards building a skilled state
                    and national workforce around hydrometallurgy, recycling and
                    critical‑materials chemistry, areas where India's domestic
                    capacity is thin. Technology developed for lithium‑ion or
                    rare‑earth recovery can spill over into other strategic
                    materials as industry demand evolves.
                  </p>
                  <p className="my-3">
                    The MoU, however, is a start and a plethora of tentativeness
                    surrounds its prospects. First, it is an intent agreement,
                    not a commissioned plant. The eventual impact depends on
                    land, permits, financing, grid and water connections, and
                    how quickly MiniMines can move from project announcement to
                    commercial operations. Environmental approvals for
                    hydrometallurgical and recycling facilities can be complex,
                    and any delay there would push out the timelines for the
                    promised throughput and tax revenue.
                  </p>
                  <p className="my-3">
                    Furthermore, the business case depends on steady access to
                    processable feedstock and robust downstream demand.
                    Recycling‑based refining requires reliable flows of
                    End‑of‑Life(EoL) batteries, industrial scrap, especially
                    magnet waste. That in turn depends on collection networks,
                    regulations, and producer responsibility frameworks that
                    actually bring material to plants at scale. On the demand
                    side, downstream manufacturers will have to be confident in
                    quality, volume and price from domestic refiners to lock in
                    long‑term deals. Any cost or performance shortfall would
                    tighten margins and could affect the projected value
                    multipliers and tax yields.
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
                      alt="T K Arun"
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

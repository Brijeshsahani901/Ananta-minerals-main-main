import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function ClosingLoop() {
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
         src={`${basePath}/assets/minerals_images/closing_loop.jpg`}
            alt="About"
            style={{
              width: "100%",
              height: "79vh",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Main content */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-10">
              <div className="blog-post-wrapper">
                <div className="latest__post-item">
                  <div className="latest__post-content">
                    <div style={{ marginTop: "30px" }}>
                      <div
                        className="p-4"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#fff",
                        }}
                      >
                        <h2 className="my-3">
                          Closing the Loop: Strengthening India's Battery
                          Recycling Supply Chains
                        </h2>

                        <p className="my-3">
                          The robustness and resilience of India's clean energy
                          supply chains depend heavily on how efficiently the
                          country can recover and reintegrate critical minerals
                          from end-of-life (EOL) batteries. As the adoption of
                          electric vehicles (EVs) and stationary storage
                          accelerates, domestic access to secondary sources of
                          lithium, cobalt, nickel, manganese, and graphite
                          becomes increasingly strategic for securing raw
                          material supply and reducing import dependency.
                        </p>

                        <p className="my-3">
                          A sound battery recycling industry forms a domestic,
                          secondary source of strategic minerals, potentially
                          reducing India's reliance on volatile and
                          geopolitically sensitive international mining supply
                          chains. It enables localized, circular supply loops
                          where recovered materials are reintegrated into
                          battery or material production, reducing the pressure
                          on primary extraction. At present, however, India's
                          battery recycling sector remains nascent and
                          structurally disconnected from its larger battery
                          manufacturing ecosystem. While global lithium prices
                          have softened and commodity markets show signs of
                          temporary oversupply, long-term supply security
                          remains uncertain. In this context, a robust domestic
                          recycling value chain can serve as a critical buffer
                          against future supply disruptions and price
                          volatility.
                        </p>

                        <h3 className="my-3">Domestic Policies and Industry Efforts</h3>

                        <p className="my-3">
                          India's
                          <a
                            href="https://www.iea.org/policies/25166-battery-waste-management-rules-2022"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            2022 Batteries (Management and Handling) Rules
                          </a>{" "}
                          require producers and importers to register and
                          implement collection/recycling frameworks. However,
                          the effectiveness of these regulations is directly
                          tied to the structure and scale of reverse logistics —
                          the process of collecting, transporting, and
                          processing spent batteries along the supply chain. EOL
                          lithium-ion batteries are typically mechanically
                          discharged and shredded, then treated with
                          hydrometallurgical or pyrometallurgical processes to
                          extract key critical minerals, such as lithium,
                          manganese, cobalt, nickel and graphite.
                        </p>

                        <p className="my-3">
                          Approximately{" "}
                          <a
                            href="https://www.mercomindia.com/india-potential-attract-global-investments-battery-recycling"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            70% of used batteries
                          </a>{" "}
                          still flow through informal scrap channels, which
                          undermines traceability, mineral recovery efficiency,
                          and environmental standards. This fragments the supply
                          chain and diminishes the quality and reliability of
                          recycled feedstock for domestic manufacturers. High
                          GST on recycled batteries and{" "}
                          <a
                            href="https://wri-india.org/sites/default/files/ConferenceProceeding-WRI-India-Battery-circularity-policy-regulations-implementation-strategies.pdf#:~:text=the%20environment%20,reverse%20logistics%20mechanism%20for%20LIBs"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            lack of reverse-logistics hubs
                          </a>{" "}
                          favor the informal sector. State agencies have
                          struggled to monitor compliance and crack down on sham
                          recyclers. Funding itself presents another challenge,
                          with recyclers reporting difficulty in securing
                          capital, and the promised EPR recycling fees and
                          incentives (viability-gap funding) have been delayed.
                        </p>

                        <p className="my-3">
                          India's domestic policy framework centers on Extended
                          Producer Responsibility (EPR) under the Battery Waste
                          Management Regulations, which aim to require producers
                          to meet annual recycling/collection quotas and use
                          recycled materials until 2031. The government has
                          additionally launched incentives to boost EV and
                          battery manufacturing, such as PLI schemes for{" "}
                          <a
                            href="https://www.fairplanet.org/story/is-india-set-to-become-a-global-lithium-battery-recycling-hub/#:~:text=a%20PLI%20scheme%20for%20Advanced,manufacturing%20industry%20is%20still%20nascent"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Advanced Chemistry Cell batteries
                          </a>
                          , though no dedicated PLI exists yet for recycling.
                        </p>

                        <p className="my-3">
                          A{" "}
                          <a
                            href="https://www.pv-magazine-india.com/2025/03/25/challenges-and-opportunities-for-lithium-ion-battery-recycling-in-india/#:~:text=A%20new%20study%20report%20by,Amm%2C%20and%20Ziptrax"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            dozen or more companies
                          </a>
                          , such as Attero, Exigo Recycling, Tata Chemicals,
                          BatX Energies, are testing and attempting to scale up
                          the battery recycling process. Projections by NITI
                          Aayog and industry analysts foresee rapid sector
                          growth with battery storage capacity reaching{" "}
                          <a
                            href="https://www.niti.gov.in/sites/default/files/2022-07/ACC-battery-reuse-and-recycling-market-in-India_Niti-Aayog_UK.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            ~600 GWh by 2030
                          </a>
                          , particularly driven by EVs, grid storage and
                          electronics.
                        </p>

                        <p className="my-3">
                          Pioneering projects are underway, such as BatX
                          Energies{" "}
                          <a
                            href="https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2139197#:~:text=Press%20Information%20Bureau,-About%20Us&text=BatX%20Energies%20has%20developed%20a,up%20to%2097%E2%80%9399%25."
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            lithium-ion battery recycling plant
                          </a>{" "}
                          in Uttar Pradesh that utilises hydrometallurgy to
                          extract Li, Co, Ni, Mn and other metals. The facility,
                          following a successful pilot, claims zero-waste and
                          low-energy operation consistent with current
                          environmental regulations. Domestic firm Attero
                          Recycling, based in Roorkee, is further{" "}
                          <a
                            href="https://www.argusmedia.com/en/news-and-insights/latest-market-news/2586514-india-s-attero-to-expand-lithium-ion-recycling-capacity"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            scaling up operations
                          </a>{" "}
                          from recycling ~15,000 t/yr to 200-300,000 t/yr in the
                          coming years. Atterro's patented process recovers 98%
                          of battery-grade cobalt, lithium, graphite, nickel and
                          manganese, displaying technical promise.
                        </p>

                        <p className="my-3">
                          Policy experts in India recommend stronger oversight
                          and coordination by establishing a single nodal agency
                          through the Ministry of Heavy Industries for all
                          battery circularity. An alternate solution could also
                          be raising EPR penalty rates, and further creating
                          recycling clusters or 'recycling parks.' Proposed
                          measures include extending PLI-style incentives to
                          recycling which would offer viability-gap grants for
                          low-value chemistries such as Lithium Iron Phosphate
                          (LFP), and funding demonstration pilots. The recycling
                          sector in India could potentially call for modular
                          'hub-and-spoke' collection systems and market-based
                          financing to replicate global best practices. While
                          there are domestic companies such as Lohum Cleantech
                          and other startups partnering with OEMs to collect and
                          process batteries, to scale up pilot projects, there
                          is a need for clearer scrap collection channels and
                          guaranteed offtake for recycled feedstock.
                        </p>

                        <h3 className="my-3 ">Global Comparison</h3>

                        <p className="my-3">
                          Leading recyclers internationally operate at a much
                          larger scale with significant policy support. Redwood
                          Materials (USA) uses an integrated approach, with its
                          Nevada plant recycling spent batteries via
                          pyrometallurgy and refining to make cathode and anode
                          materials. Redwood has additionally secured a{" "}
                          <a
                            href="https://wri-india.org/sites/default/files/ConferenceProceeding-WRI-India-Battery-circularity-policy-regulations-implementation-strategies.pdf#:~:text=the%20environment%20,reverse%20logistics%20mechanism%20for%20LIBs"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            $2 billion DOE loan to finance
                          </a>{" "}
                          a giant battery materials 'campus.' Similarly, Umicore
                          (Belgium) employs a proprietary smelting plus
                          hydrometallurgy process to convert scrap into
                          high-purity Ni, Co, Cu and Li products. Umicore is
                          expanding to a{" "}
                          <a
                            href="https://www.umicore.com/en/media/newsroom/umicore-battery-recycling/#:~:text=Our%20unique%20recycling%20process%20uses,in%20the%20battery%20value%20chain"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            150,000-tonne/yr European plant by 2026
                          </a>{" "}
                          and received a{" "}
                          <a
                            href="https://www.eib.org/en/press/all/2024-054-belgium-eib-to-support-umicore-with-a-eur350-million-loan-for-its-european-research-and-innovation-in-electric-vehicle-battery-materials#:~:text=The%20European%20Investment%20Bank%20,granted%20to%20Umicore%20in%202020"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            350 million euro
                          </a>{" "}
                          low-cost loan from the European Investment Bank for
                          battery R&D, reflecting EU industrial policy support.
                        </p>

                        <p className="my-3">
                          Li-Cycle (Canada-USA) utilises all-hydrometallurgical
                          recycling to produce lithium carbonate and
                          nickel-cobalt-manganese hydroxide from 'black mass.'
                          Its Rochester facility is touted as North America's
                          first commercial-scale hydrometallurgical battery
                          recycler; Li-Cycle{" "}
                          <a
                            href="https://www.recyclingtoday.com/news/li-cycle-closes-475-million-dollar-loan-with-doe/#:~:text=Li,MHP%20produced%20at%20the%20facility"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            closed a $475 million DOE Advanced Technology
                            Vehicles Manufacturing loan
                          </a>{" "}
                          to compete in construction. Ascend Elements (USA)
                          applies a novel 'Hydro-to-Cathode' process, converting
                          black mass directly into battery precursors. For
                          funding, Ascend in building the{" "}
                          <a
                            href="https://www.recyclingtoday.com/news/li-cycle-closes-475-million-dollar-loan-with-doe/#:~:text=Li,MHP%20produced%20at%20the%20facility"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            first large-scale precursor plant
                          </a>{" "}
                          from recycled feedstock with $480 million in DOE
                          grants and a $320 million in Polish government grant.
                          The DOE loans to Redwood and Li-Cycle are
                          milestone-based concessional financing—a model India
                          is yet to offer. The EU now mandates minimum recycled
                          content in new batteries (
                          <a
                            href="https://www.iea.org/policies/16763-eu-sustainable-batteries-regulation"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            6% of lithium and nickel from recyclate by 2031
                          </a>
                          ).
                        </p>

                        <h3 className="my-3 ">Strategic Direction</h3>

                        <p className="my-3">
                          To strengthen India's battery recycling supply chain,
                          a multipronged approach is essential. First,
                          investments must be directed toward expanding
                          reverse-logistics infrastructure and developing formal
                          recycling hubs to shift collection away from the
                          informal sector and into certified, traceable systems.
                          Second, incentive structures should be extended to
                          cover recycling activities, including viability-gap
                          funding to support the processing of all battery
                          chemistries—particularly low-value types—and the
                          introduction of mandates requiring minimum recycled
                          content in new batteries. Finally, establishing a
                          dedicated national agency to oversee battery
                          circularity and supply chain integration can ensure
                          better coordination, streamlined regulation, and the
                          seamless incorporation of recovered minerals into
                          domestic battery manufacturing pipelines.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}

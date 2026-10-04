import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function GreenHydrogen() {
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
                        src={`${basePath}/assets/minerals_images/green-hydrogen.webp`}
                        alt="The Mineral Behind India's Green Hydrogen Ambition"
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
                                        The Mineral Behind India's Green Hydrogen Ambition
                                    </h3>

                                    <p className="my-3">
                                        In 2023, India announced a target of producing at least five million
                                        metric tonnes (MMT) of green hydrogen annually by 2030. India already
                                        uses roughly 5–6 MMT of largely fossil-derived hydrogen each year,
                                        mainly in refining and fertilizer production. The Ministry of New and
                                        Renewable Energy reported only about 8,000 tonnes per year of
                                        commissioned green-hydrogen production capacity by February 2026.
                                        Commissioned capacity is a potential annual output, not the quantity
                                        actually produced. We have the capacity of 0.16% of the desired target.
                                        That contrast explains both the scale of the opportunity and the
                                        distance still to travel. [2][3]
                                    </p>

                                    <h4 className="mt-4">But what is Green Hydrogen?</h4>
                                    <p className="my-3">
                                        Green hydrogen can be made by using an electrolyser to split water
                                        (H<sub>2</sub>O) into hydrogen and oxygen, powered by renewable
                                        electricity. Conventional "grey" hydrogen is generally produced from
                                        natural gas through a procedure known as steam methane reforming (SMR).
                                        In this method, natural gas is heated with steam to create hydrogen and
                                        carbon dioxide. The subsequent atmospheric release of carbon dioxide
                                        makes grey hydrogen a substantial source of greenhouse gas emissions.
                                    </p>

                                    <p className="my-3">
                                        India's green-hydrogen standard requires no more than 2 kg of CO
                                        <sub>2</sub>-equivalent emissions for each kilogram of hydrogen
                                        produced, measured across specified production steps as a 12-month
                                        average. Renewable power alone, therefore, is not a substitute for
                                        measuring emissions. [1]
                                    </p>

                                    <p className="my-3">
                                        The National Green Hydrogen Mission, approved in January 2023 with an
                                        initial public outlay of ₹19,744 crore, aims to make India a producer,
                                        user and exporter of green hydrogen and its derivatives. Its 2030
                                        ambitions include about 125 GW of additional renewable capacity, more
                                        than ₹8 lakh crore of investment, over six lakh jobs and nearly 50 MMT
                                        of avoided greenhouse-gas emissions annually. Through the SIGHT
                                        programme, the government supports domestic electrolyser manufacturing
                                        and hydrogen production; it is also pursuing competitive procurement,
                                        refinery and fertiliser offtake, pilots in steel, shipping and
                                        transport, hydrogen hubs, research, standards and certification. By
                                        March 2026, incentives had been awarded for 3 GW per year of
                                        electrolyser manufacturing capacity. These are awards and targets, not
                                        equivalent amounts of operational equipment. [4][5]
                                    </p>

                                    <p className="my-3">
                                        How large might the global market be by 2030? One number cannot capture
                                        the difference between climate ambition and contracted demand. IRENA's
                                        1.5°C pathway envisages about 125 MMT a year of low-emissions hydrogen
                                        in 2030, including blue hydrogen; approximately 40% would be green, or
                                        roughly 50 MMT. The IEA's 2026 assessment describes a much smaller
                                        committed market: projects with final investment decisions would supply
                                        about 4.3 MMT a year of low-emissions hydrogen in 2030, potentially
                                        exceeding 6 MMT if further advanced projects proceed. Even its full
                                        announced pipeline of 27 MMT includes blue hydrogen and projects that
                                        may never be built. Thus, 50 MMT is a climate-aligned scale of need,
                                        not a reliable forecast of green-hydrogen sales. [6][7]
                                    </p>

                                    <p className="my-3">
                                        Every electrolyser needs electrodes, separators or membranes, electrical
                                        contacts and corrosion-resistant hardware. But the mineral bill changes
                                        markedly with the technology. Alkaline electrolysers, the most
                                        established option, use nickel-rich electrodes, steel and frequently
                                        zirconium-oxide-based separators. They can be manufactured without
                                        platinum or iridium; the IEA estimates that current alkaline designs
                                        contain more than one tonne of nickel per megawatt (MW). Proton-exchange
                                        membrane (PEM) electrolysers respond rapidly to variable wind and solar
                                        power but typically need iridium at the oxygen-producing electrode,
                                        platinum at the hydrogen-producing electrode and titanium components.
                                        Anion-exchange membrane (AEM) electrolysers can use nickel, steel and
                                        other non-precious-metal catalysts, potentially avoiding iridium,
                                        although some designs still use platinum and durability varies.
                                        Solid-oxide electrolysers (SOECs) split steam at high temperature,
                                        making them attractive where industrial heat is available; their ceramic
                                        cells typically use nickel, zirconium and yttrium, with lanthanum or
                                        other rare earths in certain electrodes. Neither AEM nor SOEC has a
                                        dependable, industry-wide mineral quantity per MW: cell chemistry and
                                        system design differ too much for a single figure. [8][9]
                                    </p>

                                    <p className="my-3">
                                        There is also no fixed quantity of iridium or nickel consumed in making
                                        one kilogram of hydrogen: these metals remain in the machine. To compare
                                        technologies meaningfully, their upfront mineral inventories can be
                                        spread across lifetime output. Assume a 10-year service life, 5,000
                                        operating hours annually and 50 kilowatt-hours of electricity per
                                        kilogram of hydrogen. One kilowatt of equipment would then produce about
                                        1,000 kg of hydrogen over its life. Under that illustrative assumption,
                                        an alkaline design containing at least one tonne of nickel per MW
                                        implies at least 1 gram of installed nickel per kilogram of lifetime
                                        hydrogen output. IRENA's published reference PEM design specifies 1.3
                                        grams of iridium and 0.5 grams of platinum per kilowatt: approximately
                                        1.3 milligrams of iridium and 0.5 milligrams of platinum per kilogram of
                                        lifetime output. These are allocations of equipment materials, not
                                        materials destroyed in the reaction; stack replacements, lower operating
                                        hours and improved catalyst loading can change them substantially.
                                        [8][10]
                                    </p>

                                    <p className="my-3">
                                        Scaling that example to India's 5-MMT annual target requires around 250
                                        terawatt-hours of electricity and 50 GW of electrolysers, if plants
                                        average 5,000 operating hours. An all-alkaline fleet at the IEA's
                                        indicative nickel intensity would embed more than 50,000 tonnes of
                                        nickel. An all-PEM fleet built to IRENA's reference loading would
                                        require about 65 tonnes of iridium and 25 tonnes of platinum for its
                                        initial stacks. These deliberately extreme, alternative technology
                                        scenarios are not forecasts or annual mineral consumption. Actual demand
                                        will depend on the mix of machines, stack replacements, recycling and
                                        reduced-metal designs. The iridium comparison nevertheless matters:
                                        IRENA put global primary iridium output at only around 7–7.5 tonnes
                                        annually when it published its assessment. [8][10]
                                    </p>

                                    <p className="my-3">
                                        <strong>Who supplies the chain?</strong> South Africa is the pivotal
                                        source of mined platinum-group metals, including iridium. Indonesia
                                        dominates growth in refined nickel, while China is central to rare-earth
                                        refining and many downstream components; Australia and South Africa are
                                        major zircon-mineral producers. A mine's location, however, does not
                                        identify where its metal is separated, converted into catalyst or
                                        fabricated into a cell. In the component market, Heraeus and Umicore
                                        offer platinum and iridium catalysts; Agfa supplies zirconium-based
                                        alkaline separators. India already has named system manufacturers: SECI
                                        lists Reliance Electrolyser Manufacturing, L&T Electrolysers and John
                                        Cockerill Greenko for alkaline equipment, Ohmium for PEM, and an award
                                        to Homihydrogen that includes solid oxide capacity. An incentive award
                                        establishes a planned manufacturing route, not proof that every
                                        membrane, catalyst or metal is sourced domestically. [5][11][12]
                                    </p>

                                    <p className="my-3">
                                        The broader supply chain also counts. Solar installations require
                                        silicon, silver and copper; wind turbines and generators can require
                                        copper and, depending on design, rare-earth magnets; power networks,
                                        storage, water purification, compressors and transport add their own
                                        material needs. India's green-hydrogen strategy should therefore track
                                        minerals at each stage: mined and refined material, electrochemical
                                        components, assembled stacks, renewable power and end-of-life recovery.
                                        The practical priorities are diversified supply agreements, transparent
                                        bills of materials, domestic component manufacturing, catalyst thrift
                                        and recycling. Producing green hydrogen at scale will depend as much on
                                        those industrial capabilities as on the cost of renewable electricity.
                                        [8][13]
                                    </p>

                              <h4 className="mt-4">Sources</h4>
<ul className="my-3">
    <li>
        [1]{" "}
        <a
            href="https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1950421&lang=2&reg=48"
            target="_blank"
            rel="noopener noreferrer"
        >
            MNRE/PIB, Green Hydrogen Standard
        </a>
    </li>

    <li>
        [2]{" "}
        <a
            href="https://nghm.mnre.gov.in/demand-creation?language=en"
            target="_blank"
            rel="noopener noreferrer"
        >
            National Green Hydrogen Mission demand overview
        </a>
    </li>

    <li>
        [3]{" "}
        <a
            href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2245157&lang=1&reg=1"
            target="_blank"
            rel="noopener noreferrer"
        >
            PIB, commissioned capacity to February 2026
        </a>
    </li>

    <li>
        [4]{" "}
        <a
            href="https://mnre.gov.in/en/national-green-hydrogen-mission/"
            target="_blank"
            rel="noopener noreferrer"
        >
            MNRE, National Green Hydrogen Mission and mission outcomes
        </a>
        {" "}
        <a
            href="https://nghm.mnre.gov.in/overviews.php"
            target="_blank"
            rel="noopener noreferrer"
        >
            Mission overview
        </a>
    </li>

    <li>
        [5]{" "}
        <a
            href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2244663&lang=1&reg=1"
            target="_blank"
            rel="noopener noreferrer"
        >
            PIB, implementation progress
        </a>
        {" and "}
        <a
            href="https://seci.co.in/nghm"
            target="_blank"
            rel="noopener noreferrer"
        >
            SECI award register
        </a>
    </li>

    <li>
        [6]{" "}
        <a
            href="https://www.irena.org/Digital-Report/World-Energy-Transitions-Outlook-2023"
            target="_blank"
            rel="noopener noreferrer"
        >
            IRENA, World Energy Transitions Outlook 2023
        </a>
    </li>

    <li>
        [7]{" "}
        <a
            href="https://www.iea.org/reports/global-hydrogen-review-2026/executive-summary"
            target="_blank"
            rel="noopener noreferrer"
        >
            IEA, Global Hydrogen Review 2026
        </a>
    </li>

    <li>
        [8]{" "}
        <a
            href="https://www.iea.org/reports/the-role-of-critical-minerals-in-clean-energy-transitions/mineral-requirements-for-clean-energy-transitions"
            target="_blank"
            rel="noopener noreferrer"
        >
            IEA, mineral requirements for electrolysers
        </a>
    </li>

    <li>
        [9]{" "}
        <a
            href="https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2020/Dec/IRENA_Green_hydrogen_cost_2020.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >
            IRENA, Green Hydrogen Cost Reduction
        </a>
    </li>

    <li>
        [10]{" "}
        <a
            href="https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2020/Dec/IRENA_Green_hydrogen_cost_2020.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >
            IRENA, catalyst loadings and material supply
        </a>
    </li>

    <li>
        [11]{" "}
        <a
            href="https://www.iea.org/reports/global-critical-minerals-outlook-2026/executive-summary"
            target="_blank"
            rel="noopener noreferrer"
        >
            IEA, Global Critical Minerals Outlook 2026
        </a>
        {" and "}
        <a
            href="https://pubs.usgs.gov/publication/mcs2026"
            target="_blank"
            rel="noopener noreferrer"
        >
            USGS, Mineral Commodity Summaries 2026
        </a>
    </li>

    <li>
        [12]{" "}
        <a
            href="https://www.heraeus-precious-metals.com/en/products-solutions/category/hydrogen-systems/hydrogen-generation/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Heraeus
        </a>
    </li>
</ul>

                                    <p style={{ color: "#686868" }} className="mt-5">
                                        Copyright © 2025 by Ananta Aspen Centre<br />
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
                                                    Mithilesh Phadke
                                                </h5>
                                                <Badge bg="success" pill>
                                                    Author
                                                </Badge>
                                            </div>

                                            <p className="text-muted" style={{ lineHeight: 1.6 }}>
                                                Mithilesh Phadke is a Programme Executive at the Ananta Aspen Centre. This non-partisan, non-profit organisation promotes value-based leadership and convenes Track II dialogues with India's strategic partner countries. At the Centre, he works in the Leadership vertical where he curates programmes, socratic dialogues and fellowships for various demographics, including high school students, mid-career professionals, senior leaders, and women entrepreneurs from tier 2 &amp; 3 cities. He is also part of an annual event called Ananta Godrej Ideas India, where fellows from Ananta's seven fellowships and different walks of life gather to exchange ideas for ushering in significant societal change. Additionally, he contributes to the International Relations Vertical on a project basis, like curation support for the Arctic Circle India Forum, and research support for Ananta's Critical Minerals Dashboard. He is also involved in leading an annual public event that dissects and analyses the Indian government's Union Budget. Across the programmes, his role varies from curation, research, logistics management, analytical visualisation, graphic tools development, and stakeholder engagement to connect government, business, and civil society for more effective dialogue. His work reflects a commitment to nurturing leadership and fostering informed conversations that contribute to a better future.
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
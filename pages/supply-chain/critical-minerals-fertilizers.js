import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function CriticalMineralsFertilizers() {
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
                        src={`${basePath}/assets/minerals_images/food-security.jpeg`}
                        alt="Critical Minerals in Fertilizers"
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
                                        Critical Minerals in Fertilizers, Challenges of Food Security and Road Ahead
                                    </h3>

                                    <p className="my-3">
                                        Food security has always been central to India's national stability,
                                        economic resilience, and strategic autonomy. For a country of more than
                                        1.4 billion people, ensuring a stable and affordable food supply is not
                                        merely an agricultural objective but a national security imperative.
                                    </p>

                                    <p className="my-3">
                                        Today, Indian agriculture depends heavily on imported fertilizer
                                        minerals such as phosphorus, potash, sulphur, selenium, boron, and
                                        fertilizer-grade zinc. These minerals form the hidden infrastructure of
                                        India's food system. Without secure access to them, agricultural
                                        productivity, crop yields, and food affordability would face serious
                                        risks.
                                    </p>

                                    <p className="my-3">
                                        India currently imports between 18 and 22 million tonnes of
                                        fertilizer-linked minerals annually, demonstrating the country's deep
                                        dependence on global supply chains for agricultural productivity
                                        (Fertiliser Association of India, 2024; Department of Fertilizers,
                                        Government of India). Fertilizer subsidies have remained in the range of
                                        ₹1.7–2.2 lakh crore in recent years, reflecting rising global mineral
                                        prices and India's continued vulnerability to international market
                                        disruptions (Ministry of Chemicals and Fertilizers; Union Budget
                                        Documents 2024–25). The scale of these imports shows that India's food
                                        security is now directly connected to global mineral geopolitics.
                                    </p>

                                    <p className="my-3">
                                        Recent geopolitical crises, especially the ongoing instability in West
                                        Asia, have exposed the fragility of global fertilizer supply chains.
                                        Nearly half of India's urea imports originate from Gulf countries,
                                        making the country highly vulnerable to disruptions in West Asian
                                        shipping routes (Department of Fertilizers, Government of India).
                                    </p>

                                    {/* Strategic Risks Table */}
                                    <div className="table-responsive my-4">
                                        <table className="table table-bordered">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>Mineral</th>
                                                    <th>Main Supplier</th>
                                                    <th>Strategic Risk</th>
                                                    <th>Trigger Event</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Potash</td>
                                                    <td>Canada, Belarus, Russia</td>
                                                    <td>Sanctions &amp; cartel concentration</td>
                                                    <td>Ukraine war</td>
                                                </tr>
                                                <tr>
                                                    <td>Phosphate</td>
                                                    <td>Morocco</td>
                                                    <td>Reserve concentration</td>
                                                    <td>Export controls</td>
                                                </tr>
                                                <tr>
                                                    <td>Sulphur</td>
                                                    <td>Gulf states</td>
                                                    <td>Energy-linked disruption</td>
                                                    <td>Hormuz crisis</td>
                                                </tr>
                                                <tr>
                                                    <td>Selenium</td>
                                                    <td>Japan, Korea</td>
                                                    <td>Tech-sector competition</td>
                                                    <td>Semiconductor demand</td>
                                                </tr>
                                                <tr>
                                                    <td>Boron</td>
                                                    <td>Turkey</td>
                                                    <td>Single-country dominance</td>
                                                    <td>Trade restrictions</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h4 className="mt-4">1) Potash: strongest recent domestic push</h4>
                                    <p className="my-3">
                                        Potash represents India's most severe fertilizer mineral
                                        vulnerability. India remains almost 100 percent import dependent on
                                        potash, which is essential for water regulation, plant metabolism, and
                                        crop productivity in sugarcane, potato, cotton, and several commercial
                                        crops cultivated across Maharashtra, Gujarat, Uttar Pradesh, and
                                        Punjab (Fertiliser Association of India, 2024). Most of India's potash
                                        imports originate from Canada, Russia, and Belarus. However, sanctions
                                        on Belarus following the Russia-Ukraine war disrupted global potash
                                        markets and sharply increased fertilizer costs.
                                    </p>

                                    <p className="my-3">
                                        The Government of India has therefore started treating fertilizer-linked
                                        minerals as part of a broader critical mineral security strategy.
                                    </p>

                                    <p className="my-3">
                                        <a
                                            href="https://pib.gov.in/PressReleasePage.aspx?PRID=2131723"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="me-1"
                                        >
                                            The Ministry of Mines
                                        </a>
                                        officially confirmed that potash and halite blocks were auctioned for
                                        the first time under the critical mineral auction framework.
                                        <a
                                            href="https://www.hzlindia.com/news-and-media/press-release/hindustan-zinc-secures-one-of-india-s-first-potash-block-and-rare-earth-elements-re-es-critical-minerals-block"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ms-1"
                                        >
                                            Hindustan Zinc
                                        </a>&nbsp;
                                        later announced that it had secured one of India's first potash and
                                        halite blocks in Rajasthan.
                                        <a
                                            href="https://government.economictimes.indiatimes.com/news/psu/oil-india-wins-historic-potash-auction-in-rajasthan-a-game-changer-for-mineral-development/121484779"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ms-1"
                                        >
                                            Oil India
                                        </a>&nbsp;
                                        has also entered the sector after securing a potash block in Rajasthan.
                                    </p>

                                    <h4>What Are Potash and Halite Blocks?</h4>
                                    <p className="my-3">
                                        The Rajasthan deposits primarily contain halite (NaCl), sylvite (KCl), carnallite, and other saline evaporite minerals. These minerals form the basis of potash resources required for fertilizer production.
                                    </p>

                                    <p className="my-3">
                                        These deposits are comparable to similar formations found in Canada's Saskatchewan basin, China's Qinghai salt lakes, and the Dead Sea basin in Israel and Jordan.
                                    </p>

                                    <p className="my-3">
                                        However, India's deposits are generally deeper, lower grade, and mixed with salt, making them more technologically challenging to process compared to global counterparts.
                                    </p>

                                    <p className="my-3">
                                        As a result, India cannot immediately begin large-scale fertilizer production. A multi-stage industrial process will be required before these deposits can be converted into fertilizer-grade potash.
                                    </p>

                                    <h4>How Can the Blocks Be Converted into Fertilizer-Grade Potash?</h4>

                                    <p>The process involves Two Phases</p>

                                    <h4>Phase 1: Exploration and Resource Validation (2–4 Years)</h4>
                                       <p>The first stage involves:</p>
                                    <ul>
                                        <li>deep drilling</li>
                                        <li>brine chemistry studies</li>
                                        <li>geological modelling</li>
                                        <li>hydrogeological assessments</li>
                                        <li>environmental clearances</li>
                                        <li>reserve estimation</li>
                                    </ul>

                                    <h4>Phase 2: Pilot Extraction and Brine Recovery (2–3 Years)</h4>
                                    <p>
                                        India is unlikely to rely heavily on conventional underground mining because it is
                                        expensive and technically complex. Instead, the most likely route is solution mining.
                                        <br/>
                                        Under solution mining:
                                    </p>
                                    <ul>
                                        <li>hot water is injected underground</li>
                                        <li>potash salts dissolve into brine</li>
                                        <li>the brine is pumped to the surface</li>
                                        <li>evaporation and crystallization separate potash</li>
                                    </ul>
                                    <p>
                                        This is the same broad model used in Canada, Israel, Jordan, and China.
                                    </p>
                                    <p>
                                        China's Qinghai salt-lake system offers one of the best models India can study.
                                        <a
                                            href="https://www.fertilizer.org"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ms-1"
                                        >
                                            Qinghai
                                        </a>&nbsp;
                                        successfully produces potash from low-grade brines using solar evaporation and chemical
                                        concentration systems.
                                    </p>
                                    <p>
                                        <strong>What India can adopt:</strong> China's Qinghai model of extracting potash from
                                        brines and salt-lake systems remains relevant, but India will need location-specific
                                        pilots in Rajasthan and Gujarat. For immediate import reduction,
                                        <strong>Potassium Derived from Molasses (PDM)</strong> is more practical. The Government
                                        has already included PDM under the Nutrient Based Subsidy scheme, and in 2024 fixed a
                                        mutually agreed price of ₹4,263/MT and subsidy of ₹345/tonne. PDM cannot fully replace MOP
                                        because it has lower potash content, but it can reduce import pressure in sugarcane-producing
                                        regions.
                                    </p>

                                    <h4>Phase 3: Beneficiation and Fertilizer Conversion Plants (3–5 Years)</h4>
                                    <p>
                                        Once potash-bearing material is extracted, beneficiation plants must separate usable
                                        potassium salts from sodium chloride and magnesium impurities. India will then require:
                                    </p>
                                    <ul>
                                        <li>MOP conversion plants</li>
                                        <li>SOP production units</li>
                                        <li>granulation facilities</li>
                                        <li>fertilizer blending infrastructure</li>
                                        <li>downstream chemical integration</li>
                                    </ul>

                                    <h4>Phase 4: The key fertilizer products would include:</h4>
                                    <div className="table-responsive my-3">
                                        <table className="table table-bordered">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>Fertilizer Product</th>
                                                    <th>Specific Agricultural Use in India</th>
                                                    <th>Major Crops</th>
                                                    <th>Major States / Regions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>MOP (Muriate of Potash / KCl)</td>
                                                    <td>Most widely used potash fertilizer for improving water retention, root strength, disease resistance, drought tolerance, and grain quality. Used in bulk agriculture because it is cheaper than SOP.</td>
                                                    <td>Rice, wheat, sugarcane, cotton, maize, soybean, pulses</td>
                                                    <td>Uttar Pradesh, Punjab, Haryana, Maharashtra, Gujarat, Andhra Pradesh, Telangana, Karnataka</td>
                                                </tr>
                                                <tr>
                                                    <td>SOP (Sulphate of Potash / K₂SO₄)</td>
                                                    <td>Used for chloride-sensitive and high-value crops where MOP can damage crop quality. Improves fruit size, colour, sugar content, and shelf life.</td>
                                                    <td>Fruits, vegetables, potato, tobacco, tea, spices, grapes</td>
                                                    <td>Maharashtra (grapes), Karnataka, Tamil Nadu, Kerala, Himachal Pradesh, Jammu &amp; Kashmir, West Bengal</td>
                                                </tr>
                                                <tr>
                                                    <td>Potassium Nitrate (KNO₃)</td>
                                                    <td>Specialty fertilizer mainly used in fertigation, greenhouse farming, hydroponics, and precision agriculture. Provides rapid nutrient uptake.</td>
                                                    <td>Horticulture crops, vegetables, flowers, export-oriented crops, greenhouse crops</td>
                                                    <td>Maharashtra, Karnataka, Tamil Nadu, Gujarat, Punjab, polyhouse belts across India</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className="my-3">
                                        Boron represents another critical weakness in India's fertilizer
                                        ecosystem. India imports nearly 80 percent of its boron requirements
                                        while around 19 percent of Indian soils suffer from boron deficiency
                                        (ICAR-NBSS&amp;LUP, 2023). Boron is essential for fruit, vegetable, and
                                        sugarcane quality, especially in states such as Maharashtra,
                                        Karnataka, and Tamil Nadu. Since India lacks commercially viable boron
                                        reserves, the country depends heavily on imports from Turkey and the
                                        United States.
                                    </p>

                                    <h4 className="mt-4">2. Phosphate: progress through auctions, beneficiation, and Nano DAP</h4>
                                    <p className="my-3">
                                        India imports approximately 60–70 percent of its phosphate
                                        requirements, which are essential for DAP fertilizers widely used in
                                        wheat, rice, and pulse cultivation (IBM Mineral Yearbook, 2024).
                                        Phosphate plays a crucial role in root development and crop growth,
                                        particularly in major agricultural states such as Rajasthan, Madhya
                                        Pradesh, and Uttar Pradesh. Morocco dominates global phosphate reserves,
                                        controlling nearly 70 percent of known reserves, creating a highly
                                        concentrated global market.
                                    </p>

                                    <p className="my-3">
                                        India remains structurally deficient in high-grade rock phosphate.
                                        <a
                                            href="https://www.ibm.gov.in/writereaddata/files/01312023164709Apatitte_RockPhosphate_2021.pdf?utm_source=chatgpt.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ms-1"
                                        >
                                            IBM
                                        </a>&nbsp;
                                        notes that India is deficient in apatite and rock phosphate; apatite is
                                        fully import-dependent, while rock phosphate production is mainly from
                                        Rajasthan and Madhya Pradesh.
                                        <a
                                            href="https://nmet.gov.in/upload/project_registration/65812082a36a8Bill%207.pdf?utm_source=chatgpt.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ms-1"
                                        >
                                            NMET
                                        </a>
                                        -linked documentation also notes that only about <strong>10–15% of raw material
                                            requirement for phosphate fertilizer production</strong> is met through
                                        indigenous sources.
                                    </p>

                                    <p className="my-3">
                                        <strong>Domestic progress is happening on three fronts.</strong>
                                    </p>
                                    <ul>
                                        <li>First, the critical mineral auction programme has included phosphorite and phosphate blocks, alongside potash, in Tranche V.</li>
                                        <li>Second, Rajasthan State Mines and Minerals Ltd has continued beneficiation efforts at Jhamarkotra to use low-grade rock phosphate, which otherwise cannot be directly consumed by fertilizer industries. This is important because India's challenge is not just absence of phosphate, but low grade and poor processability.</li>
                                        <li>Third, India has a major alternate-chemistry pathway through Nano DAP. IFFCO describes Nano DAP as a liquid source of nitrogen and phosphorus for all crops.
                                            <a
                                                href="https://www.iffco.in/en/nano-dap-liquid?utm_source=chatgpt.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="ms-1"
                                            >
                                                IFFCO
                                            </a>
                                            's Nano DAP platform claims high nutrient-use efficiency and that one 500 ml bottle can replace part of conventional DAP requirement. This does not eliminate phosphate imports, but it can reduce application intensity if field performance is validated across regions.
                                        </li>
                                    </ul>

                                    <p className="my-3">
                                        <strong>Private sector development:</strong>
                                        <a
                                            href="https://timesofindia.indiatimes.com/city/jaipur/hindustan-zinc-to-set-up-north-indias-1st-phosphate-fertiliser-plant-in-chittor/articleshow/125896839.cms?utm_source=chatgpt.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ms-1"
                                        >
                                            Hindustan Zinc
                                        </a>&nbsp;
                                        is reportedly setting up a large phosphate fertilizer plant in
                                        Chittorgarh, Rajasthan, with an annual capacity of around one million
                                        tonnes for DAP/NPK/ammonium phosphate sulphate products. This is
                                        strategically important because it links domestic mineral-rich Rajasthan
                                        with downstream fertilizer manufacturing.
                                    </p>

                                    <h4 className="mt-4">3. Sulphur: domestic production rising, but import dependence remains</h4>
                                    <p className="my-3">
                                        Sulphur has emerged as another major area of concern. India imports
                                        approximately 4–6 million tonnes of sulphur annually, primarily from
                                        Gulf countries such as Saudi Arabia, Qatar, and the UAE (IBM Mineral
                                        Yearbook, 2024). Sulphur is increasingly important for oilseeds, pulses,
                                        onions, and other sulphur-responsive crops cultivated across
                                        Maharashtra, Rajasthan, and Madhya Pradesh. Since sulphur is largely
                                        recovered from oil and gas refining, its supply chain remains deeply
                                        connected to energy markets and geopolitical stability in West Asia.
                                    </p>

                                    <p className="my-3">
                                        Sulphur is produced domestically mainly as a by-product of petroleum
                                        refining.
                                        <a
                                            href="https://iocl.com/sulphur?utm_source=chatgpt.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ms-1"
                                        >
                                            IndianOil
                                        </a>&nbsp;
                                        states that sulphur is recovered from sulphur-rich fuel gas in
                                        refineries, and sulphur recovery units exist at refineries such as
                                        Mathura, Haldia, Koyali and Panipat. Still the production counts to 0.25
                                        Million tonne Per Annum.
                                    </p>

                                    <p className="my-3">
                                        In September 2022 refinery-linked sulphur recovery expansion was
                                        announced. IndianOil awarded a 400 TPD sulphur recovery unit project
                                        at Vadodara, designed to recover sulphur from sour gas using imported
                                        technology. It was supposed to be started by early 2025, yet there has
                                        been no official announcement. This would have produced 0.15 Million
                                        tonne per annum capacity which could have been transferred to other parts
                                        of the country.
                                    </p>

                                    <p className="my-3">
                                        <strong>What India can adopt:</strong> Malaysia's Petronas-type sulphur
                                        recovery models, double-absorption sulphuric acid plants, and higher
                                        recovery-efficiency refineries are relevant. India should integrate
                                        sulphur recovery with fertilizer-grade sulphuric acid supply, especially
                                        for phosphate fertilizer clusters.
                                    </p>

                                    <h4 className="mt-4">4. Zinc: strong domestic metal base, weak fertilizer-grade integration</h4>
                                    <p className="my-3">
                                        Zinc deficiency has become a major challenge for Indian agriculture.
                                        Around 40–50 percent of fertilizer-grade zinc demand is met through
                                        imports despite India being one of the world's major zinc producers
                                        (Fertiliser Association of India, 2024). Zinc plays a vital role in
                                        grain quality and crop productivity, particularly in zinc-deficient
                                        soils across Bihar, Uttar Pradesh, Karnataka, and eastern India. The
                                        lack of integrated value chains between domestic zinc producers and
                                        fertilizer manufacturers has limited India's ability to fully utilize
                                        its domestic mineral capacity.
                                    </p>

                                    <p className="my-3">
                                        India has strong zinc mining and smelting capacity.
                                        <a
                                            href="https://www.hzlindia.com/news-and-media/press-release/hindustan-zinc-world-s-largest-integrated-zinc-producer-records-historic-refined-metal-production?utm_source=chatgpt.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ms-1"
                                        >
                                            Hindustan Zinc
                                        </a>&nbsp;
                                        reported historic annual mined metal production of <strong>1,095 KT</strong> and
                                        refined metal production of <strong>1,052 KT</strong> for FY25. The problem is not
                                        zinc availability; it is conversion into fertilizer-grade zinc sulphate
                                        and micronutrient products at scale.
                                    </p>

                                    <p className="my-3">
                                        The policy opportunity is to integrate Hindustan Zinc, fertilizer
                                        companies, and micronutrient manufacturers into a zinc-fertilizer value
                                        chain.
                                        <a
                                            href="https://www.vedantalimited.com/public/uploads/16302/Hindu-Business-Line-%281%29.pdf?utm_source=chatgpt.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ms-1"
                                        >
                                            HZL's
                                        </a>&nbsp;
                                        planned fertilizer foray is important because sulphuric acid generated
                                        as a co-product of zinc smelting can be used as a fertilizer raw
                                        material.
                                    </p>

                                    <p className="my-3">
                                        <strong>Alternate chemistry:</strong> Chelated zinc such as Zn-EDTA should
                                        be prioritized for high-value crops and deficient soils because it
                                        improves uptake at lower doses. Biochar-based zinc delivery and
                                        controlled-release coatings are also promising.
                                    </p>

                                    <h4 className="mt-4">5. Selenium: still weak domestically, but recovery route exists</h4>
                                    <p className="my-3">
                                        Micronutrients are also becoming strategically important for Indian
                                        agriculture. Selenium imports have reached nearly 500 tonnes annually,
                                        driven by increasing interest in biofortification and nutritional
                                        agriculture (WITS Trade Database, 2024). Selenium is now being used in
                                        pilot programs for crops such as wheat and lentils in Punjab and Madhya
                                        Pradesh. However, India lacks significant domestic selenium recovery
                                        infrastructure and remains dependent on imports from technologically
                                        advanced refining economies such as Japan and South Korea.
                                    </p>

                                    <p className="my-3">
                                        Selenium is not mined directly; it is recovered mainly from copper anode
                                        slime. Hindustan Copper confirms it is India's only vertically
                                        integrated copper producer, with operations from mining to smelting,
                                        refining and casting. That makes copper refineries the logical domestic
                                        source of selenium. However, India does not yet appear to have
                                        commercial-scale selenium recovery for fertilizer use. New research is
                                        moving toward low-temperature hydrometallurgical recovery of selenium
                                        from copper anode slime, with recent studies showing recovery below 100°C.
                                    </p>

                                    <p className="my-3">
                                        <strong>What India can adopt:</strong> Japan and South Korea recover
                                        selenium as part of advanced copper-refining ecosystems. India should
                                        build selenium recovery into Hindustan Copper, Hindalco, and e-waste
                                        recycling clusters.
                                    </p>

                                    <h4 className="mt-4">6. Boron: weakest domestic position</h4>
                                    <p className="my-3">
                                        India has limited commercially viable boron reserves and remains
                                        import-dependent. The agronomic case is strong: ICAR-linked research
                                        notes that boron deficiency is becoming common in many Indian states.
                                        But domestic production has not meaningfully progressed.
                                    </p>

                                    <h4 className="mt-4">Road Ahead</h4>
                                    <p className="my-3">
                                        Recognizing these vulnerabilities, India has recently begun
                                        transitioning from a purely import-management approach toward a broader
                                        strategy of critical mineral security and domestic resource development.
                                        Although public discussions around critical minerals largely focus on
                                        electric vehicles and clean energy technologies, fertilizer-linked
                                        minerals are equally important because of their direct relationship with
                                        food security.
                                    </p>

                                    <p className="my-3">
                                        Future plans are expected to include additional auctions for
                                        phosphorite, phosphate-bearing minerals, and associated
                                        fertilizer-linked critical minerals across Rajasthan, Gujarat, and other
                                        mineral-rich regions. Simultaneously, the Geological Survey of India has
                                        expanded exploration activities for potash, phosphates, and strategic
                                        micronutrients. India is also exploring technologies for phosphorus
                                        recovery from sewage sludge, selenium recovery from copper refining
                                        residues, and zinc extraction from industrial tailings to create a more
                                        circular fertilizer mineral economy.
                                    </p>

                                    <p className="my-3">
                                        The strategic importance of fertilizer minerals will only grow in the
                                        coming decades due to rising food demand, climate pressures, soil
                                        degradation, and geopolitical fragmentation. In this emerging
                                        environment, food sovereignty will increasingly depend on mineral
                                        sovereignty. India can no longer treat fertilizer security merely as a
                                        subsidy issue; it must now be viewed as a strategic national security
                                        challenge linked to critical minerals, maritime stability, and
                                        geopolitical resilience.
                                    </p>

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
                                                Mithilesh Phadke is a Programme Executive at the Ananta Aspen Centre. This non-partisan, non-profit organisation promotes value- based leadership and convenes Track II dialogues with India’s strategic partner countries. At the Centre, he works in the Leadership vertical where he curates programmes, socratic dialogues and fellowships for various demographics, including high school students, mid-career professionals, senior leaders, and women entrepreneurs from tier 2 &amp; 3 cities. He is also part of an annual event called Ananta Godrej Ideas India, where fellows from Ananta’s seven fellowships and different walks of life gather to exchange ideas for ushering in significant societal change. Additionally, he contributes to the International Relations Vertical on a project basis, like curation support for the Arctic Circle India Forum, and research support for Ananta’s Critical Minerals Dashboard. He is also involved in leading an annual public event that dissects and analyses the Indian government's Union Budget. Across the programmes, his role varies from curation, research, logistics management, analytical visualisation, graphic tools development, and stakeholder engagement to connect government, business, and civil society for more effective dialogue. His work reflects a commitment to nurturing leadership and fostering informed conversations that contribute to a better future.
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
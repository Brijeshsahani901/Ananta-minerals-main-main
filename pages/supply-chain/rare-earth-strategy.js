import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";

export default function RareEarthStrategy() {
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
            src={`${basePath}/assets/minerals_images/colorful-baubles.jpg`}
            alt="Rare Earth Minerals"
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
                  <h2 className="my-3">
                    Breaking China's stranglehold over rare earth supplies
                  </h2>

                  <p className="my-3">
                    Chinese supplies of rare-earth doped magnets to India have not resumed, 
                    weeks after a political agreement had been reached to resume shipments to India. 
                    This has been crimping production at several Indian automobile plants. 
                    The problem must be tackled at multiple levels.
                  </p>

                  <p className="my-3">
                    The most obvious, and simplest, solution is to hold China to its commitment 
                    to resume shipping of these critical supplies to India. Another is to try and 
                    source these vital materials from other countries. A third solution is to develop 
                    India's own supplies of the relevant rare earths and rare-earth doped magnets 
                    of the requisite strength and size. A fourth is to develop motors that do away 
                    with dependence on super-strong magnets made of rare-earth doped materials, 
                    and develop alternate kinds of motors.
                  </p>

                  <h3 className="my-3">Understanding Rare Earth Metals</h3>

                  <p className="my-3">
                    Rare earth metals refer to a group of 17 chemical elements including 15 lanthanides 
                    with the addition of scandium (Sc) and yttrium (Y), as defined by the International 
                    Union of Pure and Applied Chemistry. Research is intensifying in gathering data on 
                    the location of rare earth mineral deposits, ways to extract them, and minimize the 
                    use of polluting materials in the extraction and refining of rare earths. China had 
                    taken an early lead in this area, but other nations are now trying to catch up. 
                    India must redouble its efforts in this national and global endeavour.
                  </p>

                  <p className="my-3">
                    Rare earths are vital in the electric vehicle industry, the automobile industry in 
                    general, renewable power, in electronics, cutting edge defence equipment and 
                    telecommunications. China could force the Trump administration to come off its high 
                    horse and abandon the 145% tariffs it had placed on exports from China, by threatening 
                    to stop all export of rare earths and other critical minerals to the US. This 
                    illustrates how vital rare earths are.
                  </p>

                  <h3 className="my-3">Global Distribution and Production</h3>

                  <p className="my-3">
                    China has nearly half the world's rare earth deposits. But other countries have 
                    sizeable reserves, too. Brazil has over 23% of the world's known reserves. India's 
                    share is a little over 7%. However, China accounts for almost two-thirds of the 
                    global production of rare earth minerals, significantly in excess of its share in 
                    deposits. China also owns some 92% of the refining capacity for rare earth. And it 
                    is the largest exporter of refined rare earth minerals such as Neodymium, 
                    Praseodymium, Dysprosium, and Terbium.
                  </p>

                  <p className="my-3">
                    A neodymium magnet, made of an alloy of iron, boron and neodymium, with a bit of 
                    dysprosium thrown in, is 12 times as powerful as the ferrite magnets that we are 
                    familiar with, for example, as fridge magnets.
                  </p>

                  <h3 className="my-3">Critical Applications</h3>

                  <p className="my-3">
                    Rare earths have many critical uses, besides doping magnetic materials to intensify 
                    their magnetic property. They are used as phosphors, materials that produce light 
                    when excited by an external energy source, such as the coating on fluorescent lamps 
                    and TV screens. They are used in metallurgy to produce alloys that can withstand 
                    large temperature variations. They are used in electronics, in optical fibre, and 
                    as catalysts in petroleum refining. For all such uses, there are no known substitutes 
                    for the relevant, specific rare earths.
                  </p>

                  <p className="my-3">
                    That means locating and developing new sources of rare earths, apart from developing 
                    known, but largely ignored, deposits. Refining rare earth minerals to extract the 
                    rare earth elements is a laborious, costly and often polluting activity. This is why 
                    most national owners of rare earth deposits have chosen to hand over the development 
                    and exploitation of their reserves to Chinese companies.
                  </p>

                  <h3 className="my-3">India's Strategic Imperative</h3>

                  <p className="my-3">
                    Given the strategic importance of rare earths, nations like India and Brazil would 
                    need to overcome these obstacles, and learn to prospect and explore for these minerals. 
                    Known mineral reserves must aggressively be exploited, investing in techniques of 
                    refining that minimise pollution and cost. For example, America's Ames Laboratory — 
                    with its roots in the concerted effort to deliver the uranium needed for the Manhattan 
                    Project — has recently developed a technique for refining rare earths that dispenses 
                    with hydrofluoric acid, a major pollutant. Prospecting, mining, and refining metals 
                    are multi-disciplinary enterprises that will call for breaking the walls of bureaucracy 
                    and scientific hierarchy that hold whatever expertise India has in separate silos.
                  </p>

                  <p className="my-3">
                    The Monazite sands on the beaches of Kerala, Tamil Nadu, and Andhra Pradesh have been 
                    the most prolific sources of indigenous rare earth supplies. However, rare earth 
                    minerals are located, as well, in the North-East and in rock formations in Rajasthan 
                    and Gujarat, according to the Geological Survey of India. Developing these sources 
                    calls for measures to minimise the adverse environmental impact, and generate societal 
                    consensus.
                  </p>

                  <h3 className="my-3">Research and Development Needs</h3>

                  <p className="my-3">
                    Research projects must be instituted and funded in the relevant departments of multiple 
                    universities and technical institutes and government laboratories. India's private 
                    sector has not shown the readiness to risk their capital on research, the pay-off from 
                    which is not guaranteed. The government will have to fund such research. Considering 
                    that India spends only 0.64% of GDP on R&D (2023 figure), there is much room for 
                    increasing the allocation to research, and, within research, to this vital area.
                  </p>

                  <h3 className="my-3">Motor Technology Innovation</h3>

                  <p className="my-3">
                    A major use of rare earths in India is in the production of motors. The rotary motion 
                    inside the motor is produced by the interaction of magnetic fields in the stator (the 
                    stationary, pipe-like structure with copper winding inside) and the rotor (with coils 
                    around the shaft that turns inside the stator). Most of us know that electricity is 
                    generated by rotating a coil inside a magnetic field, the rotary motion being generated 
                    by turning a turbine — by the wind, water falling on its leaves at pressure from a 
                    height, or by high-pressure steam from a boiler. A mechanical force converts into 
                    electricity, inside the generator. In a motor, the reverse happens: externally supplied 
                    electricity creates mechanical, rotary motion.
                  </p>

                  <p className="my-3">
                    In a simple AC motor, the magnetic force is induced in the stator and the rotor by 
                    passing electricity through a coil. Instead, if a powerful permanent magnet already 
                    creates a magnetic field in either – mostly in the rotor – magnetic induction needs 
                    to take place only in the other, mostly the stator. The more powerful the permanent 
                    magnet, the more efficient the motor. Rare-earth infused permanent magnets are deployed 
                    to create efficient motors, not only to turn the wheels of an electric vehicle, but 
                    also to assist brakes, the steering, the windshield wipers and the seats. Most 
                    efficient motors, big and small, make use of permanent magnets.
                  </p>

                  <h3 className="my-3">Alternative Motor Technologies</h3>

                  <p className="my-3">
                    It is possible, however, to create efficient motors without permanent magnets, making 
                    use of the property of magnetic reluctance, the resistance to getting magnetised of 
                    some materials. This also can be used to interact with the magnetic field of the stator 
                    to create the rotary motion of the rotor. Such motors have been around since the 19th 
                    century, but the ability to govern the speed of rotation in such motors had to wait for 
                    the advent of modern microelectronics in the 1990s. An electronic regulator, governed 
                    by a clever algorithm, makes the reluctant motor do a good job, even without those 
                    esoteric, rare-earth infused permanent magnets.
                  </p>

                  <p className="my-3">
                    Developing efficient reluctant motors — they come in different types, too — is a major 
                    engineering opportunity, a global opportunity. India is surpassed only by China in the 
                    number of engineers with the capability to develop the right type, right power, and 
                    right number of alternatives to traditional motors making use of permanent magnets. 
                    China would be against, rather than for, a project that dilutes the power of their 
                    monopoly over rare-earth-infused permanent magnets. That means the field is open to 
                    Indian engineering ingenuity without contestation.
                  </p>

                  <p className="my-3">
                    By developing alternative supplies of rare earths and by developing efficient motors 
                    that dispense with permanent magnets, India can wriggle out of the stranglehold China 
                    has over the supply of rare earths and rare-earth-infused magnets.
                  </p>

               <Card
      className="d-flex flex-column flex-md-row gap-4 p-4 mt-5 shadow-sm"
      style={{
        backgroundColor: "#fff6f6",
        borderRadius: "10px",
      }}
    >
      {/* Author Image */}
      <img
        src={`${basePath}/assets/img/T.K Arun.jpg`}
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
          <h5 className="mb-0 fw-semibold text-dark">T K Arun</h5>
          <Badge bg="success" pill>
            Author
          </Badge>
        </div>

        <p
          className="text-muted"
          style={{ lineHeight: 1.6 }}
        >
          T K Arun is a Delhi-based journalist and columnist. He writes extensively on a range of
          subjects overlapping political economy, accessible at{" "}
          <a
            href="http://tkarun.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            http://tkarun.substack.com
          </a>
          . He has been the resident editor of the Economic Times at Delhi, headed the economy bureau
          and looked after the editorial page of the paper in the past. He had been with the paper
          from 1994 till contractual disengagement at the end of 2021, except for a two-and-a-half
          year stint with the Dotcom world.
          He has worked as a technical advisor at the Kerala State Planning Board, before beginning
          his career in journalism in 1992 at the Observer of Business and Politics.
          He did his Master’s in economics from the Centre for Economic Studies and Planning, Jawaharlal
          Nehru University, New Delhi.
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
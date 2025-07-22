import Layout from "@/components/layout/Layout";
import MilitaryDronesAssembly from "@/components/militaryDroneAssembly";
import { FaDownload } from "react-icons/fa";

export default function DefenceAerospace() {
  const handleDownload = () => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    console.log(basePath);
    const link = document.createElement("a");

    link.href = `${basePath}/assets/downloads/Defence_and _Aerospace.pdf`; // ✅ correct URL
    link.download = "Defence_and _Aerospace.pdf";
    console.log(link);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Layout
        breadcrumbCategory="Defence"
        breadcrumbPostTitle="Mineral Security in India's Defence and Aerospace Supply Chain"
      >
        <section
          className="blog-details-area"
          style={{
            backgroundImage: `url("https://brijesh.alpinesoftit.com/site3/static/media/home-shape.684c9f3deb5fb22fbe2f.png")`,
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-1"></div>
              <div className="col-xl-9 col-lg-8">
                <div className="blog-post-wrapper">
                  <div className="latest__post-item">
                    <div className="latest__post-content">
                      <h1 className="title">
                        Mineral Security in India's Defence and Aerospace Supply
                        Chain
                      </h1>

                     <div className="post-meta">
                        <p className="date">
                          <b>Date</b> :- July 2025
                        </p>
                        <p className="author">
                          <b>Author(s)</b> :- By Prerna Bountra
                        </p>
                        <br />
                        <button
                          onClick={handleDownload}
                          className="btn btn-primary rounded d-inline-flex align-items-center"
                          style={{
                            padding: "0.4rem 0.75rem",
                            fontSize: "0.75rem",
                            textTransform: "none",
                            lineHeight: 1,
                            fontWeight: 500,
                            margintop: "5px",
                          }}
                        >
                          <FaDownload
                            className="me-1"
                            style={{ fontSize: "0.85rem" }}
                          />
                          Download Study
                        </button>
                      </div>

                      <div
                        style={{
                          background: "#f5f5f5",
                          margin: "50px 0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <MilitaryDronesAssembly />
                      </div>

                      <div className="content-section">
                        <h3 className="content-title">Overview</h3>
                        <p>
                          The defence and aerospace sectors represent the
                          technological apex of India's industrial ambitions,
                          underpinning national security, regional power
                          projection, and strategic autonomy. These sectors are
                          becoming increasingly mineral-intensive, driven by the
                          adoption of hypersonic platforms, miniaturised
                          electronic warfare systems, directed energy weapons,
                          and advanced jet propulsion technologies.
                        </p>
                        <p>
                          India's defence and aerospace minerals landscape is
                          characterized by high import dependency for all
                          high-purity strategic minerals, with complete external
                          reliance for at least five critical minerals. There
                          are no strategic stockpiling mechanisms for elements
                          such as tantalum, rhenium, or niobium, and minimal
                          domestic refining and separation capacity,
                          particularly for REEs, PGMs, and hafnium.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

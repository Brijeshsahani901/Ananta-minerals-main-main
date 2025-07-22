import Layout from "@/components/layout/Layout";
import { FaDownload } from "react-icons/fa";

export default function SupplyChain() {
  const handleDownload = (label) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    console.log(basePath);
    const link = document.createElement("a");

    link.href = `${basePath}/assets/downloads/${label}.pdf`; // ✅ correct URL
    link.download = `${label}.pdf`;
    console.log(link);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout
      breadcrumbCategory="supply chain"
      breadcrumbPostTitle="Critical Minerals Resource Center"
    >
      <section
        className="blog-details-area fit-content-height"
        style={{
          backgroundImage: `url("https://brijesh.alpinesoftit.com/site3/static/media/home-shape.684c9f3deb5fb22fbe2f.png")`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div className="blog-post-wrapper">
                <div className="latest__post-item">
                  <div className="latest__post-content">
                    <div className="documents-overview mt-4">
                      {/* Document Box 1 */}
                      <div
                        className="document-box mb-4"
                        style={{
                          border: "1px solid #dee2e6",
                          borderRadius: "5px",
                          backgroundColor: "#fff",
                          overflow: "hidden",
                        }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                              alt="Mineral Value Chain"
                              className="img-fluid h-100 w-100"
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                          <div className="col-md-8 p-4">
                            <h5
                              style={{
                                fontSize: "1.25rem",
                                fontWeight: "600",
                                color: "#212529",
                                marginBottom: "1rem",
                              }}
                            >
                              Critical Pathways: Building India's Mineral Value
                              Chain
                            </h5>
                            <p style={{ marginBottom: "1rem" }}>
                              This comprehensive analysis examines India's
                              strategic mineral dependencies across the entire
                              value chain - from geological exploration to final
                              integration in defense and electronics.
                            </p>
                            <ul
                              style={{
                                marginBottom: "1.5rem",
                                paddingLeft: "1.5rem",
                              }}
                            >
                              <li>
                                Phase-wise capabilities and gaps in mineral
                                processing
                              </li>
                              <li>
                                Key pilot projects for rare earth elements and
                                critical metals
                              </li>
                              <li>
                                International technology transfer opportunities
                              </li>
                              <li>
                                Policy recommendations for mineral security
                              </li>
                            </ul>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default anchor behavior
                                handleDownload("critical_pathway"); // Call your custom function
                              }}
                              className="btn btn-sm btn-primary rounded-pill"
                              style={{
                                padding: "0.6rem 1rem",
                                fontSize: "0.9rem",
                                textTransform: "none",
                              }}
                            >
                              <FaDownload className="me-2" />
                              Download Full Report
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Document Box 2 */}
                      <div
                        className="document-box"
                        style={{
                          border: "1px solid #dee2e6",
                          borderRadius: "5px",
                          backgroundColor: "#fff",
                          overflow: "hidden",
                        }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                              alt="Battery Recycling"
                              className="img-fluid h-100 w-100"
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                          <div className="col-md-8 p-4">
                            <h5
                              style={{
                                fontSize: "1.25rem",
                                fontWeight: "600",
                                color: "#212529",
                                marginBottom: "1rem",
                              }}
                            >
                              Closing the Loop: Strengthening India's Battery
                              Recycling Supply Chains
                            </h5>
                            <p style={{ marginBottom: "1rem" }}>
                              This strategic report analyzes India's battery
                              recycling ecosystem and its role in securing
                              critical mineral supply chains for the clean
                              energy transition.
                            </p>
                            <ul
                              style={{
                                marginBottom: "1.5rem",
                                paddingLeft: "1.5rem",
                              }}
                            >
                              <li>
                                Current policy framework and industry efforts
                              </li>
                              <li>
                                Comparative analysis with global recycling
                                leaders
                              </li>
                              <li>
                                Reverse logistics challenges and solutions
                              </li>
                              <li>Roadmap for circular economy integration</li>
                            </ul>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default anchor behavior
                                handleDownload("closing_loop"); // Call your custom function
                              }}
                              className="btn btn-sm btn-primary rounded-pill"
                              style={{
                                padding: "0.6rem 1rem",
                                fontSize: "0.9rem",
                                textTransform: "none",
                              }}
                            >
                              <FaDownload className="me-2" />
                              Download Full Report
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

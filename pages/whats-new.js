import Layout from "@/components/layout/Layout";
import { useRef } from "react";
import { whatsnew } from "@/util/mineralData";

export default function WhatsNew() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const criticalRef = useRef(null);
  const sortedWhatsnew = [...whatsnew].sort((a, b) => {
    const dateA = new Date(a.date.replace(/(\d+)(st|nd|rd|th)/, "$1"));
    const dateB = new Date(b.date.replace(/(\d+)(st|nd|rd|th)/, "$1"));
    return dateB - dateA;
  });

  return (
    <>
      <Layout
        breadcrumbCategory="Agriculture"
        breadcrumbPostTitle="Mineral Security in India's Agriculture Sector"
      >
        <section
          style={{
            backgroundImage: `url("${basePath}/static/media/home-shape.684c9f3deb5fb22fbe2f.png")`,
          }}
        >
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12">
                <div className="blog-post-wrapper">
                  <div className="latest__post-content">
                    <div
                      className="document-box p-4"
                      style={{
                        borderRadius: "8px",
                        backgroundColor: "#f9f9f9",
                      }}
                    >
                      {sortedWhatsnew.map((item, index) =>
                        item.customLinks ? (
                          <div key={index} style={{ textDecoration: "none" }}>
                            <div
                              className="post-entry d-flex mb-5 shadow-sm"
                              style={{
                                position: "relative",
                                backgroundColor: "#ffffff",
                                borderRadius: "8px",
                                padding: "20px 24px",
                                transition:
                                  "box-shadow 0.3s ease, transform 0.2s ease",
                                cursor: "pointer",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow =
                                  "0 6px 20px rgba(0,0,0,0.1)";
                                e.currentTarget.style.transform =
                                  "translateY(-2px)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "none";
                                e.currentTarget.style.transform =
                                  "translateY(0)";
                              }}
                            >
                              {/* Unique Gradient Line */}
                              <div
                                style={{
                                  width: "3px",
                                  borderRadius: "6px",
                                  background:
                                    "linear-gradient(to bottom, #b7f8db, #50a7c2)",
                                  position: "absolute",
                                  left: "0",
                                  top: "0",
                                  bottom: "0",
                                }}
                              ></div>

                              <div
                                className="post-content"
                                style={{ flex: 1, marginLeft: "16px" }}
                              >
                                <h4
                                  style={{
                                    color: "#2F4156",
                                    fontWeight: "600",
                                    transition: "color 0.3s",
                                    marginBottom: "10px",
                                  }}
                                  ref={criticalRef}
                                >
                                  {item.title
                                    .split(" ")
                                    .map((word, wordIndex) => {
                                      const linkKey = word.replace(/[.,]/g, "");
                                      if (item.customLinks[linkKey]) {
                                        return (
                                          <a
                                            key={wordIndex}
                                            href={item.customLinks[linkKey]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                              color: "#2F4156",
                                              textDecoration: "none",
                                              fontWeight: "600",
                                              borderBottom: "1px solid #2F4156",
                                            }}
                                            onMouseEnter={(e) => {
                                              e.currentTarget.style.color =
                                                "#007BFF";
                                              e.currentTarget.style.borderBottomColor =
                                                "#007BFF";
                                            }}
                                            onMouseLeave={(e) => {
                                              e.currentTarget.style.color =
                                                "#2F4156";
                                              e.currentTarget.style.borderBottomColor =
                                                "#2F4156";
                                            }}
                                          >
                                            {word}{" "}
                                          </a>
                                        );
                                      }
                                      return (
                                        <span key={wordIndex}>{word} </span>
                                      );
                                    })}
                                </h4>

                                <div
                                  style={{
                                    fontSize: "14px",
                                    color: "#666",
                                    marginBottom: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <span style={{ color: "#2F4156" }}>
                                    {item.date}
                                  </span>
                                  <div
                                    style={{
                                      height: "12px",
                                      width: "2px",
                                      background: "#000",
                                      margin: "0 10px",
                                    }}
                                  ></div>
                                  <span style={{ color: "#2F4156" }}>
                                    {item.author}
                                  </span>
                                </div>

                                {item.description && (
                                  <p
                                    style={{
                                      fontSize: "16.5px",
                                      color: "#333",
                                      lineHeight: "1.6",
                                    }}
                                    dangerouslySetInnerHTML={{
                                      __html: item.description,
                                    }}
                                  ></p>
                                )}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <a
                            href={
                              /^https?:\/\//.test(item.path)
                                ? item.path
                                : item.path
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              id={`post-${item.id}`}
                              className="post-entry d-flex mb-5 shadow-sm"
                              style={{
                                position: "relative",
                                backgroundColor: "#ffffff",
                                borderRadius: "8px",
                                padding: "20px 24px",
                                transition:
                                  "box-shadow 0.3s ease, transform 0.2s ease",
                                cursor: "pointer",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow =
                                  "0 6px 20px rgba(0,0,0,0.1)";
                                e.currentTarget.style.transform =
                                  "translateY(-2px)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "none";
                                e.currentTarget.style.transform =
                                  "translateY(0)";
                              }}
                            >
                              {/* Unique Gradient Line */}
                              <div
                                style={{
                                  width: "3px",
                                  borderRadius: "6px",
                                  background:
                                    "linear-gradient(to bottom, #b7f8db, #50a7c2)",
                                  position: "absolute",
                                  left: "0",
                                  top: "0",
                                  bottom: "0",
                                }}
                              ></div>

                              <div
                                className="post-content"
                                style={{ flex: 1, marginLeft: "16px" }}
                              >
                                <h4
                                  style={{
                                    color: "#2F4156",
                                    fontWeight: "600",
                                    transition: "color 0.3s",
                                    marginBottom: "10px",
                                  }}
                                  ref={criticalRef}
                                  onMouseEnter={(e) =>
                                    (e.currentTarget.style.color = "#007BFF")
                                  }
                                  onMouseLeave={(e) =>
                                    (e.currentTarget.style.color = "#2F4156")
                                  }
                                >
                                  {item.title}
                                </h4>

                                <div
                                  style={{
                                    fontSize: "14px",
                                    color: "#666",
                                    marginBottom: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <span style={{ color: "#2F4156" }}>
                                    {item.date}
                                  </span>
                                  <div
                                    style={{
                                      height: "12px",
                                      width: "2px",
                                      background: "#000",
                                      margin: "0 10px",
                                    }}
                                  ></div>
                                  <span style={{ color: "#2F4156" }}>
                                    {item.author}
                                  </span>
                                </div>

                                {item.description && (
                                  <p
                                    style={{
                                      fontSize: "16.5px",
                                      color: "#333",
                                      lineHeight: "1.6",
                                    }}
                                    dangerouslySetInnerHTML={{
                                      __html: item.description,
                                    }}
                                  ></p>
                                )}
                              </div>
                            </div>
                          </a>
                        )
                      )}
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

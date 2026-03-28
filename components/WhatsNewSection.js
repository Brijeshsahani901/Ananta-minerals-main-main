"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { whatsnew } from "@/util/mineralData";

export default function WhatsNewSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const sortedMineralPosts = [...whatsnew].sort((a, b) => {
    const dateA = new Date(a.date.replace(/(\d+)(st|nd|rd|th)/, "$1"));
    const dateB = new Date(b.date.replace(/(\d+)(st|nd|rd|th)/, "$1"));
    return dateB - dateA;
  });

  const [isMobile, setIsMobile] = useState(false);
  const whatsNewRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const el = whatsNewRef.current;
    const scrollFn = () => {
      el.style.boxShadow =
        el.scrollTop > 0 ? "0 2px 8px rgba(0,0,0,0.1)" : "none";
    };
    el?.addEventListener("scroll", scrollFn);
    return () => el?.removeEventListener("scroll", scrollFn);
  }, []);

  useEffect(() => {
    const el = whatsNewRef.current;

    // const wheelFn = (e) => {
    //   const { scrollTop, scrollHeight, clientHeight } = el;
    //   const atTop = scrollTop === 0;
    //   const atBottom = scrollTop + clientHeight >= scrollHeight;

    //   if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) return;

    //   e.preventDefault();
    //   el.scrollTop += e.deltaY;
    // };

 const wheelFn = (e) => {
  const { scrollTop, scrollHeight, clientHeight } = el;
  const atTop = scrollTop === 0;
  const atBottom = scrollTop + clientHeight >= scrollHeight - 1; // tolerance

  // If INSIDE scroll area → manually scroll
  if (!atTop && !atBottom) {
    e.preventDefault();
    el.scrollTop += e.deltaY;
    return;
  }

  // If AT TOP
  if (atTop && e.deltaY < 0) {
    // let page scroll naturally
    return; 
  }

  // If AT BOTTOM
  if (atBottom && e.deltaY > 0) {
    // let page scroll naturally
    return; 
  }

  // Otherwise normal behavior
};



    el?.addEventListener("wheel", wheelFn, { passive: false });
    return () => el?.removeEventListener("wheel", wheelFn);
  }, []);

  const handleMouseEnter = (e) => {
    e.currentTarget.style.color = "#2F4156";
    e.currentTarget.style.transform = "translateX(3px)";
    e.currentTarget.style.transition = "all 0.2s ease";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.color = "";
    e.currentTarget.style.transform = "translateX(0)";
  };

  return (
    <div
      ref={whatsNewRef}
      className="col-12 col-lg-4 px-3"
      style={{
        height: "535px",
        maxHeight: isMobile ? "none" : "535px",
        overflowY: "scroll",
        overflowX: "hidden",
        borderRadius: "6px",
        border: "1px solid #e0e0e0",
        transition: "box-shadow 0.3s ease",
        backgroundColor: "#ffffff",
        scrollbarWidth: "thin",
        scrollbarColor: "#c1c1c1 #f1f1f1",
        overscrollBehavior: "auto"
      }}
    >
      {/* HEADER */}
      <div
        style={{
          padding: "10px 10px",
          borderBottom: "0.5px solid #e0e0e0",
          backgroundColor: "#ffffff",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Link
          href="/whats-new"
          style={{
            textDecoration: "none",
            display: "inline-block",
            position: "relative",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              margin: 0,
              color: "#000",
              fontWeight: "600",
              padding: "8px 6px 14px 6px",
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              transition: "color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#3A8DFF";

              const underline =
                e.currentTarget.querySelector(".main-underline");
              underline.style.background = "#3A8DFF";
              underline.style.transform = "scaleX(1.2)";
              underline.style.height = "3px";

              const arrow = e.currentTarget.querySelector(".arrow-icon");
              arrow.style.transform = "translateX(5px)";
              arrow.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#000";

              const underline =
                e.currentTarget.querySelector(".main-underline");
              underline.style.background = "#000";
              underline.style.transform = "scaleX(1)";
              underline.style.height = "2px";

              const arrow = e.currentTarget.querySelector(".arrow-icon");
              arrow.style.transform = "translateX(0px)";
              arrow.style.opacity = "0.8";
            }}
          >
            What's New
            <span
              className="main-underline"
              style={{
                position: "absolute",
                bottom: "10px",
                left: "6px",
                width: "100%",
                height: "2px",
                background: "#000",
                borderRadius: "2px",
                transition:
                  "background 0.25s ease, transform 0.3s cubic-bezier(0.4,0,0.2,1), height 0.25s",
                transformOrigin: "left center",
              }}
            ></span>
            <span
              className="arrow-icon"
              style={{
                fontSize: "18px",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                opacity: 0.8,
              }}
            >
              ➜
            </span>
          </h3>
        </Link>
      </div>

      {/* POSTS */}
      <div style={{ padding: "6px 6px" }}>
        {sortedMineralPosts.map((post, index) => (
          <div
            className="d-flex"
            key={post.id}
            style={{
              marginBottom: index !== whatsnew.length - 1 ? "6px" : "0",
              padding: "4px 0",
            }}
          >
            <div className={post.img === "" ? "col-12" : "col-8"}>
              {/* CUSTOM LINKS POST */}
              {post.customLinks ? (
                <Link
                  href={`/whats-new#post-${post.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      padding: "6px",
                      borderRadius: "4px",
                      transition: "background-color 0.2s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f8f9fa")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    <h2
                      style={{
                        fontSize: "15px",
                        margin: "0 0 2px 0",
                        color: "#111",
                        fontWeight: "600",
                        lineHeight: "1.35",
                      }}
                    >
                      <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ cursor: "pointer" }}
                      >
                        {post.title}
                      </div>
                    </h2>
                  </div>
                </Link>
              ) : (
                /* NORMAL POST CLICK */
                <Link
                  href={`/whats-new#post-${post.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      padding: "6px",
                      borderRadius: "4px",
                      transition: "background-color 0.2s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f8f9fa")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    <h2
                      style={{
                        fontSize: "15px",
                        margin: 0,
                        color: "#111",
                        fontWeight: "600",
                        lineHeight: "1.35",
                      }}
                    >
                      <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {post.title}
                      </div>
                    </h2>
                  </div>
                </Link>
              )}

              {/* DATE + AUTHOR */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "12px",
                  marginTop: "4px",
                  marginLeft: "7px",
                  color: "#2F4156",
                  fontWeight: 500,
                  width : "100%"
                }}
              >
                <span
                  style={{
                    whiteSpace: "nowrap", // ← FORCE single line
                  }}
                >
                  {post.date}
                </span>
                <div
                  style={{
                    height: "10px",
                    width: "1px",
                    background: "#ccc",
                    margin: "0 6px",
                  }}
                ></div>
                <span>{post.author}</span>
              </div>

              {index !== whatsnew.length - 1 && (
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, #e0e0e0 50%, transparent 100%)",
                    height: "0.5px",
                    width: "100%",
                    margin: "6px 0",
                  }}
                ></div>
              )}
            </div>

            {/* IMAGE CLICK → Scroll to post */}
            {post.img && (
              <div className="col-4">
                <Link href={`/whats-new#post-${post.id}`}>
                  <div
                    style={{
                      padding: "6px 4px",
                      height: "100%",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <img
                      src={`${basePath}/assets/minerals_images/${post.img}`}
                      alt={post.title}
                      style={{
                        width: "100%",
                        height: "70px",
                        objectFit: "cover",
                        borderRadius: "4px",
                        transition: "transform 0.2s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.03)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </div>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

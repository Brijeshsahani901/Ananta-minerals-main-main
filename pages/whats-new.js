import BlogSidebar from "@/components/elements/BlogSidebar";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState, useRef } from "react";
import gsap from "gsap";
import SupplyChainSteps from "@/components/supplyChainSteps";
import { FaDownload } from "react-icons/fa";

export default function WhatsNew() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const criticalRef = useRef(null);

  const whatsnew = [
    {
      id: 9,
      title: "Disruption In The Supply Of Rare Earth Magnets",
      description:
        "The Indian government’s granular tracking of dependency on Chinese rare earth magnets, highlighted by the relaying of Society of Indian Automobile Manufacturers (SIAM) data, reflects concerns over vulnerabilities in key sectors like automobiles and tech. This detailed monitoring suggests efforts to mitigate risks by diversifying supply sources and boosting domestic production to secure India’s economic future. The use of data from an industry body like SIAM instead of Ministry of Statistic and Project Implementation(MoSPI) reflects the close contact between the government and private sector on a shared strategic concern of national significance",
      downloadUrl: "#", // Add your actual download link here
      path: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151394",
      author: "PIB",
      date: "13th July, 2025",
      img: "",
    },
    {
      id: 10,
      title:
        "Mines Ministry Recognizes Seven Centres of Excellence to work under the National Critical Mineral Mission",
      description:
        "By designating seven more Centers of Excellence the Government of India is increasing the pool of stakeholders and experts that can further the cause of strategic diversification and even self reliance in the value chain of critical minerals relevant to India.",
      downloadUrl: "#", // Add your actual download link here
      path: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151287",
      author: "PIB",
      date: "13th July, 2025",
      img: "",
    },
  ];

  const sortedWhatsnew = [...whatsnew].sort((a, b) => {
    const dateA = new Date(a.date.replace(/(\d+)(st|nd|rd|th)/, "$1"));
    const dateB = new Date(b.date.replace(/(\d+)(st|nd|rd|th)/, "$1"));
    return dateB - dateA; // Descending order
  });

  //   const handleMouseEnter = (ref) => {
  //     gsap.to(ref.current, {
  //       duration: 0.3,
  //       scale: 1.03,
  //       textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
  //       ease: "power2.out",
  //     });
  //   };

  //   const handleMouseLeave = (ref) => {
  //     gsap.to(ref.current, {
  //       duration: 0.3,
  //       scale: 1,
  //       textShadow: "none",
  //       ease: "power2.out",
  //     });
  //   };

  //   const handleDownload = () => {
  //     const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  //     const pdfUrl = `${basePath}/assets/downloads/Agriculture.pdf`;

  //     // Open the PDF in a new browser tab
  //     window.open(pdfUrl, "_blank");
  //   };

  return (
    <>
      <Layout
        breadcrumbCategory="Agriculture"
        breadcrumbPostTitle="Mineral Security in India's Agriculture Sector"
      >
        <section
          className="blog-details-area"
          style={{
            backgroundImage: `url("${basePath}/static/media/home-shape.684c9f3deb5fb22fbe2f.png")`,
          }}
        >
      <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-xl-12 col-lg-12">
      <div className="blog-post-wrapper">
        <div className="latest__post-item">
          <div className="latest__post-content">
            <div
              className="document-box mb-4 p-4"
              style={{
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
              }}
            >
              {sortedWhatsnew.map((item, index) => (
              <a
  href={/^https?:\/\//.test(item.path) ? item.path : item.path}
  target="_blank"
  rel="noopener noreferrer"
  key={index}
  style={{ textDecoration: "none" }}
>
  <div
    className="post-entry d-flex mb-4 shadow-sm"
    style={{
      position: "relative",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "20px 24px",
      transition: "box-shadow 0.3s ease, transform 0.2s ease",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
      e.currentTarget.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    {/* Unique Gradient Line */}
    <div
      style={{
        width: "3px",
        borderRadius: "6px",
    background: "linear-gradient(to bottom, #b7f8db, #50a7c2)",

        position: "absolute",
        left: "0",
        top: "0",
        bottom: "0",
      }}
    ></div>

    <div className="post-content" style={{ flex: 1, marginLeft: "16px" }}>
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
        <span style={{ color: "#2F4156" }}>{item.date}</span>
        <div
          style={{
            height: "12px",
            width: "2px",
            background: "#000",
            margin: "0 10px",
          }}
        ></div>
        <span style={{ color: "#2F4156" }}>{item.author}</span>
      </div>

      {item.description && (
        <p
          style={{
            fontSize: "15px",
            color: "#333",
            lineHeight: "1.6",
          }}
        >
          {item.description}
        </p>
      )}
    </div>
  </div>
</a>

              ))}
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

"use client";

import Layout from "@/components/layout/Layout";
import TrendingSlider from "@/components/slider/TrendingSlider";
import TechnologySlider from "@/components/slider/TechnologySlider";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import DocumentSlider from "@/components/slider/documentSlider";
import Map from "@/components/Map";
import WhatsNewSection from "@/components/WhatsNewSection";

export default function Home1() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const borderThickness = "0.5px";

  const [isMobile, setIsMobile] = useState(false);
  const whatsNewRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      return window.innerWidth < 768;
    };

    setIsMobile(checkIsMobile());
    setIsVisible(true);

    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Enhanced scroll handler for the What's New section
  useEffect(() => {
    const handleScroll = () => {
      if (whatsNewRef.current) {
        const element = whatsNewRef.current;
        const scrollTop = element.scrollTop;

        // Add shadow when scrolled
        if (scrollTop > 0) {
          element.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
        } else {
          element.style.boxShadow = "none";
        }
      }
    };

    const currentRef = whatsNewRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const fadeInStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  };

  return (
    <div>
      <Layout headerStyle={1}>
        <section className="tgbanner__area" style={fadeInStyle}>
          <div className="px-2">
            <div className="row px-md-5">
              <div className="col-12 col-lg-8 mb-4">
                <div style={fadeInStyle}>
                  <TechnologySlider />
                </div>
              </div>

              {/* Right: What's New section */}
            <WhatsNewSection />

            </div>
          </div>

          {/* Divider */}
          <hr
            style={{
              border: "none",
              borderTop: `${borderThickness} solid #e0e0e0`,
              margin: "30px 0",
              width: "100%",
            }}
          />

          {/* Document Slider */}
          <div className="mb-3 pb-3 px-md-5">
            <h3
              style={{
                marginLeft: "14px",
                marginBottom: "16px",
                color: "#2F4156",
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              Latest Uploads
            </h3>
            <DocumentSlider />
          </div>

          <hr
            style={{
              border: "none",
              borderTop: `${borderThickness} solid #e0e0e0`,
              margin: "30px 0",
              width: "100%",
            }}
          />

          {/* Map Section */}
          <section
            className="trending-post-area section__hover-line"
            style={{
              paddingBottom: "16px",
              paddingTop: isMobile ? "16px" : "0",
              ...fadeInStyle,
            }}
          >
            <div className="px-md-5 px-2">
              <Map />
            </div>
          </section>

          <hr
            style={{
              border: "none",
              borderTop: `${borderThickness} solid #e0e0e0`,
              margin: "30px 0",
              width: "100%",
            }}
          />

          {/* Sectors in Focus */}
          <section
            style={{
              paddingBottom: "20px",
              paddingTop: isMobile ? "16px" : "0",
              ...fadeInStyle,
            }}
          >
            <div className="px-md-5 px-4">
              <div className="trending__slider">
                <div className="swiper-container trending-active">
                  <h3
                    style={{
                      color: "#2F4156",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    Sectors in Focus
                  </h3>
                  <TrendingSlider showItem={4} />
                </div>
              </div>
            </div>
          </section>
        </section>
      </Layout>
    </div>
  );
}

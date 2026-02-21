import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RareEarthInfographic() {
  return (
    <div className="container-fluid p-0">
      <div style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        margin: "0 auto",
        padding: "25px",
        background: "linear-gradient(180deg, #1a2a3a, #2c3e50, #4ca1af)",
        color: "#ffffff",
        borderRadius: "10px",
       minHeight: "530px",
        // height: "480px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        position: "relative",
        overflow: "hidden"
      }}>
        
        {/* Background decorative elements */}
        <div style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(76, 161, 175, 0.2) 0%, rgba(44, 62, 80, 0) 70%)",
          zIndex: 0
        }}></div>
        
        <div style={{
          position: "absolute",
          bottom: "-30px",
          left: "-30px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(44, 62, 80, 0) 70%)",
          zIndex: 0
        }}></div>

        {/* Header */}
        <div className="text-center position-relative" style={{ zIndex: 1 }}>
          <h1 style={{ 
            fontSize: "1.8rem", 
            fontWeight: "bold", 
            margin: 0,
            textShadow: "0 2px 4px rgba(0,0,0,0.3)"
          }}>
            China's Rare Earths Restrictions
          </h1>
          <div style={{ 
            fontStyle: "italic", 
            marginTop: "6px", 
            fontSize: "1rem",
            color: "#b0e0e6"
          }}>
            Announcement 61
          </div>
          <div className="mt-2" style={{
            height: "3px",
            width: "80px",
            background: "linear-gradient(90deg, transparent, #4ca1af, transparent)",
            margin: "0 auto"
          }}></div>
        </div>

        {/* Middle Section */}
        <div className="row align-items-center position-relative" style={{ zIndex: 1, marginTop: "10px" }}>
          {/* Big Number */}
          <div className="col-md-3 text-center">
            <div style={{ 
              fontSize: "5.5rem", 
              fontWeight: "bold", 
              lineHeight: "1",
              background: "linear-gradient(135deg, #4ca1af, #a8e6cf)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 4px 8px rgba(0,0,0,0.2)"
            }}>
              12
            </div>
            <div style={{
              fontSize: "0.9rem",
              color: "#b0e0e6",
              marginTop: "5px"
            }}>
              Restricted Elements
            </div>
          </div>

          {/* Explanation Text */}
          <div className="col-md-9">
            <div style={{ 
              fontSize: "1.1rem", 
              lineHeight: "1.5",
              padding: "15px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "10px",
              borderLeft: "4px solid #4ca1af"
            }}>
              <strong>Out of 17 REE's Export Restrictions imposed.</strong>
              <div style={{ marginTop: "10px", color: "#e0f7fa" }}>
                Exports of 12 of them are now restricted after the ministry added five –
                <span style={{ 
                  fontWeight: "bold",
                  background: "linear-gradient(90deg, #a8e6cf, #4ca1af)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}> holmium, erbium, thulium, europium, and ytterbium</span> – along with related materials.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="position-relative" style={{ zIndex: 1 }}>
          <div style={{
            background: "rgba(255,255,255,0.12)",
            borderRadius: "12px",
            padding: "18px",
            marginTop: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            fontSize: "1rem",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
          }}>
            <div style={{ flex: "1 1 60%", minWidth: "200px" }}>
              Foreign products containing Chinese-origin rare earths
              (more than 0.1 percent) require a Chinese export licence for shipment.
            </div>
            <div style={{
              fontSize: "2.2rem",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginTop: "10px",
              flex: "1 1 30%",
              textAlign: "right",
              textShadow: "0 2px 4px rgba(0,0,0,0.2)"
            }}>
              &gt; 0.1%
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center position-relative" style={{ 
          zIndex: 1, 
          fontSize: "0.8rem", 
          color: "#b0e0e6",
          marginTop: "10px"
        }}>
          Ministry of Commerce • Effective Immediately
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const IndiaOmanMineralInfographic = () => {
  return (
    <Container 
      className="p-1" 
      style={{ 
        maxWidth: '100%', 
        minHeight: '520px',
        backgroundColor: '#0b1120',
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        overflow: 'hidden',
        borderRadius: '10px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
        boxSizing: "border-box"
      }}
    >
      {/* Header */}
      <div style={{
        background: 'linear-gradient(90deg, #1e3a8a 0%, #5b21b6 100%)',
        padding: '8px 16px',
        borderRadius: '10px',
        textAlign: 'center',
        marginBottom: '10px',
        border: '1px solid rgba(255, 255, 255, 0.15)'
      }}>
        <h1 style={{ 
          fontSize: '1.5rem', 
          fontWeight: '900', 
          color: '#ffffff',
          marginBottom: '3px',
          letterSpacing: '0.5px'
        }}>
          INDIA - OMAN POTENTIAL
        </h1>
        <h2 style={{ 
          fontSize: '1.1rem', 
          fontWeight: '700', 
          color: '#fcd34d',
          marginBottom: '0',
          letterSpacing: '0.8px'
        }}>
          MINERAL GAINS
        </h2>
      </div>

      <Row style={{ minHeight: 'calc(530px - 80px)' }} className="g-2">
        {/* Left Column */}
        <Col md={4} style={{ height: '100%' }}>
          <div style={{
            background: '#1e293b',
            borderRadius: '10px',
            padding: '12px',
            height: '100%',
            border: '1px solid #334155',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Mineral Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '8px',
              marginBottom: '12px'
            }}>
              {[
                { name: 'COPPER', color: '#f59e0b' },
                { name: 'CHROMITE', color: '#10b981' },
                { name: 'GYPSUM', color: '#8b5cf6' },
                { name: 'NICKEL', color: '#3b82f6' },
                { name: 'LIMESTONE', color: '#94a3b8' },
                { name: 'PLATINUM', color: '#06d6a0' },
                { name: 'PHOSPHATE', color: '#ec4899' }
              ].map((mineral, index) => (
                <div 
                  key={index}
                  style={{
                    backgroundColor: `${mineral.color}20`,
                    color: mineral.color,
                    padding: '8px 4px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    border: `1px solid ${mineral.color}40`,
                    minHeight: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {mineral.name}
                </div>
              ))}
            </div>
            
            {/* Paragraph 1 */}
            <div style={{
              background: 'rgba(30, 64, 175, 0.2)',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              marginTop: 'auto'
            }}>
              <p style={{ 
                fontSize: '0.85rem', 
                lineHeight: '1.35', 
                color: '#e2e8f0',
                marginBottom: '8px'
              }}>
                <span style={{ color: '#93c5fd', fontWeight: '700' }}>Mineral Development Oman</span> is offering exploration investment opportunities across its <span style={{ color: '#fbbf24', fontWeight: '700' }}>14 mining concession areas</span>, spanning
              </p>
              <div style={{
                background: 'linear-gradient(90deg, #d97706 0%, #fbbf24 100%)',
                color: '#1e293b',
                padding: '10px',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: '900',
                fontSize: '0.95rem'
              }}>
                23,763 SQ KM
              </div>
            </div>
          </div>
        </Col>

        {/* Middle Column */}
        <Col md={5} style={{ height: '100%' }}>
          <div style={{
            background: '#1e293b',
            borderRadius: '10px',
            padding: '12px',
            height: '100%',
            border: '1px solid #334155',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {/* Paragraph 2 */}
            <div style={{
              background: 'rgba(5, 150, 105, 0.15)',
              padding: '14px',
              borderRadius: '8px',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <div style={{
                color: '#34d399',
                fontSize: '0.95rem',
                fontWeight: '800',
                marginBottom: '6px'
              }}>
                CEPA AGREEMENT
              </div>
              <p style={{ 
                fontSize: '0.85rem', 
                lineHeight: '1.35', 
                color: '#d1d5db',
                marginBottom: '0'
              }}>
                The newly signed India-Oman CEPA strengthens execution by facilitating trade and investment flows and improving the operating environment for cross-border services and professional mobility - turning mineral diplomacy into bankable projects and secure supply outcomes.
              </p>
            </div>
            
            {/* Paragraph 3 */}
            <div style={{
              background: 'rgba(245, 158, 11, 0.15)',
              padding: '14px',
              borderRadius: '8px',
              border: '1px solid rgba(245, 158, 11, 0.3)'
            }}>
              <div style={{
                color: '#fbbf24',
                fontSize: '0.95rem',
                fontWeight: '800',
                marginBottom: '6px'
              }}>
                INDIA'S STRATEGY
              </div>
              <p style={{ 
                fontSize: '0.85rem', 
                lineHeight: '1.35', 
                color: '#d1d5db',
                marginBottom: '10px'
              }}>
                India can add value by deploying GSI-led prospectivity mapping, data interpretation, and joint target generation to make select blocks drill-ready, and then channel Indian operators into those concessions via co-bidding or partnership models.
              </p>
            </div>
          </div>
        </Col>

        {/* Right Column */}
        <Col md={3} style={{ height: '100%' }}>
          <div style={{
            background: '#1e293b',
            borderRadius: '10px',
            padding: '12px',
            height: '100%',
            border: '1px solid #334155',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Antimony Highlight */}
            <div style={{
              background: 'linear-gradient(135deg, #6d28d9 0%, #5b21b6 100%)',
              color: 'white',
              padding: '14px',
              borderRadius: '8px',
              textAlign: 'center',
              marginBottom: '12px'
            }}>
              <div style={{ 
                fontSize: '1.3rem', 
                fontWeight: '900',
                marginBottom: '4px'
              }}>
                60,000 TONNES
              </div>
              <div style={{ 
                fontSize: '1.1rem', 
                fontWeight: '800',
                color: '#fbbf24'
              }}>
                ANTIMONY
              </div>
            </div>
            
            {/* Paragraphs 4 & 5 */}
            <div style={{
              background: 'rgba(109, 40, 217, 0.15)',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <p style={{ 
                  fontSize: '0.85rem', 
                  lineHeight: '1.35', 
                  color: '#e2e8f0',
                  marginBottom: '10px'
                }}>
                  <span style={{ color: '#c4b5fd', fontWeight: '700' }}>SPMP</span> and <span style={{ color: '#c4b5fd', fontWeight: '700' }}>Oman Investment Authority</span> are seeking a foreign investor in the antimony smelter and refinery in <span style={{ color: '#fbbf24', fontWeight: '700' }}>Sohar Port</span>.
                </p>
                
                <p style={{ 
                  fontSize: '0.85rem', 
                  lineHeight: '1.35', 
                  color: '#e2e8f0',
                  marginBottom: '0'
                }}>
                  The facility needs 60,000 tons of antimony ore annually to operate efficiently, making it the largest smelter and refinery outside of China and among the largest in the world. 
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Responsive Styles */}
      <style jsx="true">{`
        /* Desktop: Fixed 530px */
        @media (min-width: 992px) {
          .container {
            minHeight: 520px !important;
            boxSizing: "border-box" !important;
          }
        }
        
        /* Tablet */
        @media (max-width: 991px) and (min-width: 768px) {
          .container {
            height: auto !important;
            min-height: 530px !important;
          }
          
          .row {
            height: auto !important;
          }
          
          .col-md-4, .col-md-5, .col-md-3 {
            height: auto !important;
            min-height: 280px;
            margin-bottom: 15px;
          }
        }
        
        /* Mobile */
        @media (max-width: 767px) {
          .container {
            height: auto !important;
            min-height: auto !important;
            padding: 12px !important;
          }
          
          .row {
            height: auto !important;
            flex-direction: column;
          }
          
          .col-md-4, .col-md-5, .col-md-3 {
            height: auto !important;
            width: 100% !important;
            margin-bottom: 12px;
            min-height: 250px;
          }
          
          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          
          h1 {
            font-size: 1.3rem !important;
          }
          
          h2 {
            font-size: 1rem !important;
          }
          
          p {
            font-size: 0.8rem !important;
          }
          
          div[style*="60,000 TONNES"] {
            font-size: 1.1rem !important;
            padding: 12px !important;
          }
          
          div[style*="ANTIMONY"] {
            font-size: 0.95rem !important;
          }
        }
        
        /* Small Mobile */
        @media (max-width: 480px) {
          .container {
            padding: 10px !important;
          }
          
          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 6px !important;
          }
          
          .col-md-4, .col-md-5, .col-md-3 {
            min-height: 220px;
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
          
          h1 {
            font-size: 1.2rem !important;
          }
          
          div[style*="60,000 TONNES"] {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </Container>
  );
};

export default IndiaOmanMineralInfographic;
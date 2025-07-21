// import React, { useState, useEffect, useRef } from "react";
// import dynamic from "next/dynamic";
// import Layout from "@/components/layout/Layout";
// import Link from "next/link";
// import BlogSidebar from "@/components/elements/BlogSidebar";
// import { motion } from "framer-motion";

// const DroneScene = dynamic(() => import("../components/DroneScene"), {
//   ssr: false,
// });

// const InfoPanel = ({ step, isVisible }) => {
//   if (!step || !isVisible) return null;

//   return (
//     <div
//       className={`position-absolute top-0 end-0 m-3 p-3 rounded border border-primary`}
//       style={{
//         width: "320px",
//         backgroundColor: "rgba(31, 41, 55, 0.9)",
//         transition: "opacity 0.3s",
//         opacity: isVisible ? 1 : 0,
//       }}
//     >
//       <h3 className="text-primary fs-5 fw-bold mb-3">{step.title}</h3>
//       <ul className="text-light list-unstyled">
//         {step.details.map((detail, i) => (
//           <li key={i} className="d-flex mb-2">
//             <span className="text-primary me-2">•</span>
//             <span>{detail}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const DroneAssembly = () => {
//   const [activeStep, setActiveStep] = useState("frame");
//   const [showInfo, setShowInfo] = useState(true);
//   const [isClient, setIsClient] = useState(false);

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.2,
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     }),
//   };

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const assemblySteps = [
//     {
//       id: "frame",
//       title: "Frame Fabrication",
//       position: [-8, 0, 0],
//       color: "#3182ce",
//       details: [
//         "Attention: Battery city France Strip, Slovenian",
//         "Reclaim: Composite Alliance Strip",
//         "Serviceman: Michele Bussi (Mich.) SA",
//         "Serviceman: Sofia Bussi (Mich.) SM, Orebi, Perina",
//         "Model: CityCentre Companies (E.N.S) System (EU), India, Brazil",
//       ],
//     },
//     {
//       id: "motor",
//       title: "Motor & Propeller Production",
//       position: [-4, 0, 2],
//       color: "#38a169",
//       details: [
//         "Recipitation/transcription (Organism – 1-MOTOR generation System), Electronics Systems",
//         "Battery: Electric Drive (E.N.S) Plant (AeroWavement, Inc.)",
//         "Truck CoSM: In-house Motor Line (Portrait SA), Paris, France",
//         "Other: Battery Wing Drive (E.N.S) Systems Ltd., Irvine, Brazil",
//       ],
//     },
//     {
//       id: "avionics",
//       title: "Avionics & Electronics Production",
//       position: [0, 0, 4],
//       color: "#9f7aea",
//       details: [
//         "Criteria (Organization – Right Control Module Interface), Silicon, COME, Integration",
//         "DATA (Transformation – DATA)",
//         "ElectroControl Unit: Micro Navigation",
//         "Transfer – LINK/Destructurizer gate Systems (EU), Irvine, Brazil",
//       ],
//     },
//     {
//       id: "battery",
//       title: "Battery-Fock Assembly",
//       position: [4, 0, 2],
//       color: "#ecc94b",
//       details: [
//         "Utility: Electricity Network (Fock, Inc.), France, USA",
//         "Criteria (Lifted Airways and Networks), Materials Board (CAMERA), Olympics, Mexicana, Australia",
//         "Criteria (Energy Access Portrait of Group AI), Mexico, Russia",
//         "Criteria (Energy in Custom Core Pack Facility (REN) portrait), Israel",
//       ],
//     },
//     {
//       id: "software",
//       title: "Software & Flight Control R&D",
//       position: [8, 0, 0],
//       color: "#e53e3e",
//       details: [
//         "Bitron: All Right Control Line (Style, Inc.), Barcelona, USA",
//         "Ultimate Controller: Autonomy R&D Center (D.A.), European Centre",
//         "COME: Autonomy AI (Holders path systems Ltd.), Italia, Brazil",
//       ],
//     },
//   ];

//   return (
//     <>
//       <Layout headerStyle={1}>
//         <div className="position-relative w-100 vh-100 bg-dark overflow-hidden">
//           {/* 3D Scene */}
//           {isClient && (
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//               custom={0}
//             >
//               <DroneScene
//                 steps={assemblySteps}
//                 activeStep={activeStep}
//                 setActiveStep={setActiveStep}
//               />
//             </motion.div>
//           )}

//           {/* Info Panel */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             custom={0}
//           >
//             <InfoPanel
//               step={assemblySteps.find((s) => s.id === activeStep)}
//               isVisible={showInfo}
//             />
//           </motion.div>

//           {/* Control UI */}
//           <div
//             className="position-absolute bottom-0 start-0 m-3 p-3 rounded border"
//             style={{
//               backgroundColor: "rgba(31, 41, 55, 0.7)",
//               borderColor: "#4B5563",
//             }}
//           >
//             <div className="d-flex align-items-center gap-3">
//               <button
//                 className="btn btn-primary px-3 py-2"
//                 onClick={() => setShowInfo(!showInfo)}
//               >
//                 {showInfo ? "Hide Info" : "Show Info"}
//               </button>

//               <div className="d-flex gap-2">
//                 {assemblySteps.map((step) => (
//                   <div
//                     key={step.id}
//                     className={`rounded cursor-pointer ${
//                       activeStep === step.id ? "scale-125" : ""
//                     }`}
//                     style={{
//                       width: "16px",
//                       height: "16px",
//                       backgroundColor: step.color,
//                       transition: "transform 0.2s",
//                     }}
//                     onClick={() => setActiveStep(step.id)}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Legend */}
//           <div
//             className="position-absolute top-0 start-0 m-3 p-3 rounded border"
//             style={{
//               backgroundColor: "rgba(31, 41, 55, 0.7)",
//               borderColor: "#4B5563",
//             }}
//           >
//             <h3 className="text-white fw-bold mb-2">Assembly Steps</h3>
//             <div className="d-flex flex-column gap-2 ">
//               {assemblySteps.map((step) => (
//                 <div
//                   key={step.id}
//                   className={`d-flex align-items-center px-2 py-1 rounded cursor-pointer ${
//                     activeStep === step.id ? "bg-secondary" : ""
//                   }`}
//                   onClick={() => setActiveStep(step.id)}
//                   style={{ minWidth: "90px", cursor: "pointer" }}
//                 >
//                   <div
//                     className="rounded-sm me-2"
//                     style={{
//                       width: "12px",
//                       height: "12px",
//                       backgroundColor: step.color,
//                     }}
//                   ></div>
//                   <span className="text-light fs-7 ">
//                     {step.title.split(" ")[0]}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <section className="blog-details-area pt-80 pb-100">
//           <div className="container">
//             <div className="row justify-content-center">
//               <motion.div
//                 className="col-lg-1"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeInUp}
//               >
//                 <div className="blog-details-social">
//                   <ul className="list-wrap">
//                     <li>
//                       <Link href="#">
//                         <i className="fab fa-facebook-f" />
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="#">
//                         <i className="fab fa-twitter" />
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="#">
//                         <i className="fab fa-linkedin-in" />
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="#">
//                         <i className="fab fa-behance" />
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="#">
//                         <i className="fas fa-share" />
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </motion.div>

//               <div className="col-xl-8 col-lg-7">
//                 <div className="blog-post-wrapper">
//                   {[
//                     // blog post data
//                     {
//                       category: "Military Tech",
//                       author: "Defense Analyst",
//                       date: "Jul 9, 2025",
//                       title:
//                         "Military Drones Assembly Process and Critical Components",
//                       description:
//                         "The assembly of military drones involves precise engineering and specialized materials...",
//                       image:
//                         "https://thumbs.dreamstime.com/z/assembly-line-military-drones-351522957.jpg",
//                     },
//                     {
//                       category: "Avionics",
//                       author: "Aerospace Engineer",
//                       date: "Jul 2, 2025",
//                       title:
//                         "Avionics & Electronics Production for Military Drones",
//                       description:
//                         "Modern military drones rely on sophisticated avionics systems...",
//                       image:
//                         "https://www.unmannedairspace.info/wp-content/uploads/2023/01/sagetech-831x550.gif",
//                     },
//                     {
//                       category: "Supply Chain",
//                       author: "Resource Analyst",
//                       date: "Jun 28, 2025",
//                       title:
//                         "Critical Minerals Supply Chain for Defense Technology",
//                       description:
//                         "The production of military drones depends on a secure supply of critical minerals...",
//                       image:
//                         "https://se.copernicus.org/articles/13/793/2022/se-13-793-2022-f13-web.jpg",
//                     },
//                   ].map((post, i) => (
//                     <motion.div
//                       key={i}
//                       className="latest__post-item mb-4"
//                       custom={i}
//                       initial="hidden"
//                       whileInView="visible"
//                       viewport={{ once: true }}
//                       variants={fadeInUp}
//                     >
//                       <div className="latest__post-thumb tgImage__hover">
//                         <Link href="#">
//                           <img
//                             src={post.image}
//                             alt={post.title}
//                             className="img-fluid"
//                           />
//                         </Link>
//                       </div>
//                       <div className="latest__post-content">
//                         <ul className="tgbanner__content-meta list-wrap">
//                           <li className="category">
//                             <Link href="#">{post.category}</Link>
//                           </li>
//                           <li>
//                             <span className="by">By</span>{" "}
//                             <Link href="#">{post.author}</Link>
//                           </li>
//                           <li>{post.date}</li>
//                         </ul>
//                         <h3 className="title tgcommon__hover">
//                           <Link href="#">{post.title}</Link>
//                         </h3>
//                         <p>{post.description}</p>
//                         <div className="latest__post-read-more">
//                           <Link href="#">
//                             Read More <i className="far fa-long-arrow-right" />
//                           </Link>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               <motion.div
//                 className="col-xl-3 col-lg-4 col-md-6"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeInUp}
//                 custom={4}
//               >
//                 <BlogSidebar />
//               </motion.div>
//             </div>
//           </div>
//         </section>
//       </Layout>
//     </>
//   );
// };

// export default DroneAssembly;
// pages/ev-battery.js


// import React, { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FaTruckPickup, FaCog, FaFlask, FaAtom, FaTools } from 'react-icons/fa';

// const steps = [
//   {
//     id: 1,
//     title: 'Mineral Extraction',
//     icon: <FaTruckPickup size={24} />,
//     info: '',
//     color: '#004d99', // Blue
//     bgColor: '#e6f0ff'
//   },
//   {
//     id: 2,
//     title: 'Concentration',
//     icon: <FaCog size={24} />,
//     info: 'Crushing/Grinding → Concentrates, Magnetic & Flotation Separation',
//     color: '#28a745', // Green
//     bgColor: '#e6f7eb'
//   },
//   {
//     id: 3,
//     title: 'Refining',
//     icon: <FaFlask size={24} />,
//     info: 'Smelting and Chemical purification',
//     color: '#dc3545', // Red
//     bgColor: '#fce8e8'
//   },
//   {
//     id: 4,
//     title: 'Precursor & Active-Material Synthesis',
//     icon: <FaAtom size={24} />,
//     info: '',
//     color: '#ffc107', // Yellow
//     bgColor: '#fff8e1'
//   },
//   {
//     id: 5,
//     title: 'Electrode & Component Fabric',
//     icon: <FaTools size={24} />,
//     info: '',
//     color: '#6f42c1', // Purple
//     bgColor: '#f0e6ff'
//   },
// ];

// const EvBatteryProcess = () => {
//   const [hoveredStep, setHoveredStep] = useState(null);

//   return (
//     <div className="py-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
//       <Container>
//         <h2 className="text-center fw-bold mb-2" style={{ color: '#333' }}>EV Battery</h2>
//         <p className="text-center mb-4" style={{ color: '#666', fontSize: '1.1rem' }}>
//           Global Manufacturing Process and Key players
//         </p>

//         <div className="text-center p-3 mb-5" style={{ 
//           backgroundColor: '#333', 
//           color: 'white',
//           borderRadius: '4px',
//           maxWidth: '800px',
//           margin: '0 auto'
//         }}>
//           <p className="mb-1 fw-semibold">China.</p>
//           <p className="mb-1" style={{ fontSize: '0.9rem' }}>Yichun Lithium Refining Facility, Ganfeng Lithium - Jiangxi Province</p>
//           <p className="mb-1 fw-semibold">South Korea</p>
//           <p className="mb-0" style={{ fontSize: '0.9rem' }}>Yuichon Lithium Hydrowide Plant, POSCO Pilbara Lithium Solution - Gwangyang_ieollanam-do</p>
//         </div>

//         <Row className="justify-content-center g-4" style={{ marginTop: '2rem' }}>
//           {steps.map((step) => (
//             <Col key={step.id} xs={12} sm={6} md={4} lg={2} className="d-flex justify-content-center">
//               <div
//                 onMouseEnter={() => setHoveredStep(step.id)}
//                 onMouseLeave={() => setHoveredStep(null)}
//                 style={{
//                   width: '160px',
//                   height: '220px',
//                   borderRadius: '8px',
//                   backgroundColor: step.bgColor,
//                   border: `2px solid ${step.color}`,
//                   position: 'relative',
//                   textAlign: 'center',
//                   transition: 'all 0.3s ease',
//                   transform: hoveredStep === step.id ? 'translateY(-8px)' : 'none',
//                   boxShadow: hoveredStep === step.id ? '0 10px 20px rgba(0,0,0,0.1)' : '0 4px 8px rgba(0,0,0,0.1)',
//                   overflow: 'hidden'
//                 }}
//               >
//                 {/* Top Icon */}
//                 <div
//                   style={{
//                     width: '100%',
//                     height: '80px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     paddingTop: '15px'
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: '50px',
//                       height: '50px',
//                       borderRadius: '50%',
//                       backgroundColor: 'white',
//                       border: `2px solid ${step.color}`,
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       color: step.color
//                     }}
//                   >
//                     {step.icon}
//                   </div>
//                 </div>
                
//                 {/* Info (shown below icon when hovered) */}
//                 {hoveredStep === step.id && step.info && (
//                   <div 
//                     style={{
//                       padding: '0 10px',
//                       marginTop: '5px',
//                       height: '60px',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center'
//                     }}
//                   >
//                     <p 
//                       style={{ 
//                         fontSize: '11px',
//                         color: '#555',
//                         lineHeight: '1.4',
//                         margin: 0
//                       }}
//                     >
//                       {step.info}
//                     </p>
//                   </div>
//                 )}
                
//                 {/* Bottom Number and Title */}
//                 <div style={{ 
//                   position: 'absolute',
//                   bottom: '15px',
//                   left: 0,
//                   right: 0,
//                   textAlign: 'center',
//                   padding: '0 10px'
//                 }}>
//                   <h5 
//                     style={{ 
//                       fontSize: '1.5rem',
//                       fontWeight: 'bold',
//                       color: step.color,
//                       margin: '0 0 5px 0'
//                     }}
//                   >
//                     {step.id}
//                   </h5>
//                   <p 
//                     style={{ 
//                       fontSize: '14px',
//                       fontWeight: '600',
//                       color: '#333',
//                       margin: 0,
//                       lineHeight: '1.3'
//                     }}
//                   >
//                     {step.title}
//                   </p>
//                 </div>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default EvBatteryProcess;

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaAccessibleIcon,
  FaBrain,
  FaCogs,
  FaFlask,
  FaChargingStation,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const hoverInfo = {
    3: {
      title: 'Refining',
      countries: [
        {
          name: 'China',
          detail: 'Yichun Lithium Refining Facility, Ganfeng Lithium - Jiangxi Province',
        },
        {
          name: 'South Korea',
          detail:
            'Yulchon Lithium Hydroxide Plant, POSCO Pilbara Lithium Solution - Gwangyang, Jeollanam-do',
        },
      ],
    },
  };

  const steps = [
    {
      step: 1,
      title: 'Mineral Extraction',
      subtitle: '',
      icon: <FaAccessibleIcon size={22} />,
      iconPosition: 'top',
      color: '#3083DC',
      showRightNotch: true,
    },
    {
      step: 2,
      title: 'Concentration',
      subtitle: '(Crushing/Grinding → Concentrates, Magnetic & Flotation Separation)',
      icon: <FaBrain size={22} />,
      iconPosition: 'bottom',
      color: '#1F3C88',
      showLeftNotch: true,
      showRightNotch: true,
    },
    {
      step: 3,
      title: 'Refining',
      subtitle: '(Smelting and Chemical purification)',
      icon: <FaCogs size={22} />,
      iconPosition: 'top',
      color: '#4E4E4E',
      showLeftNotch: true,
      showRightNotch: true,
    },
    {
      step: 4,
      title: 'Precursor & Active-Material Synthesis',
      subtitle: '',
      icon: <FaFlask size={22} />,
      iconPosition: 'bottom',
      color: '#1F3C88',
      showLeftNotch: true,
      showRightNotch: true,
    },
    {
      step: 5,
      title: 'Electrode & Component Fabric',
      subtitle: '',
      icon: <FaChargingStation size={22} />,
      iconPosition: 'top',
      color: '#3083DC',
      showLeftNotch: true,
    },
  ];

  const StepCard = ({
    step,
    title,
    subtitle,
    icon,
    iconPosition = 'top',
    color = '#0d6efd',
    showRightNotch = false,
    showLeftNotch = false,
  }) => {
    const [hover, setHover] = useState(false);

    return (
      
      <motion.div
        className="position-relative text-center mx-2"
        style={{ width: '260px', cursor: 'pointer' }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        
        {/* Hover Info Box */}
        {hoverInfo[step] && hover && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="position-absolute text-white p-3 shadow"
            style={{
              top: '-170px',
              left: '0',
              transform: 'translateX(-50%)',
              backgroundColor: '#4e4e4e',
              borderRadius: '10px',
              width: '500px',
              zIndex: 3,
              fontSize: '14px',
            }}
          >
            <div className="fw-bold mb-2 text-center">Key Players</div>
            {hoverInfo[step].countries.map((country, i) => (
              <div key={i}>
                <strong>{country.name}</strong>: {country.detail}
              </div>
            ))}
          </motion.div>
        )}

        {/* Circular Icon */}
        <div
          className="rounded-circle d-flex justify-content-center align-items-center shadow"
          style={{
            width: '60px',
            height: '60px',
            position: 'absolute',
            [iconPosition]: '-30px',
            left: '50%',
            transform: 'translateX(-50%)',
            border: `5px solid ${color}`,
            backgroundColor: '#fff',
            zIndex: 2,
          }}
        >
          {icon}
        </div>

        {/* Card Body */}
        <div
          className="bg-white shadow p-4"
          style={{
            paddingTop: iconPosition === 'top' ? '50px' : '20px',
            paddingBottom: iconPosition === 'bottom' ? '50px' : '20px',
            borderRadius: '20px',
            borderTop: iconPosition === 'top' ? `5px solid ${color}` : undefined,
            borderBottom: iconPosition === 'bottom' ? `5px solid ${color}` : undefined,
            position: 'relative',
            height: '100%',
            minHeight: '220px',
          }}
        >
          <h6 className="text-muted mb-1">{step}</h6>
          <h5 className="fw-bold">{title}</h5>
          {subtitle && (
            <p className="text-muted small mb-0 mt-2" style={{ lineHeight: '1.3' }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Bottom/Top Rounded Bar */}
        <div
          className="position-absolute w-100"
          style={{
            height: '20px',
            bottom: iconPosition === 'top' ? '-10px' : undefined,
            top: iconPosition === 'bottom' ? '-10px' : undefined,
            left: 0,
            backgroundColor: color,
            borderBottomLeftRadius: iconPosition === 'top' ? '15px' : '0',
            borderBottomRightRadius: iconPosition === 'top' ? '15px' : '0',
            borderTopLeftRadius: iconPosition === 'bottom' ? '15px' : '0',
            borderTopRightRadius: iconPosition === 'bottom' ? '15px' : '0',
            zIndex: 1,
          }}
        />

        {/* Notches */}
        {showRightNotch && (
          <div
            className="position-absolute"
            style={{
              width: 0,
              height: 0,
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              borderTop: '20px solid transparent',
              borderBottom: '20px solid transparent',
              borderLeft: `20px solid ${color}`,
              zIndex: 1,
            }}
          />
        )}
        {showLeftNotch && (
          <div
            className="position-absolute"
            style={{
              width: 0,
              height: 0,
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              borderTop: '20px solid transparent',
              borderBottom: '20px solid transparent',
              borderRight: `20px solid ${color}`,
              zIndex: 1,
            }}
          />
        )}
      </motion.div>
    );
  };

  return (
    <>  
    <div
      style={{ backgroundColor: '#d9d9d9'}}
    >
        <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: '#d9d9d9', minHeight: '100vh', overflowX: 'auto' }}
    >
      <div>
         <div className="text-center mb-3" >
          <h1 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>
            Lithium Battery Supply Chain
          </h1>
          <p className="text-muted mx-auto "style={{ marginBottom: '200px' }}>
            Explore the key stages of lithium battery production and the major global players
            involved in each step of the process.
          </p>
        </div>
         <div className="d-flex flex-row flex-nowrap">
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

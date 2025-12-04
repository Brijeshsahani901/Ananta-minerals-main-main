"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text3D, Center, Float, Environment, Sparkles, Line } from "@react-three/drei";
import { useRef, useState, Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Perf } from "r3f-perf";

// 3D Globe Component for China's dominance visualization
function Globe() {
  const globeRef = useRef();
  const chinaMeshRef = useRef();
  const ringRef = useRef();
  
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.005;
    }
  });

  return (
    <group>
      {/* Base Globe */}
      <mesh ref={globeRef} scale={[0.8, 0.8, 0.8]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#1a365d"
          roughness={0.3}
          metalness={0.7}
          emissive="#0c4a6e"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* China Highlight */}
      <mesh ref={chinaMeshRef} scale={[0.8, 0.8, 0.8]}>
        <sphereGeometry args={[1.02, 64, 64]} />
        <meshStandardMaterial
          color="#dc2626"
          transparent
          opacity={0.6}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Dominance Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.3, 1.5, 64]} />
        <meshBasicMaterial color="#f59e0b" side={THREE.DoubleSide} transparent opacity={0.6} />
      </mesh>

      {/* Sparkles */}
      <Sparkles count={30} scale={2} size={2} speed={0.2} color="#f59e0b" />
    </group>
  );
}

// 3D Graph Component with animated line
function Graph() {
  const lineRef = useRef();
  const pointsRef = useRef();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 1 ? 0 : prev + 0.02));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const points = [
    new THREE.Vector3(-2, -1, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(2, 1, 0),
  ];

  const animatedPoints = points.map((p, i) => 
    new THREE.Vector3(p.x, p.y * progress, p.z)
  );

  return (
    <group>
      {/* Grid */}
      <gridHelper args={[5, 10, "#4a5568", "#2d3748"]} />
      
      {/* Animated Line */}
      <Line
        points={animatedPoints}
        color="#0ea5e9"
        lineWidth={3}
        dashed={false}
      />
      
      {/* Points */}
      {points.map((point, index) => (
        <mesh key={index} position={[point.x, point.y, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color={index === 2 ? "#f59e0b" : "#3b82f6"} emissive={index === 2 ? "#f59e0b" : "#3b82f6"} emissiveIntensity={0.5} />
        </mesh>
      ))}

      {/* Labels */}
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.15}
        height={0.05}
        position={[-2.2, -1.2, 0]}
      >
        2005
        <meshNormalMaterial />
      </Text3D>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.15}
        height={0.05}
        position={[2.2, 1.2, 0]}
      >
        2030
        <meshNormalMaterial />
      </Text3D>
    </group>
  );
}

// 3D Furnace Component
function Furnace() {
  const furnaceRef = useRef();
  const flameRef = useRef();
  const particlesRef = useRef();
  
  useFrame((state) => {
    if (flameRef.current) {
      flameRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.3;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={furnaceRef} scale={[0.6, 0.6, 0.6]}>
      {/* Furnace Body */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[1, 1.2, 2, 32]} />
        <meshStandardMaterial color="#4a5568" roughness={0.8} metalness={0.3} />
      </mesh>
      
      {/* Heating Coils */}
      <mesh ref={particlesRef} position={[0, 0.5, 0]}>
        <torusGeometry args={[0.8, 0.05, 16, 100]} />
        <meshStandardMaterial color="#dc2626" emissive="#dc2626" emissiveIntensity={2} />
      </mesh>
      
      {/* Flame */}
      <mesh ref={flameRef} position={[0, 1, 0]}>
        <coneGeometry args={[0.4, 0.8, 32]} />
        <meshStandardMaterial color="#f59e0b" transparent opacity={0.7} emissive="#f59e0b" emissiveIntensity={1.5} />
      </mesh>
      
      {/* Temperature Display */}
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.2}
        height={0.05}
        position={[0, -1.5, 0.8]}
        rotation={[0, 0, 0]}
      >
        3000°C
        <meshBasicMaterial color="#fbbf24" />
      </Text3D>
    </group>
  );
}

// Main Component
export default function SyntheticGraphiteInfographic3D() {
  const [activeView, setActiveView] = useState("overview");

  return (
    <div className="w-100 d-flex justify-content-center align-items-center position-relative" style={{ height: "600px" }}>
      {/* Background with gradient */}
      <div className="position-absolute w-100 h-100" style={{
        background: "radial-gradient(circle at 0% 0%, #0f172a 0%, #020617 40%, #000000 100%)",
        zIndex: 0,
      }}>
        {/* Animated background elements */}
        <div className="position-absolute" style={{
          width: "500px",
          height: "500px",
          top: "-200px",
          left: "-200px",
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)",
          animation: "pulse 8s infinite alternate",
        }} />
        <div className="position-absolute" style={{
          width: "400px",
          height: "400px",
          bottom: "-150px",
          right: "-100px",
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%)",
          animation: "pulse 10s infinite alternate-reverse",
        }} />
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div className="container-fluid position-relative" style={{ zIndex: 2, maxWidth: "1400px" }}>
        <div className="row g-4">
          {/* Left Column - Global Control */}
          <div className="col-4">
            <motion.div
              className="position-relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="position-relative rounded-4 p-4" style={{
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))",
                border: "1px solid rgba(100, 116, 139, 0.3)",
                backdropFilter: "blur(10px)",
                height: "500px",
                overflow: "hidden",
              }}>
                {/* 3D Globe */}
                <div className="position-absolute" style={{ top: "40%", left: "50%", transform: "translate(-50%, -50%)", width: "200px", height: "200px" }}>
                  <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <Suspense fallback={null}>
                      <Globe />
                      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                    </Suspense>
                  </Canvas>
                </div>

                {/* 80% Control */}
                <motion.div
                  className="position-absolute top-0 start-50 translate-middle-x mt-4"
                  style={{ animation: "float 3s ease-in-out infinite" }}
                >
                  <div className="text-center">
                    <div className="rounded-circle p-3 d-inline-block" style={{
                      background: "radial-gradient(circle, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.05))",
                      border: "2px solid rgba(245, 158, 11, 0.5)",
                    }}>
                      <div className="fs-1 fw-bold text-warning">~80%</div>
                      <div className="text-light fs-6 fw-semibold">Global Synthetic Graphite Output</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Center Column - China's Grip */}
          <div className="col-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="position-relative rounded-4 p-4" style={{
                background: "linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(185, 28, 28, 0.2))",
                border: "1px solid rgba(220, 38, 38, 0.4)",
                backdropFilter: "blur(10px)",
                height: "500px",
              }}>
                {/* Main Statement */}
                <div className="text-center mb-4">
                  <motion.div
                    className="d-inline-block px-4 py-3 rounded-3"
                    style={{
                      background: "linear-gradient(135deg, rgba(220, 38, 38, 0.3), rgba(185, 28, 28, 0.4))",
                      border: "2px solid rgba(248, 113, 113, 0.5)",
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="fs-5 fw-bold text-light">
                      China's grip on synthetic graphite is tighter than its grip on lithium, nickel, or rare earths
                    </div>
                  </motion.div>
                </div>

                {/* Comparative Bars */}
                <div className="mt-5">
                  {[
                    { label: "Synthetic Graphite", value: 95, color: "#dc2626" },
                    { label: "Lithium", value: 60, color: "#3b82f6" },
                    { label: "Nickel", value: 40, color: "#10b981" },
                    { label: "Rare Earths", value: 70, color: "#8b5cf6" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="mb-3"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="d-flex align-items-center mb-1">
                        <div className="text-light fs-7" style={{ width: "150px" }}>{item.label}</div>
                        <div className="text-light fs-7 fw-bold ms-auto">{item.value}%</div>
                      </div>
                      <div className="rounded-pill" style={{
                        height: "12px",
                        background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                        boxShadow: `0 0 10px ${item.color}40`,
                      }} />
                    </motion.div>
                  ))}
                </div>

                {/* 3D Furnace */}
                <div className="position-absolute bottom-0 start-50 translate-middle-x" style={{ width: "180px", height: "180px" }}>
                  <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
                    <ambientLight intensity={0.3} />
                    <pointLight position={[0, 2, 5]} intensity={1} color="#f59e0b" />
                    <Suspense fallback={null}>
                      <Furnace />
                    </Suspense>
                  </Canvas>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Production & Graph */}
          <div className="col-4">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="position-relative rounded-4 p-4" style={{
                background: "linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(2, 132, 199, 0.2))",
                border: "1px solid rgba(14, 165, 233, 0.4)",
                backdropFilter: "blur(10px)",
                height: "500px",
              }}>
                {/* 98% Graphitization */}
                <motion.div
                  className="text-center mb-4"
                  style={{ animation: "float 4s ease-in-out infinite" }}
                >
                  <div className="rounded-circle p-4 d-inline-block" style={{
                    background: "radial-gradient(circle, rgba(14, 165, 233, 0.2), rgba(2, 132, 199, 0.1))",
                    border: "3px solid rgba(14, 165, 233, 0.5)",
                  }}>
                    <div className="fs-1 fw-bold text-info">~98%</div>
                    <div className="text-light fs-6 fw-semibold">Graphitization Capacity</div>
                    <div className="text-light fs-7 opacity-75">Critical midstream process for battery anode</div>
                  </div>
                </motion.div>

                {/* 3D Graph */}
                <div className="mt-4" style={{ height: "200px" }}>
                  <div className="position-relative rounded-3 p-3" style={{
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(100, 116, 139, 0.3)",
                    height: "100%",
                  }}>
                    <div className="text-center text-light fs-6 fw-semibold mb-2">
                      Production of Synthetic Graphite (Million Tonnes)
                    </div>
                    <div style={{ width: "100%", height: "150px" }}>
                      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                        <ambientLight intensity={0.3} />
                        <pointLight position={[5, 5, 5]} intensity={0.5} />
                        <Suspense fallback={null}>
                          <Graph />
                        </Suspense>
                      </Canvas>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <div className="text-light fs-7">2005: ~0.3M tonnes</div>
                      <div className="text-light fs-7">2030: ~1.5M tonnes</div>
                    </div>
                  </div>
                </div>

                {/* Process Info */}
                <motion.div
                  className="mt-4 p-3 rounded-3"
                  style={{
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(100, 116, 139, 0.3)",
                  }}
                  whileHover={{ backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                >
                  <div className="text-light fs-7">
                    <span className="fw-bold">Graphitization Process:</span> High-temperature furnace processing at{" "}
                    <span className="text-warning fw-bold">2,500–3,000°C</span> to remove impurities. Essential for{" "}
                    <span className="text-info">EV batteries, semiconductors, and nuclear applications</span> where purity is critical.
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="d-flex justify-content-center mt-4">
          {["overview", "comparison", "production"].map((view, index) => (
            <motion.button
              key={view}
              className={`mx-2 rounded-pill ${activeView === view ? 'bg-info' : 'bg-secondary'}`}
              style={{ width: "10px", height: "10px", border: "none" }}
              onClick={() => setActiveView(view)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
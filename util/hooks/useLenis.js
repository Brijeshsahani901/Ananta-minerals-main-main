import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer";

const SolarPanelScene = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const labelRendererRef = useRef(null);
  const controlsRef = useRef(null);
  const solarPartsRef = useRef([]);
  const [hoveredPart, setHoveredPart] = useState(null);
  const [activeSection, setActiveSection] = useState("mining");

  const solarData = {
    mining: {
      title: "Quartz Mining",
      color: 0x4caf50,
      details: [
        "Critical Mineral: Quartz (SiO₂) – feedstock for silicon",
        "Company & Origin: The Quartz Corp, Rana Mines, Norway"
      ],
      icon: "⛏️",
      model: null,
    },
    siliconProduction: {
      title: "Metallurgical-Grade Silicon Production",
      color: 0x2196f3,
      details: [
        "Critical Mineral: Silicon (Si) – refined from quartz",
        "Company & Origin: Wacker Chemie, Burghausen, Germany"
      ],
      icon: "🏭",
      model: null,
    },
    polysilicon: {
      title: "Polysilicon Purification",
      color: 0xff9800,
      details: [
        "Critical Mineral: Silicon (Si) - purified to solar-grade (>99.9999%)",
        "Company & Origin: Hemlock Semiconductor, Hemlock, Michigan, USA"
      ],
      icon: "🔬",
      model: null,
    },
    ingot: {
      title: "Monocrystalline Silicon Ingot",
      color: 0x9c27b0,
      details: [
        "Critical Mineral: Silicon (Si) - cast into ingots and sliced into wafers",
        "Company & Origin: LONGI Green Energy, Xi'an, China"
      ],
      icon: "💎",
      model: null,
    },
    cell: {
      title: "Cell Metallization",
      color: 0xe91e63,
      details: [
        "Silicon (Si) – wafer substrate",
        "Silver (Ag) – via metallization",
        "Company & Origin: JinkoSolar, Haining, Zhejiang, China"
      ],
      icon: "🔌",
      model: null,
    },
  };

  const createMiningModel = () => {
    const group = new THREE.Group();

    // Mine shaft
    const mineGeometry = new THREE.ConeGeometry(1, 1.5, 4);
    const mineMaterial = new THREE.MeshStandardMaterial({ color: 0x795548 });
    const mine = new THREE.Mesh(mineGeometry, mineMaterial);
    mine.rotation.x = Math.PI;
    mine.position.y = -0.5;
    group.add(mine);

    // Quartz crystals
    const crystalGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 6);
    const crystalMaterial = new THREE.MeshStandardMaterial({ color: 0x7ec0ee });

    for (let i = 0; i < 8; i++) {
      const crystal = new THREE.Mesh(crystalGeometry, crystalMaterial);
      crystal.position.set(
        Math.random() * 1.5 - 0.75,
        Math.random() * 0.5 - 1,
        Math.random() * 1.5 - 0.75
      );
      group.add(crystal);
    }

    return group;
  };

  const createSiliconProductionModel = () => {
    const group = new THREE.Group();

    // Furnace
    const furnaceGeometry = new THREE.CylinderGeometry(1, 1, 2, 32);
    const furnaceMaterial = new THREE.MeshStandardMaterial({ color: 0x607d8b });
    const furnace = new THREE.Mesh(furnaceGeometry, furnaceMaterial);
    group.add(furnace);

    // Smoke
    const smokeGeometry = new THREE.SphereGeometry(0.8, 16, 16);
    const smokeMaterial = new THREE.MeshStandardMaterial({
      color: 0xaaaaaa,
      transparent: true,
      opacity: 0.5
    });
    const smoke = new THREE.Mesh(smokeGeometry, smokeMaterial);
    smoke.position.y = 1.5;
    group.add(smoke);

    // Silicon chunks
    const siliconGeometry = new THREE.DodecahedronGeometry(0.2, 0);
    const siliconMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });

    for (let i = 0; i < 5; i++) {
      const silicon = new THREE.Mesh(siliconGeometry, siliconMaterial);
      silicon.position.set(
        Math.random() * 1 - 0.5,
        -1 + Math.random() * 0.5,
        Math.random() * 1 - 0.5
      );
      group.add(silicon);
    }

    return group;
  };

  const createPolysiliconModel = () => {
    const group = new THREE.Group();

    // Chemical plant
    const towerGeometry = new THREE.CylinderGeometry(0.8, 0.6, 2, 32);
    const towerMaterial = new THREE.MeshStandardMaterial({ color: 0xbbdefb });
    const tower = new THREE.Mesh(towerGeometry, towerMaterial);
    group.add(tower);

    // Pipes
    const pipeGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 8);
    const pipeMaterial = new THREE.MeshStandardMaterial({ color: 0x455a64 });

    const pipe1 = new THREE.Mesh(pipeGeometry, pipeMaterial);
    pipe1.position.set(0.7, 0.5, 0);
    pipe1.rotation.z = Math.PI / 2;
    group.add(pipe1);

    const pipe2 = new THREE.Mesh(pipeGeometry, pipeMaterial);
    pipe2.position.set(-0.7, 0.5, 0);
    pipe2.rotation.z = Math.PI / 2;
    group.add(pipe2);

    return group;
  };

  const createIngotModel = () => {
    const group = new THREE.Group();

    // Silicon ingot
    const ingotGeometry = new THREE.BoxGeometry(1, 2, 0.5);
    const ingotMaterial = new THREE.MeshStandardMaterial({
      color: 0x9e9e9e,
      metalness: 0.3,
      roughness: 0.1
    });
    const ingot = new THREE.Mesh(ingotGeometry, ingotMaterial);
    group.add(ingot);

    // Shiny effect
    const shineGeometry = new THREE.PlaneGeometry(0.9, 0.4);
    const shineMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 0.3,
      side: THREE.DoubleSide
    });
    const shine = new THREE.Mesh(shineGeometry, shineMaterial);
    shine.position.set(0, 0, 0.26);
    shine.rotation.y = Math.PI;
    group.add(shine);

    return group;
  };

  const createCellModel = () => {
    const group = new THREE.Group();

    // Solar panel
    const panelGeometry = new THREE.BoxGeometry(2, 0.1, 1);
    const panelMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      metalness: 0.8,
      roughness: 0.2
    });
    const panel = new THREE.Mesh(panelGeometry, panelMaterial);
    group.add(panel);

    // Solar cells
    const cellGeometry = new THREE.BoxGeometry(0.4, 0.09, 0.4);
    const cellMaterial = new THREE.MeshStandardMaterial({
      color: 0x2196f3,
      metalness: 0.5,
      roughness: 0.1
    });

    for (let x = -0.8; x <= 0.8; x += 0.5) {
      for (let z = -0.4; z <= 0.4; z += 0.5) {
        const cell = new THREE.Mesh(cellGeometry, cellMaterial);
        cell.position.set(x, 0.06, z);
        group.add(cell);
      }
    }

    // Silver contacts
    const contactGeometry = new THREE.BoxGeometry(1.8, 0.02, 0.05);
    const contactMaterial = new THREE.MeshStandardMaterial({
      color: 0xc0c0c0,
      metalness: 1,
      roughness: 0.1
    });
    const contact1 = new THREE.Mesh(contactGeometry, contactMaterial);
    contact1.position.set(0, 0.06, 0.25);
    group.add(contact1);
    const contact2 = new THREE.Mesh(contactGeometry, contactMaterial);
    contact2.position.set(0, 0.06, -0.25);
    group.add(contact2);

    return group;
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = sceneRef.current;
    scene.background = new THREE.Color(0x111111);
    scene.fog = new THREE.Fog(0x111111, 10, 50);

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 5, 20);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.top = "0";
    labelRenderer.domElement.style.pointerEvents = "none";
    labelRenderer.domElement.style.zIndex = "5";
    labelRendererRef.current = labelRenderer;
    canvasRef.current.parentNode.appendChild(labelRenderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.mouseButtons = {
      LEFT: THREE.MOUSE.ROTATE,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.PAN,
    };
    controls.enablePan = false;
    controls.maxPolarAngle = Math.PI / 2;

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.MeshStandardMaterial({ color: 0x1a202c, roughness: 0.9 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2;
    ground.receiveShadow = true;
    scene.add(ground);

    solarPartsRef.current = [];

    const spacing = 6;
    const keys = Object.keys(solarData);

    // Create models for each stage
    solarData.mining.model = createMiningModel();
    solarData.siliconProduction.model = createSiliconProductionModel();
    solarData.polysilicon.model = createPolysiliconModel();
    solarData.ingot.model = createIngotModel();
    solarData.cell.model = createCellModel();

    keys.forEach((key, index) => {
      const data = solarData[key];
      const group = new THREE.Group();
      const posX = (index - (keys.length - 1) / 2) * spacing;
      group.position.set(posX, 0, 0);

      // Add the custom model
      const model = data.model.clone();
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.color.setHex(data.color);
        }
      });
      group.add(model);

      // Add glow effect for active/hovered models
      const glow = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.MeshBasicMaterial({
          color: data.color,
          transparent: true,
          opacity: 0.2,
          blending: THREE.AdditiveBlending,
        })
      );
      glow.visible = false;
      group.add(glow);

      // Add label above model
      const labelDiv = document.createElement("div");
      labelDiv.className = "label";
      labelDiv.textContent = `${data.icon} ${data.title.split("&")[0].trim()}`;
      labelDiv.style.color = "white";
      labelDiv.style.fontSize = "14px";
      labelDiv.style.fontWeight = "bold";
      labelDiv.style.padding = "2px 6px";
      labelDiv.style.backgroundColor = "rgba(0,0,0,0.6)";
      labelDiv.style.borderRadius = "4px";

      const label = new CSS2DObject(labelDiv);
      label.position.set(0, 2.5, 0);
      label.userData.isLabel = true;
      group.add(label);

      scene.add(group);
      solarPartsRef.current.push({ id: key, mesh: group, glow, label });
    });

    // Add connections between stages
    const connectionMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5 });
    const connectionPoints = solarPartsRef.current.map(p => p.mesh.position);
    const connectionGeometry = new THREE.BufferGeometry().setFromPoints(connectionPoints);
    const connections = new THREE.Line(connectionGeometry, connectionMaterial);
    scene.add(connections);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (e) => {
      const bounds = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - bounds.left) / bounds.width) * 2 - 1;
      mouse.y = -((e.clientY - bounds.top) / bounds.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersectableObjects = solarPartsRef.current.flatMap((p) => {
        const modelMeshes = [];
        p.mesh.traverse((child) => {
          if (child.isMesh && child !== p.glow && !child.userData.isLabel) {
            modelMeshes.push(child);
          }
        });
        return modelMeshes;
      });

      const intersects = raycaster.intersectObjects(intersectableObjects);

      if (intersects.length > 0) {
        const part = solarPartsRef.current.find((p) => {
          let found = false;
          p.mesh.traverse((child) => {
            if (child === intersects[0].object) found = true;
          });
          return found;
        });
        setHoveredPart(part?.id || null);
      } else {
        setHoveredPart(null);
      }
    };

    const handleClick = (e) => {
      raycaster.setFromCamera(mouse, camera);

      const intersectableObjects = solarPartsRef.current.flatMap((p) => {
        const modelMeshes = [];
        p.mesh.traverse((child) => {
          if (child.isMesh && child !== p.glow && !child.userData.isLabel) {
            modelMeshes.push(child);
          }
        });
        return modelMeshes;
      });

      const intersects = raycaster.intersectObjects(intersectableObjects);

      if (intersects.length > 0) {
        const part = solarPartsRef.current.find((p) => {
          let found = false;
          p.mesh.traverse((child) => {
            if (child === intersects[0].object) found = true;
          });
          return found;
        });
        if (part) setActiveSection(part.id);
      }
    };

    renderer.domElement.addEventListener("mousemove", handleMouseMove);
    renderer.domElement.addEventListener("click", handleClick);

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      solarPartsRef.current.forEach((part) => {
        const isActive = activeSection === part.id || hoveredPart === part.id;

        part.label.visible = activeSection !== part.id;
        part.mesh.scale.setScalar(isActive ? 1.15 : 1);
        part.glow.visible = isActive;

        if (isActive) {
          part.mesh.rotation.y = time * 0.5;
          part.glow.scale.setScalar(1.2 + Math.sin(time * 2) * 0.1);
        } else {
          part.mesh.rotation.y = 0;
        }
      });

      controls.update();
      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.domElement.removeEventListener("mousemove", handleMouseMove);
      renderer.domElement.removeEventListener("click", handleClick);
    };
  }, [activeSection]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />

      <h1
        style={{
          position: "absolute",
          top: "20px",
          width: "100%",
          textAlign: "center",
          color: "#fff",
          fontSize: "2.2rem",
          zIndex: 10,
          textShadow: "0 3px 6px rgba(0,0,0,0.6)",
        }}
      >
        Solar Panel Supply Chain
      </h1>

      {activeSection && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "10px",
            backgroundColor: "rgba(26, 32, 44, 0.85)",
            color: "#fff",
            padding: "16px",
            borderRadius: "8px",
            maxWidth: "320px",
            zIndex: 10,
          }}
        >
          <h3
            style={{
              color: `#${solarData[activeSection].color.toString(16)}`,
              marginBottom: "8px",
              borderBottom: `2px solid #${solarData[
                activeSection
              ].color.toString(16)}`,
              paddingBottom: "4px",
            }}
          >
            {solarData[activeSection].title}
          </h3>
          <ul style={{ paddingLeft: "20px", margin: 0 }}>
            {solarData[activeSection].details.map((item, i) => (
              <li key={i} style={{ marginBottom: "8px" }}>
                <strong>{item.split(":")[0]}:</strong> {item.split(":")[1]}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          zIndex: 10,
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "90%",
        }}
      >
        {Object.keys(solarData).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            style={{
              padding: "8px 14px",
              backgroundColor:
                activeSection === key
                  ? `#${solarData[key].color.toString(16)}`
                  : "#1a202c",
              color: "#fff",
              border: `1px solid #${solarData[key].color.toString(16)}`,
              borderRadius: "4px",
              fontWeight: "bold",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              whiteSpace: "nowrap",
            }}
          >
            <span>{solarData[key].icon}</span>
            <span>{solarData[key].title.split(" ")[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SolarPanelScene;
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const BatteryScene = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const labelRendererRef = useRef(null);
  const controlsRef = useRef(null);
  const batteryPartsRef = useRef([]);
  const [hoveredPart, setHoveredPart] = useState(null);
  const [activeSection, setActiveSection] = useState("mining");

  const batteryData = {
    mining: {
      title: "Mining & Raw Materials",
      color: 0x4caf50,
      details: [
        "Sodium carbonate (boda salt) - U.S., Turkey",
        "Biomass carbon precursor - Global sources",
        "Iron manganese - Australia, Brazil, China",
      ],
      icon: "⛏️",
      model: null,
    },
    refining: {
      title: "Refining & Chemical Processing",
      color: 0x2196f3,
      details: [
        "Sola Alta - Sodium Carbonate (U.S., Turkey)",
        "Heat Carbon hydration - Processed in China",
        "Carbon dioxide from organic solution - Europe/Asia for cathodes",
      ],
      icon: "⚗️",
      model: null,
    },
    precursor: {
      title: "Precursor & Active-Material Production",
      color: 0xff9800,
      details: [
        "Prazian Blue Cathode Synthesis - Sweden (Atlas VII)",
        "Heat Carbon Anodes - Developed by MIT, produced in China/Sweden/USA",
        "Natural biomass derived sources",
      ],
      icon: "🧪",
      model: null,
    },
    cell: {
      title: "Cell Design & Pilot Manufacturing",
      color: 0x9c27b0,
      details: [
        "Nature Can 2 cells - Multiple OWh batteries in China",
        "BTN China - 300Wh capacity plant (2025)",
        "Hills Battery Clinical - Cyclotriolarimethane cells",
        "Kandiborin US - Industrial storage solutions",
      ],
      icon: "🔋",
      model: null,
    },
    module: {
      title: "Module & Pack Assembly",
      color: 0xe91e63,
      details: [
        "Aluminum-based pack distribution",
        "Silica integration in interconnects",
        "Production in China, Europe, and U.S.",
      ],
      icon: "📦",
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

    // Rocks
    const rockGeometry = new THREE.DodecahedronGeometry(0.3, 0);
    const rockMaterial = new THREE.MeshStandardMaterial({ color: 0x9e9e9e });

    for (let i = 0; i < 5; i++) {
      const rock = new THREE.Mesh(rockGeometry, rockMaterial);
      rock.position.set(
        Math.random() * 1.5 - 0.75,
        Math.random() * 0.5 - 1,
        Math.random() * 1.5 - 0.75
      );
      group.add(rock);
    }

    return group;
  };

  const createRefiningModel = () => {
    const group = new THREE.Group();

    // Main tank
    const tankGeometry = new THREE.CylinderGeometry(0.8, 0.8, 1.5, 32);
    const tankMaterial = new THREE.MeshStandardMaterial({ color: 0xbbdefb });
    const tank = new THREE.Mesh(tankGeometry, tankMaterial);
    group.add(tank);

    // Pipes
    const pipeGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 8);
    const pipeMaterial = new THREE.MeshStandardMaterial({ color: 0x607d8b });

    const pipe1 = new THREE.Mesh(pipeGeometry, pipeMaterial);
    pipe1.position.set(0.7, 0, 0);
    pipe1.rotation.z = Math.PI / 2;
    group.add(pipe1);

    const pipe2 = new THREE.Mesh(pipeGeometry, pipeMaterial);
    pipe2.position.set(-0.7, 0, 0);
    pipe2.rotation.z = Math.PI / 2;
    group.add(pipe2);

    // Top dome
    const domeGeometry = new THREE.SphereGeometry(
      0.8,
      32,
      16,
      0,
      Math.PI * 2,
      0,
      Math.PI / 2
    );
    const dome = new THREE.Mesh(domeGeometry, tankMaterial);
    dome.position.y = 0.75;
    group.add(dome);

    return group;
  };

  const createPrecursorModel = () => {
    const group = new THREE.Group();

    // Flask
    const flaskGeometry = new THREE.CylinderGeometry(0.6, 0.4, 1.2, 32);
    const flaskMaterial = new THREE.MeshStandardMaterial({
      color: 0xffecb3,
      transparent: true,
      opacity: 0.7,
    });
    const flask = new THREE.Mesh(flaskGeometry, flaskMaterial);
    group.add(flask);

    // Liquid
    const liquidGeometry = new THREE.CylinderGeometry(0.55, 0.35, 1, 32);
    const liquidMaterial = new THREE.MeshStandardMaterial({
      color: 0x2196f3,
      transparent: true,
      opacity: 0.8,
    });
    const liquid = new THREE.Mesh(liquidGeometry, liquidMaterial);
    liquid.position.y = -0.1;
    group.add(liquid);

    // Bubbles
    const bubbleGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const bubbleMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

    for (let i = 0; i < 10; i++) {
      const bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
      bubble.position.set(
        Math.random() * 0.4 - 0.2,
        Math.random() * 0.8 - 0.6,
        Math.random() * 0.4 - 0.2
      );
      group.add(bubble);
    }

    return group;
  };

  const createCellModel = () => {
    const group = new THREE.Group();

    // Battery cell
    const cellGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 32);
    const cellMaterial = new THREE.MeshStandardMaterial({
      color: 0xce93d8,
      metalness: 0.5,
      roughness: 0.3,
    });
    const cell = new THREE.Mesh(cellGeometry, cellMaterial);
    group.add(cell);

    // Top contact
    const contactGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 32);
    const contactMaterial = new THREE.MeshStandardMaterial({
      color: 0xe0e0e0,
      metalness: 0.8,
      roughness: 0.2,
    });
    const contact = new THREE.Mesh(contactGeometry, contactMaterial);
    contact.position.y = 0.8;
    group.add(contact);

    // Label
    const labelGeometry = new THREE.PlaneGeometry(0.8, 0.4);
    const labelMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
    });
    const label = new THREE.Mesh(labelGeometry, labelMaterial);
    label.position.set(0, 0, 0.51);
    label.rotation.y = Math.PI;
    group.add(label);

    return group;
  };

  const createModuleModel = () => {
    const group = new THREE.Group();

    // Battery pack base
    const baseGeometry = new THREE.BoxGeometry(2, 1, 1);
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0xf8bbd0,
      metalness: 0.3,
      roughness: 0.4,
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    group.add(base);

    // Cells in pack
    const cellGeometry = new THREE.BoxGeometry(0.3, 0.8, 0.3);
    const cellMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.5,
      roughness: 0.2,
    });

    for (let x = -0.6; x <= 0.6; x += 0.4) {
      for (let z = -0.3; z <= 0.3; z += 0.4) {
        const cell = new THREE.Mesh(cellGeometry, cellMaterial);
        cell.position.set(x, 0.1, z);
        group.add(cell);
      }
    }

    // Connectors
    const connectorGeometry = new THREE.BoxGeometry(1.8, 0.05, 0.8);
    const connectorMaterial = new THREE.MeshStandardMaterial({
      color: 0x424242,
      metalness: 0.8,
      roughness: 0.1,
    });
    const connector = new THREE.Mesh(connectorGeometry, connectorMaterial);
    connector.position.set(0, 0.5, 0);
    group.add(connector);

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

    batteryPartsRef.current = [];

    const spacing = 6;
    const keys = Object.keys(batteryData);

    // Create models for each stage
    batteryData.mining.model = createMiningModel();
    batteryData.refining.model = createRefiningModel();
    batteryData.precursor.model = createPrecursorModel();
    batteryData.cell.model = createCellModel();
    batteryData.module.model = createModuleModel();

    keys.forEach((key, index) => {
      const data = batteryData[key];
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
      label.userData.isLabel = true; // Mark this as a label
      group.add(label);

      scene.add(group);
      batteryPartsRef.current.push({ id: key, mesh: group, glow, label });
    });

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (e) => {
      const bounds = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - bounds.left) / bounds.width) * 2 - 1;
      mouse.y = -((e.clientY - bounds.top) / bounds.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      // Get all intersectable objects from the battery parts
      const intersectableObjects = batteryPartsRef.current.flatMap((p) => {
        // Get all meshes in the model group (skip glow and label)
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
        // Find which battery part contains the intersected object
        const part = batteryPartsRef.current.find((p) => {
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

      // Get all intersectable objects from the battery parts
      const intersectableObjects = batteryPartsRef.current.flatMap((p) => {
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
        const part = batteryPartsRef.current.find((p) => {
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

      batteryPartsRef.current.forEach((part) => {
        const isActive = activeSection === part.id || hoveredPart === part.id;

        // Hide label if this is the active section (clicked)
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
        Sodium-Ion Battery Supply Chain
      </h1>

      {activeSection && (
        <div
          style={{
            position: "absolute",
            top: "10px",
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
              color: `#${batteryData[activeSection].color.toString(16)}`,
              marginBottom: "8px",
              borderBottom: `2px solid #${batteryData[
                activeSection
              ].color.toString(16)}`,
              paddingBottom: "4px",
            }}
          >
            {batteryData[activeSection].title}
          </h3>
          <ul>
            {batteryData[activeSection].details.map((item, i) => (
              <li key={i} style={{ marginBottom: "6px" }}>
                {item}
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
        }}
      >
        {Object.keys(batteryData).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            style={{
              padding: "8px 14px",
              backgroundColor:
                activeSection === key
                  ? `#${batteryData[key].color.toString(16)}`
                  : "#1a202c",
              color: "#fff",
              border: `1px solid #${batteryData[key].color.toString(16)}`,
              borderRadius: "4px",
              fontWeight: "bold",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span>{batteryData[key].icon}</span>
            <span>{batteryData[key].title.split(" ")[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BatteryScene;
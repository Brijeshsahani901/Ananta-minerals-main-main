import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";

const SolarPanelScene = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const labelRendererRef = useRef(null);
  const controlsRef = useRef(null);
  const solarPartsRef = useRef([]);
  const animationRef = useRef(null);
  const [hoveredPart, setHoveredPart] = useState(null);
  const [activeSection, setActiveSection] = useState("mining");

  // Memoize solar data to prevent unnecessary recalculations
  const solarData = React.useMemo(() => ({
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
  }), []);

  // Create simplified geometries only once
  const geometries = React.useMemo(() => {
    return {
      mine: new THREE.ConeGeometry(1, 1.5, 4),
      crystal: new THREE.CylinderGeometry(0.1, 0.1, 0.5, 6),
      furnace: new THREE.CylinderGeometry(1, 1, 2, 16),
      smoke: new THREE.SphereGeometry(0.8, 8, 8),
      silicon: new THREE.DodecahedronGeometry(0.2, 0),
      tower: new THREE.CylinderGeometry(0.8, 0.6, 2, 16),
      pipe: new THREE.CylinderGeometry(0.1, 0.1, 1, 8),
      ingot: new THREE.BoxGeometry(1, 2, 0.5),
      shine: new THREE.PlaneGeometry(0.9, 0.4),
      panel: new THREE.BoxGeometry(2, 0.1, 1),
      cell: new THREE.BoxGeometry(0.4, 0.09, 0.4),
      contact: new THREE.BoxGeometry(1.8, 0.02, 0.05),
      glow: new THREE.SphereGeometry(1.5, 16, 16)
    };
  }, []);

  // Create shared materials
  const materials = React.useMemo(() => {
    return {
      standard: new THREE.MeshStandardMaterial(),
      basic: new THREE.MeshBasicMaterial(),
      lineBasic: new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5 })
    };
  }, []);

  const createMiningModel = React.useCallback(() => {
    const group = new THREE.Group();

    // Mine shaft
    const mine = new THREE.Mesh(
      geometries.mine,
      materials.standard.clone()
    );
    mine.material.color.setHex(0x795548);
    mine.rotation.x = Math.PI;
    mine.position.y = -0.5;
    group.add(mine);

    // Quartz crystals
    const crystalMaterial = materials.standard.clone();
    crystalMaterial.color.setHex(0x7ec0ee);

    for (let i = 0; i < 5; i++) { // Reduced from 8 to 5
      const crystal = new THREE.Mesh(geometries.crystal, crystalMaterial);
      crystal.position.set(
        Math.random() * 1.5 - 0.75,
        Math.random() * 0.5 - 1,
        Math.random() * 1.5 - 0.75
      );
      group.add(crystal);
    }

    return group;
  }, [geometries, materials]);

  const createSiliconProductionModel = React.useCallback(() => {
    const group = new THREE.Group();

    // Furnace
    const furnaceMaterial = materials.standard.clone();
    furnaceMaterial.color.setHex(0x607d8b);
    const furnace = new THREE.Mesh(geometries.furnace, furnaceMaterial);
    group.add(furnace);

    // Smoke
    const smokeMaterial = materials.standard.clone();
    smokeMaterial.color.setHex(0xaaaaaa);
    smokeMaterial.transparent = true;
    smokeMaterial.opacity = 0.5;
    const smoke = new THREE.Mesh(geometries.smoke, smokeMaterial);
    smoke.position.y = 1.5;
    group.add(smoke);

    // Silicon chunks
    const siliconMaterial = materials.standard.clone();
    siliconMaterial.color.setHex(0x888888);

    for (let i = 0; i < 3; i++) { // Reduced from 5 to 3
      const silicon = new THREE.Mesh(geometries.silicon, siliconMaterial);
      silicon.position.set(
        Math.random() * 1 - 0.5,
        -1 + Math.random() * 0.5,
        Math.random() * 1 - 0.5
      );
      group.add(silicon);
    }

    return group;
  }, [geometries, materials]);

  const createPolysiliconModel = React.useCallback(() => {
    const group = new THREE.Group();

    // Chemical plant
    const towerMaterial = materials.standard.clone();
    towerMaterial.color.setHex(0xbbdefb);
    const tower = new THREE.Mesh(geometries.tower, towerMaterial);
    group.add(tower);

    // Pipes
    const pipeMaterial = materials.standard.clone();
    pipeMaterial.color.setHex(0x455a64);

    const pipe1 = new THREE.Mesh(geometries.pipe, pipeMaterial);
    pipe1.position.set(0.7, 0.5, 0);
    pipe1.rotation.z = Math.PI / 2;
    group.add(pipe1);

    const pipe2 = new THREE.Mesh(geometries.pipe, pipeMaterial);
    pipe2.position.set(-0.7, 0.5, 0);
    pipe2.rotation.z = Math.PI / 2;
    group.add(pipe2);

    return group;
  }, [geometries, materials]);

  const createIngotModel = React.useCallback(() => {
    const group = new THREE.Group();

    // Silicon ingot
    const ingotMaterial = materials.standard.clone();
    ingotMaterial.color.setHex(0x9e9e9e);
    ingotMaterial.metalness = 0.3;
    ingotMaterial.roughness = 0.1;
    const ingot = new THREE.Mesh(geometries.ingot, ingotMaterial);
    group.add(ingot);

    // Shiny effect
    const shineMaterial = materials.standard.clone();
    shineMaterial.color.setHex(0xffffff);
    shineMaterial.emissive = 0xffffff;
    shineMaterial.emissiveIntensity = 0.3;
    shineMaterial.side = THREE.DoubleSide;
    const shine = new THREE.Mesh(geometries.shine, shineMaterial);
    shine.position.set(0, 0, 0.26);
    shine.rotation.y = Math.PI;
    group.add(shine);

    return group;
  }, [geometries, materials]);

  const createCellModel = React.useCallback(() => {
    const group = new THREE.Group();

    // Solar panel
    const panelMaterial = materials.standard.clone();
    panelMaterial.color.setHex(0x333333);
    panelMaterial.metalness = 0.8;
    panelMaterial.roughness = 0.2;
    const panel = new THREE.Mesh(geometries.panel, panelMaterial);
    group.add(panel);

    // Solar cells - reduced number of cells
    const cellMaterial = materials.standard.clone();
    cellMaterial.color.setHex(0x2196f3);
    cellMaterial.metalness = 0.5;
    cellMaterial.roughness = 0.1;

    for (let x = -0.8; x <= 0.8; x += 0.8) { // Reduced density
      for (let z = -0.4; z <= 0.4; z += 0.8) { // Reduced density
        const cell = new THREE.Mesh(geometries.cell, cellMaterial);
        cell.position.set(x, 0.06, z);
        group.add(cell);
      }
    }

    // Silver contacts
    const contactMaterial = materials.standard.clone();
    contactMaterial.color.setHex(0xc0c0c0);
    contactMaterial.metalness = 1;
    contactMaterial.roughness = 0.1;
    const contact1 = new THREE.Mesh(geometries.contact, contactMaterial);
    contact1.position.set(0, 0.06, 0.25);
    group.add(contact1);
    const contact2 = new THREE.Mesh(geometries.contact, contactMaterial);
    contact2.position.set(0, 0.06, -0.25);
    group.add(contact2);

    return group;
  }, [geometries, materials]);

  const createLabel = React.useCallback((data) => {
    const labelDiv = document.createElement("div");
    labelDiv.className = "label";
    labelDiv.textContent = `${data.icon} ${data.title.split("&")[0].trim()}`;
    labelDiv.style.color = "white";
    labelDiv.style.fontSize = "14px";
    labelDiv.style.fontWeight = "bold";
    labelDiv.style.padding = "2px 6px";
    labelDiv.style.backgroundColor = "rgba(0,0,0,0.6)";
    labelDiv.style.borderRadius = "4px";
    return labelDiv;
  }, []);

  const cleanupScene = React.useCallback(() => {
    // Cancel any pending animation frame
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    // Remove event listeners
    if (rendererRef.current?.domElement) {
      rendererRef.current.domElement.removeEventListener('mousemove', handleMouseMove);
      rendererRef.current.domElement.removeEventListener('click', handleClick);
    }

    // Dispose of geometries and materials
    Object.values(geometries).forEach(geometry => geometry.dispose());
    Object.values(materials).forEach(material => material.dispose());

    // Remove label renderer DOM element
    if (labelRendererRef.current?.domElement?.parentNode) {
      labelRendererRef.current.domElement.parentNode.removeChild(labelRendererRef.current.domElement);
    }

    // Dispose of renderers
    if (rendererRef.current) {
      rendererRef.current.dispose();
      rendererRef.current = null;
    }

    if (labelRendererRef.current) {
      labelRendererRef.current = null;
    }

    // Dispose of controls
    if (controlsRef.current) {
      controlsRef.current.dispose();
      controlsRef.current = null;
    }

    // Clear the scene
    if (sceneRef.current) {
      while (sceneRef.current.children.length > 0) {
        const object = sceneRef.current.children[0];
        if (object.isMesh) {
          object.geometry?.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach(m => m.dispose());
          } else {
            object.material?.dispose();
          }
        }
        sceneRef.current.remove(object);
      }
      sceneRef.current = null;
    }
  }, [geometries, materials]);

  const handleMouseMove = React.useCallback((e) => {
    if (!rendererRef.current || !cameraRef.current) return;

    const bounds = rendererRef.current.domElement.getBoundingClientRect();
    const mouse = {
      x: ((e.clientX - bounds.left) / bounds.width) * 2 - 1,
      y: -((e.clientY - bounds.top) / bounds.height) * 2 + 1
    };

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, cameraRef.current);

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
  }, []);

  const handleClick = React.useCallback((e) => {
    if (!rendererRef.current || !cameraRef.current) return;

    const bounds = rendererRef.current.domElement.getBoundingClientRect();
    const mouse = {
      x: ((e.clientX - bounds.left) / bounds.width) * 2 - 1,
      y: -((e.clientY - bounds.top) / bounds.height) * 2 + 1
    };

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, cameraRef.current);

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
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);
    scene.fog = new THREE.Fog(0x111111, 10, 50);
    sceneRef.current = scene;

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 5, 20);
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Initialize label renderer
    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.top = "0";
    labelRenderer.domElement.style.pointerEvents = "none";
    labelRenderer.domElement.style.zIndex = "5";
    labelRendererRef.current = labelRenderer;
    canvasRef.current.parentNode.appendChild(labelRenderer.domElement);

    // Initialize controls
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
    controlsRef.current = controls;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 512; // Reduced from 1024
    directionalLight.shadow.mapSize.height = 512; // Reduced from 1024
    scene.add(directionalLight);

    // Ground
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.MeshStandardMaterial({ color: 0x1a202c, roughness: 0.9 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Create models for each stage
    solarData.mining.model = createMiningModel();
    solarData.siliconProduction.model = createSiliconProductionModel();
    solarData.polysilicon.model = createPolysiliconModel();
    solarData.ingot.model = createIngotModel();
    solarData.cell.model = createCellModel();

    const spacing = 6;
    const keys = Object.keys(solarData);
    solarPartsRef.current = [];

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

      // Add glow effect
      const glowMaterial = materials.basic.clone();
      glowMaterial.color.setHex(data.color);
      glowMaterial.transparent = true;
      glowMaterial.opacity = 0.2;
      glowMaterial.blending = THREE.AdditiveBlending;
      
      const glow = new THREE.Mesh(geometries.glow, glowMaterial);
      glow.visible = false;
      group.add(glow);

      // Add label
      const labelDiv = createLabel(data);
      const label = new CSS2DObject(labelDiv);
      label.position.set(0, 2.5, 0);
      label.userData.isLabel = true;
      group.add(label);

      scene.add(group);
      solarPartsRef.current.push({ id: key, mesh: group, glow, label });
    });

    // Add connections between stages
    const connectionPoints = solarPartsRef.current.map(p => p.mesh.position);
    const connectionGeometry = new THREE.BufferGeometry().setFromPoints(connectionPoints);
    const connections = new THREE.Line(connectionGeometry, materials.lineBasic);
    scene.add(connections);

    // Add event listeners
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('click', handleClick);

    // Animation loop with performance optimization
    let lastTime = 0;
    const animate = (time) => {
      animationRef.current = requestAnimationFrame(animate);
      
      // Throttle updates to ~60fps
      const deltaTime = time - lastTime;
      if (deltaTime < 16) return; // ~60fps
      lastTime = time;

      solarPartsRef.current.forEach((part) => {
        const isActive = activeSection === part.id || hoveredPart === part.id;

        part.label.visible = activeSection !== part.id;
        part.mesh.scale.setScalar(isActive ? 1.15 : 1);
        part.glow.visible = isActive;

        if (isActive) {
          part.mesh.rotation.y = time * 0.001; // Slower rotation
          part.glow.scale.setScalar(1.2 + Math.sin(time * 0.002) * 0.1); // Slower pulse
        } else {
          part.mesh.rotation.y = 0;
        }
      });

      controls.update();
      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      labelRenderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cleanupScene();
      window.removeEventListener('resize', handleResize);
    };
  }, [activeSection, createCellModel, createIngotModel, createLabel, createMiningModel, createPolysiliconModel, createSiliconProductionModel, geometries, handleClick, handleMouseMove, materials, solarData]);

  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
    }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />

      <h1 style={{
        position: "absolute",
        top: "20px",
        width: "100%",
        textAlign: "center",
        color: "#fff",
        fontSize: "2.2rem",
        zIndex: 10,
        textShadow: "0 3px 6px rgba(0,0,0,0.6)",
        pointerEvents: "none"
      }}>
        Solar Panel Supply Chain
      </h1>

      {activeSection && (
        <div style={{
          position: "absolute",
          top: "80px",
          left: "10px",
          backgroundColor: "rgba(26, 32, 44, 0.85)",
          color: "#fff",
          padding: "16px",
          borderRadius: "8px",
          maxWidth: "320px",
          zIndex: 10,
          pointerEvents: "auto"
        }}>
          <h3 style={{
            color: `#${solarData[activeSection].color.toString(16)}`,
            marginBottom: "8px",
            borderBottom: `2px solid #${solarData[activeSection].color.toString(16)}`,
            paddingBottom: "4px",
          }}>
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

      <div style={{
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
        pointerEvents: "auto"
      }}>
        {Object.keys(solarData).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            style={{
              padding: "8px 14px",
              backgroundColor: activeSection === key
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
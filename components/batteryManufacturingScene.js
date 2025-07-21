import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const BatteryManufacturingScene = ({ steps, activeStep }) => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const objectsRef = useRef({ factories: [], drones: [] });
  const [hoveredStep, setHoveredStep] = useState(null);
  const [factoryLabels, setFactoryLabels] = useState([]);
  const loaderRef = useRef(new GLTFLoader());

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = sceneRef.current;
    scene.background = new THREE.Color(0x111111);
    scene.fog = new THREE.Fog(0x111111, 10, 30);

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 8, 20);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 5;
    controls.maxDistance = 30;
    controls.maxPolarAngle = Math.PI / 2 - 0.1;
    controls.enableZoom = false;
    controlsRef.current = controls;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 20, 15);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const groundGeometry = new THREE.PlaneGeometry(40, 40);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x1a202c, 
      roughness: 0.9, 
      metalness: 0.1 
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -3;
    ground.receiveShadow = true;
    scene.add(ground);

    const gridHelper = new THREE.GridHelper(30, 30, 0x2d3748, 0x2d3748);
    gridHelper.position.y = -2.99;
    scene.add(gridHelper);

    return () => {
      controls.dispose();
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    const { factories, drones } = objectsRef.current;
    factories.forEach(obj => scene.remove(obj.mesh));
    drones.forEach(obj => scene.remove(obj.mesh));
    objectsRef.current = { factories: [], drones: [] };

    steps.forEach(step => {
      const factoryGroup = new THREE.Group();
      factoryGroup.position.set(...step.position);
      scene.add(factoryGroup);

      // Create factory building
      const factory = createFactoryBuilding(step.color);
      factoryGroup.add(factory);

      // Add smoke chimney
      const chimney = createChimney(step.color);
      chimney.position.set(0, 2.5, 0);
      factoryGroup.add(chimney);

      // Add glow effect
      const glow = new THREE.Mesh(
        new THREE.BoxGeometry(3.1, 3.1, 3.1),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color(step.color),
          transparent: true,
          opacity: 0.2,
          side: THREE.BackSide
        })
      );
      glow.position.y = 1.5;
      factoryGroup.add(glow);

      objectsRef.current.factories.push({
        mesh: factoryGroup,
        id: step.id,
        originalPosition: [...step.position],
        chimney: chimney
      });

      // Create drone for this factory
      const drone = createDrone();
      drone.position.set(step.position[0], step.position[1] + 5, step.position[2]);
      scene.add(drone);
      objectsRef.current.drones.push({
        mesh: drone,
        id: step.id,
        originalY: step.position[1] + 5,
        isRising: false
      });
    });
  }, [steps]);

  useEffect(() => {
    const renderer = rendererRef.current;
    const camera = cameraRef.current;
    const scene = sceneRef.current;
    const controls = controlsRef.current;
    if (!renderer || !camera || !controls) return;

    const clock = new THREE.Clock();
    let animationFrameId;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (event) => {
      const bounds = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      mouse.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(objectsRef.current.factories.map(f => f.mesh.children[0]), true);
      if (intersects.length > 0) {
        const hoveredFactory = objectsRef.current.factories.find(f => f.mesh.children.includes(intersects[0].object));
        setHoveredStep(hoveredFactory?.id || null);
      } else {
        setHoveredStep(null);
      }
    };

    renderer.domElement.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();
      const delta = clock.getDelta();

      // Animate drones
      objectsRef.current.drones.forEach(drone => {
        const isActive = activeStep === drone.id || hoveredStep === drone.id;
        const targetY = isActive ? drone.originalY + 3 : drone.originalY;
        
        const prevY = drone.mesh.position.y;
        drone.mesh.position.y += (targetY - drone.mesh.position.y) * 0.1;
        const isMovingUp = drone.mesh.position.y > prevY + 0.001;
        
        drone.isRising = isMovingUp;

        if (isActive) {
          drone.mesh.rotation.y += delta * 0.8;
        }

        if (drone.isRising) {
          drone.mesh.userData.propellers.forEach(prop => {
            prop.rotation.x += delta * 30;
          });
        }

        if (!isActive) {
          drone.mesh.position.y = drone.originalY + Math.sin(time * 1.5) * 0.1;
        }
      });

      // Animate factories
      objectsRef.current.factories.forEach(factory => {
        const isHovered = activeStep === factory.id || hoveredStep === factory.id;
        
        // Animate chimney smoke
        if (isHovered) {
          factory.chimney.visible = true;
          factory.chimney.position.y = 2.5 + Math.sin(time * 2) * 0.2;
        } else {
          factory.chimney.visible = false;
        }
        
        // Scale animation
        if (isHovered) {
          const scale = 1 + Math.sin(time * 3) * 0.05;
          factory.mesh.scale.set(scale, scale, scale);
        } else {
          factory.mesh.scale.set(1, 1, 1);
        }
      });

      // Update factory labels
      const updatedLabels = objectsRef.current.factories.map(factory => {
        const pos = factory.mesh.position.clone();
        pos.project(camera);
        return {
          id: factory.id,
          x: ((pos.x + 1) / 2) * window.innerWidth,
          y: (-(pos.y - 1) / 2) * window.innerHeight,
          title: steps.find(s => s.id === factory.id)?.title || ''
        };
      });
      setFactoryLabels(updatedLabels);

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, [activeStep, hoveredStep]);

  const createFactoryBuilding = (color) => {
    const factoryGroup = new THREE.Group();

    // Main building
    const building = new THREE.Mesh(
      new THREE.BoxGeometry(3, 2, 3),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        metalness: 0.3,
        roughness: 0.7
      })
    );
    building.position.y = 1;
    building.castShadow = true;
    building.receiveShadow = true;
    factoryGroup.add(building);

    // Roof
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(2.2, 0.5, 4),
      new THREE.MeshStandardMaterial({
        color: 0x555555,
        metalness: 0.5,
        roughness: 0.5
      })
    );
    roof.position.y = 2.25;
    roof.rotation.y = Math.PI / 4;
    factoryGroup.add(roof);

    // Windows
    for (let i = 0; i < 4; i++) {
      const window = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.5),
        new THREE.MeshStandardMaterial({
          color: 0x00aaff,
          emissive: 0x00aaff,
          emissiveIntensity: 0.3,
          side: THREE.DoubleSide
        })
      );
      window.position.set(
        i % 2 === 0 ? -1.2 : 1.2,
        1.2,
        i < 2 ? -1.2 : 1.2
      );
      window.rotation.y = i % 2 === 0 ? Math.PI : 0;
      if (i >= 2) {
        window.rotation.y = i === 2 ? Math.PI / 2 : -Math.PI / 2;
      }
      factoryGroup.add(window);
    }

    return factoryGroup;
  };

  const createChimney = (color) => {
    const chimneyGroup = new THREE.Group();
    chimneyGroup.visible = false;

    // Chimney pipe
    const chimney = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.2, 1, 8),
      new THREE.MeshStandardMaterial({
        color: 0x777777,
        metalness: 0.5,
        roughness: 0.7
      })
    );
    chimney.position.y = 0.5;
    chimneyGroup.add(chimney);

    // Smoke particles
    const smokeGeometry = new THREE.BufferGeometry();
    const particleCount = 30;
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.5;
      positions[i * 3 + 1] = Math.random() * 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
      sizes[i] = Math.random() * 0.5 + 0.1;
    }

    smokeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    smokeGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const smokeMaterial = new THREE.PointsMaterial({
      color: new THREE.Color(color).lerp(new THREE.Color(0xffffff), 0.3),
      size: 0.2,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true
    });

    const smoke = new THREE.Points(smokeGeometry, smokeMaterial);
    smoke.position.y = 1;
    chimneyGroup.add(smoke);

    return chimneyGroup;
  };

  const createDrone = () => {
    const droneGroup = new THREE.Group();

    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.5, 1.2, 4, 8),
      new THREE.MeshStandardMaterial({ color: 0x2c5282, metalness: 0.9, roughness: 0.1 })
    );
    body.rotation.z = Math.PI / 2;
    body.castShadow = true;
    droneGroup.add(body);

    const camera = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.8 })
    );
    camera.position.set(0.8, 0, 0);
    droneGroup.add(camera);

    const lens = new THREE.Mesh(
      new THREE.CircleGeometry(0.15, 16),
      new THREE.MeshBasicMaterial({ color: 0x00aaff })
    );
    lens.position.set(0.81, 0, 0);
    lens.rotation.y = Math.PI / 2;
    droneGroup.add(lens);

    const armPositions = [
      [1.2, 0, 1.2],
      [-1.2, 0, 1.2],
      [1.2, 0, -1.2],
      [-1.2, 0, -1.2]
    ];
    const propellers = [];

    armPositions.forEach(pos => {
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 2.5, 8),
        new THREE.MeshStandardMaterial({ color: 0x4a5568, metalness: 0.8 })
      );
      arm.position.set(...pos);
      arm.rotation.x = Math.PI / 2;
      arm.castShadow = true;
      droneGroup.add(arm);

      const propellerGroup = new THREE.Group();
      propellerGroup.position.set(...pos);

      const motor = new THREE.Mesh(
        new THREE.CylinderGeometry(0.15, 0.15, 0.1, 16),
        new THREE.MeshStandardMaterial({ color: 0x1a202c, metalness: 0.9 })
      );
      motor.rotation.x = Math.PI / 2;
      propellerGroup.add(motor);

      for (let i = 0; i < 4; i++) {
        const blade = new THREE.Mesh(
          new THREE.PlaneGeometry(0.8, 0.1),
          new THREE.MeshStandardMaterial({ color: 0xe2e8f0, side: THREE.DoubleSide })
        );
        blade.rotation.x = Math.PI / 2;
        blade.rotation.z = (i * Math.PI) / 2;
        blade.position.y = 0.06;
        propellerGroup.add(blade);
      }

      droneGroup.add(propellerGroup);
      propellers.push(propellerGroup);
    });

    droneGroup.userData = { propellers };
    return droneGroup;
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      <h1 style={{
        position: 'absolute',
        top: '20px',
        width: '100%',
        textAlign: 'center',
        color: '#e2e8f0',
        fontSize: '2rem',
        zIndex: 10,
        textShadow: '0 2px 4px rgba(0,0,0,0.6)'
      }}>
        EV Battery Manufacturing Process
      </h1>

      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />

      {hoveredStep && (
        <div
          style={{
            position: 'absolute',
            top: 80,
            left: 20,
            backgroundColor: '#1a202ccc',
            color: '#fff',
            padding: '12px 18px',
            borderRadius: '10px',
            maxWidth: '320px',
            zIndex: 10,
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
          }}
        >
          <h4 style={{ color: '#63b3ed', marginBottom: '6px', fontSize: '1.1rem' }}>
            {steps.find(s => s.id === hoveredStep)?.title}
          </h4>
          <ul style={{ fontSize: '0.85rem', paddingLeft: '20px' }}>
            {steps.find(s => s.id === hoveredStep)?.details.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      )}

      {factoryLabels.map(label => (
        <div
          key={label.id}
          style={{
            position: 'absolute',
            left: `${label.x}px`,
            top: `${label.y + 20}px`,
            transform: 'translateX(-50%)',
            color: '#edf2f7',
            fontSize: '0.85rem',
            backgroundColor: 'rgba(0,0,0,0.6)',
            padding: '4px 8px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 5
          }}
        >
          {label.title}
        </div>
      ))}
    </div>
  );
};

export default BatteryManufacturingScene;
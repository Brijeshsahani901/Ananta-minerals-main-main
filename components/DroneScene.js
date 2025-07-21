'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const DroneScene = ({ steps, activeStep }) => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const objectsRef = useRef({ cubes: [], drones: [] });
  const [hoveredStep, setHoveredStep] = useState(null);
  const [cubeLabels, setCubeLabels] = useState([]);
  const mouseRef = useRef(new THREE.Vector2());
  const clockRef = useRef(new THREE.Clock());
  const frameCounter = useRef(0);

  // Initialize scene, camera, renderer, controls, lighting, ground, and grid
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
    controls.enableZoom = false;
    controls.minDistance = 5;
    controls.maxDistance = 30;
    controls.maxPolarAngle = Math.PI / 2 - 0.1;
    controlsRef.current = controls;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(10, 20, 15);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // Ground
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(40, 40),
      new THREE.MeshStandardMaterial({ color: 0x1a202c, roughness: 0.9, metalness: 0.1 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -3;
    ground.receiveShadow = true;
    scene.add(ground);

    // Grid
    const grid = new THREE.GridHelper(30, 30, 0x2d3748, 0x2d3748);
    grid.position.y = -2.99;
    scene.add(grid);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      controls.dispose();
      renderer.dispose();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Build cubes and drones based on steps prop
  useEffect(() => {
    const scene = sceneRef.current;

    // Remove existing cubes and drones from scene
    const { cubes, drones } = objectsRef.current;
    cubes.forEach(({ mesh }) => scene.remove(mesh));
    drones.forEach(({ mesh }) => scene.remove(mesh));
    objectsRef.current = { cubes: [], drones: [] };

    steps.forEach((step) => {
      // Cube group
      const cubeGroup = new THREE.Group();
      cubeGroup.position.set(...step.position);
      scene.add(cubeGroup);

      // Cube mesh
      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 1.5, 1.5),
        new THREE.MeshStandardMaterial({
          color: new THREE.Color(step.color),
          metalness: 0.85,
          roughness: 0.15,
          transparent: true,
          opacity: 0.8,
        })
      );
      cube.castShadow = true;
      cube.receiveShadow = true;
      cubeGroup.add(cube);

      // Edges highlight
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.BoxGeometry(1.5, 1.5, 1.5)),
        new THREE.LineBasicMaterial({ color: 0xffffff })
      );
      cube.add(edges);

      // Glow effect
      const glow = new THREE.Mesh(
        new THREE.BoxGeometry(1.55, 1.55, 1.55),
        new THREE.MeshBasicMaterial({ color: step.color, opacity: 0.3, transparent: true, side: THREE.BackSide })
      );
      cubeGroup.add(glow);

      // Create drone
      const drone = createDrone();
      drone.position.set(step.position[0], step.position[1] + 2.5, step.position[2]);
      scene.add(drone);

      objectsRef.current.cubes.push({ mesh: cubeGroup, id: step.id });
      objectsRef.current.drones.push({ mesh: drone, id: step.id, baseY: step.position[1] + 2.5 });
    });
  }, [steps]);

  // Mouse move handler and animation loop
  useEffect(() => {
    const renderer = rendererRef.current;
    const camera = cameraRef.current;
    const scene = sceneRef.current;
    const controls = controlsRef.current;
    if (!renderer || !camera || !controls) return;

    const raycaster = new THREE.Raycaster();

    // Update mouse position on move (normalized device coords)
    const onMouseMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };
    renderer.domElement.addEventListener('mousemove', onMouseMove);

    let animationId;
    let lastHoveredId = null;

    // Debounce hover detection (limit raycasting frequency)
    const hoverDetectionInterval = 50; // ms
    let lastHoverCheck = 0;

    const animate = (time) => {
      animationId = requestAnimationFrame(animate);

      // Controls damping
      controls.update();

      const now = performance.now();
      if (now - lastHoverCheck > hoverDetectionInterval) {
        raycaster.setFromCamera(mouseRef.current, camera);

        const cubeMeshes = objectsRef.current.cubes.map(c => c.mesh.children[0]);
        const intersects = raycaster.intersectObjects(cubeMeshes, false);

        if (intersects.length > 0) {
          const hoveredCubeMesh = intersects[0].object;
          const hoveredObj = objectsRef.current.cubes.find(c => c.mesh.children[0] === hoveredCubeMesh);
          if (hoveredObj && hoveredObj.id !== lastHoveredId) {
            setHoveredStep(hoveredObj.id);
            lastHoveredId = hoveredObj.id;
          }
        } else {
          if (lastHoveredId !== null) {
            setHoveredStep(null);
            lastHoveredId = null;
          }
        }
        lastHoverCheck = now;
      }

      // Animate drones: only hovered drone rises + rotates propellers
      const elapsed = clockRef.current.getElapsedTime();

      objectsRef.current.drones.forEach(({ mesh, id, baseY }) => {
        const isHovered = hoveredStep === id;
        const targetY = isHovered ? baseY + 3 : baseY;

        // Smoothly animate drone's vertical position
        mesh.position.y += (targetY - mesh.position.y) * 0.1;

        if (isHovered) {
          // Rotate whole drone slowly
          mesh.rotation.y += 0.01;

          // Spin propellers fast
          mesh.userData.propellers.forEach(prop => {
            prop.rotation.x += 0.4;
          });
        } else {
          // Slowly reset rotation and propellers
          mesh.rotation.y += (0 - mesh.rotation.y) * 0.05;
          mesh.userData.propellers.forEach(prop => {
            prop.rotation.x += 0.05;
          });
        }
      });

      // Animate cubes: scale + rotate only hovered cube
   // In the animate loop, replace the cubes animation part with this:

objectsRef.current.cubes.forEach(({ mesh, id }) => {
  if (hoveredStep === id) {
    const scale = 1 + Math.sin(elapsed * 3) * 0.1;
    mesh.scale.set(scale, scale, scale);
    // Remove rotation on cube, so do NOT change mesh.rotation.y here
  } else {
    // Reset scale and rotation
    mesh.scale.set(1, 1, 1);
    // Reset rotation smoothly to 0 without rotating
    mesh.rotation.y += (0 - mesh.rotation.y) * 0.1;
  }
});

      // Update label positions every 10 frames for performance
      frameCounter.current++;
      if (frameCounter.current % 10 === 0) {
        const labels = objectsRef.current.cubes.map(({ mesh, id }) => {
          const pos = mesh.position.clone();
          pos.project(camera);
          return {
            id,
            x: ((pos.x + 1) / 2) * window.innerWidth,
            y: (-(pos.y - 1) / 2) * window.innerHeight,
            title: steps.find(s => s.id === id)?.title || '',
          };
        });
        setCubeLabels(labels);
      }

      renderer.render(scene, camera);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
    };
  }, [hoveredStep, steps]);

  // Drone creation function
  const createDrone = () => {
    const drone = new THREE.Group();

    // Body
    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.5, 1.2, 4, 8),
      new THREE.MeshStandardMaterial({ color: 0x2c5282, metalness: 0.9, roughness: 0.1 })
    );
    body.rotation.z = Math.PI / 2;
    drone.add(body);

    // Camera sphere
    const cam = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.8 })
    );
    cam.position.set(0.8, 0, 0);
    drone.add(cam);

    // Lens
    const lens = new THREE.Mesh(
      new THREE.CircleGeometry(0.15, 16),
      new THREE.MeshBasicMaterial({ color: 0x00aaff })
    );
    lens.position.set(0.81, 0, 0);
    lens.rotation.y = Math.PI / 2;
    drone.add(lens);

    // Propeller arms and propellers
    const armPositions = [
      [1.2, 0, 1.2],
      [-1.2, 0, 1.2],
      [1.2, 0, -1.2],
      [-1.2, 0, -1.2]
    ];

    const propellers = [];

    armPositions.forEach(pos => {
      // Arm
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 2.5, 8),
        new THREE.MeshStandardMaterial({ color: 0x4a5568, metalness: 0.8 })
      );
      arm.position.set(...pos);
      arm.rotation.x = Math.PI / 2;
      drone.add(arm);

      // Propeller group
      const propGroup = new THREE.Group();
      propGroup.position.set(...pos);

      // Motor base
      const motor = new THREE.Mesh(
        new THREE.CylinderGeometry(0.15, 0.15, 0.1, 16),
        new THREE.MeshStandardMaterial({ color: 0x1a202c, metalness: 0.9 })
      );
      motor.rotation.x = Math.PI / 2;
      propGroup.add(motor);

      // Propeller blades
      for (let i = 0; i < 4; i++) {
        const blade = new THREE.Mesh(
          new THREE.PlaneGeometry(0.8, 0.1),
          new THREE.MeshStandardMaterial({ color: 0xe2e8f0, side: THREE.DoubleSide })
        );
        blade.rotation.x = Math.PI / 2;
        blade.rotation.z = (i * Math.PI) / 2;
        blade.position.y = 0.06;
        propGroup.add(blade);
      }

      drone.add(propGroup);
      propellers.push(propGroup);
    });

    drone.userData.propellers = propellers;
    return drone;
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
        zIndex: 10
      }}>
        Military Drone Assembly
      </h1>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    
      {/* Cube labels */}
      {cubeLabels.map(label => (
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

export default DroneScene;

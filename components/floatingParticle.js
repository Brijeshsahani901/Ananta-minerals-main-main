import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function FloatingParticles3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Background (optional)
    const loader = new THREE.TextureLoader();
    loader.load("/pattern.png", (texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(20, 20);

      const bgGeometry = new THREE.PlaneGeometry(2000, 2000);
      const bgMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      const backgroundMesh = new THREE.Mesh(bgGeometry, bgMaterial);
      backgroundMesh.position.z = -500;
      scene.add(backgroundMesh);
    });

    // Particle setup
    const numParticles = 150;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(numParticles * 3);
    const targetPositions = new Float32Array(numParticles * 3);
    const sizes = new Float32Array(numParticles);
    const colors = [];

    const colorPalette = [
      new THREE.Color("#a5f3fc"),
      new THREE.Color("#bae6fd"),
      new THREE.Color("#d8f3ff"),
      new THREE.Color("#e0f2fe"),
    ];

    for (let i = 0; i < numParticles; i++) {
      // Start at center
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;

      // Target explosion position
      targetPositions[i * 3] = (Math.random() - 0.5) * 800;
      targetPositions[i * 3 + 1] = (Math.random() - 0.5) * 600;
      targetPositions[i * 3 + 2] = (Math.random() - 0.5) * 800;

      sizes[i] = 10 + Math.random() * 10;

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors.push(col.r, col.g, col.b);
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      vertexColors: true,
      size: 15,
      sizeAttenuation: true,
      transparent: true,
      opacity: 1, // start fully visible
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const explosionDuration = 1500; // in ms
    const fadeOutDelay = 2000; // delay before fading out
    const fadeOutDuration = 1000; // fade out over 1s
    const startTime = performance.now();

    let exploded = false;
    let fadedOut = false;

    const animate = () => {
      requestAnimationFrame(animate);

      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      const positions = geometry.attributes.position.array;

      // Explosion logic
      if (!exploded) {
        const t = Math.min(elapsed / explosionDuration, 1);
        for (let i = 0; i < numParticles; i++) {
          const idx = i * 3;
          positions[idx] = THREE.MathUtils.lerp(0, targetPositions[idx], t);
          positions[idx + 1] = THREE.MathUtils.lerp(0, targetPositions[idx + 1], t);
          positions[idx + 2] = THREE.MathUtils.lerp(0, targetPositions[idx + 2], t);
        }
        if (t === 1) {
          exploded = true;
        }
      }

      // Fade out after delay
      if (exploded && !fadedOut) {
        const fadeElapsed = elapsed - fadeOutDelay;
        if (fadeElapsed > 0) {
          const t = Math.min(fadeElapsed / fadeOutDuration, 1);
          material.opacity = 1 - t;
          if (t >= 1) {
            fadedOut = true;
            material.opacity = 0;
            points.visible = false; // completely hide after fade
          }
        }
      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (mountRef.current && renderer.domElement)
        mountRef.current.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
}

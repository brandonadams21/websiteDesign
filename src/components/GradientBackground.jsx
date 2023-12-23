import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const GradientBackground = () => {
  const containerRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create a canvas element and draw a gradient on it
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 2; // The width doesn't need to be large for a gradient
    canvas.height = window.innerHeight;

    // Create the gradient fill using the desired color stops
    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#62875c");
    gradient.addColorStop(1, "#d2b794");

    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Use the canvas as a texture
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter; // This will ensure the texture is smooth and not pixelated
    scene.background = texture;

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const positionArray = new Float32Array(particlesCount * 3); // x, y, z for each particle

    for (let i = 0; i < particlesCount * 3; i++) {
      positionArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positionArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.025,
      color: "#ffffff",
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate particles
      particlesMesh.rotation.y += 0.0005 + mousePosition.current.x * 0.001;
      particlesMesh.rotation.x += 0.0005 + mousePosition.current.y * 0.001;

      // Render the scene
      renderer.render(scene, camera);
    };
    animate();

    // Handle mouse movement
    const onDocumentMouseMove = (event) => {
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    document.addEventListener("mousemove", onDocumentMouseMove, false);

    // Handle resizing
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize, false);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onWindowResize);
      document.removeEventListener("mousemove", onDocumentMouseMove);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default GradientBackground;

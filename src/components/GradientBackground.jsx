import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const GradientBackground = () => {
  const containerRef = useRef(null);

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
    let gradient = context.createLinearGradient(0, 0, 0, canvas.height);

    // Colors for the gradient
    const colors = ["#62875c", "#d2b794"];
    let colorIndex = 0;
    let lerpFactor = 0;
    const transitionSpeed = 0.005; // Speed of color transition

    // Function to interpolate between two colors
    const interpolateColor = (color1, color2, factor) => {
      // Extract the red, green, blue values from the hex color
      const hex = (color) => parseInt(color.slice(1), 16);
      const r = (color) => (hex(color) >> 16) & 0xff;
      const g = (color) => (hex(color) >> 8) & 0xff;
      const b = (color) => hex(color) & 0xff;

      // Interpolate each component
      const blend = (a, b, factor) => Math.round((1 - factor) * a + factor * b);
      return `rgb(${blend(r(color1), r(color2), factor)}, ${blend(
        g(color1),
        g(color2),
        factor
      )}, ${blend(b(color1), b(color2), factor)})`;
    };

    // Update gradient color and render in each frame
    const animate = () => {
      requestAnimationFrame(animate);

      if (lerpFactor < 1) {
        lerpFactor += transitionSpeed;
      } else {
        lerpFactor = 0;
        colorIndex = (colorIndex + 1) % colors.length;
      }

      const color1 = colors[colorIndex];
      const color2 = colors[(colorIndex + 1) % colors.length];
      const interpolatedColor = interpolateColor(color1, color2, lerpFactor);

      gradient = context.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, interpolatedColor);
      gradient.addColorStop(1, interpolatedColor);
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      scene.background = texture;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resizing
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize, false);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default GradientBackground;

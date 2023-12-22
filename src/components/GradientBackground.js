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

    const colors = [0xccd5ae, 0xe9edc9, 0xfefae0, 0xfaedcd, 0xe7c8a0];
    let colorIndex = 0;

    // ...

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Define the animation speed (in seconds) and the number of frames for a smooth fade
      const animationSpeed = 5; // Change this value to adjust the speed (lower value for slower fade)
      const framesPerSecond = 60;
      const frames = animationSpeed * framesPerSecond;

      // Calculate the color index based on the current frame
      colorIndex += 1 / frames;

      // Wrap around the color index if it exceeds the number of colors
      if (colorIndex >= colors.length) {
        colorIndex = 0;
      }

      // Interpolate between colors
      const colorA = new THREE.Color(colors[Math.floor(colorIndex)]);
      const colorB = new THREE.Color(
        colors[Math.ceil(colorIndex) % colors.length]
      );

      // Calculate the current color with interpolation
      const blendedColor = colorA.lerp(colorB, colorIndex % 1);

      // Set the scene background color
      scene.background = blendedColor;

      // Render the scene with the camera
      renderer.render(scene, camera);
    };

    // ...

    animate();

    window.addEventListener("resize", () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);
  return <div ref={containerRef} />;
};

export default GradientBackground;

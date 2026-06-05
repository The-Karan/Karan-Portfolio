import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const NORMAL_ROTATE_SPEED = -1.5;
const BACK_ROTATE_SPEED = -4.2;

const wrapAngle = (angle) => Math.atan2(Math.sin(angle), Math.cos(angle));
const smoothStep = (value) => value * value * (3 - 2 * value);

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const AdaptiveOrbitControls = () => {
  const controlsRef = useRef(null);
  const frontAngleRef = useRef(null);

  useFrame(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    const currentAngle = controls.getAzimuthalAngle();
    if (frontAngleRef.current === null) {
      frontAngleRef.current = currentAngle;
    }

    const frontDistance = Math.abs(wrapAngle(currentAngle - frontAngleRef.current));
    const backBlend = smoothStep(Math.min(frontDistance / Math.PI, 1));
    const targetSpeed =
      NORMAL_ROTATE_SPEED +
      (BACK_ROTATE_SPEED - NORMAL_ROTATE_SPEED) * backBlend;

    controls.autoRotateSpeed += (targetSpeed - controls.autoRotateSpeed) * 0.08;
  });

  return (
    <OrbitControls
      ref={controlsRef}
      autoRotate
      autoRotateSpeed={NORMAL_ROTATE_SPEED}
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <AdaptiveOrbitControls />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

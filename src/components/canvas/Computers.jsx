import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const NORMAL_ROTATE_SPEED = -1.5;
const BACK_ROTATE_SPEED = -4.2;
const RESUME_AUTO_ROTATE_DELAY = 1600;

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
  const resumeTimerRef = useRef(null);

  useEffect(() => {
    const applyTouchBehavior = () => {
      const domElement = controlsRef.current?.domElement;

      if (domElement) {
        domElement.style.touchAction = "pan-y";
      }
    };

    applyTouchBehavior();
    const frameId = window.requestAnimationFrame(applyTouchBehavior);

    return () => {
      window.cancelAnimationFrame(frameId);

      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  const pauseAutoRotate = () => {
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }

    if (controlsRef.current) {
      controlsRef.current.autoRotate = false;
    }
  };

  const resumeAutoRotate = () => {
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = window.setTimeout(() => {
      if (controlsRef.current) {
        controlsRef.current.autoRotate = true;
      }
    }, RESUME_AUTO_ROTATE_DELAY);
  };

  useFrame(() => {
    const controls = controlsRef.current;
    if (!controls) return;
    if (!controls.autoRotate) return;

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
      enablePan={false}
      enableRotate
      enableZoom={false}
      makeDefault
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      onEnd={resumeAutoRotate}
      onStart={pauseAutoRotate}
      rotateSpeed={0.85}
    />
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dpr = isMobile ? [0.75, 1] : [1, 1.35];

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
      className='cursor-grab touch-pan-y active:cursor-grabbing'
      id='hero-computer-canvas'
      style={{ touchAction: "pan-y" }}
      frameloop='always'
      dpr={dpr}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ antialias: false, powerPreference: "low-power" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <AdaptiveOrbitControls />
        <Computers isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;

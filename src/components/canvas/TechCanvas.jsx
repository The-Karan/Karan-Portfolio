import React from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, View } from "@react-three/drei";

const TechCanvas = ({ eventSource }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 45 }}
      className='pointer-events-none !fixed inset-0 !z-10'
      dpr={[1, 2]}
      eventPrefix='client'
      eventSource={eventSource}
      frameloop='always'
      shadows
      gl={{ alpha: true, antialias: true }}
    >
      <Preload all />
      <View.Port />
    </Canvas>
  );
};

export default TechCanvas;

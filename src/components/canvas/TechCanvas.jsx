import React from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

const TechCanvas = ({ eventSource }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 45 }}
      className='pointer-events-none !fixed inset-0 !z-10'
      dpr={[1, 1.5]}
      eventPrefix='client'
      eventSource={eventSource}
      frameloop='always'
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
    >
      <View.Port />
    </Canvas>
  );
};

export default TechCanvas;

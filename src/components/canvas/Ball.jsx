import React from "react";
import { Decal, Float, useTexture } from "@react-three/drei";

const Ball = ({
  imgUrl,
  position = [0, 0, 0],
  scale = 2.75,
  speed = 1.75,
  rotationIntensity = 1,
  floatIntensity = 2,
  decalScale = 1.12,
}) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <>
      <mesh
        receiveShadow
        position={[position[0] + 0.05, position[1] - 0.08, position[2] - 1.15]}
        scale={[scale * 1.28, scale * 1.28, 1]}
      >
        <planeGeometry args={[1, 1]} />
        <shadowMaterial opacity={0.16} transparent />
      </mesh>
      <Float
        speed={speed}
        rotationIntensity={rotationIntensity}
        floatIntensity={floatIntensity}
      >
        <mesh castShadow receiveShadow position={position} scale={scale}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color='#ebe7f5'
            emissive='#5e4ecf'
            emissiveIntensity={0.05}
            metalness={0.06}
            polygonOffset
            polygonOffsetFactor={-5}
            roughness={0.52}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={decalScale}
            map={decal}
            flatShading
          />
        </mesh>
      </Float>
    </>
  );
};

export { Ball };

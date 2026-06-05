import React, { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Ball } from "./canvas/Ball";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <View
          className='h-[7.5rem] w-[7.5rem] cursor-grab active:cursor-grabbing sm:h-[8.5rem] sm:w-[8.5rem]'
          index={index + 1}
          key={technology.name}
          title={technology.name}
        >
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 5.9]} />
            <ambientLight intensity={0.2} />
            <hemisphereLight args={["#d9e7ff", "#21163f", 0.42]} />
            <directionalLight
              castShadow
              intensity={0.9}
              position={[2.4, 2.8, 3.5]}
              shadow-bias={-0.00012}
              shadow-mapSize={512}
            />
            <pointLight color='#7158e2' intensity={0.68} position={[-2.2, 1.4, 2.4]} />
            <pointLight color='#39d0c8' intensity={0.34} position={[2.4, -1.6, 2.2]} />
            <OrbitControls enablePan={false} enableZoom={false} makeDefault />
            <Ball imgUrl={technology.icon} scale={2.22} decalScale={1.15} />
          </Suspense>
        </View>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "skills");

import React, { lazy, Suspense, useRef } from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useInViewport } from "../hooks/useInViewport";

const Tech3DGrid = lazy(() => import("./Tech3DGrid"));
const TechCanvas = lazy(() => import("./canvas/TechCanvas"));

const TechBadgeGrid = () => (
  <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
    {technologies.map((technology) => (
      <div
        key={technology.name}
        className='group rounded-2xl green-pink-gradient p-[1px] shadow-card'
      >
        <div className='flex min-h-[132px] flex-col items-center justify-center rounded-2xl bg-tertiary px-4 py-5 transition-colors duration-200 group-hover:bg-[#1d1838]'>
          <img
            src={technology.icon}
            alt={`${technology.name} logo`}
            loading='lazy'
            width='56'
            height='56'
            className='h-14 w-14 object-contain'
          />
          <p className='mt-4 text-center text-[14px] font-semibold text-white'>
            {technology.name}
          </p>
        </div>
      </div>
    ))}
  </div>
);

const Tech = ({ enable3D = false, eventSource }) => {
  const sectionRef = useRef(null);
  const isInViewport = useInViewport(sectionRef, "300px");
  const show3D = enable3D && isInViewport;

  return (
    <div ref={sectionRef}>
      {show3D ? (
        <>
          <Suspense fallback={<TechBadgeGrid />}>
            <Tech3DGrid />
          </Suspense>
          <Suspense fallback={null}>
            <TechCanvas eventSource={eventSource} />
          </Suspense>
        </>
      ) : (
        <TechBadgeGrid />
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "skills");

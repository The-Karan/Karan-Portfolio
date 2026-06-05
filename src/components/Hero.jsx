import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navigateToSection } from "../utils/navigation";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const HeroFallbackVisual = () => (
  <div
    className='pointer-events-none absolute inset-0 flex items-end justify-center overflow-hidden pb-20 md:items-center md:justify-end md:pb-0 md:pr-[8vw]'
    aria-hidden='true'
  >
    <div className='relative h-[260px] w-[min(82vw,440px)] md:h-[380px] md:w-[520px]'>
      <div className='absolute inset-x-8 bottom-0 h-20 rounded-[50%] bg-[#00cea8]/15 blur-2xl' />
      <div className='absolute right-2 top-6 h-44 w-44 rounded-full bg-[#00cea8]/20 blur-3xl md:h-64 md:w-64' />
      <div className='absolute left-2 top-12 h-40 w-40 rounded-full bg-[#bf61ff]/20 blur-3xl md:h-56 md:w-56' />
      <div className='absolute left-1/2 top-1/2 h-[190px] w-[300px] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-[28px] border border-white/15 bg-[#151030]/85 p-4 shadow-[0_35px_120px_rgba(0,0,0,0.42)] backdrop-blur md:h-[260px] md:w-[420px] md:p-5'>
        <div className='flex gap-2'>
          <span className='h-2.5 w-2.5 rounded-full bg-[#fc6767]' />
          <span className='h-2.5 w-2.5 rounded-full bg-[#f5af19]' />
          <span className='h-2.5 w-2.5 rounded-full bg-[#00cea8]' />
        </div>
        <div className='mt-7 space-y-4'>
          <div className='h-4 w-2/3 rounded-full bg-white/25' />
          <div className='h-4 w-5/6 rounded-full bg-[#00cea8]/45' />
          <div className='h-4 w-1/2 rounded-full bg-[#bf61ff]/45' />
          <div className='mt-8 grid grid-cols-3 gap-3'>
            <span className='h-16 rounded-2xl bg-white/[0.08]' />
            <span className='h-16 rounded-2xl bg-white/[0.13]' />
            <span className='h-16 rounded-2xl bg-white/[0.08]' />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Hero = ({ enable3D = false }) => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Karan Sharma</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Building scalable web applications, <br className='sm:block hidden' />
            CMS solutions and user-focused digital experiences
          </p>
        </div>
      </div>

      {enable3D ? (
        <Suspense fallback={<HeroFallbackVisual />}>
          <ComputersCanvas />
        </Suspense>
      ) : (
        <HeroFallbackVisual />
      )}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a
          href='/about'
          onClick={(event) => {
            event.preventDefault();
            navigateToSection("about");
          }}
          aria-label='Scroll to about section'
        >
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

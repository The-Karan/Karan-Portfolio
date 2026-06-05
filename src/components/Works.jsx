import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const githubProfileLink = "https://github.com/The-Karan";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const hasSourceCode = Boolean(source_code_link);

  const openLiveProject = () => {
    if (live_link) {
      window.open(live_link, "_blank", "noopener,noreferrer");
    }
  };

  const openSourceCode = (event) => {
    event.stopPropagation();

    if (hasSourceCode) {
      window.open(source_code_link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='group bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div>
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt={`${name} project screenshot`}
              loading='lazy'
              decoding='async'
              width='720'
              height='500'
              className='w-full h-full object-cover rounded-2xl'
            />

            {hasSourceCode && (
              <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                <button
                  type='button'
                  onClick={openSourceCode}
                  aria-label={`Open GitHub repo for ${name}`}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70'
                >
                  <img
                    src={github}
                    alt='source code'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </button>
              </div>
            )}
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          {live_link && (
            <button
              type='button'
              onClick={openLiveProject}
              className='mt-5 w-full rounded-xl green-pink-gradient p-[1px] shadow-card transition-all duration-300 ease-out hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:mt-0 sm:max-h-0 sm:translate-y-3 sm:overflow-hidden sm:opacity-0 sm:pointer-events-none sm:group-hover:mt-5 sm:group-hover:max-h-20 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto sm:group-focus-within:mt-5 sm:group-focus-within:max-h-20 sm:group-focus-within:translate-y-0 sm:group-focus-within:opacity-100 sm:group-focus-within:pointer-events-auto'
              aria-label={`Open live website for ${name}`}
            >
              <span className='flex items-center justify-center gap-2 rounded-xl bg-tertiary px-4 py-3 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#151030]/85'>
                View live site
                <svg
                  aria-hidden='true'
                  className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M7 17L17 7M17 7H9M17 7V15'
                  />
                </svg>
              </span>
            </button>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The projects below showcase my expertise in software development, frontend
          engineering, and CMS development. Through these applications, I have worked on
          responsive web design, API integration, database management, and real-world
          business solutions. Each project reflects my ability to transform ideas into
          functional, scalable, and user-focused digital products.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className='relative z-10 mt-24 flex justify-center sm:mt-28'>
        <a
          href={githubProfileLink}
          target='_blank'
          rel='noreferrer'
          className='group rounded-2xl green-pink-gradient p-[1px] shadow-card transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70'
          aria-label='View more projects on GitHub'
        >
          <span className='flex items-center gap-3 rounded-2xl bg-tertiary px-6 py-4 text-[15px] font-semibold text-white transition-colors duration-300 group-hover:bg-[#151030]/90'>
            <span className='black-gradient flex h-9 w-9 items-center justify-center rounded-full'>
              <img
                src={github}
                alt=''
                aria-hidden='true'
                className='h-5 w-5 object-contain'
              />
            </span>
            View more on GitHub
            <svg
              aria-hidden='true'
              className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13 7L18 12M18 12L13 17M18 12H6'
              />
            </svg>
          </span>
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");

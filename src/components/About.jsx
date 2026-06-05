import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const profileImage = "/karan-profile.jpg";
const resumeFile = "/Karan_Resume.pdf";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={`${title} service icon`}
          loading='lazy'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const ProfilePhoto = () => (
  <Tilt
    tiltMaxAngleX={8}
    tiltMaxAngleY={8}
    perspective={1000}
    scale={1.02}
    transitionSpeed={900}
    className='w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[390px] xl:max-w-[440px]'
  >
    <motion.div
      variants={fadeIn("left", "spring", 0.2, 0.9)}
      className='green-pink-gradient p-[1px] rounded-[28px] shadow-card'
    >
      <div className='relative min-h-[420px] overflow-hidden rounded-[28px] bg-tertiary sm:min-h-[500px] lg:min-h-[540px]'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,206,168,0.24),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(191,97,255,0.24),transparent_30%),#151030]' />
        <img
          src={profileImage}
          alt='Karan Sharma software developer profile'
          loading='lazy'
          decoding='async'
          width='900'
          height='1200'
          className='absolute inset-0 z-10 h-full w-full object-cover object-[62%_center]'
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <div className='absolute inset-0 z-20 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent' />
        <div className='absolute inset-0 z-30 flex items-end p-7'>
          <div>
            <h3 className='mt-2 text-[28px] font-bold text-white sm:text-[34px]'>
              Karan Sharma
            </h3>
            <p className='text-[13px] uppercase tracking-[0.2em] text-secondary'>
              Software Developer
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <div className='mt-4 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between xl:gap-16'>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='w-full text-[16px] leading-[28px] text-secondary sm:text-[17px] sm:leading-[30px] lg:max-w-[720px]'
        >
          <p>
            I am a passionate Software Developer with a strong interest in 
            building modern web applications and digital solutions. 
            My expertise spans CMS Development, Frontend Development, 
            React.js, UI/UX Design, and software engineering principles.
          </p>

          <p className='mt-7'>
            I enjoy transforming ideas into scalable, user-friendly products that deliver meaningful experiences. 
            With hands-on experience in website development, API integrations, responsive design, and database management, 
            I focus on creating solutions that are both functional and visually engaging.
          </p>

          <p className='mt-7'>
            My technical skill set includes Java, JavaScript, Python, SQL, React.js, 
            HTML, CSS, Tailwind CSS, MySQL, MongoDB, and PostgreSQL. I am constantly 
            exploring new technologies, improving my problem-solving abilities, 
            and expanding my knowledge of modern development practices.
          </p>

          <p className='mt-7'>
            Driven by curiosity and continuous learning, I strive to build innovative digital 
            experiences, contribute to impactful projects, and deliver 
            high-quality solutions that create real value for users and businesses.
          </p>

          <a
            href={resumeFile}
            download='Karan_Resume.pdf'
            className='group mt-9 inline-flex rounded-xl green-pink-gradient p-[1px] shadow-card transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70'
          >
            <span className='flex items-center gap-3 rounded-xl bg-tertiary px-5 py-3 text-[14px] font-semibold text-white transition-colors duration-200 group-hover:bg-[#151030]/85'>
              Download Resume
              <svg
                aria-hidden='true'
                className='h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 4V16M12 16L7 11M12 16L17 11M5 20H19'
                />
              </svg>
            </span>
          </a>
        </motion.div>

        <ProfilePhoto />
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

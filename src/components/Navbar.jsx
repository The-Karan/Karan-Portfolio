import React, { useEffect, useState } from "react";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import {
  getSectionIdFromPath,
  getSectionPath,
  navigateToSection,
} from "../utils/navigation";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const syncActiveSection = () => {
      const activeSectionId = getSectionIdFromPath(window.location.pathname);
      const activeNav = navLinks.find((nav) => nav.id === activeSectionId);

      setActive(activeNav?.title || "");
    };

    syncActiveSection();
    window.addEventListener("popstate", syncActiveSection);

    return () => window.removeEventListener("popstate", syncActiveSection);
  }, []);

  const handleHomeClick = (event) => {
    event.preventDefault();
    setActive("");
    navigateToSection("");
  };

  const handleSectionClick = (event, nav) => {
    event.preventDefault();
    setActive(nav.title);
    navigateToSection(nav.id);
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-30 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <a
          href='/'
          className='flex items-center gap-2 border-none bg-transparent'
          onClick={handleHomeClick}
          aria-label='Go to Karan Sharma portfolio homepage'
        >
          <img src={logo} alt='Karan Sharma logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Karan Sharma &nbsp;
            <span className='sm:block hidden'> | Software Developer</span>
          </p>
        </a>

        <ul className='list-none hidden lg:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a
                href={getSectionPath(nav.id)}
                onClick={(event) => handleSectionClick(event, nav)}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <button
            type='button'
            aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={toggle}
            aria-controls='mobile-navigation'
            className='green-pink-gradient rounded-full p-[1px] shadow-[0_14px_35px_rgba(0,0,0,0.35)] transition-transform duration-200 active:scale-95'
            onClick={() => setToggle(!toggle)}
          >
            <span className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#090325]/90 backdrop-blur-md'>
              <img
                src={toggle ? close : menu}
                alt=''
                aria-hidden='true'
                className='h-5 w-5 object-contain'
              />
            </span>
          </button>

          <div
            id='mobile-navigation'
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute right-6 top-20 z-40 w-[min(calc(100vw-3rem),300px)] overflow-hidden rounded-2xl border border-white/10 bg-[#090325]/90 p-[1px] shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl`}
          >
            <div className='green-pink-gradient absolute inset-x-0 top-0 h-[2px]' />
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,206,168,0.16),transparent_35%),radial-gradient(circle_at_100%_15%,rgba(191,97,255,0.18),transparent_34%)]' />
            <ul className='relative flex flex-1 list-none flex-col gap-2 p-3'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className='font-poppins'
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a
                    href={getSectionPath(nav.id)}
                    onClick={(event) => handleSectionClick(event, nav)}
                    className={`flex items-center justify-center rounded-xl px-4 py-3 text-center text-[15px] font-medium transition-colors duration-200 ${
                      active === nav.title
                        ? "bg-white/10 text-white"
                        : "text-secondary hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    <span>{nav.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

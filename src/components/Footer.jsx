import React from "react";

import { socialLinks } from "../constants";
import { styles } from "../styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.paddingX} relative z-10 pb-8 pt-2`}>
      <div className='mx-auto max-w-7xl rounded-2xl bg-black-100 px-6 py-8 text-center'>
        <div className='mx-auto mb-7 h-px max-w-sm green-pink-gradient opacity-80' />

        <div className='flex flex-wrap items-center justify-center gap-4'>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={social.url.startsWith("mailto:") ? undefined : "noreferrer"}
              aria-label={social.name}
              title={social.name}
              className='group flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-tertiary shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-[#00cea8]/70 hover:bg-[#1d1838] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70'
            >
              <span
                className='flex h-10 w-10 items-center justify-center rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform duration-200 group-hover:scale-110'
                style={{ backgroundColor: social.iconBg || "#ffffff" }}
              >
                <img
                  src={social.icon}
                  alt=''
                  aria-hidden='true'
                  className={`${social.iconClass || "h-8 w-8"} object-contain`}
                />
              </span>
            </a>
          ))}
        </div>

        <p className='mt-7 text-[14px] font-medium text-secondary'>
          &copy; {currentYear} Karan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import {
  backend,
  creator,
  mobile,
  web,

  certificate,

  c,
  cpp,
  canva,
  css,
  git,
  githubb,
  html,
  java,
  javascript,
  leetcode,
  mongodb,
  mysql,
  python,
  reactjs,
  tailwind,
  vscode,
  wix,
  wordpress,

  xytingway,
  sortiq,

  socialGithub,
  socialLinkedin,
  socialInstagram,
  socialGmail,
  socialWhatsapp,
  socialLeetcode,
} from "../assets";

const projectImages = {
  restaurant: "/projects/restaurant.webp",
  clubevent: "/projects/clubevent.webp",
  cms: "/projects/cms.webp",
  cricket: "/projects/cricket.webp",
  pythonwallah: "/projects/pythonwallah.webp",
  sortiq: "/projects/sortiq.webp",
  talentsphere: "/projects/talentsphere.webp",
  osteo: "/projects/osteo.webp",
  peckfamily: "/projects/peckfamily.webp",
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/The-Karan",
    icon: socialGithub,
    iconClass: "h-8 w-8",
    iconBg: "#ffffff",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/karan9904/",
    icon: socialLinkedin,
    iconClass: "h-8 w-8",
    iconBg: "#ffffff",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/The_karan_sharma/",
    icon: socialLeetcode,
    iconClass: "h-8 w-8",
    iconBg: "#ffffff",
  },
  {
    name: "Gmail",
    url: "mailto:KaranSharma.ab9904@gmail.com",
    icon: socialGmail,
    iconClass: "h-8 w-8",
    iconBg: "#ffffff",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/917082358012",
    icon: socialWhatsapp,
    iconClass: "h-8 w-8",
    iconBg: "#ffffff",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/the_karan__sharma/",
    icon: socialInstagram,
    iconClass: "h-8 w-8",
    iconBg: "#ffffff",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "CMS Developer",
    icon: mobile,
  },
  {
    title: "Core Java Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Wix Developer",
    icon: backend,
  },
  {
    title: "WordPress Developer",
    icon: mobile,
  },
  {
    title: "SEO & Content Management",
    icon: web,
  },
];

const technologies = [
  { name: "C", icon: c },
  { name: "C++", icon: cpp },
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git", icon: git },
  { name: "GitHub", icon: githubb },
  { name: "VS Code", icon: vscode },
  { name: "Canva", icon: canva },
  { name: "Wix Studio", icon: wix },
  { name: "WordPress", icon: wordpress },
  { name: "LeetCode", icon: leetcode },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "The Xiting Way",
    icon: xytingway,
    iconBg: "#000000",
    date: "Jul 2024 - Jan 2025",
    points: [
      "Developed responsive user interfaces using React.js and modern frontend technologies.",
      "Integrated REST APIs to deliver dynamic and data-driven user experiences.",
      "Utilized Redux and React Query for efficient state and server data management.",
      "Improved application responsiveness, performance, and overall user experience.",
      "Collaborated with team members to deliver scalable and maintainable frontend solutions.",
    ],
  },

  {
    title: "Software Developer Intern / CMS Developer",
    company_name: "Sortiq Solutions Pvt Ltd",
    icon: sortiq,
    iconBg: "#d1d1d1",
    date: "Jan 2026 - June 2026",
    points: [
      "Developed modern websites, CMS systems, and custom digital solutions for clients.",
      "Integrated payment gateways such as Razorpay and improved conversion-focused user interfaces.",
      "Built responsive layouts and optimized website performance across multiple devices.",
      "Worked on debugging, deployments, and implementation of live business requirements.",
      "Created reusable frontend components and scalable web modules.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Mastered machine learning concepts, model development, and practical AI applications.",
    name: "IBM Machine Learning",
    designation: "Professional Certificate",
    company: "IBM",
    image: certificate,
  },
  {
    testimonial:
      "Learned deep learning using PyTorch, TensorFlow, and Keras frameworks.",
    name: "Deep Learning",
    designation: "Professional Certificate",
    company: "IBM",
    image: certificate,
  },
  {
    testimonial:
      "Explored generative AI concepts and modern AI-powered applications.",
    name: "Generative AI",
    designation: "Professional Certificate",
    company: "IBM",
    image: certificate,
  },
  {
    testimonial:
      "Built expertise in software product management and agile development.",
    name: "Software Product Management",
    designation: "Specialization",
    company: "University of Alberta",
    image: certificate,
  },
  {
    testimonial:
      "Learned software processes, agile methodologies, and project planning.",
    name: "Agile Practices",
    designation: "Professional Certificate",
    company: "University of Alberta",
    image: certificate,
  },
  {
    testimonial:
      "Developed skills in client requirements gathering and solution design.",
    name: "Client Requirements",
    designation: "Professional Certificate",
    company: "University of Alberta",
    image: certificate,
  },
  {
    testimonial:
      "Explored cloud infrastructure, deployment models, and cloud services.",
    name: "Cloud Computing",
    designation: "Professional Certificate",
    company: "Duke University",
    image: certificate,
  },
  {
    testimonial:
      "Studied containers, virtualization, APIs, and cloud architecture.",
    name: "Cloud Virtualization",
    designation: "Professional Certificate",
    company: "Duke University",
    image: certificate,
  },
  {
    testimonial:
      "Learned DevOps practices, automation workflows, and CI/CD fundamentals.",
    name: "Introduction to DevOps",
    designation: "Professional Certificate",
    company: "IBM",
    image: certificate,
  },
  {
    testimonial:
      "Built foundational knowledge of SAP enterprise systems and workflows.",
    name: "SAP Fundamentals",
    designation: "Professional Certificate",
    company: "SAP",
    image: certificate,
  },
  {
    testimonial:
      "Learned SAP ABAP programming and enterprise application development.",
    name: "SAP ABAP",
    designation: "Professional Certificate",
    company: "SAP",
    image: certificate,
  },
  {
    testimonial:
      "Mastered prompt engineering techniques for generative AI applications.",
    name: "Prompt Engineering",
    designation: "Professional Certificate",
    company: "IBM",
    image: certificate,
  },
  {
    testimonial:
      "Certified in Python programming with strong problem-solving and development skills.",
    name: "CPPA",
    designation: "Certification",
    company: "CertifyCore",
    image: certificate,
  },
  {
    testimonial:
      "Completed ServiceNow Micro Certification in workflow automation and enterprise solutions.",
    name: "ServiceNow",
    designation: "Certification",
    company: "ServiceNow",
    image: certificate,
  },
  {
    testimonial:
      "Awarded National Level Scout & Guides certification for leadership and teamwork.",
    name: "Scout & Guides",
    designation: "Certification",
    company: "National Level",
    image: certificate,
  },
];

const projects = [
  
  {
    name: "Talent Sphere",
    description:
      "Career development platform designed to help users enhance their professional growth through job opportunities, skill assessments, interview preparation, and interactive learning resources in a modern and user-friendly environment.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "API Integration",
        color: "pink-text-gradient",
      },
    ],
    image: projectImages.talentsphere,
    source_code_link: "https://github.com/The-Karan/Talent-Sphere",
    live_link: "https://talent-sphere-xi.vercel.app/",
  },

  {
    name: "Sortiq Solutions Website",
    description:
      "Responsive company website created to improve brand visibility, showcase business services, and provide an engaging user experience through modern design, optimized performance, and seamless navigation.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Wix Studio",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX Design",
        color: "pink-text-gradient",
      },
    ],
    image: projectImages.sortiq,
    source_code_link: "https://github.com/The-Karan/Sortiq-Solutions",
    live_link: "https://karansortiqsolutio9.wixstudio.com/my-site-1",
  },

  {
    name: "Osteo Lab",
    description:
      "Modern healthcare website designed for an osteopathy clinic, providing treatment information, appointment booking, patient guidance, and a user-friendly experience through responsive design and intuitive navigation.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Wix",
        color: "green-text-gradient",
      },
      {
        name: "Responsive Design",
        color: "pink-text-gradient",
      },
    ],
    image: projectImages.osteo,
    source_code_link: "",
    live_link: "https://www.osteolab.co.uk/",
  },

  {
    name: "College Management",
    description:
      "Web-based college management platform that automates attendance, student records, fee management, examinations, and results, improving administrative efficiency through a centralized and responsive digital solution.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML #CSS",
        color: "green-text-gradient",
      },
      {
        name: "Backend API",
        color: "pink-text-gradient",
      },
    ],
    image: projectImages.cms,
    source_code_link: "https://github.com/The-Karan/College-Management-System",
    live_link: "https://college-management-system-tan.vercel.app/",
  },

  {
    name: "Peck Family Financial",
    description:
      "Financial planning website built to showcase budgeting, debt management, retirement planning, and bookkeeping services, providing clients with a seamless experience through design and responsive functionality.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Wix Studio",
        color: "green-text-gradient",
      },
      {
        name: "CMS #UI Design",
        color: "pink-text-gradient",
      },
    ],
    image: projectImages.peckfamily,
    source_code_link: "",
    live_link: "https://www.peckfamilyfinancial.com/",
  },

  {
    name: "CrickMart",
    description:
      "Interactive cricket platform built to highlight tournaments, teams, match schedules, and event information, delivering a seamless user experience through responsive design and modern sports-focused layouts.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Wix Studio",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX Design",
        color: "pink-text-gradient",
      },
    ],
    image: projectImages.cricket,
    source_code_link: "https://github.com/The-Karan/online-cricket-pro-Web",
    live_link: "https://karansortiqsolutio9.wixstudio.com/online-cricket-pro-1",
  },

  {
    name: "Python Wallah",
    description:
      "Educational platform designed to explore Python programming through structured learning resources, interactive content, and a responsive interface that enhances the overall learning experience.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML #CSS",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX Design",
        color: "pink-text-gradient",
      },
    ],
    image: projectImages.pythonwallah,
    source_code_link: "https://github.com/The-Karan/Python_Wallah",
    live_link: "https://python-wallah.vercel.app/",
  },

  {
    name: "Kari - Indian Restaurant",
    description:
      "Web-based restaurant platform that allows users to explore authentic Indian cuisine, browse menus, view featured dishes, and enjoy a seamless dining experience through an interactive and responsive interface.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Wix Studio",
        color: "green-text-gradient",
      },
      {
        name: "Velo API",
        color: "pink-text-gradient",
      },
    ],
    image: projectImages.restaurant,
    source_code_link: "https://github.com/The-Karan/restaurant-Web",
    live_link: "https://karansortiqsolutio9.wixstudio.com/restaurant",
  },

  {
    name: "Event Dash",
    description:
      "Modern event organizer website template designed to showcase services, highlight upcoming events, manage client inquiries, and create a professional online presence through responsive and engaging design.",
    tags: [
      {
        name: "UI/UX Design",
        color: "blue-text-gradient",
      },
      {
        name: "Wix Harmony",
        color: "green-text-gradient",
      },
      {
        name: "Web Design",
        color: "pink-text-gradient",
      },
    ],
    image: projectImages.clubevent,
    source_code_link: "https://github.com/The-Karan/Night-Club-Web",
    live_link: "https://karansortiqsolutio9.wixstudio.com/my-site-4-copy",
  },

];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialLinks,
};

export const siteUrl = "https://karansharma.me";

export const sectionIds = [
  "about",
  "work",
  "skills",
  "projects",
  "certifications",
  "contact",
];

export const getSectionPath = (sectionId) => `/${sectionId}`;

export const getSectionIdFromPath = (pathname = window.location.pathname) => {
  const normalizedPath = pathname.replace(/\/+$/, "");
  const sectionId = normalizedPath.replace("/", "");

  return sectionIds.includes(sectionId) ? sectionId : "";
};

export const scrollToSection = (sectionId, behavior = "smooth") => {
  if (!sectionId) {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior, block: "start" });
  }
};

export const navigateToSection = (sectionId = "", options = {}) => {
  const { replace = false } = options;
  const targetPath = sectionId ? getSectionPath(sectionId) : "/";

  if (window.location.pathname !== targetPath) {
    const method = replace ? "replaceState" : "pushState";
    window.history[method](null, "", targetPath);
  }

  scrollToSection(sectionId);
};

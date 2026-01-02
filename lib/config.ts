export const siteConfig = {
  name: "Alexis Olivero",
  title: "Frontend Developer & Web Specialist",
  description:
    "Frontend Developer with over 6 years of experience delivering high-impact web solutions. Specialized in WordPress, Webflow, and React, with a strong focus on building scalable, maintainable architectures.",
  url: "https://oliverodev.com",
  ogImage: "https://oliverodev.com/opengraph-image",
  links: {
    instagram: "https://www.instagram.com/alexisfit97/",
    github: "https://github.com/wolfslender",
    linkedin: "https://linkedin.com/in/alexis-olivero",
    email: "contact@oliverodev.com",
  },
  author: "Alexis Olivero",
  keywords: [
    "frontend developer",
    "desarrollador frontend",
    "web developer",
    "desarrollador web",
    "react developer",
    "programador react",
    "next.js expert",
    "typescript",
    "javascript",
    "tailwind css",
    "wordpress specialist",
    "experto wordpress",
    "webflow developer",
    "desarrollador webflow",
    "seo optimization",
    "posicionamiento seo",
    "web performance",
    "optimización web",
    "ui/ux design",
    "diseño web",
    "freelance developer",
    "programador freelance",
    "hire web developer",
    "hire frontend developer",
    "contratar desarrollador web",
    "contratar desarrollador frontend",
    "web developer for hire",
    "frontend freelancer",
    "alexis olivero",
    "portfolio",
  ],
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  testimonials: [
    {
      quote: "Alexis transformed our digital presence. His attention to detail and technical expertise in Wordpress and WebFlow is unparalleled.",
      author: "Antonio Gonzales",
      role: "CEO Cybernetips",
      image: "/logos/logo_cybernetips.png"
    },
    {
      quote: "The best frontend developer I've worked with. He doesn't just write code; he builds solutions that scale.",
      author: "Maria Arentz",
      role: "GovValue",
      image: "/logos/GovValue-Logo.png"
    },
    {
      quote: "Delivered a complex government portal ahead of schedule with 100% accessibility compliance. Impressive work.",
      author: "Truenorth Corp",
      role: "Enterprise Partners",
      image: "/logos/truenorth_logo_white.png"
    }
  ],
  agencyMethodology: [
    {
      step: 1,
      title: "Strategic Discovery",
      description: "We deep-dive into your business goals, technical debt, and market position to identify the highest leverage opportunities.",
      details: ["Architecture Audit", "ROI Mapping", "Stakeholder Alignment"]
    },
    {
      step: 2,
      title: "Precision Strategy",
      description: "Defining the technical blueprint and user experience roadmap that guarantees scalability and security.",
      details: ["Tech Stack Selection", "UX Prototyping", "Security Protocols"]
    },
    {
      step: 3,
      title: "Elite Engineering",
      description: "Developing robust, high-performance solutions using modular architecture and clean code standards.",
      details: ["Agile Development", "Continuous CI/CD", "Rigorous QA"]
    },
    {
      step: 4,
      title: "Growth & Evolution",
      description: "Post-launch support and data-driven optimizations to ensure your digital product continues to lead the market.",
      details: ["Performance Monitoring", "Feature Scaling", "Conversion Tuning"]
    }
  ],
}

export type SiteConfig = typeof siteConfig

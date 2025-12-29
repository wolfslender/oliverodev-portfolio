import { useTranslation } from "react-i18next"
import { 
  hero as defaultHero, 
  services as defaultServices, 
  stats as defaultStats, 
  skills, 
  softSkills, 
  certifications, 
  projects, 
  experience, 
  education, 
  contact 
} from "@/lib/data"
import { useMemo } from "react"

export function useSiteData() {
  const { t } = useTranslation()

  const hero = useMemo(() => ({
    ...defaultHero,
    title: {
      prefix: t('hero.title.prefix', defaultHero.title.prefix),
      highlight: t('hero.title.highlight', defaultHero.title.highlight)
    },
    roles: t('hero.roles', { returnObjects: true, defaultValue: defaultHero.roles }) as string[],
    description: t('hero.description', defaultHero.description),
    buttons: {
      primary: t('hero.buttons.primary', defaultHero.buttons.primary),
      secondary: t('hero.buttons.secondary', defaultHero.buttons.secondary),
      downloadCv: t('hero.buttons.downloadCv', defaultHero.buttons.downloadCv)
    }
  }), [t])

  const trustedBy = useMemo(() => ({
    title: t('trustedBy.title', "Trusted by innovative companies")
  }), [t])

  const services = useMemo(() => {
    const servicesData = t('services', { returnObjects: true, defaultValue: defaultServices }) as typeof defaultServices
    return defaultServices.map((service, index) => ({
      ...service,
      title: servicesData[index]?.title || service.title,
      description: servicesData[index]?.description || service.description,
      features: servicesData[index]?.features || service.features
    }))
  }, [t])

  const stats = useMemo(() => {
    const statsData = t('stats', { returnObjects: true, defaultValue: defaultStats }) as typeof defaultStats
    return defaultStats.map((stat, index) => ({
      ...stat,
      label: statsData[index]?.label || stat.label
    }))
  }, [t])

  const about = useMemo(() => ({
    title: t('about.title', "About Me"),
    description: t('about.description', "Passionate developer with 8+ years of experience building modern web applications. I love turning complex problems into simple, beautiful solutions."),
    experienceTitle: t('about.experience', "Experience"),
    educationTitle: t('about.education', "Education"),
    softSkillsTitle: t('about.softSkills', "Soft Skills")
  }), [t])

  const nav = useMemo(() => ([
    { label: t('nav.home', "Home"), href: "/" },
    { label: t('nav.services', "Services"), href: "/services" },
    { label: t('nav.work', "Work"), href: "/work" },
    { label: t('nav.blog', "Blog"), href: "/blog" },
    { label: t('nav.about', "About"), href: "/about" },
    { label: t('nav.contact', "Contact"), href: "/contact" },
  ]), [t])

  const featuredProjectsSection = useMemo(() => ({
    badge: t('featuredProjects.badge', "Selected Work"),
    titlePrefix: t('featuredProjects.titlePrefix', "Featured"),
    titleHighlight: t('featuredProjects.titleHighlight', "Projects"),
    description: t('featuredProjects.description', "A selection of my most recent and significant work, showcasing my expertise in building scalable web applications."),
    viewAll: t('featuredProjects.viewAll', "View All Projects")
  }), [t])

  const ctaSection = useMemo(() => ({
    badge: t('cta.badge', "Available for new opportunities"),
    titlePrefix: t('cta.titlePrefix', "Ready to launch your"),
    titleHighlight: t('cta.titleHighlight', "next big idea?"),
    description: t('cta.description', "Let's collaborate to build a digital experience that not only looks amazing but also drives real results for your business."),
    primaryButton: t('cta.primaryButton', "Start a Project"),
    secondaryButton: t('cta.secondaryButton', "View Portfolio")
  }), [t])

  const footer = useMemo(() => ({
    description: t('footer.description', "Full Stack Developer crafting beautiful digital experiences with modern technologies."),
    quickLinks: t('footer.quickLinks', "Quick Links"),
    services: t('footer.services', "Services"),
    builtWith: t('footer.builtWith', "Built with Next.js & Tailwind CSS."),
    privacy: t('footer.privacy', "Privacy Policy"),
    terms: t('footer.terms', "Terms of Service")
  }), [t])

  const skillsSection = useMemo(() => ({
    title: t('skills.title', "Skills & Expertise"),
    description: t('skills.description', "A comprehensive toolkit for building modern, scalable applications")
  }), [t])

  const mappedProjects = useMemo(() => {
    const projectsData = t('projects', { returnObjects: true, defaultValue: projects }) as typeof projects
    return projects.map((project, index) => ({
      ...project,
      description: projectsData[index]?.description || project.description
    }))
  }, [t])

  const mappedExperience = useMemo(() => {
    const experienceData = t('experience', { returnObjects: true, defaultValue: experience }) as typeof experience
    return experience.map((item, index) => ({
      ...item,
      description: experienceData[index]?.description || item.description
    }))
  }, [t])

  const mappedEducation = useMemo(() => {
    const educationData = t('education', { returnObjects: true, defaultValue: education }) as typeof education
    return education.map((item, index) => ({
      ...item,
      description: educationData[index]?.description || item.description
    }))
  }, [t])

  const common = useMemo(() => ({
    viewProject: t('common.viewProject', "View Project"),
    getStarted: t('common.getStarted', "Get Started"),
    whatsIncluded: t('common.whatsIncluded', "What's included"),
    whatsappChat: t('common.whatsappChat', "Chat on WhatsApp"),
    whatsappMessage: t('common.whatsappMessage', "Hi Alexis! I saw your portfolio and would like to chat.")
  }), [t])

  const workPage = useMemo(() => ({
    title: t('workPage.title', "Selected Work"),
    description: t('workPage.description', "A showcase of digital products engineered for performance, scalability, and user experience."),
    filters: {
      all: t('workPage.filters.all', "All Work"),
      fullstack: t('workPage.filters.fullstack', "Full Stack"),
      frontend: t('workPage.filters.frontend', "Frontend")
    },
    cta: {
      title: t('workPage.cta.title', "Have a vision?"),
      highlight: t('workPage.cta.highlight', "Let's engineer it."),
      description: t('workPage.cta.description', "From technical architecture to pixel-perfect implementation, I help companies build software that matters."),
      button: t('workPage.cta.button', "Start a Project")
    }
  }), [t])

  const servicesPage = useMemo(() => ({
    hero: {
      title: t('servicesPage.hero.title', "Professional Services"),
      description: t('servicesPage.hero.description', "Expert solutions tailored to your business needs. From rapid MVP development to enterprise-grade architecture, I deliver scalable and secure digital products.")
    },
    methodology: {
      title: t('servicesPage.methodology.title', "How I Work"),
      description: t('servicesPage.methodology.description', "My engineering approach is built on three pillars: performance, security, and scalability."),
      pillars: {
        cleanArch: {
          title: t('servicesPage.methodology.pillars.cleanArch.title', "Clean Architecture"),
          description: t('servicesPage.methodology.pillars.cleanArch.description', "Writing maintainable, self-documenting code that scales with your business needs and reduces technical debt.")
        },
        performance: {
          title: t('servicesPage.methodology.pillars.performance.title', "Performance First"),
          description: t('servicesPage.methodology.pillars.performance.description', "Optimizing for Core Web Vitals and user experience. Fast load times equal better conversion rates.")
        },
        security: {
          title: t('servicesPage.methodology.pillars.security.title', "Security by Design"),
          description: t('servicesPage.methodology.pillars.security.description', "Implementing industry-standard security protocols from day one to protect your data and users.")
        }
      }
    },
    cta: {
      title: t('servicesPage.cta.title', "Ready to transform your vision?"),
      description: t('servicesPage.cta.description', "Let's discuss your project requirements and build a strategy that works for your specific needs. No commitment required."),
      button: t('servicesPage.cta.button', "Start Project")
    }
  }), [t])

  const contactPage = useMemo(() => ({
    title: t('contactPage.title', "Let's Work Together"),
    description: t('contactPage.description', "Have a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities."),
    emailMe: t('contactPage.emailMe', "Email Me"),
    whatsappMe: t('contactPage.whatsappMe', "WhatsApp Me"),
    socialConnect: t('contactPage.socialConnect', "Or connect with me on social media")
  }), [t])

  const mappedSkills = useMemo(() => {
    return skills.map(category => {
      let title = category.title
      if (category.title === "Frontend") title = t('skills.categories.frontend', "Frontend")
      else if (category.title === "CMS & Platforms") title = t('skills.categories.cms', "CMS & Platforms")
      else if (category.title === "Performance") title = t('skills.categories.performance', "Performance")
      else if (category.title === "Tools & DevOps") title = t('skills.categories.tools', "Tools & DevOps")
      else if (category.title === "Design") title = t('skills.categories.design', "Design")
      else if (category.title === "Security") title = t('skills.categories.security', "Security")
      
      return { ...category, title }
    })
  }, [t])

  const certificationsPage = useMemo(() => ({
    titlePrefix: t('certificationsPage.titlePrefix', "Certifications &"),
    titleHighlight: t('certificationsPage.titleHighlight', "Education"),
    description: t('certificationsPage.description', "Continuous learning and professional development achievements"),
    issued: t('certificationsPage.issued', "Issued:"),
    id: t('certificationsPage.id', "ID:")
  }), [t])

  const privacyPage = useMemo(() => {
    const data = t('privacyPage', { returnObjects: true }) as any
    return {
      title: data.title || "Privacy Policy",
      description: data.description || "How I handle your data and privacy.",
      lastUpdated: data.lastUpdated || "Last Updated:",
      sections: data.sections || {}
    }
  }, [t])

  const termsPage = useMemo(() => {
    const data = t('termsPage', { returnObjects: true }) as any
    return {
      title: data.title || "Terms of Service",
      description: data.description || "Rules and regulations for using this website.",
      lastUpdated: data.lastUpdated || "Last Updated:",
      sections: data.sections || {}
    }
  }, [t])

  return {
    nav,
    hero,
    about,
    featuredProjectsSection,
    ctaSection,
    footer,
    skillsSection,
    common,
    workPage,
    servicesPage,
    contactPage,
    certificationsPage,
    privacyPage,
    termsPage,
    services,
    stats,
    skills: mappedSkills,
    softSkills,
    certifications,
    projects: mappedProjects,
    experience: mappedExperience,
    education: mappedEducation,
    contact,
    trustedBy
  }
}

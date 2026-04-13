export const PORTFOLIO_DATA = {
  navbar: {
    logo: "HUY",
    logoAccent: ".DEV",
    links: [
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" }
    ]
  },
  hero: {
    avatar: "/avatar.jpg",
    firstName: "Lý Vũ",
    lastName: "Quốc Huy",
    role: "Front-end Developer Intern at FPT University.",
    description: "Specializing in building modern, high-performance web experiences with React and Tailwind CSS.",
    ctaPrimary: {
      label: "Let's Collaborate",
      href: "#contact"
    },
    ctaSecondary: {
      label: "GitHub",
      href: "https://github.com/lyvuquoc112"
    },
    ctaTertiary: {
      label: "Download CV",
      href: "/CV_LyVuQuocHuy.pdf"
    }
  },
  about: {
    sectionTitle: "/about-me",
    description: "I am a 5th-semester Software Engineering student at FPT University. I am passionate about transforming lines of code into smooth, intuitive user interfaces. To me, programming is not just a job; it is a way to solve problems and contribute value to the community.",
    stats: [
      { value: "6.5", label: "IELTS Overall" },
      { value: "03", label: "Honor Awards" }
    ],
    educationTitle: "/education",
    honors: [
      { term: 'Spring 2025', title: 'Honorable Student' },
      { term: 'Summer 2025', title: 'Honorable Student' },
      { term: 'Fall 2025', title: 'Honorable Student' },
    ]
  },
  skills: {
    sectionTitle: "Technical Arsenal",
    items: [
      { name: 'React', level: '50%', category: 'Frontend' },
      { name: 'Tailwind CSS', level: '35%', category: 'Frontend' },
      { name: 'JavaScript (ES6+)', level: '50%', category: 'Language' },
      { name: 'Vite', level: '35%', category: 'Tools' },
      { name: 'Git/GitHub', level: '75%', category: 'Tools' },
    ]
  },
  projects: {
    sectionTitle: "/featured-projects",
    list: [
      {
        tag: "Next.js + TypeScript Project",
        title: "CycleX - E-commerce For Cycling",
        description: "A specialized e-commerce platform for bicycles. I was responsible for building the complete flow for Authentication, Product Listings, and the Seller Dashboard.",
        techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS'],
        githubUrl: "https://github.com/lyvuquoc112/CycleX.git",
        githubLabel: "View on GitHub",
        quote: "\"Successfully resolved REST API data mismatch challenges.\"",
        image: "/cyclex-preview.png"
      }
    ]
  },
  contact: {
    title: "Ready to start OJT?",
    description: "I am actively seeking an internship opportunity at professional tech companies. If you find my profile suitable, please don't hesitate to connect!",
    email: "lyvuquochuy123@gmail.com",
    phone: "0937090869"
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Lý Vũ Quốc Huy. Built with React & Tailwind CSS.`
  }
};

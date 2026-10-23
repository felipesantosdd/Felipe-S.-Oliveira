import type { Translation } from "./types";

export const en: Translation = {
  hero: {
    desc1: "Building scalable systems,",
    desc2: "robust applications and modern architecture for",
    desc3: "high-performance digital products.",
    contactLabel: "[ CONTACT ]",
    contactBtn: "START CONNECTION",
  },
  scramble: {
    nameLabel: "NAME // ",
    roleLabel: "ROLE // ",
    expLabel: "EXPERIENCE // ",
    expValue: "6 years",
    roles: ["Fullstack Developer", "Frontend Developer", "Backend Developer"],
  },
  tools: {
    label: "// TECHNOLOGY ARSENAL",
  },
  experience: {
    sectionTag: "// TRAJECTORY",
    sectionLabel: "EXPERIENCE",
    headingWhite: "Real processes,",
    headingRed: "scalable solutions",
    headerRight:
      "Full stack work focused on modern architecture, integrations, and continuous evolution of production applications.",
    entries: [
      {
        id: "01",
        period: "04/2026 – Present",
        role: "Senior Python Engineer, Systems Integration",
        description:
          "Real enterprise integration: connected SAP S/4HANA, Salesforce, Siebel, Oracle and Databricks using Python, FastAPI and Apache Kafka. In three months delivered around 20 integrations covering 47 backlog items across 7 repositories, including a family of 32 tables in a single merge request. Each delivery started from functional specification and data mapping, went through validation against DDL and real database, and ended with a published OpenAPI contract. 56 Kafka topics with Avro and Schema Registry, dead-letter queues and structured observability: a message that fails is retained for reprocessing, not silently discarded.",
      },
      {
        id: "02",
        period: "08/2024 – 04/2026",
        role: "Full Stack Engineer",
        description:
          "Second largest contributor to the Sphera frontend, the internal influencer marketing campaign platform: 461 out of 1,592 commits over 19 months using React.js, TypeScript and Next.js. Delivered influencer exclusivity end-to-end in Python and FastAPI, a SQLAlchemy hybrid property resolving conflicts between proposals, scenarios, campaigns, brands and clients. Created the campaign and influencer component sets used across all tabs, reducing the delivery of a new screen from three days to half a day.",
      },
      {
        id: "04",
        period: "02/2024 – 08/2024",
        role: "Full Stack Web Developer",
        description:
          "Intense experience in a real multi-stack environment: in six months I worked with React, Angular, Next.js, Node.js, Python and .NET — sometimes in the same sprint. Containerized services with Docker, optimized PostgreSQL queries, and participated in code reviews that genuinely shaped my view of architecture. Proximity to product and UX teams taught me to think about functionality before technology.",
      },
      {
        id: "05",
        period: "02/2022 – 02/2024",
        role: "Full Stack Web Developer",
        description:
          "Two years inside an active communication platform where every change affects real users in real time. I was responsible for integrations with external services, automation of the deploy and test pipeline, and implementation of security layers — robust authentication and sensitive data protection. I learned that in communication systems, stability is not a differentiator, it is a prerequisite.",
      },
      {
        id: "06",
        period: "04/2022 – 03/2023",
        role: "Web Development Instructor",
        description:
          "My turning point: beyond developing with Vue.js, Node.js and SQL, I taught. Helping other students forced me to truly understand the fundamentals — you can't explain what you don't understand. In parallel, I delivered real commercial automations with API integrations, and documented every solution with the care of someone who knows that code without context is lost code.",
      },
      {
        id: "07",
        period: "07/2020 – 12/2021",
        role: "Full Stack Web Developer",
        description:
          "Where it all started: I integrated commercial automation and corporate mobility services into a platform that needed to grow without breaking. I developed scripts that eliminated hours of manual work, implemented encryption and multi-factor authentication before that became mandatory in the market, and documented every technical decision — a habit I carry to this day.",
      },
    ],
  },
  projects: {
    sectionTag: "// SOLUTIONS",
    sectionLabel: "PROJECTS & CASES",
    headingWhite: "Projects in",
    headingRed: "production",
    headerRight:
      "Projects focused on modern architecture, system integration and high-performance digital experiences.",
    accessDenied: "[ ACCESS DENIED ]",
    confidentialSub: "// CONFIDENTIAL PROJECT",
    inDev: "// IN DEVELOPMENT",
    viewLive: "VIEW LIVE →",
    viewGithub: "VIEW ON GITHUB →",
    denied: "[ DENIED ]",
    confidentialCard: "CONFIDENTIAL PROJECT ×",
    public: [
      {
        id: "P.010",
        description:
          "Voice modding GUI for Monster Hunter World. Opens .nbnk/.bnk (Wwise SoundBank), maps action groups via HIRC hierarchy, extracts and replaces audio with automatic duration matching.",
      },
      {
        id: "P.001",
        description:
          "Full companion app for Monster Hunter World in PT-BR. Interactive ingredient tree, mission tracker with rank/type/objective filters, and weapon and armor forging tree.",
      },
      {
        id: "P.002",
        description:
          "Complete app for the Digimon Board Clash board game. D20 combat system, evolution with hidden XP, 466 Digimon registered, and an admin panel for 2 to 6 player matches.",
      },
      {
        id: "P.003",
        description:
          "Cross-platform desktop app for personal finance control. Transaction management by categories, expense and income reports with SQLite for 100% offline use.",
      },
      {
        id: "P.004",
        description:
          "Web tool for creating custom cards for the Resident Evil 3 board game. Canvas-based image generation, spec import, and automated deployment on Vercel.",
      },
      {
        id: "P.005",
        description:
          "Interactive guide and mission tracker for Divinity: Original Sin 2. Responsive dark UI with progress persisted locally via SQLite (sql.js), organized by act.",
      },
      {
        id: "P.006",
        description:
          "Digital catalog with an admin area restricted to the development environment. Exports a SQLite snapshot at build time to run as a static site in production with no API cost.",
      },
      {
        id: "P.008",
        description:
          "Institutional website in Next.js with internationalization support. Hero, projects, services, and contact sections with responsive design and translations managed via config files.",
      },
      {
        id: "P.009",
        description:
          "Fork of the Elden Ring boss tracker fully translated and adapted to PT-BR. Tracks bosses in real time via save file reading, OBS overlay, DLC Shadow of the Erdtree support, and Windows installer.",
      },
    ],
    confidential: [
      {
        id: "C.001",
        description:
          "Integration service between a proprietary commercial platform and external partner APIs. Async processing, HMAC signing, and bidirectional inventory sync. Project for a logistics sector company.",
      },
      {
        id: "C.002",
        description:
          "Authentication system for a multi-tenant SaaS with per-organization data isolation. JWT with refresh token rotation, granular permissions, and SSO support. Internal project for a B2B company.",
      },
      {
        id: "C.003",
        description:
          "Automation scripts for onboarding, reporting, and recurring operational flows. Integration with external APIs via webhooks, cron scheduling, and structured logs. Replaced manual team work at a corporate communications company.",
      },
      {
        id: "C.004",
        description:
          "Real-time metrics dashboard for monitoring field operations. Configurable KPIs, alerts, and report export. Used by management teams at a corporate mobility company.",
      },
      {
        id: "C.005",
        description:
          "B2B platform with dynamic catalog, order management, and integrated payment gateway. Multi-stock, customer-profile pricing, and admin panel. Client in the retail sector.",
      },
      {
        id: "C.006",
        description:
          "Real-time communication module integrated into the support platform. WebSockets with context-based rooms, persisted history, and push notifications. Critical component with thousands of active users.",
      },
      {
        id: "C.007",
        description:
          "Containerization of a multi-stack platform with isolated dev, staging, and production environments. CI/CD pipelines, health checks, and rollback automation. Built for the internal stack of a technology company.",
      },
      {
        id: "C.008",
        description:
          "CRM for a B2B company's commercial team with a customizable sales funnel, follow-up automation, email integration, and per-consultant performance reports. Internal use, not publicly available.",
      },
      {
        id: "C.009",
        description:
          "Influencer marketing platform with a Next.js admin panel and FastAPI backend. Campaign, proposal, contract, and brand management with complex flows. Deployed on Azure with Docker and CI/CD pipelines.",
      },
    ],
  },
  about: {
    sectionTag1: "// ABOUT THE DEVELOPER",
    headingWhite: "Technology with",
    headingRed: "strategic vision",
    headerRight:
      "Software engineer with over 6 years of experience in full stack development, specialized in modern applications, robust integrations, and scalable architecture.",
    cards: [
      {
        category: "// PROFILE",
        title: "Over 6 years building modern and scalable applications",
        desc: "Experience in full stack development focused on performance,\nmodern architecture and robust integrations.",
      },
      {
        category: "// SPECIALTIES",
        title: "React, Node.js, Python and modern ecosystems",
        desc: "Hands-on work with REST APIs, automations, componentization and\nscalability-driven development.",
      },
      {
        category: "// DIFFERENTIATOR",
        title: "Clean code, strategic vision and continuous growth",
        desc: "Close collaboration between product, design and engineering to\nbuild stronger digital experiences.",
      },
    ],
  },
  faq: {
    sectionTag: "// CONTACT",
    headingWhite: "Frequently",
    headingRed: "asked questions",
    headerRight:
      "Common questions about experience, stack, work style, and availability for new projects.",
    items: [
      {
        q: "Do you consider yourself Mid-level or Senior?",
        a: "I currently work between mid-level and senior, depending on the scope and responsibilities of the role. In general my work is closer to mid-level, but I have taken full ownership of projects, driving technical decisions, maintenance, and application evolution.",
      },
      {
        q: "Have you worked with Angular? On which projects?",
        a: "Yes. Part of my Angular experience came from software houses, where I worked on multiple projects simultaneously. Since those environments had diverse demands and different tech stacks, I chose to summarize some experiences in my résumé, highlighting the most relevant points.",
      },
      {
        q: "How do you use AI in your workflow?",
        a: "I currently use tools like ChatGPT, Cursor, Claude, Codex, and GitHub Copilot to support architecture, code review, refactoring, debugging, documentation, and productivity. I use AI as a development aid, always validating and adjusting solutions before implementation.",
      },
      {
        q: "What was your most challenging project?",
        a: "One of the most challenging was a campaign management platform with high data volume and complex business rules. The biggest challenge was balancing performance, user experience, and application maintainability, requiring optimizations across both the frontend and the system integrations.",
      },
      {
        q: "How does your development workflow look?",
        a: "I usually start by understanding the business rule and the task's impact on the product. Then I analyze the existing code, implement following the project's patterns, run tests, review the code, and follow through to the PR/deploy.",
      },
      {
        q: "How do you handle legacy code?",
        a: "I first try to understand context and impact before changing anything. I prefer to evolve gradually, reducing technical debt incrementally and avoiding large changes without necessity.",
      },
      {
        q: "How do you handle code review feedback?",
        a: "I see code review as an opportunity for improvement. I enjoy the technical exchange because it usually helps raise code quality and evolve the way I think about solutions.",
      },
      {
        q: "How did you learn so many technologies?",
        a: "Much of it came from working in software houses, where different projects required varied stacks. That gave me a lot of adaptability and the ability to pick up new technologies quickly.",
      },
      {
        q: "What is your English level?",
        a: "I have advanced English for reading, writing, and communication in professional environments. I can participate in technical meetings, understand documentation, and interact in international contexts.",
      },
      {
        q: "Why should we hire you?",
        a: "Beyond technical experience, I like to understand the product context and think about the real impact of solutions. I try to combine technical quality, collaboration, and a focus on solving problems in a simple and sustainable way.",
      },
    ],
  },
  cta: {
    tagLeft: "// READY TO SCALE",
    line1: "TECHNOLOGY WITH",
    line2: "STRUCTURE,",
    line3: "PERFORMANCE",
    line4: "AND SCALABILITY.",
    desc: "Modern projects demand solid architecture, clean code, and smart decisions from the ground up.",
    btn: "GET IN TOUCH →",
  },
  footer: {
    tags: ["Full Stack Development", "Modern Architecture", "Integrations & Automation"],
    servicesLabel: "// SERVICES",
    services: ["Tools", "Projects", "Experiences", "FAQ", "Contact"],
    contactLabel: "// CONTACT",
    contactMe: "Contact me",
    copyright: "© 2025 Crimsom Mind Tech – All rights reserved",
  },
  nav: {
    items: [
      { label: "Tools",      href: "#ferramentas" },
      { label: "Projects",   href: "#projetos" },
      { label: "Experience", href: "#experiencia" },
      { label: "About",      href: "#sobre" },
      { label: "FAQ",        href: "#faq" },
    ],
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
};

export const profile = {
  name: "Reno Anthus",
  fullName: "Reno Anthus, S.Kom.",
  role: "Full Stack Web Developer",
  secondaryRole: "Backend Engineer",
  location: "Pontianak, West Kalimantan, Indonesia",
  email: "renoanthus@gmail.com",
  phone: "+62 895-2990-2699",
  whatsapp: "https://wa.me/6289529902699",
  github: "https://github.com/renoanthus",
  linkedin: "https://www.linkedin.com/in/renoanthus/",
  site: "https://renoanthus.github.io",
  resume: "/Reno-Anthus-CV.pdf",
  heroHeadline: "I build the web systems institutions run on.",
  heroLead:
    "Data models, APIs, backend logic, and the UI on top. Owned end to end and shipped to production since 2017.",
  summary: [
    "Full Stack Web and Backend Engineer with an Information Systems background and production experience building institutional web systems: healthcare LIS and HRIS, APIs, GIS and document platforms, e-commerce, and operations tools.",
    "I turn requirements into data models, APIs, backend logic, UI integration, testing, deployment, and handover. I am comfortable owning features end to end, from schema to API to UI to production, with Laravel/PHP, Node.js, Go, SQL databases, and Linux/cloud hosting.",
    "Working style: analytical and independent (INTP-A). I dig into system logic, challenge fuzzy requirements early, and prefer clear, well-structured solutions over rushed patches.",
  ],
  facts: [
    { value: "2017", label: "Shipping production software since" },
    { value: "115+", label: "Repositories across client domains" },
    { value: "3", label: "Software companies, full-cycle delivery" },
  ],
  skills: [
    {
      group: "Languages",
      items: ["PHP", "JavaScript", "TypeScript", "SQL", "Go"],
    },
    {
      group: "Backend",
      items: ["Laravel", "Node.js", "Express.js", "REST APIs"],
    },
    {
      group: "Frontend",
      items: ["jQuery", "Bootstrap", "Responsive web UI"],
    },
    {
      group: "Databases",
      items: ["MySQL / MariaDB", "PostgreSQL"],
    },
    {
      group: "Infra and tools",
      items: [
        "Linux",
        "Apache",
        "Git",
        "GCP",
        "AWS",
        "Figma",
        "Visual Paradigm",
      ],
    },
    {
      group: "Practices",
      items: [
        "Requirements analysis",
        "Database and system design",
        "UAT",
        "Deployment",
        "Documentation",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Information Systems",
    school: "Universitas Tanjungpura",
    period: "2014 - 2019",
    detail: "GPA 3.64 / 4.00, Pontianak",
  },
  certifications: [
    {
      name: "Digital Talent Scholarship: Cloud Computing",
      issuer: "Dicoding Indonesia",
      detail: "Credential ID 4EXGY9Y81XRL, issued Oct 2020",
    },
  ],
  awards: [
    "3rd Place, Information Security Application Competition, West Kalimantan Province",
    "4th Place, Pontianak City Startup Competition",
  ],
  languages: [
    { name: "Indonesian", level: "Professional" },
    { name: "English", level: "Professional working, technical documentation" },
  ],
  organizations: [
    { role: "INFOKOM Staff", org: "HIMASTER", period: "2015 - 2016" },
    { role: "Head of KOMINFO Division", org: "HMSI", period: "2017 - 2018" },
  ],
} as const

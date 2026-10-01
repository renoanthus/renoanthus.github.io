export interface Experience {
  company: string
  role: string
  period: string
  location: string
  current?: boolean
  points: string[]
}

export const experience: Experience[] = [
  {
    company: "CV. Rusabyte Indonesia",
    role: "Full Stack Web Developer",
    period: "Jul 2023 - Present",
    location: "Pontianak, West Kalimantan",
    current: true,
    points: [
      "Own full-cycle delivery of institutional web products (healthcare LIS/HRIS, dashboards, operational systems): requirements, data modeling, API and backend modules, UI integration, UAT, deployment, and handover.",
      "Design database schemas and module boundaries, implement REST and backend logic, and coordinate sprint priorities, stakeholder demos, and production releases.",
      "Improve reliability of client workflows through validation rules, role-based access, reporting modules, and documented runbooks for operators.",
      "Work with clients and teammates on scope control, technical trade-offs, and post-release support.",
    ],
  },
  {
    company: "Zethlabs Indonesia",
    role: "Full Stack Web Developer",
    period: "2019 - Jun 2023",
    location: "Pontianak, West Kalimantan",
    points: [
      "Delivered web applications and supporting mobile clients from analysis and system design through implementation, testing, and production deployment.",
      "Set up and maintained server, domain, and hosting environments so applications were production-ready, including basic ops hardening and release support.",
      "Worked directly with clients on scope, priorities, timelines, and acceptance criteria across multiple concurrent projects.",
      "Built reusable patterns for CRUD modules, authentication and roles, reporting, and integrations used across client engagements.",
    ],
  },
  {
    company: "CV. Idekite Indonesia",
    role: "Senior Software Engineer",
    period: "Oct 2017 - Apr 2021",
    location: "Pontianak, West Kalimantan",
    points: [
      "Led requirements analysis for private clients, government institutions, and related organizations, translating ambiguous needs into implementable specs.",
      "Designed databases, program flows, frontend and backend structure, and technical documentation before and during build.",
      "Guided implementation quality through coding guidance, testing and validation, project communication, and structured application handover.",
      "Balanced multi-stakeholder delivery: clarifying scope, estimating effort, and keeping documentation usable for operators after go-live.",
    ],
  },
]

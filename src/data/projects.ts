import type { ImageMetadata } from "astro"

import absenMenara from "../assets/projects/absen-menara.png"
import alMumtaz from "../assets/projects/al-mumtaz.png"
import bpkadKetapang from "../assets/projects/bpkad-ketapang.png"
import desakite from "../assets/projects/desakite.png"
import dishubLandak from "../assets/projects/dishub-landak.png"
import diskominfoLandak from "../assets/projects/diskominfo-landak.png"
import eHibah from "../assets/projects/e-hibah.png"
import eSurat from "../assets/projects/e-surat.png"
import gisTanjungpinang from "../assets/projects/gis-tanjungpinang.png"
import heduparts from "../assets/projects/heduparts.png"
import kopbun from "../assets/projects/kopbun.png"
import reddplus from "../assets/projects/reddplus.png"
import rimba from "../assets/projects/rimba.png"
import siabang from "../assets/projects/siabang.png"
import silakan from "../assets/projects/silakan.png"
import waroengkite from "../assets/projects/waroengkite.png"

export const domains = [
  "Healthcare",
  "Government",
  "Finance",
  "Commerce",
  "Operations",
  "GIS & Environment",
  "API & Integration",
] as const

export type Domain = (typeof domains)[number]

export interface Project {
  slug: string
  title: string
  subtitle: string
  domain: Domain
  summary: string
  highlight?: string
  stack?: string[]
  image?: ImageMetadata
  url?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "sehatlink",
    title: "Sehatlink / Patologi Anatomi",
    subtitle: "Laboratory Information System, RSUD dr. Soedarso",
    domain: "Healthcare",
    summary:
      "LIS for anatomical pathology covering examination dashboards, patient request entry, patient records, examination validation, result reading and printing, medical history, reporting, and audit logs.",
    highlight:
      "Supports the full lab workflow from intake to validation to result release, with role-based access for lab staff and traceability across modules.",
    featured: true,
  },
  {
    slug: "mysoedarso",
    title: "mySoedarso / Penilaian Kinerja",
    subtitle: "Hospital HRIS, RSUD Soedarso",
    domain: "Healthcare",
    summary:
      "Hospital HRIS spanning employee master data, leave and study permits, attendance, documents, data-change requests, remuneration, recruitment, and e-performance.",
    highlight:
      "Workforce dashboards and multi-step approval flows let HR and unit heads monitor and authorize processes digitally.",
    featured: true,
  },
  {
    slug: "api-wa-kanim-sanggau",
    title: "API WA Kanim Sanggau",
    subtitle: "WhatsApp integration API",
    domain: "API & Integration",
    summary:
      "Backend messaging API that connects institutional workflows to WhatsApp: send and receive patterns, templates and events, and delivery handling.",
    highlight:
      "Built for an immigration office where staff need reliable outbound notifications and inbound handling without manual chat operations.",
    featured: true,
  },
  {
    slug: "robotopo-partner-backend",
    title: "Robotopo Partner Backend",
    subtitle: "Partner API and services",
    domain: "API & Integration",
    summary:
      "Partner-facing backend services for marketplace integrations: auth and partner endpoints, transactional APIs, and data sync with partner systems.",
    highlight:
      "Focus on stable API contracts and server-side business rules rather than UI.",
    featured: true,
  },
  {
    slug: "reddplus-kalbar",
    title: "REDDPLUS Kalbar",
    subtitle: "GIS and environmental document system",
    domain: "GIS & Environment",
    summary:
      "Document and spatial-information system for REDD+ West Kalimantan: SRAP and FREL materials, carbon-stock guidelines, emission-reduction strategies, and target documents.",
    highlight:
      "Combines structured document management with GIS-oriented information needs for environmental planning stakeholders.",
    stack: ["Laravel", "MySQL", "jQuery", "Google Maps API"],
    image: reddplus,
    url: "http://reddplus.kalbarprov.go.id/",
    featured: true,
  },
  {
    slug: "rimba",
    title: "RIMBA",
    subtitle: "Ratu Intan mining operations app",
    domain: "Operations",
    summary:
      "Operations management for a mining business: payroll, tonnage recording, inventory and stock, and attendance.",
    highlight:
      "Centralizes daily operational data so payroll and stock movements stay documented and easier to audit.",
    stack: ["Laravel", "MySQL", "jQuery"],
    image: rimba,
    featured: true,
  },
  {
    slug: "mikrolab",
    title: "Mikrolab",
    subtitle: "Laboratory and microbiology web application",
    domain: "Healthcare",
    summary:
      "Web app for microbiology lab operations: structured exam requests, sample and status tracking, result entry, and operational reporting.",
    highlight:
      "Backend workflow control (status transitions, master data, user roles) keeps lab processes consistent day to day.",
  },
  {
    slug: "rusahub",
    title: "RusaHub",
    subtitle: "TypeScript web platform",
    domain: "API & Integration",
    summary:
      "TypeScript platform modules for Rusabyte ecosystem services: API and UI integration, shared components, and product workflows.",
    highlight:
      "Typed backend and frontend boundaries with a maintainable module structure for ongoing product iteration.",
    stack: ["TypeScript"],
  },
  {
    slug: "7starfinance",
    title: "7StarFinance",
    subtitle: "Finance web application",
    domain: "Finance",
    summary:
      "Finance operations web app: client and account handling, transaction flows, reporting, and admin configuration for finance staff.",
    highlight:
      "Backend modules enforce business rules around financial records, roles, and operational reporting.",
  },
  {
    slug: "wa-7starfinance",
    title: "WA 7StarFinance",
    subtitle: "WhatsApp service layer",
    domain: "Finance",
    summary:
      "WhatsApp service layer paired with 7StarFinance for automated notifications, customer messaging hooks, and ops alerts.",
    highlight:
      "Separates messaging concerns from core finance modules through API and service integration.",
  },
  {
    slug: "heduparts",
    title: "HEDUPARTS",
    subtitle: "Spare parts e-commerce",
    domain: "Commerce",
    summary:
      "Marketplace-style e-commerce for spare parts: catalog, seller and buyer matching, search, cart and order flow, and inventory needs.",
    highlight:
      "Covers the transaction path from product discovery to purchase handling.",
    stack: ["Laravel", "MySQL", "jQuery", "Google Maps API"],
    image: heduparts,
    url: "https://heduparts.com/",
  },
  {
    slug: "desabira",
    title: "DesaBira",
    subtitle: "Village information system",
    domain: "Government",
    summary:
      "Village digital services: citizen data, public service requests, official document generation, facility records, and complaint handling.",
    highlight:
      "Helps village staff digitize administration and gives residents clearer service channels.",
  },
  {
    slug: "si-desa",
    title: "SI Desa",
    subtitle: "Village data and public services",
    domain: "Government",
    summary:
      "Village information and data management with citizen-facing service modules and administrative records.",
    highlight:
      "Supports village operators managing master data and day-to-day service transactions.",
  },
  {
    slug: "e-office",
    title: "E-Office",
    subtitle: "Institutional office automation",
    domain: "Government",
    summary:
      "E-office for institutional correspondence and internal processes: document routing, status tracking, and office administration modules.",
    highlight:
      "Replaces paper-heavy handoffs with digital submission, approval, and archive flows.",
  },
  {
    slug: "api-e-surat",
    title: "API E-Surat",
    subtitle: "Correspondence backend API",
    domain: "API & Integration",
    summary:
      "API layer for electronic correspondence: letter metadata, status updates, integration with the E-Surat application, and client endpoints.",
    highlight:
      "Lets mobile and web clients create and track letters through one consistent backend contract.",
  },
  {
    slug: "e-surat",
    title: "E-Surat",
    subtitle: "Electronic correspondence system",
    domain: "Government",
    summary:
      "Full e-correspondence application: compose and register letters, disposition and routing, status history, and archive views. Also delivered for PTPN XIII.",
    highlight:
      "Works with the API layer so institutional letter workflows stay synchronized across clients.",
    stack: ["CodeIgniter", "MySQL", "jQuery"],
    image: eSurat,
  },
  {
    slug: "bizora-pos",
    title: "Bizora POS",
    subtitle: "Point of sale system",
    domain: "Commerce",
    summary:
      "POS web system for retail: product catalog, sales transactions, cashier flows, stock movement, and sales reporting.",
    highlight:
      "Backend keeps pricing, stock, and transactions consistent during peak cashier use.",
  },
  {
    slug: "venetian",
    title: "Venetian",
    subtitle: "Web app and admin console",
    domain: "Commerce",
    summary:
      "Customer-facing web application with a separate admin console for content and ops management, master data, and monitoring.",
    highlight:
      "Split architecture between the public web experience and admin tooling for daily operators.",
  },
  {
    slug: "telemedicine",
    title: "Telemedicine",
    subtitle: "Remote healthcare web app",
    domain: "Healthcare",
    summary:
      "Telemedicine web flows for remote care: patient and provider interaction, consultation support, and clinical operations screens.",
    highlight:
      "Digitizes remote healthcare touchpoints beyond a simple brochure site.",
  },
  {
    slug: "gis-umkm",
    title: "GIS UMKM",
    subtitle: "Spatial business mapping",
    domain: "GIS & Environment",
    summary:
      "GIS web app to map and manage UMKM (small business) locations on spatial layers, with search, filters, and admin data maintenance.",
    highlight:
      "Helps local economic stakeholders see business distribution geographically.",
  },
  {
    slug: "desakite",
    title: "DESAKITE",
    subtitle: "Village data management",
    domain: "Government",
    summary:
      "Village data management with public services such as letter generation, facility data management, and a public complaint service.",
    stack: ["Laravel", "PostgreSQL", "jQuery", "Google Maps API"],
    image: desakite,
    url: "https://desakite.idekite.id/",
  },
  {
    slug: "siabang",
    title: "SIABANG",
    subtitle: "Digital asset management, BPKAD Ketapang",
    domain: "Government",
    summary:
      "Records and visualizes regional land and building assets: owner, area, coordinates, land status, acquisition year, price, and certificate data, with photos and Google Maps plotting.",
    stack: ["Laravel", "MySQL", "jQuery", "Google Maps API"],
    image: siabang,
    url: "http://siabang.bpkadketapang.id/",
  },
  {
    slug: "silakan",
    title: "SILAKAN",
    subtitle: "Budget submission system, BPKAD Ketapang",
    domain: "Government",
    summary:
      "Lets regional agencies submit budget proposals to the finance and asset agency online, with stored records and automatic status notifications.",
    stack: ["Laravel", "MySQL", "jQuery"],
    image: silakan,
  },
  {
    slug: "e-hibah",
    title: "E-Hibah",
    subtitle: "Grants and social aid platform, Ketapang",
    domain: "Government",
    summary:
      "Online platform where citizens and organizations submit grant and social aid proposals and follow their distribution transparently.",
    stack: ["Laravel", "MySQL", "jQuery"],
    image: eHibah,
    url: "http://e-hibah.bpkadketapang.id/",
  },
  {
    slug: "bpkad-ketapang",
    title: "BPKAD Ketapang",
    subtitle: "Official agency website",
    domain: "Government",
    summary:
      "Main website of the Regional Finance and Asset Management Agency of Ketapang Regency.",
    stack: ["Laravel", "MySQL", "jQuery"],
    image: bpkadKetapang,
    url: "https://bpkadketapang.id/",
  },
  {
    slug: "diskominfo-landak",
    title: "Diskominfo Landak",
    subtitle: "Official agency website and licensing",
    domain: "Government",
    summary:
      "Official site of the Communication and Informatics Office of Landak Regency, including online licensing services for residents.",
    stack: ["PHP", "MySQL", "jQuery"],
    image: diskominfoLandak,
  },
  {
    slug: "dishub-landak",
    title: "Dishub Landak",
    subtitle: "Official agency website and licensing",
    domain: "Government",
    summary:
      "Official site of the Transportation Office of Landak Regency, providing transportation licensing services online.",
    stack: ["PHP", "MySQL", "jQuery"],
    image: dishubLandak,
  },
  {
    slug: "gis-tanjungpinang",
    title: "GIS Tanjungpinang",
    subtitle: "Spatial pattern mapping",
    domain: "GIS & Environment",
    summary:
      "Geographic information system mapping the spatial pattern of Tanjungpinang City, Riau Islands.",
    stack: ["PHP", "MySQL", "jQuery", "Google Maps API"],
    image: gisTanjungpinang,
  },
  {
    slug: "kopbun",
    title: "Koperasi Perkebunan",
    subtitle: "Plantation cooperative system",
    domain: "Finance",
    summary:
      "Information system for a palm oil cooperative: profit sharing based on each member's land area, plus savings and loans.",
    stack: ["Laravel", "MySQL", "jQuery"],
    image: kopbun,
    url: "http://kopbun.idekite.id/",
  },
  {
    slug: "waroengkite",
    title: "Waroengkite",
    subtitle: "Local UMKM marketplace",
    domain: "Commerce",
    summary:
      "Commission-free marketplace connecting buyers with small and medium businesses in Pontianak.",
    stack: ["Laravel", "MySQL", "jQuery"],
    image: waroengkite,
    url: "https://waroengkite.id/",
  },
  {
    slug: "absen-menara",
    title: "Absen Menara Computer",
    subtitle: "Attendance and payroll",
    domain: "Operations",
    summary:
      "Employee attendance, payroll, and point system for Menara Computer Pontianak.",
    stack: ["Laravel", "MySQL", "jQuery", "Bootstrap"],
    image: absenMenara,
  },
  {
    slug: "al-mumtaz",
    title: "Al-Mumtaz LMS",
    subtitle: "School learning management system",
    domain: "Operations",
    summary: "Learning management system for SMA Al-Mumtaz high school.",
    stack: ["Laravel", "MySQL", "jQuery"],
    image: alMumtaz,
    url: "http://mumtaz.zethlabs.id/",
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

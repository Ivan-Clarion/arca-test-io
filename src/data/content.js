/**
 * Central content source for the landing page.
 * Keeping copy + data here keeps the section components presentational
 * and easy to restyle without touching content.
 */

import {
  ShieldAlert,
  Clock,
  FileSearch,
  TrendingUp,
  FolderTree,
  Sparkles,
  Upload,
  ScanLine,
  ListChecks,
} from "lucide-react";

export const nav = {
  links: [
    { label: "Features", href: "/#features" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Insights", href: "/#insights" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ],
};

export const hero = {
  eyebrow: "Document intelligence for busy teams",
  title: "Surface what matters in every document.",
  subtitle:
    "Tester.io reads every file across your Finance, HR, IT, Projects, and Sales folders — then surfaces the risks, deadlines, and decisions buried inside before they cost you.",
  primaryCta: "Get Started",
  secondaryCta: "Learn More",
  stats: [
    { value: "5", label: "Departments scanned" },
    { value: "100%", label: "Files read, not skimmed" },
    { value: "Seconds", label: "From upload to insight" },
  ],
};

/**
 * Feature tiles arranged as a bento grid.
 *  - `span`   : Tailwind grid-span classes (applied on lg+)
 *  - `visual` : id resolved to a visual component in FeatureVisuals.jsx
 * Order matters — it defines how tiles pack into the 4-column grid.
 */
export const features = [
  {
    id: "reading",
    icon: FileSearch,
    title: "Deep document reading",
    description:
      "Every spreadsheet, memo, and policy is read in full — not just file names. Tester.io understands the contents.",
    span: "lg:col-span-2 lg:row-span-2",
    visual: "scan",
  },
  {
    id: "risk",
    icon: ShieldAlert,
    title: "Risk detection",
    description:
      "Expired licenses, unprotected endpoints, and confidential data exposure are flagged the moment they appear.",
    span: "lg:col-span-2",
    visual: "risk",
  },
  {
    id: "deadline",
    icon: Clock,
    title: "Deadline tracking",
    description:
      "Overdue roles and stalled milestones surface automatically — nothing slips through.",
    span: "lg:col-span-1",
  },
  {
    id: "finance",
    icon: TrendingUp,
    title: "Financial visibility",
    description:
      "Budget overruns and cost spikes, summarized across quarters.",
    span: "lg:col-span-1",
    visual: "bars",
  },
  {
    id: "folders",
    icon: FolderTree,
    title: "Folder-aware",
    description:
      "Point Tester.io at a folder tree and it maps every department automatically.",
    span: "lg:col-span-2",
    visual: "folders",
  },
  {
    id: "decisions",
    icon: Sparkles,
    title: "Decision intelligence",
    description:
      "Approvals with no recorded decision and ownerless action items are caught and routed to the right people.",
    span: "lg:col-span-2",
  },
];

export const howItWorks = [
  {
    icon: Upload,
    step: "01",
    title: "Connect your folders",
    description:
      "Drop in a folder tree or connect your drive. Tester.io maps every department automatically.",
  },
  {
    icon: ScanLine,
    step: "02",
    title: "We read everything",
    description:
      "Each document is read end to end. Numbers, dates, owners, and statuses are extracted and cross-checked.",
  },
  {
    icon: ListChecks,
    step: "03",
    title: "Act on what matters",
    description:
      "Get a prioritized list of risks, deadlines, and decisions — ready to assign and resolve.",
  },
];

/**
 * Real signals pulled from a sample "Acme" folder scan.
 * Used to demonstrate the kind of catching insights Tester.io surfaces.
 */
const UNSPLASH = "https://images.unsplash.com";
const cropParams = "?auto=format&fit=crop&w=1200&q=80";

export const insights = [
  {
    id: "endpoints",
    tag: "IT · Critical",
    tone: "danger",
    title: "100 endpoints unprotected",
    detail:
      "Kaspersky license expired Nov 2024 — every company laptop is currently running without protection.",
    image: `${UNSPLASH}/photo-1518770660439-4636190af475${cropParams}`,
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: "hiring",
    tag: "HR · Overdue",
    tone: "warning",
    title: "Data Analyst role open 92 days",
    detail:
      "JR-008 has sat open far past target. A second critical role (JR-004) is 78 days open.",
    image: `${UNSPLASH}/photo-1521737604893-d14cc237f11d${cropParams}`,
    span: "lg:col-span-2",
  },
  {
    id: "board",
    tag: "Projects · High risk",
    tone: "danger",
    title: "Board approval with no decision",
    detail:
      "ERP Phase 2 board approval (Feb 15) passed with no decision recorded — a PHP 3.5M project is in limbo.",
    image: `${UNSPLASH}/photo-1517048676732-d65bc937f952${cropParams}`,
    span: "lg:col-span-1",
  },
  {
    id: "aws",
    tag: "Finance · Cost spike",
    tone: "warning",
    title: "AWS bill up 178% in December",
    detail:
      "ERP kickoff pushed the December AWS bill to PHP 89,000 vs. a PHP 32,000 monthly average.",
    image: `${UNSPLASH}/photo-1451187580459-43490279c0fa${cropParams}`,
    span: "lg:col-span-1",
  },
  {
    id: "quota",
    tag: "Sales · At risk",
    tone: "warning",
    title: "Quota at 21% with deals stalling",
    detail:
      "Only PHP 3.2M of a PHP 15M Q1 quota closed. The largest deal (PHP 6.5M) needs exec involvement now.",
    image: `${UNSPLASH}/photo-1460925895917-afdab827c52f${cropParams}`,
    span: "lg:col-span-2",
  },
  {
    id: "revenue",
    tag: "Finance · On track",
    tone: "good",
    title: "FY2024 revenue beat target by 4.3%",
    detail:
      "PHP 48.2M against a PHP 46.2M target, led by a record Q4 at 117.5% attainment.",
    image: `${UNSPLASH}/photo-1551288049-bebda4e38f71${cropParams}`,
    span: "lg:col-span-2",
  },
];

export const pricing = {
  eyebrow: "Pricing",
  title: "Plans that scale with your folders.",
  subtitle:
    "Start free on a single folder. Upgrade when your whole company is ready to see what's buried.",
  plans: [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      blurb: "For trying Tester.io on a single team folder.",
      features: [
        "1 connected folder",
        "Up to 100 documents",
        "Weekly scans",
        "Email insight summary",
      ],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Team",
      price: "$49",
      period: "per month",
      blurb: "For growing teams that need daily visibility across departments.",
      features: [
        "Up to 25 connected folders",
        "Unlimited documents",
        "Daily scans",
        "Risk & deadline alerts",
        "10 team seats",
      ],
      cta: "Start free trial",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "let's talk",
      blurb: "For organizations with compliance, scale, and security needs.",
      features: [
        "Unlimited folders & seats",
        "Hourly scans",
        "SSO & audit logs",
        "On-premise deployment",
        "Dedicated success manager",
      ],
      cta: "Contact sales",
      featured: false,
    },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  title: "Questions, answered.",
  subtitle:
    "Everything you need to know about how Tester.io reads, secures, and surfaces your documents.",
  items: [
    {
      q: "What file types can Tester.io read?",
      a: "Tester.io reads common business formats end to end — Word documents (.docx), Excel spreadsheets (.xlsx), PDFs, and plain text. It understands tables, dates, owners, and statuses, not just file names.",
    },
    {
      q: "How does Tester.io keep our documents secure?",
      a: "Your files are encrypted in transit and at rest. Confidential and restricted documents are handled on a need-to-know basis, and every access is recorded in an audit log on Team and Enterprise plans.",
    },
    {
      q: "Do I need to move my files to use it?",
      a: "No. Point Tester.io at an existing folder tree or connect your drive — it maps every department in place. Nothing is moved or restructured.",
    },
    {
      q: "How quickly will I see insights?",
      a: "The first scan typically surfaces risks, deadlines, and decisions within seconds of connecting a folder. After that, scans run on your plan's schedule — weekly, daily, or hourly.",
    },
    {
      q: "Can I try it before paying?",
      a: "Yes. The Starter plan is free forever on a single folder of up to 100 documents, and the Team plan includes a free trial. No card required to start.",
    },
  ],
};

export const cta = {
  title: "Stop reading folders. Start seeing risks.",
  subtitle:
    "Connect your first folder and let Tester.io surface what your team has been missing.",
  primaryCta: "Get Started",
  secondaryCta: "Learn More",
  // Accent tiles that sit alongside the main CTA in the bento layout.
  highlights: [
    {
      icon: ShieldAlert,
      stat: "Instant",
      label: "Risks flagged the moment they appear",
    },
    {
      icon: Clock,
      stat: "0 missed",
      label: "Deadlines surfaced automatically",
    },
    {
      icon: FolderTree,
      stat: "5 depts",
      label: "Mapped from a single folder scan",
    },
  ],
};

export const footer = {
  tagline: "Document intelligence that reads every word, so you don't have to.",
  columns: [
    {
      heading: "Product",
      links: [
        { label: "Features", href: "/#features" },
        { label: "How it works", href: "/#how-it-works" },
        { label: "Insights", href: "/#insights" },
        { label: "Pricing", href: "/#pricing" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Security", href: "/security" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Documentation", href: "/documentation" },
        { label: "Guides", href: "/guides" },
        { label: "Support", href: "/support" },
        { label: "Status", href: "/status" },
      ],
    },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

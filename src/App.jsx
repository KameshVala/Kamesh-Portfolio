import React, { useState, useMemo } from 'react';
import {
  Code2,
  Terminal,
  Cpu,
  Globe,
  Database,
  Server,
  Layers,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Zap,
  Copy,
  Check,
  Menu,
  X,
  ArrowUpRight,
  Bot,
  Workflow,
  ShieldCheck,
  LayoutGrid,
  Send,
  Building2,
  Calendar,
  Star,
  FileText,
  Cloud,
  Wrench,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');
  const [activeProjectCategory, setActiveProjectCategory] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const email = 'kamesh.v@indianic.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // --- DATA EXTRACTED DIRECTLY FROM RESUME ---

  const metrics = [
    {
      label: 'Years Experience',
      value: '7+',
      subtext: 'Web & Systems Dev',
      icon: Briefcase,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      label: 'Projects Delivered',
      value: '12+',
      subtext: 'Enterprise & Startups',
      icon: CheckCircle2,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      label: 'Academic Record',
      value: '10.00',
      subtext: 'Perfect MCA SPI',
      icon: Award,
      color: 'from-purple-500 to-pink-500',
    },
    {
      label: 'Core Expertise',
      value: 'Full-Stack',
      subtext: 'Node, React, AI & PHP',
      icon: Cpu,
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  const skillCategories = [
    'All',
    'Frontend',
    'Backend',
    'Architecture & DB',
    'AI & Automation',
    'DevOps & Tools',
  ];

  const skillsData = [
    // Frontend
    { name: 'React.js / Next.js', category: 'Frontend', level: 'Expert', icon: Code2 },
    { name: 'JavaScript (ES6+) / TypeScript', category: 'Frontend', level: 'Expert', icon: Code2 },
    { name: 'Vue.js / Nuxt.js', category: 'Frontend', level: 'Advanced', icon: Globe },
    { name: 'Tailwind CSS / Bootstrap', category: 'Frontend', level: 'Expert', icon: LayoutGrid },
    { name: 'React Query / Redux', category: 'Frontend', level: 'Advanced', icon: Zap },
    { name: 'HTML5 / CSS3 / jQuery', category: 'Frontend', level: 'Expert', icon: Globe },
    { name: 'Lucide Icons / UI Design', category: 'Frontend', level: 'Advanced', icon: Sparkles },

    // Backend
    { name: 'Node.js / Express', category: 'Backend', level: 'Expert', icon: Server },
    { name: 'NestJS', category: 'Backend', level: 'Advanced', icon: Server },
    { name: 'PHP / Laravel / Lumen', category: 'Backend', level: 'Expert', icon: Terminal },
    { name: 'Symfony', category: 'Backend', level: 'Advanced', icon: Terminal },
    { name: 'RESTful APIs & Webhooks', category: 'Backend', level: 'Expert', icon: Workflow },

    // Architecture & DB
    { name: 'Microservices Architecture', category: 'Architecture & DB', level: 'Expert', icon: Layers },
    { name: 'Multi-tenant Architecture', category: 'Architecture & DB', level: 'Expert', icon: Building2 },
    { name: 'Event-driven Processing', category: 'Architecture & DB', level: 'Advanced', icon: Zap },
    { name: 'Monorepo (Turborepo/pnpm)', category: 'Architecture & DB', level: 'Advanced', icon: ShieldCheck },
    { name: 'PostgreSQL / MySQL', category: 'Architecture & DB', level: 'Expert', icon: Database },
    { name: 'MongoDB / Redis / SQLite', category: 'Architecture & DB', level: 'Advanced', icon: Database },
    { name: 'Prisma ORM', category: 'Architecture & DB', level: 'Advanced', icon: Database },

    // AI & Automation
    { name: 'OpenAI APIs & AI Agents', category: 'AI & Automation', level: 'Advanced', icon: Bot },
    { name: 'Vector Databases & Embeddings', category: 'AI & Automation', level: 'Advanced', icon: Database },
    { name: 'Prompt Engineering & Search', category: 'AI & Automation', level: 'Advanced', icon: Sparkles },
    { name: 'Scalable AI Integration Patterns', category: 'AI & Automation', level: 'Advanced', icon: Cpu },
    { name: 'Antigravity / Claude / Cursor / Codex', category: 'AI & Automation', level: 'Expert', icon: Bot },
    { name: 'Python Scripts & Scraping', category: 'AI & Automation', level: 'Advanced', icon: Terminal },

    // DevOps & Tools
    { name: 'Git / GitHub / Monorepos', category: 'DevOps & Tools', level: 'Expert', icon: Github },
    { name: 'Linux / Windows Administration', category: 'DevOps & Tools', level: 'Advanced', icon: Server },
    { name: 'CI/CD & Cron Automation', category: 'DevOps & Tools', level: 'Advanced', icon: Workflow },
    { name: 'ISPConfig & Server Hosting', category: 'DevOps & Tools', level: 'Advanced', icon: Cloud },
    { name: 'VS Code / PHPStorm', category: 'DevOps & Tools', level: 'Expert', icon: Wrench },
    { name: 'Postman / Swagger API Docs', category: 'DevOps & Tools', level: 'Expert', icon: FileText },
    { name: 'SonarQube Quality Control', category: 'DevOps & Tools', level: 'Advanced', icon: ShieldCheck },
  ];

  const filteredSkills = useMemo(() => {
    if (activeSkillCategory === 'All') return skillsData;
    return skillsData.filter((skill) => skill.category === activeSkillCategory);
  }, [activeSkillCategory]);

  const experienceData = [
    {
      role: 'Software Engineer',
      company: 'IndiaNIC Infotech Ltd.',
      period: 'April 2019 – Present (7+ Years)',
      type: 'Full-Time',
      description:
        'Leading full-stack engineering initiatives, designing robust microservices, building responsive UIs, and architecting complex web systems across Node.js, React, PHP frameworks, and AI workflows.',
      highlights: [
        'Delivered 12+ high-impact web applications with scalable microservices and multi-tenant architectures.',
        'Architected backend services with Node.js, NestJS, Laravel, and Symfony, integrating RESTful APIs, Webhooks, and JWT Auth.',
        'Integrated AI solutions, vector search models, cURL automation, and Python scripts into core enterprise products.',
        'Enforced best development practices, clean code architectures, SonarQube static analysis, and agile team workflows.',
      ],
      skillsUsed: ['Node.js', 'React.js', 'Laravel', 'Symfony', 'PostgreSQL', 'MySQL', 'MongoDB', 'AI Integration'],
    },
  ];

  const educationData = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'L.D. College of Engineering, GTU',
      year: 'Graduated 2020',
      grade: 'Perfect 10.00 SPI | 7.69 CGPA',
      description:
        'Specialized in Software Engineering, Advanced Database Systems, Web Architectures, and Algorithmic Complexity.',
    },
  ];

  const projectCategories = ['All', 'Full-Stack', 'AI & Automation', 'Enterprise & IoT'];

  const projectsData = [
    {
      id: 'guest-club',
      title: 'The Guest Club Platform',
      subtitle: 'Multi-Tenant Luxury Hospitality Platform',
      category: 'Full-Stack',
      featured: true,
      description:
        'Engineered a high-end multi-tenant hospitality system with three distinct management panels (Admin, Corporate/Partner, and Guest) to connect luxury hotels with elite guests.',
      longDescription:
        'Features a streamlined partner onboarding engine with admin approval workflows, automated account activation, subscription management (Premier, Signature, Flagship tiers), dynamic pricing calculations, promo validation, and granular role-based access control.',
      techStack: [
        'Next.js',
        'React',
        'NestJS',
        'Node.js',
        'Prisma ORM',
        'PostgreSQL',
        'Turborepo',
        'pnpm',
        'Tailwind CSS',
        'React Query',
        'Stripe',
        'JWT',
      ],
      highlights: [
        'Built unified multi-panel architecture serving Admin, Corporate Partner, and Guest users',
        'Implemented token-based auth flow with admin-governed partner onboarding',
        'Developed end-to-end partner registration engine with business validation & Stripe payment tracking',
        'Created guest management modules for tracking luxury metrics and tier benefits',
      ],
    },
    {
      id: 'topspin',
      title: 'Topspin Sports Management & POS',
      subtitle: 'Club Operations & Hardware Turnstile Integration',
      category: 'Enterprise & IoT',
      featured: true,
      description:
        'Engineered a Node.js sports club management system with integrated POS, automated turnstile access via QR scanning, and NFC card attendance monitoring.',
      longDescription:
        'Comprehensive solution facilitating activity scheduling (Tennis, Gym, Snooker), membership subscriptions, cash/club usage tracking, activity duration popups, and hardware relay controls for tripod entry gates with real-time biometric tracking.',
      techStack: ['Node.js', 'MySQL', 'Swagger', 'Razorpay', 'NFC Hardware', 'QR Scanning', 'Hardware APIs'],
      highlights: [
        'Tripod Entry and turnstile gate hardware control via secure relay & QR code scanning',
        'NFC & Biometric card attendance monitoring with automated entry/exit logs',
        'Full POS system for activity bookings, member purchase tracking, and CSV/PDF invoices',
        'Admin dashboard for managing base/custom membership plans and tax summaries',
      ],
    },
    {
      id: 'nexttute',
      title: 'Nexttute EdTech Portal',
      subtitle: 'E-Learning Portal & Admin Dashboard',
      category: 'Full-Stack',
      featured: true,
      description:
        'Robust e-learning platform with a dynamic student-facing portal for course discovery alongside an instructor management dashboard.',
      longDescription:
        'Built scalable backend APIs in Node.js/Express, integrated Razorpay payment gateway for course purchasing, and used Redux state management for seamless authentication, video progress tracking, and shopping cart logic.',
      techStack: ['Node.js', 'Express', 'React.js', 'Redux', 'Razorpay', 'REST API'],
      highlights: [
        'Dynamic course discovery portal with instructor and video content management',
        'Secure Razorpay payment integration for course checkouts',
        'Redux state management for authentication, cart state, and student progress',
      ],
    },
    {
      id: 'price-intel',
      title: 'PriceIntel Intelligence Engine',
      subtitle: 'Market Price Analytics & Web Scraping',
      category: 'AI & Automation',
      featured: true,
      description:
        'Advanced price intelligence application analyzing market pricing trends (lowest, highest, average) with automated Python web scraping.',
      longDescription:
        'Built complex SQL multi-table joins to compute analytics on competitive pricing. Integrated Python scraping scripts with automated data filtering, Excel import/export pipelines, and interactive pricing charts.',
      techStack: ['Laravel', 'Python', 'Web Scraping', 'MySQL', 'REST API', 'Data Analytics'],
      highlights: [
        'Automated Python scrapers gathering pricing data with seamless Laravel processing',
        'Optimized database joins and queries for instantaneous pricing trend visualization',
        'Bulk Excel data export/import with automated QA validation rules',
      ],
    },
    {
      id: 'devops-nova',
      title: 'DevOps Automation Platform',
      subtitle: 'Laravel Nova Admin Panel & ISPConfig',
      category: 'Enterprise & IoT',
      featured: false,
      description:
        'Streamlined dynamic project hosting, server configuration, and project manager assignment using a customized Laravel Nova control panel.',
      longDescription:
        'Built automated workflows to dynamically provision and host web projects, manage ISPConfig server configurations, and track project lifecycle metrics for internal teams.',
      techStack: ['Laravel Nova', 'PHP', 'ISPConfig', 'Linux', 'DevOps', 'Shell Scripting'],
      highlights: [
        'Automated project hosting & dynamic ISPConfig server provisioning',
        'Real-time team project lifecycle tracking dashboard',
        'Custom Laravel Nova resource components and admin tools',
      ],
    },
    {
      id: 'social-shelf',
      title: 'Social Shelf Retailer & Manufacturer App',
      subtitle: 'Social Commerce & Campaign Analytics',
      category: 'Full-Stack',
      featured: false,
      description:
        'Social media and product management platform providing real-time dashboards for retailers and manufacturers to monitor sales and campaigns.',
      longDescription:
        'Integrated product management, campaign tracking, invoice processing, and role-based accounts for manufacturers and retailers powered by Vue 3 and Laravel APIs.',
      techStack: ['Vue 3', 'Laravel', 'REST API', 'MySQL', 'Chart.js'],
      highlights: [
        'Real-time dashboards monitoring product sales and social campaign ROI',
        'Multi-tenant architecture separating manufacturer and retailer permissions',
        'Automated invoice generation and order transaction management',
      ],
    },
    {
      id: 'continental-pimcore',
      title: 'Continental Product System (Symfony)',
      subtitle: 'Enterprise Pimcore Catalog & Code Optimization',
      category: 'Enterprise & IoT',
      featured: false,
      description:
        'Pimcore enterprise product management module featuring ExtJS front-end components and Symfony REST APIs with strict SonarQube quality standards.',
      longDescription:
        'Engineered dynamic product data structures, addressed static analysis warnings using SonarQube, modernized dependencies, and enhanced enterprise catalog performance.',
      techStack: ['Symfony', 'Pimcore', 'ExtJS', 'PostgreSQL', 'SonarQube', 'PHP'],
      highlights: [
        'SonarQube quality optimization and code vulnerability remediation',
        'Dynamic Pimcore product catalog data structures',
        'Robust Symfony API endpoints for enterprise catalog sync',
      ],
    },
  ];

  const filteredProjects = useMemo(() => {
    if (activeProjectCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === activeProjectCategory);
  }, [activeProjectCategory]);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0d_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0F17]/80 border-b border-slate-800/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              KV
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Kamesh Valodara
              </span>
              <span className="block text-xs text-slate-400 font-mono">Senior Full-Stack Engineer</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#experience" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop CTA & Copy Email */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all duration-200"
              title="Copy email address"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{copiedEmail ? 'Copied!' : 'kamesh.v@indianic.com'}</span>
            </button>
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25 hover:opacity-95 transition-opacity"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B0F17]/95 border-b border-slate-800 px-6 py-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top duration-200">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-200 hover:text-cyan-400"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-200 hover:text-cyan-400"
            >
              Skills
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-200 hover:text-cyan-400"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-200 hover:text-cyan-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-200 hover:text-cyan-400"
            >
              Contact
            </a>
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium rounded-lg bg-slate-900 border border-slate-700 text-slate-300"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                <span>{copiedEmail ? 'Copied to Clipboard!' : email}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative z-10 pt-16 md:pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-cyan-400 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>7+ Years Experience • IndiaNIC Infotech</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Building Scalable <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
                Web Systems & AI Solutions
              </span>
            </h1>

            {/* Sub-headline / Short Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Hi, I’m <strong className="text-white font-semibold">Kamesh Valodara</strong> — Senior Full-Stack Developer specializing in
              high-performance web applications using <span className="text-cyan-300 font-medium">Node.js</span>,{' '}
              <span className="text-indigo-300 font-medium">React.js</span>, <span className="text-purple-300 font-medium">Laravel</span> &{' '}
              <span className="text-pink-300 font-medium">AI Workflows</span>. Proven track record of delivering 12+ enterprise platforms with multi-tenant and microservice architectures.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white shadow-xl shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View My Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800/80 hover:border-slate-700 transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-mono rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Quick Contact & Links */}
            <div className="pt-4 flex items-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href={`mailto:${email}`} className="hover:text-cyan-300 transition-colors">
                  {email}
                </a>
              </div>
              <div className="h-4 w-px bg-slate-800" />
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl">
              {/* Card Header Tag */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-xs text-slate-500 ml-2">kamesh_valodara_cv.json</span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                  Full-Stack
                </span>
              </div>

              {/* Code / Profile Preview */}
              <div className="py-6 space-y-4 font-mono text-xs text-slate-300 leading-relaxed">
                <div>
                  <span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span> <span className="text-emerald-300">'Kamesh Valodara'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span> <span className="text-emerald-300">'Software Engineer'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">experience:</span> <span className="text-amber-300">'7+ Years'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">company:</span> <span className="text-emerald-300">'IndiaNIC Infotech Ltd.'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">education:</span> <span className="text-emerald-300">'MCA (L.D. College of Engg)'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">coreTech:</span> [
                  <span className="text-cyan-300">'Node.js'</span>, <span className="text-cyan-300">'React'</span>,{' '}
                  <span className="text-cyan-300">'Laravel'</span>, <span className="text-cyan-300">'AI Agents'</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">projectsDelivered:</span> <span className="text-amber-300">12</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">academicRecord:</span> <span className="text-amber-300">'10.00 SPI'</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Floating Pill Badge */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-400">
                  <Bot className="w-4 h-4 text-purple-400" />
                  <span>AI & Microservices Specialist</span>
                </div>
                <span className="text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Profile
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* METRICS GRID */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl hover:border-slate-700/80 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-r ${m.color} text-white shadow-lg`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <Sparkles className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{m.value}</div>
                <div className="mt-1 text-xs font-semibold text-slate-300">{m.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{m.subtext}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 relative z-10 border-t border-slate-800/60 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Technical Expertise</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Core Technologies & Architecture
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              A comprehensive breakdown of my 7+ years of experience across frontend, backend, microservices, AI workflows, and cloud tooling.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveSkillCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${activeSkillCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-200 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200 group-hover:text-white">{skill.name}</h4>
                      <span className="text-[10px] text-slate-500">{skill.category}</span>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-medium ${skill.level === 'Expert'
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/50'
                      : 'bg-indigo-950/80 text-indigo-300 border border-indigo-800/50'
                      }`}
                  >
                    {skill.level}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE TIMELINE */}
      <section id="experience" className="py-20 relative z-10 border-t border-slate-800/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Header */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Career History</h2>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">Work Experience & Academic Excellence</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Consistently delivering enterprise applications, managing full software development lifecycles, and leading team best practices.
            </p>

            {/* Quick Education Callout Card */}
            {educationData.map((edu, idx) => (
              <div key={idx} className="mt-8 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-3 text-purple-400">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Education</span>
                </div>
                <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                <p className="text-xs text-slate-400">{edu.institution}</p>
                <div className="inline-block px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-800/60 text-xs font-semibold">
                  {edu.grade}
                </div>
                <p className="text-xs text-slate-400 pt-1 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Timeline Right Column */}
          <div className="lg:col-span-8 space-y-8">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/40 space-y-6">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-[#0B0F17]" />

                {/* Role Header */}
                <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 backdrop-blur-xl">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800/80">
                        {exp.type}
                      </span>
                      <h4 className="text-xl font-bold text-white mt-2">{exp.role}</h4>
                      <p className="text-sm font-medium text-slate-300 flex items-center gap-2 mt-1">
                        <Building2 className="w-4 h-4 text-cyan-400" />
                        <span>{exp.company}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed pt-2">{exp.description}</p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 pt-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Contributions & Impact:</h5>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Tags */}
                  <div className="pt-4 flex flex-wrap gap-2 border-t border-slate-800">
                    {exp.skillsUsed.map((s, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 relative z-10 border-t border-slate-800/60 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Featured Work</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Key Projects & Deliverables</h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Real-world systems, platforms, and automated workflows extracted directly from my project portfolio.
            </p>
          </div>

          {/* Project Filters */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveProjectCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${activeProjectCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="space-y-4">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[10px] font-semibold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                        <Star className="w-3 h-3 fill-amber-400" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 font-medium">{project.subtitle}</p>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">{project.description}</p>

                  {/* Key Highlights Bullet List */}
                  <ul className="space-y-1.5 pt-2">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] text-slate-400">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Tech Tags & Modal Trigger */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800/60 hover:bg-cyan-500/10 text-xs font-semibold text-cyan-400 hover:text-cyan-300 border border-slate-700/60 hover:border-cyan-500/40 transition-all"
                  >
                    <span>View Architecture Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0B0F17] border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="px-2.5 py-1 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <p className="text-sm font-medium text-slate-400">{selectedProject.subtitle}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Overview & Architecture</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.longDescription}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Responsibilities & Impact</h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-2 border-t border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT & FOOTER */}
      <section id="contact" className="py-20 relative z-10 border-t border-slate-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 lg:p-16 text-center space-y-8 shadow-2xl relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Get In Touch</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let's Build Exceptional Web Solutions Together
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need a Senior Full-Stack Engineer for web apps, microservice architecture, or AI integration — I'm open to discussing opportunities.
            </p>
          </div>

          {/* Email Copy Card */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 max-w-md mx-auto w-full">
            <div className="flex items-center gap-3 text-slate-300 text-sm overflow-hidden text-ellipsis">
              <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="font-mono text-xs sm:text-sm">{email}</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto ml-auto px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 transition-colors shrink-0"
            >
              {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${email}`}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <footer className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Kamesh Valodara. All rights reserved. Software Engineer (7+ Years Exp).
          </div>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              Back to top <ChevronDown className="w-3.5 h-3.5 rotate-180" />
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}

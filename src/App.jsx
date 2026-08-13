import React, { useState, useMemo } from 'react';
import {
  Code2,
  Terminal,
  Globe,
  Database,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Github,
  Linkedin,
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
  Building2,
  Calendar,
  Star,
  FileText,
  Search,
  BarChart2,
  Megaphone,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');
  const [activeProjectCategory, setActiveProjectCategory] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const email = 'valodarachintan89@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const metrics = [
    {
      label: 'Experience',
      value: '1+ Yr',
      subtext: 'SEO & Operations',
      icon: Briefcase,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      label: 'Projects',
      value: '2+',
      subtext: 'Python & PHP',
      icon: CheckCircle2,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      label: 'Certifications',
      value: '2',
      subtext: 'Tech & Personality Dev',
      icon: Award,
      color: 'from-purple-500 to-pink-500',
    },
    {
      label: 'Core Expertise',
      value: 'SEO',
      subtext: 'On-Page & Off-Page',
      icon: Search,
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  const skillCategories = [
    'All',
    'SEO',
    'Programming',
    'Tools',
    'Soft Skills'
  ];

  const skillsData = [
    // SEO
    { name: 'Off-Page SEO', category: 'SEO', level: 'Expert', icon: Globe },
    { name: 'On-Page SEO', category: 'SEO', level: 'Advanced', icon: Search },
    { name: 'Local SEO & GMB', category: 'SEO', level: 'Expert', icon: Megaphone },
    { name: 'Keyword Research', category: 'SEO', level: 'Advanced', icon: BarChart2 },
    { name: 'Competitor Analysis', category: 'SEO', level: 'Advanced', icon: Zap },
    
    // Programming
    { name: 'Python', category: 'Programming', level: 'Intermediate', icon: Code2 },
    { name: 'Django', category: 'Programming', level: 'Intermediate', icon: Terminal },
    { name: 'PHP', category: 'Programming', level: 'Intermediate', icon: Database },

    // Tools
    { name: 'SEMrush', category: 'Tools', level: 'Advanced', icon: BarChart2 },
    { name: 'Microsoft Word', category: 'Tools', level: 'Expert', icon: FileText },
    { name: 'Microsoft Excel', category: 'Tools', level: 'Expert', icon: FileText },
    { name: 'Microsoft PowerPoint', category: 'Tools', level: 'Expert', icon: FileText },

    // Soft Skills
    { name: 'Communication', category: 'Soft Skills', level: 'Expert', icon: CheckCircle2 },
    { name: 'Time Management', category: 'Soft Skills', level: 'Expert', icon: Calendar },
    { name: 'Problem Solving', category: 'Soft Skills', level: 'Expert', icon: Zap },
    { name: 'Teamwork', category: 'Soft Skills', level: 'Expert', icon: Building2 },
    { name: 'Internet Research', category: 'Soft Skills', level: 'Expert', icon: Search },
  ];

  const filteredSkills = useMemo(() => {
    if (activeSkillCategory === 'All') return skillsData;
    return skillsData.filter((skill) => skill.category === activeSkillCategory);
  }, [activeSkillCategory]);

  const experienceData = [
    {
      role: 'SEO Executive',
      company: 'EEG Technogeeks',
      period: '8 Months (Current)',
      type: 'Full-Time',
      description:
        'Executing Off-Page SEO activities including bookmarking, classifieds, articles, and directory submissions to enhance online visibility.',
      highlights: [
        'Managed Local SEO through Google Business Profile (GMB) optimization, citation building, and GMB posting.',
        'Conducted keyword research, keyword difficulty analysis, and competitor backlink analysis using SEMrush.',
        'Prepared SEO ranking reports and successfully supported website ranking improvements.',
      ],
      skillsUsed: ['Off-Page SEO', 'GMB', 'SEMrush', 'Keyword Research', 'Backlink Analysis'],
    },
    {
      role: 'SEO Executive',
      company: 'System Catalyst',
      period: '4 Months',
      type: 'Full-Time',
      description:
        'Specialized in off-page SEO strategies to build robust backlink profiles and improve search engine rankings.',
      highlights: [
        'Executed business listing, directory submissions, and classified ads.',
        'Managed Web 2.0 properties, blog commenting, and social bookmarking.',
        'Handled social media posting and engagement to drive organic traffic.',
      ],
      skillsUsed: ['Off-Page SEO', 'Social Media', 'Web 2.0', 'Social Bookmarking'],
    },
    {
      role: 'Computer Operator',
      company: 'Gamer Zone Company',
      period: '1 Year',
      type: 'Full-Time',
      description:
        'Proficiently handled data management and operational responsibilities to maintain optimal system performance.',
      highlights: [
        'Accumulated hands-on experience in managing daily operations and data management.',
        'Organized tasks and managed time efficiently in a fast-paced environment.',
      ],
      skillsUsed: ['Data Management', 'Time Management', 'Task Organization'],
    },
  ];

  const educationData = [
    {
      degree: 'Bachelor of Arts (BA)',
      institution: 'Shri Sahajanand Arts & Commerce College',
      year: '2016 - 2018',
      grade: 'Running Last sem - 6',
      description:
        'Developed strong foundational skills in communication, critical thinking, and general arts.',
    },
    {
      degree: 'Python Programming Course',
      institution: 'TOPS Technology',
      year: 'Completed',
      grade: 'Certification',
      description:
        'Gained hands-on experience in Python programming and worked on practical projects including Django.',
    },
    {
      degree: 'English Speaking & Personality Dev.',
      institution: 'Shital Academy',
      year: 'Completed',
      grade: 'Certification',
      description:
        'Enhanced professional communication, interpersonal skills, and overall personality development.',
    },
  ];

  const projectCategories = ['All', 'Web Development', 'Programming'];

  const projectsData = [
    {
      id: 'django-project',
      title: 'Django Web Project',
      subtitle: 'Python-based Web Application',
      category: 'Web Development',
      featured: true,
      description:
        'Developed a dynamic web application using Python and the Django framework as part of comprehensive training.',
      longDescription:
        'Applied Python programming skills to build a functional web application with Django. Focused on backend logic, routing, and rendering dynamic views based on user interactions.',
      techStack: ['Python', 'Django', 'HTML/CSS'],
      highlights: [
        'Built backend logic and routing using the Django framework.',
        'Implemented dynamic rendering for user-facing views.',
        'Demonstrated strong problem-solving skills throughout the development lifecycle.',
      ],
    },
    {
      id: 'php-programs',
      title: 'PHP Programs & Websites',
      subtitle: 'Custom Web Solutions',
      category: 'Programming',
      featured: true,
      description:
        'Developed custom PHP programs and websites to solve specific computational logic and web rendering tasks.',
      longDescription:
        'Gained foundational knowledge in PHP and applied it to develop various PHP programs and simple web projects. Implemented backend scripts to handle data and serve dynamic content.',
      techStack: ['PHP', 'HTML5', 'CSS3'],
      highlights: [
        'Wrote and executed backend PHP scripts for data handling.',
        'Integrated PHP with HTML/CSS for dynamic website creation.',
        'Optimized code logic for better performance and maintainability.',
      ],
    },
  ];

  const filteredProjects = useMemo(() => {
    if (activeProjectCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === activeProjectCategory);
  }, [activeProjectCategory]);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0d_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0F17]/80 border-b border-slate-800/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              CV
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Chintan Valodara
              </span>
              <span className="block text-xs text-slate-400 font-mono">SEO Executive</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all duration-200"
              title="Copy email address"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{copiedEmail ? 'Copied!' : email}</span>
            </button>
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25 hover:opacity-95 transition-opacity"
            >
              Get in touch
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B0F17]/95 border-b border-slate-800 px-6 py-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top duration-200">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-slate-200 hover:text-cyan-400">About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-slate-200 hover:text-cyan-400">Skills</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-slate-200 hover:text-cyan-400">Experience</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-slate-200 hover:text-cyan-400">Projects</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-slate-200 hover:text-cyan-400">Contact</a>
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium rounded-lg bg-slate-900 border border-slate-700 text-slate-300"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                <span>{copiedEmail ? 'Copied!' : email}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      <section id="hero" className="relative z-10 pt-16 md:pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-cyan-400 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>SEO Professional & Developer • Ahmedabad</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Driving Growth with <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
                SEO & Analytics
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Hi, I’m <strong className="text-white font-semibold">Chintan Valodara</strong> — an SEO Executive dedicated to improving online visibility and search rankings. With hands-on experience in <span className="text-cyan-300 font-medium">Off-Page SEO</span>, <span className="text-indigo-300 font-medium">Local SEO</span>, and <span className="text-purple-300 font-medium">Keyword Research</span>, plus a solid foundation in Python & PHP development.
            </p>

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
                  href="https://www.linkedin.com/in/chintan-valodara"
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

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-xs text-slate-500 ml-2">chintan_valodara_cv.json</span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                  SEO Professional
                </span>
              </div>

              <div className="py-6 space-y-4 font-mono text-xs text-slate-300 leading-relaxed">
                <div>
                  <span className="text-purple-400">const</span> <span className="text-cyan-300">professional</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span> <span className="text-emerald-300">'Chintan Valodara'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span> <span className="text-emerald-300">'SEO Executive'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">experience:</span> <span className="text-amber-300">'1+ Years'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">skills:</span> [
                  <span className="text-cyan-300">'Off-Page SEO'</span>, <span className="text-cyan-300">'GMB'</span>,{' '}
                  <span className="text-cyan-300">'SEMrush'</span>, <span className="text-cyan-300">'Python'</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">education:</span> <span className="text-emerald-300">'BA (Shri Sahajanand College)'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">location:</span> <span className="text-emerald-300">'Ahmedabad, Gujarat, India'</span>
                </div>
                <div>&#125;;</div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-400">
                  <Search className="w-4 h-4 text-purple-400" />
                  <span>SEO & Growth Strategist</span>
                </div>
                <span className="text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Profile
                </span>
              </div>
            </div>
          </div>
        </div>

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

      <section id="skills" className="py-20 relative z-10 border-t border-slate-800/60 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Technical Expertise</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Proficiencies
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              A breakdown of my SEO strategies, technical knowledge in Python/PHP, and essential soft skills.
            </p>
          </div>

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

      <section id="experience" className="py-20 relative z-10 border-t border-slate-800/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Career History</h2>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">Work Experience & Academic Excellence</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Demonstrating consistent growth in SEO, analytics, and operational efficiency across multiple organizations.
            </p>

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

          <div className="lg:col-span-8 space-y-8">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/40 space-y-6">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-[#0B0F17]" />
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

      <section id="projects" className="py-20 relative z-10 border-t border-slate-800/60 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Featured Work</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Key Projects</h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Showcasing my foundational projects in web development and programming logic.
            </p>
          </div>

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

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="space-y-4">
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

                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 font-medium">{project.subtitle}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{project.description}</p>

                  <ul className="space-y-1.5 pt-2">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] text-slate-400">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

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
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Overview</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.longDescription}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Key Highlights</h4>
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
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Technologies</h4>
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

      <section id="contact" className="py-20 relative z-10 border-t border-slate-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 lg:p-16 text-center space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Get In Touch</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let's Boost Your Online Presence
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need an SEO Executive to improve your search rankings, manage GMB, or handle off-page strategies — I'm ready to contribute to your company's growth.
            </p>
          </div>

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

          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/chintan-valodara"
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

        <footer className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Chintan Valodara. All rights reserved. SEO Executive.
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

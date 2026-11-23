import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  ArrowUpRight,
  CodeXml,
  Mail,
  ChevronDown,
  Award,
  GraduationCap,
  Sparkles,
  Layers,
  Cpu,
  Database,
  Terminal,
  ShieldCheck,
  BadgeCheck,
  Phone,
  Menu,
  X,
} from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    {
      title: "Cybersecurity & OS Fundamentals",
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      glow: "border-cyan-500/30",
      skills: [
        "Network Security (Basic)",
        "OWASP Top 10 (Basic)",
        "Secure Coding",
        "Authentication & Authorization",
        "Vulnerability Awareness",
        "Linux / Unix (Basic)",
      ],
    },
    {
      title: "Programming & Web UI",
      icon: <CodeXml className="w-6 h-6 text-indigo-400" />,
      glow: "border-indigo-500/30",
      skills: [
        "Python",
        "Java",
        "C++",
        "JavaScript",
        "SQL",
        "HTML5 / CSS3",
        "Responsive Web Design",
        "React.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "AI, Data & Analytics",
      icon: <Cpu className="w-6 h-6 text-violet-400" />,
      glow: "border-violet-500/30",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Pandas",
        "NumPy",
        "Keras",
        "PIL",
        "Data Analysis",
        "Data Validation",
      ],
    },
    {
      title: "Databases, ETL & Tools",
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      glow: "border-emerald-500/30",
      skills: [
        "Oracle SQL",
        "Database Management",
        "Data Modeling",
        "Data Cleaning",
        "ETL Concepts",
        "Git & GitHub",
        "VS Code",
        "MS Excel",
      ],
    },
  ];

  const experience = [
    {
      company: "Cognizant Technology Solutions Pvt. Ltd.",
      role: "Analyst Trainee",
      date: "Aug 2026 — Present",
      location: "Bengaluru, India",
      tag: "Enterprise Operations & Communication",
      accent: "bg-cyan-400",
      points: [
        "Applied structured customer engagement, active listening, call flow handling, and escalation/de-escalation workflows.",
        "Executed professional business communication across email, chat etiquette, presentations, and operational documentation.",
        "Practiced Agile habits, professional etiquette, and structured communication using the SOLER model and Cognizant's core values.",
        "Enhanced verbal clarity, articulation, and structured presentation delivery for stakeholder interactions.",
      ],
    },
    {
      company: "Valuex Innovations",
      role: "Operations & Data Support Intern",
      date: "Nov 2024 — May 2026",
      location: "Nellore, India",
      tag: "Data Validation & Operations",
      accent: "bg-indigo-400",
      points: [
        "Analyzed and validated business datasets using SQL and MS Excel to maintain accuracy, consistency, and reporting integrity.",
        "Identified and resolved data anomalies and inconsistencies through systematic troubleshooting and validation checks.",
        "Prepared and maintained technical documentation, operational records, and structured status reports.",
        "Collaborated with cross-functional teams using GitHub, VS Code, and Linux to support daily operations and timely delivery.",
      ],
    },
  ];

  const projects = [
    {
      number: "01",
      title: "Personal Developer Portfolio",
      category: "Frontend & Web Design",
      icon: <Terminal className="w-6 h-6 text-cyan-400" />,
      border: "border-cyan-500/30",
      badgeColor: "text-cyan-300 bg-cyan-950/60 border-cyan-800",
      link: "https://harshithaveguru.github.io/Portfolio_2026/",
      description:
        "Responsive personal portfolio built with React.js, JavaScript, and Tailwind CSS to showcase professional experience, technical skills, projects, and certifications. Features interactive UI components, responsive navigation, and a Web3Forms contact integration.",
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Web3Forms", "GitHub Pages"],
    },
    {
      number: "02",
      title: "Enterprise Data Validation & Reporting Workflow",
      category: "Data Quality & Operations",
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      border: "border-emerald-500/30",
      badgeColor: "text-emerald-300 bg-emerald-950/60 border-emerald-800",
      description:
        "End-to-end operational data cleaning, anomaly detection, and validation pipeline utilizing Oracle SQL and MS Excel to standardize business records and streamline recurring operational reporting.",
      technologies: ["SQL", "Oracle SQL", "MS Excel", "ETL Concepts", "Data Validation"],
    },
  ];

  const certifications = [
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco",
      year: "2026",
    },
    {
      title: "Data Science",
      issuer: "Cisco",
      year: "2026",
    },
    {
      title: "Design Fundamentals with AI",
      issuer: "Adobe",
      year: "2025",
    },
    {
      title: "Digital Productivity with AI",
      issuer: "Cisco",
      year: "2025",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-600/10 blur-3xl rounded-full" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-600/10 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white group">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-tr from-cyan-500 to-indigo-600 text-black font-extrabold shadow-md shadow-cyan-500/20 group-hover:scale-105 transition">
              SP
            </span>
            <span>
              Veguru<span className="text-cyan-400">.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8 text-sm font-medium text-slate-400">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            </div>

            <a
              href="#contact"
              className="rounded-full bg-linear-to-r from-cyan-500 to-indigo-600 px-5 py-2 text-xs font-bold text-black shadow-md shadow-cyan-500/20 hover:opacity-90 transition"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-400 hover:text-white md:hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-800 bg-slate-900 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium text-slate-300">
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#certifications" onClick={() => setMobileMenuOpen(false)}>Certifications</a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-xl bg-cyan-500 py-2.5 text-center font-bold text-black"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen flex-col justify-center px-6 pt-32 pb-20">
        <div className="mx-auto w-full max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-8">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Software Developer
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl leading-none">
            Sai Poojitha <br />
            <span className="bg-linear-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Veguru.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-slate-400 leading-relaxed font-light">
            BCA graduate (9.0 CGPA) skilled in <strong className="text-slate-200 font-medium">Python, Java, SQL, & Linux</strong>. Passionate about cybersecurity fundamentals, data validation, AI, and building secure, reliable software systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-white/90"
            >
              View Projects
              <ArrowUpRight
                size={17}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="./SaiPoojitha_veguru.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/70 transition hover:border-white/40 hover:text-white"
            >
              View Resume
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/poojithareddyveguru"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span className="absolute -top-9 scale-0 rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-slate-200 shadow-md transition-all duration-200 group-hover:scale-100">
                GitHub
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/poojitha-veguru-1138b43b6"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
              </svg>
              <span className="absolute -top-9 scale-0 rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-slate-200 shadow-md transition-all duration-200 group-hover:scale-100">
                LinkedIn
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:Poojiveguru@gmail.com"
              aria-label="Email"
              className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            >
              <Mail size={20} className="transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -top-9 scale-0 rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-slate-200 shadow-md transition-all duration-200 group-hover:scale-100">
                Email
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+919347438976"
              aria-label="Phone"
              className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <Phone size={20} className="transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -top-9 scale-0 rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-slate-200 shadow-md transition-all duration-200 group-hover:scale-100">
                +91-9347438976
              </span>
            </a>
          </div>
        </div>

        <div className="mt-16 flex justify-center text-slate-600">
          <ChevronDown size={24} className="animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 border-t border-slate-800/80 px-6 py-28 bg-slate-900/20">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
              <Sparkles size={16} /> 01 — Overview
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl text-white leading-tight">
              Driven by data integrity, cybersecurity, & clean engineering.
            </h2>
          </div>

          <div className="space-y-6 text-slate-300 font-light text-base leading-relaxed">
            <p>
              I am a Computer Applications graduate with a strong foundation in <strong className="text-white font-medium">Python, Java, SQL, and Linux</strong>, combining hands-on experience in operational data validation with a focused interest in cybersecurity and secure software development.
            </p>
            <p>
              From troubleshooting enterprise data inconsistencies using <strong className="text-white font-medium">Oracle SQL & Excel</strong> to applying <strong className="text-white font-medium">OWASP Top 10 & Secure Coding</strong> principles, I bring strong attention to detail and structured problem-solving to every project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                  <GraduationCap size={20} /> Education
                </div>
                <h4 className="mt-3 text-base font-bold text-white">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-xs text-slate-400 mt-1">CGPA: 9.0 • Jul 2023 — Jun 2026</p>
                <p className="text-xs text-slate-500 mt-1">Krishna Chaitanya Inst. of Sci. & Tech, Nellore</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold">
                  <Award size={20} /> Honors & Awards
                </div>
                <h4 className="mt-3 text-base font-bold text-white">Student Excellence Award</h4>
                <p className="text-xs text-slate-400 mt-1">First Rank in Class (2026)</p>
                <p className="text-xs text-slate-500 mt-1">2nd Prize — Skill Development Project (2025)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative z-10 border-t border-slate-800/80 px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
            <Layers size={16} /> 02 — Career Pathway
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl text-white">
            Professional Experience
          </h2>

          <div className="mt-12 flex flex-col gap-8">
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 hover:border-slate-700 transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`h-3 w-3 rounded-full ${job.accent}`} />
                      <h3 className="text-xl font-bold text-white">{job.company}</h3>
                      <span className="rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-300 font-medium">
                        {job.tag}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-cyan-400 mt-1">
                      {job.role} • <span className="text-slate-400">{job.location}</span>
                    </p>
                  </div>
                  <span className="font-mono text-xs text-slate-400 bg-slate-800/60 px-3 py-1 rounded-full border border-slate-700/60 w-fit">
                    {job.date}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5 text-sm text-slate-300 font-light leading-relaxed">
                  {job.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 border-t border-slate-800/80 px-6 py-28 bg-slate-900/20">
        <div className="mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
            <Cpu size={16} /> 03 — Technical Arsenal
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl text-white">
            Skills & Core Technologies
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {skills.map((group, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border bg-slate-900/50 p-6 sm:p-7 shadow-lg ${group.glow}`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{group.title}</h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 border-t border-slate-800/80 px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
            <Terminal size={16} /> 04 — Portfolio
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl text-white">
            Featured Projects
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.number}
                className={`flex flex-col justify-between rounded-2xl border bg-slate-900/40 p-7 sm:p-8 hover:bg-slate-900/70 transition ${project.border}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                      {project.icon}
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${project.badgeColor}`}>
                      {project.category}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Project Link"
                        className="text-slate-400 hover:text-cyan-400 transition"
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    )}
                  </div>

                  <p className="mt-3 text-sm text-slate-300 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-slate-800 border border-slate-700 px-2.5 py-1 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative z-10 border-t border-slate-800/80 px-6 py-24 bg-slate-900/20">
        <div className="mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
            <BadgeCheck size={16} /> 05 — Credentials
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl text-white">
            Certifications
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-5 hover:border-cyan-500/40 transition"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <BadgeCheck size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">{cert.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 border-t border-slate-800/80 px-6 py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              06 — Get In Touch
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Let's build something <span className="bg-linear-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">secure & reliable.</span>
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Leave a message below or reach out directly at{" "}
              <span className="text-slate-200">Poojiveguru@gmail.com</span> •{" "}
              <span className="text-slate-200">+91-9347438976</span>
            </p>
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target;
              const formData = new FormData(form);

              formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
              formData.append("subject", "New Portfolio Message from " + formData.get("name"));

              try {
                const response = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: formData,
                });

                const data = await response.json();

                if (data.success) {
                  Swal.fire({
                    title: "You just made my inbox happy.",
                    text: "Glad you dropped a line! I'll read through your note and get back to you shortly.",
                    icon: "success",
                    background: "#0f172a",
                    color: "#f8fafc",
                    confirmButtonColor: "#06b6d4",
                    confirmButtonText: "Sounds good!",
                    customClass: {
                      popup: "border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-md",
                    },
                  });
                  form.reset();
                } else {
                  throw new Error(data.message);
                }
              } catch (error) {
                Swal.fire({
                  title: "Error!",
                  text: "Something went wrong. Please try again or email directly.",
                  icon: "error",
                  background: "#0f172a",
                  color: "#f8fafc",
                  confirmButtonColor: "#ef4444",
                });
              }
            }}
            className="mt-10 space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-md"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-cyan-500 focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-cyan-500 focus:outline-none transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
              <textarea
                rows={4}
                name="message"
                required
                placeholder="Have an exciting role, security project, or feedback? I’m all ears..."
                className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-cyan-500 focus:outline-none transition"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 py-3.5 text-sm font-bold text-black transition hover:opacity-90 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Sai Poojitha Veguru. Built with React & Tailwind CSS.</p>
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" /> Bengaluru, Karnataka, India
          </p>
        </div>
      </footer>
    </main>
  );
}
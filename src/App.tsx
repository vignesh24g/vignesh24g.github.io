/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Briefcase, 
  Award, 
  ChevronRight,
  MapPin,
  Download,
  CheckCircle,
  ExternalLink,
  Code2,
  Database,
  Cloud,
  Cpu,
  Layers,
  Wrench,
  Boxes,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { RESUME_DATA } from "./constants";
import { BentoCard } from "./components/BentoCard";
import { ContactForm } from "./components/ContactForm";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const techIcons: Record<string, any> = {
  "Languages": Code2,
  "Big Data Systems": Layers,
  "Cloud (AWS)": Cloud,
  "DevOps": Boxes,
  "Tools": Wrench,
  "Database": Database,
  "ETL": Cpu
};

export default function App() {
  const currentYear = new Date().getFullYear();
  const projectsRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (projectsRef.current) {
      const { scrollWidth, offsetWidth } = projectsRef.current;
      setDragConstraints({ left: -(scrollWidth - offsetWidth), right: 0 });
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (projectsRef.current) {
      const scrollAmount = 400;
      projectsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <div className="w-full max-w-6xl">
        {/* Header Navigation */}
        <motion.header 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-between items-center mb-12 px-2"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm tracking-tight shadow-lg ring-4 ring-white">
              VG
            </div>
            <div>
              <span className="font-bold tracking-tight text-xl block leading-none">{RESUME_DATA.name}</span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest leading-none mt-1 inline-block">Professional Portfolio</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#projects" className="hover:text-black transition-colors">Projects</a>
            <a href="#experience" className="hover:text-black transition-colors">Experience</a>
            <a href="#contact" className="hover:text-black transition-colors group flex items-center gap-2">
              Contact
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a 
              href="/resume.pdf" 
              download="Vignesh_Gunasekaran_Resume.pdf"
              className="flex items-center gap-2 text-[10px] font-mono text-white bg-slate-900 border border-slate-900 px-4 py-2 rounded-full hover:bg-white hover:text-slate-900 transition-all shadow-lg shadow-slate-200 uppercase tracking-widest"
            >
              <Download size={14} /> Resume
            </a>
          </div>
        </motion.header>

        {/* Main Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          
          {/* Main Hero Card */}
          <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between py-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-green-100">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Ready for New Challenges
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-8">
                Building <br/>
                <span className="text-slate-400">future-proof</span> <br/>
                data platforms.
              </h1>
            </div>
            <p className="text-xl text-slate-500 leading-relaxed max-w-sm">
              I architect high-performance <span className="text-slate-900 font-medium">ETL pipelines</span> and scalable cloud solutions for complex enterprise environments.
            </p>
          </BentoCard>

          {/* Experience Year Stats */}
          <BentoCard variant="dark" className="flex flex-col justify-between p-10 group">
            <div className="text-slate-400 text-xs font-mono uppercase tracking-[0.3em]">Experience</div>
            <div className="mt-8">
              <div className="text-7xl font-bold tracking-tighter group-hover:text-blue-400 transition-colors duration-500">
                {RESUME_DATA.experienceYear.split(' ')[0]}<span className="text-slate-600">+</span>
              </div>
              <div className="text-slate-400 text-[10px] font-mono mt-2 tracking-widest uppercase italic">Years of Excellence</div>
            </div>
          </BentoCard>

          {/* Current Position */}
          <BentoCard className="flex flex-col justify-between p-10">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-200">
                <Briefcase size={24} />
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest">PRESENT</span>
            </div>
            <div className="mt-8">
              <div className="font-bold text-xl leading-tight mb-1">{RESUME_DATA.experience[0].role}</div>
              <div className="text-slate-400 text-sm font-medium">{RESUME_DATA.experience[0].company}</div>
            </div>
          </BentoCard>

          {/* Moveable Projects Section */}
          <BentoCard id="projects" className="md:col-span-4 p-10 bg-white overflow-hidden">
            <div className="flex justify-between items-center mb-10 px-2">
              <div className="mono-label">Featured Projects (Drag or Scroll →)</div>
              <div className="flex gap-2">
                <button 
                  onClick={() => scroll('left')}
                  className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all cursor-pointer active:scale-95"
                >
                  <ArrowLeft size={18} />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all cursor-pointer active:scale-95"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
            <div 
              ref={projectsRef}
              className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide cursor-grab active:cursor-grabbing snap-x"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {(RESUME_DATA as any).projects.map((project: any, i: number) => (
                <motion.a
                  key={i}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[300px] md:min-w-[400px] flex flex-col justify-between p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/40 transition-all snap-start group"
                >
                  <div>
                    <h4 className="text-3xl font-bold mb-4 flex items-center justify-between tracking-tight">
                      {project.title}
                      <ExternalLink size={20} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                    </h4>
                    <p className="text-slate-500 text-base leading-relaxed mb-10 italic">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t: string) => (
                      <span key={t} className="px-3 py-1 bg-white border border-slate-200 rounded-xl text-[10px] font-mono font-bold text-slate-400 uppercase tracking-tighter">{t}</span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </BentoCard>

          {/* Technical Proficiency with Logos */}
          <BentoCard id="skills" className="md:col-span-4 p-10">
            <div className="mono-label mb-10 text-center">Technical Arsenal</div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {RESUME_DATA.skills.map((skillGroup, idx) => {
                const Icon = techIcons[skillGroup.category] || Boxes;
                return (
                  <div key={idx} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-all group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 border border-slate-200 mb-6 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all transform group-hover:rotate-6">
                      <Icon size={28} />
                    </div>
                    <h5 className="font-bold text-sm uppercase tracking-widest mb-4 text-slate-400">{skillGroup.category}</h5>
                    <div className="flex flex-wrap justify-center gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span key={i} className="text-xs font-bold text-slate-700">{skill}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </BentoCard>

          {/* Location Box */}
          <BentoCard className="flex flex-col justify-between p-10">
            <div className="mono-label">Base</div>
            <div className="mt-8">
              <div className="text-2xl font-bold flex items-center gap-2">
                <MapPin size={24} className="text-slate-900" />
                Coimbatore
              </div>
              <div className="text-xs text-slate-400 mt-2 font-mono uppercase tracking-widest leading-loose">Chennai, IN <br/> UTC+5:30</div>
            </div>
          </BentoCard>

          {/* Social Icons Bento */}
          <BentoCard className="flex flex-col gap-3 p-4 bg-slate-100 border-none shadow-none">
            <div className="grid grid-cols-2 gap-3 h-full">
              {RESUME_DATA.contact.links.map((link) => (
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-3xl flex items-center justify-center p-4 shadow-sm border border-slate-200 hover:border-slate-800 hover:text-blue-600 transition-all font-mono text-[10px] font-bold"
                >
                  {link.type === 'github' && <Github size={24} />}
                  {link.type === 'linkedin' && <Linkedin size={24} />}
                  {link.type === 'code' && <Terminal size={24} />}
                </motion.a>
              ))}
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="bg-slate-900 text-white rounded-3xl flex items-center justify-center p-4 shadow-sm hover:bg-blue-600 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </BentoCard>

          {/* Certifications Box */}
          <BentoCard variant="dark" className="md:col-span-2 p-10 border-none">
            <div className="text-slate-400 text-[10px] font-mono uppercase tracking-[0.3em] mb-8">Validations</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {RESUME_DATA.additional.certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors shrink-0">
                    <CheckCircle size={20} className="text-blue-400 group-hover:text-white" />
                  </div>
                  <div className="text-xs font-bold tracking-tight opacity-70 group-hover:opacity-100 transition-opacity leading-snug">{cert}</div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Awards/Achievements */}
          <BentoCard variant="accent" className="md:col-span-2 group">
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-sm">Achievements</div>
                <h3 className="text-3xl font-bold leading-tight mb-4 group-hover:translate-x-2 transition-transform">
                  Awarded Emerging Star @ Barclays 2025
                </h3>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest mt-12 group-hover:gap-6 transition-all">
                <span>View Timeline</span>
                <ChevronRight size={18} />
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            <Award className="absolute top-10 right-10 opacity-10 group-hover:opacity-30 transition-opacity" size={140} />
          </BentoCard>

          {/* Education Summary */}
          <BentoCard className="md:col-span-2 p-10">
            <div className="mono-label mb-8">Education</div>
            <div className="space-y-10 focus-within:ring-2">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold text-xl uppercase tracking-tighter leading-none">{edu.institution.split(',')[0]}</h5>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded-full uppercase">{edu.period}</span>
                  </div>
                  <div className="text-slate-500 font-medium text-sm mb-3">{edu.degree}</div>
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-bold border border-blue-100">
                    {edu.details}
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Full Experience Box */}
          <BentoCard id="experience" className="md:col-span-4 p-12">
            <div className="flex justify-between items-center mb-16 px-4">
              <h2 className="text-3xl font-bold tracking-tighter uppercase">Work History</h2>
              <Briefcase size={28} className="text-slate-200" />
            </div>
            <div className="space-y-16">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-16 group">
                  <div className="md:w-64 shrink-0 flex flex-col justify-between">
                    <div>
                      <div className="text-3xl font-black text-slate-900 tracking-tighter group-hover:text-blue-600 transition-colors uppercase">{exp.period.split(' ')[0]}</div>
                      <div className="text-[10px] font-mono text-slate-400 mt-2 uppercase tracking-[0.3em] font-bold">{exp.location}</div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <h4 className="text-3xl font-bold tracking-tight text-slate-900">{exp.role}</h4>
                      <span className="text-white bg-slate-900 px-4 py-2 rounded-2xl text-[11px] font-bold uppercase tracking-widest ring-4 ring-slate-100">{exp.company}</span>
                    </div>
                    <p className="text-slate-500 mb-8 max-w-3xl leading-relaxed text-lg border-l-4 border-slate-100 pl-6 italic">
                      {exp.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-4 text-sm text-slate-600 group/item">
                          <div className="w-2 h-2 rounded-full bg-slate-300 mt-2 shrink-0 group-hover/item:bg-blue-400 transition-colors"></div>
                          <span className="leading-relaxed">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Contact Section at the Bottom */}
          <BentoCard id="contact" className="md:col-span-4 p-12 bg-white flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <div className="mono-label mb-6">Get in Touch</div>
              <h2 className="text-4xl font-bold tracking-tighter mb-6">Let's work <br/> together.</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-10">
                I'm currently open to new opportunities and interesting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Mail size={18} className="text-blue-500" />
                  {RESUME_DATA.contact.email}
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <MapPin size={18} className="text-blue-500" />
                  {RESUME_DATA.contact.location}
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <ContactForm />
            </div>
          </BentoCard>

        </motion.div>

        {/* Footer Area */}
        <footer className="mt-20 pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 px-4 uppercase tracking-[0.3em] font-bold">
          <div>© {currentYear} {RESUME_DATA.name} — CRAFTED FOR GITHUB PAGES</div>
          <div className="flex gap-12">
            <span className="flex items-center gap-2 group cursor-pointer">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></div>
              DESIGN: BENTO v2
            </span>
            <span>BUILT WITH REACT 19</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

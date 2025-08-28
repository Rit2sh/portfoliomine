import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Github, Code, Mail, Award, Briefcase, GraduationCap, Lightbulb, Star, Menu, X, ArrowUp, ExternalLink, GitBranch, Download, Send, Target, Globe, Shield, Zap, Rocket, Eye } from 'lucide-react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const portfolioData = {
    name: "Ritesh Chauhan",
    titles: ["Developer", "Innovator", "Founder"],
    email: "rajputanaritesh@gmail.com",
    resumeUrl: "./RESUME_RITESH (4).pdf",
    profileImage: "profile.png",
    social: {
      linkedin: "https://linkedin.com/in/RiteshChauhan",
      github: "https://github.com/rit2sh",
      leetcode: "https://leetcode.com/",
    },
    about: "I am a passionate developer, innovator, and aspiring entrepreneur with strong expertise in software development, AI, cybersecurity, and fintech solutions. With hands-on experience in hackathons, startup building, and full-stack development, I focus on creating scalable products that solve real-world problems.",
    mission: [
      { icon: <Globe className="w-6 h-6" />, text: "Build impact-driven technology that solves problems at scale." },
      { icon: <Shield className="w-6 h-6" />, text: "Democratize AI and cybersecurity for accessible digital infrastructure." },
      { icon: <Star className="w-6 h-6" />, text: "Drive sustainability through eco-friendly innovation." },
    ],
    education: [
      {
        degree: "B.Tech in Computer Science & Engineering",
        institution: "CEC Jhanjeri",
        duration: "2022-2026",
        score: "CGPA: 6.5",
      },
      {
        degree: "Intermediate",
        institution: "S.G.D.M",
        duration: "2020-2022",
        score: "Percentage: 65%",
      },
    ],
    projects: [
      {
        featured: true,
        title: "SaarthiNet – AI + Cybersecurity for Bharat",
        technologies: ["Python", "Transformers", "NLP", "Cybersecurity"],
        description: "A voice-first AI assistant in Indian languages combined with the RakshaNet cybersecurity mesh. Empowers rural India with secure access to government and financial services. Created a Sequoia-style pitch deck and full startup roadmap.",
        liveUrl: "#",
        repoUrl: "#",
        imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop"
      },
      {
        featured: false,
        title: "CryptoBridge – Global Crypto-Fiat Payments",
        technologies: ["Fintech", "Node.js", "Blockchain"],
        description: "A concept for a Google Pay + Binance hybrid, enabling cross-border INR, USD, and crypto transactions with real-time conversion.",
        liveUrl: "#",
        repoUrl: "#",
      },
      {
        featured: false,
        title: "Smart DDoS Shield",
        technologies: ["AI", "Cloud", "Cybersecurity"],
        description: "A hackathon project to protect cloud-hosted websites from DDoS attacks, combining AI-driven detection with mitigation strategies.",
        liveUrl: "#",
        repoUrl: "#",
      },
      {
        featured: false,
        title: "REELMART – AI Video Commerce Platform",
        technologies: ["AI", "E-commerce", "Video Editing"],
        description: "An AI-powered platform for shoppable reels with automated editing, helping creators launch businesses in one click.",
        liveUrl: "#",
        repoUrl: "#",
      },
    ],
    experience: [
      {
        type: "Internship",
        role: "Intern – Software Development",
        company: "Oasis Infobyte",
        duration: "Jun 2024 - Jul 2024",
      },
      {
        type: "Hackathons",
        role: "Participant",
        company: "Flipkart Grid, IBM Xchange, Smart India Hackathon",
        duration: "2024",
      },
      {
        type: "Founder Roles",
        role: "Founder",
        company: "SaarthiNet, EcoCutlery, REELMART",
        duration: "Ongoing",
      },
    ],
    skills: {
      "Programming": ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
      "Frontend": ["ReactJS", "HTML/CSS", "D3.js", "GatsbyJS"],
      "Backend": ["NodeJS", "MongoDB", "MySQL", "PostgreSQL"],
      "AI/ML": ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
      "Cloud": ["AWS", "GCP", "Azure", "Docker", "Kubernetes"],
      "Other": ["Blockchain", "Cybersecurity", "Git", "Linux"],
    },
    achievements: [
      { title: "IBM Xchange", platform: "Selected", icon: <Award className="w-8 h-8" /> },
      { title: "Multiple MVPs", platform: "Built", icon: <Rocket className="w-8 h-8" /> },
      { title: "Startup Roadmaps", platform: "Created", icon: <Target className="w-8 h-8" /> },
      { title: "Hackathons", platform: "Participated", icon: <Zap className="w-8 h-8" /> }
    ],
    futureVision: [
      "Build SaarthiNet into India's leading AI + cybersecurity platform.",
      "Scale EcoCutlery to reduce single-use plastic globally.",
      "Launch CryptoBridge for seamless cross-border payments.",
      "Expand REELMART into the future of video-first commerce."
    ],
    certifications: [
      "Programming in Python (UDEMY)",
      "Full Stack Development (UDEMY)",
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
      
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    if (!isLoading) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-black text-white font-mono relative overflow-x-hidden selection:bg-cyan-400 selection:text-black">
      <MouseGlow position={mousePosition} />
      <FloatingParticles />
      <Header portfolioData={portfolioData} activeSection={activeSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <HeroSection portfolioData={portfolioData} />
        <AboutSection portfolioData={portfolioData} />
        <SkillsSection portfolioData={portfolioData} />
        <ProjectsSection portfolioData={portfolioData} />
        <ExperienceSection portfolioData={portfolioData} />
        <AchievementsSection portfolioData={portfolioData} />
        <ContactSection portfolioData={portfolioData} />
      </main>
      <Footer portfolioData={portfolioData} />
      <BackToTopButton show={showBackToTop} onClick={scrollToTop} />
    </div>
  );
};

const Loader = () => (
  <div className="fixed inset-0 bg-black flex items-center justify-center z-[100] font-mono">
    <div className="text-center">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-cyan-400/20 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-cyan-400 rounded-full animate-spin"></div>
        </div>
        <div className="absolute inset-0 w-20 h-20 border-4 border-pink-400/20 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-pink-400 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
        </div>
      </div>
      <div className="mt-8 text-cyan-400 text-xl font-bold tracking-wider animate-pulse">
        LOADING...
      </div>
      <div className="mt-4 flex space-x-1">
        {[0, 1, 2].map(i => (
          <div key={i} className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
        ))}
      </div>
    </div>
  </div>
);

const MouseGlow = ({ position }) => (
  <div 
    className="fixed w-96 h-96 pointer-events-none z-10 mix-blend-screen"
    style={{
      left: position.x - 192,
      top: position.y - 192,
      background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, rgba(236, 72, 153, 0.05) 50%, transparent 70%)',
    }}
  />
);

const FloatingParticles = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 4}s`
        }}
      />
    ))}
  </div>
);

const Header = ({ portfolioData, activeSection, isMenuOpen, setIsMenuOpen }) => {
  const navLinks = ["home", "about", "skills", "projects", "experience", "contact"];
  
  const NavLink = ({ href, children }) => (
    <a 
      href={`#${href}`} 
      onClick={(e) => { 
        e.preventDefault(); 
        document.querySelector(`#${href}`)?.scrollIntoView({ behavior: 'smooth' }); 
        setIsMenuOpen(false); 
      }} 
      className={`relative px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 group ${
        activeSection === href ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
      }`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 transition-all duration-300 ${
        activeSection === href ? 'w-full' : 'w-0 group-hover:w-full'
      }`}></span>
    </a>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          &lt;RITESH /&gt;
        </div>
        
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map(link => (
            <NavLink key={link} href={link}>{link}</NavLink>
          ))}
          <a 
            href={portfolioData.resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-4 px-6 py-2 border-2 border-cyan-400 text-cyan-400 font-bold uppercase tracking-wider hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center gap-2 group"
          >
            <Download size={18} className="group-hover:animate-bounce"/> RESUME
          </a>
        </nav>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 hover:text-cyan-400 transition-colors"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800">
          <nav className="flex flex-col items-center py-6 space-y-4">
            {navLinks.map(link => (
              <NavLink key={link} href={link}>{link}</NavLink>
            ))}
            <a 
              href={portfolioData.resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 px-6 py-2 border-2 border-cyan-400 text-cyan-400 font-bold uppercase tracking-wider hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18}/> RESUME
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

const NeonBox = ({ children, className = "", glowColor = "cyan" }) => (
  <div className={`relative bg-gray-900/50 backdrop-blur-lg border-2 ${
    glowColor === 'cyan' ? 'border-cyan-400/50' : 
    glowColor === 'pink' ? 'border-pink-400/50' : 
    'border-green-400/50'
  } rounded-lg ${className}`} 
  style={{
    boxShadow: `0 0 20px ${
      glowColor === 'cyan' ? 'rgba(6, 182, 212, 0.3)' : 
      glowColor === 'pink' ? 'rgba(236, 72, 153, 0.3)' : 
      'rgba(34, 197, 94, 0.3)'
    }`
  }}>
    {children}
  </div>
);

const GlitchText = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <span className="relative z-10">{children}</span>
    <span className="absolute top-0 left-0 text-cyan-400 opacity-70 animate-glitch-1" aria-hidden="true">{children}</span>
    <span className="absolute top-0 left-0 text-pink-400 opacity-70 animate-glitch-2" aria-hidden="true">{children}</span>
  </div>
);

const HeroSection = ({ portfolioData }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % portfolioData.titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [portfolioData.titles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <img 
              src={portfolioData.profileImage} 
              alt="Ritesh Chauhan" 
              className="w-40 h-40 mx-auto rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-400/50 hover:shadow-pink-400/50 transition-all duration-500"
            />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          <div className="text-sm uppercase tracking-widest text-cyan-400 mb-4 font-bold">
            &lt; HELLO WORLD /&gt;
          </div>

          <GlitchText className="text-6xl md:text-8xl font-black mb-6">
            RITESH
          </GlitchText>

          <div className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center">
            <span className="text-pink-400 font-bold animate-typewriter">
              {portfolioData.titles[titleIndex]}
            </span>
          </div>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting the future through <span className="text-cyan-400 font-bold">innovative code</span> and 
            <span className="text-pink-400 font-bold"> cutting-edge solutions</span>
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: <Github size={32} />, href: portfolioData.social.github, color: "hover:text-cyan-400" },
              { icon: <Linkedin size={32} />, href: portfolioData.social.linkedin, color: "hover:text-pink-400" },
              { icon: <Code size={32} />, href: portfolioData.social.leetcode, color: "hover:text-green-400" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <button 
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-black uppercase tracking-wider hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto group"
          >
            <Eye size={20} className="group-hover:animate-pulse" />
            VIEW MY WORK
          </button>
        </div>
      </div>
    </section>
  );
};

const AboutSection = ({ portfolioData }) => (
  <section id="about" className="py-20 relative">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4">
          <span className="text-cyan-400">&lt;</span>
          ABOUT
          <span className="text-pink-400">/&gt;</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <NeonBox className="p-8 mb-12">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {portfolioData.about}
          </p>
          
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            MISSION & VALUES
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioData.mission.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="text-cyan-400 mb-4 flex justify-center group-hover:text-pink-400 transition-colors duration-300">
                  {item.icon}
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </NeonBox>
      </div>
    </div>
  </section>
);

const SkillsSection = ({ portfolioData }) => (
  <section id="skills" className="py-20 relative">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4">
          <span className="text-cyan-400">&lt;</span>
          SKILLS
          <span className="text-pink-400">/&gt;</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(portfolioData.skills).map(([category, skills], index) => (
            <NeonBox key={category} className="p-6" glowColor={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'pink' : 'green'}>
              <h3 className="text-2xl font-bold mb-6 text-center text-white">
                {category.toUpperCase()}
              </h3>
              <div className="space-y-3">
                {skills.map((skill, skillIndex) => (
                  <div key={skill} className="flex items-center justify-between bg-gray-800/50 p-3 rounded hover:bg-gray-700/50 transition-colors duration-300">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                ))}
              </div>
            </NeonBox>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ProjectsSection = ({ portfolioData }) => {
  const featuredProject = portfolioData.projects.find(p => p.featured);
  const otherProjects = portfolioData.projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            <span className="text-cyan-400">&lt;</span>
            PROJECTS
            <span className="text-pink-400">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {featuredProject && (
            <NeonBox className="mb-12 overflow-hidden" glowColor="pink">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredProject.imageUrl} 
                    alt={featuredProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="text-pink-400 font-bold mb-2 uppercase tracking-wider">
                    FEATURED PROJECT
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    {featuredProject.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-gray-800 text-cyan-400 text-sm font-bold border border-cyan-400/50 hover:bg-cyan-400/10 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={featuredProject.liveUrl} 
                      className="flex items-center gap-2 text-cyan-400 hover:text-white font-bold uppercase tracking-wider transition-colors duration-300"
                    >
                      <ExternalLink size={18} /> LIVE
                    </a>
                    <a 
                      href={featuredProject.repoUrl} 
                      className="flex items-center gap-2 text-pink-400 hover:text-white font-bold uppercase tracking-wider transition-colors duration-300"
                    >
                      <GitBranch size={18} /> CODE
                    </a>
                  </div>
                </div>
              </div>
            </NeonBox>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <NeonBox key={index} className="p-6 group hover:scale-105 transition-transform duration-300" glowColor="cyan">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-gray-800 text-green-400 text-xs font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center gap-2 text-cyan-400 hover:text-white font-bold text-sm uppercase tracking-wider transition-colors duration-300"
                  >
                    <ExternalLink size={16} /> LIVE
                  </a>
                  <a 
                    href={project.repoUrl} 
                    className="flex items-center gap-2 text-pink-400 hover:text-white font-bold text-sm uppercase tracking-wider transition-colors duration-300"
                  >
                    <GitBranch size={16} /> CODE
                  </a>
                </div>
              </NeonBox>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = ({ portfolioData }) => (
  <section id="experience" className="py-20 relative">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4">
          <span className="text-cyan-400">&lt;</span>
          EXPERIENCE
          <span className="text-pink-400">/&gt;</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-pink-400"></div>
          
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative flex items-center mb-12">
              <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black"></div>
              <div className="ml-20">
                <NeonBox className="p-6" glowColor={index % 2 === 0 ? 'cyan' : 'pink'}>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="text-cyan-400" size={20} />
                    <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-pink-400 font-semibold mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.duration}</p>
                </NeonBox>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const AchievementsSection = ({ portfolioData }) => (
  <section id="achievements" className="py-20 relative">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4">
          <span className="text-cyan-400">&lt;</span>
          ACHIEVEMENTS
          <span className="text-pink-400">/&gt;</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.achievements.map((achievement, index) => (
            <NeonBox 
              key={index} 
              className="p-6 text-center group hover:scale-105 transition-all duration-300" 
              glowColor={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'pink' : 'green'}
            >
              <div className="text-cyan-400 mb-4 flex justify-center group-hover:text-pink-400 transition-colors duration-300 group-hover:animate-bounce">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                {achievement.platform}
              </p>
            </NeonBox>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = ({ portfolioData }) => (
  <section id="contact" className="pt-20 pb-10 relative">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4">
          <span className="text-cyan-400">&lt;</span>
          CONTACT
          <span className="text-pink-400">/&gt;</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        <NeonBox className="p-10" glowColor="pink">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              LET'S BUILD SOMETHING AMAZING
            </h3>
            <p className="text-xl text-gray-300">
              Ready to turn ideas into reality? Let's connect and create the future together.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="YOUR NAME" 
                  className="w-full bg-gray-900 border-2 border-cyan-400/50 p-4 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 font-mono"
                  required 
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL" 
                  className="w-full bg-gray-900 border-2 border-cyan-400/50 p-4 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 font-mono"
                  required 
                />
              </div>
            </div>
            
            <div className="relative">
              <textarea 
                placeholder="YOUR MESSAGE" 
                rows="6" 
                className="w-full bg-gray-900 border-2 border-cyan-400/50 p-4 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 font-mono resize-none"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button 
                type="submit" 
                className="px-12 py-4 bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-black uppercase tracking-wider hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto group"
              >
                <Send size={20} className="group-hover:animate-pulse" />
                SEND MESSAGE
              </button>
            </div>
          </form>
        </NeonBox>
      </div>
    </div>
  </section>
);

const Footer = ({ portfolioData }) => (
  <footer className="py-12 bg-gray-900/50 border-t-2 border-cyan-400/20 relative">
    <div className="container mx-auto px-6 text-center">
      <div className="flex justify-center space-x-8 mb-8">
        {[
          { icon: <Github size={32} />, href: portfolioData.social.github, color: "hover:text-cyan-400" },
          { icon: <Linkedin size={32} />, href: portfolioData.social.linkedin, color: "hover:text-pink-400" },
          { icon: <Code size={32} />, href: portfolioData.social.leetcode, color: "hover:text-green-400" }
        ].map((social, index) => (
          <a 
            key={index}
            href={social.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
          >
            {social.icon}
          </a>
        ))}
      </div>
      
      <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
        &lt;RITESH /&gt;
      </div>
      
      <p className="text-gray-400 font-mono">
        Designed & Coded with <span className="text-pink-400 animate-pulse">❤️</span> by{' '}
        <span className="font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          {portfolioData.name}
        </span>
      </p>
      
      <p className="text-gray-500 text-sm mt-2 font-mono">
        &copy; {new Date().getFullYear()} - Keep Building, Keep Innovating
      </p>
    </div>
  </footer>
);

const BackToTopButton = ({ show, onClick }) => (
  <button 
    onClick={onClick} 
    className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-bold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 z-50 group ${
      show ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
    }`}
  >
    <ArrowUp size={24} className="mx-auto group-hover:animate-bounce" />
  </button>
);

// Add custom CSS animations
const style = document.createElement('style');
// === CODE UPDATED HERE ===
style.textContent = `
  html, body {
    overflow-x: hidden;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes glitch-1 {
    0% { clip-path: polygon(0 0, 100% 0, 100% 5%, 0 5%); }
    5% { clip-path: polygon(0 0, 100% 0, 100% 10%, 0 10%); }
    10% { clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%); }
    15% { clip-path: polygon(0 10%, 100% 10%, 100% 30%, 0 30%); }
    20% { clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%); }
    100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
  }
  
  @keyframes glitch-2 {
    0% { clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%); }
    10% { clip-path: polygon(0 80%, 100% 80%, 100% 90%, 0 90%); }
    20% { clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%); }
    30% { clip-path: polygon(0 90%, 100% 90%, 100% 100%, 0 100%); }
    100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
  }
  
  .animate-float { animation: float 6s ease-in-out infinite; }
  .animate-glitch-1 { animation: glitch-1 0.3s infinite linear alternate-reverse; }
  .animate-glitch-2 { animation: glitch-2 0.3s infinite linear alternate-reverse; }
  
  .bg-grid-pattern {
    background-image: 
      linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
  }
  
  .animate-typewriter {
    overflow: hidden;
    border-right: 2px solid rgba(236, 72, 153, 1);
    white-space: nowrap;
    animation: typing 2s steps(20, end), blink-caret 0.75s step-end infinite;
  }
  
  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }
  
  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: rgba(236, 72, 153, 1); }
  }
`;
document.head.appendChild(style);

export default App;
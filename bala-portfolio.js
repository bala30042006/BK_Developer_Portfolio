const { useState, useEffect } = React;

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav>
      <div className="nav-container">
        <a href="#home" className="logo">BK</a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: isMenuOpen ? '0' : '1' }}></span>
          <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </div>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Bala Krishnan</h1>
        <p className="hero-role">Web Developer | Full Stack Developer</p>
        <p className="hero-description">
          Computer Science Engineering student passionate about building modern web applications 
          and continuously learning new technologies.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Contact Me</a>
          <a href="https://drive.google.com/file/d/1_SUBfz7SZQkbaqDQ0tNNxVPx_Ap6MD1N/view?usp=drivesdk" className="btn btn-secondary">Download Resume</a>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/bala-krishnan-5a2a582ba?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="social-link" target="_blank" rel="noopener noreferrer">
            IN
          </a>
          <a href="https://github.com/bala30042006" className="social-link" target="_blank" rel="noopener noreferrer">
            GH
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src="./images/hero_img.png" alt="Bala Krishnan" className="profile-image" />
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Get to know me better</p>
      
      <div className="about-grid">
        <div className="about-content">
          <div className="about-card">
            <h3>Who I Am</h3>
            <p>
              I am a Computer Science Engineering student with a strong interest in web development 
              and full-stack technologies. I enjoy building practical web applications and learning 
              new technologies. I have gained hands-on experience through a Web Development Internship 
              and academic/personal projects. I am adaptable, a quick learner, and interested in 
              solving real-world problems through technology.
            </p>
          </div>

          <div className="about-card">
            <h3>Education</h3>
            <p>
              <strong>B.E. Computer Science and Engineering</strong><br/>
              Jeppiaar Institute of Technology, Chennai<br/>
              2023 – 2027
            </p>
          </div>

          <div className="about-card">
            <h3>Current Focus</h3>
            <p>
              Currently exploring full-stack development with React.js, Node.js, and modern web 
              technologies. Actively working on personal projects and continuously expanding my 
              technical skills.
            </p>
          </div>
        </div>

        <div className="about-image">
          <img src="./images/about_img.jpg" alt="Bala Krishnan" className="about-pic" />
        </div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = () => {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">My professional journey</p>
      
      <div className="experience-card">
        <div className="experience-header">
          <div>
            <h3 className="experience-title">Web Development Intern</h3>
            <p className="experience-company">[Company Name]</p>
          </div>
          <span className="experience-duration">40 Days</span>
        </div>

        <div className="experience-phase">
          <h4>Phase 1: Website Cloning</h4>
          <ul>
            <li>Learned HTML, CSS, and JavaScript fundamentals</li>
            <li>Understood responsive UI and website structure</li>
            <li>Gained exposure to frontend development concepts</li>
            <li>Built multiple website clones for practice</li>
          </ul>
        </div>

        <div className="experience-phase">
          <h4>Phase 2: Development Tasks</h4>
          <ul>
            <li>Worked with React.js for UI development</li>
            <li>Created reusable components and understood state management</li>
            <li>Learned debugging techniques and problem-solving</li>
            <li>Gained exposure to real-world application workflows</li>
            <li>Basic understanding of frontend/backend integration</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// Skills Section with real logos
const Skills = () => {
  const getSkillLogo = (skillName) => {
    const logos = {
      'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    };
    return logos[skillName];
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "⚛️",
      skills: [
        { name: "HTML", level: "Intermediate" },
        { name: "CSS", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "Bootstrap", level: "Beginner" },
        { name: "React.js", level: "Beginner" }
      ]
    },
    {
      title: "Backend Development",
      icon: "🔧",
      skills: [
        { name: "Node.js", level: "Beginner" },
        { name: "Express.js", level: "Beginner" }
      ]
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: "Beginner" },
        { name: "SQL", level: "Beginner" }
      ]
    },
    {
      title: "Programming",
      icon: "💻",
      skills: [
        { name: "Python", level: "Beginner" },
        { name: "JavaScript", level: "Intermediate" }
      ]
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: [
        { name: "Git", level: "Beginner" },
        { name: "GitHub", level: "Beginner" },
        { name: "VS Code", level: "Intermediate" }
      ]
    },
    {
      title: "Concepts",
      icon: "📚",
      skills: [
        { name: "React Components", level: "Beginner" },
        { name: "Props & State", level: "Beginner" },
        { name: "Hooks", level: "Beginner" },
        { name: "REST API", level: "Beginner" },
        { name: "CRUD Operations", level: "Beginner" },
        { name: "Responsive Design", level: "Intermediate" },
        {name:"Video Editing Concepts", level: "Intermediate" }
      ]
    }
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Technologies I work with</p>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.icon} {category.title}</h3>
            <div className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {getSkillLogo(skill.name) && (
                    <img src={getSkillLogo(skill.name)} alt={skill.name} className="skill-logo" />
                  )}
                  {skill.name}
                  <span className="skill-level">({skill.level})</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: "Help Desk Ticket Management System",
      category: "Web Development / React.js",
      description: "A web-based Help Desk Ticket Management System designed to help users raise support tickets and allow support agents to manage and track them efficiently.",
      features: ["Ticket Creation", "Status Management", "Priority Management", "Dashboard", "Role-based Views"],
      tech: ["React.js", "JavaScript", "HTML", "CSS", "Local Storage"],
      image: "./images/HelpDesk.jpg",
      github: "https://github.com/bala30042006/lcnc-final-one",
      demo: "[ADD_LIVE_DEMO_LINK]"
    },
    {
      title: "AI Smart Salon Assistant",
      category: "AI + Web Application",
      description: "An AI-powered salon assistant concept that helps customers visualize suitable hairstyles before getting a haircut. The system analyzes facial features and provides personalized hairstyle recommendations.",
      features: ["Face Analysis", "Hairstyle Recommendations", "Virtual Preview", "Multi-angle Capture"],
      tech: ["React.js", "TypeScript", "AI/Computer Vision", "MediaPipe"],
      image: "./images/AIsmartsalon.jpg",
      github: "[ADD_GITHUB_LINK]",
      demo: "[ADD_LIVE_DEMO_LINK]"
    },
    {
      title: "LCNC Hospital Management System",
      category: "Low-Code / No-Code Application",
      description: "A hospital management application developed using a Low-Code/No-Code approach to understand rapid application development, workflow design, and data management.",
      features: ["Patient Management", "Appointment Management", "Workflow Automation", "Role-based Access"],
      tech: ["Low-Code/No-Code", "Workflow Design", "Data Management"],
      image: "./images/LCNC.jpg",
      github: "https://github.com/bala30042006/lcnc-final-one",
      demo: "https://lcnc-fertility.netlify.app/"
    },
    {
      title: "Smart Education Platform",
      category: "Web Development / EdTech",
      description: "An educational platform designed to help students access learning resources, track progress, and engage with interactive course materials.",
      features: ["Resource Access", "Progress Tracking", "Interactive Content", "User Management"],
      tech: ["React.js", "Node.js", "MongoDB"],
      image: "./images/smarteru.jpg",
      github: "https://github.com/bala30042006/school-smart-education-web",
      demo: "https://elevate-edu.netlify.app/"
    }
  ];

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">What I've built</p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <div className="feature-list">
                  {project.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a 
                  href={project.github} 
                  className="project-btn github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    className="project-btn demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact Section with professional icons
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
  };

  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="section-subtitle">Let's connect</p>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="contact-details">
              <h4>Email</h4>
              <p><a href="mailto:balakrishnan201212@gmail.com">balakrishnan201212@gmail.com</a></p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="contact-details">
              <h4>Phone</h4>
              <p>+91 9345657728</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="contact-details">
              <h4>Location</h4>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <div className="contact-details">
              <h4>LinkedIn</h4>
              <p><a href="https://www.linkedin.com/in/bala-krishnan-5a2a582ba?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">LINKEDIN PROFILE</a></p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </div>
            <div className="contact-details">
              <h4>GitHub</h4>
              <p><a href="https://github.com/bala30042006" target="_blank" rel="noopener noreferrer">GITHUB PROFILE</a></p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>

          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="footer-copyright">
          © 2025 Bala Krishnan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

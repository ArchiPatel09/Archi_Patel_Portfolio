import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import ProjectCard from '../../components/cards/ProjectCard';
import Button from '../../components/common/Button';
import { projects, skills } from '../../data/projects';
import './home.css';

const Home = () => {
  const [featuredProjects] = useState(projects.uiflix.filter(p => p.featured));

  const channels = [
    {
      name: 'UIFLIX',
      path: '/uiflix',
      accentColor: '#e50914',
      tagline: 'Frontend Engineering & UI Experiences',
      icon: '🎨'
    },
    {
      name: 'SERVE PRIME',
      path: '/serve-prime',
      accentColor: '#1f6feb',
      tagline: 'Backend & Infrastructure Architecture',
      icon: '⚙️'
    },
    {
      name: 'DATA ARENA',
      path: '/data-arena',
      accentColor: '#00d1ff',
      tagline: 'Database Design & Data Engineering',
      icon: '📊'
    },
    {
      name: 'CREATIVE STUDIO',
      path: '/creative-studio',
      accentColor: '#c77dff',
      tagline: 'Design Systems & Creative Direction',
      icon: '✨'
    },
    {
      name: "FOUNDER'S CUT",
      path: '/founders-cut',
      accentColor: '#f5c77a',
      tagline: 'Startup Ideas & Business Mindset',
      icon: '🚀'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero section">
        <div className="container">
          <motion.div
  className="hero-content"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Add your photo above the name */}
  <motion.div
    className="profile-image-container"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.5 }}
  >
    <img
      src={require('../../assets/profile.jpg')} // Change path to your photo
      alt="Archi Patel"
      className="profile-image"
    />
    <div className="profile-image-glow"></div>
  </motion.div>
  
  <h1 className="hero-title">
    ARCHI <span className="gradient-text">PATEL</span>
  </h1>
  <h2 className="hero-subtitle">
    Frontend / Full-Stack Developer
  </h2>
  <p className="hero-description">
    Building scalable, cinematic web experiences with modern technologies
  </p>
            <div className="hero-actions">
              <Button
                variant="primary"
                size="large"
                accentColor="#e50914"
                onClick={() => document.getElementById('featured-projects').scrollIntoView()}
              >
                View Work
                <ArrowRight size={20} />
              </Button>
              <Button
                variant="secondary"
                size="large"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Resume
                <Download size={20} />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Now Streaming Section */}
      <section className="streaming section">
        <div className="container">
          <h2 className="section-title">Now Streaming</h2>
          <p className="section-subtitle">
            Explore my skills and projects through specialized channels
          </p>
          <div className="channels-grid">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={channel.path}
                  className="channel-card"
                  style={{ '--accent-color': channel.accentColor }}
                >
                  <div className="channel-header">
                    <span className="channel-icon">{channel.icon}</span>
                    <h3 className="channel-name">{channel.name}</h3>
                  </div>
                  <p className="channel-tagline">{channel.tagline}</p>
                  <div className="channel-hover-content">
                    <span className="hover-text">Explore Channel</span>
                    <ArrowRight size={20} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="projects section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Highlighted work from various channels
          </p>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  tags={project.tags}
                  shortDesc={project.shortDesc}
                  accentColor={project.accentColor}
                  featured={true}
                  size="large"
                  onClick={() => window.location.href = `/uiflix#${project.id}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Snapshot */}
      <section className="skills section">
        <div className="container">
          <h2 className="section-title">Skill Snapshot</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title" style={{ color: '#e50914' }}>
                Frontend
              </h3>
              <ul className="skill-list">
                {skills.frontend.map((skill, index) => (
                  <li key={index} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title" style={{ color: '#1f6feb' }}>
                Backend
              </h3>
              <ul className="skill-list">
                {skills.backend.map((skill, index) => (
                  <li key={index} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title" style={{ color: '#00d1ff' }}>
                Database
              </h3>
              <ul className="skill-list">
                {skills.database.map((skill, index) => (
                  <li key={index} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title" style={{ color: '#c77dff' }}>
                Design
              </h3>
              <ul className="skill-list">
                {skills.design.map((skill, index) => (
                  <li key={index} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">About / Story</h2>
            <div className="about-text">
              <p>
                I'm a passionate developer who believes in creating digital experiences that feel cinematic and memorable.
                With a background in both engineering and design, I bridge the gap between technical excellence and
                user delight.
              </p>
              <p>
                Currently focused on building scalable streaming platforms and interactive web applications
                that push the boundaries of modern web technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to build something amazing?</h2>
            <p className="cta-subtitle">
              Let's connect and discuss how we can create cinematic digital experiences together.
            </p>
            <div className="cta-actions">
              <Button
                variant="primary"
                size="large"
                accentColor="#e50914"
                onClick={() => window.location.href = 'mailto:archipatel239@gmail.com'}
              >
                <Mail size={20} />
                Contact Me
              </Button>
              <div className="social-links">
                <a
                  href="https://github.com/ArchiPatel099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/archi-patel09/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
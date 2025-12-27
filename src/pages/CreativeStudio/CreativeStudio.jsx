import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Layout, Brush, Eye, Sparkles } from 'lucide-react';
import Button from '../../components/common/Button';
import './creativestudio.css';

const CreativeStudio = () => {
  const designProjects = [
    {
      title: 'Design System v3.0',
      description: 'Complete design system for streaming platform with 100+ components',
      tags: ['Figma', 'Storybook', 'React'],
      color: '#c77dff'
    },
    {
      title: 'Brand Identity - CineFlow',
      description: 'Logo design and brand guidelines for video streaming service',
      tags: ['Illustrator', 'Branding', 'Typography'],
      color: '#c77dff'
    },
    {
      title: 'UI Animation Library',
      description: 'Micro-interactions and motion design system',
      tags: ['After Effects', 'Lottie', 'Framer Motion'],
      color: '#c77dff'
    }
  ];

  const skills = [
    { icon: <Palette size={24} />, title: 'UI/UX Design', level: 'Expert' },
    { icon: <Brush size={24} />, title: 'Visual Design', level: 'Advanced' },
    { icon: <Layout size={24} />, title: 'Design Systems', level: 'Expert' },
    { icon: <Sparkles size={24} />, title: 'Motion Design', level: 'Advanced' }
  ];

  return (
    <div className="creativestudio-page">
      {/* Hero Section */}
      <section className="creativestudio-hero section">
        <div className="container">
          <motion.div
            className="creativestudio-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="creativestudio-title">CREATIVE STUDIO</h1>
            <h2 className="creativestudio-subtitle">Design Systems & Creative Direction</h2>
            <p className="creativestudio-description">
              Crafting visually stunning experiences through thoughtful design systems,
              brand identities, and motion design that elevate digital products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="design-skills section">
        <div className="container">
          <h3 className="section-subtitle">Design Expertise</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ '--accent-color': '#c77dff' }}
              >
                <div className="skill-icon" style={{ color: '#c77dff' }}>
                  {skill.icon}
                </div>
                <h4 className="skill-title">{skill.title}</h4>
                <span className="skill-level">{skill.level}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="design-projects section">
        <div className="container">
          <h3 className="section-subtitle">Design Projects</h3>
          <div className="projects-grid">
            {designProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                style={{ '--accent-color': project.color }}
              >
                <div className="project-header">
                  <h4 className="project-title">{project.title}</h4>
                  <Eye size={20} />
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exit CTA */}
      <section className="exit-cta section">
        <div className="container">
          <div className="exit-cta-content">
            <h3 className="exit-cta-title">Explore business and startup ideas?</h3>
            <Link to="/founders-cut">
              <Button
                variant="secondary"
                size="large"
                accentColor="#f5c77a"
              >
                Founder's Cut
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreativeStudio;
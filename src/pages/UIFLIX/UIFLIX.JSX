import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import ProjectCard from '../../components/cards/ProjectCard';
import Button from '../../components/common/Button';
import { projects } from '../../data/projects';
import './uiflix.css';

const UIFLIX = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showDetail, setShowDetail] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'React', 'UI/UX', 'Animations', 'Performance'];
  const uiProjects = projects.uiflix;

  const filteredProjects = selectedFilter === 'All' 
    ? uiProjects 
    : uiProjects.filter(project => project.tags.includes(selectedFilter));

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowDetail(true);
  };

  const featuredProjects = uiProjects.filter(p => p.featured);

  return (
    <div className="uiflix-page">
      {/* Hero */}
      <section className="uiflix-hero section">
        <div className="container">
          <motion.div
            className="uiflix-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="uiflix-title">UIFLIX</h1>
            <h2 className="uiflix-subtitle">Frontend Engineering & UI Experiences</h2>
            <p className="uiflix-description">
              Crafting immersive user interfaces with a focus on performance, 
              accessibility, and cinematic motion design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="featured-carousel section">
        <div className="container">
          <h3 className="section-subtitle">Featured Work</h3>
          <div className="carousel-container">
            <div className="carousel-track">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="carousel-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard
                    {...project}
                    size="large"
                    onClick={() => handleProjectClick(project)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Grid with Filter */}
      <section className="all-projects section">
        <div className="container">
          <div className="projects-header">
            <h3 className="section-subtitle">All Projects</h3>
            <div className="filter-controls">
              <Filter size={20} />
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(filter)}
                  style={{
                    '--accent-color': selectedFilter === filter ? '#e50914' : '#6f748c'
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard
                  {...project}
                  size="medium"
                  onClick={() => handleProjectClick(project)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Frontend Skills Summary */}
      <section className="skills-summary section">
        <div className="container">
          <h3 className="section-subtitle">Frontend Skills Summary</h3>
          <div className="skills-list">
            {[
              { name: 'React & Ecosystem', level: 'Expert' },
              { name: 'TypeScript', level: 'Advanced' },
              { name: 'Modern CSS & Styling', level: 'Expert' },
              { name: 'Animation & Motion', level: 'Advanced' },
              { name: 'Performance Optimization', level: 'Advanced' },
              { name: 'Accessibility (a11y)', level: 'Advanced' },
              { name: 'Component Architecture', level: 'Expert' },
              { name: 'Build Tools & CI/CD', level: 'Advanced' },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{
                      width: skill.level === 'Expert' ? '95%' : 
                             skill.level === 'Advanced' ? '85%' : '75%',
                      backgroundColor: '#e50914'
                    }}
                  />
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
            <h3 className="exit-cta-title">Ready to explore backend architecture?</h3>
            <Link to="/serve-prime">
              <Button
                variant="secondary"
                size="large"
                accentColor="#1f6feb"
              >
                Explore Backend Engineering
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {showDetail && selectedProject && (
        <motion.div
          className="project-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowDetail(false)}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setShowDetail(false)}
              aria-label="Close modal"
            >
              ×
            </button>
            
            <div className="modal-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-tagline">{selectedProject.shortDesc}</p>
              <div className="modal-tags">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="modal-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>Problem Statement</h4>
                <p>{selectedProject.problem}</p>
              </div>

              <div className="modal-section">
                <h4>Solution</h4>
                <p>{selectedProject.solution}</p>
              </div>

              <div className="modal-section">
                <h4>Key Challenges</h4>
                <p>{selectedProject.challenges}</p>
              </div>

              <div className="modal-section">
                <h4>Learnings</h4>
                <p>{selectedProject.learnings}</p>
              </div>

              <div className="modal-section">
                <h4>Tech Stack</h4>
                <div className="tech-stack">
                  {selectedProject.techStack.map((tech, index) => (
                    <span key={index} className="tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <Button
                  variant="primary"
                  accentColor="#e50914"
                  onClick={() => window.open(selectedProject.githubLink, '_blank')}
                >
                  View GitHub
                </Button>
                <Button
                  variant="secondary"
                  accentColor="#e50914"
                  onClick={() => window.open(selectedProject.liveDemo, '_blank')}
                >
                  Live Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default UIFLIX;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Database, Cloud, Shield } from 'lucide-react';
import ProjectCard from '../../components/cards/ProjectCard';
import Button from '../../components/common/Button';
import { projects } from '../../data/projects';
import './serveprime.css';

const ServePrime = () => {
  const backendProjects = projects.servePrime || [];
  
  const backendSkills = [
    {
      icon: <Server size={24} />,
      title: 'API Architecture',
      description: 'REST, GraphQL, WebSocket APIs',
      color: '#1f6feb'
    },
    {
      icon: <Database size={24} />,
      title: 'Database Design',
      description: 'SQL/NoSQL optimization',
      color: '#1f6feb'
    },
    {
      icon: <Cloud size={24} />,
      title: 'Cloud Infrastructure',
      description: 'AWS, Docker, Kubernetes',
      color: '#1f6feb'
    },
    {
      icon: <Shield size={24} />,
      title: 'Security',
      description: 'Auth, Encryption, Compliance',
      color: '#1f6feb'
    }
  ];

  return (
    <div className="serveprime-page">
      {/* Hero */}
      <section className="serveprime-hero section">
        <div className="container">
          <motion.div
            className="serveprime-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="serveprime-title">SERVE PRIME</h1>
            <h2 className="serveprime-subtitle">Backend & Infrastructure Architecture</h2>
            <p className="serveprime-description">
              Building scalable, reliable backend systems that power cinematic experiences
              with robust APIs, microservices, and cloud infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="backend-skills section">
        <div className="container">
          <h3 className="section-subtitle">Backend Engineering Expertise</h3>
          <div className="skills-grid">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ '--accent-color': skill.color }}
              >
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <h4 className="skill-title">{skill.title}</h4>
                <p className="skill-description">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="backend-projects section">
        <div className="container">
          <h3 className="section-subtitle">Infrastructure Projects</h3>
          <div className="projects-grid">
            {backendProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard
                  {...project}
                  size="medium"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram Placeholder */}
      <section className="architecture section">
        <div className="container">
          <h3 className="section-subtitle">System Architecture</h3>
          <div className="architecture-diagram">
            <div className="diagram-node" style={{ '--accent-color': '#1f6feb' }}>
              <div className="node-label">Load Balancer</div>
            </div>
            <div className="diagram-arrow">→</div>
            <div className="diagram-node" style={{ '--accent-color': '#1f6feb' }}>
              <div className="node-label">API Gateway</div>
            </div>
            <div className="diagram-arrow">→</div>
            <div className="diagram-node" style={{ '--accent-color': '#1f6feb' }}>
              <div className="node-label">Microservices</div>
            </div>
            <div className="diagram-arrow">→</div>
            <div className="diagram-node" style={{ '--accent-color': '#1f6feb' }}>
              <div className="node-label">Databases</div>
            </div>
          </div>
          <p className="architecture-description">
            Scalable microservices architecture with API gateway routing, 
            container orchestration, and distributed caching layers.
          </p>
        </div>
      </section>

      {/* Exit CTA */}
      <section className="exit-cta section">
        <div className="container">
          <div className="exit-cta-content">
            <h3 className="exit-cta-title">Explore data engineering capabilities?</h3>
            <Link to="/data-arena">
              <Button
                variant="secondary"
                size="large"
                accentColor="#00d1ff"
              >
                Data Engineering
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServePrime;
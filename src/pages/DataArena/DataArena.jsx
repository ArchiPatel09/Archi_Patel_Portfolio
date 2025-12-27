import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, BarChart3, Cpu, Zap } from 'lucide-react';
import Button from '../../components/common/Button';
import './dataarena.css';

const DataArena = () => {
  const dataSkills = [
    {
      icon: <Database size={24} />,
      title: 'Database Design',
      description: 'SQL/NoSQL schema optimization and indexing strategies',
      color: '#00d1ff'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Data Analytics',
      description: 'Real-time analytics and business intelligence',
      color: '#00d1ff'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Big Data',
      description: 'Distributed processing with Spark and Hadoop',
      color: '#00d1ff'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance',
      description: 'Query optimization and caching strategies',
      color: '#00d1ff'
    }
  ];

  const dataProjects = [
    {
      title: 'Real-time Analytics Pipeline',
      description: 'Streaming data pipeline for user behavior analytics',
      tech: ['Kafka', 'Spark', 'Elasticsearch', 'Redis']
    },
    {
      title: 'Data Warehouse Migration',
      description: 'Legacy system migration to modern cloud data warehouse',
      tech: ['AWS Redshift', 'Airflow', 'dbt', 'Python']
    },
    {
      title: 'Recommendation Engine',
      description: 'Personalized content recommendations using ML',
      tech: ['Python', 'TensorFlow', 'PostgreSQL', 'FastAPI']
    }
  ];

  return (
    <div className="dataarena-page">
      {/* Hero */}
      <section className="dataarena-hero section">
        <div className="container">
          <motion.div
            className="dataarena-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="dataarena-title">DATA ARENA</h1>
            <h2 className="dataarena-subtitle">Database Design & Data Engineering</h2>
            <p className="dataarena-description">
              Architecting data systems that transform raw information into 
              actionable insights and drive business decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="data-skills section">
        <div className="container">
          <h3 className="section-subtitle">Data Engineering Capabilities</h3>
          <div className="skills-grid">
            {dataSkills.map((skill, index) => (
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
      <section className="data-projects section">
        <div className="container">
          <h3 className="section-subtitle">Data Engineering Projects</h3>
          <div className="projects-list">
            {dataProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                style={{ '--accent-color': '#00d1ff' }}
              >
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Flow Diagram */}
      <section className="data-flow section">
        <div className="container">
          <h3 className="section-subtitle">Data Pipeline Architecture</h3>
          <div className="flow-diagram">
            <div className="flow-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Data Ingestion</h4>
                <p>Streaming and batch data collection</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Processing</h4>
                <p>ETL/ELT and data transformation</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Storage</h4>
                <p>Data lakes and warehouses</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Analysis</h4>
                <p>BI tools and ML models</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exit CTA */}
      <section className="exit-cta section">
        <div className="container">
          <div className="exit-cta-content">
            <h3 className="exit-cta-title">Explore creative design work?</h3>
            <Link to="/creative-studio">
              <Button
                variant="secondary"
                size="large"
                accentColor="#c77dff"
              >
                Creative Studio
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataArena;
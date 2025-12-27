import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Rocket, TrendingUp, Users, Target, Zap } from 'lucide-react';
import Button from '../../components/common/Button';
import './founderscut.css';

const FoundersCut = () => {
  const startups = [
    {
      title: 'StreamDev Tools',
      description: 'Developer tools specifically for streaming platform development',
      status: 'Ideation',
      icon: <Zap size={24} />,
      color: '#f5c77a'
    },
    {
      title: 'CinemaOS',
      description: 'Operating system for independent cinema management',
      status: 'Prototype',
      icon: <Rocket size={24} />,
      color: '#f5c77a'
    },
    {
      title: 'DesignToken Studio',
      description: 'Collaborative platform for design system token management',
      status: 'Research',
      icon: <Lightbulb size={24} />,
      color: '#f5c77a'
    }
  ];

  const principles = [
    {
      title: 'User-Centric',
      description: 'Products should solve real problems for real people',
      icon: <Users size={24} />
    },
    {
      title: 'Sustainable Growth',
      description: 'Focus on metrics that matter for long-term success',
      icon: <TrendingUp size={24} />
    },
    {
      title: 'Product-Market Fit',
      description: 'Validate assumptions before scaling',
      icon: <Target size={24} />
    }
  ];

  return (
    <div className="founderscut-page">
      {/* Hero Section */}
      <section className="founderscut-hero section">
        <div className="container">
          <motion.div
            className="founderscut-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="founderscut-title">FOUNDER'S CUT</h1>
            <h2 className="founderscut-subtitle">Startup Ideas & Business Mindset</h2>
            <p className="founderscut-description">
              Exploring entrepreneurial ventures, product thinking, and business strategies
              that combine technical innovation with market opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Startup Ideas */}
      <section className="startup-ideas section">
        <div className="container">
          <h3 className="section-subtitle">Startup Concepts</h3>
          <div className="ideas-grid">
            {startups.map((startup, index) => (
              <motion.div
                key={startup.title}
                className="idea-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ '--accent-color': startup.color }}
              >
                <div className="idea-header">
                  <div className="idea-icon" style={{ color: startup.color }}>
                    {startup.icon}
                  </div>
                  <div className="idea-status">{startup.status}</div>
                </div>
                <h4 className="idea-title">{startup.title}</h4>
                <p className="idea-description">{startup.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Principles */}
      <section className="principles section">
        <div className="container">
          <h3 className="section-subtitle">Business Philosophy</h3>
          <div className="principles-list">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="principle-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="principle-icon">
                  {principle.icon}
                </div>
                <div className="principle-content">
                  <h4 className="principle-title">{principle.title}</h4>
                  <p className="principle-description">{principle.description}</p>
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
            <h3 className="exit-cta-title">Back to main portfolio?</h3>
            <Link to="/">
              <Button
                variant="secondary"
                size="large"
                accentColor="#e50914"
              >
                Home
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundersCut;
import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Code2 size={20} />
              <span>ARCHI.STREAM</span>
            </Link>
            <p className="footer-tagline">
              Building cinematic digital experiences
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4 className="link-group-title">Channels</h4>
              <Link to="/uiflix" className="footer-link">UIFLIX</Link>
              <Link to="/serve-prime" className="footer-link">SERVE PRIME</Link>
              <Link to="/data-arena" className="footer-link">DATA ARENA</Link>
              <Link to="/creative-studio" className="footer-link">CREATIVE STUDIO</Link>
              <Link to="/founders-cut" className="footer-link">FOUNDER'S CUT</Link>
            </div>

            <div className="link-group">
              <h4 className="link-group-title">Connect</h4>
              <a href="mailto:archi@example.com" className="footer-link">Email</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">Resume</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Archi Patel. All rights reserved.
          </p>
          <p className="made-with">
            Made with <Heart size={16} /> using React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'UIFLIX', path: '/uiflix' },
    { name: 'SERVE PRIME', path: '/serve-prime' },
    { name: 'DATA ARENA', path: '/data-arena' },
    { name: 'CREATIVE STUDIO', path: '/creative-studio' },
    { name: "FOUNDER'S CUT", path: '/founders-cut' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const getAccentColor = (path) => {
    if (path === '/uiflix') return '#e50914';
    if (path === '/serve-prime') return '#1f6feb';
    if (path === '/data-arena') return '#00d1ff';
    if (path === '/creative-studio') return '#c77dff';
    if (path === '/founders-cut') return '#f5c77a';
    return '#e6e8ee';
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo">
            <Code2 size={24} className="logo-icon" />
            <span className="logo-text">ARCHI.STREAM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                style={{
                  '--accent-color': getAccentColor(item.path),
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                style={{
                  '--accent-color': getAccentColor(item.path),
                }}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
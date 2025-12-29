import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="theme-icon"
        animate={{ rotate: isDark ? 0 : 360 }}
        transition={{ duration: 0.5 }}
      >
        {isDark ? (
          <Sun size={20} className="sun-icon" />
        ) : (
          <Moon size={20} className="moon-icon" />
        )}
      </motion.div>
      <span className="theme-label">
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </span>
    </motion.button>
  );
};

export default ThemeToggle;
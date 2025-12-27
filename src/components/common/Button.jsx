import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  accentColor = '#1f6feb',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) => {
  return (
    <motion.button
      type={type}
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      style={{
        '--accent-color': accentColor,
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
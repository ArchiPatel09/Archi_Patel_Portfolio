import React, { useEffect, useState } from 'react';
import { Monitor } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeIndicator = () => {
  const { theme } = useTheme();
  const [isSystemTheme, setIsSystemTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    setIsSystemTheme(!savedTheme);
  }, [theme]);

  if (!isSystemTheme) return null;

  return (
    <div className="theme-indicator">
      <Monitor size={12} />
      <span>System</span>
    </div>
  );
};

export default ThemeIndicator;
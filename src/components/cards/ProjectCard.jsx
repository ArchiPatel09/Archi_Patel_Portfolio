import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({
  title,
  imageSrc,
  tags = [],
  shortDesc,
  onClick,
  accentColor = '#e50914',
  featured = false,
  size = 'medium',
  id,
  ...props
}) => {
  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.03 },
  };

  const contentVariants = {
    initial: { y: 20, opacity: 0 },
    hover: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className={`project-card ${featured ? 'featured' : ''} size-${size}`}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.3 }}
      onClick={onClick}
      style={{
        '--accent-color': accentColor,
        cursor: onClick ? 'pointer' : 'default',
      }}
      {...props}
    >
      <div className="card-image-container">
        <img
          src={imageSrc || 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop'}
          alt={title}
          className="card-image"
          loading="lazy"
        />
        <motion.div
          className="card-overlay"
          variants={contentVariants}
          transition={{ duration: 0.2 }}
        >
          <div className="overlay-content">
            <p className="overlay-desc">{shortDesc}</p>
            <div className="overlay-actions">
              <button className="action-btn" aria-label="View details">
                <Eye size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-tags">
          {tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="tag-more">+{tags.length - 3}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
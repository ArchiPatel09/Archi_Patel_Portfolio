export const projects = {
  uiflix: [
    {
      id: 'ui-1',
      title: 'Cinema Dashboard',
      tags: ['React', 'Framer Motion', 'Chart.js', 'Tailwind'],
      shortDesc: 'A real-time analytics dashboard for cinema metrics with interactive visualizations',
      fullDesc: 'Built a comprehensive dashboard for tracking cinema performance metrics with real-time data visualization and interactive charts.',
      problem: 'Cinema chains needed a unified view of performance metrics across multiple locations.',
      solution: 'Created a responsive dashboard with real-time updates, interactive charts, and customizable views.',
      challenges: 'Optimizing real-time data updates while maintaining smooth animations.',
      learnings: 'Importance of debouncing frequent updates and optimizing canvas-based charts.',
      techStack: ['React 18', 'Framer Motion', 'Chart.js', 'WebSocket', 'Node.js'],
      githubLink: '#',
      liveDemo: '#',
      featured: true,
      accentColor: '#e50914'
    },
    {
      id: 'ui-2',
      title: 'Stream UI Component Library',
      tags: ['TypeScript', 'Storybook', 'Styled Components', 'React'],
      shortDesc: 'Design system and component library for streaming platforms',
      fullDesc: 'Developed a comprehensive design system with reusable components for streaming applications.',
      problem: 'Inconsistent UI across different streaming service features.',
      solution: 'Built a scalable component library with proper documentation and theming support.',
      challenges: 'Creating a flexible theming system that supports multiple accent colors.',
      learnings: 'TypeScript interfaces significantly improve component API clarity.',
      techStack: ['TypeScript', 'Storybook', 'Styled Components', 'Jest'],
      githubLink: '#',
      liveDemo: '#',
      featured: true,
      accentColor: '#e50914'
    },
    {
      id: 'ui-3',
      title: 'Interactive Video Player',
      tags: ['Video.js', 'React', 'Canvas API', 'Performance'],
      shortDesc: 'Custom video player with interactive overlays and performance optimizations',
      fullDesc: 'Built a feature-rich video player with custom controls, interactive overlays, and adaptive streaming.',
      problem: 'Existing players lacked customization options for interactive content.',
      solution: 'Created a modular player with plugin architecture and canvas-based overlays.',
      challenges: 'Synchronizing interactive elements with video playback.',
      learnings: 'WebGL can significantly improve overlay rendering performance.',
      techStack: ['Video.js', 'React', 'Canvas API', 'WebGL'],
      githubLink: '#',
      liveDemo: '#',
      featured: true,
      accentColor: '#e50914'
    },
    {
      id: 'ui-4',
      title: 'Motion Design System',
      tags: ['Framer Motion', 'React', 'Design Tokens', 'Accessibility'],
      shortDesc: 'Animation library with accessibility considerations and smooth transitions',
      fullDesc: 'Developed a motion design system that balances aesthetic appeal with accessibility requirements.',
      problem: 'Inconsistent animation patterns across applications.',
      solution: 'Created a standardized animation system with accessibility hooks and reduced motion support.',
      challenges: 'Balancing smooth animations with performance on low-end devices.',
      learnings: 'Reduced motion preferences are crucial for accessibility compliance.',
      techStack: ['Framer Motion', 'React', 'CSS Variables', 'Jest'],
      githubLink: '#',
      liveDemo: '#',
      accentColor: '#e50914'
    }
  ],
  servePrime: [
    {
      id: 'be-1',
      title: 'Microservices Orchestrator',
      tags: ['Node.js', 'Docker', 'Kubernetes', 'Redis'],
      shortDesc: 'Orchestration layer for managing microservices communication and scaling',
      accentColor: '#1f6feb'
    },
    {
      id: 'be-2',
      title: 'Real-time Notification System',
      tags: ['WebSocket', 'Redis Pub/Sub', 'Node.js', 'MongoDB'],
      shortDesc: 'Scalable notification system supporting millions of concurrent connections',
      accentColor: '#1f6feb'
    }
  ],
  dataArena: [
    {
      id: 'db-1',
      title: 'Data Warehouse Architecture',
      tags: ['PostgreSQL', 'Apache Spark', 'Airflow', 'AWS Redshift'],
      shortDesc: 'Enterprise data warehouse solution for streaming analytics',
      accentColor: '#00d1ff'
    }
  ]
};

export const skills = {
  frontend: ['React 18+', 'TypeScript', 'Next.js', 'Framer Motion', 'Three.js', 'Tailwind CSS', 'GraphQL', 'Webpack'],
  backend: ['Node.js', 'Express', 'Python', 'FastAPI', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Microservices'],
  database: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Apache Kafka', 'Data Modeling', 'ETL Pipelines'],
  design: ['Figma', 'Adobe Creative Suite', 'UI/UX Principles', 'Prototyping', 'Design Systems', 'Motion Design']
};

export const startups = [
  {
    id: 'startup-1',
    title: 'StreamDev Tools',
    description: 'Developer tools specifically for streaming platform development',
    status: 'Ideation',
    accentColor: '#f5c77a'
  },
  {
    id: 'startup-2',
    title: 'CinemaOS',
    description: 'Operating system for independent cinema management',
    status: 'Prototype',
    accentColor: '#f5c77a'
  }
];
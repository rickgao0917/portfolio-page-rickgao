import { TimelineItem } from '../types/timeline';

export const experienceData: TimelineItem[] = [
  {
    type: 'experience',
    title: 'Treasury/SWE Intern',
    company: 'Verition Fund Management LLC',
    location: 'New York, NY',
    period: 'May 2024 - Current',
    description: 'Developed tools for treasury operations, achieving financial and performance improvements.',
    achievements: [
      'Optimized financial systems and saved 10+ man-hours daily and thousands of dollars daily',
      'Risk management system providing novel capabilities for risk forecasting'
    ],
    responsibilities: [
      'Full-stack development for treasury management systems',
      'Algorithm design for trade optimization',
      'Database design and implementation with PostgreSQL',
      'Performance optimization and risk analysis automation'
    ],
    tech: ['Python', 'AWS', 'SQLAlchemy', 'React', 'FastAPI', 'NumPy', 'SciPy', 'Flask', 'PostgreSQL']
  },
  {
    type: 'experience',
    title: 'Undergraduate Researcher',
    company: 'Gerstein Laboratory — Yale University',
    location: 'New Haven, CT',
    period: 'Jan. 2023 - May 2024',
    description: 'Conducted research in computational biology and deep learning, focusing on code generation and bioinformatics.',
    achievements: [
      'Co-authored research paper (ISMB 2024) in closed-domain code generation and benchmarking alongside Google Brain researcher',
      'Wrote custom parser for GitHub repositories in Python, deployed through Docker and AWS',
      'Parsed and analyzed 100GB of genomic information and metadata in SciPy, NumPy and PyVCF'
    ],
    responsibilities: [],
    tech: ['Python', 'PyTorch', 'Docker', 'AWS', 'SciPy', 'NumPy', 'PyVCF']
  },
  {
    type: 'experience',
    title: 'Technical Project Management Intern',
    company: 'Tiger College Advising Team',
    location: 'Remote',
    period: 'May 2023 - Aug. 2023',
    description: 'Led technical projects and database development for educational consulting services.',
    achievements: [],
    responsibilities: [
      'Technical project leadership and management',
      'Database architecture and system design',
      'Team coordination and volunteer management',
      'Cost optimization and system consolidation'
    ],
    tech: ['Python', 'MongoDB', 'Deep Learning']
  }
];

export const projectData: TimelineItem[] = [
  {
    type: 'project',
    title: 'Graph-based collaborative LLM Editor',
    category: 'Python, Typescript',
    period: 'June 2025 - Present',
    wip: true,
    description: 'Developing a new interface for synchronous collaboration on text documents + collaboration with LLM chats',
    features: [
      'Synchronous multi-user collaboration on the same LLM chat',
      'Selective context on chats from document',
      'Graph-based architecture allows for easy visualization of all LLM conversation branches',
    ],
    impact: [],
    tech: ['Python', 'Typescript'],
    links: {
      demo: '#',
      github: 'https://github.com/rickgao0917/noded'
    }
  },
    {
    type: 'project',
    title: 'Weather Market Arbitrage',
    category: 'Python, C++, Statsmodels, Research',
    period: 'May 2025 - August 2025',
    description: 'Developed fully featured event-driven backtester in C++ and trading strategy, including market impact analysis.',
    features: [
      'Event-driven backtesting system built in C++',
      'Market impact analysis and principal component analysis',
      'Real-time trading implementation'
    ],
    impact: [],
    tech: ['Python', 'C++', 'Statsmodels'],
    links: {
      demo: '#',
      github: 'https://github.com/rickgao0917/kalshi_public'
    }
  },
  {
    type: 'project',
    title: 'Bond: End-to-End Agentic Market Intelligence Intelligence/Equity Research Platform',
    category: 'Python, PyTorch',
    period: 'May 2025 - Present',
    description: 'Graph network implementation to determine relevancy of sources for agentic investment research.',
    wip: true,
    features: [
      'RAG + Vector database to ensure data consistency and accurate source citation',
      'Custom ensemble model of Llama, Claude DeepSeek + GRPO, NLP and sentiment analysis models',
      'Tuned on multimodal data, video, news filings and pricing data',
    ],
    impact: [
      'Currently being trialed by PMs and analysts'
    ],
    tech: ['Python', 'PyTorch', 'RAG', 'Vector Database', 'NLP'],
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    type: 'project',
    title: 'QuantRooms',
    category: 'Chrome Extension, WebSocket, Full-Stack',
    period: 'May 2025 - Present',
    description: 'Multiplayer quant finance interview preparation.',
    wip: true,
    features: [
      'Multiplayer Chrome extension for QuantGuide.io with real-time collaborative coding',
      'WebSocket-based synchronization using Socket.io for real-time communication',
      'ELO-based matchmaking system with competitive scoring',
      'Complete authentication system with Google OAuth 2.0 and JWT tokens',
      'PostgreSQL database with user profiles, statistics, and game history',
      'Auto-cleanup rooms and cross-account support across browser tabs'
    ],
    impact: [],
    tech: ['JavaScript', 'Node.js', 'Express', 'Socket.io', 'PostgreSQL', 'Chrome Extension', 'OAuth 2.0', 'JWT'],
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    type: 'project',
    title: 'IMC Prosperity 3',
    category: 'Trading, Research',
    period: 'April 2025',
    description: 'Developed custom package integrating data cleaning, processing, and exploration in C++, Python.',
    features: [
      'Custom trading package with data processing capabilities',
      'Bayesian inferencing and Monte Carlo simulations for manual trading rounds'
    ],
    impact: [],
    tech: ['C++', 'Python', 'Bayesian Analysis', 'Monte Carlo'],
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    type: 'project',
    title: 'Sidekick — Agentic Job Applier',
    category: 'ML, NLP, Python',
    period: 'March 2025 - July 2025',
    description: 'Automatically tracks, applies and schedules interviews for jobs, universal compatibility across ATS.',
    features: [
      'Universal ATS compatibility for job applications',
      'Custom ensemble model + structured I/O ensured quality of output',
      'Automated interview scheduling and tracking',
      'Intelligent job matching and application optimization'
    ],
    impact: [],
    tech: ['Python', 'ML', 'NLP'],
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    type: 'project',
    title: 'Blacksmith: Mercor Hackathon',
    category: 'Python, Javascript',
    period: 'March 2025',
    description: 'Designed a multi-modal reasoning model with GRPO and tree-of-thought with recursive tool creation and use.',
    features: [
      'Multi-modal reasoning capabilities',
      'GRPO  implementation',
      'Tree-of-thought reasoning with recursive tool creation',
      'Advanced problem-solving through recursive methodologies'
    ],
    impact: [],
    tech: ['Python', 'Javascript', 'GRPO', 'Multi-modal AI'],
    links: {
      demo: '#',
      github: 'https://github.com/lilbillybiscuit/blacksmith'
    }
  },
  {
    type: 'project',
    title: 'BioCoder',
    category: 'Python, PyTorch, ML',
    period: 'May 2023 - May 2024',
    description: 'Co-authored bioinformatics code generation benchmark consisting of approximately 500 novel bioinformatics-adjacent functions.',
    features: [
      'Evidence-based comparison of domain-specific vs general models',
      'Advanced evaluation metrics for code generation quality'
    ],
    impact: [],
    tech: ['Python', 'PyTorch', 'ML', 'Bioinformatics'],
    links: {
      demo: '#',
      github: 'https://academic.oup.com/bioinformatics/article/40/Supplement_1/i266/7700865'
    }
  }
];

export const blogSection = {
  type: 'blog' as const,
  title: 'Latest Blog Post',
  period: 'Updated regularly',
  description: 'Thoughts on software engineering, quantitative finance, and technology.'
};

export const riddleSection = {
  type: 'riddle' as const,
  title: 'Daily Math Riddle',
  period: 'Updated daily',
  description: 'Brain teasers and mathematical puzzles for the quantitatively curious.'
};

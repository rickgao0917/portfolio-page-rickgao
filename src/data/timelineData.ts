import { TimelineItem } from '../types/timeline';

export const experienceData: TimelineItem[] = [
  {
    type: 'experience',
    title: 'CEO',
    company: 'Alkera AI',
    location: 'San Francisco, CA',
    period: 'May 2026 - Current',
    description: 'Co-founder of a Y Combinator backed startup revolutionizing enterprise data work.',
    achievements: [],
    responsibilities: [],
    tech: []
  },
  {
    type: 'experience',
    title: 'Treasury/SWE Intern',
    company: 'Verition Fund Management LLC',
    location: 'New York, NY',
    period: 'May 2024 - May 2026',
    description: 'Developed tools for treasury operations, achieving financial and performance improvements.',
    achievements: [],
    responsibilities: [],
    tech: []
  },
  {
    type: 'experience',
    title: 'Undergraduate Researcher',
    company: 'Gerstein Laboratory — Yale University',
    location: 'New Haven, CT',
    period: 'Jan. 2023 - May 2024',
    description: 'Conducted research in computational biology and deep learning, focusing on code generation and bioinformatics.',
    achievements: [],
    responsibilities: [],
    tech: []
  },
  {
    type: 'experience',
    title: 'Technical Project Management Intern',
    company: 'Tiger College Advising Team',
    location: 'Remote',
    period: 'May 2023 - Aug. 2023',
    description: 'Led technical projects and database development for educational consulting services.',
    achievements: [],
    responsibilities: [],
    tech: []
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


export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Trading Systems: Lessons from My Internship',
    date: '2025-01-15',
    excerpt: 'Reflections on developing financial tools and optimization algorithms during my time at Verition Fund Management...',
    content: 'During my internship at Verition Fund Management, I had the opportunity to work on several critical trading systems...',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'From Research to Production: Scaling Bioinformatics Code',
    date: '2025-01-10',
    excerpt: 'How I transitioned from academic research code to production-ready systems processing 100GB of genomic data...',
    content: 'Working in the Gerstein Laboratory taught me valuable lessons about scaling computational biology applications...',
    readTime: '7 min read'
  }
];

export const getLatestBlogPost = () => blogPosts[0];

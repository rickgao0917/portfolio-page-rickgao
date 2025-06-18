
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
    title: 'Lorem Ipsum Dolor Sit Amet: Consectetur Adipiscing',
    date: '2025-01-15',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Duis Aute Irure Dolor in Reprehenderit',
    date: '2025-01-10',
    excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    readTime: '7 min read'
  }
];

export const getLatestBlogPost = () => blogPosts[0];

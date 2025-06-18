
import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getLatestBlogPost } from '../data/blogData';

const BlogSection = () => {
  const latestPost = getLatestBlogPost();

  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors duration-200">
      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
        <Calendar className="w-4 h-4" />
        <span>{new Date(latestPost.date).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</span>
        <span>•</span>
        <Clock className="w-4 h-4" />
        <span>{latestPost.readTime}</span>
      </div>
      
      <h3 className="text-xl font-medium mb-3 text-gray-900">
        {latestPost.title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed mb-4">
        {latestPost.excerpt}
      </p>
      
      <div className="flex items-center justify-between">
        <Link 
          to={`/blog/${latestPost.id}`}
          className="group flex items-center space-x-2 text-sm font-medium tracking-wide hover:text-gray-600 transition-colors duration-200"
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
        
        <Link 
          to="/blog"
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          View All Posts
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;

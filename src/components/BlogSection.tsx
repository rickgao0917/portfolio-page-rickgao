
import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getLatestBlogPost } from '../data/blogData';

const BlogSection = () => {
  const latestPost = getLatestBlogPost();

  return (
    <Link to={`/blog/${latestPost.id}`} className="block">
      <div className="group bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-6 cursor-pointer hover:bg-gray-50">
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
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {latestPost.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {latestPost.excerpt}
        </p>
      </div>
    </Link>
  );
};

export default BlogSection;

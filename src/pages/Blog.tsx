
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-12">
          <Link 
            to="/"
            className="group inline-flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Portfolio</span>
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-light mb-4">Blog</h1>
          <p className="text-lg text-gray-600">
            Thoughts on software engineering, quantitative finance, and technology.
          </p>
        </div>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="border-b border-gray-200 pb-12 last:border-b-0">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
                <span>•</span>
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-light mb-4 hover:text-gray-600 transition-colors duration-200">
                <Link to={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              <Link 
                to={`/blog/${post.id}`}
                className="inline-flex items-center space-x-2 text-sm font-medium hover:text-gray-600 transition-colors duration-200"
              >
                <span>Read More</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

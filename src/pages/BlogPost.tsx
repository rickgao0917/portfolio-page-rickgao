
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">Post Not Found</h1>
          <Link 
            to="/blog"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <Link 
          to="/blog"
          className="group inline-flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Back to Blog</span>
        </Link>
        
        <article>
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
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
          
          <h1 className="text-4xl lg:text-5xl font-light mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {post.content}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;


import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 px-8 lg:px-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-16">
          {/* Section header */}
          <div className="col-span-12 lg:col-span-4">
            <span className="font-mono text-sm text-gray-400">03</span>
            <h2 className="text-2xl lg:text-3xl font-light mt-2 mb-6">
              Let's Work Together
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              I'm currently available for freelance projects and full-time 
              opportunities. Let's discuss how we can bring your ideas to life.
            </p>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>alex.thompson@email.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="col-span-12 lg:col-span-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors duration-200"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button 
                type="submit"
                className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-gray-800 text-center">
        <p className="text-sm text-gray-400">
          © 2024 Alex Thompson. Designed & built with care.
        </p>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_6g6oi1c', // Your service ID
        'template_ytwgowe', // Your template ID
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject, // Using 'title' to match your template
          message: formData.message,
          time: new Date().toLocaleString() // Adding timestamp as your template expects it
        },
        'Ee3GnxY1hjDchJhK0' // Your public key
      );

      console.log('Email sent successfully:', result);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or email me directly at rickgao.contactme@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-8 lg:px-16 bg-gray-900/95 backdrop-blur-sm text-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-16">
          {/* Section header */}
          <div className="col-span-12 lg:col-span-4">
            <span className="font-mono text-sm text-gray-400">06</span>
            <h2 className="text-2xl lg:text-3xl font-light mt-2 mb-6">
              Let's Connect
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              I'm interested in opportunities in quantitative finance, software engineering, 
              and research. Happy to chat about anything.
            </p>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>rickgao.contactme@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>3477741504</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="col-span-12 lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors duration-200"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Contents"
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-gray-800 text-center">
        <p className="text-sm text-gray-400">
          © 2025 Rick Gao
        </p>
      </div>
    </section>
  );
};

export default Contact;

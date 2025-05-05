import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref: sectionRef } = useScrollAnimation();
  const { ref: formRef } = useScrollAnimation();
  const { ref: infoRef } = useScrollAnimation();
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      const isSuccess = Math.random() > 0.3;
      setFormStatus(isSuccess ? 'success' : 'error');
      
      if (isSuccess) {
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => {
          setFormStatus('idle');
        }, 3000);
      }
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-800" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2 className="text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="section-subtitle">Feel free to contact me for any work or suggestions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div 
            className="animate-on-scroll"
            ref={formRef}
          >
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`btn flex items-center justify-center w-full ${
                    formStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : formStatus === 'error'
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  {formStatus === 'submitting' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : formStatus === 'success' ? (
                    <span className="flex items-center">
                      <Check className="mr-2 h-5 w-5" />
                      Message Sent
                    </span>
                  ) : formStatus === 'error' ? (
                    <span className="flex items-center">
                      <AlertCircle className="mr-2 h-5 w-5" />
                      Failed to Send
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </span>
                  )}
                </button>
                
                {formStatus === 'error' && (
                  <p className="mt-3 text-sm text-red-600 dark:text-red-400">
                    There was an error sending your message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>

          <div 
            className="animate-on-scroll"
            ref={infoRef}
          >
            <div className="card p-6 h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-700 dark:text-gray-300">rayashutosh329@gmail.com</p>
                    <a href="mailto:rayashutosh329@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">Send an email</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-gray-700 dark:text-gray-300">+91 7703842744</p>
                    <a href="tel:+917703842744" className="text-blue-600 dark:text-blue-400 hover:underline">Call me</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-700 dark:text-gray-300">Phagwara, Punjab, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Social Profiles</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/ashutosh-kumar-ray-911494262/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Ashutoshgithub2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
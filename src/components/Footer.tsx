import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Ashutosh's Portfolio</h3>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <a
              href="#hero"
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white mb-4 transition-all duration-300 hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>
            
            <p className="text-gray-400 text-sm flex items-center">
              <span>© {currentYear} All Rights Reserved</span>
              <span className="mx-1">•</span>
              <span className="flex items-center">
                Made with <Heart size={14} className="text-red-500 mx-1" /> by Ashutosh 
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
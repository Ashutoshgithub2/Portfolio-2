import React, { useEffect, useState } from 'react';
import { ArrowDown, Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute opacity-30 dark:opacity-10 -top-24 -right-24 w-96 h-96 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute opacity-30 dark:opacity-10 -bottom-24 -left-24 w-96 h-96 rounded-full bg-emerald-400 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="block">Hi, I'm</span>
            <span className="text-blue-600 dark:text-blue-400">Ashutosh Kumar Ray</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8">
            Full-Stack Web Developer and Android App Developer
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Passionate developer crafting innovative solutions through web and mobile technologies.
            Specialized in creating seamless user experiences and robust applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="btn btn-primary"
            >
              Contact Me
            </a>
            <a
  href="/general_CV.pdf"
  download
  className="btn bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
>
  Download Resume
</a>

          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Ashutoshgithub2" // <- Replace with your actual GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ashutosh-kumar-ray-911494262/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:rayashutosh329@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={20} className="text-blue-600 dark:text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

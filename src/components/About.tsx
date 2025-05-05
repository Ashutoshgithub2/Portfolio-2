import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref: sectionRef } = useScrollAnimation();
  const { ref: imageRef } = useScrollAnimation();
  const { ref: contentRef } = useScrollAnimation();

  return (
    <section id="about" className="section bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2 className="text-gray-900 dark:text-white">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="animate-on-scroll"
            ref={imageRef}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-0"></div>
              <img
                src="https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg"
                alt="Profile"
                className="w-full h-full object-cover z-10 transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent z-20"></div>
            </div>
          </div>

          <div 
            className="animate-on-scroll"
            ref={contentRef}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Ashutosh Kumar Ray
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Full-Stack Web Developer and Android App Developer passionate about creating innovative digital solutions.
              I specialize in building responsive web applications and mobile apps that deliver exceptional user experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With expertise in both front-end and back-end development, I enjoy tackling complex problems and turning ideas into reality through clean, efficient code.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I'm constantly learning and staying updated with the latest technologies to deliver modern and scalable solutions.
            </p>
            <div className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
              <div>
                <p><span className="font-semibold">Name:</span> Ashutosh Kumar Ray</p>
                <p><span className="font-semibold">Email:</span> rayashutosh329@gmail.com</p>
                <p><span className="font-semibold">Phone:</span> +91 7703842744</p>
              </div>
              <div>
                <p><span className="font-semibold">Location:</span> Phagwara, Punjab</p>
                <p><span className="font-semibold">Experience:</span> Full-Stack Developer</p>
                <p><span className="font-semibold">Availability:</span> Full-time</p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                className="btn btn-primary inline-flex items-center"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
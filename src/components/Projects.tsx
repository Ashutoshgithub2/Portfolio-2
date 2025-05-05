import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

interface ProjectCardProps {
  project: Project;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay }) => {
  const { ref } = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      className="animate-on-scroll card group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-end space-x-3">
            {project.links.github && (
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                <Github size={18} />
              </a>
            )}
            {project.links.demo && (
              <a 
                href={project.links.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { ref: sectionRef } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "File Sharing Platform",
      category: "Web Development",
      description: "Developed a file-sharing web app with secure login using PHP and SQL. Enabled large file uploads and link-based sharing for easy collaboration.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      technologies: ["React", "Node.js", "MongoDB","PHP"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Education Website",
      category: "Web Development",
      description: "Built a student-focused learning platform with Node.js and MongoDB. Offered free science and tech courses with an intuitive, responsive UI.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      technologies: ["HTML", "CSS", "JavaScript","NodeJs","MongoDB"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "IPL Cricket Schedule",
      category: "C Programming",
      description: "Created a C program to manage IPL team rosters and match schedules. Supported dynamic updates to players, teams, and fixtures.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      technologies: ["C Programming"],
      links: {
        demo: "#"
      }
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2 className="text-gray-900 dark:text-white">Projects</h2>
          <p className="section-subtitle">A showcase of my recent projects and creative works</p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
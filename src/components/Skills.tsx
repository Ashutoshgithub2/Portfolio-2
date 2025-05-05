import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SkillProps {
  name: string;
  percentage: number;
  delay: number;
}

const SkillBar: React.FC<SkillProps> = ({ name, percentage, delay }) => {
  const [progress, setProgress] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isVisible) {
      timer = setTimeout(() => setProgress(percentage), delay);
    }
    return () => clearTimeout(timer);
  }, [isVisible, percentage, delay]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">{name}</h3>
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{progress}%</span>
      </div>
      <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

interface SkillBadgeProps {
  name: string;
  delay: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, delay }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-full py-2 px-4 shadow-sm border border-gray-200 dark:border-gray-700 transform transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-gray-800 dark:text-gray-200">{name}</span>
    </div>
  );
};

const Skills: React.FC = () => {
  const { ref: sectionRef } = useScrollAnimation();

  const technicalSkills = [
    { name: 'Java', percentage: 95 },
    { name: 'MERN', percentage: 85 },
    { name: 'PHP', percentage: 90 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'Data Structure', percentage: 90 },
  ];

  const softSkills = [
    'Leadership', 'Project Management', 'Communication', 'Problem Solving',
    'Time Management', 'Teamwork', 'Adaptability', 'Critical Thinking',
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Expertise</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            A showcase of my technical abilities and professional skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Professional Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <SkillBadge key={skill} name={skill} delay={index * 100} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

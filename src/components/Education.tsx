import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap } from 'lucide-react';

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  description: string;
  delay: number;
}

const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  institution,
  period,
  description,
  delay
}) => {
  const { ref } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className="animate-on-scroll card hover:shadow-lg transition-all duration-300 overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{degree}</h3>
            <p className="text-blue-600 dark:text-blue-400 mt-1">{institution}</p>
          </div>
          <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  const { ref: sectionRef } = useScrollAnimation();
  
  const educationItems = [
    {
      degree: "Bachelor of Technology",
      institution: "Lovely Professional University",
      period: "2022 - 2026",
      description:
        "Pursuing a B.Tech in Computer Science with a focus on software development and machine learning. Actively engaged in projects and tech events."
    },
    {
      degree: "Intermediate",
      institution: "C K J College Harari",
      period: "2018 - 2020",
      description:
        "Completed higher secondary education with a focus on science stream. Participated in academic seminars and science exhibitions."
    },
    {
      degree: "Matriculation",
      institution: "C K J High School Harari",
      period: "2016-2018",
      description:
        "Completed foundational education with strong performance in mathematics and science. Laid the groundwork for future technical studies."
    }
  ];  

  return (
    <section id="education" className="section bg-gray-50 dark:bg-gray-800" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2 className="text-gray-900 dark:text-white">Education</h2>
          <p className="section-subtitle">My academic background and professional qualifications</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {educationItems.map((item, index) => (
            <EducationItem
              key={index}
              degree={item.degree}
              institution={item.institution}
              period={item.period}
              description={item.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
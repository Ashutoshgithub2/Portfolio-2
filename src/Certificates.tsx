import React from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { Award } from 'lucide-react';

interface CertificateItemProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
  delay: number;
}

const CertificateItem: React.FC<CertificateItemProps> = ({
  title,
  issuer,
  date,
  description,
  link,
  delay
}) => {
  const { ref } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="animate-on-scroll card hover:shadow-lg transition-all duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-blue-600 dark:text-blue-400 mt-1">{issuer}</p>
          </div>
          <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
            {date}
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
          >
            View Certificate
            <Award className="ml-2 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

const certificates = [
  {
    title: "Intoduction to Machine Learning",
    issuer: "NPTEL",
    date: "2023",
    description:
      "Comprehensive course covering Android app development fundamentals and advanced concepts.",
    link: "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS101S55690017603944667"
  },
  {
    title: "Data Structure and algorithm",
    issuer: "Udemy",
    date: "2023",
    description:
      "Full-stack web development course covering modern technologies and best practices.",
    link: "https://www.udemy.com/certificate/UC-a65c95ae-ba22-4dfe-9090-2c1842cd0dd5/"
  },
  {
    title: "Java Programming",
    issuer: "Udemy",
    date: "2023",
    description:
      "Advanced Java programming concepts and application development.",
    link: "https://www.udemy.com/certificate/UC-java-programming-sample/"
  }
];

const Certificates: React.FC = () => {
  const { ref: sectionRef } = useScrollAnimation();

  return (
    <section id="certificates" className="section bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2 className="text-gray-900 dark:text-white">Certificates</h2>
          <p className="section-subtitle">Professional certifications and achievements</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certificates.map((cert, index) => (
            <CertificateItem
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              description={cert.description}
              link={cert.link}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

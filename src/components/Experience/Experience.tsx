import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUniversity, FaChartLine } from 'react-icons/fa';

const experiences = [
  {
    title: 'IT Systems Engineer',
    company: 'Gold\'s Gym, Totowa',
    period: 'July 2024 - Current',
    icon: <FaBriefcase className="text-2xl text-primary dark:text-primary-dark" />,
    achievements: [
      'Developed Link8 access control system with DAOSAFE & ABC Financial API integration',
      'Automated CRM processes and managed server/hardware configuration',
      'Reduced unauthorized access by 50% through improved security measures',
    ],
  },
  {
    title: 'Studio Manager',
    company: 'YogaSix Studios',
    period: 'May 2023 - Current',
    icon: <FaChartLine className="text-2xl text-primary dark:text-primary-dark" />,
    achievements: [
      'Oversaw all technical operations and created standardized SOPs',
      'Led staff training programs and implemented automated workflows',
      'Managed AV/desktop troubleshooting and system maintenance',
    ],
  },
  {
    title: 'Life Insurance IT Specialist',
    company: 'Transamerica',
    period: '2021 - 2022',
    icon: <FaBriefcase className="text-2xl text-primary dark:text-primary-dark" />,
    achievements: [
      'Managed customer data via CLI in legacy systems',
      'Supported 100+ daily client calls and technical issues',
      'Implemented data security protocols and access controls',
    ],
  },
  {
    title: 'HR Manager',
    company: 'Valet King',
    period: '2022 - 2023',
    icon: <FaChartLine className="text-2xl text-primary dark:text-primary-dark" />,
    achievements: [
      'Digitized onboarding processes and documentation',
      'Managed incident documentation and security protocols',
      'Implemented automated HR workflows',
    ],
  },
  {
    title: 'Adjunct Instructor',
    company: 'University Math Department',
    period: '2017 - 2018',
    icon: <FaUniversity className="text-2xl text-primary dark:text-primary-dark" />,
    achievements: [
      'Taught mathematics labs and developed course materials',
      'Created grading automation script in MATLAB',
      'Implemented digital learning tools and resources',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading text-center">Professional Experience</h2>
          <div className="mt-8 space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{exp.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                    </div>
                    <h4 className="text-lg text-primary dark:text-primary-dark mb-4">
                      {exp.company}
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start text-gray-600 dark:text-gray-300"
                        >
                          <span className="w-2 h-2 bg-primary dark:bg-primary-dark rounded-full mr-2 mt-2"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 
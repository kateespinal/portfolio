import React from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaRobot, FaDesktop } from 'react-icons/fa';

const projects = [
  {
    title: 'Link8 Access Control System',
    description: 'Custom gate server with DAOSAFE & ABC Financial API integration',
    icon: <FaLock className="text-3xl text-primary dark:text-primary-dark" />,
    achievements: [
      'Processes 500+ daily check-ins efficiently',
      'Reduced unauthorized access by 50%',
      'Integrated with multiple payment systems',
      'Real-time monitoring and alerts',
    ],
    technologies: ['Python', 'API Integration', 'Security Protocols', 'Database Management'],
  },
  {
    title: 'CRM Automation System',
    description: 'Automated data entry using Zapier and Google Sheets API',
    icon: <FaRobot className="text-3xl text-primary dark:text-primary-dark" />,
    achievements: [
      'Boosted lead tracking efficiency by 60%',
      'Automated data synchronization',
      'Reduced manual data entry errors',
      'Improved reporting accuracy',
    ],
    technologies: ['Zapier', 'Google Sheets API', 'JavaScript', 'Automation'],
  },
  {
    title: 'Studio Technical Operations',
    description: 'Led AV/desktop troubleshooting and transitioned studio to automated workflows',
    icon: <FaDesktop className="text-3xl text-primary dark:text-primary-dark" />,
    achievements: [
      'Implemented automated scheduling system',
      'Created standardized troubleshooting guides',
      'Reduced technical downtime by 40%',
      'Developed staff training programs',
    ],
    technologies: ['System Administration', 'Automation', 'Technical Documentation', 'Training'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">{project.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-primary dark:text-primary-dark">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
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
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-primary dark:text-primary-dark">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-lighter rounded-full text-sm text-gray-600 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Projects; 
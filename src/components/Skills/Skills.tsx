import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaServer, FaCode, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Security',
      icon: <FaShieldAlt className="text-3xl text-primary dark:text-primary-dark" />,
      skills: [
        'Splunk',
        'Nessus',
        'Wireshark',
        'TCP/IP',
        'Firewalls',
        'IDS/IPS',
        'Vulnerability Scanning',
      ],
    },
    {
      title: 'Systems',
      icon: <FaServer className="text-3xl text-primary dark:text-primary-dark" />,
      skills: [
        'Linux',
        'Windows Server',
        'PowerShell',
        'Bash',
        'SQL',
        'Active Directory',
      ],
    },
    {
      title: 'Automation',
      icon: <FaCode className="text-3xl text-primary dark:text-primary-dark" />,
      skills: [
        'Python',
        'Zapier',
        'Google Sheets API',
        'HTML/CSS',
        'JavaScript',
      ],
    },
    {
      title: 'Tools',
      icon: <FaTools className="text-3xl text-primary dark:text-primary-dark" />,
      skills: [
        'DigitalOcean',
        'ZenDesk',
        'VirtualBox',
      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 bg-primary dark:bg-primary-dark rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 
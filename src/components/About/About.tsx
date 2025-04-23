import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCode, FaServer } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h2 className="heading">About Me</h2>
            <p className="text-lg text-gray-300 mb-6">
              I'm a self-motivated IT Systems Engineer & Cybersecurity Specialist with a passion for
              securing digital environments and automating complex processes. My expertise lies in
              designing secure systems, implementing robust access controls, and developing efficient
              automation solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 cyber-border p-4">
                <FaShieldAlt className="text-terminal-green text-2xl mt-1" />
                <div>
                  <h3 className="subheading">Security Focus</h3>
                  <p className="text-gray-300">
                    Specializing in vulnerability assessment, intrusion detection, and implementing
                    comprehensive security measures to protect critical systems and data.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 cyber-border p-4">
                <FaCode className="text-terminal-green text-2xl mt-1" />
                <div>
                  <h3 className="subheading">Automation Expert</h3>
                  <p className="text-gray-300">
                    Creating efficient workflows and automating repetitive tasks to improve
                    productivity and reduce human error in IT operations.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 cyber-border p-4">
                <FaServer className="text-terminal-green text-2xl mt-1" />
                <div>
                  <h3 className="subheading">Systems Management</h3>
                  <p className="text-gray-300">
                    Experienced in managing and optimizing complex IT infrastructures, ensuring
                    high availability and performance of critical systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-dark-lighter p-8 rounded-lg cyber-border">
            <h3 className="text-2xl font-bold mb-6 terminal-text">Certifications</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-terminal-green pl-4">
                <h4 className="text-xl font-semibold mb-2 text-terminal-cyan">CompTIA CySA+</h4>
                <p className="text-gray-400">Cybersecurity Analyst</p>
              </div>
              <div className="border-l-4 border-terminal-green pl-4">
                <h4 className="text-xl font-semibold mb-2 text-terminal-cyan">Splunk Core Certified Power User</h4>
                <p className="text-gray-400">Expected March 2025</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6 terminal-text">Core Values</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mr-2"></span>
                  Security-first approach to all IT solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mr-2"></span>
                  Continuous learning and professional development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mr-2"></span>
                  Efficient and scalable solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mr-2"></span>
                  Clear communication and documentation
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 
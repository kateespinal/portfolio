import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-darker/90 backdrop-blur-md border-b border-terminal-green/20' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold terminal-text cyber-border"
            >
              Kate Espinal
            </motion.div>
            <div className="flex items-center space-x-6">
              <a href="#about" className="text-gray-300 hover:text-terminal-green transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-300 hover:text-terminal-green transition-colors">
                Skills
              </a>
              <a href="#experience" className="text-gray-300 hover:text-terminal-green transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-gray-300 hover:text-terminal-green transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-terminal-green transition-colors">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 matrix-bg"></div>
        <div className="container mx-auto px-4 text-center relative z-10 pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 terminal-text"
          >
            <span className="animate-glow">Securing Access.</span>
            <br />
            <span className="animate-glow" style={{ animationDelay: '0.2s' }}>Automating Processes.</span>
            <br />
            <span className="animate-glow" style={{ animationDelay: '0.4s' }}>Empowering IT.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-terminal-cyan mb-8"
          >
            Cybersecurity & IT Solutions Specialist
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="#contact"
              className="btn btn-primary"
            >
              Get a Free Consultation
            </a>
            <a
              href="https://www.linkedin.com/in/kateespinal/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary flex items-center"
            >
              <FaLinkedin className="mr-2" />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Header; 
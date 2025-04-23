import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-darker">
        <Header />
        <main className="relative">
          <div className="container mx-auto px-4">
            <motion.section
              id="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section pt-32"
            >
              <About />
            </motion.section>
            <motion.section
              id="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="section"
            >
              <Skills />
            </motion.section>
            <motion.section
              id="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="section"
            >
              <Experience />
            </motion.section>
            <motion.section
              id="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="section"
            >
              <Projects />
            </motion.section>
            <motion.section
              id="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="section"
            >
              <Contact />
            </motion.section>
          </div>
        </main>
        <ThemeToggle />
      </div>
    </Router>
  );
}

export default App; 
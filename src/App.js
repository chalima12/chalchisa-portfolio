// src/App.js
// This is the main application file that orchestrates all components.
import React, { useState } from 'react';
// In a real project, you would import components like this:
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// Importing all icons from lucide-react once for accessibility across components
import { Home, User, Code, Briefcase, Mail, Menu, X, Github, Linkedin, Twitter } from 'lucide-react';


// --- Start of components/Navbar.js (conceptually) ---
// In a real project, this code would be in 'src/components/Navbar.js'
// It would also have: export default Navbar; at the end of the file.
const Navbar = ({ isMenuOpen, toggleMenu }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md p-4 md:px-8 flex items-center justify-between">
    <div className="text-2xl font-bold text-indigo-600">
      CHALCHISA TAMIRU MOLA
    </div>
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
    <ul className={`md:flex md:items-center md:space-x-8 ${isMenuOpen ? 'block absolute top-full left-0 w-full bg-white shadow-lg py-4 px-8' : 'hidden'}`}>
      <li>
        <a href="#home" className="flex items-center py-2 md:py-0 text-gray-600 hover:text-indigo-600 transition-colors duration-300">
          <Home className="mr-2" size={20} /> Home
        </a>
      </li>
      <li>
        <a href="#about" className="flex items-center py-2 md:py-0 text-gray-600 hover:text-indigo-600 transition-colors duration-300">
          <User className="mr-2" size={20} /> About
        </a>
      </li>
      <li>
        <a href="#skills" className="flex items-center py-2 md:py-0 text-gray-600 hover:text-indigo-600 transition-colors duration-300">
          <Code className="mr-2" size={20} /> Skills
        </a>
      </li>
      <li>
        <a href="#projects" className="flex items-center py-2 md:py-0 text-gray-600 hover:text-indigo-600 transition-colors duration-300">
          <Briefcase className="mr-2" size={20} /> Projects
        </a>
      </li>
      <li>
        <a href="#contact" className="flex items-center py-2 md:py-0 text-gray-600 hover:text-indigo-600 transition-colors duration-300">
          <Mail className="mr-2" size={20} /> Contact
        </a>
      </li>
    </ul>
  </nav>
);
// --- End of components/Navbar.js ---

// --- Start of components/Hero.js (conceptually) ---
// In a real project, this code would be in 'src/components/Hero.js'
// It would also have: export default Hero; at the end of the file.

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white pt-16">
    <div className="text-center p-6 max-w-4xl mx-auto">
      <img
        src="/chalo.jpg" // Path to your image in the public folder
        alt="Profile"
        // Added Tailwind classes for fixed width and height, and object-cover for proper scaling
        className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg w-40 h-40 object-cover md:w-48 md:h-48"
      />
      <h1 className="text-5xl font-extrabold mb-4 leading-tight">
        Hi, I'm <span className="text-yellow-300">CHALCHISA TAMIRU MOLA</span>
      </h1>
      <p className="text-xl mb-8 font-light">
        A passionate <span className="font-semibold">Junior Software Engineer</span> dedicated to building amazing web experiences.
      </p>
      <a
        href="#projects"
        className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
      >
        View My Work
      </a>
    </div>
  </section>
);

// --- End of components/Hero.js ---

// --- Start of components/About.js (conceptually) ---
// In a real project, this code would be in 'src/components/About.js'
// It would also have: export default About; at the end of the file.
const About = () => (
  <section id="about" className="py-20 px-4 md:px-8 bg-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-10">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src="https://placehold.co/300x300/667EEA/FFFFFF?text=About" // Placeholder, replace with your actual about image URL
            alt="About Me"
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>
        <div className="md:w-2/3 text-lg leading-relaxed">
          <p className="mb-4">
            Hello! I'm <span className="font-semibold">CHALCHISA TAMIRU MOLA</span>, a Junior Software Engineer with 2+ years of experience in software development and website development. I specialize in front-end and back-end development, and love bringing ideas to life through code and creativity.
          </p>
          <p className="mb-4">
            My journey in software engineering began with a BSc in Computer Science and Engineering from Adama Science and Technology University. Since then, I've had the opportunity to work on various exciting projects, from POS-Machine Customization to Digitally Automated Auction, Procurement, and Delivery Platforms, always striving for clean code and user-centric design.
          </p>
          <p>
            Outside of work, I enjoy watching documentaries and sports over the weekend, reading novels, surfing the internet, and doing physical exercise. I believe continuous learning and a balanced life are key to success.
          </p>
        </div>
      </div>
    </div>
  </section>
);
// --- End of components/About.js ---

// --- Start of components/SkillCard.js (conceptually) ---
// In a real project, this code would be in 'src/components/SkillCard.js'
// It would also have: export default SkillCard; at the end of the file.
const SkillCard = ({ title, skills }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-2xl font-semibold mb-3 text-indigo-600">{title}</h3>
    <ul className="list-disc list-inside text-gray-700">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);
// --- End of components/SkillCard.js ---

// --- Start of components/Skills.js (conceptually) ---
// In a real project, this code would be in 'src/components/Skills.js'
// It would also have: export default Skills; at the end of the file.
// It would also need: import SkillCard from './SkillCard';
const Skills = () => (
  <section id="skills" className="py-20 px-4 md:px-8 bg-gray-100">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCard
          title="Programming Languages"
          skills={['HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'C++']}
        />
        <SkillCard
          title="Frameworks"
          skills={['Laravel', 'React.js', 'Django']}
        />
        <SkillCard
          title="Network Skills"
          skills={['Troubleshooting/Problem Resolution', 'Ethernet', 'TCP/IP', 'DNS', 'Switches and Router']}
        />
        <SkillCard
          title="Soft Skills"
          skills={['Team Building', 'Decision Making', 'Time Management']}
        />
      </div>
    </div>
  </section>
);
// --- End of components/Skills.js ---

// --- Start of components/ProjectCard.js (conceptually) ---
// In a real project, this code would be in 'src/components/ProjectCard.js'
// It would also have: export default ProjectCard; at the end of the file.
const ProjectCard = ({ imageUrl, altText, title, description, technologies, demoLink, githubLink }) => (
  <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img
      src={imageUrl}
      alt={altText}
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2 text-indigo-600">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
        >
          View Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-indigo-600 text-indigo-600 px-5 py-2 rounded-md hover:bg-indigo-50 transition-colors duration-300"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  </div>
);
// --- End of components/ProjectCard.js ---

// --- Start of components/Projects.js (conceptually) ---
// In a real project, this code would be in 'src/components/Projects.js'
// It would also have: export default Projects; at the end of the file.
// It would also need: import ProjectCard from './ProjectCard';
const Projects = () => (
  <section id="projects" className="py-20 px-4 md:px-8 bg-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProjectCard
          imageUrl="https://placehold.co/600x400/A78BFA/FFFFFF?text=DAAPDP"
          altText="Digitally Automated Auction, Procurement, and Delivery Platform"
          title="Digitally Automated Auction, Procurement, and Delivery Platform (DAAPDP)"
          description="Integrated three systems into one online digital marketing platform."
          technologies={['Laravel', 'React.js']}
          demoLink="#" // Replace with actual demo link
          githubLink="#" // Replace with actual GitHub link
        />
        <ProjectCard
          imageUrl="https://placehold.co/600x400/A78BFA/FFFFFF?text=Workshop+Management"
          altText="Workshop Management System"
          title="Workshop Management System"
          description="System to register items, assign technicians, and generate reports in tables and charts to visualize data."
          technologies={['Django', 'React']}
          demoLink="#" // Replace with actual demo link
          githubLink="#" // Replace with actual GitHub link
        />
      </div>
    </div>
  </section>
);
// --- End of components/Projects.js ---

// --- Start of components/Contact.js (conceptually) ---
// In a real project, this code would be in 'src/components/Contact.js'
// It would also have: export default Contact; at the end of the file.
// It would also need: import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
const Contact = () => (
  <section id="contact" className="py-20 px-4 md:px-8 bg-gray-100">
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 text-indigo-700">Get in Touch</h2>
      <p className="text-lg text-gray-700 mb-8">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="flex flex-col space-y-4 mb-8">
        <a
          href="mailto:chalchisatamiru10@gmail.com"
          className="flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
        >
          <Mail className="mr-3" size={24} /> chalchisatamiru10@gmail.com
        </a>
        <a
          href="tel:+251934393116"
          className="flex items-center justify-center bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-indigo-50 transition-colors duration-300 transform hover:scale-105"
        >
          <span className="mr-3">📞</span> +251917506360
        </a>
      </div>
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/chalima12" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
          <Github size={36} />
        </a>
        <a href="https://www.linkedin.com/in/chalchisa-tamiru-50a05a204/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
          <Linkedin size={36} />
        </a>
        <a href="https://twitter.com/ChalchisaT" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
          <Twitter size={36} />
        </a>
      </div>
    </div>
  </section>
);
// --- End of components/Contact.js ---

// --- Start of components/Footer.js (conceptually) ---
// In a real project, this code would be in 'src/components/Footer.js'
// It would also have: export default Footer; at the end of the file.
const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 px-4 md:px-8 text-center">
    <p>&copy; {new Date().getFullYear()} CHALCHISA TAMIRU MOLA. All rights reserved.</p>
    <p className="text-sm mt-2">Built with React and Tailwind CSS</p>
  </footer>
);
// --- End of components/Footer.js ---

// Main App Component
// This is the actual App component that will be exported as default.
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Components are rendered here */}
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

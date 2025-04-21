import { useState } from 'react';

// Komponen untuk Hero Section
const Hero = ({ darkMode }) => {
    return (
      <section id="home" className={`min-h-screen flex items-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
        <div className="container mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Arvin Kurniawan</h1>
            <p className="text-xl mb-8">Software Developer</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#about" className={`px-6 py-3 rounded-full ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium transition duration-300`}>About Me</a>
              <a href="#projects" className={`px-6 py-3 rounded-full ${darkMode ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'} font-medium transition duration-300`}>My Projects</a>
              <a href="#contact" className={`px-6 py-3 rounded-full ${darkMode ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'} font-medium transition duration-300`}>Contact</a>
            </div>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex justify-center">
              <div className={`rounded-full overflow-hidden w-64 h-64 border-4 ${darkMode ? 'border-blue-500' : 'border-blue-600'}`}>
                <img src="/gweh.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Hero;
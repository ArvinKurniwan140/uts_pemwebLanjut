import { useState } from 'react';

// Komponen untuk Navbar
const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-md`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold">VinK</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-500 transition duration-300">Home</a>
            <a href="#about" className="hover:text-blue-500 transition duration-300">About Me</a>
            <a href="#projects" className="hover:text-blue-500 transition duration-300">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition duration-300">Contact</a>
            <button onClick={toggleDarkMode} className="focus:outline-none">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleDarkMode} className="mr-4 focus:outline-none">
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} py-2`}>
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <a href="#home" className="block hover:text-blue-500 transition duration-300" onClick={toggleMenu}>Home</a>
              <a href="#about" className="block hover:text-blue-500 transition duration-300" onClick={toggleMenu}>About Me</a>
              <a href="#projects" className="block hover:text-blue-500 transition duration-300" onClick={toggleMenu}>Projects</a>
              <a href="#contact" className="block hover:text-blue-500 transition duration-300" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    );
  };

export default Navbar;
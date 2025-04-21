import React from 'react';
// Komponen untuk Footer
const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'}`}>
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} - All rights reserved</p>
        <p className="mt-2">152023140 - Arvin Kurniawan</p>
      </div>
    </footer>
  );
};

export default Footer;

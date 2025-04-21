// Komponen untuk Project Card
import React from "react";

const ProjectCard = ({ project, darkMode }) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm mb-4">{project.duration}</p>
        <p className="mb-4">{project.description}</p>
        <div className="mb-4">
          <p className="font-medium mb-2">Technologies used:</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex space-x-3">
          {project.liveDemo && (
            <a 
              href={project.liveDemo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`px-4 py-2 rounded ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white text-sm transition duration-300`}
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} text-sm transition duration-300`}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
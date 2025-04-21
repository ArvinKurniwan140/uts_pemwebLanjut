import { useState } from 'react';
import ProjectCard from './ProjectCard';

// Komponen untuk Projects Section
const Projects = ({ darkMode }) => {
  const [filter, setFilter] = useState('all');
  
  // Project Data
  const projectsData = [
    {
      id: 1,
      title: "Public Service Website",
      duration: "Jan 2024 - Mar 2024",
      description: "A fully responsive e-commerce website with shopping cart functionality.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "/api/placeholder/800/600",
      category: "web",
      liveDemo: "#",
      github: "#"
    },
    {
      id: 2,
      title: "E-commerce Website",
      duration: "Jan 2024 - Mar 2024",
      description: "A fully responsive e-commerce website with shopping cart functionality.",
      technologies: ["PHP", "Laravel", "Mysql"],
      image: "/minimarket.png",
      category: "web",
      liveDemo: "#",
      github: "https://github.com/ArvinKurniwan140/pemweb"
    },
    {
      id: 3,
      title: "Automonus Car",
      duration: "Nov 2023 - Dec 2023",
      description: "Mobil otonom yang dapat dikendalikan melalui aplikasi mobile.",
      technologies: ["IOT", "C#", "Blynk"],
      image: "/mobil.jpg",
      category: "app",
      liveDemo: "/mobil.mp4",
      github: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      duration: "Oct 2023",
      description: "A personal portfolio website to showcase my projects and skills.",
      technologies: ["React", "Tailwind CSS"],
      image: "/porto.png",
      category: "web",
      liveDemo: "#",
      github: "#"
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
        
        <div className="flex justify-center mb-8">
          <div className={`inline-flex rounded-md p-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <button 
              onClick={() => setFilter('all')} 
              className={`px-4 py-2 rounded ${filter === 'all' ? (darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800') : ''} transition duration-300`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('web')} 
              className={`px-4 py-2 rounded ${filter === 'web' ? (darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800') : ''} transition duration-300`}
            >
              Web
            </button>
            <button 
              onClick={() => setFilter('app')} 
              className={`px-4 py-2 rounded ${filter === 'app' ? (darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800') : ''} transition duration-300`}
            >
              App
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} darkMode={darkMode} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-8">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};
export default Projects;
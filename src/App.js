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

// Komponen untuk About Section
const About = ({ darkMode }) => {
  // Skills Array
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "UI/UX Design", level: 65 }
  ];

  // Tools & Framework Array
  const tools = [
    { name: "React", icon: "💻" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Git", icon: "🔄" },
    { name: "VS Code", icon: "📝" },
    { name: "Figma", icon: "🖌️" },
    { name: "MySQL", icon: "🗄️" }
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Background</h3>
            <p className="mb-4">
              Saya lulusan dari SMK Negeri 1 Cianjur, Jurusan Rekayasa Perangkat Lunak.
            </p>
            <p>
              Saat ini, saya sedang menempuh pendidikan S1 di Instittut Teknologi Nasional Bandung, Jurusan Informatika. 
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className={`mb-4 p-4 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <h4 className="font-semibold">Rekayasa Perangkat Lunak</h4>
              <p className="text-sm">SMKN 1 Cianjur | 2020 - 2023</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className={`p-4 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
                  <div 
                    className="h-full rounded-full bg-blue-500" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Tools & Frameworks</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className={`p-4 rounded text-center ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition duration-300`}
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <div className="font-medium">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Komponen untuk Project Card
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

// Komponen untuk Contact Section
const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('sending');
    
    // Reset form after "submission"
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  // Contact information
  const contactInfo = [
    { type: "Email", value: "arvinkn094slw@gmail.com", icon: "📧" },
    { type: "Phone", value: "+62 81546435637", icon: "📱" },
    { type: "LinkedIn", value: "linkedin.com/in/arvin-kurniawan-0104apr", icon: "💼" },
    { type: "GitHub", value: "https://github.com/VinXq07", icon: "🐙" }
  ];

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-2xl mr-4">{info.icon}</span>
                  <div>
                    <p className="font-medium">{info.type}</p>
                    <p>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full p-3 rounded ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className={`px-6 py-3 rounded ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium transition duration-300`}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus === 'success' && (
                <p className="mt-4 text-green-500">Message sent successfully!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

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

// Komponen Utama App
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
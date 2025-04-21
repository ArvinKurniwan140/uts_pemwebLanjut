import React from "react";

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

export default About;
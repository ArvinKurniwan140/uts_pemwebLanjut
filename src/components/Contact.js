import { useState } from 'react';
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
export default Contact;
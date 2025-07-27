import React from 'react';

const projects = [
  {
    title: 'Hospital Management System',
    techStack: ['Java Swing', 'MySQL', 'JDBC'],
    description:
      'A desktop application to manage patient data, room allocation, and hospital billing efficiently.',
    link: 'https://github.com/yourusername/hospital-management-system',
  },
  {
    title: 'Movie Recommendation Chatbot',
    techStack: ['Python', 'Streamlit', 'TMDb API'],
    description:
      'A smart chatbot that recommends movies based on genre, language, and year using real-time API integration.',
    link: 'https://github.com/yourusername/movie-recommender',
  },
  {
    title: 'MuseBot (Smart India Hackathon)',
    techStack: ['Python', 'NLP', 'Flask'],
    description:
      'An intelligent virtual assistant bot for museums, designed for Smart India Hackathon.',
  },
  {
    title: 'Tourism Website (IBM Internship)',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
    description:
      'A modern tourism website built to promote destinations and improve travel engagement.',
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="Projects"
      className="min-h-screen px-4 py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">🚀 Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 hover:shadow-xl hover:shadow-purple-500/30 transition-transform transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold text-purple-300">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-800/30 border border-purple-400 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-purple-400 hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

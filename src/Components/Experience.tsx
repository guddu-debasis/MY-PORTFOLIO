import React from 'react';

const experiences = [
  {
    role: 'Smart India Hackathon 2024 – Participant',
    company: 'MHRD Innovation Cell',
    duration: 'Aug 2024',
    description:
      'Built an AI-powered museum chatbot called MuseBot to enhance visitor experience by answering queries about exhibits and history.',
  },
  {
    role: 'Software Development Intern',
    company: 'IBM (1st Internship)',
    duration: 'Mar 2024 – May 2024',
    description:
      'Developed a Tourism Website to showcase destinations and itineraries with responsive design and clean UI.',
  },
  {
    role: 'Software Development Intern',
    company: 'IBM (2nd Internship)',
    duration: 'Jun 2024 – Aug 2024',
    description:
      'Worked on internal automation tools and UI enhancements for IBM’s enterprise systems.',
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="Experience"
      className="min-h-screen px-4 py-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">💼 Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-lg hover:shadow-lg hover:shadow-pink-400/20 transition"
            >
              <h3 className="text-xl font-bold text-pink-300">
                {exp.role}
                <span className="text-sm text-gray-300"> @ {exp.company}</span>
              </h3>
              <p className="text-xs text-gray-400 mb-2">{exp.duration}</p>
              <p className="text-sm text-gray-200">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

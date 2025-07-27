import React, { type JSX } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiGithubactions,
  SiAdobe,
  SiJira,
} from "react-icons/si";

type SkillCategory = {
  title: string;
  skills: string[];
};

const skillData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
  },
  {
    title: "Dev Tools",
    skills: ["Git", "Postman", "Docker", "GitHub Actions"],
  },
  {
    title: "Others",
    skills: ["Python", "Figma", "Adobe XD", "JIRA"],
  },
];

const skillIcons: { [key: string]: JSX.Element } = {
  React: <FaReact className="text-cyan-400 text-3xl" />,
  TypeScript: <SiTypescript className="text-blue-400 text-3xl" />,
  JavaScript: <SiJavascript className="text-yellow-400 text-3xl" />,
  HTML5: <FaHtml5 className="text-orange-400 text-3xl" />,
  CSS3: <FaCss3Alt className="text-blue-400 text-3xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400 text-3xl" />,
  "Next.js": <SiNextdotjs className="text-white text-3xl" />,
  "Node.js": <FaNodeJs className="text-green-400 text-3xl" />,
  "Express.js": <SiExpress className="text-white text-3xl" />,
  MongoDB: <SiMongodb className="text-green-500 text-3xl" />,
  MySQL: <SiMysql className="text-blue-300 text-3xl" />,
  "REST APIs": <span className="text-sm text-white">🔗</span>,
  Git: <FaGitAlt className="text-orange-400 text-3xl" />,
  Postman: <SiPostman className="text-orange-300 text-3xl" />,
  Docker: <FaDocker className="text-blue-300 text-3xl" />,
  "GitHub Actions": <SiGithubactions className="text-purple-400 text-3xl" />,
  Python: <FaPython className="text-yellow-400 text-3xl" />,
  Figma: <FaFigma className="text-pink-400 text-3xl" />,
  "Adobe XD": <SiAdobe className="text-pink-400 text-3xl" />,
  JIRA: <SiJira className="text-blue-300 text-3xl" />,
};

const Skills: React.FC = () => {
  return (
    <motion.section
  id="skills"
  className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 py-16 scroll-mt-24 text-white"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold text-white tracking-wide mb-14 drop-shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skillData.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-xl hover:shadow-purple-600/40 transition-all duration-300 transform hover:scale-[1.02]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 underline underline-offset-4 decoration-purple-400">
                {category.title}
              </h3>
              <ul className="space-y-4 text-left">
                {category.skills.map((skill, i) => (
                  <motion.li
                    key={skill}
                    className="flex items-center space-x-4 text-white text-lg font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span>{skillIcons[skill] ?? "📌"}</span>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;

import React from "react";
import profilePic from "../assets/image.png";

import githubIcon from "../assets/github.jpg";
import linkedinIcon from "../assets/linkdin.jpg";
import leetcodeIcon from "../assets/leetcode.jpg";
import instagramIcon from "../assets/instagram.jpg";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
  className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 md:px-12 text-white flex items-center justify-center scroll-mt-24"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Hi, I am <br />
            <span className="text-purple-400">Debasis Panda</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            I’m a <span className="text-purple-500 font-bold">Full Stack Developer,DSA Enthusiast,Open Source Contributor</span>
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            A motivated and versatile individual with a passion for solving problems and building beautiful, performant applications. I'm committed to continuous learning and making meaningful contributions to impactful projects.
          </p>

       <a
  href="/resume.pdf"
  download
  className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
>
  📄 Download Resume
</a>
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-6">
            <a href="https://github.com/guddu-debasis" target="_blank" rel="noopener noreferrer">
              <img
                src={githubIcon}
                alt="GitHub"
                className="w-10 h-10 rounded-full hover:scale-110 transition duration-300"
              />
            </a>
            <a href="https://leetcode.com/u/DEBASIS_PANDA123-/" target="_blank" rel="noopener noreferrer">
              <img
                src={leetcodeIcon}
                alt="LeetCode"
                className="w-10 h-10 rounded-full hover:scale-110 transition duration-300"
              />
            </a>
            <a href="https://www.linkedin.com/in/debasis-panda-07b2912a5/" target="_blank" rel="noopener noreferrer">
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-10 h-10 rounded-full hover:scale-110 transition duration-300"
              />
            </a>
            <a href="https://www.instagram.com/_.debasis._454/" target="_blank" rel="noopener noreferrer">
              <img
                src={instagramIcon}
                alt="Instagram"
                className="w-10 h-10 rounded-full hover:scale-110 transition duration-300"
              />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex justify-center">
          <img
            src={profilePic}
            alt="Debasis Panda"
            className="w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-purple-600 shadow-xl object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

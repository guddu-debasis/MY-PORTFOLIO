import React from "react";
import logo from "../assets/Outr.png"; // OUTR logo

const Education = () => {
  return (
<div
  id="Education"
  className="min-h-screen  bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-16 px-6 md:px-20 scroll-mt-24 scroll-smooth"
>
      <h1 className="text-4xl font-bold text-center mb-4">Education</h1>
      <p className="text-center text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
        My education has been a journey of self-discovery and growth. Below are the key milestones of my academic path.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* B.Tech College */}
        <div className="bg-[#2b2343] border border-[#7147f5] rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 shadow-lg flex gap-4 items-start">
          <img
            src={logo}
            alt="OUTR Logo"
            className="w-16 h-16 object-contain bg-white rounded-xl p-1"
          />
          <div>
            <h2 className="text-xl font-bold mb-1">
              Odisha University of Technology and Research
            </h2>
            <p className="text-sm text-gray-300 mb-1">
              Bachelor of Technology - BTech, Computer Science (Ongoing)
            </p>
            <p className="text-sm text-purple-400 mb-2">2023 – Present</p>
            <p className="text-sm">
              <strong className="text-white">Current CGPA:</strong> 9.16
            </p>
          </div>
        </div>

        {/* 12th School */}
        <div className="bg-[#2b2343] border border-[#7147f5] rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 shadow-lg">
          <h2 className="text-xl font-bold mb-1">
            Tokyo Advance Higher Secondary School
          </h2>
          <p className="text-sm text-gray-300 mb-1">
            Higher Secondary (12th Grade)
          </p>
          <p className="text-sm text-purple-400 mb-2">Completed: 2022</p>
          <p className="text-sm">
            <strong className="text-white">Percentage:</strong> 92%
          </p>
        </div>

        {/* 10th School */}
  {/* 10th School - SSVM, Centered & Shortened */}
<div className="md:col-span-2 md:flex md:justify-center">
  <div className="bg-[#2b2343] border border-[#7147f5] rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 shadow-lg w-full md:w-[60%] lg:w-[45%]">
    <h2 className="text-xl font-bold mb-1 text-center">
      Saraswati Sishu Vidya Mandir, Balia, Balasore
    </h2>
    <p className="text-sm text-gray-300 mb-1 text-center">
      Secondary School (10th Grade)
    </p>
    <p className="text-sm text-purple-400 mb-2 text-center">
      Completed: 2019
    </p>
    <p className="text-sm text-center">
      <strong className="text-white">Percentage:</strong> 93%
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default Education;

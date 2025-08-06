import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import AboutImg from '../../assets/about.svg';

const About = () => {
  return (
    <section id='About'>
      <div className="w-full min-h-screen bg-gradient-to-br from-[#0b0c1a] via-[#0c0f2a] to-[#0b0c1a] px-6 md:px-20 py-16 md:py-24 text-white">
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          About Me
        </h2>

        <div className="md:flex md:items-center md:justify-center gap-16">
          <div className="flex justify-center mb-10 md:mb-0">
            <img
              className="w-48 md:w-72 rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105"
              src={AboutImg}
              alt="About Illustration"
            />
          </div>

          <ul className="flex flex-col gap-10 max-w-xl mx-auto">
            <li className="flex gap-4 items-start hover:scale-[1.02] transition-all duration-300">
              <IoArrowForward size={32} className="text-blue-400 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold">Software Developer</h3>
                <p className="text-base leading-relaxed text-gray-300">
                  Passionate about crafting intelligent systems and seamless user experiences. I work at the intersection of software engineering and AI, turning complex problems into elegant, efficient solutions.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start hover:scale-[1.02] transition-all duration-300">
              <IoArrowForward size={32} className="text-blue-400 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold">Full Stack Developer</h3>
                <p className="text-base leading-relaxed text-gray-300">
                  Experienced in MERN stack development. I build modern, scalable, and responsive apps with strong backend logic and elegant UIs using modern frameworks like React, Node.js, and MongoDB.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start hover:scale-[1.02] transition-all duration-300">
              <IoArrowForward size={32} className="text-blue-400 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold">AI/ML Enthusiast</h3>
                <p className="text-base leading-relaxed text-gray-300">
                  From DRL research to NLP applications, I develop intelligent systems that learn from data. My experience spans deep learning models, real-world AI deployments, and solving complex problems through machine learning.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;

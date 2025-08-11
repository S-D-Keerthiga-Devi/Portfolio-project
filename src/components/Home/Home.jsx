import React from 'react';
import profile from '../../assets/profile2.jpeg';
import TextChanger from './TextChanger';
import MagneticButton from './MagneticButton';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"; 

const Home = () => {
  return (
    <section
      id="Home"
      className="relative w-full min-h-screen bg-gradient-to-br from-[#0b0c1a] via-[#0c0f2a] to-[#0b0c1a] px-6 md:px-20 pt-32 md:pt-40 pb-16 flex flex-col md:flex-row items-center justify-between gap-16"
    >

      <motion.div
        className="flex-1 text-center md:text-left text-white"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hello, I'm <span className="text-[#b78dff]">Keerthiga</span>
          <br />
          <TextChanger />
        </h1>

        <p className="mt-5 text-base md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
          Passionate full-stack developer and AI/ML enthusiast, skilled in building 
          <span className="text-white font-medium"> MERN stack applications</span> and solving 
          real-world problems through code.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center md:justify-start">
          <MagneticButton>
            <Button
              className="bg-gradient-to-r from-[#3a0ca3] to-[#7209b7] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-90"
              asChild
            >
              <a href="#Contact">Contact Me</a>
            </Button>
          </MagneticButton>

          <MagneticButton>
            <Button
              className="bg-gradient-to-r from-[#3a0ca3] to-[#7209b7] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-90"
              asChild
            >
              <a href="/Keerthiga_resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </MagneticButton>
        </div>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >

        <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-[#3a0ca3] to-[#7209b7] rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <div className="relative z-10 p-[3px] rounded-full bg-gradient-to-r from-[#3a0ca3] to-[#7209b7]">
          <div className="bg-[#0b0c1a] p-2 rounded-full">
            <img
              src={profile}
              alt="Profile"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;

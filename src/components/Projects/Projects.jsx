import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Blog from "../../assets/AIBlog.jpg";
import Drl from "../../assets/DRLMOA.jpg";
import House from "../../assets/Houseprice.jpg";
import JobdexImg from "../../assets/Jobbdex.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const Projects = () => {
  return (
    <section
      id="Projects"
      className="w-full min-h-screen bg-gradient-to-br from-[#0b0c1a] via-[#0c0f2a] to-[#0b0c1a] px-6 md:px-20 py-16 md:py-24 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#3a0ca3] via-[#7209b7] to-[#b5179e] bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 place-items-center"
      >
        <ProjectCard
          title="AI-Powered Blog Generator"
          main="Built and deployed a MERN stack blog platform using Gemini API for AI-generated content and ImageKit for optimized image handling."
          details="This project uses the Gemini API to automatically generate blog content, with an admin panel for management. Image optimization is handled with ImageKit."
          demo="https://keerthiga-quick-blog-app.vercel.app"
          source="https://github.com/S-D-Keerthiga-Devi/AI-powered-Blog-App"
          image={Blog}
        />

        <ProjectCard
          title="Jobdex – AI Career Platform"
          main="Secure AI platform using Gemini API for resume parsing and job-fit scoring."
          details="Features include AI-driven job matching, deepfake detection with ResNet-18, and a modern React.js frontend."
          demo="https://jobdex.netlify.app"
          source="https://github.com/S-D-Keerthiga-Devi/jobdex"
          image={JobdexImg}
        />

        <ProjectCard
          title="DRL-MOA for MOTSP"
          main="Developed a DRL solution for the Multi-Objective TSP using Pointer Networks."
          details="Used CNN-GRU architecture, hyperparameter tuning with Optuna, and deployed a Streamlit demo."
          demo="https://drlmoa-optimized.streamlit.app"
          source="https://github.com/S-D-Keerthiga-Devi/DRLMOA"
          image={Drl}
        />

        <ProjectCard
          title="House Price Prediction – ML"
          main="Linear Regression model using the California housing dataset."
          details="Performed feature engineering, preprocessing, and deployed via Streamlit with Pandas and Scikit-learn."
          demo="https://housepriceprediction100.streamlit.app"
          source="https://github.com/S-D-Keerthiga-Devi/House-Price-Prediction"
          image={House}
        />
      </motion.div>
    </section>
  );
};

export default Projects;

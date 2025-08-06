import React from 'react';
import ProjectCard from './ProjectCard';
import Blog from '../../assets/AIBlog.jpg';
import Drl from '../../assets/DRLMOA.jpg';
import House from '../../assets/HousePrice.jpg';
import JobdexImg from '../../assets/Jobbdex.jpg';

const Projects = () => {
  return (
    <section
      id='Projects'
      className="w-full min-h-screen bg-gradient-to-br from-[#0b0c1a] via-[#0c0f2a] to-[#0b0c1a] px-6 md:px-20 py-16 md:py-24 text-white"


    >
      <h2 className='text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
        Projects
      </h2>


      <div className='grid gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 place-items-center'>
        <ProjectCard
          title="AI-Powered Blog Generator"
          main="Built and deployed a MERN stack blog platform using Gemini API for AI-generated content and ImageKit for optimized image handling. Developed a secure admin panel for publishing and moderation."
          demo="https://keerthiga-quick-blog-app.vercel.app"
          source="https://github.com/S-D-Keerthiga-Devi/AI-powered-Blog-App"
          image={Blog}
        />

        <ProjectCard
          title="Jobdex – AI Career Platform"
          main="Secure AI platform using Gemini API for resume parsing and job-fit scoring. Integrated ResNet-18 deepfake detection with a Flask backend and React.js frontend for candidate verification."
          demo="https://jobdex.netlify.app"
          source="https://github.com/S-D-Keerthiga-Devi/jobdex"
          image={JobdexImg}
        />

        <ProjectCard
          title="DRL-MOA for MOTSP"
          main={
            <span>
              Developed a DRL solution for the Multi-Objective TSP using Pointer Networks with CNN-GRU architecture. Tuned via Optuna; demo via Streamlit. <br />
              <a
                href="http://ssrn.com/abstract=5343852"
                target="_blank"
                rel="noopener noreferrer"
                className='text-purple-400 underline hover:text-purple-300'
              >
                View Research Paper
              </a>
            </span>
          }
          demo="https://drlmoa-optimized.streamlit.app"
          source="https://github.com/S-D-Keerthiga-Devi/DRLMOA"
          image={Drl}
        />

        <ProjectCard
          title="House Price Prediction – ML"
          main="Linear Regression model using the California housing dataset. Performed feature engineering, preprocessing, and deployed via Streamlit with visualization using Pandas and Scikit-learn."
          demo="https://housepriceprediction100.streamlit.app"
          source="https://github.com/S-D-Keerthiga-Devi/House-Price-Prediction"
          image={House}
        />
      </div>
    </section>
  );
};

export default Projects;

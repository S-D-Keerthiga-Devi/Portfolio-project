import React from 'react';

const ProjectCard = ({ title, main, demo, source, image }) => {
  return (
    <div className='bg-[#0f1a2f] bg-opacity-60 backdrop-blur-md rounded-xl p-6 shadow-lg p-6 w-full max-w-xs md:max-w-sm lg:max-w-md rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300'>
      {image && (
        <img
          src={image}
          alt={title}
          className='w-full h-40 object-cover rounded-xl mb-4'
        />
      )}
      <h3 className='text-xl md:text-2xl font-bold mb-2 text-white'>{title}</h3>
      <p className='text-sm md:text-md text-gray-300 leading-relaxed'>{main}</p>
      <div className='mt-6 flex gap-4'>
        {demo && (
          <a
          href={demo}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-[#3a0ca3] hover:bg-[#5f0faa] text-white py-2 px-4 rounded-lg transition duration-300 text-sm md:text-base'
        >
          Demo
        </a>
        
        )}
        {source && (
          <a
          href={source}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-[#4c1d95] hover:bg-[#6c2bd9] text-white py-2 px-4 rounded-lg transition duration-300 text-sm md:text-base'
        >
          Source
        </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

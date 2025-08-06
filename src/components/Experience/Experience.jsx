import React from 'react';
import {
    FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs,
    FaFigma, FaGitAlt, FaLaptopCode,
} from 'react-icons/fa';
import {
    SiMongodb, SiTailwindcss, SiExpress, SiPython,
    SiScikitlearn, SiNumpy, SiPandas, SiTensorflow, SiPlotly
} from 'react-icons/si';
import { BsStars } from "react-icons/bs";

const Experience = () => {
    return (
        <section
            id='Experience'
            className="w-full min-h-screen bg-gradient-to-br from-[#0b0c1a] via-[#0c0f2a] to-[#0b0c1a] px-6 md:px-20 py-16 md:py-24 text-white"
        >
            <h2 className='text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                Experience
            </h2>

            <div className='flex flex-col lg:flex-row gap-12 items-start'>

                <div className='w-full flex justify-center md:justify-start'>
                    <div className='grid grid-cols-3 sm:grid-cols-4 gap-6 max-w-[360px] md:max-w-full md:w-1/2'>
                        <SkillIcon icon={<FaHtml5 />} color='#E34F26' />
                        <SkillIcon icon={<FaCss3 />} color='#1572B6' />
                        <SkillIcon icon={<FaJs />} color='#F7DF1E' />
                        <SkillIcon icon={<FaReact />} color='#61DAFB' />
                        <SkillIcon icon={<FaNodeJs />} color='#339933' />
                        <SkillIcon icon={<SiExpress />} color='#FFFFFF' />
                        <SkillIcon icon={<SiMongodb />} color='#47A248' />
                        <SkillIcon icon={<SiTailwindcss />} color='#38B2AC' />
                        <SkillIcon icon={<FaGitAlt />} color='#F05032' />
                        <SkillIcon icon={<SiPython />} color='#3776AB' />
                        <SkillIcon icon={<BsStars />} color="#5E5ADB" />
                        <SkillIcon icon={<SiScikitlearn />} color="#F7931E" />
                        <SkillIcon icon={<SiNumpy />} color="#1A73E8" />
                        <SkillIcon icon={<SiPandas />} color="#8A63D2" />
                        <SkillIcon icon={<SiPlotly />} color='#00E5FF' label="Data Viz" />
                        <SkillIcon icon={<SiTensorflow />} color="#FF6F00" />
                    </div>
                </div>

                <div className='flex flex-col gap-8 md:w-1/2'>
                    <ExperienceCard
                        icon={<FaLaptopCode size={40} />}
                        title='React.JS Developer, TEN'
                        date='Aug 2025 - Present'
                        bullets={[
                            'Used React.js to build and develop web projects.',
                            'Building responsive and user-friendly interfaces',
                            'Styled components using CSS and Tailwind CSS for clean layouts.',
                        ]}
                    />

                    <ExperienceCard
                        icon={<FaLaptopCode size={40} />}
                        title="GSSOC'25 Contributor"
                        date='Jul 2025 - Present'
                        bullets={[
                            'Contributing to open-source projects under GSSoC (GirlScript Summer of Code).',
                            'Focused on front-end tasks using React and Tailwind.',
                            'Explored backend integration using Python and Flask.',
                        ]}
                    />

                    <ExperienceCard
                        icon={<FaLaptopCode size={40} />}
                        title='Independent Researcher'
                        date='Apr 2025 - Jul 2025'
                        bullets={[
                            'Researched solutions for the Multi-Objective Travelling Salesman Problem using a hybrid AI approach (DRL + MOA).',
                            'Designed a scalable model combining CNN-Transformer encoders and multi-decoder networks.',
                            <a
                                href="http://ssrn.com/abstract=5343852"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-400 hover:underline"
                            >
                                View Publication on SSRN
                            </a>
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

const SkillIcon = ({ icon, color }) => (
    <div
        className='bg-[#0f1a2f] p-4 rounded-2xl flex justify-center items-center shadow-md hover:scale-105 transition-transform duration-300'
        style={{ color }}
    >
        {React.cloneElement(icon, { size: 40 })}
    </div>
);

const ExperienceCard = ({ icon, title, date, bullets }) => (
    <div className='bg-[#0f1a2f] bg-opacity-60 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow'>
        <div className='flex gap-4 items-center mb-2'>
            <div className='text-[#9b45e9]'>{icon}</div>
            <div>
                <h3 className='text-xl font-semibold'>{title}</h3>
                <p className='text-sm text-gray-400'>{date}</p>
            </div>
        </div>
        <ul className='list-disc pl-6 text-sm text-gray-300 leading-relaxed'>
            {bullets.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
        </ul>
    </div>
);

export default Experience;

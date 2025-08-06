import React from 'react';
import profile from '../../assets/profile.jpeg';
import TextChanger from '../../TextChanger';

const Home = () => {
    return (
        <section
            id='Home'
            className="w-full min-h-screen bg-gradient-to-br from-[#0b0c1a] via-[#0c0f2a] to-[#0b0c1a] px-6 md:px-20 pt-32 md:pt-40 pb-16 text-white flex flex-col md:flex-row items-center justify-between gap-12"
        >

            <div className='w-full md:w-1/2 text-center md:text-left'>
                <h1 className='text-3xl md:text-6xl font-extrabold leading-tight tracking-tight'>
                    <TextChanger />
                </h1>

                <p className='mt-5 text-base md:text-xl leading-relaxed text-gray-300'>
                    Passionate full-stack developer and AI/ML enthusiast, skilled in building <span className='text-white font-medium'>MERN stack applications</span> and solving real-world problems through code.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center md:justify-start">
                    <a href="#Contact" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-gradient-to-r from-[#3a0ca3] to-[#7209b7] text-white text-sm md:text-base px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 hover:scale-105 hover:opacity-90">
                            Contact Me
                        </button>
                    </a>

                    <a href="/Keerthiga_resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-gradient-to-r from-[#3a0ca3] to-[#7209b7] text-white text-sm md:text-base px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 hover:scale-105 hover:opacity-90">
                            Resume
                        </button>
                    </a>
                </div>
            </div>

            <div className='w-full md:w-1/2 flex justify-center'>
                <img
                    src={profile}
                    alt="Profile"
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-xl hover:scale-105 transition duration-300"
                />
            </div>
        </section>
    );
};

export default Home;

import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <section id='Contact'>
        <div
      className="flex flex-col items-center text-center gap-6 bg-gradient-to-br from-[#0b0c1a] via-[#0c0f2a] to-[#0b0c1a] text-white py-10 md:py-12 px-4"
    >
      <div>
  <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-[#c5b8f3] mb-2">
    Let’s Connect
  </h1>
  <p className="text-sm md:text-xl text-gray-300 font-light max-w-xl">
    Whether you have a question, opportunity, or just want to say hi — I'm always open to connecting.
  </p>
</div>


      <ul className="flex flex-col gap-3 text-sm md:text-lg">
        <li className="flex items-center gap-2 justify-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:keertix04@gmail.com" className="hover:underline">
            keertix04@gmail.com
          </a>
        </li>

        <li className="flex items-center gap-2 justify-center">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/s-d-keerthiga-devi-5262bb27b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </li>

        <li className="flex items-center gap-2 justify-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/S-D-Keerthiga-Devi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
    </section>
  );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const contacts = [
    {
      icon: <MdOutlineEmail size={22} />,
      label: "keertix04@gmail.com",
      link: "mailto:keertix04@gmail.com",
    },
    {
      icon: <CiLinkedin size={22} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/s-d-keerthiga-devi-5262bb27b",
    },
    {
      icon: <FaGithub size={22} />,
      label: "GitHub",
      link: "https://github.com/S-D-Keerthiga-Devi",
    },
  ];

  return (
    <motion.section
      id="Contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#0b0c1a] via-[#0c0f2a] to-[#0b0c1a] text-white py-10 md:py-12 px-4"
    >
      <div className="flex flex-col items-center text-center gap-8">

        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-[#c5b8f3] mb-3">
            Let’s Connect
          </h1>
          <p className="text-sm md:text-lg text-gray-300 font-light max-w-xl">
            Whether you have a question, opportunity, or just want to say hi — I’m always open to connecting.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-center">
          {contacts.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center justify-center gap-3 group"
            >
              <motion.span
                className="text-purple-300 transition-colors duration-300 group-hover:text-purple-400"
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {item.icon}
              </motion.span>
              <Button
                asChild
                variant="ghost"
                className="text-purple-300 hover:text-purple-100 bg-transparent hover:bg-gradient-to-r hover:from-[#3a0ca3] hover:to-[#7209b7] hover:shadow-lg hover:shadow-purple-700/50 transition-all duration-300 px-4 py-1"
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;

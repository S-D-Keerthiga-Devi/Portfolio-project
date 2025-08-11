import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { IoArrowForward } from "react-icons/io5";
import AboutImg from "../../assets/about.svg";

const timeline = [
  {
    title: "Software Developer",
    desc: "Passionate about crafting intelligent systems and seamless user experiences. I work at the intersection of software engineering and AI, turning complex problems into elegant, efficient solutions.",
    badge: "Engineering",
  },
  {
    title: "Full Stack Developer",
    desc: "Experienced in MERN stack development. I build modern, scalable, and responsive apps with strong backend logic and elegant UIs using modern frameworks like React, Node.js, and MongoDB.",
    badge: "MERN Stack",
  },
  {
    title: "AI/ML Enthusiast",
    desc: "From DRL research to NLP applications, I develop intelligent systems that learn from data. My experience spans deep learning models, real-world AI deployments, and solving complex problems through machine learning.",
    badge: "AI/ML",
  },
];

const About = () => {
  return (
    <section id="About">
      <div className="w-full min-h-screen bg-gradient-to-br from-[#0b0c1a] via-[#140f26] to-[#0b0c1a] px-6 md:px-20 py-16 md:py-24 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 text-transparent bg-clip-text">
          About Me
        </h2>

        <div className="md:flex md:items-center md:justify-center gap-16 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mb-10 md:mb-0"
          >
            <img
              className="w-48 md:w-72 rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105"
              src={AboutImg}
              alt="About Illustration"
            />
          </motion.div>

          <div className="relative max-w-xl mx-auto">
            <ul className="flex flex-col gap-10">
              {timeline.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >

                  <div className="flex flex-col items-center relative">

                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border border-purple-300 shadow-lg shadow-purple-500/30 text-purple-100">
                      <IoArrowForward size={20} />
                    </div>


                    {index !== timeline.length - 1 ? (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-purple-300 to-purple-600"></div>
                    ) : (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-purple-300 to-purple-600 relative">

                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-400 shadow-lg shadow-purple-300/70"></div>
                      </div>
                    )}
                  </div>

                  <Card className="bg-[#1b0f2f]/80 backdrop-blur-md border border-purple-500/30 shadow-lg shadow-purple-700/50 hover:shadow-purple-500/70 transition-all duration-300 w-full">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-semibold text-purple-200">
                          {item.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="text-sm bg-purple-700/40 text-purple-200 border border-purple-500/40"
                        >
                          {item.badge}
                        </Badge>
                      </div>
                      <Separator className="my-2 bg-purple-500/30" />
                      <p className="text-base leading-relaxed text-purple-300">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs,
  FaFigma, FaGitAlt, FaLaptopCode
} from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiExpress, SiPython,
  SiScikitlearn, SiNumpy, SiPandas, SiTensorflow, SiPlotly
} from "react-icons/si";
import { BsStars } from "react-icons/bs";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const tabs = ["Work Experience", "Open Source", "Research"];

const skillsData = {
  "Work Experience": [
    { icon: <FaHtml5 />, color: "#E34F26", name: "HTML5" },
    { icon: <FaCss3 />, color: "#1572B6", name: "CSS3" },
    { icon: <FaJs />, color: "#F7DF1E", name: "JavaScript" },
    { icon: <FaReact />, color: "#61DAFB", name: "React" },
    { icon: <FaNodeJs />, color: "#339933", name: "Node.js" },
    { icon: <SiTailwindcss />, color: "#38B2AC", name: "Tailwind CSS" }
  ],
  "Open Source": [
    { icon: <FaReact />, color: "#61DAFB", name: "React" },
    { icon: <SiTailwindcss />, color: "#38B2AC", name: "Tailwind CSS" },
    { icon: <SiPython />, color: "#3776AB", name: "Python" },
    { icon: <BsStars />, color: "#5E5ADB", name: "Gemini API" },
    { icon: <SiExpress />, color: "#3b3b3b", name: "Express.js" }, 
    { icon: <SiMongodb />, color: "#47A248", name: "MongoDB" },
  ],
  Research: [
    { icon: <SiPython />, color: "#3776AB", name: "Python" },
    { icon: <SiScikitlearn />, color: "#F7931E", name: "Scikit-learn" },
    { icon: <SiNumpy />, color: "#1A73E8", name: "NumPy" },
    { icon: <SiPandas />, color: "#8A63D2", name: "Pandas" },
    { icon: <SiTensorflow />, color: "#FF6F00", name: "TensorFlow" },
    { icon: <SiPlotly />, color: "#00E5FF", name: "Plotly" },
  ],
};

const experienceData = {
  "Work Experience": [
    {
      icon: <FaLaptopCode size={40} />,
      title: "React.JS Developer, TEN",
      date: "Aug 2025 - Present",
      bullets: [
        "Used React.js to build and develop web projects.",
        "Building responsive and user-friendly interfaces.",
        "Styled components using CSS and Tailwind CSS for clean layouts.",
      ],
    },
  ],
  "Open Source": [
    {
      icon: <BsStars size={40} />,
      title: "GSSOC'25 Contributor",
      date: "Jul 2025 - Present",
      bullets: [
        "Contributing to open-source projects under GSSoC.",
        "Focused on front-end tasks using React and Tailwind.",
        "Explored backend integration using Python and Flask.",
      ],
    },
  ],
  Research: [
    {
      icon: <FaLaptopCode size={40} />,
      title: "Independent Researcher",
      date: "Apr 2025 - Jul 2025",
      bullets: [
        "Researched Multi-Objective Travelling Salesman Problem using hybrid AI approach.",
        "Designed CNN-Transformer encoders with multi-decoder networks.",
        <span key="pub">
          <a
            href="http://ssrn.com/abstract=5343852"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:underline"
          >
            View Publication on SSRN
          </a>
        </span>,
      ],
    },
  ],
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section
      id="Experience"
      className="w-full min-h-screen bg-gradient-to-br from-[#0b0c1a] via-[#0c0f2a] to-[#0b0c1a] px-4 sm:px-6 md:px-20 py-12 md:py-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 bg-clip-text text-transparent">
        Experience
      </h2>

      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v)} className="w-full max-w-5xl mx-auto">

        <div className="mb-6">
        <TabsList
  className="grid grid-cols-3 sm:flex sm:justify-center sm:items-center gap-2 sm:gap-4 mb-2 bg-[#161726] rounded-full p-1 z-10 mx-auto"
>

            {tabs.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="px-3 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base
                           text-[#e6dfff] whitespace-nowrap
                           hover:text-white
                           data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#3a0ca3] data-[state=active]:to-[#7209b7] data-[state=active]:text-white"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {tabs.map((tab) => (
          <TabsContent key={tab} value={tab} className="focus:outline-none">

            <AnimatePresence mode="wait">
              <motion.div
                key={tab + "-skills"}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3 sm:gap-5 justify-items-center mb-8 px-2"
              >
                {skillsData[tab].map((skill, idx) => (
                  <SkillIcon key={idx} icon={skill.icon} color={skill.color} name={skill.name} />
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col gap-6 max-w-3xl mx-auto px-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab + "-cards"}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col gap-6"
                >
                  {experienceData[tab].map((exp, idx) => (
                    <ExperienceCard key={idx} {...exp} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

const SkillIcon = ({ icon, color, name }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        boxShadow: `0 6px 18px ${color}55`,
      }}
      transition={{ type: "spring", stiffness: 260 }}
      className="relative group bg-[#0f1a2f] p-3 sm:p-4 rounded-2xl flex justify-center items-center shadow-sm cursor-pointer"
      style={{ color }}
      aria-label={name}
      role="button"
      tabIndex={0}
    >
      {React.cloneElement(icon, { size: 36 })}

      <div
        className="absolute bottom-full mb-2 min-w-max bg-[#1a1f35] text-[#e9e0ff] text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        {name}
      </div>
    </motion.div>
  );
};

const ExperienceCard = ({ icon, title, date, bullets }) => (
  <motion.div
    whileHover={{
      scale: 1.01,
      boxShadow: "0 8px 30px rgba(124,58,237,0.12), 0 0 18px rgba(124,58,237,0.08)",
    }}
    transition={{ type: "spring", stiffness: 220 }}
  >
    <Card className="bg-[#171227] bg-opacity-80 backdrop-blur-md border border-purple-700/30 shadow-sm">
      <CardHeader className="flex gap-4 items-start p-4">
        <div className="text-[#c9b8ff] mt-1">{icon}</div>
        <div className="text-left">

          <CardTitle className="text-lg sm:text-xl text-purple-300">
            {title}
          </CardTitle>
          <p className="text-sm text-purple-200/80">{date}</p>
        </div>
      </CardHeader>

      <CardContent className="text-left px-4 pb-4 pt-0">
        <ul className="list-disc pl-5 text-sm text-purple-100/90 space-y-1">
          {bullets.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </motion.div>
);


export default Experience;

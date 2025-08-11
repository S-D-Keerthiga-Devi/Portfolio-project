import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ title, main, demo, source, image, details }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={`relative transition-all duration-500 ${
        expanded
          ? "shadow-lg shadow-purple-500/30"
          : "hover:shadow-purple-500/20"
      }`}
    >
      <Card className="bg-[#0f1a2f]/80 backdrop-blur-md rounded-2xl p-5 max-w-xs md:max-w-sm lg:max-w-md border border-purple-700">
        
        <CardHeader className="relative group rounded-xl overflow-hidden p-0">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover rounded-xl"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <span className="text-white font-semibold text-lg">{title}</span>
          </div>
        </CardHeader>

        <CardContent>
          <h3 className="text-2xl font-bold text-white mt-4">{title}</h3>
          <p className="text-gray-300 text-sm mt-2">
            {expanded
              ? main
              : main.length > 80
              ? main.substring(0, 80) + "..."
              : main}
          </p>

          <div className="flex gap-4 mt-4">
            {demo && (
              <Button
                asChild
                className="flex-1 bg-gradient-to-r from-[#3a0ca3] to-[#7209b7] hover:shadow-[0_0_10px_rgba(114,9,183,0.8)]"
              >
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
              </Button>
            )}
            {source && (
              <Button
                asChild
                className="flex-1 bg-gradient-to-r from-[#3a0ca3] to-[#7209b7] hover:shadow-[0_0_10px_rgba(114,9,183,0.8)]"
              >
                <a href={source} target="_blank" rel="noopener noreferrer">
                  Source
                </a>
              </Button>
            )}
          </div>

          <Button
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-4 w-full bg-gradient-to-r from-[#3a0ca3] to-[#7209b7] hover:shadow-[0_0_10px_rgba(114,9,183,0.8)]"
          >
            {expanded ? "View Less" : "View More"}
          </Button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden mt-4 border-t border-gray-700 pt-4"
              >
                <p className="text-gray-400 mb-4 text-sm">{details || main}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;

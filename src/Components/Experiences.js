import React from "react";
import html from "../assets/html.png";
import github from "../assets/github.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import { motion } from "framer-motion"; // For animations

const skills = [
  { id: 1, name: "React", src: react, color: "from-blue-500 to-blue-700" },
  {
    id: 2,
    name: "JavaScript",
    src: javascript,
    color: "from-yellow-400 to-yellow-600",
  },
  { id: 3, name: "Tailwind", src: tailwind, color: "from-sky-400 to-sky-600" },
  { id: 4, name: "CSS", src: css, color: "from-blue-400 to-blue-600" },
  { id: 5, name: "HTML", src: html, color: "from-orange-500 to-orange-700" },
  { id: 6, name: "GitHub", src: github, color: "from-gray-400 to-gray-600" },
];

export const Experiences = () => {
  return (
    <div
      id="skills"
      className="bg-gradient-to-b from-black to-gray-800 text-white w-full py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-gray-400 mt-2">
            These are the technologies I've mastered
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex justify-center"
              data-aos="zoom-in"
            >
              <div
                className={`relative w-32 h-32 rounded-full bg-gradient-to-b ${skill.color} p-1 shadow-lg hover:shadow-xl transition-shadow`}
              >
                {/* Skill Icon */}
                <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="w-16 h-16 hover:scale-110 transition-transform"
                  />
                </div>

                {/* Skill Name */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <p className="text-lg font-semibold text-yellow-500">
                    {skill.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

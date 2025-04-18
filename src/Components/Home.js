import React, { useEffect, useState } from "react";
import resume from "../assets/MitraVarunResume.pdf";
import { Link } from "react-scroll";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const Home = () => {
  const skills = [
    "AI Engineer",
    "Machine Learning Engineer",
    "Deep Learning Engineer",
    "Data Scientist",
    "Data Analyst",
    "MLOps Engineer",
  ];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayedSkill, setDisplayedSkill] = useState("");
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  // Typewriter effect for the current skill
  useEffect(() => {
    if (currentLetterIndex < skills[currentSkillIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedSkill(
          (prev) => prev + skills[currentSkillIndex][currentLetterIndex]
        );
        setCurrentLetterIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentSkillIndex, currentLetterIndex, skills]);

  useEffect(() => {
    if (currentLetterIndex === skills[currentSkillIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        setDisplayedSkill("");
        setCurrentLetterIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentLetterIndex, currentSkillIndex, skills.length]);

  const letterVariants = {
    visible: { transition: { duration: 0.3 } },
  };

  return (
    <div
      id="home"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 flex justify-center items-center px-4 py-16 md:py-0"
    >
      <div className="flex flex-col gap-y-4 md:gap-y-6 items-center text-center text-white max-w-4xl mx-auto">
        {/* Welcome Text */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-bold text-gray-300"
        >
          Welcome to My Portfolio
        </motion.h3>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-500"
        >
          Hi, I'm Mitra Varun
        </motion.h1>

        {/* Animated Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 h-12 md:h-16 flex flex-wrap justify-center items-center gap-2"
        >
          <h5 className="whitespace-nowrap">I'm a </h5>
          <AnimatePresence mode="wait">
            <motion.div className="flex min-h-[1.5em]">
              {displayedSkill.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  animate="visible"
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="inline-block"
                >
                  {letter === "_" ? " " : letter}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Description */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg font-medium text-gray-300 max-w-3xl px-2"
        >
          I leverage AI-driven solutions to transform complex data into
          actionable insights, optimizing processes and unlocking growth
          opportunities for smarter, faster business decisions
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto px-4 sm:px-0"
        >
          {/* Projects Button */}
          <Link
            to="projects"
            smooth
            duration={500}
            className="group hover:cursor-pointer flex items-center justify-center px-4 py-3 sm:px-6 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition-colors w-full sm:w-auto"
          >
            View Projects
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Resume Button */}
          <a
            href={resume}
            download="Mitra_Varun_Resume"
            className="flex items-center justify-center px-4 py-3 sm:px-6 rounded-lg border-2 border-yellow-500 text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-black transition-colors w-full sm:w-auto"
          >
            Download Resume
            <FaDownload className="ml-2" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

import React from "react";
import { motion } from "framer-motion";

// Icons (Replace with actual icon imports or SVGs)
import { FaPython, FaJava, FaDocker, FaAws, FaGit } from "react-icons/fa";
import {
  SiTensorflow,
  SiKubernetes,
  SiPytorch,
  SiFlask,
  SiStreamlit,
} from "react-icons/si";
import { DiCss3, DiHtml5, DiDatabase } from "react-icons/di";

const skills = {
  Languages: [
    {
      name: "Python",
      icon: <FaPython className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Java",
      icon: <FaJava className="w-6 h-6" />,
      color: "from-red-400 to-red-600",
    },
    {
      name: "C++",
      icon: <SiPytorch className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "SQL",
      icon: <DiDatabase className="w-6 h-6" />,
      color: "from-green-400 to-green-600",
    },
    {
      name: "C#",
      icon: <FaJava className="w-6 h-6" />,
      color: "from-indigo-400 to-indigo-600",
    },
  ],
  FrameworksTools: [
    {
      name: "TensorFlow",
      icon: <SiTensorflow className="w-6 h-6" />,
      color: "from-yellow-400 to-yellow-600",
    },

    {
      name: "Docker",
      icon: <FaDocker className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "PySpark",
      icon: <FaPython className="w-6 h-6" />,
      color: "from-red-400 to-red-600",
    },
    {
      name: "Hugging Face",
      icon: <SiTensorflow className="w-6 h-6" />,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "LangChain",
      icon: <SiPytorch className="w-6 h-6" />,
      color: "from-green-400 to-green-600",
    },
    {
      name: "Flask",
      icon: <SiFlask className="w-6 h-6" />,
      color: "from-pink-400 to-pink-600",
    },

    {
      name: "AWS",
      icon: <FaAws className="w-6 h-6" />,
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "Power BI",
      icon: <DiDatabase className="w-6 h-6" />,
      color: "from-indigo-400 to-indigo-600",
    },
    {
      name: "MLFlow",
      icon: <SiPytorch className="w-6 h-6" />,
      color: "from-indigo-400 to-indigo-600",
    },
  ],
  TechnicalSkills: [
    {
      name: "Machine Learning",
      icon: <SiTensorflow className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "Deep Learning",
      icon: <SiTensorflow className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Natural Langauge Proceesing",
      icon: <SiTensorflow className="w-6 h-6" />,
      color: "from-green-400 to-green-600",
    },
    {
      name: "Cloud Computing",
      icon: <FaAws className="w-6 h-6" />,
      color: "from-red-400 to-red-600",
    },

    {
      name: "Generative AI",
      icon: <SiTensorflow className="w-6 h-6" />,
      color: "from-pink-400 to-pink-600",
    },
    {
      name: "Computer Networks",
      icon: <DiDatabase className="w-6 h-6" />,
      color: "from-teal-400 to-teal-600",
    },
    {
      name: "Database Management Systems",
      icon: <DiDatabase className="w-6 h-6" />,
      color: "from-orange-400 to-orange-600",
    },
  ],
};

export const Experiences = () => {
  return (
    <div
      id="skills"
      className="bg-gradient-to-b from-black to-gray-800 text-white w-full py-8 md:py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold  bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Technologies and skills I work with
          </p>
        </div>

        {/* Languages Section */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl text-center font-semibold text-yellow-400 mb-4 md:mb-6">
            Languages
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {skills.Languages.map((skill, index) => (
              <motion.div
                key={index}
                data-aos="zoom-in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 md:p-6 bg-gray-800 rounded-lg border-2 border-transparent hover:border-yellow-400 transition-all shadow-md hover:shadow-lg flex flex-col items-center space-y-2`}
              >
                <div className={`text-yellow-400`}>{skill.icon}</div>
                <p className="text-base md:text-lg font-medium text-white">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Frameworks & Tools Section */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl text-center font-semibold text-yellow-400 mb-4 md:mb-6">
            Frameworks & Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {skills.FrameworksTools.map((skill, index) => (
              <motion.div
                key={index}
                data-aos="zoom-in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 md:p-6 bg-gray-800 rounded-lg border-2 border-transparent hover:border-yellow-400 transition-all shadow-md hover:shadow-lg flex flex-col items-center space-y-2`}
              >
                <div className={`text-yellow-400`}>{skill.icon}</div>
                <p className="text-base md:text-lg font-medium text-white">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl text-center font-semibold text-yellow-400 mb-4 md:mb-6">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {skills.TechnicalSkills.map((skill, index) => (
              <motion.div
                data-aos="zoom-in"
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 md:p-4 bg-gray-800 rounded-lg border-2 border-transparent text-center hover:border-yellow-400 transition-all shadow-md hover:shadow-lg flex flex-col justify-center items-center space-y-2`}
              >
                <div className={`text-yellow-400`}>{skill.icon}</div>
                <p className="text-base md:text-lg font-medium text-white">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaChartLine, FaTools } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    company: "Foxconn Interconnect Technology",
    role: "Automation Engineer",
    duration: "June 2024 – February 2025",
    icon: <FaRobot className="w-8 h-8" />,
    color: "from-yellow-400 to-orange-500",
    highlights: [
      "Designed and developed real-time data monitoring systems for factory operations, leveraging Python, Plotly Dash, and SQL to create interactive dashboards for machine performance analysis and anomaly detection. ",
      "Analyzed large-scale factory data from Factory Metrics and SightX, using Power BI and Pandas to derive actionable insights, improving production efficiency and reducing downtime by 15%. ",
      "Developed custom visualization tools for factory managers, providing real-time insights into machine status, production rates, and failure trends, leading to a 10% boost in overall operational efficiency. ",
    ],
  },
  {
    id: 2,
    company: "Predict Ram",
    role: "Data Analytics Intern",
    duration: "March 2024 – May 2024",
    icon: <FaChartLine className="w-8 h-8" />,
    color: "from-blue-400 to-purple-500",
    highlights: [
      "Analyzed data using Python and Pandas to guide product decisions.",
      "Built interactive applications with Streamlit and Tkinter.",
    ],
  },
  {
    id: 3,
    company: "National Institute of Technology and Science",
    role: "Machine Learning Intern",
    duration: "March 2023 – May 2023",
    icon: <FaTools className="w-8 h-8" />,
    color: "from-green-400 to-teal-500",
    highlights: [
      "Researched 5G system efficiency using machine learning.",
      "Achieved 98% accuracy and 89% system efficiency with neural networks.",
    ],
  },
];

export const Exp = () => {
  return (
    <div
      id="experience"
      className="bg-gradient-to-b from-gray-800 to-black text-white w-full py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 mt-2">
            My professional journey and contributions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line (Hidden on Mobile) */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 to-orange-500 transform -translate-x-1/2"></div>

          {/* Experience Cards */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center w-full`}
              >
                {/* Icon */}
                <motion.div
                  className={`p-4 rounded-full   animate-bounce  bg-gradient-to-br ${exp.color} shadow-lg z-10 mb-4 md:mb-0`}
                >
                  {exp.icon}
                </motion.div>

                {/* Card */}
                <div
                  className={`w-full md:w-1/2 p-6 bg-gray-800 rounded-lg shadow-md hover:scale-y-105 md:backdrop-blur-sm  bg-opacity-50 border border-gray-700 ${
                    index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-white">
                    {exp.company}
                  </h3>
                  <p className="text-gray-400">{exp.role}</p>
                  <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-300">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

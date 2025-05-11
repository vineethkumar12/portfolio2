import React from "react";
import { FaLaptopCode, FaFileCode, FaFreeCodeCamp } from "react-icons/fa";
import { SiReact, SiJavascript, SiMysql } from "react-icons/si";

export const Exp = () => {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer (Contract)",
      company: "CSR Electronologies, Warangal",
      period: "Apr 2024 – Nov 2024",
      description: [
        "Built Park and Go with React.js, implementing OTP login, Maps integration, and Razorpay payment gateway",
        "Developed Park&GO Slider UI for enhanced user experience",
        "Created WebSocket server for real-time slot display on large LED screens",
      ],
      icon: <FaLaptopCode className="text-xl" />,
      tech: [<SiReact key="react" />, <SiJavascript key="js" />],
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: 2,
      title: "XML Content Specialist (Full-Time)",
      company:
        "Chatrapathi Greentech Softwares Private Limited (Remote), Andhra Pradesh",
      period: "Dec 2024 – Present",
      description: [
        "Working on XML-based digitization project for digital publishing",
        "Tagging book content including authors, references, URLs, and pages in .txt files",
        "Converting files to .dat format, error checking, and submitting complete structured files",
      ],
      icon: <FaFileCode className="text-xl" />,
      tech: [],
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 3,
      title: "Freelance Projects",
      company: "",
      period: "",
      description: [
        "PAT IoT Solutions – Developed a business portfolio website for the company",
        "Created a personal portfolio website for a client",
      ],
      icon: <FaFreeCodeCamp className="text-xl" />,
      tech: [
        <SiReact key="react" />,
        <SiJavascript key="js" />,
        <SiMysql key="mysql" />,
      ],
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full min-h-screen bg-gradient-to-b from-black to bg-gray-800 text-white py-20"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-gray-400 mt-3">Where I've applied my skills</p>
        </div>

        {/* Experience Cards - Clean Vertical Layout */}
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group" data-aos="fade-up">
              {/* Gradient accent bar */}
              <div
                className={`absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b ${exp.color}`}
              ></div>

              <div className="ml-8 pl-6">
                {/* Header with icon */}
                <div className="flex items-center mb-3">
                  <div
                    className={`p-3 rounded-lg mr-4 bg-gradient-to-r ${exp.color}`}
                  >
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4">
                      {exp.company && (
                        <p className="text-gray-300">{exp.company}</p>
                      )}
                      {exp.period && (
                        <p className="text-gray-400 text-sm">{exp.period}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4 pl-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex">
                      <span
                        className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.color} mr-2`}
                      >
                        ▹
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex gap-3 mt-4 pl-2">
                  {exp.tech.map((techIcon, i) => (
                    <span
                      key={i}
                      className="text-xl opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {techIcon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

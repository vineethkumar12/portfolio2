import React from "react";
import { FaLaptopCode, FaFileCode, FaFreeCodeCamp, FaCloud, FaNetworkWired } from "react-icons/fa";
import { SiReact, SiJavascript, SiMysql } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const Exp = () => {
  const experiences = [
    {
      id: 1,
      title: "ServiceNow Developer (Contract)",
      company: "Sucor Technologies India Pvt Ltd (Remote)",
      period: "Oct 2025 – Present",
      description: [
        "Configured ITSM modules (Incident, Problem, Change, Service Catalog) with Business Rules, Script Includes, Client Scripts",
        "Built Flow Designer workflows for approvals, task automation, and multi-step orchestration",
        "Developed Scripted REST APIs for inbound/outbound integrations with monitoring tools",
        "Implemented ITOM Event Management: Event Rules, CI Mapping, Alert Correlation, Auto-Remediation pipelines",
        "Managed users, roles, ACLs, reports, dashboards, and update sets across environments"
      ],
      icon: <FaCloud className="text-xl" />,
      tech: [
        <FaCloud key="servicenow" className="text-green-500" title="ServiceNow" />,
        <TbApi key="api" className="text-blue-400" title="REST API" />,
        <FaNetworkWired key="network" className="text-cyan-400" title="ITOM" />
      ],
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 2,
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
      id="Experience"
      className="relative w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-20 overflow-hidden"
    >
      {/* Rotating Cubes Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cube 1 - Back Left */}
        <div className="absolute top-20 left-10 animate-rotate-cube">
          <div className="w-24 h-24 relative transform-style-3d">
            <div className="absolute w-full h-full bg-green-500/10 border border-green-500/30 rounded-lg transform translate-z-12"></div>
            <div className="absolute w-full h-full bg-green-500/10 border border-green-500/30 rounded-lg transform -translate-z-12"></div>
            <div className="absolute w-full h-full bg-green-500/10 border border-green-500/30 rounded-lg transform rotate-y-90 translate-x-12"></div>
            <div className="absolute w-full h-full bg-green-500/10 border border-green-500/30 rounded-lg transform rotate-y-90 -translate-x-12"></div>
            <div className="absolute w-full h-full bg-green-500/10 border border-green-500/30 rounded-lg transform rotate-x-90 translate-y-12"></div>
            <div className="absolute w-full h-full bg-green-500/10 border border-green-500/30 rounded-lg transform rotate-x-90 -translate-y-12"></div>
          </div>
        </div>

        {/* Cube 2 - Back Right */}
        <div className="absolute top-40 right-20 animate-rotate-cube-reverse">
          <div className="w-32 h-32 relative transform-style-3d">
            <div className="absolute w-full h-full bg-blue-500/10 border border-blue-500/30 rounded-lg transform translate-z-16"></div>
            <div className="absolute w-full h-full bg-blue-500/10 border border-blue-500/30 rounded-lg transform -translate-z-16"></div>
            <div className="absolute w-full h-full bg-blue-500/10 border border-blue-500/30 rounded-lg transform rotate-y-90 translate-x-16"></div>
            <div className="absolute w-full h-full bg-blue-500/10 border border-blue-500/30 rounded-lg transform rotate-y-90 -translate-x-16"></div>
            <div className="absolute w-full h-full bg-blue-500/10 border border-blue-500/30 rounded-lg transform rotate-x-90 translate-y-16"></div>
            <div className="absolute w-full h-full bg-blue-500/10 border border-blue-500/30 rounded-lg transform rotate-x-90 -translate-y-16"></div>
          </div>
        </div>

        {/* Cube 3 - Bottom Left */}
        <div className="absolute bottom-20 left-1/4 animate-rotate-cube">
          <div className="w-20 h-20 relative transform-style-3d">
            <div className="absolute w-full h-full bg-purple-500/10 border border-purple-500/30 rounded-lg transform translate-z-10"></div>
            <div className="absolute w-full h-full bg-purple-500/10 border border-purple-500/30 rounded-lg transform -translate-z-10"></div>
            <div className="absolute w-full h-full bg-purple-500/10 border border-purple-500/30 rounded-lg transform rotate-y-90 translate-x-10"></div>
            <div className="absolute w-full h-full bg-purple-500/10 border border-purple-500/30 rounded-lg transform rotate-y-90 -translate-x-10"></div>
            <div className="absolute w-full h-full bg-purple-500/10 border border-purple-500/30 rounded-lg transform rotate-x-90 translate-y-10"></div>
            <div className="absolute w-full h-full bg-purple-500/10 border border-purple-500/30 rounded-lg transform rotate-x-90 -translate-y-10"></div>
          </div>
        </div>

        {/* Cube 4 - Bottom Right */}
        <div className="absolute bottom-32 right-1/4 animate-rotate-cube-reverse">
          <div className="w-28 h-28 relative transform-style-3d">
            <div className="absolute w-full h-full bg-cyan-500/10 border border-cyan-500/30 rounded-lg transform translate-z-14"></div>
            <div className="absolute w-full h-full bg-cyan-500/10 border border-cyan-500/30 rounded-lg transform -translate-z-14"></div>
            <div className="absolute w-full h-full bg-cyan-500/10 border border-cyan-500/30 rounded-lg transform rotate-y-90 translate-x-14"></div>
            <div className="absolute w-full h-full bg-cyan-500/10 border border-cyan-500/30 rounded-lg transform rotate-y-90 -translate-x-14"></div>
            <div className="absolute w-full h-full bg-cyan-500/10 border border-cyan-500/30 rounded-lg transform rotate-x-90 translate-y-14"></div>
            <div className="absolute w-full h-full bg-cyan-500/10 border border-cyan-500/30 rounded-lg transform rotate-x-90 -translate-y-14"></div>
          </div>
        </div>

        {/* Cube 5 - Middle Right */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 animate-rotate-cube">
          <div className="w-16 h-16 relative transform-style-3d">
            <div className="absolute w-full h-full bg-yellow-500/10 border border-yellow-500/30 rounded-lg transform translate-z-8"></div>
            <div className="absolute w-full h-full bg-yellow-500/10 border border-yellow-500/30 rounded-lg transform -translate-z-8"></div>
            <div className="absolute w-full h-full bg-yellow-500/10 border border-yellow-500/30 rounded-lg transform rotate-y-90 translate-x-8"></div>
            <div className="absolute w-full h-full bg-yellow-500/10 border border-yellow-500/30 rounded-lg transform rotate-y-90 -translate-x-8"></div>
            <div className="absolute w-full h-full bg-yellow-500/10 border border-yellow-500/30 rounded-lg transform rotate-x-90 translate-y-8"></div>
            <div className="absolute w-full h-full bg-yellow-500/10 border border-yellow-500/30 rounded-lg transform rotate-x-90 -translate-y-8"></div>
          </div>
        </div>

        {/* Cube 6 - Middle Left */}
        <div className="absolute top-2/3 left-10 transform -translate-y-1/2 animate-rotate-cube-reverse">
          <div className="w-20 h-20 relative transform-style-3d">
            <div className="absolute w-full h-full bg-pink-500/10 border border-pink-500/30 rounded-lg transform translate-z-10"></div>
            <div className="absolute w-full h-full bg-pink-500/10 border border-pink-500/30 rounded-lg transform -translate-z-10"></div>
            <div className="absolute w-full h-full bg-pink-500/10 border border-pink-500/30 rounded-lg transform rotate-y-90 translate-x-10"></div>
            <div className="absolute w-full h-full bg-pink-500/10 border border-pink-500/30 rounded-lg transform rotate-y-90 -translate-x-10"></div>
            <div className="absolute w-full h-full bg-pink-500/10 border border-pink-500/30 rounded-lg transform rotate-x-90 translate-y-10"></div>
            <div className="absolute w-full h-full bg-pink-500/10 border border-pink-500/30 rounded-lg transform rotate-x-90 -translate-y-10"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-gray-400 mt-3">Where I've applied my skills</p>
        </div>

        {/* Experience Cards */}
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
                    <li key={i} className="text-gray-300 flex text-sm">
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

      <style jsx>{`
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .translate-z-8 { transform: translateZ(8px); }
        .-translate-z-8 { transform: translateZ(-8px); }
        .translate-z-10 { transform: translateZ(10px); }
        .-translate-z-10 { transform: translateZ(-10px); }
        .translate-z-12 { transform: translateZ(12px); }
        .-translate-z-12 { transform: translateZ(-12px); }
        .translate-z-14 { transform: translateZ(14px); }
        .-translate-z-14 { transform: translateZ(-14px); }
        .translate-z-16 { transform: translateZ(16px); }
        .-translate-z-16 { transform: translateZ(-16px); }
        
        .rotate-y-90 {
          transform: rotateY(90deg);
        }
        
        .rotate-x-90 {
          transform: rotateX(90deg);
        }
        
        @keyframes rotate-cube {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
        
        @keyframes rotate-cube-reverse {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(-360deg) rotateY(-360deg);
          }
        }
        
        .animate-rotate-cube {
          animation: rotate-cube 20s linear infinite;
        }
        
        .animate-rotate-cube-reverse {
          animation: rotate-cube-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
};
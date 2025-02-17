import React from "react";
import github from "../assets/linkedin.png";
import react from "../assets/pantech.jpg";
import java from "../assets/nptel-logo.png";
import webdeveloper from "../assets/udemy.png";
import wipro from "../assets/wipro3.png";
import internshala from "../assets/intern.png";

const experience = [
  {
    id: 1,
    nam: "React Internship by Pantech",
    src: react,
    borderColor: "border-red-500", // Custom border color
    credential:
      "https://drive.google.com/file/d/1jNuK5bdZfhCoAWk58CfNmtnGB48r-LBs/view?usp=drive_link",
    issued: "Jun 2023 · Jul 2023",
  },
  {
    id: 2,
    nam: "Java Certificate by Swayam",
    src: java,
    borderColor: "border-orange-500", // Custom border color
    credential:
      "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS47S3444000502028533",
    issued: "Jul 2022 · Oct 2022",
  },
  {
    id: 3,
    nam: "Web Developer by Udemy",
    src: webdeveloper,
    borderColor: "border-purple-500", // Custom border color
    credential:
      "https://www.udemy.com/certificate/UC-c117408f-20aa-42b7-9127-e3c427c025c2/",
    issued: "Apr 2022 · Jan 2023",
  },
  {
    id: 4,
    nam: "Git & GitHub by LinkedIn",
    src: github,
    borderColor: "border-blue-500", // Custom border color
    credential:
      "https://drive.google.com/file/d/1QgZ5J0zIbsrqE7oxNu6KcrC15DihNkKh/view?usp=sharing",
    issued: "Jan 2023",
  },
  {
    id: 5,
    nam: "Java J2EE by Wipro",
    src: wipro,
    borderColor: "border-pink-500", // Custom border color
    credential: "https://cert.diceid.com/csr/cid/Z8S8GB?verify=true",
    issued: "Oct 2023",
  },
  {
    id: 6,
    nam: "Android Development by Internshala",
    src: internshala,
    borderColor: "border-blue-500", // Custom border color
    credential:
      "https://trainings.internshala.com/verify-certificate/?certificate_number=C91CF2A6-90D3-14A2-91AD-46DDCEE1BE74",
    issued: "Mar 2022",
  },
];

export const Exp = () => {
  return (
    <div
      id="Experience"
      className="bg-gradient-to-b from-gray-800 to-black text-white w-full py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 mt-2">
            My certifications and internships
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experience.map((exp) => (
            <div
              key={exp.id}
              data-aos="fade-up"
              className={`bg-gray-800 rounded-lg border-l-4 ${exp.borderColor} p-4 shadow-md hover:shadow-lg transition-shadow`}
            >
              {/* Logo and Title */}
              <div className="flex items-center mb-4">
                <img
                  src={exp.src}
                  alt={exp.nam}
                  className="w-12 h-12 rounded-lg mr-4"
                />
                <h3 className="text-lg font-semibold text-yellow-500">
                  {exp.nam}
                </h3>
              </div>

              {/* Issued Date */}
              <p className="text-gray-400 text-sm mb-4">{exp.issued}</p>

              {/* Show Credential Button */}
              {exp.credential && (
                <a
                  href={exp.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-yellow-500 text-black text-sm font-semibold rounded-md hover:bg-yellow-600 transition-colors"
                >
                  Show Credential
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import github from "../assets/linkedin.png";
import react from "../assets/pantech.jpg";
import java from "../assets/nptel-logo.png";
import udemy from "../assets/udemy.png";
import Databricks from "../assets/Databricks-data-platform-logo.png";
import internshala from "../assets/intern.png";

const experience = [
  {
    id: 1,
    name: "Academy Accreditation - Generative AI Fundamentals",
    src: Databricks,
    borderColor: "border-red-500",
    credential:
      "https://credentials.databricks.com/bed10957-ab2b-4250-9ea2-fa8c369d6915",
    issued: "Jun 2023 · Jul 2023",
    organization: "Databricks",
  },
  {
    id: 2,
    name: "Ultimate AWS Certified Solutions Architect Associate SAA-CO3",
    src: udemy,
    borderColor: "border-orange-500",
    credential:
      "https://www.udemy.com/certificate/UC-ecb60e22-765d-4fc2-9823-94143dafc706/",
    issued: "Jul 2022 · Oct 2022",
    organization: "Udemy",
  },
  {
    id: 3,
    name: "Learning Python for Data Visualization and Data Analysis",
    src: udemy,
    borderColor: "border-purple-500",
    credential:
      "https://www.udemy.com/certificate/UC-a8e3f969-205c-4c93-9f0b-ccbf6457b98d/",
    issued: "Apr 2022 · Jan 2023",
    organization: "Udemy",
  },
];

export const Certificates = () => {
  return (
    <section
      id="certificates"
      className="bg-gradient-to-b from-gray-800 to-black text-white w-full py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Certificates
          </h2>
          <p className="text-gray-400 mt-2">
            My certifications and achievements
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experience.map((cert) => (
            <div
              key={cert.id}
              data-aos="fade-up"
              className={`bg-gray-800 rounded-lg border-l-4 ${cert.borderColor} p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Logo and Title */}
              <div className="flex items-start mb-4">
                <img
                  src={cert.src}
                  alt={`${cert.organization} logo`}
                  className="w-12 h-12 rounded-lg mr-4 object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-500 mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{cert.organization}</p>
                </div>
              </div>

              {/* Issued Date */}

              {/* Show Credential Button */}
              {cert.credential && (
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-md transition-colors"
                  aria-label={`View ${cert.name} credential`}
                >
                  View Credential
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

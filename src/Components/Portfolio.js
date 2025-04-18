import React, { useState } from "react";
import { FiPlayCircle } from "react-icons/fi";
import { projects } from "../Components/portfolioData";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaRobot, FaBrain, FaChartLine } from "react-icons/fa"; // AI-related icons

export const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  // AI category icons
  const getAIIcon = (category) => {
    switch (category) {
      case "computer-vision":
        return <FaRobot className="text-blue-400" />;
      case "nlp":
        return <FaBrain className="text-purple-400" />;
      case "predictive":
        return <FaChartLine className="text-green-400" />;
      default:
        return <FaRobot className="text-yellow-400" />;
    }
  };

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-black to-gray-800 py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header with AI focus */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            AI Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Machine Learning, Computer Vision, and NLP implementations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              data-aos="zoom-in"
              key={project.name}
              className="group relative h-full bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-700 hover:border-blue-500"
            >
              {/* Project Image with AI category badge */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.src}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* AI Category Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-gray-900/80 px-3 py-1 rounded-full text-sm">
                  {getAIIcon(project.aiCategory)}
                  <span className="text-gray-200 capitalize">
                    {project.aiCategory}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-gray-300 text-sm line-clamp-3">
                    {project.about}
                  </p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5 flex-1 flex flex-col">
                {/* name with model name if available */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white line-clamp-1">
                    {project.name}
                  </h3>
                  {project.model && (
                    <span className="bg-blue-900/50 text-blue-300 text-xs px-2 py-1 rounded">
                      {project.model}
                    </span>
                  )}
                </div>

                {/* Tech Stack with AI-specific styling */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs rounded-full ${
                        tech.toLowerCase().includes("python")
                          ? "bg-yellow-400/50 text-yellow-300"
                          : tech.toLowerCase().includes("tensor")
                          ? "bg-orange-900/50 text-orange-300"
                          : tech.toLowerCase().includes("pytorch")
                          ? "bg-red-900/50 text-red-300"
                          : tech.toLowerCase().includes("keras")
                          ? "bg-red-900/50 text-red-300"
                          : "bg-gray-700 text-gray-300"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Performance metrics if available */}
                {project.metrics && (
                  <div className="mb-3 text-xs text-gray-400">
                    <p className="font-medium">Performance:</p>
                    <ul className="list-disc list-inside">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <li key={key}>
                          <span className="font-medium">{key}:</span> {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Links - pushed to bottom with mt-auto */}
                <div className="mt-auto">
                  <div className="flex gap-4">
                    {project.link1 && (
                      <a
                        href={project.link1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                      >
                        <FiExternalLink className="text-md" />
                        Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-400 hover:text-gray-300 transition-colors text-sm"
                      >
                        <FiGithub className="text-md" />
                        Code
                      </a>
                    )}
                  </div>

                  {/* Play Video Button */}
                  {project.video && (
                    <div
                      onClick={() => openModal(project.video)}
                      className="cursor-pointer mt-3 text-blue-400 flex items-center gap-1 text-sm"
                    >
                      <FiPlayCircle className="text-xl" />
                      <span>See it in action</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-4 rounded-lg relative max-w-2xl w-full border border-blue-500/30">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 p-2 text-white text-xl hover:text-blue-400 transition-colors"
            >
              ✕
            </button>
            <video
              controls
              autoPlay
              className="w-full rounded-lg max-h-[80vh] mx-auto"
            >
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

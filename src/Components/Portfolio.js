import React, { useState } from "react";
import { FiPlayCircle } from "react-icons/fi"; // Video icon
import { projects } from "../Components/portfolioData"; // Your projects data
import { FiExternalLink, FiGithub } from "react-icons/fi";

export const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState(null); // Store the selected video URL
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal and set the video
  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-black to-gray-800 py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Explore my latest web development projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              data-aos="zoom-in"
              key={project.name}
              className="group relative h-full bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.src}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 line-clamp-2">
                      {project.about}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.link1 && (
                    <a
                      href={project.link1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      <FiExternalLink className="text-lg" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <FiGithub className="text-lg" />
                      Code
                    </a>
                  )}
                </div>

                {/* Play Video Button */}
                {project.video && (
                  <div
                    onClick={() => openModal(project.video)}
                    className="cursor-pointer mt-4 text-yellow-400 flex items-center gap-2"
                  >
                    <FiPlayCircle className="text-2xl" />
                    <span>Watch Video</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-4 rounded-lg relative max-w-2xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 p-2 text-white"
            >
              X
            </button>
            <video controls className="w-full rounded-xl max-h-[400px] mx-auto">
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

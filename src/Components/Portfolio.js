import React, { useState } from "react";
import { FiPlayCircle, FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../Components/portfolioData";

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

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-gradient-to-b from-black to-gray-800 py-20 px-4 md:px-8 overflow-hidden"
    >
      {/* Rotating Cubes Background - Same as Exp.js */}
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
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Explore my latest web development and ServiceNow projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              data-aos="zoom-in"
              key={project.name}
              className="group relative h-full bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-green-500/50"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.src}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 line-clamp-2 text-sm">
                      {project.about}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300 border border-gray-600 hover:border-green-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 text-xs rounded-full bg-gray-700/50 text-gray-400 border border-gray-600">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.link1 && (
                    <a
                      href={project.link1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm"
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
                      className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors text-sm"
                    >
                      <FiGithub className="text-lg" />
                      Code
                    </a>
                  )}
                </div>

                {/* Video Button */}
                {project.video && (
                  <button
                    onClick={() => openModal(project.video)}
                    className="mt-4 flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
                  >
                    <FiPlayCircle className="text-xl" />
                    Watch Demo
                  </button>
                )}
              </div>

              {/* Bottom Gradient Border */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/95 flex justify-center items-center z-50 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-green-400 transition-colors"
            >
              ✕ Close
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden border border-green-500/30">
              <video controls autoPlay className="w-full h-full object-contain">
                <source src={selectedVideo} type="video/mp4" />
                Your browser doesn't support videos.
              </video>
            </div>
          </div>
        </div>
      )}

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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};
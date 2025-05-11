import React from "react";
import resume from "../assets/VineethKumar_Adepu_Resume_1 (2).pdf";
import { Link } from "react-scroll";
import { FaArrowRight, FaDownload } from "react-icons/fa"; // Icons
import { motion } from "framer-motion"; // For animations

export const Home = () => {
  // Animation variants

  return (
    <div
      id="home"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 flex justify-center items-center"
    >
      <div
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-y-6 items-center text-center text-white"
      >
        {/* Welcome Text */}
        <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Welcome to My Portfolio
        </h3>

        {/* Name */}
        <h1 className="text-6xl font-bold text-yellow-500">
          I'm Vineeth Kumar
        </h1>

        {/* Tagline */}
        <h2 className="text-xl font-medium text-gray-300 max-w-2xl">
          Passionate about real-time projects that bring ideas to life and make
          an impact.
        </h2>

        {/* Buttons */}
        <div className="flex gap-6 mt-6">
          {/* Projects Button */}
          <Link
            to="projects"
            smooth
            duration={500}
            className="group  hover:cursor-pointer flex items-center px-2 py-3 md:px-6 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition-colors"
          >
            View Projects
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform group-hover:rotate-90 " />
          </Link>

          {/* Resume Button */}
          <a
            href={resume}
            download="Vineeth_Kumar_Resume"
            className="flex items-center px-2 py-3 md:px-6 rounded-lg border-2 border-yellow-500 text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-black transition-colors"
          >
            Download Resume
            <FaDownload className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

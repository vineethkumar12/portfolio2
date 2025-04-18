import React from "react";
import h from "../assets/varun.jpg";
import { FaYoutube } from "react-icons/fa"; // YouTube icon
import {
  SiPython,
  SiCplusplus,
  SiJava,
  SiTensorflow,
  SiPytorch,
  SiMysql,
} from "react-icons/si"; // Tech stack icons

export const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 mt-2">Get to know me better</p>
        </div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="w-48 h-48 md:w-60 md:h-60 rounded-full z-20 overflow-hidden shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/70 transition-shadow duration-300">
            <img
              src={h}
              alt="Vineeth Kumar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left max-w-2xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I’m <strong className="text-yellow-400">Mitra Varun</strong>.
              I am a passionate engineer specializing in{" "}
              <strong className="text-yellow-400">
                AI, machine learning, and automation
              </strong>
              . With expertise in real-time data analytics, predictive modeling,
              and intelligent systems, I build scalable solutions that enhance
              efficiency and optimize decision-making.
              <br />
              <br />
              Proficient in{" "}
              <strong className="text-yellow-400">Python, C++, and Sql</strong>,
              I leverage advanced frameworks like{" "}
              <strong className="text-yellow-400">
                TensorFlow, PyTorch, and LangChain
              </strong>{" "}
              to develop AI-driven applications.
              <br />
              <br />
              My focus lies in creating innovative solutions for{" "}
              <strong className="text-yellow-400">
                automation, data intelligence, and deep learning
              </strong>
              , constantly pushing the boundaries of technology. Driven by
              curiosity and problem-solving, I thrive in fast-paced environments
              that demand creativity and technical excellence.
            </p>

            {/* Tech Stack Icons */}
            <div className="mt-8 flex justify-center md:justify-start gap-6">
              <SiPython className="text-4xl text-blue-500 hover:text-blue-400 transition-colors" />
              <SiCplusplus className="text-4xl text-blue-400 hover:text-blue-300 transition-colors" />
              <SiMysql className="text-4xl text-red-500 hover:text-red-400 transition-colors" />
              <SiTensorflow className="text-4xl text-orange-500 hover:text-orange-400 transition-colors" />
              <SiPytorch className="text-4xl text-red-400 hover:text-red-300 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

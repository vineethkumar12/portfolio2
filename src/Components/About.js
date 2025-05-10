import React from "react";
import h from "../assets/vineeth-2.png";
import { FaYoutube } from "react-icons/fa"; // YouTube icon
import {
  SiJavascript,
  SiReact,
  SiJava,
  SiPython,
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
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 mt-2">Get to know me better</p>
        </div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div
            data-aos="zoom-in"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full z-10 overflow-hidden shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/70 transition-shadow duration-300"
          >
            <img
              src={h}
              alt="Vineeth Kumar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left max-w-2xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I’m <strong className="text-yellow-400">Vineeth Kumar</strong>
              . I’m passionate about technology, particularly web development
              and coding.
              <br />
              <br />I have experience in{" "}
              <strong className="text-yellow-400">
                Java, JavaScript, React.js, SQL, and Python
              </strong>
              . I also run a YouTube channel called{" "}
              <a
                href="https://youtube.com/VineethsTechFusion" // Add your YouTube link
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <strong>Vineeth’s Tech Fusion</strong>{" "}
                <FaYoutube className="inline" />
              </a>
              , where I share coding tutorials, tech reviews, and industry
              insights.
              <br />
              <br />
              Additionally, I’ve successfully developed{" "}
              <strong className="text-yellow-400">
                three projects for my clients
              </strong>{" "}
              and enjoy staying updated with the latest tech trends.
            </p>

            {/* Tech Stack Icons */}
            <div className="mt-8 flex justify-center md:justify-start gap-6">
              <SiJava className="text-4xl text-red-500 hover:text-red-400 transition-colors" />
              <SiJavascript className="text-4xl text-yellow-400 hover:text-yellow-300 transition-colors" />
              <SiReact className="text-4xl text-blue-400 hover:text-blue-300 transition-colors" />
              <SiPython className="text-4xl text-blue-500 hover:text-blue-400 transition-colors" />
              <SiMysql className="text-4xl text-orange-500 hover:text-orange-400 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

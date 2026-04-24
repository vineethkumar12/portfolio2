import React from "react";
import h from "../assets/vineeth-2.png";
import { FaYoutube, FaCloud } from "react-icons/fa"; // YouTube icon & ServiceNow
import {
  SiJavascript,
  SiReact,
  SiJava,
  SiPython,
  SiMysql,
  SiNodedotjs,
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
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 mt-2">Get to know me better</p>
        </div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div
            data-aos="zoom-in"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full z-10 overflow-hidden shadow-lg shadow-green-500/50 hover:shadow-green-500/70 transition-shadow duration-300"
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
              Hi, I'm <strong className="text-green-400">Vineeth Kumar</strong>
              . I'm passionate about technology, particularly web development,
              ServiceNow integrations, and building real-time applications.
              <br />
              <br />I have experience in{" "}
              <strong className="text-green-400">
                ServiceNow, Java, JavaScript, React.js, SQL, and Python
              </strong>
              . I also run a YouTube channel called{" "}
              <a
                href="https://youtube.com/VineethsTechFusion"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <strong>Vineeth's Tech Fusion</strong>{" "}
                <FaYoutube className="inline text-red-500" />
              </a>
              , where I share coding tutorials, tech reviews, and industry
              insights.
              <br />
              <br />
              Additionally, I've successfully developed{" "}
              <strong className="text-green-400">
                5+ projects for my clients
              </strong>{" "}
              and built enterprise-grade ServiceNow integrations. I enjoy staying
              updated with the latest tech trends.
            </p>

            {/* Tech Stack Icons */}
            <div className="mt-8 flex justify-center md:justify-start gap-6">
              <div className="flex flex-col items-center">
                <FaCloud className="text-4xl text-green-500 hover:text-green-400 transition-colors" />
                <span className="text-xs text-gray-500 mt-1">ServiceNow</span>
              </div>
              <div className="flex flex-col items-center">
                <SiJava className="text-4xl text-red-500 hover:text-red-400 transition-colors" />
                <span className="text-xs text-gray-500 mt-1">Java</span>
              </div>
              <div className="flex flex-col items-center">
                <SiJavascript className="text-4xl text-yellow-400 hover:text-yellow-300 transition-colors" />
                <span className="text-xs text-gray-500 mt-1">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <SiReact className="text-4xl text-blue-400 hover:text-blue-300 transition-colors" />
                <span className="text-xs text-gray-500 mt-1">React</span>
              </div>
              <div className="flex flex-col items-center">
                <SiNodedotjs className="text-4xl text-green-600 hover:text-green-500 transition-colors" />
                <span className="text-xs text-gray-500 mt-1">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiPython className="text-4xl text-blue-500 hover:text-blue-400 transition-colors" />
                <span className="text-xs text-gray-500 mt-1">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <SiMysql className="text-4xl text-orange-500 hover:text-orange-400 transition-colors" />
                <span className="text-xs text-gray-500 mt-1">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
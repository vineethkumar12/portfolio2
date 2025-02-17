import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa"; // Icons

export const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-black to-gray-800 text-white w-full py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-gray-400 mt-2">
            Submit the form below to get in touch with me
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col items-center" data-aos="flip-up">
          <form
            action="https://getform.io/f/40851dd3-d75d-4723-96b6-01869d1c8d3e"
            method="POST"
            className="w-full max-w-md"
          >
            {/* Name Input */}
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 bg-transparent border-2 border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-transparent border-2 border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                required
              />
            </div>

            {/* Message Textarea */}
            <div className="mb-6">
              <textarea
                name="message"
                rows="6"
                placeholder="Enter your message"
                className="w-full p-3 bg-transparent border-2 border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-colors"
              >
                Let's Talk
              </button>
            </div>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-12">
          <ul className="flex justify-center gap-6">
            <li>
              <a
                href="https://github.com/vineethkumar12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-green-500 transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vineeth-kumar-6358a2231/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-green-500 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@VineethTechFusion"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-green-500 transition-colors"
              >
                <FaYoutube className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/adepuvineeth.vini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-green-500 transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="mailto:adepuvineethvinni@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-green-500 transition-colors"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-400">
          <p>Copyright © Vineeth Kumar 2025</p>
        </div>
      </div>
    </div>
  );
};

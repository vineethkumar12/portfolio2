import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; // Icons for quotes
import { motion } from "framer-motion"; // For animations

const testimonials = [
  {
    id: 1,
    name: "Chatrapathi Shiva Reddy",
    role: "Founder, CSR Electronics",
    feedback:
      "Working with Vineeth was an absolute pleasure. His attention to detail and problem-solving skills are unmatched. He delivered our project on time and exceeded our expectations!",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Raju",
    role: "Associate Professor , Kitsw college",
    feedback:
      "Vineeth is a true professional. His ability to understand our requirements and translate them into a stunning website was impressive. Highly recommend him for any web development project!",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Bharath",
    role: "CEO, PAT IoT Solutions.",
    feedback:
      "Vineeth's expertise in React and modern web technologies is outstanding. He helped us build a scalable and efficient web application that has significantly improved our business operations.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

export const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="bg-gradient-to-b from-gray-800 to-black text-white w-full py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-gray-400 mt-2">What my clients say about me</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              data-aos="zoom-in"
              key={testimonial.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-yellow-500 text-2xl mb-4" />

              {/* Feedback */}
              <p className="text-gray-300 italic">{testimonial.feedback}</p>

              {/* Quote Icon */}
              <FaQuoteRight className="text-yellow-500 text-2xl mt-4 ml-auto" />

              {/* Client Info */}
              <div className="flex items-center mt-6">
                <div className="ml-4">
                  <p className="text-lg font-semibold text-yellow-500">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

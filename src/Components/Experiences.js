import React from "react";
import html from "../assets/html.png";
import github from "../assets/github.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";

import Tilt from "./Tilt";
import "./N.css";
const experience = [
  { id: 1, nam: "React", src: react, st: "shadow-blue-500" },
  { id: 2, nam: "javascript", src: javascript, st: "shadow-yellow-500" },
  { id: 3, nam: "Tailwind", src: tailwind, st: "shadow-sky-500" },
  { id: 4, nam: "Css", src: css, st: "shadow-blue-500" },
  { id: 5, nam: "Html", src: html, st: "shadow-orange-500" },
  { id: 6, nam: "Github", src: github, st: "shadow-gray-500" },
];

export const Experiences = () => {
  return (
    <div
      id="skills"
      className=" z-10 bg-gradient-to-b from-black to-gray-800  text-white-500 text-white  w-full md:h-screen"
    >
      <div className="flex flex-col justify-center    h-full mx-auto  p-4 max-w-screen-lg">
        <div className="mt-5">
          <p className="font-bold border-b-4   border-gray-500  text-4xl  text-yellow-500   w-24">
            Skills
          </p>
          <p className="py-6"> I learned this kind of technologies</p>
        </div>

        <Tilt options={{ max: 25 }}>
          <div className=" grid  text-center py-8  mb-10 md:-mb-20 gap-8 px-12 sm:px-0 md:grid-cols-3 sm:grid-cols-2">
            {experience.map((src, i) => {
              return (
                <div
                  data-aos="zoom-in"
                  key={experience[i].id}
                  className={`  animate shadow-md ${experience[i].st} rounded-lg`}
                >
                  <img
                    src={experience[i].src}
                    alt=""
                    className="hover:scale-125 w-20 mx-auto h-24 mt-3 rounded-md  duration-200"
                  />
                  <p className="mt-4">{experience[i].nam}</p>
                </div>
              );
            })}
          </div>
        </Tilt>
      </div>
    </div>
  );
};

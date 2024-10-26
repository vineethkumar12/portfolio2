import React from "react";

export const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen  bg-gradient-to-b from-gray-800 to-black text-white-500  "
    >
      <div className=" h-full flex flex-col  justify-center max-w-screen-lg p-4 mx-auto  w-auto ">
        <p className="font-bold border-b-4  text-yellow-500  border-gray-500 w-28  text-4xl ">
          {" "}
          About
        </p>

        <div className="  flex flex-col  justify-center items-center ">
          <div className="about-container">
            <div className="giphy">
              <iframe
                src="https://giphy.com/embed/DjQZeqf3HqAQBqu45D"
                className="giphy-embed pointer-events-none"
                title="gm"
                allowFullScreen
              ></iframe>
            </div>
            <div data-aos="zoom-in" className="about">
              <p className=" text-white   ">
                Hi... This is vineeth kumar , i am 23 years old, i am live in
                warangal,telangana state
              </p>
              <br></br>
              <p className="ml-2    text-white">
                I'm an ECE student at Kakatiya Institute of Technology,
                passionate about web development. I have proficiency in C, Java,
                data structures, SQL, JavaScript, HTML, CSS, and ReactJS. A
                quick learner and dedicated to achieving excellence in
                technology, I'm excited to contribute creative solutions across
                different tech domains
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

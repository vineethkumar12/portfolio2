import React from "react";

export const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white-500 "
    >
      <div className="w-full h-full flex justify-center  pa-4 max-auto flex-col">
        <div className=" font-bold  text-4xl  text-yellow-500 md:ml-60">
          {" "}
          <h1 className="  ">About</h1>
        </div>
        <div className=" font-bold border-b-4  w-20 border-gray-500 text-4xl mb-3 ml-3   md:ml-60">
          {" "}
        </div>
        <div data-aos="fade-up">
          <p className=" text-gray-500  md:ml-60 text-1xl md:mt-20">
            Hi... This is vineeth kumar , i am 23 years old, i am live in
            warangal,telangana state
          </p>
          <br></br>
          <p className="ml-2  text-gray-500 md:ml-60 md:mr-40 text-1xl">
            I'm an ECE student at Kakatiya Institute of Technology, passionate
            about web development. I have proficiency in C, Java, data
            structures, SQL, JavaScript, HTML, CSS, and ReactJS. A quick learner
            and dedicated to achieving excellence in technology, I'm excited to
            contribute creative solutions across different tech domains
          </p>
        </div>
      </div>
    </div>
  );
};

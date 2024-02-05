import React from "react";

export const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white-500 text-white "
    >
      <div className="w-full h-full flex justify-center  pa-4 max-auto flex-col">
        <div className=" font-bold  text-4xl  md:ml-60">
          {" "}
          <h1 className="  ">About</h1>
        </div>
        <div className=" font-bold border-b-4  w-20 border-gray-500 text-4xl mb-3 ml-3   md:ml-60">
          {" "}
        </div>

        <p className="   md:ml-60 text-1xl md:mt-20">
          Hi... This is vineeth kumar , i am 22 years old, i am live in
          warangal,telangana state
        </p>
        <br></br>
        <p className="ml-2  md:ml-60 md:mr-40 text-1xl">
          I'm an ECE student at Kakatiya Institute of Technology, enthusiastic
          about web development and eager to explore other tech areas. I learn
          quickly, work hard, and am dedicated to achieving excellence in
          technology. Excited to contribute creative solutions in different tech
          domains. .
        </p>
      </div>
    </div>
  );
};

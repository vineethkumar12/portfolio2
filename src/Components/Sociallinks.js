import React from "react";

export const Sociallinks = () => {
  return (
    <div className=" hidden md:flex flex-col absolute    md:top-[35%]">
      <ul>
        <li className="flex ml-[-100px] hover:ml-[-5px] items-center h-10 rounded-md  duration-300 w-40  px-6 social4  ">
          {" "}
          <a
            href="https://github.com/vineethkumar12"
            rel="noreferrer"
            target="_blank"
            className=" flex justify-between items-center w-full  text-yellow-500"
          >
            {" "}
            <span className="gradient-text"> Github</span>{" "}
            <i className="fa-brands fa-github  fa-lg"></i>
          </a>
        </li>

        <li className="flex ml-[-100px] hover:ml-[-5px] items-center h-10 rounded-md  duration-300 w-40  px-6 social4">
          {" "}
          <a
            href="https://www.linkedin.com/in/vineeth-kumar-6358a2231/"
            rel="noreferrer"
            target="_blank"
            className="flex justify-between items-center w-full text-yellow-500"
          >
            <span className="gradient-text">Linkedin</span>
            <i className="fa-brands fa-linkedin-in fa-lg"></i>{" "}
          </a>{" "}
        </li>
        <li className="flex ml-[-100px] hover:ml-[-5px] items-center h-10 rounded-md  duration-300 w-40  px-6 social4">
          {" "}
          <a
            href="https://www.facebook.com/adepuvineeth.vini"
            rel="noreferrer"
            target="_blank"
            className="flex justify-between items-center w-full text-yellow-500"
          >
            <span className="gradient-text"> Facebook</span>
            <i className="fa-brands fa-facebook fa-lg"></i>
          </a>{" "}
        </li>
        <li className="flex ml-[-100px] hover:ml-[-5px] items-center h-10 rounded-md  duration-300 w-40 social4 px-6">
          {" "}
          <a
            href="mailto:adepuvineethvinni@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="flex justify-between  items-center w-full text-yellow-500"
          >
            <span className="gradient-text">Mail</span>
            <i className="fa-solid fa-envelope fa-lg"></i>
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

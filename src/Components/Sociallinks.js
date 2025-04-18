import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCode } from "react-icons/fa";
export const Sociallinks = () => {
  return (
    <div className=" hidden md:flex flex-col absolute    md:top-[35%]">
      <ul>
        <li className="flex ml-[-100px] hover:ml-[-5px] items-center h-10 rounded-md  duration-300 w-40  px-6 social4  ">
          {" "}
          <a
            href="https://github.com/mitravarun123"
            rel="noreferrer"
            target="_blank"
            className=" flex justify-between items-center w-full   text-yellow-500"
          >
            {" "}
            <span className="text-yellow-500"> Github</span>{" "}
            <i className="fa-brands fa-github  fa-lg"></i>
          </a>
        </li>

        <li className="flex ml-[-100px] hover:ml-[-5px] items-center h-10 rounded-md  duration-300 w-40  px-6 social4">
          {" "}
          <a
            href="https://www.linkedin.com/in/mitravarun123/"
            rel="noreferrer"
            target="_blank"
            className="flex justify-between items-center w-full text-yellow-500"
          >
            <span className="text-yellow-500">Linkedin</span>
            <i className="fa-brands fa-linkedin-in fa-lg"></i>{" "}
          </a>{" "}
        </li>
        <li className="flex ml-[-100px] hover:ml-[-5px] items-center h-10 rounded-md  duration-300 w-40  px-6 social4">
          {" "}
          <a
            href="https://www.youtube.com/@VineethTechFusion"
            rel="noreferrer"
            target="_blank"
            className="flex justify-between items-center w-full text-yellow-500"
          >
            <span className="text-yellow-500"> YouTube</span>
            <i className="fa-brands fa-youtube fa-lg"></i>
          </a>{" "}
        </li>
        <li className="flex ml-[-100px] hover:ml-[-5px] items-center h-10 rounded-md  duration-300 w-40 social4 px-6">
          {" "}
          <a
            href="https://leetcode.com/u/mitravarun2702/"
            rel="noreferrer"
            target="_blank"
            className="flex justify-between items-center w-full text-yellow-500"
          >
            <span className="text-yellow-500">LeetCode</span>
            <FaCode size={24} />
          </a>{" "}
        </li>
        <li className="flex ml-[-100px] hover:ml-[-5px] items-center h-10 rounded-md  duration-300 w-40 social4 px-6">
          {" "}
          <a
            href="mailto:mitravarun2702@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="flex justify-between  items-center w-full text-yellow-500"
          >
            <span className="text-yellow-500">Mail</span>
            <i className="fa-solid fa-envelope fa-lg"></i>
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

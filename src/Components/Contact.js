import React from "react";
import { Sociallinks } from "./Sociallinks";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-gray-800 to-black text-white-500   w-full text-white md:h-screen"
    >
      <div className="flex flex-col justify-center  h-full  mx-auto  p-4 max-w-screen-lg">
        <div data-aos="fade-right" className="">
          <p className="font-bold border-b-4   border-gray-500 w-32  text-4xl  text-yellow-500">
            {" "}
            Contact
          </p>
          <p className="py-6"> Submit the form below to get touch with me</p>
        </div>
        <div data-aos="fade-left">
          <form
            action="https://getform.io/f/40851dd3-d75d-4723-96b6-01869d1c8d3e"
            method="POST"
            className="flex flex-col items-center "
          >
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none  w-72 md:w-96"
            />

            <input
              type="email"
              name="email"
              placeholder="enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-72 md:w-96 m-4 "
            />
            <textarea
              rows="10"
              className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-72 md:w-96 "
            ></textarea>
            <div className=" flex justify-center items-center">
              <button className="  group bg-gradient-to-r from-indigo-500 via-yellow-600 to-cyan-500 md:w-40  w-32 flex mt-5 justify-center py-1 px-2   items-center rounded-md    ">
                {" "}
                Let's talk
              </button>
            </div>
          </form>
        </div>

        <div>
          <ul className="flex  md:justify-end  justify-center  gap-10 mt-10  flex-row">
            <li className=" hover:scale-125 transition-transform duration-200  ">
              {" "}
              <a
                href="https://github.com/vineethkumar12"
                rel="noreferrer"
                target="_blank"
                className="   hover:text-green-500   text-yellow-500"
              >
                {" "}
                <i className="fa-brands fa-github  fa-lg"></i>
              </a>
            </li>

            <li className=" rounded-md hover:scale-125 transition-transform duration-200   ">
              {" "}
              <a
                href="https://www.linkedin.com/in/vineeth-kumar-6358a2231/"
                rel="noreferrer"
                target="_blank"
                className="  hover:text-green-500  text-yellow-500"
              >
                <i className="fa-brands fa-linkedin-in fa-lg"></i>{" "}
              </a>{" "}
            </li>
            <li className=" hover:scale-125 transition-transform duration-200  rounded-md  duration-300    ">
              {" "}
              <a
                href="https://www.facebook.com/adepuvineeth.vini"
                rel="noreferrer"
                target="_blank"
                className=" hover:text-green-500  text-yellow-500"
              >
                <i className="fa-brands fa-facebook fa-lg"></i>
              </a>{" "}
            </li>
            <li className="hover:scale-125 transition-transform duration-200   rounded-md  duration-300 ">
              {" "}
              <a
                href="mailto:adepuvineethvinni@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="  hover:text-green-500   text-yellow-500"
              >
                <i className="fa-solid fa-envelope fa-lg"></i>
              </a>{" "}
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-gray-400 -mt-2  hidden md:block">
            Copyright:©vineethkumar 2024
          </h1>
        </div>
      </div>
    </div>
  );
};

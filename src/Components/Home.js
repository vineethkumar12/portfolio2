import React from "react";
import h from "../assets/vineeth3.png";
import "./image.css";
import { Link } from "react-scroll";
export const Home = () => {
  return (
    <div
      id="home"
      className="w-full    h-screen bg-gradient-to-b   from-black to-gray-800 "
    >
      <div className=" flex  max-w-screen-lg flex-col mx-auto h-full justify-center items-center  px-4 md:flex-row   ">
        <div className="text-white   mt-28  md:m-0">
          <div className="relative md:right-10 right-0">
            <div>
              <h2 className="text-5xl mb-3    text-yellow-500  font-light font-a">
                Hi, I'm Vineeth kumar
              </h2>
            </div>
            <p className="text-gray-500 text-left">
              i recently completed my BTech final year from Kakatiya Institute
              of technology and science warangal College , deeply passionate
              about the software field, particularly in crafting innovative web
              applications using technologies like React and CSS
            </p>
          </div>
          <div className=" w-40 cursor-pointer">
            <Link
              to="Projects"
              smooth
              duration={500}
              className="  group bg-gradient-to-r  from-indigo-500 via-yellow-600 to-cyan-500 flex mt-5 justify-center py-1 px-2  items-center rounded-md    "
            >
              projects
              <span className=" group-hover:rotate-90 duration-300">
                <i className="fa-solid   fa-arrow-right  text-black ml-2 mr-2"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="   ">
          <img
            src={h}
            className=" image mt-6  shadow-xl  shadow-yellow-500 w-60 md:rounded-md  md:h-auto md:w-auto "
            alt="vineeth"
          />
        </div>
      </div>
    </div>
  );
};
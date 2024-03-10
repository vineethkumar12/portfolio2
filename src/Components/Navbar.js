import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./N.css";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setnav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div>
      <div className="flex  fixed  justify-between items-center  z-10 w-full h-20 px-4">
        <div className="flex">
          <div className="   animate-pulse  text-5xl hover:animate-bounce">
            {" "}
            🕸️
          </div>
          <div>
            <h1 className="ml-2 font-a text-5xl text-yellow-500">vineeth</h1>
          </div>
        </div>

        <div>
          <ul className="hidden md:flex  space-x-9   mr-16 ">
            {links.map((link, i) => {
              return (
                <li
                  key={link.id}
                  className="Link text-yellow-500 visited:text-red-700 hover:underline capitalize flex justify-between cursor-pointer  hover:scale-125 duration-200 font-medium "
                >
                  <Link
                    to={links[i].link}
                    smooth={true}
                    offset={50}
                    spy={true}
                    duration={500}
                  >
                    {links[i].link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div onClick={() => setnav(!nav)} className="md:hidden text-yellow-500">
          {nav ? (
            <FontAwesomeIcon className="cursor-pointer " icon={faTimes} />
          ) : (
            <FontAwesomeIcon className="cursor-pointer" icon={faBars} />
          )}
        </div>

        {nav && (
          <ul className="flex  md:hidden   text-yellow-500 j flex-col absolute  justify-center  h-96 w-56 right-0 mb-3 rounded-lg items-center ml-9    bg-gradient-to-b from-gray-800 via-black  to-gray-800 text-white-500   ">
            {links.map((link, i) => {
              return (
                <li
                  key={link.id}
                  className=" hover:underline capitalize flex justify-between cursor-pointer  hover:scale-125 duration-200 font-medium "
                >
                  <Link
                    onClick={() => setnav(!nav)}
                    to={links[i].link}
                    smooth
                    offsetduration={500}
                  >
                    {links[i].link}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Navbar;

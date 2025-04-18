import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaCode,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = useState(false); // For mobile menu toggle
  const [visible, setVisible] = useState(true); // For scroll behavior
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // Handle scroll to hide/show navbar
  const handleScroll = () => {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
      setVisible(false); // Scrolling down
    } else {
      setVisible(true); // Scrolling up
    }
    setLastScrollTop(currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  // Navbar links
  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: "About" },
    { id: 3, link: "projects", label: "Projects" },
    { id: 4, link: "Experience", label: "Experience" },
    { id: 5, link: "skills", label: "skills" },
    { id: 6, link: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-20  backdrop-blur-sm ${
        visible ? "translate-y-0" : "-translate-y-20"
      } transition-transform duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <FaAngleLeft className="w-5 h-5 text-yellow-500" />

          <h1 className="text-3xl font-bold bg-yellow-500 bg-clip-text text-transparent">
            MV
          </h1>
          <FaAngleRight className="w-5 h-5 text-yellow-500" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li
              key={link.id}
              className="text-gray-300 hover:text-yellow-500 transition-colors font-medium capitalize cursor-pointer"
            >
              <Link
                to={link.link}
                smooth={true}
                offset={-80}
                duration={500}
                spy={true}
                activeClass="text-yellow-500"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden text-yellow-500 text-2xl cursor-pointer"
        >
          {nav ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <ul className="md:hidden absolute top-16 right-0 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg py-4">
            {links.map((link) => (
              <li
                key={link.id}
                className="text-gray-300 hover:text-yellow-500 transition-colors font-medium capitalize cursor-pointer px-6 py-2"
              >
                <Link
                  onClick={() => setNav(false)}
                  to={link.link}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <div className=" bottom-6 l flex justify-start space-x-3 px-6">
                <a
                  href="https://github.com/vineethkumar12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-green-500 transition-colors cursor-pointer "
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vineeth-kumar-6358a2231/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-green-500 transition-colors cursor-pointer"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://www.youtube.com/@VineethTechFusion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-green-500 transition-colors cursor-pointer"
                >
                  <FaYoutube className="text-2xl" />
                </a>
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

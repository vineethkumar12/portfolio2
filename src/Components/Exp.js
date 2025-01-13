import React from "react";

import github from "../assets/linkedin.png";

import react from "../assets/pantech.jpg";
import java from "../assets/nptel-logo.png";
import webdeveloper from "../assets/udemy.png";
import wipro from "../assets/wipro3.png";
import internshala from "../assets/intern.png";
import Tilt from "./Tilt";
import "./N.css";
const experience = [
  {
    id: 1,
    nam: "React Internship by pantech",
    src: react,
    st: "shadow-customRed",
    credential:
      "https://drive.google.com/file/d/1jNuK5bdZfhCoAWk58CfNmtnGB48r-LBs/view?usp=drive_link",
    issued: "Issued jun 2023 . Expired jul 2023",
  },
  {
    id: 2,
    nam: "Java certificate by swayam",
    src: java,
    st: "shadow-yellow-500",
    credential:
      "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS47S3444000502028533",
    issued: "Issued jul 2022 . Expired Oct 2022",
  },
  {
    id: 3,
    nam: "web developer cer.. by udemy",
    src: webdeveloper,
    st: "shadow-brinjal",
    credential:
      "https://www.udemy.com/certificate/UC-c117408f-20aa-42b7-9127-e3c427c025c2/",
    issued: "Issued Apr 2022 . Expired jan 2023",
  },
  {
    id: 4,
    nam: "git & github cer... by linkedin",
    src: github,
    st: "shadow-blue-500",
    credential: "",
    issued: "Issued jan 2023 ",
  },
  {
    id: 5,
    nam: "java J2ee cer... by wipro talent next",
    src: wipro,
    st: "shadow-pink-300",
    credential: "https://cert.diceid.com/csr/cid/Z8S8GB?verify=true",
    issued: "Issued oct 2023 ",
  },
  {
    id: 6,
    nam: "Andriod app developement by internshala",
    src: internshala,
    st: "shadow-blue-500",
    credential:
      "https://trainings.internshala.com/verify-certificate/?certificate_number=C91CF2A6-90D3-14A2-91AD-46DDCEE1BE74",
    issued: "Issued mar 2022 ",
  },
];

export const Exp = () => {
  return (
    <div
      id="Experience"
      className="bg-gradient-to-b from-gray-800 to-black text-white-500 text-white  w-full md:h-screen"
    >
      <div className="flex flex-col justify-center    h-full mx-auto  p-4 max-w-screen-lg">
        <div className="mt-5">
          <p className="font-bold border-b-4   border-gray-500  text-4xl  text-yellow-500   w-44">
            Experience
          </p>
        </div>

        <div className=" grid     text-center py-8  mb-10 md:-mb-20 gap-8 px-8 sm:px-0 md:grid-cols-3 sm:grid-cols-2">
          {experience.map((src, i) => {
            return (
              <div
                data-aos="flip-up"
                key={experience[i].id}
                className={`  shadow-md ${experience[i].st} rounded-lg h`}
              >
                {" "}
                <div className="flex">
                  <img
                    src={experience[i].src}
                    alt=""
                    className=" w-20  mt-1 ml-1 rounded-md  "
                  />
                  <div className="flex flex-col ">
                    <p className=" gradient-text">{experience[i].nam}</p>
                    <p className=" text-gray-400">{experience[i].issued}</p>
                  </div>
                </div>
                <div className="mb-4 ml-14 hover:scale-105 transition-transform duration-200">
                  <a
                    href={experience[i].credential}
                    className=" p-2  border-2 border-gray-500 rounded-md text-xs  mt-2 mt:mt-0  md:text-sm"
                    target="new"
                  >
                    Show Credential
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import chat from "../assets/portfolio/chat.png";
import movies1 from "../assets/portfolio/avengers.png";
import tic from "../assets/portfolio/tic.jpg";
import face1 from "../assets/portfolio/face1.jpg";
import robots1 from "../assets/portfolio/whatsapp-chat-analyser.png";
import Parkandgo from "../assets/parkandgo.png";
import Tilt from "react-tilt";
export const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: Parkandgo,
      link1: "https://parkngo.csre.in ",
      name: "Park and GO",
    },
    {
      id: 2,
      src: chat,
      link1: "https://vineethkumar12.github.io/chatapplication/",
      name: "Chat Application",
    },
    {
      id: 3,
      src: movies1,
      link1: "https://vineethkumar12.github.io/Moviesappwithalan/",
      name: "Moviesapp with Alan",
    },
    {
      id: 4,
      src: tic,
      link1: "https://vineethkumar12.github.io/tic-toc-toe/",
      name: "Tic-Toc-Toe",
    },
    {
      id: 5,
      src: face1,
      link1: "https://vineethkumar12.github.io/facedetectionapp/",
      name: "Face Detection Application",
    },
    {
      id: 6,
      src: robots1,
      link1:
        "https://vineethkumar12-whatsapp-chat-analayzer-app-3sz1u3.streamlit.app/",
      name: "Whatsapp-chat-sentiment analyser",
    },
  ];

  return (
    <div
      id="Projects"
      className="bg-gradient-to-b from-black to-gray-800 text-white-500  text-white   w-full  md:h-screen"
    >
      <div className="flex flex-col justify-center w-full h-full mx-auto  p-4 max-w-screen-lg">
        <div className=" mt-12">
          <p className="font-bold border-b-4  text-yellow-500  border-gray-500 w-32  text-4xl ">
            {" "}
            Projects
          </p>
          <p className="py-6"> Check out some of my projects right here</p>
        </div>

        <div className=" grid gap-8 px-12  mb-10 md:-mb-20  sm:px-0 md:grid-cols-3 sm:grid-cols-2">
          {portfolio.map((src, id) => {
            return (
              <Tilt>
                <div
                  key={id}
                  className="shadow-md overflow-hidden shadow-gray-500 rounded-lg"
                >
                  <a href={src.link1} target="new">
                    {" "}
                    <img
                      src={src.src}
                      alt="v "
                      className="hover:scale-105 duration-200 rounded-md cursor-pointer"
                    />
                  </a>
                  <div className=" flex justify-center items-center">
                    <a href={src.link1}>
                      {" "}
                      <h1 className="  px-6 py-3 duration-150 hover:scale-105">
                        {src.name}
                      </h1>{" "}
                    </a>
                  </div>
                </div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import chat from "../assets/portfolio/chat.png";
import stopwatch from "../assets/portfolio/stopwatch.jpg";
import movies1 from "../assets/portfolio/avengers.png";
import tic from "../assets/portfolio/tic.jpg";
import face1 from "../assets/portfolio/face1.jpg";
import robots1 from "../assets/portfolio/whatsapp-chat-analyser.png";
import Parkandgo from "../assets/parkandgo.png";
import Tilt from "./Tilt";
export const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: Parkandgo,
      link1: "https://parkngo.csre.in/#/signin ",
      name: "Park and GO",
      about:
        "Park and Go is an intuitive app for easy parking spot selection, booking, payment, and tracking, complete with exclusive offers.",
    },
    {
      id: 2,
      src: chat,
      link1: "https://vineethkumar12.github.io/chatapplication/",
      name: "Chat Application",
      about:
        "The chat app offers login and registration, user search by ID or username, messaging, and image sharing.",
    },
    {
      id: 3,
      src: movies1,
      link1: "https://vineethkumar12.github.io/Moviesappwithalan/",
      name: "Moviesapp with Alan",
      about:
        "Moves app by Alan AI offers effortless movie browsing with intuitive commands for trailers, details, and seamless navigation",
    },
    {
      id: 4,
      src: tic,
      link1: "https://vineethkumar12.github.io/tic-toc-toe/",
      name: "Tic-Toc-Toe",
      about:
        "A Tic-Tac-Toe game is a two-player strategy game played on a 3x3 grid, where players take turns marking spaces to achieve three in a row",
    },
    {
      id: 5,
      src: face1,
      link1: "https://vineethkumar12.github.io/facedetectionapp/",
      name: "Face Detection Application",
      about:
        "The Face Detection app identifies faces in uploaded images, highlighting them with boxes, and offers sign-in and customization for easy use",
    },
    {
      id: 6,
      src: stopwatch,
      link1: "https://vineethkumar12.github.io/stopwatch/",
      name: "Stop Watch",
      about:
        "A stopwatch website is an online tool that allows users to measure time intervals with start, stop, and reset features",
    },
  ];

  return (
    <div
      id="Projects"
      className="bg-gradient-to-b from-black to-gray-800 text-white    w-full  "
    >
      <div className="flex flex-col justify-center  h-full mx-auto  p-4 max-w-screen-lg">
        <div className=" mt-12">
          <p className="font-bold border-b-4  text-yellow-500  border-gray-500 w-32  text-4xl ">
            {" "}
            Projects
          </p>
          <p className="py-6"> Check out some of my projects right here</p>
        </div>

        <div className=" grid gap-10 px-12   mb-10 md:-mb-20  sm:px-0 md:grid-cols-3 sm:grid-cols-2">
          {portfolio.map((src, id) => {
            return (
              <Tilt key={id}>
                <div
                  data-aos="zoom-in"
                  className=" overflow-hidden shadow-md shadow-gray-500   rounded-lg"
                >
                  <div className="">
                    <a href={src.link1} target="new">
                      {" "}
                      <img
                        src={src.src}
                        alt="v "
                        className="hover:scale-105 duration-200 shadow-md shadow-gray-500   rounded-md cursor-pointer"
                      />
                    </a>
                  </div>
                  <div className="card-inside  flex justify-center flex-col   px-2 items-center">
                    <a href={src.link1}>
                      {" "}
                      <h1 className=" border-2xl  text-xl  font-bold gradient-text py-3 duration-150 ">
                        {src.name}
                      </h1>{" "}
                      <p className="   ">{src.about}</p>
                      <div>
                        <h4 className="  mb-2 mt-2  gradient-text  ">
                          HTML,CSS,React Js
                        </h4>
                      </div>
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

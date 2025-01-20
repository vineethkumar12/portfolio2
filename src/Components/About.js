import React from "react";

export const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen  bg-gradient-to-b from-gray-800 to-black text-white-500  "
    >
      <div className=" h-full flex flex-col  justify-center max-w-screen-lg p-4 mx-auto  w-auto ">
        <p className="font-bold border-b-4  text-yellow-500  border-gray-500 w-28  text-4xl ">
          {" "}
          About
        </p>

        <div className="  flex flex-col  justify-center items-center ">
          <div className="about-container">
            <div className="giphy">
              <img
                src="https://media.giphy.com/media/DjQZeqf3HqAQBqu45D/giphy.gif"
                alt="gm"
                className="giphy-embed"
              />
            </div>

            <div data-aos="zoom-in" className="about">
              <p className="ml-2    text-white">
                Hi, I’m <strong>Vineeth Kumar</strong>. I’m passionate about
                technology, especially web development and coding.<br></br> I
                have experience with C, Java, JavaScript, React.js, and Python.{" "}
                <br></br>I run a YouTube channel called{" "}
                <strong>Vineeth’s Tech Fusion</strong>, where I share coding
                tutorials, tech reviews, and industry insights. I also enjoy
                creating websites and staying updated with the latest tech
                trends.<br></br>I recently started working as an{" "}
                <strong> SQL Developer</strong> at CHATRAPATHI GREENTECH
                SOFTWARES PVT. LTD., which is a great step in my career. In my
                free time, I like watching YouTube
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

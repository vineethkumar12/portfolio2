import chat from "../assets/portfolio/chat.png";
import stopwatch from "../assets/portfolio/stopwatch.jpg";
import movies1 from "../assets/portfolio/avengers.png";
import tic from "../assets/portfolio/tic-toc.png";
import face1 from "../assets/portfolio/face1.jpg";
import Parkandgo from "../assets/parkandgo.png";
import websocket from "../assets/websocket-1.png";
import patiot from "../assets/patiot.png";
import led from "../assets/led.mp4";
export const projects = [
  {
    id: 1,
    src: Parkandgo,
    link1: "https://parkngo.csre.in/#/signin",
    github: "https://github.com/vineethkumar12/Park-and-go",
    name: "Park and GO",
    about:
      "Park and Go is an intuitive app for easy parking spot selection, booking, payment, and tracking, complete with exclusive offers.(Not Responsive)",
    tech: ["React", "Node.js", "Postgress Sql", " CSS"],
    video: "",
  },
  {
    id: 2,
    src: websocket,
    link1: "",
    github:
      "https://github.com/vineethkumar12/Real-time-parking--slots-using-websocket",
    name: "Park&GO Slider",
    about:
      "Real-Time Parking Slot Display is a web app that uses computer vision and WebSockets to show available parking spaces on LED screens, enhancing parking efficiency in smart cities.",
    tech: ["React", " CSS", "WebSockets", "Express js"],
    video: led,
  },
  {
    id: 3,
    src: chat,
    link1: "https://vineethkumar12.github.io/chatapplication/",
    github: "https://github.com/vineethkumar12/chatapplication",
    name: "Chat Application",
    about:
      "The chat app offers login and registration, user search by ID or username, messaging, and image sharing.(Not Responsive)",
    tech: ["React", "Firebase", "Tailwind CSS"],
    video: "",
  },
  {
    id: 4,
    src: movies1,
    link1: "",
    github: "https://github.com/vineethkumar12/Moviesappwithalan",
    name: "Movies App with Alan",
    about:
      "Movies app by Alan AI offers effortless movie browsing with intuitive commands for trailers, details, and seamless navigation.",
    tech: ["React", "Alan AI", "TMDB API", "CSS"],
    video: "",
  },
  {
    id: 5,
    src: patiot,
    link1: "https://patiot.in",
    github: "https://github.com/vineethkumar12/Automation",
    name: "Business Portfolio Website",
    about:
      "I developed a static portfolio website for PAT IoT Solutions, highlighting their IoT automation services with a clean, responsive, and visually appealing design",
    tech: ["HTML", "CSS", "React"],
    video: "",
  },
  {
    id: 6,
    src: face1,
    link1: "https://vineethkumar12.github.io/facedetectionapp/",
    github: "https://github.com/vineethkumar12/facedetectionapp",
    name: "Face Detection App",
    about:
      "The Face Detection app identifies faces in uploaded images, highlighting them with boxes, and offers sign-in and customization for easy use.",
    tech: ["React", "Clarifai API", "CSS", "Node Js", "Postgress Sql"],
    video: "",
  },
];

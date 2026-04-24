import chat from "../assets/portfolio/chat.png";
import movies1 from "../assets/portfolio/avengers.png";
import face1 from "../assets/portfolio/face1.jpg";
import Parkandgo from "../assets/parkandgo.png";
import websocket from "../assets/websocket-1.png";
import patiot from "../assets/patiot.png";
import led from "../assets/led.mp4";

export const projects = [
  // ServiceNow Project 1 - ITOM Event Management
  {
    id: 1,
    src: "https://placehold.co/800x600/1e8a3a/white?text=ITOM+Event+Management",
    link1: "",
    github: "",
    name: "ITOM Event Management System",
    about: "End-to-end event management solution integrating 5+ monitoring tools with advanced alert correlation reducing noise by 70% and CI mapping for accurate incident routing.",
    tech: ["ServiceNow", "ITOM", "Event Management", "Alert Correlation", "CI Mapping", "CMDB"],
    video: "",
    category: "ServiceNow"
  },
  // ServiceNow Project 2 - Auto-Remediation Pipeline
  {
    id: 2,
    src: "https://placehold.co/800x600/1e8a3a/white?text=Auto-Remediation+Pipeline",
    link1: "",
    github: "",
    name: "Auto-Remediation Pipeline",
    about: "Flow Designer workflows triggered by ITOM alerts for automated remediation, reducing MTTR from 45 to 15 minutes through intelligent CI mapping and alert correlation.",
    tech: ["ServiceNow", "Flow Designer", "Auto-Remediation", "ITOM", "Workflow Automation"],
    video: "",
    category: "ServiceNow"
  },
  // ServiceNow Project 3 - REST API Integration Framework
  {
    id: 3,
    src: "https://placehold.co/800x600/1e8a3a/white?text=REST+API+Integration+Framework",
    link1: "",
    github: "",
    name: "Scripted REST API Integration Framework",
    about: "Reusable inbound REST API layer processing 10,000+ daily events with 99.9% uptime, featuring GlideRecord validation and production-grade error handling.",
    tech: ["ServiceNow", "REST API", "GlideRecord", "Script Includes", "Integration Hub"],
    video: "",
    category: "ServiceNow"
  },
  // Frontend Project 1 - Park and Go
  {
    id: 4,
    src: Parkandgo,
    link1: "https://parkngo.csre.in/#/signin",
    github: "https://github.com/vineethkumar12/Park-and-go",
    name: "Park and GO - Smart Parking",
    about: "React.js frontend with secure OTP authentication, real-time slot availability via WebSocket, and Razorpay payment gateway integration. Reduced parking booking time by 70%.",
    tech: ["React.js", "WebSocket", "Razorpay", "Google Maps API", "Node.js", "PostgreSQL"],
    video: "",
    category: "Frontend"
  },
  // Frontend Project 2 - Park&GO Slider
  {
    id: 5,
    src: websocket,
    link1: "",
    github: "https://github.com/vineethkumar12/Real-time-parking--slots-using-websocket",
    name: "Park&GO Slider - LED Display",
    about: "WebSocket server for real-time parking slot display on large LED screens. Handles 500+ concurrent connections with 1-second refresh rate for live slot updates.",
    tech: ["React.js", "WebSockets", "Express.js", "Socket.io", "CSS"],
    video: led,
    category: "Frontend"
  },
  // Frontend Project 3 - PAT IoT Solutions
  {
    id: 6,
    src: patiot,
    link1: "https://patiot.in",
    github: "https://github.com/vineethkumar12/Automation",
    name: "PAT IoT Solutions - Portfolio",
    about: "Professional business portfolio website for PAT IoT Solutions, highlighting IoT automation services. Achieved 40% increase in client inquiries with responsive design.",
    tech: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
    video: "",
    category: "Frontend"
  },
  // Frontend Project 4 - Chat Application
  {
    id: 7,
    src: chat,
    link1: "https://vineethkumar12.github.io/chatapplication/",
    github: "https://github.com/vineethkumar12/chatapplication",
    name: "Real-Time Chat Application",
    about: "Real-time chat app with login/registration, user search, messaging, and image sharing. Supports 100+ concurrent users with Firebase real-time database.",
    tech: ["React.js", "Firebase", "Tailwind CSS", "Firestore"],
    video: "",
    category: "Frontend"
  },
  // Frontend Project 5 - Face Detection App
  {
    id: 8,
    src: face1,
    link1: "https://vineethkumar12.github.io/facedetectionapp/",
    github: "https://github.com/vineethkumar12/facedetectionapp",
    name: "Face Detection App",
    about: "Face detection app that identifies faces in uploaded images with 98% accuracy. Includes secure sign-in functionality and bounding box visualization.",
    tech: ["React.js", "Clarifai API", "Node.js", "PostgreSQL", "Express.js"],
    video: "",
    category: "Frontend"
  }
];
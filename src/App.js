import Navbar from "./Components/Navbar";
import React, { useEffect } from "react";
import "./App.css";
import { Home } from "./Components/Home";
import { Sociallinks } from "./Components/Sociallinks";
import { About } from "./Components/About";
import { Portfolio } from "./Components/Portfolio";
import { Experiences } from "./Components/Experiences";
import { Contact } from "./Components/Contact";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { Exp } from "./Components/Exp";
import Particle from "./Particle";

function App() {
  // const a="grgjkhjgkkgdkhjtgkjrigjjjjjjjjjjjjjjj"

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations in milliseconds
    });
  }, []);

  return (
    <div className="App">
      <Particle />
      <Helmet>
        <title>About Vineeth Kumar</title>
        <meta
          name="description"
          content="Hi, I’m Vineeth Kumar. Explore my portfolio to see my projects and passion for creating websites and innovative solutions!"
        />

        <meta name="keywords" content="vineeth, kumar, about" />
      </Helmet>

      <Navbar />

      <Home />
      <About />
      <Portfolio />
      <Exp />
      <Experiences />
      <Contact />
      <Sociallinks />
    </div>
  );
}

export default App;
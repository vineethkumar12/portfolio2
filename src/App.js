import Navbar from "./Components/Navbar";
import "./App.css";
import { Home } from "./Components/Home";
import { Sociallinks } from "./Components/Sociallinks";
import { About } from "./Components/About";
import { Portfolio } from "./Components/Portfolio";
import { Experiences } from "./Components/Experiences";
import { Contact } from "./Components/Contact";
import { Helmet } from "react-helmet";

function App() {
  // const a="grgjkhjgkkgdkhjtgkjrigjjjjjjjjjjjjjjj"
  return (
    <div className="App">
      <Helmet>
        <meta name="keyword" content="vineeth-kumar-portfolio" />
      </Helmet>

      <Navbar />

      <Home />
      <About />
      <Portfolio />
      <Experiences />
      <Contact />
      <Sociallinks />
    </div>
  );
}

export default App;

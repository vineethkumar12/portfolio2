import  Navbar  from "./Components/Navbar";
import './App.css' 
import { Home } from "./Components/Home"; 
import { Sociallinks } from "./Components/Sociallinks";
import { About } from "./Components/About";
import { Portfolio } from "./Components/Portfolio";
import { Experiences } from "./Components/Experiences";
import { Contact } from "./Components/Contact";

function App() { 
  

// const a="grgjkhjgkkgdkhjtgkjrigjjjjjjjjjjjjjjj"
  return (
    <div className="App"> 
   
<Navbar/> 

<Home/>  
<About/>  
<Portfolio/> 
<Experiences/> 
<Contact/>
<Sociallinks/>   



    </div>
  );
}

export default App;

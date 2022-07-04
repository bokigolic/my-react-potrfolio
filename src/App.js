import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works"
import Testimonials from "./components/testmonials/Tstimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menuu from "./components/menu/Menuu";




function App() {
  const [menuOpen, setMenuOpen] = useState(true)
  return (
    <div className="app">
     <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
     <Menuu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
      <Intro />
      <Portfolio />
      <Works />
      <Testimonials />
      <Contact />
     </div>
    </div>
  );
}

export default App;

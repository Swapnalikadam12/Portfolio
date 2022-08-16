import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;

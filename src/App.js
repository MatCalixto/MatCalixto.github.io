import { useState } from "react";
import Header from "./components/Header";
import StartSection from "./components/StartSection";
import QuoteSection from "./components/QuoteSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  const [state, setState] = useState(true);
  const [pos, setPos] = useState(`center ${0}px`);
  function changeValueOnScroll() {
    let scrollValue = document.documentElement.scrollTop;
    setPos(scrollValue / 2);
    if (scrollValue > 0) {
      setState(false);
    } else {
      setState(true);
    }
  }
  window.addEventListener("scroll", changeValueOnScroll);
  return (
    <div className="body">
      <Header background={state ? "" : "rgb(21, 21, 21)"}></Header>
      <StartSection pos={pos}></StartSection>
      <QuoteSection></QuoteSection>
      <SkillsSection pos={pos}></SkillsSection>
      <ProjectSection></ProjectSection>
      <Education pos={pos}></Education>
      <Certificates></Certificates>
      <Contact pos={pos}></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;

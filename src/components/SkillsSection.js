import Language from "./Language";
function SkillsSection(props) {
  return (
    <section
      style={{ backgroundPosition: `center ${props.pos + 300}px` }}
      className="movingSection"
    >
      <p className="title">Skills</p>
      <div id="skillsDiv">
        <div className="skillsGroup">
          <Language
            name="React"
            url="https://cdn.discordapp.com/attachments/814863283072925746/966513338169327707/Untitled144_20220420223849.png"
          ></Language>
          <Language
            name="JavaScript"
            url="https://cdn.discordapp.com/attachments/814863283072925746/961962268176810065/Untitled135_20220408091407.png"
          ></Language>
        </div>
        <div className="skillsGroup">
          <Language
            name="HTML5"
            url="https://cdn.discordapp.com/attachments/814863283072925746/961960496934842408/Untitled132_20220408090726.png"
          ></Language>
          <Language
            name="CSS3"
            url="https://cdn.discordapp.com/attachments/814863283072925746/961961553157054464/Untitled133_20220408091132.png"
          ></Language>
        </div>
        <div className="skillsGroup">
          <Language
            name="Python"
            url="https://cdn.discordapp.com/attachments/814863283072925746/961963433362849792/Untitled136_20220408091900.png"
          ></Language>
        </div>
      </div>
      <p className="bigFontDescription">
        - Development of Web Applications in React
      </p>
      <p className="bigFontDescription">- Responsive Web Applications</p>
      <p className="bigFontDescription">- Git Version Control</p>
      <div id="Projects"></div>
    </section>
  );
}
export default SkillsSection;

function Education(props) {
  return (
    <section
      style={{ backgroundPosition: `center ${props.pos + 300}px` }}
      className="movingSection"
    >
      <p className="title">Education</p>
      <div id="educationContent">
        <div className="educationDiv">
          <p className="bigFontDescription">
            Majoring in Computer Science at{" "}
            <a
              id="unipeLink"
              target="_blank"
              rel="noreferrer"
              href="https://www.unipe.edu.br/"
            >
              Unipe University Center.
            </a>
            <br></br>Graduates in 2026.
          </p>
          <p className="lowWeightFont">
            Although I am majoring in Computer Science, most of what I have been
            learning was self-taught. <br></br> I am always willing to learn
            more so that I can become a better professional in my field, even if
            it means going in search of courses and online content.
          </p>
        </div>
        <a href="https://www.unipe.edu.br/" rel="noreferrer" target="_blank">
          <img
            id="unipeLogo"
            src="https://cdn.discordapp.com/attachments/814863283072925746/966769905829548102/Untitled145_20220421153813.png"
            alt="Unipe Logo"
          ></img>
        </a>
      </div>
      <div id="Certificates"></div>
    </section>
  );
}
export default Education;

function StartSection(props) {
  return (
    <>
      <div id="Home"></div>
      <section
        style={{ backgroundPosition: `center ${props.pos}px` }}
        id="startSection"
      >
        <img
          id="startImage"
          src="https://cdn.discordapp.com/attachments/953366989634699314/961715631261098024/IMG_4707.jpg"
          alt="Myself"
        ></img>
        <div id="presentingDiv">
          <p id="presentingName">Hey, I am Matheus</p>
          <p id="presentingDescription">A Front-End Web Developer</p>
          <form action="#Projects">
            <button type="submit" id="browseButton">
              Browse Projects
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
export default StartSection;

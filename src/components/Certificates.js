import Display from "./Display";
function Certificates() {
  return (
    <section id="projectSection">
      <p className="title">Certificates</p>
      <Display
        img="https://cdn.discordapp.com/attachments/945649297087692800/966787208617005157/unknown.png"
        link="https://www.freecodecamp.org/certification/MatheusCalixto/responsive-web-design"
        link2="https://www.freecodecamp.org/certification/MatheusCalixto/responsive-web-design"
        title="freeCodeCamp Responsive Web Design"
        p1="The freeCodeCamp course started with a learning period with multiple exercises. After finishing those exercises, I was presented with five web development challenges, each having a unique set of challenges to test if I had learned what the course intended."
        p2={`The course was fun but quite demanding and the best thing I got out of it was the different projects I made. You can find them by checking the certificate by pressing the button below or the image ${
          document.body.clientWidth <= 700 ? "above." : "on the left."
        }`}
        p3="I also want to add that it is refreshing to see the progress I have made since I finished the course since I have learned multiple tools, including React and JavaScript, which seemed very hard to me at the time, but got easier the more I studied."
        button="Certification"
      ></Display>
    </section>
  );
}
export default Certificates;

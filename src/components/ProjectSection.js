import Display from "./Display";
function ProjectSection() {
  return (
    <section id="projectSection">
      <p className="title">Some of my Projects</p>
      <Display
        img="https://cdn.discordapp.com/attachments/953366989634699314/961291395568644096/ArchitectPreview.png"
        link="https://github.com/MatCalixto/Architect-Porfolio-Website"
        link2="https://github.com/MatCalixto/Architect-Porfolio-Website"
        title="Architect Portfolio Website"
        p1="This project was made for an architect to display his portfolio, a little more about who he is as a professional in the About Me section as well as contact information at the end of the page."
        p2="The page is also responsive, in smaller screens, the navigation bar disappears, displaying a menu option in its place, allowing the page to be seen on widescreen devices or smaller screen devices."
        p3="JavaScript was used, mainly to make the header invisible at the start of the page for a full-screen immersive experience and to make the featured project image scroll slower than the rest of the page."
        button="Learn More"
      ></Display>
      <Display
        order={true}
        img="https://cdn.discordapp.com/attachments/953366989634699314/961999253453029496/unknown.png"
        link="https://github.com/MatCalixto/Bikys-Product-Landing-Page"
        link2="https://github.com/MatCalixto/Bikys-Product-Landing-Page"
        title="Bikys Product Landing Page"
        p1="This website was made for a fictional eCommerce store called Bikys."
        p2="It contains a header, a full-screen landing image displaying a cyclist doing a dangerous stunt with his bike, a product section with products the company sells, a video related to the company, and contact information at the end of the page."
        button="Learn More"
      ></Display>
      <Display
        img="https://cdn.discordapp.com/attachments/953366989634699314/962027134656847943/unknown.png"
        link="https://github.com/MatCalixto/Hasa-Project"
        link2="https://github.com/MatCalixto/Hasa-Project"
        title="Hasa Project"
        p1="The Hasa Project is a space-themed website, I created it as an
        activity during a workshop that took place in March 2022."
        p2="It includes a header with the logo and navigation bar, as well as a spaceman illustration and some description of what the fictional company envisions a button that changes colors when being hovered for more information, and a footer with copyright information."
        button="Learn More"
      ></Display>
      <Display
        order={true}
        img="https://cdn.discordapp.com/attachments/814863283072925746/968307915398217738/unknown.png"
        link="https://github.com/MatCalixto/To-Do-List-React"
        link2="https://matcalixto.github.io/To-Do-List-React/"
        title="To Do List using React Js"
        p1= "My second React project. A to-do list with components that can be created and deleted by the user."
        p2={`You can check the code in GitHub by pressing the Learn More button below or try out the live page, which is being hosted by GitHub pages, by pressing the image ${
          document.body.clientWidth <= 700 ? "above." : "on the right."
        }`}
        button="Learn More"
      ></Display>
      <Display
        img="https://cdn.discordapp.com/attachments/953366989634699314/962435589922234388/unknown.png"
        link="https://github.com/MatCalixto/MatCalixto.github.io"
        link2="https://github.com/MatCalixto/MatCalixto.github.io"
        title="Resume Website"
        p1={`This website was my first project with react. ${
          document.body.clientWidth <= 700
            ? "And since you are on mobile, why not try the desktop version to see how it looks?"
            : "And since you are on desktop, why not try opening this page on mobile to see its features and responsiveness?"
        }`}
        p2={`Feel free to check out the code on GitHub by clicking the Check Code button below or the image ${
          document.body.clientWidth <= 700 ? "above" : "on the right"
        }, it is all public!`}
        button="Check Code"
      ></Display>
      <div id="Education"></div>
    </section>
  );
}
export default ProjectSection;

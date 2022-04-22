function Contact(props) {
  return (
    <section
      style={{ backgroundPosition: `center ${props.pos + 350}px` }}
      id="Contact"
    >
      <div className="contactDiv">
        <div>
          <p className="title">Contact</p>
          <p className="lowWeightFont">
            Here are some ways you can contact me.
          </p>
        </div>
        <div className="informationDiv">
          <p>Address: Br 230 Km 9 - Jp, PB - Brazil - 58106-402</p>
          <p>Email: Matheus.calixto.lino@gmail.com</p>
          <p>Discord: MatCalixto#9295</p>
        </div>
        <nav id="socialMediaBar">
          <a
            href="https://www.linkedin.com/in/matheus-calixto-/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="socialMedia"
              src="https://cdn.discordapp.com/attachments/814863283072925746/962052952871284766/Untitled142_20220408151452.png"
              alt="LinkedIn"
            ></img>
          </a>
          <a
            href="https://github.com/MatCalixto"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="socialMedia"
              src="https://cdn.discordapp.com/attachments/814863283072925746/962053976067539004/IMG_3496.png"
              alt="GitHub"
            ></img>
          </a>
          <a
            href="https://www.instagram.com/matheuscalixto._/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="socialMedia"
              src="https://cdn.discordapp.com/attachments/814863283072925746/962055872299806721/Untitled138_20220408152629.png"
              alt="Instagram"
            ></img>
          </a>
        </nav>
      </div>
      <div className="sitemapDiv">
        <div>
          <p className="title">Sitemap</p>
          <p className="lowWeightFont">Jump to other sections.</p>
        </div>
        <div className="informationDiv">
          <a className="sitemapItem" href="#Home">
            Home
          </a>
          <a className="sitemapItem" href="#Skills">
            Skills
          </a>
          <a className="sitemapItem" href="#Projects">
            Projects
          </a>
          <a className="sitemapItem" href="#Education">
            Education
          </a>
          <a className="sitemapItem" href="#Certificates">
            Certificates
          </a>
        </div>
      </div>
      <a href="#Home">
        <img
          className="logo"
          src="https://cdn.discordapp.com/attachments/814863283072925746/961810520040697876/Untitled129_20220407231128.png"
          alt="My Logo"
        ></img>
      </a>
    </section>
  );
}
export default Contact;

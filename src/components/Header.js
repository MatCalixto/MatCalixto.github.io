import { useState } from "react"
function Header(props) {
  const [toggle, setToggle] = useState(false);
  function menu() {
    let docWidth = document.body.clientWidth;
    if (docWidth <= 700) {
      if (toggle === false) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    }
  }
  return (
    <header style={{ background: props.background }} id="header">
      <div id="logoDiv">
        <a id="logoName" href="#Home">
          Matheus Calixto
        </a>
      </div>
      <nav style={toggle ? { maxHeight: "40vh" } : null} id="navigationBar">
        <a
          onClick={menu}
          style={toggle ? { fontSize: "1.4em" } : null}
          id="menuItem"
          href="#Home"
        >
          Home
        </a>
        <a
          onClick={menu}
          style={toggle ? { fontSize: "1.4em" } : null}
          id="menuItem"
          href="#Skills"
        >
          Skills
        </a>
        <a
          onClick={menu}
          style={toggle ? { fontSize: "1.4em" } : null}
          id="menuItem"
          href="#Projects"
        >
          Projects
        </a>
        <a
          onClick={menu}
          style={toggle ? { fontSize: "1.4em" } : null}
          id="menuItem"
          href="#Education"
        >
          Education
        </a>
        <a
          onClick={menu}
          style={toggle ? { fontSize: "1.4em" } : null}
          id="menuItem"
          href="#Certificates"
        >
          Certificates
        </a>
        <a
          onClick={menu}
          style={toggle ? { fontSize: "1.4em" } : null}
          id="menuItem"
          href="#Contact"
        >
          Contact
        </a>
      </nav>
      <div id="menuDiv" onClick={menu}>
        <div
          style={
            toggle ? { transform: "rotate(45deg) translate(0, 1vh)" } : null
          }
          id="bar1"
        ></div>
        <div
          style={
            toggle ? { transform: "rotate(-45deg) translate(0, -1vh)" } : null
          }
          id="bar2"
        ></div>
      </div>
    </header>
  );
}
export default Header;

function Project(props) {
  return (
    <div
      style={
        props.order && document.body.clientWidth >= 700
          ? { flexDirection: "row-reverse" }
          : null
      }
      className="projectDiv"
    >
      <a href={props.link} rel="noreferrer" target="_blank">
        <img className="projectImage" src={props.img} alt={props.title}></img>
      </a>
      <div className="descriptionDiv">
        <p className="projectTitle">{props.title}</p>
        <p>{props.p1}</p>
        <p>{props.p2}</p>
        <p>{props.p3}</p>
        <a
          href={props.link}
          rel="noreferrer"
          target="_blank"
          className="learnMoreButton"
        >
          {props.button}
        </a>
      </div>
    </div>
  );
}
export default Project;

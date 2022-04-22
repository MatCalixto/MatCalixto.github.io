function Language(props) {
  return (
    <div className="languageDiv">
      <img className="languageImage" src={props.url} alt={props.name}></img>
      <p className="languageName">{props.name}</p>
    </div>
  );
}
export default Language;

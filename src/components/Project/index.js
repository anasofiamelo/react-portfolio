import classes from "./Project.module.css";

function Project(props) {
  const techs = props.used_tech.map((tech) => (
    <p className={`text ${classes.tag}`}>{tech}</p>
  ));
  return (
    <div className={classes.project_container}>
      <h2 className={`text ${classes.project_title}`}>
        {props.title},{" "}
        <span className={`text ${classes.creation_date}`}>
          {props.creation_date}
        </span>
      </h2>
      <div className={classes.technologies}>
        <h4 className="text">Techs: </h4>
        {techs}
      </div>
      <p className="text">{props.description}</p>

      <div className={classes.actions}>
        <a
          className={classes.project_code_link}
          href={props.github_link}
          target="_blank"
          rel="noreferrer"
        >
          View code
        </a>

        <a
          className={`${classes.project_code_link} ${classes.website_link}`}
          href={props.website_link}
          target="_blank"
          rel="noreferrer"
        >
          View WebSite
        </a>
      </div>
    </div>
  );
}

export default Project;

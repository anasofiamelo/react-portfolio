import classes from "./Project.module.css";

function Project(props) {
  return (
    <div className={classes.project_container}>
      <h2 className="text"> {props.title} </h2>
      <p className={`text ${classes.project_description}`}>
        {props.description}
      </p>
    </div>
  );
}

export default Project;

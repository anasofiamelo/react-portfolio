import classes from "./Project.module.css";
import { BsArrowUpRight } from "react-icons/bs";

function Project(props) {
  console.log(classes);
  return (
    <div className={classes.project_container}>
      <h2 className="text"> {props.title} </h2>
      <p className={`text ${classes.project_description}`}>
        {props.description}
      </p>
      <a
        className={classes.project_code_link}
        href={props.github_link}
        target="_blank"
        rel="noreferrer"
      >
        View code <BsArrowUpRight />
      </a>
    </div>
  );
}

export default Project;

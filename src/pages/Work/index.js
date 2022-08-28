import classes from "./Work.module.css";

import PROJECTS from "../../PROJECTS";
import { PageComponent, Project } from "../../components";

import { FaReact, FaNodeJs, FaAngular, FaCss3, FaHtml5 } from "react-icons/fa";
function Work() {
  return (
    <PageComponent title="Work" description="My projects">
      <div className={classes.projects_container}>
        {PROJECTS.map((project) => {
          return <Project {...project} />;
        })}
      </div>
      <h2 className="text"> My skills</h2>
      <div className={classes.skills_container}>
        <div className={classes.icon}>
          <FaReact />
        </div>
        <div className={classes.icon}>
          <FaNodeJs />
        </div>
        <div className={classes.icon}>
          <FaAngular />
        </div>
        <div className={classes.icon}>
          <FaCss3 />
        </div>
        <div className={classes.icon}>
          <FaHtml5 />
        </div>
      </div>
    </PageComponent>
  );
}

export default Work;

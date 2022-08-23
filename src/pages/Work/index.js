import classes from "./Work.module.css";

import PROJECTS from "../../PROJECTS";
import { PageComponent, Project } from "../../components";

function Work() {
  return (
    <PageComponent title="Work">
      <div className={classes.projects_container}>
        {PROJECTS.map((project) => {
          return <Project {...project} />;
        })}
      </div>
    </PageComponent>
  );
}

export default Work;

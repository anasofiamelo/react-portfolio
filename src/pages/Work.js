import PageComponent from "./PageComponent";
import { Project } from "../components";
import PROJECTS from "../PROJECTS";

function Work() {
  return (
    <PageComponent title="Work">
      <div className="projects_container">
        {PROJECTS.map((project) => {
          return <Project {...project} />;
        })}
      </div>
    </PageComponent>
  );
}

export default Work;

import PROJECTS from "../PROJECTS";

import { PageComponent, Project } from "../components";

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

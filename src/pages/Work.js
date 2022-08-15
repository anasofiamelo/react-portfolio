import PageComponent from "./PageComponent";
import { Project } from "../components";

function Work() {
  return (
    <PageComponent title="Work">
      <div className="projects_container">
        <Project
          title="API (programming skills)"
          description={`An API made with NodeJS (Express).
          Contains user registration, authentication with token
          and the main goal is to register programming skills of the user.`}
        />
        <Project title="Angular Project" />
        <Project title="ReactNative Project (Trainee)" />
        <Project title="ReactNative Project (Sisconsult)" />
      </div>
    </PageComponent>
  );
}

export default Work;

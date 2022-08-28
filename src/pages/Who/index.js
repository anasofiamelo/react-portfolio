import Me from "../../assets/eu.jpg";
import classes from "./Who.module.css";
import { PageComponent } from "../../components";

function Who() {
  const component_options = {
    title: `Ana Sofia`,
    description: `A passionate Web Developer`,
  };

  const first_paragraph = `Hello! My name is Sofia and I'm a 22 yo. 
  web developer based in Brazil. My interest in web development started 
  back in 2018 when I decided to start studying programming logic and 
  I'm in love since then.`;

  const second_paragraph = `I'm currently working with automation (RPA) 
  in a start-up. My main goal is to become a Frontend Developer 
  (React, more specifically).`;

  return (
    <PageComponent {...component_options}>
      <div className={classes.who_container}>
        <div className={classes.text_container}>
          <p className="text">{first_paragraph}</p>
          <p className="text">{second_paragraph}</p>
          <p className="text">feel free to reach out :)</p>
        </div>
        <div className={classes.img_container}>
          <img alt="me" src={Me} />
        </div>
      </div>
    </PageComponent>
  );
}

export default Who;

import { useState } from "react";
import { Navbar, Footer } from "../index";
import { ThemeSwitcher } from "../UI";
import { Who } from "../../pages";
import classes from "./Body.module.css";

import { BsGithub, BsLinkedin } from "react-icons/bs";

const Body = (props) => {
  const [componentSelected, setComponentSelected] = useState(<Who />);

  const changeComponentHandler = (component) => {
    setComponentSelected(component);
  };

  return (
    <>
      <div className={classes.actions_container}>
        <div className={classes.actions}>
          <BsGithub
            style={{
              fontSize: "2rem",
              color: "white",
            }}
          />
          <BsLinkedin
            style={{
              fontSize: "2rem",
              color: "white",
            }}
          />
        </div>
      </div>
      <div className={classes.body_container}>
        <Navbar onChangeComponent={changeComponentHandler} />
        <ThemeSwitcher />
        <div className="container">{componentSelected}</div>
      </div>
      <Footer />
    </>
  );
};

export default Body;

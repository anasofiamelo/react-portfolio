import { useState } from "react";
import { PageComponent } from "../../pages";
import { NavbarItem } from "../index";
import "./style.css";

function Navbar() {
  const [componentSelected, setComponentSelected] = useState(
    <PageComponent title="Intro" />
  );

  function renderComponent(componentTitle, children) {
    return () => {
      setComponentSelected(
        <PageComponent title={componentTitle}> {children} </PageComponent>
      );
    };
  }

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-container">
          <NavbarItem
            linkContent="Intro"
            execution={renderComponent("Intro")}
          />
          <NavbarItem linkContent="What" execution={renderComponent("What")} />
          <NavbarItem linkContent="Who" execution={renderComponent("Who")} />
          <NavbarItem linkContent="Work" execution={renderComponent("Work")} />
        </ul>
      </nav>
      <div className="container">{componentSelected}</div>
    </div>
  );
}

export default Navbar;

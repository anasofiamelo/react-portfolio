import { useState } from "react";
import { Intro, What, Who, Work, PageComponent } from "../../pages";
import { NavbarItem } from "../index";
import "./style.css";

function Navbar() {
  const [componentSelected, setComponentSelected] = useState(
    <PageComponent title="Intro" />
  );

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-container">
          <NavbarItem
            linkContent="Intro"
            execution={() =>
              setComponentSelected(<PageComponent title="Intro" />)
            }
          />
          <NavbarItem
            linkContent="What"
            execution={() =>
              setComponentSelected(<PageComponent title="What" />)
            }
          />
          <NavbarItem
            linkContent="Who"
            execution={() =>
              setComponentSelected(<PageComponent title="Who" />)
            }
          />
          <NavbarItem
            linkContent="Work"
            execution={() =>
              setComponentSelected(<PageComponent title="Work" />)
            }
          />
        </ul>
      </nav>
      <div className="container">{componentSelected}</div>
    </div>
  );
}

export default Navbar;

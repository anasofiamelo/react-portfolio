import { Who, Contact, Work } from "../../../pages";
import { NavbarItem } from "../../index";

import "./style.css";

function Navbar(props) {
  return (
    <>
      <nav className="nav-container">
        <ul className="nav-container">
          <NavbarItem
            linkContent={"intro"}
            execution={() => props.onChangeComponent(<Who />)}
          />
          <NavbarItem
            linkContent="work"
            execution={() => props.onChangeComponent(<Work />)}
          />
          <NavbarItem
            linkContent="contact"
            execution={() => props.onChangeComponent(<Contact />)}
          />
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

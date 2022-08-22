import { Who, Contact, Work } from "../../../pages";
import { NavbarItem } from "../../index";
import { FaHome } from "react-icons/fa";

import "./style.css";

function Navbar(props) {
  return (
    <div>
      <nav>
        <ul className="nav-container">
          <NavbarItem
            linkContent="work"
            execution={() => props.onChangeComponent(<Work />)}
          />
          <NavbarItem
            linkContent={<FaHome />}
            execution={() => props.onChangeComponent(<Who />)}
          />
          <NavbarItem
            linkContent="contact"
            execution={() => props.onChangeComponent(<Contact />)}
          />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

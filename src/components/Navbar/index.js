import { Who, Work } from "../../pages";
import { NavbarItem } from "../index";
import "./style.css";

function Navbar(props) {
  return (
    <div>
      <nav>
        <ul className="nav-container">
          <NavbarItem
            linkContent="Who"
            execution={() => props.onChangeComponent(<Who />)}
          />
          <NavbarItem
            linkContent="Work"
            execution={() => props.onChangeComponent(<Work />)}
          />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

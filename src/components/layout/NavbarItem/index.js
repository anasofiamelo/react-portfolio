import { useState, useRef, useEffect } from "react";
import "./style.css";
function NavbarItem({ className, linkContent, execution }) {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  const navItemRef = useRef(null);
  function moveCursorOnNavLinkHover() {
    const myFunction = (e) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    };
    if (navItemRef && navItemRef.current) {
      navItemRef.current.addEventListener("mousemove", myFunction);
    }
  }
  useEffect(() => {
    moveCursorOnNavLinkHover();
  }, [navItemRef]);

  return (
    <li ref={navItemRef} className={`nav-item ${className}`}>
      <div
        className="cursor"
        style={{ left: cursorX + "px", top: cursorY + "px" }}
      />
      <a className="nav-link" onClick={execution}>
        {linkContent}
      </a>
    </li>
  );
}

export default NavbarItem;

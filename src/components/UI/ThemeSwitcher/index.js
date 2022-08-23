import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import classes from "./ThemeSwitcher.module.css";

const ThemeSwitcher = (props) => {
  const [showSwitcher, setShowSwitcher] = useState(false);

  function toggleShowSwitcher() {
    setShowSwitcher((prev) => !prev);
  }

  return (
    <div className={classes.theme_switcher_container}>
      <button
        className={`${classes.icon_button} ${showSwitcher ? "activated" : ""}`}
        onClick={toggleShowSwitcher}
      >
        <FiChevronLeft className={classes.icon} />
      </button>
      {showSwitcher && (
        <div>
          <div>red</div>
          <div>blue</div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;

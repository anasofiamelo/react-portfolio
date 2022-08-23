import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick || (() => console.log("working!"))}
    >
      {props.button_text || "ok"}
    </button>
  );
}

export default Button;

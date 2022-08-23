import classes from "./Input.module.css";

function Input(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        className={classes.input}
        placeholder={props.placeholder}
        type={props.type || "text"}
      />
    </div>
  );
}

export default Input;

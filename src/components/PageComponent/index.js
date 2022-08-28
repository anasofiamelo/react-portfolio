import classes from "./PageComponent.module.css";

function PageComponent(props) {
  return (
    <>
      <div key={props.title} className={classes.component}>
        <h1 className={classes.title}>{props.title}</h1>
        <h3 className={classes.description}>{props.description}</h3>
        <div className={classes.title_border_bottom} />
        <div className={classes.children}>{props.children}</div>
      </div>
    </>
  );
}

export default PageComponent;

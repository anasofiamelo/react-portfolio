// import { useEffect } from "react";

function PageComponent({ children, title }) {
  return (
    <div key={title} className="component">
      <div className="container">
        <h1 className="component-title">{title}</h1>
        <div className="title-border" />
      </div>
      {children}
    </div>
  );
}

export default PageComponent;

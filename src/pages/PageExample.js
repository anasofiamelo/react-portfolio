import { useEffect } from "react";

function PageComponent({ children, title }) {
  useEffect(() => {
    <PageComponent />;
    console.log("oi");
  }, []);
  return (
    <div className="component">
      <h1 className="component-title">{title}</h1>
      {children}
    </div>
  );
}

export default PageComponent;

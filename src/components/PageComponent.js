function PageComponent({ children, title, description }) {
  return (
    <div className="container">
      <div key={title} className="component">
        <h1 className="component-title">{title}</h1>
        <p>{description}</p>
        <div className="title-border" />
        <div className="children">{children}</div>
      </div>
    </div>
  );
}

export default PageComponent;

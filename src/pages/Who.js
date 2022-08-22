import PageComponent from "./PageComponent";
function Who() {
  return (
    <>
      <PageComponent title="Intro">
        <div className="text-container">
          <p className="text">
            Hello! My name is Sofia and I'm a 22 yo. web developer based in
            Brazil. My interest in web development started back in 2018 when I
            decided to start studying programming logic and I'm in love since
            then.
          </p>
          <p className="text">
            I'm currently working with automation (RPA) in a start-up. My main
            goal is to become a Frontend Developer (React, more specifically)
          </p>
        </div>
      </PageComponent>
    </>
  );
}

export default Who;

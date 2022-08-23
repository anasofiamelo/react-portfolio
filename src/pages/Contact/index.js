import { PageComponent } from "../../components";
import { Button, Input } from "../../components/UI";
import classes from "./Contact.module.css";

function Contact() {
  return (
    <>
      <PageComponent title="Contact" description="Contact me">
        <form className={classes.form}>
          <div className={classes.input_container}>
            <div className={classes.inputs}>
              <Input id="name" placeholder="Your Name" />
              <Input id="email" type="email" placeholder="Your Email" />
            </div>
            <textarea placeholder="Your message..." rows="6" />
          </div>
          <Button type="submit" button_text="send" />
        </form>
      </PageComponent>
    </>
  );
}

export default Contact;

import linkedinIcon from "/src/images/linkedin (1).svg";
import gitHubIcon from "/src/images/square-github (1).svg";
import mailIcon from "/src/images/envelope-solid (1).svg";
const Contact = () => {
  return (
    <section className="footer">
      <ul className="contact-list">
        <li className="contact">
          <a
            href="https://www.linkedin.com/in/marian-raileanu-1a4088206/"
            className="contact-link"
            target={"_blank"}
          >
            <img
              src={linkedinIcon}
              alt="This is Linkedin icon"
              className="logo"
              width={50}
              height={50}
            />
          </a>
        </li>
        <li className="contact">
          <a
            href="https://github.com/MarianIR"
            className="contact-link"
            target={"_blank"}
          >
            <img
              src={gitHubIcon}
              alt="This is GitHub icon"
              className="logo"
              width={50}
              height={50}
            />
          </a>
        </li>
        <li className="contact">
          <a href="mailto:marianraileanu37@gmail.com" className="contact-link">
            <img
              src={mailIcon}
              alt="This is email logo"
              className="logo"
              width={50}
              height={50}
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;

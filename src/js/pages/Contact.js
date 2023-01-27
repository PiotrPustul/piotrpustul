import FooterIcons from "../components/FooterIcons";

const Contact = () => {
  return (
    <>
      <div className="main-section__heading">
        <h2>Contact</h2>
      </div>
      <div className="main-section__context">
        <p>Feel free to get in touch. You can email me at:</p>
        <a href="mailto:piotrpustul@protonmail.ch">
          <span>Piotrpustul@protonmail.ch</span>
        </a>
        <FooterIcons />
      </div>
    </>
  );
};

export default Contact;

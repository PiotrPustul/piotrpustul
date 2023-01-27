import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const FooterIcons = () => {
  return (
    <ul className="icons">
      <li>
        <a
          href="https://github.com/piotrpustul"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub size={25} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/piotr-pustul/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedin size={25} />
        </a>
      </li>
      <li>
        <a href="mailto:piotrpustul@protonmail.ch">
          <FaEnvelope size={25} />
        </a>
      </li>
      <li>
        <a href="https://wa.me/+447542384967" rel="noreferrer" target="_blank">
          <FaWhatsapp size={25} />
        </a>
      </li>
    </ul>
  );
};

export default FooterIcons;

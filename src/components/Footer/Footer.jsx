import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer_top">
        <div className="footer_top_rigth">
          <h2>Say hello</h2>
          <a href="mailto::gnedyalkov94@gmail.com"> gnedyalkov94@gmail.com</a>
          <p>San Stefano 97A, Burgas, Bulgaria</p>
        </div>

        <div className="footer_top_left">
          <div>
            <ul className="footer__links">
              <li>
                <Link to="/projects">
                  <h3>Projects</h3>
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <h3>About</h3>
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <h3>Resume</h3>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="footer_bottom">
        <h3>Don't be a stranger</h3>
        <p>Here is where you can find me</p>
        <ul className="social_media_links">
          <li>
            <a href="https://github.com/GeorgiNedyalkov">
              <FaGithub className="icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/georgi-nedyalkov-33b4a69b/">
              <FaLinkedin className="icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/gnfluent/">
              <FaInstagram className="icon" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/georgi.f.nedyalkov/">
              <FaFacebook className="icon" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer__top">
                <div className="footer__top_right">
                    <h2>Say hello</h2>
                    <a className="link" href="mailto::gnedyalkov94@gmail.com">
                        gnedyalkov94@gmail.com
                    </a>
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
                                <Link to="/about">
                                    <h3>About</h3>
                                </Link>
                            </li>
                            <li>
                                <a href="/georgi_nedyalkov_cv.pdf">
                                    <h3>Résumé</h3>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="footer__bottom">
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

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <p>Created by Georgi Nedyalkov</p>
        <ul className="footer__links">
          <li>
            <a href="mailto::gnedyalkov94@gmail.com">Mail</a>
          </li>
          <li>
            <a href="https://github.com/GeorgiNedyalkov">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/georgi-nedyalkov-33b4a69b/">
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;

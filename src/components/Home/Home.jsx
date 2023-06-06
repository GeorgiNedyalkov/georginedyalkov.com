import { Link } from "react-router-dom";

import Contact from "../ContactForm/ContactForm";
import Projects from "../Projects/Projects";

import FrontEnd from "../../assets/front-end.webp";
import BackEnd from "../../assets/back-end.webp";
import "./Home.css";

const Home = ({ projects }) => {
  return (
    <main>
      <section className="hero">
        <div className="hero__text">
          <h1>Hi, I am Georgi!</h1>
          <p>
            Welcome to my digital lab. 🧪
            <br />
            I'm an aspiring web developer based in 📍 Burgas, Bulgaria.
          </p>
          <p>
            For the past year I have been learning how to code the basics of web
            development like HTML, CSS, and JavaScript, now I am focussing on
            learning React and backend development with NodeJS and MondoDB.
          </p>
          <p>
            Currently I am following the web developer in
            <a href="https://softuni.bg/">
              <b> SoftUni </b>
            </a>
            universty.
          </p>
          <p>
            I have been working on projects that solve problems from my previous
            working experience as a digital marketer in the real estate
            development industry. You can check out my
            <b>
              <Link to="projects"> projects </Link>
            </b>
            page to see what I have been working on.
          </p>
          <p>
            I would love to collaborate or work with other web developers,
            designers or business professionals. If you feel the same you can
            say hello at the
            <Link to="/contact">
              <b> contact </b>
            </Link>
            section.
          </p>
        </div>
        <div className="hero__img-container">
          <img
            className="hero__img"
            src="https://avatars.githubusercontent.com/u/51360924?v=4"
            alt="Georgi Nedyalkov"
          />
          <div className="links">
            <button className="btn cv">View CV</button>
            <a className="gitHub" href="https://github.com/GeorgiNedyalkov">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <Projects projects={projects} />

      <section id="about-section">
        <div id="front-end">
          <h2>Front-End</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            fugiat. Voluptates pariatur ratione iure deleniti! Beatae culpa
            minus soluta dolorum id minima. Quibusdam corrupti tempora iure, ea
            aperiam cum velit. Sunt architecto ipsum, vero, dolore delectus est
            eligendi nostrum hic asperiores, reprehenderit earum? Ex
            repudiandae, eos autem incidunt, nulla hic maiores distinctio
            corrupti, ipsam magni nobis consectetur blanditiis eius veritatis.
            Vel obcaecati blanditiis ipsam, incidunt iure fuga quia. Neque nulla
            sit eum, dolor iusto natus nihil
          </p>
          <img className="about_image" src={FrontEnd} alt="" />
        </div>
        <div id="back-end">
          <img className="about_image" src={BackEnd} alt="" />
          <h2>Back-End</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            fugiat. Voluptates pariatur ratione iure deleniti! Beatae culpa
            minus soluta dolorum id minima. Quibusdam corrupti tempora iure, ea
            aperiam cum velit. Sunt architecto ipsum, vero, dolore delectus est
            eligendi nostrum hic asperiores, reprehenderit earum? Ex
            repudiandae, eos autem incidunt, nulla hic maiores distinctio
            corrupti, ipsam magni nobis consectetur blanditiis eius veritatis.
            Vel obcaecati blanditiis ipsam, incidunt iure fuga quia. Neque nulla
            sit eum, dolor iusto natus nihil
          </p>
        </div>
        <div id="story">
          <h2>What's the story?</h2>
          <p>
            For the past 7 years I have been working in a real estate
            development company called Atlantis Bulgaria Holding. First I
            started as an agent and then I got promoted to a marketing manager
            and lead a team of both content creators and sales agents. Though my
            work compensated me well something was missing.
          </p>
          <p>
            I found programming and that ignited a spark I have never felt for
            something I enjoy doing as a profession. For the past year I have
            been learning how to code by myself first and then with SoftUni so
            that I can calibrate what I know with best practices. I have one
            more semester to complete the JavaScript developer path.
          </p>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default Home;

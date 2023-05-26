import Contact from "../ContactForm/ContactForm";
import Projects from "../Projects/Projects";
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
            <br />
            I'm an aspiring web developer based in Burgas, Bulgaria.
          </p>
        </div>
        <div className="hero__img-container">
          <img
            className="hero__img"
            src="https://avatars.githubusercontent.com/u/51360924?v=4"
            alt="Georgi Nedyalkov"
          />
          <button className="btn cv">View CV</button>
          <a className="gitHub" href="https://github.com/GeorgiNedyalkov">
            GitHub
          </a>
        </div>
      </section>
      <Projects projects={projects} />

      <Contact />
    </main>
  );
};

export default Home;

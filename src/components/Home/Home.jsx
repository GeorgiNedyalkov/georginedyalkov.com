import Contact from "../ContactForm/ContactForm";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <h1>Hi, I am Georgi!</h1>
      <p>
        Welcome to my digital lab. 🧪
        <br />
        <br />
        I'm an aspiring web developer based in Burgas, Bulgaria.
      </p>
      <div className="hero__img-container">
        <img
          className="hero__img"
          src="https://avatars.githubusercontent.com/u/51360924?v=4"
          alt="Georgi Nedyalkov"
        />
      </div>
      <ul className="resume">
        <li>
          <a href="/">Resume</a>
        </li>
        <li>
          <a href="/">CV</a>
        </li>
      </ul>
    </main>
  );
};

export default Home;

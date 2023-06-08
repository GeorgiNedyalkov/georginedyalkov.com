import Hero from "../Hero/Hero";
import Contact from "../ContactForm/ContactForm";
import Projects from "../Projects/Projects";

import "./Home.css";
import Skills from "../Skills/Skills";

const Home = ({ projects }) => {
  return (
    <main>
      <Hero />

      <Skills />

      <Projects projects={projects} />

      <section id="about-section">
        <div id="story">
          <h2>What's the story?</h2>
          <p>
            For the past 7 years I have been working in a real estate
            development company called Atlantis Bulgaria Holding.
          </p>
          <p>
            For the past year I have been learning how to code by myself first
            and then with SoftUni so that I can calibrate what I know with best
            practices. I have one more semester to complete the JavaScript
            developer path.
          </p>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default Home;

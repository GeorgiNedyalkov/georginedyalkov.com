import Hero from "../Hero/Hero";
import Contact from "../ContactForm/ContactForm";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import "./Home.css";

const Home = ({ projects }) => {
    return (
        <main>
            <Hero />
            <Skills />
            <Projects projects={projects} />
            <AboutSection />
            <Contact />
        </main>
    );
};

export default Home;

const AboutSection = () => {
    return (
        <section id="about-section">
            <div id="story">
                <h2>What's the story?</h2>
                <p>
                    For the past 6 years I have been working in a real estate development company
                    called Atlantis Bulgaria Holding.
                </p>
                <p>
                    For the past year and a half, I have been learning the fundamentals of web
                    development, designing and building full stack applications that solve problems
                    from my work experience as a real estate marketing and sales development.
                </p>
                <p>
                    Part of my job was to create make a monthly market analysis report which was a
                    manual, repetitive and time—consuming task. My first application did all the
                    work manually and saved me lots of hours and pains, thus igniting my spark to
                    create tools that help solve real world problems.
                </p>
            </div>
        </section>
    );
};

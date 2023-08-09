import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";

import "./Hero.css";

const Hero = () => {
    return (
        <section id="hero">
            <header className="hero__header">
                <h1 className="hero__greeting">Hi, I am Georgi!</h1>
                <div className="hero__description">
                    <p>Welcome to my 🧪 digital lab!</p>
                    <p>
                        I'm an aspiring web developer based in 📍 Burgas,
                        Bulgaria.
                    </p>
                    <p>
                        Currently Working on{" "}
                        <Link className="link" to="projects">
                            <b>projects</b>
                        </Link>{" "}
                        that solve problems from my previous working experience
                        as a digital marketer in the real estate development
                        industry.
                    </p>
                    <p>
                        Also finishing my final semester in{" "}
                        <a className="link" href="https://softuni.bg/">
                            <b>SoftUni</b>
                        </a>{" "}
                        on the JavaScript Developer path.
                    </p>
                </div>
            </header>
            <div className="hero__img_container">
                <img
                    className="hero__img"
                    src="https://avatars.githubusercontent.com/u/51360924?v=4"
                    alt="Georgi Nedyalkov"
                />
                <div className="hero__links">
                    <a href="/georgi_nedyalkov_cv.pdf" target="_blank">
                        <button className="btn">Résumé</button>
                    </a>
                    <a
                        className="link github"
                        href="https://github.com/GeorgiNedyalkov"
                    >
                        GitHub <BiLinkExternal />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

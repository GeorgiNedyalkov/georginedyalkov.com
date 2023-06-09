import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./About.css";

const SpotifyAPI = "https://api.spotify.com/";

const About = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch(SpotifyAPI)
      .then((response) => response.json)
      .then((data) => console.log(data));
  }, []);

  return (
    <div id="about-page">
      <div className="container">
        <h1>About me</h1>
        <p> Hi, I'm Georgi. Lovely to meet you!</p>
        <p>
          For the past 6 years I have been working in the real estate industry
          as a sales agent and later marketing manager. But at the same time I
          started learning how to code because I wanted to be able to create
          things by myself. You can check out my
          <Link className="link" to={"/projects"}>
            {" "}
            projects{" "}
          </Link>
          page to see what I have been working on.
        </p>
        <p>
          In the past year I have been studying programming and developing
          simple applications to learn how to code. I started with html, css and
          javascript. Later I continued to learn React and now I am still
          figuring out Redux.
        </p>
        <p>
          I have also taken a course on back-end development with node and build
          express applications. I learned about concepts like authorization,
          encryption, databases, CRUD operations, MVC framework.
        </p>
        <p>
          In my final year of university in 2017 I had to write a dissertation
          as my last project. At the same time my father introduced me to
          blockchain and cryptocurrencies This technology seemed fascinating to
          me and after that I have been learning all about crypto, blockchain
          technology, non-fungible tokens and the idea of decentralization
          itself. I have done a course in SoftUni and tested writing some smart
          contracts myself. It is one of the industries I am most excited about
          and would love to one day work in a project like this.
        </p>
      </div>
    </div>
  );
};

export default About;

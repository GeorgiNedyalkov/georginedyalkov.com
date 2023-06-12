import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import buckethead from "../../assets/music/buckethead_hold_me_forever.mp3";

import AudioPlayer from "../AudioPlayer/AudioPlayer";
import "./About.css";

const About = () => {
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

        <h2>Favorites</h2>
        <div className="about__section">
          <h3>Sports</h3>
          <ul>
            <li>Jiu Jitsu</li>
            <li>Break dancing</li>
            <li>Table soccer a.k.a ''Джага''</li>
            <li>Chess - 1.e4 with white; 1. ... c5 with black</li>
            <li>Backgammon</li>
            <li>Belotte</li>
            <li>Poker</li>
            <li>Football</li>
          </ul>
        </div>
        <div className="about__section">
          <h3>Gaming</h3>
          <p>
            All time favorites, in no particular order, and highly recommended
            games:
          </p>
          <ul>
            <li>Subnautica</li>
            <li>Starcraft 2</li>
            <li>God of War</li>
            <li>Returnal</li>
            <li>Quake III</li>
            <li>Bloodbourne</li>
            <li>Assassins Creed 2</li>
            <li>Pandemonium</li>
          </ul>
          <p>
            Currently trying our Baldur's gate and afterwards Heroes 3 (a little
            late to the party I know).
          </p>
        </div>
        <div className="about__section">
          <h3>Books</h3>
        </div>

        <div className="about__section">
          <h3>Movies and Shows</h3>
          <ul>
            <li>Lord of the Rings</li>
            <li>Pulp Fiction</li>
            <li>Revolver</li>
            <li>The Godfather 2</li>
            <li>The Silence of the Lambs</li>
            <li>Star Wars</li>
            <li>Vikings</li>
          </ul>
        </div>

        <div className="about__section">
          <h3>Music</h3>
          <p>Checkout one of my currently new favorite artists:</p>
          <ul className="genres">
            <li className="genre rock">Rock</li>
            <li className="genre hiphop">Hip Hop</li>
            <li className="genre funk">Funk</li>
            <li className="genre house">House</li>
          </ul>
        </div>
        <AudioPlayer />
      </div>
    </div>
  );
};

export default About;

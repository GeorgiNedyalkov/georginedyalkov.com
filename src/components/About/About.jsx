import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about-page">
      <h1>About me</h1>
      <p>
        Hi, I'm Georgi. For the past 6 years I have been working in the real
        estate industry as a sales agent and later marketing manager. But at the
        same time I started learning how to code because I wanted to be able to
        create things by myself. You can check out my
        <Link className="link" to={"/projects"}>
          {" "}
          projects{" "}
        </Link>
        page to see what I have been working on.
      </p>
      <p>
        In the past year I have been studying programming and developing simple
        applications to learn how to code. I started with html, css and
        javascript. Later I continued to learn React and now I am still figuring
        out Redux.
      </p>
      <p>
        I have also taken a course on back-end development with node and build
        express applications. I learned about concepts like authorization,
        encryption, databases, CRUD operations, MVC framework.
      </p>
    </div>
  );
};

export default About;

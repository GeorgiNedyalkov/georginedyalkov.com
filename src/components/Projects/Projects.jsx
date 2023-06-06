import React from "react";

import Project from "./Project/Project";

const Projects = ({ projects }) => {
  return (
    <section>
      <h2>Projects</h2>
      <div className="projects">
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <Project {...project} />
            </li>
          ))}
        </ul>
      </div>
      <h3>Front-end Mentor</h3>
      <p>
        I believe practice is a must for every professional. Which is why
        everyday I try to solve at least on problem from the front-end mentor
        website.
      </p>
      <div>
        <Project />
      </div>
    </section>
  );
};

export default Projects;

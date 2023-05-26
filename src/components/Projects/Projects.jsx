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
    </section>
  );
};

export default Projects;

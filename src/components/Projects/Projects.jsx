import React from "react";

import Project from "./Project/Project";

const Projects = ({ projects }) => {
  return (
    <div>
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
    </div>
  );
};

export default Projects;

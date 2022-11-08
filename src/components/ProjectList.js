import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const renderItems = projects.map((project) => {
    return (
      <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies} />
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{renderItems}</div>
    </div>
  );
}

export default ProjectList;

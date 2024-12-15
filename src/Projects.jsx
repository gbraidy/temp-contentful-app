import React from "react";
import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  console.log(loading, "||", projects);

  if (loading) {
    return <div className="projects">Loading...</div>;
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
      </div>
      <div className="title-underline"></div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, img, url, title } = project;
          return (
            <a
              href={url}
              key={id}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

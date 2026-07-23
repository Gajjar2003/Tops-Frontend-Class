import React from "react";
import ProjectCard from "./Components/ProjectCard";

function App() {
  const projects = [
    {
      title: "Food Website",
      image: "https://via.placeholder.com/300",
      description:
        "A responsive food website built using HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      projectUrl: "https://github.com/",
    },
    {
      title: "Django E-Shop",
      image: "https://via.placeholder.com/300",
      description:
        "An e-commerce application built using Python and Django.",
      technologies: ["Python", "Django", "SQLite"],
      projectUrl: "https://github.com/",
    },
  ];

  return (
    <div>
      <h1>My Portfolio</h1>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          image={project.image}
          description={project.description}
          technologies={project.technologies}
          projectUrl={project.projectUrl}
        />
      ))}
    </div>
  );
}

export default App;
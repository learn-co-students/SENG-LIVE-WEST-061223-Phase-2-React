import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";

function ProjectList({
  projects,
  onEditProject,
  onUpdateProject,
  onDeleteProject,
  setSelectedPhase,
  setSearchQuery
}) {
  const [searchInputText, setSearchInputText] = useState("");

  const projectCards = projects.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        project={project}
        onEditProject={onEditProject}
        onUpdateProject={onUpdateProject}
        onDeleteProject={onDeleteProject}
      />
    );
  });

  const handleOnChange = (e) => setSearchInputText(e.target.value);

  // add useEffect to debounce search requests

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button onClick={() => setSelectedPhase("")}>All</button>
        <button onClick={() => setSelectedPhase("5")}>Phase 5</button>
        <button onClick={() => setSelectedPhase("4")}>Phase 4</button>
        <button onClick={() => setSelectedPhase("3")}>Phase 3</button>
        <button onClick={() => setSelectedPhase("2")}>Phase 2</button>
        <button onClick={() => setSelectedPhase("1")}>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange={handleOnChange} />

      <ul className="cards">{projectCards}</ul>
    </section>
  );
};

export default ProjectList;

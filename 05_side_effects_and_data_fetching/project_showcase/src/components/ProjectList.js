import { useState } from 'react';
import ProjectCard from "./ProjectCard";

function ProjectList({ 
  projects, 
  onSelectPhase,
  searchQuery,
  onSearchChange
 }) {

  const handleSearchQueryChange = (e) => {
    onSearchChange(e.target.value)
  }

  // const searchResults = projects.filter(project => {
  //   return project.name.toLowerCase().includes(searchQuery.toLowerCase())
  // })

  const projectCards = projects.map(project => (
    <ProjectCard
      key={project.id}
      project={project}
    />
  ))

  return (
    <section>
      {/* <button onClick={onLoadProjects}>Load Projects</button> */}
      <h2>Projects</h2>

      <div className="filter">
        <button onClick={() => onSelectPhase("")}>All</button>
        <button onClick={() => onSelectPhase("5")}>Phase 5</button>
        <button onClick={() => onSelectPhase("4")}>Phase 4</button>
        <button onClick={() => onSelectPhase("3")}>Phase 3</button>
        <button onClick={() => onSelectPhase("2")}>Phase 2</button>
        <button onClick={() => onSelectPhase("1")}>Phase 1</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchQueryChange}
        value={searchQuery}
      />

      <ul className="cards">{projectCards}</ul>
    </section>
  );
};

export default ProjectList;
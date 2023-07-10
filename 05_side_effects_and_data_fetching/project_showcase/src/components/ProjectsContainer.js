import { useState, useEffect } from 'react';

import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

function ProjectsContainer() {
  const [projects, setProjects] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
      let url = "http://localhost:4000/projects"
      if (selectedPhase && searchQuery) {
        url += `?phase=${selectedPhase}&q=${searchQuery}`
      } else if (selectedPhase) {
        url += `?phase=${selectedPhase}`
      } else if (searchQuery) {
        url += `?q=${searchQuery}`
      }
      fetch(url)
        .then((res) => res.json())
        .then((projectsData) => setProjects(projectsData));
   
  }, [selectedPhase, searchQuery])
  

  const onAddProject = (project) => {
    setProjects(projects => [...projects, project]);
    // could do POST here for optimistic rendering
  }

  return (
    <>
      <ProjectForm
        onAddProject={onAddProject}
      />
      <ProjectList
        projects={projects}
        onSelectPhase={setSelectedPhase}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
    </>
  )
}

export default ProjectsContainer;
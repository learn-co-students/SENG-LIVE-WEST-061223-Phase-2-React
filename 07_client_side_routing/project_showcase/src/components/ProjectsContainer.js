import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import ProjectList from './ProjectList';
import ProjectEditForm from './ProjectEditForm';
import ProjectForm from './ProjectForm';
import ProjectDetail from './ProjectDetail'

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let url;
    if (selectedPhase && searchQuery) {
      url = `http://localhost:4000/projects?phase=${selectedPhase}&q=${encodeURI(searchQuery)}`;
    } else if (searchQuery) {
      url = `http://localhost:4000/projects?q=${encodeURI(searchQuery)}`;
    } else if (selectedPhase) {
      url = `http://localhost:4000/projects?phase=${selectedPhase}`;
    } else {
      url = "http://localhost:4000/projects";
    }
    fetch(url)
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, [selectedPhase, searchQuery]);

  const onSelectedPhaseChange = (newPhase) => {
    setSelectedPhase(newPhase)
  }

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  // const onUpdateProject = (updatedProject) => {
  //   setProjects(projects => projects.map(originalProject => {
  //     if (originalProject.id === updatedProject.id) {
  //       return updatedProject;
  //     } else {
  //       return originalProject;
  //     }
  //   }))
    
  // };
  const onUpdateProject = (updatedProject) => {
    setProjects(projects => projects.map(originalProject => {
      if (originalProject.id === updatedProject.id) {
        return {
          ...updatedProject,
          isUpdated: true
        };
      } else {
        return {
          ...originalProject,
          isUpdated: false
        };
      }
    }))
    
  };
  
  const onDeleteProject = (deletedProjectId) => {
    // remove the project from state
    console.log('deleting project from App state', 'id:', deletedProjectId)
    setProjects(projects => projects.filter(project => {
      return project.id !== deletedProjectId
    }))
  }
  
  // const onEditProject = (projectToEdit) => {
  //   setProjectToEdit(projectToEdit);
  // };
  
  // const renderForm = () => {
  //   if (projectToEdit) {
  //     return (
  //       <ProjectEditForm
  //         projectToEdit={projectToEdit}
  //         onUpdateProject={onUpdateProject}
  //       />
  //     );
  //   } else {
  //     return <ProjectForm onAddProject={onAddProject} />;
  //   }
  // };


  return (
    <Routes>
      <Route path="new" element={<ProjectForm onAddProject={onAddProject}/>} />
        
      <Route path=":id/edit" element={<ProjectEditForm onUpdateProject={onUpdateProject}/>} />
    
      <Route path=":id" element={<ProjectDetail onDeleteProject={onDeleteProject}/>} />
        
     
      <Route path="" element={<ProjectList
        projects={projects}
        onUpdateProject={onUpdateProject}
        onDeleteProject={onDeleteProject}
        onSelectedPhaseChange={onSelectedPhaseChange}
        setSelectedPhase={setSelectedPhase}
        setSearchQuery={setSearchQuery}
      />} />
=      
    </Routes>
  )
}

export default ProjectsContainer;
import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

function ProjectCard({ 
  project, 
  onEditProject,
  onUpdateProject,
  onDeleteProject
}) {
  const { id, image, about, name, link, phase, claps } = project;

  const url = `http://localhost:4000/projects/${id}`

  const handleClap = () => {
    // refactor to persist on backend
    const config = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ claps: claps + 1})
    }
    fetch(url, config)
      .then(res => res.json())
      .then(onUpdateProject)

    // if we were going to do optimistic rendering, we could:
    // onUpdate({
    //   ...project,
    //   claps: claps + 1
    // })
  };

  const handleEditClick = () => {
    onEditProject(project);
  };

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this project?")) { 
      // optimistic version of DELETE
      // fetch(`http://localhost:4000/projects/${id}`, { method: "DELETE"})
      // onDeleteProject(id)
      // pessimistic version of DELETE
      fetch(url, { method: "DELETE"})
        .then(res => {
          if(res.ok){
            onDeleteProject(id)
          }
        })

      
    }
  };

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClap} className="claps">
          👏{claps}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div className="manage">
          <button onClick={handleEditClick}>
            <FaPencilAlt />
          </button>
          <button onClick={handleDeleteClick}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
};

export default ProjectCard;

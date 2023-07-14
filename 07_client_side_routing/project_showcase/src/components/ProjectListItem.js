import { useState, useRef, useEffect } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom'

const ProjectListItem = ({
  project,
  onDeleteProject,
}) => {
  const { id, image, about, name, link, phase, isUpdated } = project;

  const [clapCount, setClapCount] = useState(0);
  const ref = useRef(null)

  const handleClap = () => setClapCount(clapCount + 1);

  const scrollToElement = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth'})
  }

  useEffect(() => {
    if (isUpdated) {
      scrollToElement()
    }
  
    
  }, [])
  

  // const handleEditClick = () => {
  //   onEditProject(project);
  // };

  const handleDeleteClick = () => {
    onDeleteProject(id)
    fetch(`http://localhost:4000/projects/${id}`, {
      method: "DELETE"
    })
  };

  return (
    <li ref={ref} className="card">
      <figure className="image">
        <Link to={`/projects/${id}`}>
          <img src={image} alt={name} />
        </Link>
        <button onClick={handleClap} className="claps">
          👏{clapCount}
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
          <Link className="button" to={`/projects/${id}/edit`}>
            <FaPencilAlt />
          </Link>
          <button onClick={handleDeleteClick}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
};

export default ProjectListItem;

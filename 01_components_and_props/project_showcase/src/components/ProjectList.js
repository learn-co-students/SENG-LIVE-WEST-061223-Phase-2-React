import ProjectListItem from "./ProjectListItem"

export default function ProjectList({projects}){ // props
   console.log("🚀 ~ file: ProjectList.js:2 ~ ProjectList ~ props:", projects) // props.projects
    const projectItems = projects.map(projectObj => {
        return <ProjectListItem key={projectObj.id} project={projectObj}/>
    })
    console.log("🚀 ~ file: ProjectList.js:8 ~ projectItems ~ projectItems:", projectItems)

   return (
        <section>
            <h1>All Projects</h1>
            <div className="filters">
                <button>All</button>
                <button>Phase 1</button>
                <button>Phase 2</button>
                <button>Phase 3</button>
                <button>Phase 4</button>
                <button>Phase 5</button>
            </div>
            <ul className="cards">
                {/* <ProjectListItem project={projects[0]}/>
                <ProjectListItem project={projects[1]}/>
                <ProjectListItem project={projects[2]}/>
                <ProjectListItem project={projects[3]}/>
                <ProjectListItem project={projects[4]}/> */}
               {projectItems}
               {/* {projects.map(projectObj => {
                    return <ProjectListItem project={projectObj}/>
                })} */}
            </ul>
        </section>
    )
}
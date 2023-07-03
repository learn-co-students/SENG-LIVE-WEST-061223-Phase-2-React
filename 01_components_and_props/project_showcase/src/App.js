// import './App.css';
import Header from './components/Header'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import projectsArr from './projects'

function App() {
  
  // console.log("🚀 ~ file: App.js:6 ~ projectsArr:", projectsArr)
  return (
    <div className="App">
      <Header />
      <ProjectForm />
      <ProjectList projects={projectsArr}/>
      {/* ProjectList({projects: projectsArr}) */}
    </div>
  );
}

export default App;

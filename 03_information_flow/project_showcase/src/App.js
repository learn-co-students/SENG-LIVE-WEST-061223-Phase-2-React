import { useState } from "react";
import Header from "./components/Header";
import ProjectContainer from "./components/ProjectContainer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // lifted up from Header

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode); // moved up from Header

  const appClass = isDarkMode ? "App" : "App light";

  return (
    <div className={appClass}>
      <Header
        isDarkMode={isDarkMode} // pass down this state to conditionally render button text
        onToggleDarkMode={onToggleDarkMode} // pass down to click handler function
      />
      <ProjectContainer />
    </div>
  );
};

export default App;

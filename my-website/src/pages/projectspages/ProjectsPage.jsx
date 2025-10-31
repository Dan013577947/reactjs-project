import { Link } from "react-router"
import Header from "../../components/Header"
import ProjectsPageBody from "./ProjectsPageBody"
import './ProjectsPage.css'
function ProjectsPage(){
  return(
    <>
      <Header />
      <ProjectsPageBody />
    </>
  );
}

export default ProjectsPage
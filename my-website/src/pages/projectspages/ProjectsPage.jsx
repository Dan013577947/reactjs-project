import { Link } from "react-router"
import Header from "../../components/Header"
import ProjectsPageBody from "./ProjectsPageBody"
import './ProjectsPage.css'
import Footer from "../../components/Footer"
function ProjectsPage(){
  return(
    <>
      <Header />
      <ProjectsPageBody />
      <Footer />
    </>
  );
}

export default ProjectsPage
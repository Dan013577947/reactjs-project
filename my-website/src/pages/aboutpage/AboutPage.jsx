import { Link } from "react-router"
import Header from "../../components/Header"
import AboutPageBody from './AboutPageBody'
import './AboutPage.css'
import Footer from "../../components/Footer"

function AboutPage() {
  return (
    <>
      <Header />
      <AboutPageBody />
      <Footer />
    </>
  );
}

export default AboutPage
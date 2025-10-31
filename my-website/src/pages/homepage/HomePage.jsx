import { Link } from "react-router"
import Header from "../../components/Header"
import HomePageBody from "./HomePageBody"
import './HomePage.css'
import Footer from "../../components/Footer"
function HomePage() {
  return (
    <>
      <Header />
      <HomePageBody />
      <Footer />
    </>
  );
}

export default HomePage
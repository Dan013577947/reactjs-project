import { Link } from "react-router"
import Header from "../../components/Header";

function HomePageBody() {
  return (
    <div className="home-body">
      <div className="home-left-section">
        <h3>Hello, It's Me</h3>
        <h1>Danilo Alvaro</h1>
        <h3>And I'm aspirant <span>Front-End Developer</span></h3>
        <p className="home-description">I’m a passionate Frontend Developer who transforms creative ideas into responsive, user-friendly, and visually engaging web experiences. Skilled in HTML, CSS, JavaScript, and React.js.</p>
        <div className="websites-links">
          <Link className="linkedin-link">
            <i className="fa fa-linkedin"></i>
          </Link>
          <Link className="github-link">
            <i className="fa fa-github"></i>
          </Link>
        </div>
        <button className="btn-dload-resume">Download Resume</button>
      </div>
      <div className="home-right-section">
        <img src="daniloimage.png" alt="" />
      </div>
    </div>
  );
}

export default HomePageBody
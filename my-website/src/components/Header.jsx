import { NavLink } from "react-router"
import './Header.css'
function Header() {
  return (
    <div className="header">
      <div className="header-left-section">
        Portfolio
      </div>
      <div className="header-right-section">
        <NavLink className="link" to='/'>Home</NavLink>
        <NavLink className="link" to='/about'>About</NavLink>
        <NavLink className="link" to='/projects'>Projects</NavLink>
        <NavLink className="link" to='/contact'>Contact</NavLink>
      </div>
    </div>
  );
}

export default Header
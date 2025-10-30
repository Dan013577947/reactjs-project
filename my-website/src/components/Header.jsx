import { Link, NavLink } from "react-router"
function Header(){
  return(
    <NavLink>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/skills'>Skills</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/contact'>Contact</Link>
    </NavLink>
  );
}

export default Header
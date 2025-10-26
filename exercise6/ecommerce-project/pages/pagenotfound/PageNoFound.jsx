import './PageNotFound.css'
import { Link } from 'react-router'
function PageNotFound(){
  return(
    <>
      <p>Page not found</p>
      <Link to="/">Go home</Link>
    </>
  );
}

export default PageNotFound
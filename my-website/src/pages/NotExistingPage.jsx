import { Link } from "react-router"

function NotExistingPage(){
  return(
    <>
      The Page don't exist
      <Link to='/'>Click Here to go back to Home Page</Link>
    </>
  );
}

export default NotExistingPage

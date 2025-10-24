import { useState } from "react"
import './MainWindow.css'
function MainWindow(){
  const [showPassword, setShowPassword] = useState(false);

  function showHandler(){
    showPassword
    ? setShowPassword(false)
    : setShowPassword(true)
  }

  

  return(
    <div
      className="div-login"
    >
      <h3 className="title">Hello, welcome to my website</h3>
      <div className="div-email">
        <input className="email" type="Email" placeholder="Email" />
      </div>
      <div className="div-password">
        <input className="password" type={showPassword ? "text" : "Password"} placeholder="Password" />
        <button className="show" onClick={showHandler}>Show</button>
      </div>
      <button className="login">Login</button>
      <button className="sign-up">Sign Up</button>
      
    </div>
  );
}

export default MainWindow
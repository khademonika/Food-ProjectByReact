import React, { useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'
const LoginPop = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up")

  return (
    <div className='login-popup'>
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}

          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Your Password' required />

        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className='login-popup-condition'>
          <input type="checkbox" required />
          <p>By continuing , i agree to the terms & privacy policy.</p>
        </div>
        {
          currState === "Login" ?
            <p>Create a new account? <span onClick={() => setCurrState("Signup")}>Click here</span></p>
            :
            <p>Already have an acoount? <span onClick={() => setCurrState("Login")}>Login here</span></p>

        }
      </div>
    </div>
  )
}

export default LoginPop
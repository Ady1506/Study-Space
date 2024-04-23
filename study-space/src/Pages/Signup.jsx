import React from 'react'
import './Signup.css'
const signup = () => {
  return (
    <div className='signupPage'>
        <div className="left">

        </div>
        <div className="right">
            <div className="logo">
                <img src="logo.png" alt="" />
            </div>
            <div className="hello">
                <h3>Welcome!</h3>
                <p>Let's explore new horizons together.</p>
            </div>
            <div className="details">
                <div className="credentials">
                    <input type="text" className="name detailButton" placeholder='Username'/>
                    <input type="text" className="email detailButton" placeholder='Email'/>
                    <input type="password" className="password detailButton" placeholder='Password'/>
                    <input type="password" className="password detailButton" placeholder='Confirm Password'/>
                </div>
                <button className="signupButton" onClick={() => window.location.href = "/main"}>Signup</button>
                <div className="Acc">
                    <p>Already ave an account?</p>
                    <a href="/login">Login</a>
                </div>
            </div>

        </div>

    </div>
  )
}

export default signup
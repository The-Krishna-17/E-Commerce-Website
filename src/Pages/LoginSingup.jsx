import React from 'react'
import './CSS/LoginSingup.css'

const LoginSingup = () => {
  return (
    <div className='loginsingup'>
      <div className='loginsingup-container'>
        <h1>Sing Up</h1>
        <div className="loginsingup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsingup-login'>Already have an account? <span>Login Here</span></p>
        <div className="loginsingup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the terms os use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSingup
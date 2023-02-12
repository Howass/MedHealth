import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import Header from '../components/header/Header'
import LogoVertical from '../assets/logo-vertical.png'
import './login-page.css'

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
  return (
    <div className='login-container'>
      <h3>Login</h3>
        <img src={LogoVertical} className='home-logo' />
        <form onSubmit={loginUser} className="login-form">
            <input type="text" name="username" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password"/>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default LoginPage
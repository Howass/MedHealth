import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
  return (
    <div>
        <form onSubmit={loginUser}>
            <input type="text" name="username" placeholder="Enter Username"></input>
            <input type="text" name="password" placeholder="Enter Password"></input>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default LoginPage
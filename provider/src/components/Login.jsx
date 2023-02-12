import React, {useState} from 'react'
import { Link } from "react-router-dom";
import "./login.css"


const Login = () => {
    const [user, setUser] = useState("")
  return (
    <div className='row'>
        <div className='wrapper'>
        <h3 className='header'>Healthcare Provider Login Page</h3>
        <form className="submit" onSubmit={null}>
            <input className="input" type="text" name="username" placeholder="Enter Username" onChange={(e)=>{setUser(e.target.value)}}></input>
            <input className="input" type="text" name="password" placeholder="Enter Password"></input>
            <Link className="calculate" to={{ pathname: "/home", search:"?name="+user}}>Login</Link>
        </form>
        </div>
    </div>
  )
}

export default Login
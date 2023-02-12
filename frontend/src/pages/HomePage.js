import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import "./home-page.css"


const HomePage = () => {
  let [notes, setNotes] = useState([])
  let {authTokens, logoutUser} = useContext(AuthContext)
  let {user} = useContext(AuthContext)

  useEffect(() => {
    getNotes()
  }, [])


  let getNotes = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/notes/', {
      method:'GET',
      headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer ' + String(authTokens.access)
      }
    })

    let data = await response.json()

      if (response.status == 200) {
        setNotes(data)
      } else if (response.statusText === 'Unauthorized') {
          logoutUser()
      }
  }
  // let createNote = async () => {
  //   let response = await fetch('http://127.0.0.1:8000/api/create/', {
  //     method:'POST',
  //     headers:{
  //         'Content-Type':'application/json',
  //         'Authorization':'Bearer ' + String(authTokens.access)
  //     }
  //   })
  // }

  return (
    <div>
      {user ? <p>ok</p> : <p>f</p>}
      <form>
        <input type="text"></input>
        <select name="cars" id="cars">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="text" placeholder="alergies"></input>
        <input type="text" placeholder="medical histroy"></input>
        <input type="text" placeholder="doctor"></input>
        <input type="text" placeholder="email"></input>
        <input type="number" placeholder="phone number"></input>
        <input type="number" placeholder="health card #"></input>
        <input type="number" placeholder="emergency contact"></input>
      </form>
      {/* user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    DOB = models.DateTimeField(auto_now=True)
    sex = models.CharField(max_length=10, default='Individual')
    alergy = models.CharField(max_length=128, default='Individual')
    history = models.CharField(max_length=128, default='Individual')
    doctor = models.CharField(max_length=128, default='Individual')
    email = models.CharField(max_length=128, default='Individual')
    phone_number = models.IntegerField(default=0)
    health_card = models.IntegerField(default=0)
    emergency_contact = models.IntegerField(default=0) */}



      <p>You are logged to the home page!</p>
      {/* <button onClick={createNote} >Create Note</button> */}
    </div>
  )
}

export default HomePage
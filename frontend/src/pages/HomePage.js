import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import "./home-page.css"
import Header from '../components/header/Header'
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
  let [notes, setNotes] = useState([])
  let {authTokens, logoutUser} = useContext(AuthContext)
  let {user} = useContext(AuthContext)

  const history = useNavigate();

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
  const [DOB, setDOB] = useState(new Date())
  const [sex, setSex] = useState("Male")
  const [alergies, setAlergies] = useState()
  const [medHistory, setMedHistory] = useState()
  const [doctor, setDoctor] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [healthCard, setHealthCard] = useState()
  const [contact, setContact] = useState()


  const handleSubmit = async (e) => {
      e.preventDefault()
      let data = {
        'user': user.username,
        'DOB': DOB,
        'sex': sex,
        'alergies': alergies,
        'history': medHistory,
        'doctor': doctor,
        'email': email,
        'phone': phone,
        'healthCard': healthCard,
        'contact': contact,
      }
      await fetch('http://127.0.0.1:8000/api/patient/', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            // the data to send
            body: JSON.stringify(data)
          })
      history('/condition/');
  }

  return (
    <>
    <Header />
    <div className='information-container'>
      {user ?
      <form onSubmit={handleSubmit}>
        <input type="date" onChange={(e)=>{setDOB(e.target.value)}}></input>
        <select name="Sex" onChange={(e)=>{setSex(e.target.value)}}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="text" placeholder="Allergies" onChange={(e)=>{setAlergies(e.target.value)}}></input>
        <input type="text" placeholder="Medical History" onChange={(e)=>{setMedHistory(e.target.value)}}></input>
        <input type="text" placeholder="Family Doctor" onChange={(e)=>{setDoctor(e.target.value)}}></input>
        <input type="text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}></input>
        <input type="number" placeholder="Phone Number" onChange={(e)=>{setPhone(e.target.value)}}></input>
        <input type="number" placeholder="Health Card #" onChange={(e)=>{setHealthCard(e.target.value)}}></input>
        <input type="number" placeholder="Emergency Contact" onChange={(e)=>{setContact(e.target.value)}}></input>
        <button type="submit">Submit</button>
      </form>
      : <></>}
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


      {/* <p>You are logged to the home page!</p> */}
      {/* <button onClick={createNote} >Create Note</button> */}
    </div>
    </>
  )
}

export default HomePage
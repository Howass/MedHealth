import React, { useState } from 'react'
import "./home.css"
import Header from '../header/Header'

const Home = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const username = queryParameters.get("name")
  const [location, setLocation] = useState()
  const [time, setTime] = useState()
  const [wait, setWait] = useState()
  const [video, setVideo] = useState(false)
  const [appointment, setAppointment] = useState(false)
  const [url, setUrl] = useState()
  const [phone, setPhone] = useState()
  const [services, setServices] = useState()

  let handleSubmit = async (e) => {
    e.preventDefault()
    // setLocation(e.target.location.value)
    // setTime(e.target.WDO.value+" "+e.target.WDC.value+" "+e.target.WEO.value+" "+e.target.WEC.value)
    // let x = e.target.wait.value
    // let y = x.split(":")
    // setWait(parseInt(y[0])*60 + parseInt(y[1]))
    // setVideo(e.target.video.value == "on")
    // setAppointment(e.target.app.value == "on")
    // setUrl(e.target.url.value)
    // setPhone(e.target.phone.value)
    // setServices(e.target.services.value)
    await updateProvider()
  }

  const updateProvider = async () => {
    await fetch('http://127.0.0.1:8000/api/provider/', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      // the data to send
      body: JSON.stringify({
        "username": username,
        "location": location,
        "open_time": time,
        "wait_time": wait,
        "video_call": video,
        "book_appointment": appointment,
        "url": url,
        "phone": phone,
        "services": services
      })
    })
  }

  return (
    <>
      <Header />
      <div className="input-container">
        <h1>Home Page:&nbsp;{username}</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='location' name='location' onChange={(e) => { setLocation(e.target.value) }}></input>
          {/* <input type="number" placeholder='wait time' name='wait'></input> */}
          <div className='input-label'>
            <label>Wait Time</label>
            <input className="without_ampm" type="time" name="wait" min="12:00" max="23:59" required onChange={(e) => { let x = e.target.value; let y = x.split(":"); setWait(parseInt(y[0]) * 60 + parseInt(y[1])) }} />
          </div>
          <div className='input-label'>
            <label>Weekday Open</label>
            <input type="time" name="WDO" min="00:00" max="23:59" required onChange={(e) => { setTime(e.target.value + " ") }} />
          </div>
          <div className='input-label'>
            <label>Weekday close</label>
            <input type="time" name="WDC" min="00:00" max="23:59" required onChange={(e) => { setTime(time + e.target.value + " ") }} />
          </div>
          <div className='input-label'>
            <label>Weekend Open</label>
            <input type="time" name="WEO" min="00:00" max="23:59" required onChange={(e) => { setTime(time + e.target.value + " ") }} />
          </div>
          <div className='input-label'>
            <label>Weekend Close</label>
            <input type="time" name="WEC" min="00:00" max="23:59" required onChange={(e) => { setTime(time + e.target.value) }} />
          </div>
          <div className='input-label'>
            <label>Video Calls</label>
            <input type="checkbox" name='video' className='squared' onChange={(e) => { setVideo(e.target.value == "on") }}></input>
          </div>
          <div className='input-label'>
            <label>Appointments</label>
            <input type="checkbox" placeholder='book appointment' name='app' onChange={(e) => { setAppointment(e.target.value == "on") }}></input></div>
          <input type="text" placeholder='url' name='url' onChange={(e) => { setUrl(e.target.value) }}></input>
          <input type="number" placeholder='phone' name='phone' onChange={(e) => { setPhone(e.target.value) }}></input>
          <input type="text" placeholder='services' name='services' onChange={(e) => { setServices(e.target.value) }}></input>
          <button className='calculate' type="submit">Update </button>
        </form>
      </div>
    </>
  )
}

export default Home
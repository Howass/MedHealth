import React, {useState, useEffect} from 'react'



import MapSection from './components/map/Map' // import the map here



import './app.css'

const App = () => {

  const [location, setLocation] = useState({
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  })
  
  useEffect(() => {
    //console.log(coordinates.latitude + "" + coordinates.longitude)
    getUserAddress();
    //getHospitalInfo();
  })

  const getUserAddress = async () => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=AIzaSyBC5EcGadNT383cmuUgw0Xq27a40U_3CQI`);
    const data = await response.json();
    //console.log(data)

    if (data.results[0] !== undefined) {
      setLocation({
         address: data.results[0].formatted_address
      })
    }

    //console.log(data.results[0].formatted_address)
    //setLocation({
    //  address: data.results[0].formatted_address
   // })
  }

  const getLocation = async () => {

    if (navigator.geolocation) {
      // navigator.geolocation.getCurrentPosition(getCoordinates, handelLocationError);
  
      await navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        console.log("Triggered")
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
  
        //setAddressVisiblitly(true);
      });
  
    } else
      alert("Geolocation is not supported by this browser.");
  }

  return (
  <div className="App">
    <button className="button" onClick={() => getLocation()}>Locate Me</button>
    
    
    <MapSection location={location} zoomLevel={17} /> {/* include it here */}
    
    
  </div>
  )
}

export default App
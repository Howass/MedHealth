import React, {useState, useEffect} from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

import './map.css'



const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => {

  const [coordinates, setCoordinates] = useState({ latitude: "43.793607699999995", longitude: "-79.3284823" });

  function handleChange(event) {
    location.onChange(event.target.value);
 } 


  const getUserAddress = async () => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&type=hospital&key=AIzaSyBC5EcGadNT383cmuUgw0Xq27a40U_3CQI`);
    console.log(response)
    const data = await response.json();
    console.log(data)
    //setUserAddress(data.results[0].formatted_address);
  }

  useEffect(() => {
    //console.log(coordinates.latitude + "" + coordinates.longitude)
    getUserAddress();
    //getHospitalInfo();
  });

  return (
    <div className="map">

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBC5EcGadNT383cmuUgw0Xq27a40U_3CQI' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />

       
      </GoogleMapReact>
    </div>
  </div>
  )};

export default Map
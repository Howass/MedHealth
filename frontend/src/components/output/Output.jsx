import { useLoadScript } from "@react-google-maps/api";
import Map from "../map/Map";
import "./Output.css";
import React, { useState, useEffect } from 'react';

import Header from '../header/Header'

const Output = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBC5EcGadNT383cmuUgw0Xq27a40U_3CQI" // Add your API key
    });
    const [location, setLocation] = useState({

        lat: 45.4231,
        lng: -75.6831,
    })

    useEffect(() => {
        //console.log(coordinates.latitude + "" + coordinates.longitude)
        getUserAddress();
        //getHospitalInfo();
    }, [])

    const getUserAddress = async () => {
        console.log(location)
        if (location.lat != undefined) {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=AIzaSyBC5EcGadNT383cmuUgw0Xq27a40U_3CQI`);
            const data = await response.json();
            //console.log(data)
            console.log("response here:")
            console.log(data)

            if (data.results[0] !== undefined) {
                const newLocation = {
                    address: data.results[0].formatted_address,
                    lat: data.results[0].geometry.location.lat,
                    lng: data.results[0].geometry.location.lng

                }
                console.log(newLocation)
                setLocation(newLocation)

            }
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
    return <>
        <Header />
        <div className="App">
            <button className="button" onClick={() => getLocation()}>Locate Me</button>




        </div>
        {isLoaded ? <Map location={location} /> : null}
    </>
}

export default Output
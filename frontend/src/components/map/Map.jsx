import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";



function Map({ location }) {
  const markers = [
    {
      id: 1,
      name: "My Location",
      position: { lat: location.lat, lng: location.lng }
    },
    {
      id: 2,
      name: "The Ottawa Hospital General Campus",
      position: { lat: 45.4009, lng: -75.6475 }
    },
    {
      id: 3,
      name: "The Ottawa Hospital Civic Campus",
      position: { lat: 45.3929, lng: -75.7217 }
    },
    {id:4,
      name:"St. Marys Hospital",
    position:{lat:43.437825,lng:-80.503555}
      },
    {id:5,
    name:"Kingston General Hospital site",
  position:{lat:44.223336,lng:-76.494124}},
  {id:6,
  name:" Montreal jewish general hospital",
  position:{lat: 45.497091,lng: -73.630243}}
  
  ];
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100vw", height: "100vh" }}
    >
      {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}

export default Map;

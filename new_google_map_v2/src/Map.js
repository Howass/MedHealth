import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

const markers = [
  {
    id: 1,
    name: "University Ottawa",
    position: { lat: 45.4231, lng: -75.6831 }
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
  {
    id: 5,
    name: "Test point 1",
    position: { lat: 25, lng: -75.7217 }

  }
];

function Map() {
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

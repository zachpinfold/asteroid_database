import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";

const AsteroidCard = ({ name, geolocation }) => {
  return (
    <div className="asteroidCard">
      <div className="mapLeftContainer">
        <h3>{name}</h3>
        <h4>Location:</h4>
        <div id="mapContainer">
          <Map
            center={[geolocation.latitude, geolocation.longitude]}
            zoom={8}
            id="mapid"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[geolocation.latitude, geolocation.longitude]} />
          </Map>
        </div>
      </div>
      <div>
        <p>Date discovered:</p>
        <p>Mass:</p>
      </div>
    </div>
  );
};

export default AsteroidCard;

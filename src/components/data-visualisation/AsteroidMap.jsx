import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";

const AsteroidMap = ( {props} ) => {

    return (
    <div className="card--dash">
        <h4>Location:</h4>
        <div>
          <Map
            center={[0, 0]}
            zoom={1}
            id="mapid--dashboard"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
                {props.asteroids.map(element => {
                    console.log(element.geolocation.latitude);
                    
                    return <Marker position={[element.geolocation.latitude, element.geolocation.longitude]} />
                })}
          </Map>
      </div>
    </div>
  );
};

export default AsteroidMap;
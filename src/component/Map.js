import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
const axios = require("axios");
function Map({ ip }) {
  const [posisi, setPosisi] = useState({
    lat: "",
    lng: "",
    city: "",
    country: "",
  });
  let position = [posisi.lat, posisi.lng];

  useEffect(() => {
    async function getInfoIp() {
      try {
        const response = await axios.get(
          "https://geo.ipify.org/api/v1?apiKey=at_mGXeU1zY4JbFU1sxUdh1WsaPcmALT&ipAddress=" +
            String(ip)
        );

        setPosisi({
          lat: response.data.location.lat,
          lng: response.data.location.lng,
          city: response.data.location.city,
          country: response.data.location.country,
        });
      } catch (error) {
        console.error(error);
      }
    }
    getInfoIp();
  }, [ip]);

  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
  }

  return (
    <div className="map">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <ChangeMapView coords={position} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {posisi.city}, {posisi.country}.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;

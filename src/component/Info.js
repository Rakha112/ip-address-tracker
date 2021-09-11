import React, { useEffect, useState } from "react";
const axios = require("axios");
function Info({ ip }) {
  // https://geo.ipify.org/api/v1?apiKey=at_Oipz0K4dVUIircj8WZjgSm9zio6Ky&ipAddress=
  const [dataIP, setdataIP] = useState({
    ip: "",
    city: "",
    country: "",
    time: "",
    isp: "",
    lat: "",
    lng: "",
  });
  useEffect(() => {
    async function getInfoIp() {
      try {
        const response = await axios.get(
          "https://geo.ipify.org/api/v1?apiKey=at_mGXeU1zY4JbFU1sxUdh1WsaPcmALT&ipAddress=" +
            String(ip)
        );

        setdataIP({
          ip: response.data.ip,
          city: response.data.location.city,
          country: response.data.location.country,
          time: response.data.location.timezone,
          isp: response.data.isp,
          lat: response.data.location.lat,
          lng: response.data.location.lng,
        });
      } catch (error) {
        console.error(error);
      }
    }

    getInfoIp();
  }, [ip]);

  return (
    <div className="ip__detail">
      <p>IP ADDRESS</p>
      <h2>{dataIP.ip}</h2>
      <p>LOCATION</p>
      <h2>
        {dataIP.city}, {dataIP.country}
      </h2>
      <p>TIMEZONE</p>
      <h2>UTC {dataIP.time}</h2>
      <p>ISP</p>
      <h2>{dataIP.isp}</h2>
    </div>
  );
}

export default Info;

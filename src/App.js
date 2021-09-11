import React, { useState, useEffect } from "react";
import Info from "./component/Info";
import Map from "./component/Map";
import arrow from "./images/icon-arrow.svg";
const axios = require("axios");
function App() {
  const [myIP, setmyIP] = useState([""]);
  const [cariIP, setcariIP] = useState("");

  useEffect(() => {
    async function getIP() {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setmyIP(response.data.ip);
      } catch (error) {
        console.error(error);
      }
    }
    getIP();
  }, []);

  const handleschange = (e) => {
    e.preventDefault();
    setcariIP(e.target.value);
  };
  const handlessubmit = (e) => {
    e.preventDefault();
    setmyIP(cariIP);
  };
  return (
    <div className="App">
      <h1>IP Address Tracker</h1>
      <div className="form">
        <form
          action="submit"
          onSubmit={(e) => {
            handlessubmit(e);
          }}
        >
          <input
            onChange={(e) => {
              handleschange(e);
            }}
            type="text"
            placeholder="Search for any IP address"
          />
          <button type="submit">
            <img src={arrow} alt="icon-arrow" />
          </button>
        </form>
      </div>
      <Info ip={myIP} />
      <Map ip={myIP} />
    </div>
  );
}

export default App;

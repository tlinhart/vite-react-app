import React, { useEffect, useState } from "react";
import cloudflarePagesLogo from "./assets/cloudflare-pages.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetch("/api/time");
      const { time } = await response.json();
      setTime(new Date(time));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://pages.cloudflare.com" target="_blank">
          <img
            src={cloudflarePagesLogo}
            className="logo cloudflare-pages"
            alt="Cloudflare Pages logo"
          />
        </a>
      </div>
      <h1>Vite + React + Cloudflare Pages</h1>
      <div className="card">
        {time ? <p>Current time is {time.toLocaleString()}</p> : null}
      </div>
      <p className="read-the-docs">Click on the logos to learn more</p>
    </div>
  );
}

export default App;

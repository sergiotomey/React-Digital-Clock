import { useState, useEffect } from "react";
import "./App.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <>
      <h1>React Digital Clock</h1>
      <div className="clock-div">
        <span className="clock">{formatTime()}</span>
      </div>
    </>
  );
}

export default DigitalClock;

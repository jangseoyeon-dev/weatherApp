import React from "react";
import styles from "./WeatherBox.module.css";

const WeatherBox = ({ weather }) => {
  console.log("weather", weather);
  return (
    <div className={styles.box}>
      <p>{weather?.name}</p>
      <h2>
        {Math.floor(weather?.main.temp)}C /
        {Math.floor(weather?.main.temp * 1.8 + 32)}F
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;

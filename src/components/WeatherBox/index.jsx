import React, { useEffect, useState } from "react";
import styles from "./WeatherBox.module.css";

const WeatherBox = ({ weather }) => {
  const [deg, setDeg] = useState(0);

  const getWindDirection = (deg) => {
    if ((deg >= 337.5 && deg <= 360) || (deg >= 0 && deg < 22.5))
      return "북 (N)";
    if (deg >= 22.5 && deg < 67.5) return "북동";
    if (deg >= 67.5 && deg < 112.5) return "동";
    if (deg >= 112.5 && deg < 157.5) return "남동";
    if (deg >= 157.5 && deg < 202.5) return "남";
    if (deg >= 202.5 && deg < 247.5) return "남서";
    if (deg >= 247.5 && deg < 292.5) return "서";
    if (deg >= 292.5 && deg < 337.5) return "북서";
    return "방향 없음";
  };

  useEffect(() => {
    const result = getWindDirection(weather?.wind.deg);
    setDeg(result);
  }, [deg]);

  return (
    <div className={styles.box}>
      <p>{weather?.name}</p>
      <h1>{Math.floor(weather?.main.temp * 100) / 100} °C </h1>
      <p>{Math.floor((weather?.main.temp * 1.8 + 32) * 100) / 100} °F</p>
      <h3 style={{ marginBottom: "20px" }}>
        최고: {Math.floor(weather?.main.temp_max * 100) / 100} °C / 최저:
        {Math.floor(weather?.main.temp_min * 100) / 100} °C
      </h3>
      <div className={styles.weatherInfoMain}>
        <div className={styles.weatherInfo}>
          <p style={{ fontSize: "30px" }}>🌡</p>
          <p>{weather?.main.feels_like}°C</p>
        </div>
        <div className={styles.weatherInfo}>
          <p style={{ fontSize: "30px" }}>💧</p>
          <p>{weather?.main.humidity}%</p>
        </div>
        <div className={styles.weatherInfo}>
          <p style={{ fontSize: "30px" }}>💨</p>
          <p>
            {deg} / {weather?.wind.speed}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;

import "./App.css";
import { useEffect, useState } from "react";
import WeatherBox from "./components/WeatherBox";
import ButtonBox from "./components/ButtonBox";
import ClipLoader from "react-spinners/ClipLoader";

//1. 앱이 실행되자마자 날씨정보가 보여야 한다.
//2. 날씨 정보에는 도시, 섭씨 화씨 날씨상태
//3. 5개 버튼이 있다. (현재 위치, 다른 도시)
//4. 도시버튼을 클릭하면 날씨정보가 바꾸어야 한다.
//5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
//6. 데이터를 패칭하는 동안 로딩 스피너가 돈다.

function App() {
  const citis = ["hanoi", "paris", "new york", "seoul"];

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiError, setAPIError] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let con = position.coords.longitude;
      getWeatherByCurrentLocation(lat, con);
    });
  };

  // 내가 생각한 방식은 위에서 getCurrentLocation에서 fetch 바로함
  // 따로 함수를 생성해서 하는 방식을 권함
  const getWeatherByCurrentLocation = async (lat, con) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${con}&appid=0d8a28b31f4a48f9cd37b87720e0d330&units=metric`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      handleBackgroundChange(data.weather[0].description);
      setWeather(() => data);
      setLoading(false);
    } catch (error) {
      setAPIError(error);
      setLoading(false);
    }
  };

  const getWeatherByCityId = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d8a28b31f4a48f9cd37b87720e0d330&units=metric`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      handleBackgroundChange(data.weather[0].description);
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setAPIError(error);
      setLoading(false);
    }
  };
  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  const handleBackgroundChange = (weather) => {
    if (weather === "clear sky") {
      setWeatherDescription("sunny");
    } else if (
      weather === "few clouds" ||
      weather === "mist" ||
      weather === "haze"
    ) {
      setWeatherDescription("fewCloudy");
    } else if (weather === "scattered clouds" || weather === "broken clouds") {
      setWeatherDescription("cloudy");
    } else if (weather === "shower rain" || weather === "rain") {
      setWeatherDescription("rainy");
    } else if (weather === "thunderstorm") {
      setWeatherDescription("thunderstorm");
    } else if (weather === "snow") {
      setWeatherDescription("snow");
    }
  };

  useEffect(() => {
    setLoading(true);
    if (!city) {
      getCurrentLocation();
    } else {
      getWeatherByCityId();
    }
  }, [city]);

  return (
    <div className={`main ${weatherDescription}`}>
      {loading ? (
        <ClipLoader color="#36d7b7" loading={loading} size={150} />
      ) : !apiError ? (
        <>
          <WeatherBox weather={weather} />
          <ButtonBox
            citis={citis}
            handleCityChange={handleCityChange}
            selectedCity={city}
          />
        </>
      ) : (
        <h1>{apiError}</h1>
      )}
    </div>
  );
}

export default App;

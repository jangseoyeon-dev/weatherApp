import "./App.css";
import { useEffect, useState } from "react";
import WeatherBox from "./components/WeatherBox";
import ButtonBox from "./components/ButtonBox";
//1. 앱이 실행되자마자 날씨정보가 보여야 한다.
//2. 날씨 정보에는 도시, 섭씨 화씨 날씨상태
//3. 5개 버튼이 있다. (현재 위치, 다른 도시)
//4. 도시버튼을 클릭하면 날씨정보가 바꾸어야 한다.
//5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
//6. 데이터를 패칭하는 동안 로딩 스피너가 돈다.

function App() {
  const [weather, setWeather] = useState(null);
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
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <WeatherBox weather={weather} />
      <ButtonBox />
    </div>
  );
}

export default App;

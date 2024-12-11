import React, { useContext } from "react";
import { WeatherContext } from "../../Context/weatherDataContext";
import CityWeatherInfo from "./CityWeatherInfo"; // Adjust the import path as needed

function City2Info() {
  const { setCity2WeatherContext } = useContext(WeatherContext);

  return (
    <CityWeatherInfo 
      contextSetter={setCity2WeatherContext}
      gradientFrom="to-gradientPink-mid"
      gradientTo="from-gradientOrange-dark"
    />
  );
}

export default City2Info;
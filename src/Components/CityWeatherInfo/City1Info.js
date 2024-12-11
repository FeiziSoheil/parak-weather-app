import React, { useContext } from "react";
import { WeatherContext } from "../../Context/weatherDataContext";
import CityWeatherInfo from "./CityWeatherInfo"; // Adjust the import path as needed

function City1Info() {
  const { setCity1WeatherContext } = useContext(WeatherContext);

  return (
    <CityWeatherInfo 
      contextSetter={setCity1WeatherContext}
      gradientFrom="from-gradientOrange-light"
      gradientTo="to-gradientOrange-dark"
    />
  );
}

export default City1Info;
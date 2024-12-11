import React, { useState, useEffect, useContext } from "react";
import {
  HeatPumpRounded,
  LocationOnRounded,
  WindPowerRounded,
} from "@mui/icons-material";
import { WeatherContext } from "../../Context/weatherDataContext";

// لیست شهرها
const CITIES = ["Rome", "Istanbul", "New York", "London"];

// تنظیمات اصلی API
const MAIN_OPTIONS = {
  url: "https://api.weatherapi.com/v1",
  key: '0d87848c14194165908214213240612', 
};

function CityWeatherInfo({
  contextSetter,
  gradientFrom = "from-gradientOrange-light",
  gradientTo = "to-gradientOrange-dark",
}) {
  const [cityName, setCityName] = useState(CITIES[0]); 

  const getWeatherData = async (city) => {
    try {
      const response = await fetch(
        `${MAIN_OPTIONS.url}/forecast.json?key=${MAIN_OPTIONS.key}&q=${city}&aqi=no&alerts=no`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      const currentlyWeatherInfo = {
        cityName : data.location.name,
        temp: data.current.temp_c,
        humidity: data.current.humidity,
        wind: data.current.wind_kph,
        sunrise:data.forecast.forecastday[0].astro.sunrise,
        sunset:data.forecast.forecastday[0].astro.sunset,
        
      };

      contextSetter(currentlyWeatherInfo); 
    } catch (error) {
      console.error("Error fetching weather data:", error);
      contextSetter(null); 
    }
  };


  useEffect(() => {
    if (cityName) {
      getWeatherData(cityName);
    }
  }, [cityName, contextSetter]);


  const weatherContext = useContext(WeatherContext);


  const currentWeatherContext =
    contextSetter === weatherContext.setCity1WeatherContext
      ? weatherContext.city1WeatherContext
      : weatherContext.city2WeatherContext;

  return (
    <div
      className={`bg-gradient-to-l ${gradientFrom} ${gradientTo} rounded-3xl p-8 space-y-5 text-xl text-white font-roboto`}
    >
      <div className="flex justify-between">
   
        <span className="flex items-center">
          <LocationOnRounded />
          <select
            name="city"
            id="city-select"
            className="px-2 bg-transparent outline-none"
            onChange={(e) => setCityName(e.target.value)}
            value={cityName}
          >
            {CITIES.map((city) => (
              <option
                key={city}
                className="bg-gradientOrange-light"
                value={city}
              >
                {city}
              </option>
            ))}
          </select>
        </span>

        <p>{currentWeatherContext ? `${currentWeatherContext.temp} °C` : "..."}</p>
      </div>
   
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2">
          <WindPowerRounded />
          <p>Wind</p>
        </span>
        <p>
          {currentWeatherContext
            ? `${currentWeatherContext.wind} km/h`
            : "..."}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2">
          <HeatPumpRounded />
          <p>Humidity</p>
        </span>
        <p>
          {currentWeatherContext
            ? `${currentWeatherContext.humidity} %`
            : "..."}
        </p>
      </div>
    </div>
  );
}

export default CityWeatherInfo;

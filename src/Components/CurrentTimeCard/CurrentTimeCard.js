import React, { useContext, useState } from "react";
import {
  AirRounded,
  CloudCircleRounded,
  CodeRounded,
  LocationOnRounded,
  WindPowerRounded,
} from "@mui/icons-material";
import { WeatherContext } from "../../Context/weatherDataContext";
// const

export default function CurrentTimeCard() {
  const { currentlyWeatherContext,isDark } = useContext(WeatherContext);

  

  return (
    <div className={` w-full  rounded-3xl text-white px-3 py-8 ${isDark? 'bg-gradient-to-l from-cyan-800 to-cyan-600':'bg-gradient-to-l  from-gradientBlue-light to-gradientBlue-mid'}`}>
      <div className="flex items-center text-3xl gap-2">
        <LocationOnRounded fontSize="25" />
        <p className="font-poppins">
          {currentlyWeatherContext
            ? `${currentlyWeatherContext.cityName}, ${currentlyWeatherContext.CountryName} `
            : "Loading..."}
        </p>
      </div>

        <div className="flex justify-between items-center text-4xl  w-2/3 mx-auto my-10">
          <img
            src={currentlyWeatherContext ? currentlyWeatherContext.icon : "..."}
            className="w-32 h-32"
            alt=""
          />

          <div className=" flex flex-col items-end font-poppins font-semibold">
            <p className="">
              {currentlyWeatherContext
                ? `${currentlyWeatherContext.temp} °C`
                : "..."}
            </p>
            <p className="text-2xl">
              {currentlyWeatherContext ? currentlyWeatherContext.text : "..."}
            </p>
          </div>
        </div>
    
      <div className="space-y-2 text-2xl font-roboto  w-2/3  mx-auto">
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <AirRounded />
            <p>wind</p>
          </span>
          <p>
            {currentlyWeatherContext
              ? `${currentlyWeatherContext.wind} km/h`
              : "..."}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <AirRounded />
            <p>Hum</p>
          </span>
          <p>
            {currentlyWeatherContext
              ? `${currentlyWeatherContext.humidity} %`
              : "..."}
          </p>
        </div>
      </div>
    </div>
  );
}

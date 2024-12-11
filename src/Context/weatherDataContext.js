import React, { createContext, useState,useEffect } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentlyWeatherContext, setCurrentlyWeatherContext] = useState(null);
  const [weeklyTempsContext, setWeeklyTempsContext] = useState(null);
  const [hourlyWeatherContext, setHourlyWeatherContext] = useState(null);
  const [city1WeatherContext, setCity1WeatherContext] = useState(null);
  const [city2WeatherContext, setCity2WeatherContext] = useState(null);
  const [cityImage,setCityImage] = useState(null)
  const [isImgPending,setIsImgPending] = useState(false)

  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("appTheme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    localStorage.setItem("appTheme", isDark ? "dark" : "light");
  }, [isDark]);


  return (
    <WeatherContext.Provider
      value={{
        currentlyWeatherContext,
        setCurrentlyWeatherContext,
        weeklyTempsContext,
        setWeeklyTempsContext,
        hourlyWeatherContext,
        setHourlyWeatherContext,
        city1WeatherContext, setCity1WeatherContext,
        city2WeatherContext, setCity2WeatherContext,
        isDark, setIsDark,
        cityImage,setCityImage,
        isImgPending,setIsImgPending
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

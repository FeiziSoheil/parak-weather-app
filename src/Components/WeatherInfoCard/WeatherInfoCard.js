import React, { useContext } from "react";
import { CloudCircleRounded, LocationOnRounded } from "@mui/icons-material";
import { WeatherContext } from "../../Context/weatherDataContext";

export default function WeatherInfoCard() {
  const { weeklyTempsContext, isDark } = useContext(WeatherContext);

  return (
    <div className="grid  xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {weeklyTempsContext &&
        weeklyTempsContext.map((item) => (
          <div
            key={item.dayName}
            className={`flex flex-col w-full text-xl rounded-xl duration-500 gap-1 h-full items-center justify-center p-3 ${isDark ? 'bg-dailyHourlyCard text-white' : 'bg-white'}`}
          >
            <img src={item.icon} className="w-24 h-24" alt={item.dayName} />
            <p className="font-roboto font-semibold">{item.dayName}</p>
            <p className="font-roboto font-medium">{item.temp}°C</p>
          </div>
        ))}
    </div>
  );
}

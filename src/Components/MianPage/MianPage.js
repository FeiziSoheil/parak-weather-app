import React, { useContext } from "react";
import MainPageTop from "../MainPageTop/MainPageTop";
import SunRiseSunSetCard from "../SunRiseSunSetCard/SunRiseSunSetCard";
import HourlyTempCard from "../HourlyTempCard/HourlyTempCard";
import WeatherInfoCard from "../WeatherInfoCard/WeatherInfoCard";
import { WeatherContext } from "../../Context/weatherDataContext";

export default function MianPage() {
  const { isDark } = useContext(WeatherContext);

  return (
    <div
      className={`col-span-1 md:col-span-1 pb-20 lg:col-span-4 mb-14 rounded-b-3xl p-8 ${
        isDark ? "bg-backgroundDark" : "bg-backgroundLight"
      }`}
    >
      <MainPageTop />
      <div className="my-10">
        <h2 className="font-poppins font-bold mb-5 text-2xl text-gradientBlue-light">
          Daily Weather
        </h2>
        <div className="flex flex-wrap gap-5">
          <WeatherInfoCard />
        </div>
      </div>
      <div className="grid gap-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
        <SunRiseSunSetCard/>
        <HourlyTempCard/>
      </div>
    </div>
  );
}

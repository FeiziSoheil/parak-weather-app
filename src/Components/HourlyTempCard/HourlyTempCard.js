import { CloudCircleRounded, LocationOnRounded } from "@mui/icons-material";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { WeatherContext } from "../../Context/weatherDataContext";

export default function HourlyTempCard() {
  const { hourlyWeatherContext,currentlyWeatherContext,wee ,weeklyTempsContext ,isDark} = useContext(WeatherContext);


  

  return (
    <div className={`  duration-300 rounded-3xl py-5 px-8 ${isDark? 'bg-dailyHourlyCard':' bg-white'}`}>
      <div className={`flex items-center justify-between font-roboto font-semibold ${isDark?'text-white':''}`}>
        <p className="opacity-65">Hourly Temperature</p>
        <span className="flex items-center gap-1">
          <LocationOnRounded />
          <p>{currentlyWeatherContext?currentlyWeatherContext.cityName:'...'}</p>
        </span>
      </div>
      <div className="flex justify-between my-5 items-center">
        <p className="text-blue-400 font-poppins font-semibold">
         {weeklyTempsContext?
          weeklyTempsContext[0].suggestion :'....'
        }
        </p>
        <button className="bg-blue-300 text-gradientBlue-dark py-2 px-3 rounded-md font-roboto">
          Refresh
        </button>
      </div>

      <Swiper
        spaceBetween={15}
        slidesPerView={3}
        className="flex h-[128px] space-x-2"
      >

        {hourlyWeatherContext &&
          hourlyWeatherContext.map((item) => (
            <SwiperSlide className="bg-blue-100 min-w-[150px] rounded-xl cursor-grab">

              <div className="flex  w-full gap-1 h-full items-center justify-center   p-3 ">
                <img src={item.icon} alt="" className="select-none" />
                <div className="w-2/3 ">
                <p className="font-roboto font-semibold select-none">{item.time}</p>
                <p className="font-roboto font-medium select-none">{item.weather}</p>
                </div>
              </div>

            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

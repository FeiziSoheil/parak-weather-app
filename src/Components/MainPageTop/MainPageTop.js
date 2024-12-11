import React, { useContext, useState, useEffect } from "react";
import BedtimeRoundedIcon from "@mui/icons-material/BedtimeRounded";
import { WbSunnyRounded, WbTwilightRounded } from "@mui/icons-material";
import { WeatherContext } from "../../Context/weatherDataContext";
import { motion } from "framer-motion";

export default function MainPageTop() {
  const { isDark, setIsDark } = useContext(WeatherContext); // دریافت وضعیت تم از کانتکست
  const [currentTime, setCurrentTime] = useState(new Date());

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour >= 5 && hour < 12) {
      return {
        text: "Good morning",
        icon: (
          <WbSunnyRounded
            className="text-gradientOrange-dark"
            style={{ fontSize: "2rem" }}
          />
        ),
      };
    } else if (hour >= 12 && hour < 17) {
      return {
        text: "Good afternoon",
        icon: (
          <WbSunnyRounded
            className="text-yellow-500"
            style={{ fontSize: "2rem" }}
          />
        ),
      };
    } else if (hour >= 17 && hour < 21) {
      return {
        text: "Good evening",
        icon: (
          <WbTwilightRounded
            className="text-orange-500"
            style={{ fontSize: "2rem" }}
          />
        ),
      };
    } else {
      return {
        text: "Good night",
        icon: (
          <BedtimeRoundedIcon
            className="text-blue-400"
            style={{ fontSize: "2rem" }}
          />
        ),
      };
    }
  };

  const formatTime = (date) => {
    return date.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const greeting = getGreeting();

  return (
    <div className="flex justify-between ">
      <div>
        <h2 className="font-poppins font-bold text-5xl text-blue-400">
          {formatTime(currentTime)}
        </h2>
        <p className={`${isDark ? "text-white" : ""} font-roboto my-2`}>
          {formatDate(currentTime)}
        </p>
        <span className="flex items-center">
          {greeting.icon}
          <p className="text-blue-400 font-roboto ml-2">{greeting.text}. Soheil</p>
        </span>
      </div>

      <div
        onClick={() => setIsDark(!isDark)}
        className={` ${
          isDark ? "bg-dailyHourlyCard" : " bg-white"
        } w-28 h-14 flex items-center rounded-3xl relative`}
      >
        <motion.div
          initial={isDark ? { opacity: 0 } : { opacity: 1 }}
          animate={!isDark ? { opacity: 1, right: 2 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          <BedtimeRoundedIcon
            className="text-blue-400"
            style={{ fontSize: "3rem" }}
          />
        </motion.div>
        <motion.div
          initial={isDark ? { opacity: 1 } : { right: 3, opacity: 0 }}
          animate={isDark ? { left: 5, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className={`absolute `}
        >
          <WbSunnyRounded
            className="text-gradientOrange-dark"
            style={{ fontSize: "3rem" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

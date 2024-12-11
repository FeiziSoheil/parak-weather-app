import { NotificationsRounded, Search } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../Context/weatherDataContext";

export default function SideBarTop() {
  const [searchResult, setSearchResult] = useState(null);
  const {
    weeklyTempsContext,
    setWeeklyTempsContext,
    currentlyWeatherContext,
    setCurrentlyWeatherContext,
    hourlyWeatherContext,
    setHourlyWeatherContext,
    cityImage,
    setCityImage,
    isImgPending,
    setIsImgPending,
  } = useContext(WeatherContext);
  const [isPendin, setIsPendin] = useState(false);

  const [location, setLocation] = useState({ lat: null, lon: null });

  const getSuggestion = (condition) => {
    switch (condition.toLowerCase()) {
      case "sunny":
      case "clear":
        return "Time to head outside and soak up the sunshine!";
      case "cloudy":
      case "overcast":
        return "How about a cozy cup of tea and a good book on this cloudy day?";
      case "rainy":
      case "rain":
        return "Don't forget your umbrella; it's a rainy one out there!";
      case "snowy":
      case "snow":
        return "Perfect weather to build a snowman and have some fun!";
      case "thunderstorm":
        return "Better stay indoors and stay safe; it's stormy outside!";
      case "foggy":
      case "misty":
        return "A short walk in the fog could be super peaceful right now.";
      case "windy":
        return "It's a windy day—maybe try flying a kite for fun!";
      case "hot":
        return "How about cooling off with some ice cream? Sounds perfect!";
      case "cold":
        return "Grab a hot coffee or cocoa to warm yourself up today.";
      default:
        return "Every day can be great; just give it a chance!";
    }
  };

  const option = {
    url: "https://api.openweathermap.org/geo/1.0/direct?q=",
    key: "9ff184fada064e8e6ca823ce113ac32b",
  };
  const mainOption = {
    url: "https://api.weatherapi.com/v1",
    key: "0d87848c14194165908214213240612",
  };
  const imageOption = {
    url: "https://api.unsplash.com/search/photos?query=",
    key: "hzdUqKlWuNlJQg32JPL1Dd7XVKAnpw64AFaQBiwedrU",
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLocation({ lat, lon });
          getData(lat, lon);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
  useEffect(() => {
    if (currentlyWeatherContext?.cityName) {
      getCityImage(currentlyWeatherContext.cityName);
    }
  }, [currentlyWeatherContext?.cityName]);

  const getCityImage = async (cityName) => {
    try {
      setIsImgPending(true);
      const cityImageRes = await fetch(
        `${imageOption.url}${cityName}&client_id=${imageOption.key}&per_page=10`
      );
      const imageData = await cityImageRes.json();

      const imageCollection = imageData.results.map((imageInfo) => {
        return {
          des: imageInfo.alt_description,
          likeCount: imageInfo.likes,
          name: imageInfo.user.name,
          instagram_username: imageInfo.user.instagram_username,
          url: imageInfo.urls.full,
        };
      });
      setCityImage(imageCollection);
      setIsImgPending(false)

    } catch (err) {
      console.log(err);
      setIsImgPending(false)
    }
  };

  const getData = async (lat = location.lat, lon = location.lon) => {
    try {
      function getDay(date_epoch) {
        const dateEpoch = date_epoch;
        const date = new Date(dateEpoch * 1000);
        const daysOfWeek = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const dayName = daysOfWeek[date.getDay()];

        return dayName;
      }

      // استفاده از location.lat و location.lon که از geolocation یا جستجو به‌دست آمده
      const forcastDataRes = await fetch(`
        ${mainOption.url}/forecast.json?key=${mainOption.key}&q=${lat},${lon}&days=7&aqi=no&alerts=no
      `);
      const forcastData = await forcastDataRes.json();

      if (forcastData && forcastData.current && forcastData.forecast) {
        const sunrise = forcastData.forecast.forecastday[0].astro.sunrise;
        const sunset = forcastData.forecast.forecastday[0].astro.sunset;

        const currentlyWeatherInfo = {
          cityName: forcastData.location.name,
          CountryName: forcastData.location.country,
          temp: forcastData.current.temp_c,
          humidity: forcastData.current.humidity,
          wind: forcastData.current.wind_kph,
          text: forcastData.current.condition.text,
          icon: forcastData.current.condition.icon,
          is_day: forcastData.current.is_day,
          sunset: sunset,
          sunrise: sunrise,
        };

        setCurrentlyWeatherContext(currentlyWeatherInfo);

        const weeklyWeatherInfos = forcastData.forecast.forecastday.map(
          (day) => {
            return {
              temp: day.day.avgtemp_c,
              icon: day.day.condition.icon,
              weather: day.day.condition.text,
              dayName: getDay(day.date_epoch),
              suggestion: getSuggestion(day.day.condition.text),
            };
          }
        );

        setWeeklyTempsContext(weeklyWeatherInfos);

        const hourlyWeatherInfos = forcastData.forecast.forecastday[0].hour.map(
          (hour) => {
            return {
              time: hour.time.split(" ")[1],
              icon: hour.condition.icon,
              weather: hour.condition.text,
              temp: hour.temp_c,
            };
          }
        );
        setHourlyWeatherContext(hourlyWeatherInfos);
      } else {
        console.error("Error in fetching weather data:", forcastData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getWeatherData = async (e) => {
    if (e.keyCode === 13 && searchResult) {
      try {
        setIsPendin(true);
        const geoResponse = await fetch(
          `${option.url}${searchResult}&limit=1&appid=${option.key}`
        );
        const geoData = await geoResponse.json();

        if (geoData.length === 0) {
          alert("City not found");
          setIsPendin(false);

          return;
        }

        const { lat, lon } = geoData[0];
        getCityImage();
        setLocation({ lat, lon });
        await getData(lat, lon);

        setIsPendin(false);
      } catch (error) {
        setIsPendin(false);
        console.error("Error fetching geo data:", error);
      }
    }
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <div className="bg-blue-100 h-10 gap-2 px-2 rounded-lg flex items-center">
        <Search className="text-blue-400" />
        <input
          onChange={(e) => setSearchResult(e.target.value)}
          type="search"
          onKeyDown={getWeatherData}
          className="h-full bg-transparent outline-none"
          placeholder="search your city"
          value={isPendin ? "Loading..." : searchResult || ""}
        />
      </div>
      <div className="flex items-center gap-3">
        <NotificationsRounded className=" text-blue-400" />
        <img src="\image\prof.jpg" className="w-12 h-12 rounded-2xl  shadow-lg border-blue-400 border shadow-blue-400 object-cover " alt=""  />
      </div>
    </div>
  );
}

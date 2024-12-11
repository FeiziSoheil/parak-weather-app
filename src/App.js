import logo from "./logo.svg";
import "./App.css";
import MianPage from "./Components/MianPage/MianPage";
import SideBar from "./Components/SideBar/SideBar";
import ImageCollection from "./Components/ImageCollection/ImageCollection";
import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./Context/weatherDataContext";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";

function App() {
  const { isDark } = useContext(WeatherContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className={`${isDark ? "bg-sky-900" : ""}`}>
          <div className={`App grid md:grid-cols-1 lg:grid-cols-6 `}>
            <SideBar className="lg:order-1" />
            <MianPage className="lg:order-2" />
          </div>

          <ImageCollection />
        </div>
      )}
    </>
  );
}

export default App;

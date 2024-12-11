import React, { useContext } from 'react'
import CurrentTimeCard from '../CurrentTimeCard/CurrentTimeCard'

import SideBarTop from '../SideBarTop/SideBarTop'
import City1Info from '../CityWeatherInfo/City1Info'
import City2Info from '../CityWeatherInfo/City2Info'
import { WeatherContext } from '../../Context/weatherDataContext'

export default function SideBar() {

  const {isDark} = useContext(WeatherContext)

  return (
    <div className={` col-span-1 md:col-span-1 lg:col-span-2 p-5  space-y-5 ${isDark?'bg-sky-900':''}` }>
        <SideBarTop/>
       <CurrentTimeCard/>
       <City1Info/>
       <City2Info/>
    </div>
  )
}

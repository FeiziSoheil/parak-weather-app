import { BedtimeOffRounded, LocationOnRounded } from '@mui/icons-material'
import BedtimeRoundedIcon from '@mui/icons-material/BedtimeRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import React, { useContext } from 'react'
import { WeatherContext } from '../../Context/weatherDataContext';

export default function SunRiseSunSetCard() {
    
    const {
        city1WeatherContext,
        city2WeatherContext,
        currentlyWeatherContext,
        isDark
      } = useContext(WeatherContext);

  return (
    <div className={`bg-pink-300  p-5 rounded-3xl duration-500 ${isDark?'bg-sunriseSunsetCardMainDark text-white':'bg-pink-300'}`}>
        <p className='font-poppins font-medium'>Sunrise and Sunset</p>
        <div className={`bg-pink-200 p-4 rounded-2xl duration-300 space-y-4 my-5 ${isDark?'bg-sunriseSunsetCardSecondDark text-white':''}`}>

            <div className='flex space-x-1'>
                <LocationOnRounded className='text-blue-400'/>
                <p className='font-roboto opacity-70'>{currentlyWeatherContext?currentlyWeatherContext.cityName:'...'}</p>
            </div>

            <div className='flex justify-between font-roboto'>
                <div className='flex items-center'>
                    <WbSunnyRoundedIcon className='text-gradientOrange-dark' style={{fontSize:'3rem'}}/>
                    <span>
                        <p>Sunrise</p>
                        <p className='text-blue-400'>{currentlyWeatherContext?currentlyWeatherContext.sunset : '..'}</p>

                    </span>
                </div>
                <div className='flex items-center'>
                    <BedtimeRoundedIcon className='text-gradientBlue-dark' style={{fontSize:'3rem'}}/>
                    <span>
                        <p>Sunrise</p>
                       <p className='text-blue-400'>{currentlyWeatherContext?currentlyWeatherContext.sunrise : '..'}</p>
                    </span>
                </div>
            </div>

        </div>

        <div className='px-2 space-y-2'>
            <div className='flex justify-between city1'>
                <span className='flex items-center font-roboto'>
                    <LocationOnRounded className='text-blue-400'/>
                    <p>
                    {city1WeatherContext?
                        city1WeatherContext.cityName:'...'    
                    }
                    </p>
                </span>
                <span className='flex items-center font-roboto'>
                    <WbSunnyRoundedIcon className='text-gradientOrange-light'/>
                    <p>
                    {city1WeatherContext?
                        city1WeatherContext.sunrise:'...'    
                    }
                    </p>
                </span>
                <span className='flex items-center font-roboto'>
                    <BedtimeRoundedIcon className='text-gradientBlue-dark'/>
                    <p>
                    {city1WeatherContext?
                        city1WeatherContext.sunset:'...'    
                    }
                    </p>
                </span>
            </div>
            <div className='flex justify-between cuty2'>
                <span className='flex items-center font-roboto'>
                    <LocationOnRounded className='text-blue-400'/>
                    <p>
                        {city2WeatherContext?
                        city2WeatherContext.cityName:'...'    
                    }
                    </p>
                </span>
                <span className='flex items-center font-roboto'>
                    <WbSunnyRoundedIcon className='text-gradientOrange-light' />
                    <p>
                    {city2WeatherContext?
                        city2WeatherContext.sunrise:'...'    
                    }
                    </p>
                </span>
                <span className='flex items-center font-roboto'>
                    <BedtimeRoundedIcon className='text-gradientBlue-dark'/>
                    <p>
                    {city2WeatherContext?
                        city2WeatherContext.sunset:'...'    
                    }
                    </p>
                </span>
            </div>
            
        </div>
    </div>
  )
}

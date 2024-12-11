// components/LoadingScreen.js
import React from "react";
import { DotLoader } from 'react-spinners';

export default function LoadingScreen() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-sky-900 text-white">
     
        <div className="flex  xs:flex-col xs:items-center ">
          <img
            src="/image/logo.png"
            className="w-24 h-28  object-cover"
            alt=""
          />
        <h1 className="xs:text-4xl md:text-6xl lg:text-8xl font-poppins font-bold md:ml-4">Parak weather app</h1>
        </div>
        <DotLoader color="#41b5ff" className="my-14" cssOverride={{}} loading size={103} />
      
        <p className="font-roboto font-semibold text-base sm:text-lg md:text-2xl text-center">Please conect to vpn</p>
    </div>
  );
}

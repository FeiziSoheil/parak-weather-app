import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageCard from "./ImageCard";
import { WeatherContext } from "../../Context/weatherDataContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ImageCollection() {
  const { cityImage, isImgPending, isDark } = useContext(WeatherContext);

  return (
    <div
      className={`w-full ${
        isDark ? "bg-backgroundDark" : "bg-backgroundLight"
      } duration-500 p-8 rounded-t-3xl `}
    >
      <Swiper
       
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={10}
        slidesPerView={1} // مقدار پیش‌فرض کوچک‌ترین حالت
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {cityImage &&
          cityImage.map((imageItem, index) =>
            isImgPending ? (
              <SwiperSlide key={index} style={{ height: "350px" }}>
                <Skeleton />
              </SwiperSlide>
            ) : (
              <SwiperSlide key={index}>
                <ImageCard
                  des={imageItem.des}
                  likeCount={imageItem.likeCount}
                  name={imageItem.name}
                  instaId={imageItem.instagram_username}
                  url={imageItem.url}
                />
              </SwiperSlide>
            )
          )}
      </Swiper>
    </div>
  );
}

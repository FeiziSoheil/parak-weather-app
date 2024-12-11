import React from "react";
import { BiUser } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { FaUser, FaInstagram } from "react-icons/fa";

export default function ImageCard({ des, likeCount, name, instaId, url }) {
  return (
    <div className="h-[350px] bg-blue-200 rounded-3xl overflow-hidden relative group">
      <img
        src={url}
        alt="City Image"
        className="w-full h-full object-cover"
      />

      <div className="absolute w-full bg-gradient-to-t from-black to-transparent z-10 -bottom-full group-hover:bottom-0 transition-all duration-500 p-5 py-8">
        <h3 className="text-white text-xl font-poppins ">
          {des}
        </h3>
        <div className="flex justify-between mt-3 items-start">
          <div className="text-white font-roboto space-y-1">
            <span className="flex items-center gap-1">
              <FaUser className="text-white" />
              <p>{name}</p>
            </span>
            <span className="flex items-center gap-1">
              <FaInstagram />
              <p>{instaId}</p>
            </span>
          </div>
          <span className="flex items-center gap-1">
            <FcLike />
            <p className="text-red-500 font-roboto">{likeCount}</p>
          </span>
        </div>
      </div>
    </div>
  );
}

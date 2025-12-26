"use client";
import React from "react";

const VideoSection = ({ url }: { url: string }) => {
  return (
    <div className="absolute inset-0 top-0 left-0 bg-black bg-opacity-50 w-full z-10 ">
      <video className="w-full" autoPlay muted loop playsInline>
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoSection;

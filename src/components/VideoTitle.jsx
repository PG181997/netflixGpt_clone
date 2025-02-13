import React from "react";

const VideoTitle = ({ title, overView }) => {
  return (
    <div className="pt-36 px-12 absolute text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overView}</p>
      <div className="">
        <button className="bg-gray-500 text-white p-4 px-12 text-xl text bg-opacity-50 rounded-lg">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl text bg-opacity-50 rounded-lg mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

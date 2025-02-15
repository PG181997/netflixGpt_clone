const VideoTitle = ({ title, overView }) => {
  return (
    <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overView}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-12 text-xl text rounded-lg hover:opacity-80">
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

const VideoTitle = ({ title, overView }) => {
  return (
    <div className="pt-[20%] px-3 md:px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overView}</p>
      <div className="my-3 md-my-0">
        <button className="bg-white text-black py-0.1 md:py-4 px-2 md:px-12 text-sm bg:text-xl text rounded-lg hover:opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl text bg-opacity-50 rounded-lg mx-2 hidden md:inline-block">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

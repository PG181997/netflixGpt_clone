import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./videoBackGround";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return; //Early return can use if(!movies) as well
  const mainMovie = movies[0];
  //   console.log("mainMovie:", mainMovie);
  const { original_title, overview, id } = mainMovie;
  //   console.log(overview);
  return (
    <div>
      <VideoTitle title={original_title} overView={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
};

export default MainContainer;

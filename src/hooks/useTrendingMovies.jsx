import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log("data: ", data);
    // console.log("json: ", json.results);
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    !trailerVideo && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;

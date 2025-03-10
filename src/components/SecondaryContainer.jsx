import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="mt-0 md:-mt-30 relative z-20 pl-0">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies?.trendingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies?.upComingMovies} />
        </div>

        {/* 
    movie_list - popular
      movie_card * n
    movie_list - Now playing
    movie_list - Trending
    movie_list - Horror
    */}
      </div>
    )
  );
};

export default SecondaryContainer;

import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  console.log("see");
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResult } = gpt;
  console.log("movieName", movieNames);
  console.log("movieResult", movieResult);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;

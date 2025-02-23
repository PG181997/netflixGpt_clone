import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConst";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };
  const handelGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "act as a movie reccomendation system and suggest 5 movies which are " +
      searchText.current.value +
      "give only movies name and nothing else and seperate each movie name by comma. example: One Piece: Stampede,My Neighbor Totoro,Kung Fu Panda,Howl's Moving Castle,The Disastrous Life of Saiki K.";
    // Make an api call to gpt api and get movie results
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResult.choices[0]?.message?.content);
    const gptMovies = gptResult.choices[0]?.message?.content.split(",");

    const tmdbPromises = gptMovies.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(tmdbPromises);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResult: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 bg-white col-span-9"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3"
          onClick={handelGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

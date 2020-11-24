import React, { useState } from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies() {
  //states - input query, and movies
  const [query, setQuery] = useState(""); //initial value of query.  setState is function that updates state
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=d9e5c4868262f90244fa8517af4d3b94&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Enter movie title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id}/>
          ))}
      </div>
    </div>
  );
}

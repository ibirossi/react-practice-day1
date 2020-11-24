import React from "react";

export default function MovieCard({movie}) { //importing movie prop directly into parameter of function. 
    
  return (
    <div>
      <div className="card" >
        <img
          className="card--image"
          alt="img"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt="movie poster"
        />

        <div className="card--content">
          <h3 className="card--title">{movie.title}</h3>
          <p>
            <small>Release Date: {movie.release_date}</small>
          </p>
          <p>
            <small>Rating: {movie.vote_average}</small>
          </p>
          <p className="card--desc">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

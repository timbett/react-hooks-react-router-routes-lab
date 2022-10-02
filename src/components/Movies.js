import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList=movies.map((movie)=>
    <div key={movie.title}>
      <h3>Name:{movie.title}</h3>
      <p>Time:{movie.time}</p>
      <p>Genres:</p>
      <ul>
        <li>{movie.genres[0]}</li>
        <li>{movie.genres[1]}</li>
        <li>{movie.genres[2]}</li>
        <li>{movie.genres[3]}</li>
        <li>{movie.genres[4]}</li>
      </ul>

    </div>
    
  )
  return <div>
    <h1>Movies Page</h1>
    {movieList}
  </div>;
}

export default Movies;

import React from "react";
import { actors } from "../data";

function Actors() {
  const actor = actors.map((actor) => (
    <div key={actor.name}>
      <h3>Name:{actor.name}</h3>
      <p>Movies:</p>
      <ul>
        <li>{actor.movies[0]}</li>
        <li>{actor.movies[1]}</li>
        <li>{actor.movies[2]}</li>
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Actors Page</h1>
      {actor}
    </div>
  );
}

export default Actors;

"use client";

import React from "react";
import "./page.css";
export default function Movieshub() {
  function movieHandler(e) {
    e.preventDefault();
    let movie = e.target.movie.value.trim();
    let year = e.target.year.value.trim();

    if (movie !== "" && year !== "") {
      console.log(`Movie: ${movie}, Year: ${year}`);
      e.target.movie.value = "";
      e.target.year.value = "";
    }
  }
  return (
    <>
      <div className="hubContainer">
        <span>Movies Hub</span>
        <form onSubmit={movieHandler}>
          <label>Movie Name:</label>
          <input name="movie" />
          <label>Movie Year:</label>
          <input name="year" />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

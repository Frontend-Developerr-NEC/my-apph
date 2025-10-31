"use client";

import React, { useState } from "react";
import "./page.css";
export default function Movieshub() {
  const [movie, setMovie] = useState("");
  function movieHandler(e) {
    e.preventDefault();

    let movie = e.target.movie.value.trim().toLowerCase().split(" ").join("-");

    // console.log(movie);

    let q = e.target.quality.value.trim().toLowerCase();
    let p = false;

    if (movie !== "" && q !== "") {
      if (q == 360 || q == 720 || q == "360p" || q == "720p") {
        if (q == 360) {
          // True
          p = true;
        } else if (q == "360p" || q == "720p") {
          // False
          p = false;
        }
        let quality = p == true ? `${q}p` : q;

        const api = `https://isaidub.free/movie/${movie}-movie-${quality}-hd/`;

        window.location.href = api;
        movie = "";
        q = "";
        p = false;
      }
    }
  }

  function webseriesHandler(e) {
    e.preventDefault();

    let webseries = e.target.webseries.value
      .trim()
      .toLowerCase()
      .split(" ")
      .join("-");

    let season = e.target.season.value.trim();
    let s = false;
    if (season >= 1 && season <= 9) {
      s = true;
    }
    let valid = s == true ? "0" + season : season > 9 ? season : "0" + season;

    const api2 = `https://isaidub.free/movie/${webseries}-season-${valid}-tamil-dubbed-movie/`;

    window.location.href = api2;
    webseries = "";
    season = "";
  }

  return (
    <>
      <div className="hubContainer">
        <div className="movieSelector">
          <label>Movies Hub Section</label>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setMovie("movie");
            }}
          >
            Movie
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setMovie("web series");
            }}
          >
            Web Series
          </button>
        </div>
        {movie == "movie" && (
          <div className="moviesWrapper">
            <span>Movies Hub</span>
            <form onSubmit={movieHandler}>
              <label>Movie Name:</label>
              <input name="movie" />
              <label>Quality (360p or 720p):</label>
              <input name="quality" />
              <button type="submit">Search</button>
            </form>
          </div>
        )}
        {movie == "web series" && (
          <div className="webseriesWrapper">
            <span>Web Series Hub</span>
            <form onSubmit={webseriesHandler}>
              <label>Web Series Name:</label>
              <input name="webseries" />
              <label>Season:</label>
              <input name="season" />
              <button type="submit">Search</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

"use client";

import { useState } from "react";
import "./page.css";
export default function Movieshub() {
  const [movie, setMovie] = useState("");
  function movieHandler(e) {
    e.preventDefault();

    let movie = e.target.movie.value.trim().toLowerCase().split(" ").join("-");

    let year = e.target.quality.value.trim();

    if (movie !== "" && year !== "") {
      const api1 = `https://kollymovies.org/movie/${movie}-${year}-tamil-dubbed-movie`;

      window.location.href = api1;
      movie = "";
      year = "";
    }
  }

  function webseriesHandler(e) {
    e.preventDefault();

    let webseries = e.target.webseries.value
      .trim()
      .toLowerCase()
      .split(" ")
      .join("-");

    let year = e.target.season.value.trim();
    if (webseries !== "" && year !== "") {
      const api1 = `https://kollymovies.org/movie/${webseries}-${year}-tamil-dubbed-web-series`;
      window.location.href = api1;
    }
    webseries = "";
    year = "";
  }

  // Tamil Movies
  function tamilmovieHandler(e) {
    e.preventDefault();

    let movie = e.target.tamilmovie.value
      .trim()
      .toLowerCase()
      .split(" ")
      .join("-");

    let year = e.target.tamilyear.value.trim();

    if (movie !== "" && year !== "") {
      const api2 = `https://kollymovies.org/movie/${movie}-${year}-tamil-movie`;

      window.location.href = api2;
    }
    movie = "";
    year = "";
  }

  function tamilwebseriesHandler(e) {
    e.preventDefault();

    let webseries = e.target.tamilwebseries.value
      .trim()
      .toLowerCase()
      .split(" ")
      .join("-");

    let year = e.target.tamilwebseriesyear.value.trim();

    if (webseries !== "" && year !== "") {
      const api2 = `https://kollymovies.org/movie/${webseries}-${year}-tamil-web-series`;
      window.location.href = api2;
    }
    webseries = "";
    year = "";
  }

  return (
    <>
      <title>MoviesHub</title>
      <div className="hubContainer">
        <div className="movieSelector">
          <div className="tamildubmovies">
            <label>Dubbed Collection</label>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setMovie("movie");
              }}
            >
              Tamil Dubbed Movie
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setMovie("web series");
              }}
            >
              Tamil Dubbed Web Series
            </button>
          </div>

          <div className="tamilmovies">
            <label>Tamil Movie Collection</label>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setMovie("tamil movie");
              }}
            >
              Tamil Movie
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setMovie("tamil web series");
              }}
            >
              Tamil Web Series
            </button>
          </div>
        </div>
        {/* Tamil Dubbed Section */}
        {movie == "movie" && (
          <div className="moviesWrapper">
            <span>Movies Hub</span>
            <form onSubmit={movieHandler}>
              <label>Name:</label>
              <input name="movie" />
              <label>Year: </label>
              <input name="quality" />
              <button type="submit">Search</button>
            </form>
          </div>
        )}
        {movie == "web series" && (
          <div className="webseriesWrapper">
            <span>Web Series Hub</span>
            <form onSubmit={webseriesHandler}>
              <label>Name:</label>
              <input name="webseries" />
              <label>Year: </label>
              <input name="season" />
              <button type="submit">Search</button>
            </form>
          </div>
        )}
        {/* Tamil Movies Section */}
        {movie == "tamil movie" && (
          <div className="moviesWrapper">
            <span>Movies Hub</span>
            <form onSubmit={tamilmovieHandler}>
              <label>Name:</label>
              <input name="tamilmovie" />
              <label>Year:</label>
              <input name="tamilyear" />
              <button type="submit">Search</button>
            </form>
          </div>
        )}
        {movie == "tamil web series" && (
          <div className="webseriesWrapper">
            <span>Web Series Hub</span>
            <form onSubmit={tamilwebseriesHandler}>
              <label>Name:</label>
              <input name="tamilwebseries" />
              <label>Year:</label>
              <input name="tamilwebseriesyear" />
              <button type="submit">Search</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

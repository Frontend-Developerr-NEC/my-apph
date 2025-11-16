"use client";

import { useState } from "react";
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

        const api1 = `https://isaidub.free/movie/${movie}-movie-${quality}-hd/`;

        window.location.href = api1;
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

    if (webseries !== "" && season !== "") {
      const api1 = `https://isaidub.free/movie/${webseries}-season-${valid}-tamil-dubbed-movie/`;
      window.location.href = api1;
    }
    webseries = "";
    season = "";
  }

  // Tamil Movies
  function tamilmovieHandler(e) {
    e.preventDefault();

    let movie = e.target.tamilmovie.value
      .trim()
      .toLowerCase()
      .split(" ")
      .join("-");

    // console.log(movie);

    let y = e.target.tamilyear.value.trim().toLowerCase();

    if (movie !== "" && y !== "") {
      const api2 = `https://kollymovies.org/movie/${movie}-${y}-tamil-movie`;

      window.location.href = api2;
    }
    movie = "";
    y = "";
  }

  function tamilwebseriesHandler(e) {
    e.preventDefault();

    let webseries = e.target.tamilwebseries.value
      .trim()
      .toLowerCase()
      .split(" ")
      .join("-");

    let y = e.target.tamilwebseriesyear.value.trim();

    if (webseries !== "" && y !== "") {
      const api2 = `https://kollymovies.org/movie/${webseries}-${y}-tamil-web-series`;
      window.location.href = api2;
    }
    webseries = "";
    y = "";
  }

  return (
    <>
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
        {/* Tamil Movies Section */}
        {movie == "tamil movie" && (
          <div className="moviesWrapper">
            <span>Movies Hub</span>
            <form onSubmit={tamilmovieHandler}>
              <label>Movie Name:</label>
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
              <label>Web Series Name:</label>
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

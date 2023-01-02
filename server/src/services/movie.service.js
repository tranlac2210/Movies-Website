const axios = require("axios");
const useState = require("react");
const React = require("react");

// Get trending movies of today
async function getMovies() {
  const movies = await axios.get(
    "https://api.themoviedb.org/3/trending/all/day?api_key=031925fe2d2a8716121d3d048e4de429"
  );
  try {
    return movies.data;
  } catch (error) {
    console.error(error);
  }
}

// Get movies by Genre
async function getMovieByGenre() {
  genre = "comedy";
  const movies = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=031925fe2d2a8716121d3d048e4de429&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" +
      genre +
      "&with_watch_monetization_types=flatrate"
  );
  try {
    return movies.data;
  } catch (error) {
    console.error(error);
  }
}

//Search a movie by keyword
async function getMovieByKeyword() {
  keyWord = "avatar";
  const movies = await axios.get(
    "https://api.themoviedb.org/3/search/keyword?api_key=031925fe2d2a8716121d3d048e4de429&query=" +
      keyWord +
      "&page=1"
  );
  try {
    return movies.data;
  } catch (error) {
    console.error(error);
  }
}

// Get a movie by type
async function getMovieByType() {
  movie_type = "tv";
  const movies = await axios.get(
    "https://api.themoviedb.org/3/discover/" +
      movie_type +
      "?api_key=031925fe2d2a8716121d3d048e4de429&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  );
  try {
    return movies.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getMovies,
  getMovieByType,
  getMovieByGenre,
  getMovieByKeyword,
};

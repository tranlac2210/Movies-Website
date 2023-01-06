const axios = require("axios");

// Get trending movies of today
async function getMovies() {
  const movies = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`
  );
  try {
    return movies.data;
  } catch (error) {
    console.error(error);
  }
}

// Get movies by Genre
async function getMovieByGenre(genre) {
  // NOTE: genre(s) should be an array of genre ids (e.x [1, 2, 3])
  // const test = [878, 53];
  const movies = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`
  );
  try {
    return movies.data;
  } catch (error) {
    console.error(error);
  }
}

//Search movies by keyword
async function getMovieByKeyword(keyWord) {
  const movies = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${keyWord}&page=1&include_adult=falsee`
  );
  try {
    console.log(movies);
    return movies.data;
  } catch (error) {
    console.error(error);
  }
}

// Get a movie by type
async function getMovieByType(movie_type) {
  //movie_type = "tv";
  const movies = await axios.get(
    `https://api.themoviedb.org/3/discover/${movie_type}?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
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

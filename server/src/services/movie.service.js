const axios = require('axios');

// Get trending movies of today
async function getTrending(data) {
  // TEST URL: http://localhost:3001/movies/trending
  const { page } = data;
  const movies = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}&page=${page}`
  );
  try {
    return movies.data;
  } catch (error) {
    console.error(error);
  }
}

// Get movies by Genre
async function getMovieByGenre(data) {
  // NOTE: genre(s) should be an array of genre ids (e.x [1, 2, 3])
  // const test = [878, 53];
  // TEST URL: http://localhost:3001/movies/movie-genre?gernes[]=878&gernes[]=53
  let { gernes,page } = data;
  gernes = gernes.map(Number);
  const movies = await axios.get(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${gernes}`
  );
  try {
    return movies.data;
  } catch (error) {
    console.error(error);
  }
}

//Search movies by keyword
async function getMovieByKeyword(data) {
  // TEST URL: http://localhost:3001/movies/key-word?keyWord=avatar
  const { keyWord, page } = data;
  const movies = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${keyWord}&page=${page}&include_adult=falsee`
  );
  try {
    return movies.data;
  } catch (error) {
    console.error(error);
  }
}

// Get a movie by type
async function getByType(data) {
  // TEST URL: http://localhost:3001/movies/get-type?type=movie
  // TEST URL: http://localhost:3001/movies/get-type?type=tv
  const { type } = data;
  const movies = await axios.get(
    `https://api.themoviedb.org/3/discover/${type}?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
  );
  try {
    return movies.data;
  } catch (error) {
    console.error(error);
  }
}

async function getGenre(data) {
  // TEST URL: http://localhost:3001/movies/get-type?type=movie
  // TEST URL: http://localhost:3001/movies/get-type?type=tv
  const { type } = data;
  const movies = await axios.get(
    `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.API_KEY}&language=en-US`
  );
  console.log(type);
  try {
    return movies.data;
  } catch (error) {
    console.error(error);
  }
}



module.exports = {
  getTrending,
  getByType,
  getMovieByGenre,
  getMovieByKeyword,
  getGenre,
};

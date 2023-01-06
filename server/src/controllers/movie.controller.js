const moviesServices = require("../services/movie.service.js");

// Get all movies
async function get(req, res, next) {
  try {
    res.json(await moviesServices.getMovies());
  } catch (err) {
    console.error("Error while geting accounts");
    next(err);
  }
}

// Get a movie
async function getMovieByType(req, res, next) {
  try {
    res.json(await moviesServices.getMovieByType(req.query));
  } catch (err) {
    console.error("Error while getting an account");
    next(err);
  }
}

async function getMovieByGenre(req, res, next) {
  try {
    res.json(await moviesServices.getMovieByGenre(req.query));
  } catch (err) {
    console.error("Error while getting an account");
    next(err);
  }
}
async function getMovieByKeyword(req, res, next) {
  try {
    res.json(await moviesServices.getMovieByKeyword(req.body));
    console.log(req.body);
  } catch (err) {
    console.error("Error while getting an account");
    next(err);
  }
}

module.exports = {
  get,
  getMovieByType,
  getMovieByGenre,
  getMovieByKeyword,
  // logIn,
  // update,
  // remove,
};

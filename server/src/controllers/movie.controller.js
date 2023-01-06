const moviesServices = require('../services/movie.service.js');

// Get all movies
async function getTrending(req, res, next) {
  try {
    res.json(await moviesServices.getTrending());
  } catch (err) {
    console.error('Error while geting accounts');
    next(err);
  }
}

// Get a movie
async function getByType(req, res, next) {
  try {
    res.json(await moviesServices.getByType(req.query));
  } catch (err) {
    console.error('Error while getting an account');
    next(err);
  }
}

async function getMovieByGenre(req, res, next) {
  try {
    console.log(req.query);
    res.json(await moviesServices.getMovieByGenre(req.query));
  } catch (err) {
    console.error('Error while getting an account');
    next(err);
  }
}
async function getMovieByKeyword(req, res, next) {
  try {
    res.json(await moviesServices.getMovieByKeyword(req.query));
  } catch (err) {
    console.error('Error while getting an account');
    next(err);
  }
}

module.exports = {
  getTrending,
  getByType,
  getMovieByGenre,
  getMovieByKeyword,
  // logIn,
  // update,
  // remove,
};

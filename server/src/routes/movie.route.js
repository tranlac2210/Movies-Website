const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movie.controller.js');

// GET: retrives trending movies
router.get('/trending', moviesController.getTrending);

// Get: retrives movies from a movie type
router.get('/get-type', moviesController.getByType);

// Get: retrives movies from a specific genres
router.get('/movie-genre', moviesController.getMovieByGenre);

//Get: retrives movies from a key word
router.get('/key-word', moviesController.getMovieByKeyword);
module.exports = router;

const express = require('express')
const router = express.Router();
const moviesController = require('../controllers/movie.controller')

// GET: retrives all movies
router.get('/all-movies', moviesController.get);

// Get: retrives an movie
router.get('/all-movies-by-id', moviesController.getmovieById);

module.exports = router;
const { response } = require('express')
const movieModel = require('../models/movie.model.lac')

// Get all movies
async function getMovies(){
    const movies = await movieModel.find({})
    try{
        return movies;
    } catch (err){
        response.status(500).send(err);
    }
}

// Get a movie
async function getMoviesById(movie_id){
    const movies = await movieModel.find(movie_id)
    try{
        return movies;
    } catch (err){
        response.status(500).send(err);
    }
}

module.exports = {
    getMovies,
    getMoviesById,
}
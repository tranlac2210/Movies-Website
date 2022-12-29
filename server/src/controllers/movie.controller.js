const moviesServices = require('../services/movie.services')

// Get all movies 
async function get(req, res, next){
    try{
        res.json(await moviesServices.getmovies());
    } catch(err) {
        console.error('Error while geting accounts')
        next(err);
    }
}

// Get a movie 
async function getmovieById(req, res, next){
    try{
        res.json(await moviesServices.getmoviesById(req.body));
    } catch(err) {
        console.error('Error while getting an account')
        next(err);
    }
}

module.exports = {
    get,
    getmovieById,
    // signUp,
    // logIn,
    // update,
    // remove,
}
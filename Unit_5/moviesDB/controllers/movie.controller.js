const router = require('express').Router();
const Movie = require('../models/movie.model');
const { errorResponse } = require('../utils'); //Will pull index if there is no other file named
//const {} = require('./controllers/movieFunctions');
const mongoose = require('mongoose')


//TODO Post

router.post('/', async (req,res) => {
    try {

        //1. Pull data from client (body)
        const {
            title, genre, rating, length, releaseYear
        } = req.body; 
        //2. Create a new object using the model
        const movie = new Movie ({
            title, genre, rating, length, releaseYear
        });
        //3. Save the object to the DB
        const newMovie = await movie.save();

        //4. Response to client
        res.status(200).json({
            message: `${newMovie.title} added to collection.`,
            newMovie
        })
    } catch (err) {
        errorResponse(res, err);
    }

})


//TODO GET ALL
router.get('/', async (req, res) => {
    try {
        const allMovies = await Movie.find();

        if(allMovies.length === 0) throw new Error('No Library Found');

        allMovies.length > 0 ?
        res.status(200).json({
        result: allMovies
        }) :
        res.status(404).json({
            result: 'No movies found'
        })
        
    } catch (err) {
        errorResponse(res, err)
    }
});
// //TODO GET ONE
router.get('/find-one/:id', async (req,res) => {
    try {
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "No entry for movie"})
        }
        const film = await Movie.findById(id)
        // const getMovie = await Movie.findOne({_id: id});
        //if(!getMovie) throw new Error('No movie found');
        res.status(200).json(film)
        
    } catch (err) {
        errorResponse(res, err);
    }

})
//TODO GET ALL by Genre
router.get('/genre/:genre', async (req,res) => {
    try {
        const {genre} =req.params;
        let buildWord;

        if(genre){
            for(let i = 0; i < genre.length; i++) {

                if(i === 0) {
                    buildWord = genre[i].toUpperCase();
                    
                } else if (genre[i-1] === '-'){
                    buildWord += genre[i].toUpperCase();
                } else {
                    buildWord += genre[i].toLowerCase();
                }
                
            }
        }

        const getGenre = await Movie.find({genre: buildWord});

        getGenre.length > 0 ?
        res.status(200).json({
            result: getGenre
        }) :
        res.status(404).json({
            results: "Try another genre"
        })

    } catch (err) {
        errorResponse(res, err);
    }

});
// //TODO Patch/put
router.patch('/:id', async (req,res) => {
    try {
        //1. Pull Value from parameter
        const { id } = req.params;

        //2. Pull data from the body
        const info = req.body;

        //3. Use method to locate document based off ID, input new information
        //* .findOneAndUpdate(query, document, options)
        const returnOption = {new: true}; // option - returns the updated document.
        const updated = await Movie.findOneAndUpdate({_id: id}, info, returnOption);

        //4. Respond to client.
        res.status(200).json({
            result: updated
        })
    } catch (err) {
        errorResponse(res, err);
    }

})
// //TODO Delete
router.delete('/:id', async (req,res) => {
    try {
        //1. Capture data (ID)
        const { id }= req.params;


        //2. Use a delete method to locate and remove
        const deleteMovie = await Movie.deleteOne({_id: id});
        console.log(deleteMovie);

        //3. respond
        deleteMovie.deletedCount ? 
        res.status(200).json({
            result: 'Movie Removed'
        }) :
        res.status(404).json({
            result: 'No movie in collection'
        });

    } catch (err) {
        errorResponse(res, err);
    }

})



module.exports = router;
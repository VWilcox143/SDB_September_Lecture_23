const Movie = require('../models/movie.model');

//Get ALL
const getMovies = async (req, res) => {
try {
    const db = await Movie.find({});
    res.status(200).json({
    results: db,
    });
    

} catch (err) {
    errorResponse(res, err)
}
}

//Get one


module.exports = {


}
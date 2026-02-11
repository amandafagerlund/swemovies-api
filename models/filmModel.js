var mongoose = require('mongoose'); // Använder Mongoose.

// Skapar nytt schema och hämtar datans komponenter.
var filmSchema = new mongoose.Schema({
    titel: String,
    regissör: String,
    årtal: Number,
    genre: Array
},
    {
        collection: 'movie_collection' // Min collection i Mongodb.
    });

module.exports = mongoose.model('filmModel', filmSchema); // Exporterar schemat.
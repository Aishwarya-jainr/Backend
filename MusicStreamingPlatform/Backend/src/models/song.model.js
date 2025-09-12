const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: String,
    artist: String,
    releaseDate: Date,
})

const songModel = mongoose.model('Song', songSchema)

module.exports = songModel;
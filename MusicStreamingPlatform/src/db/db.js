const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect()
    .then(() => {
        console.log('Database connected successfully');
    })
}

module.exports = connectDB;
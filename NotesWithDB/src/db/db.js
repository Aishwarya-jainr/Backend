const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect("mongodb+srv://Mern:MAoXOFirRkvSoTYc@mern.mkisiyz.mongodb.net/Details")
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.error("Error connecting to MongoDB:", err);
    })
}

module.exports = connectDB;
const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        let res = await mongoose.connect("mongodb://0.0.0.0/redisPractice");
        if(res){
            console.log("MnongoDB connected successfully");
        }
    } catch (error) {
        console.log("Error in connecting to MongoDB", error);
    }
}

module.exports = connectDB;
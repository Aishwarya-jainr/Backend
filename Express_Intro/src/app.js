const express = require('express');

const app = express();

app.get('/' , (req,res) =>{
    res.send("Hello from / ")
})

app.get(' /Home' , (req , res) => {
    res.send("Hello from /Home")
})


module.exports = app;
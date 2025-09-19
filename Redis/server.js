const express = require('express');
const connectDB = require('./src/config/db/db');

connectDB();

const app = express();

let PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
    console.log("Server is running on port ${PORT}");
})
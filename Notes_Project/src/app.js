const express = require('express');

const app = express();
app.use(express.json())

const notes = [];

app.post("/notes", (req, res) => {
    notes.push(req.body)
    res.status(201).json({
        message: 'Note created successfully'
    }) 
})

app.get("/notes", (req, res) => {
    res.status(200).json({
        message: 'Notes retrieved successfully',
        notes
    }) 
})

app.patch("/notes/:index", (req, res) => {
    const index = req.params.index
    const {title} = req.body
    notes[index].title = title
    res.status(200).json({
        message: 'Note updated successfully'
    }) 
})

app.delete("/notes/:index", (req, res) => {
    const index = req.params.index
    delete notes[index]
    res.status(200).json({
        message: 'Note deleted successfully'
    }) 
})

module.exports = app;
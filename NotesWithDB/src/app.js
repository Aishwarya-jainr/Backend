const express = require('express');
const noteModel = require('./models/note.model');

const app = express();
app.use(express.json());

app.post('/notes', async (req, res) => {
    const {title , content} = req.body
    await noteModel.create({
        title , content
    })
    res.status(201).json({
        message: 'Note created successfully'
    })
})

app.get('/notes', async (req, res) => {

    // Find() method returns array of objects and when there is no element(data) in the database, it returns an empty array
    const notes = await noteModel.find();     

    // FindOne() method returns a single object(or multiple by specifing the data we want) and if there is no element(data) in the database, it returns null
    // const notes = await noteModel.findOne({
    //     title:"title1"
    // });

    res.status(200).json({
        message: 'Notes fetched successfully',
        notes
    })
})

app.delete('/notes/:id',async(req,res)=>{
    const id = req.params.id
    // DeleteOnd() method deleted the first data matching the id (or the condition we mention)
    // DeleteMany() deletes all matching data but if runs without any filter then deletes all data from the database itself
    await noteModel.findOneAndDelete({
        _id:id
    })

    res.status(200).json({
        message: 'Note deleted successfully'
    })
})


app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id;
    const { title} = req.body;
    await noteModel.findOneAndUpdate({ _id: id } , { title });

    res.status(200).json({
        message: 'Note updated successfully'
    });
})
module.exports = app;
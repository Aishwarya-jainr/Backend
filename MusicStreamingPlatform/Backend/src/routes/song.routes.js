const express = require('express');
const router = express.Router();
const songModel = require('../models/song.model');
const uploadFile = require('../services/storage.services');
const multer = require('multer');

router.post('/songs' , uploadFile.single('audio'), async(req,res)=>{
    const buffer = req.file.buffer;
    const base64File = Buffer.from(buffer).toString(" base64");
    const result = await uploadFile(base64File , 'Hello')

    console.log(result)

})

module.exports = router;
const express = require('express');
require('dotenv').config();
const app = express();
const connectToDB = require('./src/db/db');
connectToDB();
const noteModel = require('./src/models/notes.model');

app.use(express.json());
// Create Operation
app.post('/note', async (req,res) =>{
        const {title, content} = req.body;
       const note = await noteModel.create({title,content});
        console.log(title, content);
        res.json({
            message : "note is created sucessfully ",
            note
        })
})

app.get('/note', async (req, res) => {
    const notes = await noteModel.find();
    res.json({
        message:  "notes are fetches sucessfully",
        notes
    })
})
app.delete('/note/:id', async (req,res) => {
    const noteId  = req.params.id;
    await noteModel.findOneAndDelete(noteId);
    res.json({
        message : "note is deleted sucessfully"
    })
})
app.patch('/note/:id', async(req, res) => {
    const noteId = req.params.id;
    const {title} = req.body;
    await noteModel.findOneAndUpdate({_id : noteId},{title : title});
    res.json({
        message : "note is updated sucessfully"
    })

})


app.listen(3000, (req, res) => {
    console.log("server is runing on port 3000");
})
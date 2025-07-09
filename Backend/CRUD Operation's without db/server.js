const express = require('express');

const app = express();

const notes = [];
app.use(express.json());
// first get responce 
app.get('/', (req,res) => {
    res.json({
        "message" : "this is for testing the server"
    })
  
})

// Cretate methode or post note methode;
app.post('/notes', (req,res)=>{
    console.log(req.body);
    notes.push(req.body);
      res.json({
        "message" : "Note created successfully"
    })
    
})

// Read method or get notes method
app.get('/notes',(req,res)=>{
    res.json(notes)
})

// Delete method or delete notes method
app.delete('/notes/:idx', (req,res) => {
    const index = req.params.idx;
     delete notes[index];
    res.json({
        "message" : "note deleted successfully"
    })
})

// Update method or patch notes method
app.patch('/notes/:idx',  (req, res) =>{
    const index = req.params.idx;
    const {title} = req.body;
    notes[index].title = title;
    res.json({
        "message" : "note updated sucessfully"
    })
})


app.listen(3000,(req, res) =>{
    console.log("server is running on port 3000");
})
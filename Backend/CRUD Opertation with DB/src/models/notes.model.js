const mongoose = require('mongoose');

// created notes schema here 
const noteSchema = new mongoose.Schema({
    title : String,
    content : String
})
// created notes model here 
const noteModel = mongoose.model('note',noteSchema);
module.exports = noteModel;
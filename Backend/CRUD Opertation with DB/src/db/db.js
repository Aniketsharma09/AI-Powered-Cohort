const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect('mongodb+srv://aniket180091500009:6lt1RM7ypT5TNBvR@cluster0.dfzaukk.mongodb.net/cohort').then(()=>{
        console.log("connected to DataBase");
    })
}
module.exports = connectToDB;
const mongoose = require('mongoose');   //ODM(Object Data Modeling) -> mongodb 모델링


const ApodSchema = new mongoose.Schema({

    date:String,
    title:String,
    url:String,
    explanation:String,


});

module.exports = mongoose.model('Apod', ApodSchema);

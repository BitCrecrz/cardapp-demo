const mongoose = require('mongoose')
const { Schema } = mongoose;

const CardSchema = new Schema({
    Name:{
        type: String,
        required: true
    },
    Birthdate:{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Schema', CardSchema)
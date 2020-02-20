var mongoose = require('mongoose');

var moduleShema = new mongoose.Schema({
    type: String,
    coordinates: [[]]
})


module.exports = moduleShema;
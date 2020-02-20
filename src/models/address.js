var mongoose = require('mongoose');

var moduleSchema = mongoose.Schema({
    type:        String,
    coordinates: [Number]
});

module.exports = moduleSchema;
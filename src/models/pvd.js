var mongoose = require('mongoose');

var CoverageArea = require('./coverage-area');
var Address = require('./address');

var moduleSchema = mongoose.Schema({
    id:           {type: Number, required: true },
    tradingName:  {type: String, required: true },
    ownerName:    {type: String, required: true },
    document:     {type: String, required: true },
    coverageArea: {type: CoverageArea, required: true },
    address:      {type: Address, required: true }
});

module.exports = mongoose.model('pdv',moduleSchema);
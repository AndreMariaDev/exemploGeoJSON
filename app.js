var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var monogoose =  require('mongoose');

var pdvCtrl = require('./src/controllers/pvd');


var dbString = `mongodb://127.0.0.1:27017/geoApp`;
monogoose.connect(dbString,{ useNewUrlParser: true, useUnifiedTopology: true });

var db =  monogoose.connection;

db.on('error',console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));
//app.use(express.json());

app.listen(3000,(req,res)=>{
    console.log('App start!');
    pdvCtrl(app);
})
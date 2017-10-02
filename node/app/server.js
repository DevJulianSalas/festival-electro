const express = require('express');
const routes = require('./routes/user.route');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// debug
//const debug = require('debug')('express--mongoose-es6-rest-api:index')
// connection mongose

mongoose.connect('mongodb://mongodb/festival_electro', function(err, res){
  if(err) throw err;
  console.log("Connect to database");
});

app.use('/api', routes);


app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});






module.exports = app;

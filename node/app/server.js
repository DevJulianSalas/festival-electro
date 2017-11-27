const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const debug = require('debug')
const routerUser = require('./routes/user.route');
const routeEvent = require('./routes/event.route');
const routeRegister = require('./routes/register.route')


const app = express();
const log = debug("electrofestival-app*")



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// debug

// connection mongose

mongoose.connect('mongodb://mongodb/festival_electro', function(err, res){
  if(err) throw err;
  console.log("Connect to database");
});


//**************/

// Api-rest //

const urlPath='/api/v1/'
//endpoints
app.use(urlPath, routerUser);
app.use(urlPath.concat('events'), routeEvent);
app.use(urlPath.concat('registers'), routeRegister);

//**************/

app.get('/', function (req, res) {
  console.log(req)
  res.send('Hello World!');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


module.exports = app;

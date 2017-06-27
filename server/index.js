var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
var models = require('./models')

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/eventful', function (req, res) {
  models.users.get()
  .then((result)=>{
    console.log(result);
    res.send(result);
  })
});

app.get('/meetup', function(req, res) {
  res.send('get sucessful at meetup');
});

app.post('', function (req, res) {
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});


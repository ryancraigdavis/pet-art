var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var phoneData = require('./server-assets/information.js');
var http = require('http');
app.use(bodyParser());
app.use(function(req,res,next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

app.use(express.static(__dirname + '/public'));

app.get('/phone', function(req, res){
  var myPhone = phoneData.getChrisPhone();
  res.send(myPhone);
});

// app.get('/phone', function(req, res){
//   res.setHeader('Content-Type', 'application/json');
//   var hotelUrl = [];
//   hotelUrl = req._parsedUrl.href.split('');
//   hotelUrl.splice(0,14);
//   hotelUrl = hotelUrl.join('');
//   request(hotelUrl, function(error,response,body){
//     var apiResponse = body;
//     res.send(apiResponse);
//   }); 

app.listen(80);
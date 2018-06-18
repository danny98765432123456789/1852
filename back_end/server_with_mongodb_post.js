var mongoose = require('mongoose');
var express = require('express');
var app = express();
// var Packet = require('./model/Packet');
mongoose.connection.openUri('mongodb://localhost/1852');
var mqtt = require('mqtt');
var bodyParser = require('body-parser');
var client = mqtt.connect('mqtt://test.mosquitto.org');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var reservation_online = require('./model/reservation_online');


// app.all('*', function(req, res, next) {
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//    res.header('Access-Control-Allow-Headers', 'Content-Type');
//    next();
//  });

app.use(express.static('../front_end'));


app.get('/', function(request, response) {
  response.send("Hello World!");
});

app.get('/reservation_online', function(request, response) {
  reservation_online.find(function(err, result) {
    response.send(result);
  })
});

// app.get('/packets/:src', function(request, response) {
//   Packet.find({
//     src: request.params.src
//   }, function(err, result) {
//     response.send(result);
//   })
// });
//
// app.get('/rssi', function(request, response) {
//   var myQuery = {};
//   if (request.query.src) {
//     myQuery.src = request.query.src;
//   }
//   if (request.query.dest) {
//     myQuery.dest = request.query.dest;
//   }
//
//   Packet.find(myQuery, function(err, result) {
//     var rssiList = result.map(function(packet) {
//       // return packet.rssi;
//       return [packet.rssi, new Date(packet.timestamp)];
//     });
//     response.send(rssiList);
//   })
// });
//
// app.get('/cmd', function(request, response) {
//   Command.find({
//   }, function(err, result) {
//     response.send(result);
//   })
// });
//
app.post('/reservation_online', parseUrlencoded, function(request, response) {
  var json = {
    name: request.body.name,
    phone: request.body.phone,
    email: request.body.email,
    date: request.body.date,
    // time: request.body.time,
    adult:request.body.adult,
    kid:request.body.kid,
    note: request.body.note
  }
  console.log(request.body);
  console.log(json);
  // client.publish('NXG/moocs/gateway_id/student_name/cmd', JSON.stringify(jsonCMD));

  json.timestamp = +new Date();
  newjson = new reservation_online(json);
  newjson.save(function(err) {
    if (!err) {
      response.send("Success!");
    }
    else{
      console.log(err);
    }
  });
})


app.listen(3000, function(request, response) {
  console.log('Listening on port 3000!');
});

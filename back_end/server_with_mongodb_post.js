var mongoose = require('mongoose');
var express = require('express');
var app = express();
// var Packet = require('./model/Packet');
mongoose.connection.openUri('mongodb://localhost/1852');
var mqtt = require('mqtt');
var bodyParser = require('body-parser');
var client = mqtt.connect('mqtt://test.mosquitto.org');
var parseUrlencoded = bodyParser.urlencoded({
  extended: false
});
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

app.get('/reservation_online/:date', function(request, response) {
  let TOTAL_PEOPLE_IN_A_TIME_INTERVAL = 20;
  reservation_online.find({
    date: request.params.date
  }, function(err, result) {
    let total = {
      "time1130": 0,
      "time0100": 0,
      "time0530": 0,
      "time0700": 0
    };
    for (var i = 0; i < result.length; i++) {
      add_total_people(total, result[i].time, result[i].adult, result[i].kid);
    }
    // console.log(total);
    // let remaining = TOTAL_PEOPLE_IN_A_TIME_INTERVAL - total;
    // if (remaining > 0) {
    //   let temp = [remaining];
    // response.send(temp);
    // } else {
    total.time1130 = 20 - total.time1130;
    total.time0100 = 20 - total.time0100;
    total.time0530 = 20 - total.time0530;
    total.time0700 = 20 - total.time0700;
    let temp = [total];
    response.send(temp);
    // }
  })
});

function add_total_people(object, date, adult, kid) {
  if (date == "1130") {
    if (adult == 'One') {
      object.time1130 += 1;
    }
    if (adult == 'Two') {
      object.time1130 += 2;
    }
    if (adult == 'Three') {
      object.time1130 += 3;
    }
    if (adult == 'Four') {
      object.time1130 += 4;
    }
    if (adult == 'Five') {
      object.time1130 += 5;
    }

    if (kid == 'Zero') {
      object.time1130 += 5;
    }
    if (kid == 'One') {
      object.time1130 += 1;
    }
    if (kid == 'Two') {
      object.time1130 += 2;
    }
    if (kid == 'Three') {
      object.time1130 += 3;
    }
    if (kid == 'Four') {
      object.time1130 += 4;
    }
  }
  if (date == "0100") {
    if (adult == 'One') {
      object.time0100 += 1;
    }
    if (adult == 'Two') {
      object.time0100 += 2;
    }
    if (adult == 'Three') {
      object.time0100 += 3;
    }
    if (adult == 'Four') {
      object.time0100 += 4;
    }
    if (adult == 'Five') {
      object.time0100 += 5;
    }

    if (kid == 'Zero') {
      object.time0100 += 5;
    }
    if (kid == 'One') {
      object.time0100 += 1;
    }
    if (kid == 'Two') {
      object.time0100 += 2;
    }
    if (kid == 'Three') {
      object.time0100 += 3;
    }
    if (kid == 'Four') {
      object.time0100 += 4;
    }
  }
  if (date == "0530") {
    if (adult == 'One') {
      object.time0530 += 1;
    }
    if (adult == 'Two') {
      object.time0530 += 2;
    }
    if (adult == 'Three') {
      object.time0530 += 3;
    }
    if (adult == 'Four') {
      object.time0530 += 4;
    }
    if (adult == 'Five') {
      object.time0530 += 5;
    }

    if (kid == 'Zero') {
      object.time0530 += 5;
    }
    if (kid == 'One') {
      object.time0530 += 1;
    }
    if (kid == 'Two') {
      object.time0530 += 2;
    }
    if (kid == 'Three') {
      object.time0530 += 3;
    }
    if (kid == 'Four') {
      object.time0530 += 4;
    }
  }
  if (date == "0700") {
    if (adult == 'One') {
      object.time0700 += 1;
    }
    if (adult == 'Two') {
      object.time0700 += 2;
    }
    if (adult == 'Three') {
      object.time0700 += 3;
    }
    if (adult == 'Four') {
      object.time0700 += 4;
    }
    if (adult == 'Five') {
      object.time0700 += 5;
    }

    if (kid == 'Zero') {
      object.time0700 += 5;
    }
    if (kid == 'One') {
      object.time0700 += 1;
    }
    if (kid == 'Two') {
      object.time0700 += 2;
    }
    if (kid == 'Three') {
      object.time0700 += 3;
    }
    if (kid == 'Four') {
      object.time0700 += 4;
    }
  }
}
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
    // date: request.body.date,
    // // time: request.body.time,
    // adult:request.body.adult,
    // kid:request.body.kid,
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
    } else {
      console.log(err);
    }
  });
})


app.listen(3000, function(request, response) {
  console.log('Listening on port 3000!');
});

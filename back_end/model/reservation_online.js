var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reservation_online = new Schema({
  name: String,
  phone: String,
  email: String,
  date:String,
  time:String,
  adult:String,
  kid:String,
  note: String,
  timestamp: Number,
  gender:Number
}, {
  versionKey: false
});

module.exports = mongoose.model('reservation_online', reservation_online);

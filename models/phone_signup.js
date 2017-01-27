// db is mongoose
var db = require('../config/db')

var schema = new db.Schema(
  { email: {type: String, required: true, unique: true} },
  { date: {type: String} },
  { collection: 'phone_signups' }
)

var Phone = db.model('Phone', schema)

module.exports = Phone
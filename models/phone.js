// db is mongoose
var db = require('../config/db')
var message
var schema = new db.Schema({ 
  phone: {
    type: String,
    required: [true, 'Phone number required'],
    unique: true
    // validate: {
    //   validator: function(v) {
    //     return !! /\D/g.test(v) //&& v.length != 10
    //   },
    //   message: 'Invalid Phone Number'
    // }
  },
  date: {type: Date, default: Date.now}
})

var Phone = db.model('Phone', schema, 'phone_signups')

module.exports = Phone
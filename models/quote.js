// db is mongoose
var db = require('../config/db')
var message
var schema = new db.Schema({ 
  text: {
    type: String,
    required: [true, 'Quotation Text Is Required'],
    unique: true
  },
  author: {
    type: String,
    default: 'anonymous'
  },
  date: {
    type: Date,
    default: Date.now
  },
  used: {
    type: Boolean,
    default: false
  }
})

var Quote = db.model('Quote', schema, 'quotes')

module.exports = Quote
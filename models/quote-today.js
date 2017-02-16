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
  }
})

var QuoteToday = db.model('QuoteToday', schema, 'today')

module.exports = QuoteToday
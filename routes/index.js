var express = require('express')
var router = express.Router()
var QuoteToday = require('../models/quote-today')

router.get('/', function(req, res, next) {
  var quote

  QuoteToday.find()
    .exec(function(err, quote) {
      if (err) {
        return next(err)
      }
      if (quote) {
        quote = quote[0]
        var author = quote.author.split(' ')
        var term = ''
        for (word of author) {
          term += word + '+'
        }
        term = term.slice(0, -1)
      }
      res.render('index', { 
        title: 'Daily Running Inspiration',
        quote: quote.text,
        author: quote.author,
        search: 'https://www.google.com/search?q=' + term
      })
    })
})

module.exports = router

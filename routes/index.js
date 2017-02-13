var express = require('express')
var router = express.Router()
var Quote = require('../models/quote')

router.get('/', function(req, res, next) {
  var quote

  Quote.find()
    .exec(function(err, quotes) {
      if (err) return next(err)
      if (quotes[0]) quote = quotes[0]
      var author = quote.author.split(' ')
      var term = ''
      for (word of author) {
        term += word + '+'
      }
      term = term.slice(0, -1)
      res.render('index', { 
        title: 'Daily Running Inspiration',
        quote: quote.text,
        author: quote.author,
        search: 'https://www.google.com/search?q=' + term
      });
    })

  //var quote = 'Years ago, women sat in kitchens drinking coffee and discussing life.'
  //            + ' Today, they cover the same topics while they run.'
  //var author = 'Joan Benoit Samuelson'
});

module.exports = router

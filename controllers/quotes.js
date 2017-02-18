var Quote      = require('../models/quote')
var QuoteToday = require('../models/quote-today')
var router     = require('express').Router()

// get all quotes
router.get('/quotes.json', function(req, res, next) {
  Quote.find()
    .exec(function(err, quotes) {
      if (err) return next(err)
      res.json(quotes)
    })
})

// get old (used) quotes
router.get('/usedQuotes.json', function(req, res, next) {
  Quote.find({used: true})
    .exec(function(err, quotes) {
      if (err) return next(err)
      res.json(quotes)
    })
})

// get today's quote
router.get('/today.json', function(req, res, next) {
  QuoteToday.find()
    .exec(function(err, today) {
      if (err) return next(err)
      res.json(today)
    })
})



module.exports = router
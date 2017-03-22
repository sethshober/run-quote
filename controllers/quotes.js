'use strict'

const Quote      = require('../models/quote')
const QuoteToday = require('../models/quote-today')
const router     = require('express').Router()

// get all quotes
router.get('/quotes.json', (req, res, next) => {
  Quote.find()
    .exec((err, quotes) => {
      if (err) return next(err)
      res.json(quotes)
    })
})

// get old (used) quotes
router.get('/usedQuotes.json', (req, res, next) => {
  const query = {used: true}
  Quote.find(query)
    .exec((err, quotes) => {
      if (err) return next(err)
      res.json(quotes)
    })
})

// get today's quote
router.get('/today.json', (req, res, next) => {
  QuoteToday.find()
    .exec((err, today) => {
      if (err) return next(err)
      res.json(today)
    })
})

// get random quote
router.get('/random.json', (req, res, next) => {
  Quote.count()
    .exec((err, count) => {
      if (err) return next(err)
      let r = Math.floor(Math.random() * count)
      Quote.find().limit(1).skip(r)
        .exec((err, quote) => {
          if (err) return next(err)
          res.json(quote)
        }) 
    })
  
})


module.exports = router
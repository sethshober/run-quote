var Quote = require('../models/quote')
  , router = require('express').Router()

// get a quote
router.get('/quotes', function(req, res, next) {
  Quote.find()
    .exec(function(err, quotes) {
      if (err) return next(err)
      res.json(quotes)
    })
})

module.exports = router
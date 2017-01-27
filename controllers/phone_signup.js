
var Phone = require('../models/phone_signup')
  , router = require('express').Router()


// get all the emails
router.get('/phone-numbers', function(req, res, next) {
  Phone.find()
    .exec(function(err, numbers) {
      if (err) return next(err)
      res.json(numbers)
    })
})

// create email
router.post('/phone-signup', function(req, res, next) {
  console.log(req.body.phone)
  var number = new Phone({phone: req.body.phone})
  console.log(phone)
  phone.save(function(err) {
    if (err) console.log(err); return next(err)
    res.sendStatus(201)
  })
})


module.exports = router
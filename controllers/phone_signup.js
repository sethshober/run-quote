var Phone = require('../models/phone')
var router = require('express').Router()


// get all the numbers
router.get('/phone-numbers', function(req, res, next) {
  Phone.find()
    .exec(function(err, numbers) {
      if (err) return next(err)
      res.json(numbers)
    })
})

// create number
// router.get('/phone-signup', function(req, res, next) {
//   var phoneNumber = req.query.phone
//   validateInput(phoneNumber)
//   function validateInput(number) {
//     var invalidCharacters = number.match(/\D/g) // matches non-numbers
//     if (invalidCharacters || number.length !== 10) { // failure
//       return res.sendStatus(400)
//     } else { // success, save to mongo
//       var phone = new Phone({phone: number})
//       phone.save(function(err) {
//         if (err) {
//           if (err.name === 'MongoError' && err.code === 11000) { // Duplicate username
//             return res.status(500).send({ success: false, message: 'User already exists!' });
//           } else {
//             return next(err) // forward error to handler
//           }
//         } else { // successfully created
//           return res.sendStatus(201)
//         }
//       })
//     }
//   }
// })


module.exports = router
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // only static for now
  var title = 'Daily Running Inspiration'
  var quote = 'Years ago, women sat in kitchens drinking coffee and discussing life.'
              + ' Today, they cover the same topics while they run.'
  var author = 'Joan Benoit Samuelson'

  res.render('index', { 
    title: title,
    quote: quote,
    author: author
  });
});

module.exports = router;

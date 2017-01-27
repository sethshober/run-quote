var mongoose = require('mongoose')
  , db       = mongoose.connection
  , uri      = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds133249.mlab.com:33249/run-quote/run-quote'
  , uriLocal = 'mongodb://localhost:27017/run-quote-test'

mongoose.connect(uri , function(){
  db.on('error', console.error.bind(console, 'connection error:')) 
  db.once('open', function(){
    console.log('Connected to "run-quote"!')
  })
})

module.exports = mongoose
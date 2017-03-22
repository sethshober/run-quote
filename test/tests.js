var assert = require('assert')
var expect = require('chai').expect
var mongoose = require('mongoose')
var Phone = require('../models/phone')

describe('phone', function() {
  it('should be invalid if number is empty', function(done) {
    var phone = new Phone()

    phone.validate(function(err) {
        expect(err.errors.phone).to.exist
        done()
    })
  })

  // it('should error if number is invalid', function(done) {
  //   var phone = new Phone({phone: '1233sjkk'})
  //   var error
  //   phone.validateSync()
  //   assert.equal(error.errors['phone'].message,
  //     'Invalid Phone Number');

  //   phone.validate(function(err) {
  //       expect(err.errors.phone).to.exist
  //       done()
  //   })
  // })
})


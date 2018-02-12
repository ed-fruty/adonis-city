'use strict'

class LoginUserValidator {
  get rules () {
    return {
      'email': 'required|email',
      'password': 'required|min:6'
    }
  }
}

module.exports = LoginUserValidator

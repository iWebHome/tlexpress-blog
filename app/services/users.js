'use strict'
const BaseService = require('./base')

class UserService extends BaseService {
  constructor (model) {
    super(model)
    this.model = 'User'
  }

  async test (params) {
    this.body = 2
    const result = super.getUserByName(params)
    return result
  }
}

module.exports = new UserService()

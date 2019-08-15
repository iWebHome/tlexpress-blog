'use strict'
const Services = require('../services')
class UsersController {
  async test (req, res) {
    const result = await Services.users.test(req.body.name)
    res.sendOk(result)
  }
}

module.exports = new UsersController()

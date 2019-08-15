'use strict'
const Services = require('../services')
const {auth, format, resHandler, paramsHandler} = require('../myutil')

class UsersController {

  async create(req, res) {
    try {
      const result = await Services.users.addUser(req.body)
      res.sendOk(result)
    } catch (error) {
      const errorRes = resHandler.getErrorRes(error)
      res.sendErr(errorRes)
    }
  }
  
  async login(req, res) {
    try {
      const result = await Services.users.login(req.body)
      result.token = auth.createToken(result._id)
      res.sendOk(result)
    } catch (error) {
      const errorRes = resHandler.getErrorRes(error)
      res.sendErr(errorRes)
    }
  }

  async test (req, res) {
    const result = await Services.users.test(req.body.name)
    res.sendOk(result)
  }
}

module.exports = new UsersController()

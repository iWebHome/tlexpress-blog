'use strict'

const BaseController = require('./base')
class TestController extends BaseController {
  constructor (modelName) {
    super(modelName)
    this.modelName = 'User'
    this.testResponse = this.testResponse.bind(this)
  }

  async testResponse (req, res) {
    try {
      const result = await super.test()
      res.send({ data: result })
    } catch (error) {
      res.sendErr(error)
    }
  }
}
module.exports = new TestController()

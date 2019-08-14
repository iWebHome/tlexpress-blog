'use strict'

const Controllers = require('../controllers')
const middleware = require('../middlewares')

module.exports = function (app) {
  app.post('/users', Controllers.users.create)

  app.use(middleware.notFind)
}
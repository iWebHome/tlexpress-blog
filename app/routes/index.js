'use strict'

const Controllers = require('../controllers')
const middleware = require('../middlewares')
const middlewaresArr = [middleware.verifyToken, middleware.log]

module.exports = function (app) {
  app.use(middleware.resExtend)
  app.post('/users/test', Controllers.users.test)
  app.use(middlewaresArr)
  app.route('/test')
    .post(Controllers.test.testResponse)
}

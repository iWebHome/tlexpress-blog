'use strict'

const Controllers = require('../controllers')
const middleware = require('../middlewares')
const middlewaresArr = [middleware.verifyToken, middleware.log]

module.exports = function (app) {
  app.use(middleware.resExtend)
  app.post('/users/test', Controllers.users.test)
  app.post('/user/login', Controllers.users.login)
  app.post('/user', Controllers.users.create)
  app.use(middlewaresArr)
  // require('./user')(app)
  app.route('/test')
    .post(Controllers.test.testResponse)
}

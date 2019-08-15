'use strict'

const Controllers = require('../controllers')

module.exports = (app) => {
  app.route('/user')
    .get(Controllers.users.list)
  app.route('/user/:_id')
    .get(Controllers.users.detail)
    .put(Controllers.users.update)
    .delete(Controllers.users.destroy)
  app.route('/userbyname')
    .post(Controllers.users.userByName)
  app.route('/userbyid/:_id')
    .post(Controllers.users.userById)
}

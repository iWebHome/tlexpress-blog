'use strict'

const controllers = {}
controllers.test = require('./test')
controllers.users = require('./users')
controllers.category = require('./category')
controllers.article = require('./article')

module.exports = controllers

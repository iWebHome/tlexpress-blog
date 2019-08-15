'use strict'

const request = require('supertest')
const assert = require('assert')
const app = require('../../server')

describe('test tlexpress-frame http request', () => {
  const server = app.listen(9000)
  describe('test user module', () => {
    const createUser = {
      name: 'test001',
      password: '123456'
    }
    it('test /users (post) create ', async () => {
      const response = await request(server)
        .post('/users')
        .send(createUser)
        .set('Accept', 'application/json')
        .expect(200)
      assert.deepEqual(0, response.body.errorCode)
    })
  })
})

'use strict'

const request = require('supertest')
const assert = require('assert')
const app = require('../../server')

describe('test tlexpress-frame http request', () => {
  const server = app.listen(9000)
  describe('test user module', () => {
    const createUser = {
      name: 'test001',
      password: '123456',
      age: 30,
      nickName: 'test',
      sex: 'male',
      company: 'TEST公司',
      website: 'test.com',
      instruction: 'test~！',
      role: 'ordinary users'
    }
    it('test /user (post) create ', async () => {
      const response = await request(server)
        .post('/user')
        .send(createUser)
        .set('Accept', 'application/json')
        .expect(200)
      assert.deepStrictEqual(0, response.body.errorCode)
    })
  })
})

'use strict'

module.exports = {
  // 密码盐
  saltKey: 'tlexpress_frame',
  // jwt实现token认证的secret
  jwtSecret: 'tlexpress_jwt',
  port: process.env.PORT || 5000,
  website: '127.0.0.1:5000',
  // mongodb数据库配置
  dbConfig: {
    URL: 'mongodb://127.0.0.1:27017/tlexpress-blog',
    DB: 'express-blog',
    HOST: '127.0.0.1',
    PORT: 27017,
    USERNAME: 'lichuanjun',
    PASSWORD: 'lichuanjun'
  },
  mongooseDebug: false,
  adminConfig: {
    name: 'admin',
    password: '123456',
    role: 'ordinary users'
  }
}

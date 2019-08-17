'use strict'
const crypto = require('crypto')

module.exports = {
  // // 密码加密
  // encrypted (password, saltKey) {
  //   const cipher = crypto.createCipher('bf', saltKey)
  //   let newPsd = ''
  //   newPsd += cipher.update(password, 'utf8', 'hex')
  //   newPsd += cipher.final('hex')
  //   return newPsd
  // },
  // // 密码解密
  // decrypted (password, saltKey) {
  //   const decipher = crypto.createDecipher('bf', saltKey)
  //   let oldPsd = ''
  //   oldPsd += decipher.update(password, 'hex', 'utf8')
  //   oldPsd += decipher.final('utf8')
  //   return oldPsd
  // },
  // 密码对比
  checkPasswd (inputPasswd, userPasswd) {
    let result
    if (inputPasswd === userPasswd) {
      result = true
    } else {
      result = false
    }
    return result
  },
  // 密码加密
  encrypted (src, key, iv) {
    let sign = ''
    const asekey = Buffer.from(key, 'utf8')
    const aseiv = Buffer.from(iv, 'utf8')
    const cipher = crypto.createCipheriv('aes-128-cbc', asekey, aseiv)
    sign += cipher.update(src, 'utf8', 'hex')
    sign += cipher.final('hex')
    return sign
  },
  // 密码解密
  decrypted (sign, key, iv) {
    let src = ''
    const asekey = Buffer.from(key, 'utf8')
    const aseiv = Buffer.from(iv, 'utf8')
    const cipher = crypto.createDecipheriv('aes-128-cbc', asekey, aseiv)
    src += cipher.update(sign, 'hex', 'utf8')
    src += cipher.final('utf8')
    return src
  }

}

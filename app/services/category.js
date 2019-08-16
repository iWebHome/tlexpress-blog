'use strict'

const BaseService = require('./base')
const mdb = require('../models')
const { resHandler } = require('../myutil')

class CategoryService extends BaseService {
  constructor (model) {
    super(model)
    this.model = 'ArticleCategory'
  }

  async addCategory (data) {
    try {
      const query = {
        userId: data.userId,
        name: data.name
      }
      const findRes = await super.findOne(query)
      if (findRes) {
        const errorMsg = 'CATEGORY_HAS_EXITS'
        throw errorMsg
      }
      const result = await mdb.ArticleCategory.create(data)
      return result
    } catch (error) {
      const errorMsg = 'CATEGORYNAME_ADD_FAILED'
      throw errorMsg
    }
  }

  async editById (id, params) {
    try {
      const findRes = await super.findById(id)
      if (!findRes) {
        const errorMsg = 'CATEGORY_NOT_EXITS'
        throw errorMsg
      }
      await super.updateById(id, params)
      const result = resHandler.getSuccessMsg('CATEGORY_UPDATE_SUCCESS')
      return result
    } catch (error) {
      const errorMsg = 'CATEGORYNAME_UPDATE_FAILED'
      throw errorMsg
    }
  }

  async getCategoryById (id) {
    try {
      const result = await mdb.ArticleCategory.findById(id)
        .populate([{ path: 'userId', select: '-password' }])
      if (!result) {
        const errorMsg = 'CATEGORY_NOT_EXITS'
        throw errorMsg
      }
      return result
    } catch (error) {
      const errorMsg = 'CATEGORYNAME_QUERY_FAILED'
      throw errorMsg
    }
  }

  async getCategoryList (params) {
    try {
      const result = await super.list(params)
      return result
    } catch (error) {
      const errorMsg = 'CATEGORYNAMELIST_FIND_FAILDE'
      throw errorMsg
    }
  }
}

module.exports = new CategoryService()

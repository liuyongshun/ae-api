'use strict';

const Service = require('egg').Service;

module.exports = app => {
  class UserMsg extends Service {

    async login(curr, isExist) {
      const { ctx } = this;
      if (isExist) {
        if (curr.password === isExist.password) {
          return ctx.service.success.dealSuccess('登陆成功!');
        }
        return ctx.service.error.dealError('密码输入错误');
      }
      return ctx.service.error.dealError('用户不存在');
    }

    async register(curr, isExist) {
      const { ctx } = this;
      if (isExist && isExist.length > 0) {
        return ctx.service.error.dealError('用户名已存在');
      }
      const add = ctx.model.User(curr);
      add.save();
      return ctx.service.success.dealSuccess('注册成功!');
    }
  }
  return UserMsg;
};

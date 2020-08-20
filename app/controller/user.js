'use strict';

const Controller = require('egg').Controller;

const registerRule = {
  userName: { type: 'string', required: true, allowEmpty: false },
  password: { type: 'string', required: true, allowEmpty: false },
  againPassword: { type: 'string', required: true, allowEmpty: false },
  mobile: { type: 'string', required: true, allowEmpty: false },
  verifyCode: { type: 'string', required: true, allowEmpty: false },
};

const loginRule = {
  userName: { type: 'string', required: true, allowEmpty: false },
  password: { type: 'string', required: true, allowEmpty: false },
};

class UserMsg extends Controller {

  async login() {
    const { ctx } = this;
    ctx.validate(loginRule);
    const currBody = ctx.request.body;
    const res = {};
    const queryData = await this.ctx.model.User.findOne({ userName: currBody.userName });
    const resulet = await ctx.service.user.login(currBody, queryData);
    Object.assign(res, resulet);
    ctx.body = res;
  }

  async register() {
    const { ctx } = this;
    ctx.validate(registerRule);
    const currBody = ctx.request.body;
    const res = {};
    const queryExist = await this.ctx.model.User.find({ userName: currBody.userName });
    const resulet = await ctx.service.user.register(currBody, queryExist);
    Object.assign(res, resulet);
    ctx.body = res;
  }
}

module.exports = UserMsg;

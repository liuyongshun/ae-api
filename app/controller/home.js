'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async notFound() {
    const { ctx } = this;
    await ctx.render('common/500');
  }
}

module.exports = HomeController;

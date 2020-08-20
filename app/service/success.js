'use strict';

const Service = require('egg').Service;

module.exports = () => {
  class Success extends Service {
    dealSuccess(data, message) {
      return {
        code: 0,
        data: data || true,
        message: message || '',
        errors: '',
      };
    }
  }
  return Success;
};

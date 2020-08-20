'use strict';

const Service = require('egg').Service;

module.exports = app => {
  class Errors extends Service {
    dealError(message, error, code) {
      return {
        code: code || 1,
        data: null,
        message: message || '',
        errors: error,
      };
    }
  }
  return Errors;
};

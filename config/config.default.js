/* eslint valid-jsdoc: "off" */
'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '_1592910134565_7229';
  config.middleware = [ 'errorHandler' ];
  // 只对 /api 前缀的 url 路径生效
  config.errorHandler = {
    match: '/api',
  };
  // add your user config here
  const userConfig = {};

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.onerror = {
    // 线上页面发生异常时，重定向到这个页面上
    errorPageUrl: '/500',
  };

  config.mongoose = {
    url: 'mongodb+srv://liuyongshun:kuaile0716@cluster0-pmxhd.mongodb.net/react?retryWrites=true&w=majority',
    // url: 'mongodb://localhost:27017/ae_platform',
    server: {
      poolSize: 40,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};


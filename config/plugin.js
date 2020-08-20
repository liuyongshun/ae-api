'use strict';

/** @type Egg.EggPlugin */
exports.validate = {
  enable: true,
  package: 'egg-validate',
};

// 解决跨越问题
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

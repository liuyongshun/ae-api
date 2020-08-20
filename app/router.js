'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/500', controller.home.notFound);
  router.post('/api/v1/register', controller.user.register);
  router.post('/api/v1/login', controller.user.login);
};

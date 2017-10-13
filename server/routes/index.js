const Router = require('koa-router');

module.exports = (app, passport) => {
  const router = new Router({
    prefix: '/api'
  });

  app.use(require('./guide')(router, passport));  
  app.use(require('./author')(router, passport));
}
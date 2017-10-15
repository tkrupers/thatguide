const Router = require('koa-router');
const router = new Router({
  prefix: '/api'
});

module.exports = (app, passport) => {
  const author = require('./author')(router, passport);
  const guides = require('./guide')(router, passport);
  
  app.use(guides.routes());  
  app.use(author.routes());
}
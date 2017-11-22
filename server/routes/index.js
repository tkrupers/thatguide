const Router = require('koa-router');
const router = new Router({
  prefix: '/api'
});

module.exports = (app, passport) => {
  const user = require('./user')(router, passport);
  const author = require('./author')(router, passport);
  const guides = require('./guide')(router, passport);
  
  app.use(user.routes());
  app.use(guides.routes());  
  app.use(author.routes());
}
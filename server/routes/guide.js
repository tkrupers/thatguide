const guide = require('../controller/guide');

const isAuthenticated = (ctx, next) => {
  console.log(ctx.isAuthenticated());
  if (ctx.isAuthenticated()) {
    return next();
  } else {
    ctx.status = 403;
    ctx.body = {
      loggedIn: false
    };
  }
}

module.exports = (router, passport) => {

  router.get('/guides', guide.fetchAll);

  router.get('/guides/:id', guide.findOneById);

  router.post('/guides/new', isAuthenticated, guide.saveGuide);

  router.post('/guides/:id/new-step', isAuthenticated, guide.saveStep);

  return router;
}

const author = require('../controller/author');

module.exports = (router, passport) => {
  router.get('/authors/:id', author.findOneById);

  router.post('/signup', async(ctx, next) => {
    await passport
      .authenticate('local-signup', async function (err, author, info) {
        if (info) {
          ctx.body = info;
          return ctx.throw(401);
        }

        ctx.body = {author};
        return ctx.login(author);
      })(ctx);
  });

  router.post('/login', (ctx, next) => {
    return passport.authenticate('local-login', async function (err, author, info) {
      if (info) {
        ctx.body = info;
        return ctx.throw(401);
      }
      
      ctx.body = {author};
      return ctx.login(author);
    })(ctx);
  });

  router.get('/logout', (ctx, next) => {
    ctx.body = {logout: true};
    return ctx.logout();
  });

  return router;
}
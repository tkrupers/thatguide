module.exports = (router, passport) => {
  router.post('/signup', async(ctx, next) => {
    await passport
      .authenticate('local-signup', async function (err, user, info) {
        if (info) {
          ctx.body = info;
          return ctx.status = 401;
        }

        ctx.body = {
          user
        };
        return ctx.login(user);
      })(ctx);
  });

  router.post('/login', (ctx, next) => {
    return passport.authenticate('local-login', function (err, user, info) {
      console.log(err, user, info);
      if (info && !user) {
        ctx.body = info;
        return ctx.status = 401;
      }

      ctx.body = {
        user
      };
      return ctx.login(user);
    })(ctx);
  });

  router.get('/logout', (ctx, next) => {
    ctx.body = {
      logout: true
    };
    return ctx.logout();
  });

  return router;
}
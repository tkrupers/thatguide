const author = require('../controller/author');

module.exports = (router, passport) => {
  router.get('/authors/:id', author.findOneById);

  router.post('/signup', async(ctx, next) => {
    await passport
      .authenticate('local-signup', async function (err, author, info) {
        if (info) {
          ctx.status = info.status;
          return ctx.body = info;
        }

        await ctx.login(author);
        ctx.body = {
          author: ctx.state.user
        };
      })(ctx);
  });

  router.post('/login', (ctx, next) => {
    return passport.authenticate('local-login', async function (err, author, info) {
      await ctx.login(author);
      ctx.body = {
        _id: ctx.state.user._id
      };
    })(ctx);
  })

  return router;
}
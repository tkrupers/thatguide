const author = require('../controller/author');

module.exports = (router, passport) => {
  router.get('/authors/:id', author.findOneById);

  router.post('/signup', (ctx, next) => {
    return passport.authenticate('local-signup', async function (err, author, info) {
      await ctx.login(author);
      ctx.body = {_id:  ctx.state.user._id};
    })(ctx);
  });

  return router.routes();
}
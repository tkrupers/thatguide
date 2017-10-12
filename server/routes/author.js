const router = require('koa-router')();
const author = require('../controller/author');

module.exports = (passport) => {
  router.get('/authors/:id', author.findOneById);

  router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/'
  }));

  return router;
}